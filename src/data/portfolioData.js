// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
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
			title: 'Project Showcase Section',
			img: Image2,
		},
		{
			id: 3,
			title: 'Contact Form Integration',
			img: Image3,
		},
	],
	id: 3,
	projectName: "My Portfolio",
	description:
		"My Portfolio is a React-based web application integrated with Tailwind CSS. It highlights personal projects, skills, and experiences with a sleek, modern design. Built with a focus on responsiveness and accessibility, this portfolio showcases expertise in front-end development.",
	features: [
		"Dynamic portfolio grid showcasing personal and professional projects.",
		"Responsive design optimized for desktop, tablet, and mobile devices.",
		"Contact form integrated with email services for seamless communication.",
		"Dark and light mode support for customizable user experience.",
		"Integrated social media links for user engagement.",
	],
	technologies: {
		backend: ["No backend integration (static site deployment)"],
		frontend: ["React", "Tailwind CSS", "JavaScript"],
	},
	deployment: {
		platform: "Amazon S3 (Hosted via AWS)",
		steps: [
			"Set up an Amazon S3 bucket and enable public access for hosting.",
			"Create a CodePipeline in AWS for CI/CD integration.",
			"Deploy files to the S3 bucket using CodePipeline and automate build processes.",
			"Verify the deployment and access the application via the S3-hosted endpoint.",
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
