import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useState } from 'react';
import toastr from 'toastr'; // Make sure toastr is installed and imported
import 'toastr/build/toastr.min.css'; // Include toastr CSS

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Validation Function
	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required.';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required.';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = 'Invalid email address.';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required.';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required.';
		}

		return newErrors;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		// Clear error for the field being updated
		if (errors[name]) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: '',
			}));
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		// Validate the form
		const formErrors = validateForm();

		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		setIsSubmitting(true);

		try {
			// Make the API call
			const response = await fetch('http://localhost:8081/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.success) {
				toastr.success(data.message); // Display toastr notification
				// Clear form values after successful submission
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});
			} else {
				toastr.error('Failed to send the message. Please try again.');
			}
		} catch (error) {
			console.error('Error sending message:', error);
			toastr.error('An error occurred. Please try again later.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={onSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					{/* Full Name Input */}
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						name="name"
						id="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.name}
						onChange={handleInputChange}
					/>
					{errors.name && (
						<p className="text-red-500 text-sm mt-1">{errors.name}</p>
					)}

					{/* Email Input */}
					<FormInput
						inputLabel="Email"
						name="email"
						labelFor="email"
						inputType="email"
						id="email"
						inputName="email"
						placeholderText="Your Email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={handleInputChange}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email}</p>
					)}

					{/* Subject Input */}
					<FormInput
						inputLabel="Subject"
						name="subject"
						labelFor="subject"
						inputType="text"
						id="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={handleInputChange}
					/>
					{errors.subject && (
						<p className="text-red-500 text-sm mt-1">{errors.subject}</p>
					)}

					{/* Message Input */}
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							value={formData.message}
							onChange={handleInputChange}
						></textarea>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">{errors.message}</p>
						)}
					</div>

					{/* Submit Button */}
					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={isSubmitting ? 'Sending...' : 'Send Message'}
							type="submit"
							aria-label="Send Message"
							disabled={isSubmitting}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
