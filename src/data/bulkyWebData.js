// Import images
import BulkyHome from '../images/BulkyHome.PNG';
import UserManagement from '../images/UserManagement.PNG';
import OrderManagement from '../images/OrderManagement.PNG';


export const bulkyWebData = {
	ProjectHeader: {
		title: 'Bulky Web',
		publishDate: 'November 8 2024',
		tags: 'Full Stack Development',
        liveLink: "https://bulkybook-dotnet-mvc-by-sahil-fef3a6agc8ascah6.canadacentral-01.azurewebsites.net/"
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Bulky Dashboard',
			img: BulkyHome,
		},
		{
			id: 2,
			title: 'User Management View',
			img: UserManagement,
		},
		{
			id: 3,
			title: 'Order Management Interface',
			img: OrderManagement,
		},
	],
	id: 1,
	projectName: "Bulky",
	description:
		"Bulky is an ASP.NET Core MVC application designed for managing products in a book-related inventory system. This application allows users to perform CRUD operations on various inventory items such as categories, products, and more. It is a full-stack application that integrates backend logic with a frontend user interface for an efficient inventory management experience.",
	features: [
		"User Authentication: Register and log in to the application securely.",
		"Role-Based Access Control: Different levels of access for users and admins.",
		"Category Management: Create, edit, and delete product categories.",
		"Product Management: Full CRUD operations for managing products.",
		"Order Management: Track orders with status updates.",
		"Responsive Design: Optimized for both desktop and mobile views.",
		"Error Handling: Clear and concise error handling with feedback messages.",
	],
	technologies: {
		backend: [
			"ASP.NET Core MVC",
			"Entity Framework Core",
		],
		frontend: [
			"Razor Views",
			"Bootstrap",
			"jQuery",
			"HTML5",
			"CSS3",
		],
		database: [
			"SQL Server",
		],
		tools: [
			"Visual Studio",
			"Azure App Services (for deployment)",
			"GitHub (version control)",
		],
	},
	keyEntities: [
		{
			name: "Category",
			fields: ["Id", "Name", "DisplayOrder", "CreatedDate"],
		},
		{
			name: "Product",
			fields: [
				"Id",
				"Title",
				"Description",
				"Price",
				"CategoryId",
				"ImageUrl",
				"CreatedDate",
			],
		},
		{
			name: "Order",
			fields: ["Id", "OrderDate", "CustomerId", "OrderStatus", "TotalAmount"],
		},
	],
	deployment: {
		platform: "Azure App Services",
		steps: [
			"Clone the repository from GitHub.",
			"Update the database connection string in appsettings.json.",
			"Run migrations using the command `dotnet ef database update`.",
			"Deploy the application using Visual Studio Publish.",
			"Verify the deployment on Azure App Services.",
		],
	},
	targetAudience:
		"Bookstore owners, inventory managers, and developers interested in learning ASP.NET Core MVC.",
	futurePlans: [
		"Add reporting features for inventory analytics.",
		"Enable bulk upload of products through Excel/CSV.",
		"Integrate with payment gateways for direct transactions.",
		"Develop a mobile-friendly progressive web app (PWA).",
	],
};
