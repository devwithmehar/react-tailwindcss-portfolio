// Import images
import Image1 from '../images/portfolioHomeLight.PNG';
import Image2 from '../images/AboutPage.PNG';
import Image3 from '../images/ContactPage.PNG';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const portfolioData = {
	ProjectHeader: {
		title: 'My Portfolio',
		publishDate: 'November 17 2024',
		tags: 'Frontend / Deployment',
        liveLink: "https://dev.sahilmehar.com/"
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Portfolio Homepage',
			img: Image1,
		},
		{
			id: 2,
			title: 'About Me Section',
			img: Image2,
		},
		{
			id: 3,
			title: 'Contact Form Integration',
			img: Image3,
		},
	],
	
	id: 3,
	projectName: 'My Portfolio',
	description:
		'My Portfolio is a full-stack web application built using React for the frontend and Node.js for the backend. It highlights personal projects, skills, and experiences with a sleek, modern design. It features a live backend for seamless communication through integrated forms.',
	features: [
		'Dynamic portfolio grid showcasing personal and professional projects.',
		'Responsive design optimized for desktop, tablet, and mobile devices.',
		'Contact form and Hire Me form integrated with backend email services (AWS SES).',
		'Toastr notifications for success feedback on form submissions.',
		'Dark and light mode support for customizable user experience.',
		'Integrated social media links for user engagement.',
	],
	technologies: {
		backend: ['Node.js', 'Express', 'AWS SES', 'AWS Elastic Beanstalk'],
		frontend: ['React', 'Tailwind CSS', 'JavaScript'],
	},
	deployment: {
		platform: "Amazon S3 and AWS Elastic Beanstalk (Hosted via AWS)",
		steps: [
			"Set up an Amazon S3 bucket and enable public access for hosting the frontend.",
			"Deploy frontend files to the S3 bucket using CodePipeline for CI/CD integration.",
			"Create an Elastic Beanstalk application for deploying the backend.",
			"Set up CodePipeline for backend deployment with GitHub as the source.",
			"Configure environment variables in Elastic Beanstalk for backend email functionality.",
			"Verify the frontend deployment via the S3-hosted endpoint.",
			"Verify the backend API endpoints via the Elastic Beanstalk live link.",
		],
	},
	
	targetAudience: "Developers, recruiters, and clients seeking portfolio examples.",
	futurePlans: [
		"Add a blog section for sharing development insights and tutorials.",
		"Enhance animations using libraries like Framer Motion.",
		"Implement visitor analytics to track portfolio engagement.",
		"Introduce multilingual support to cater to a global audience.",
	],
};
