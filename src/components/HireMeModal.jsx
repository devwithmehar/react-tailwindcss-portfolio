import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { useState } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; 

const selectOptions = [
    'Web Application',
    'Mobile Application',
    'Desktop Application'
];

const HireMeModal = ({ onClose, onRequest }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Web Application', // Default value
        message: '',
    });

    const [errors, setErrors] = useState({});

    // Validation function
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

        if (!formData.message.trim()) {
            newErrors.message = 'Project description is required.';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error for the field being updated
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

        // Send the form data to the API
        try {
            const response = await fetch('http://porfolio-backend-env.eba-gvwg8p74.us-east-1.elasticbeanstalk.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                // Show success notification
				toastr.success(data.message);
                onRequest(data.message); 
                
                setTimeout(() => {
                    onClose(); // Close the modal after showing the notification
                }, 1000);

                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    subject: 'Web Application',
                    message: '',
                });
                setErrors({});
            } else {
                onRequest('Failed to send the request. Please try again.');
            }
        } catch (error) {
            onRequest('An error occurred. Please try again later.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
        >
            {/* Modal Backdrop */}
            <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

            {/* Modal Content */}
            <main className="flex flex-col items-center justify-center h-full w-full">
                <div className="modal-wrapper flex items-center z-30">
                    <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
                        <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                                What project are you looking for?
                            </h5>
                            <button
                                onClick={onClose}
                                className="px-4 font-bold text-primary-dark dark:text-primary-light"
                            >
                                <FiX className="text-3xl" />
                            </button>
                        </div>
                        <div className="modal-body p-5 w-full h-full">
                            <form
                                onSubmit={onSubmit}
                                className="max-w-xl m-4 text-left"
                            >
                                <div>
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        aria-label="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <input
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        aria-label="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div className="mt-6">
                                    <select
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="subject"
                                        name="subject"
                                        aria-label="Project Category"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    >
                                        {selectOptions.map((option) => (
                                            <option
                                                className="text-normal sm:text-md"
                                                key={option}
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-6">
                                    <textarea
                                        className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                        id="message"
                                        name="message"
                                        cols="14"
                                        rows="6"
                                        aria-label="Details"
                                        placeholder="Project description"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <div className="mt-6 pb-4 sm:pb-1">
                                    <button
                                        type="submit"
                                        className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                                        aria-label="Submit Request"
                                    >
                                        <Button title="Send Request" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
                            <button
                                onClick={onClose}
                                type="button"
                                className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                                aria-label="Close Modal"
                            >
                                <Button title="Close" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default HireMeModal;
