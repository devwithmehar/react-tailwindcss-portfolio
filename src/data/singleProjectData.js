// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';


export const singleProjectData = {
	ProjectHeader: {
		title: 'Bulky Web',
		publishDate: 'November 8 2024',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		}
	],
	"projectName": "Bulky",
  "description": "Bulky is an ASP.NET Core MVC application designed for managing products in a book-related inventory system. This application allows users to perform CRUD operations on various inventory items such as categories, products, and more. It is a full-stack application that integrates backend logic with a frontend user interface for an efficient inventory management experience.",
  "features": [
    "Full CRUD operations for inventory management.",
    "Management of categories, products, and other related entities.",
    "Search and filter functionality for streamlined inventory access.",
    "Role-based authentication and authorization for secure access.",
    "Modern responsive UI for enhanced user experience.",
    "Integration with a database for persistent storage of inventory data.",
    "Error handling and validation for user input.",
    "Backend built using ASP.NET Core MVC with Entity Framework Core.",
    "Frontend designed with Razor Views and Bootstrap for responsive design.",
    "Scalable architecture for future feature additions."
  ],
  "technologies": {
    "backend": [
      "ASP.NET Core MVC",
      "Entity Framework Core"
    ],
    "frontend": [
      "Razor Views",
      "Bootstrap",
      "HTML5",
      "CSS3"
    ],
    "database": [
      "SQL Server"
    ],
    "tools": [
      "Visual Studio",
      "Azure App Services (for deployment)",
      "GitHub (version control)"
    ]
  },
  "keyEntities": [
    {
      "name": "Category",
      "fields": ["Id", "Name", "DisplayOrder", "CreatedDate"]
    },
    {
      "name": "Product",
      "fields": ["Id", "Title", "Description", "Price", "CategoryId", "ImageUrl", "CreatedDate"]
    }
  ],
  "deployment": {
    "platform": "Azure App Services",
    "steps": [
      "Configure database in Azure SQL Server.",
      "Deploy application using Visual Studio Publish.",
      "Ensure proper connection string in appsettings.json for production environment."
    ]
  },
  "targetAudience": "Bookstore owners, inventory managers, and developers interested in learning ASP.NET Core MVC.",
  "futurePlans": [
    "Add reporting features for inventory analytics.",
    "Enable bulk upload of products through Excel/CSV.",
    "Integrate with payment gateways for direct transactions.",
    "Develop a mobile-friendly progressive web app (PWA)."
  ]
}

