// Import images
import Editor from '../images/Editor.PNG';
import Dashboard from '../images/Blog_Dashboard.PNG';
import FutureBlogs from '../images/FutureBlogs.PNG';
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

export const blogPostData = {
	ProjectHeader: {
		title: 'Blog Poster',
		publishDate: 'November 15 2024',
		tags: 'Full Stack Development',
        liveLink: "https://blogpost-by-sahil-g6dwcqa8cagfg8fn.canadacentral-01.azurewebsites.net/"
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Blog Poster Rich Text Editor',
			img: Editor,
		},
		{
			id: 2,
			title: 'Blog Poster Management Dashboard',
			img: Dashboard,
		},
		{
			id: 3,
			title: 'Blog Poster Scheduled Publishing',
			img: FutureBlogs,
		},
	],
	id: 2,
	projectName: "Blog Poster",
	description:
		"Blog Poster is a robust and feature-rich blogging application built using ASP.NET with an N-Tier architecture and repository patterns. It offers users a seamless experience to write, manage, and schedule blogs with an array of powerful features and integrations.",
	features: [
		"Rich Text Editing: Integrated TinyMCE API for an advanced text editor, enabling users to format and style their blogs easily.",
		"Authentication System: Includes Microsoft.AspNetCore.Identity for secure user authentication and role management.",
		"Blog Management: Users can manage blogs, including draft/publish functionality, comments, likes, and scheduled publishing.",
		"Image Storage: Integrated Azure Blob Storage for securely uploading and managing images with blogs.",
		"Database: Utilizes MySQL Server hosted on Azure for scalable data storage.",
		"Real-Time Notifications: Toastr notifications for actions like successful blog creation, updates, or errors.",
	],
	technologies: {
		backend: [
			"ASP.NET Core with N-Tier Architecture",
			"Microsoft.AspNetCore.Identity",
			"Repository Pattern for Data Access",
		],
		frontend: [
			"TinyMCE API for Rich Text Editing",
			"Toastr for Notifications",
			"JavaScript for API Calls",
		],
		database: ["MySQL Server (Hosted on Azure)"],
		cloudStorage: ["Azure Blob Storage for Blog Images"],
	},
	keyEntities: [
		{
			name: "Post",
			fields: ["Id", "Title", "Content", "CategoryId", "ImageUrl", "CreatedDate", "PublishedDate", "IsDraft"],
		},
		{
			name: "Category",
			fields: ["Id", "Name", "CreatedDate"],
		},
		{
			name: "Comment",
			fields: ["Id", "PostId", "UserId", "Content", "CreatedDate"],
		},
		{
			name: "Like",
			fields: ["Id", "PostId", "UserId", "CreatedDate"],
		},
	],
	deployment: {
		platform: "Azure App Services",
		steps: [
			"Update appsettings.json with MySQL connection string and Azure Blob Storage credentials.",
			"Run database migrations using Entity Framework.",
			"Deploy the application using Azure App Services.",
		],
	},
	targetAudience: "Content creators, bloggers, and enterprises needing blog management capabilities.",
	futurePlans: [
		"Add analytics dashboard to track blog performance.",
		"Enable multi-language support for a global audience.",
		"Integrate with email services for blog notifications.",
	],
};
