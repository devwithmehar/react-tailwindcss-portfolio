import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
	
		<div className="mt-14">
	{/* Page Wrapper */}
	<div className="bg-white dark:bg-gray-900 transition-colors duration-300">
		{/* Header Section */}
		<div className="text-center mb-10">
			<h1 className="text-4xl font-bold text-secondary-dark dark:text-secondary-light">
				{singleProjectData.projectName}
			</h1>
			<p className="text-lg text-secondary-dark dark:text-secondary-light mt-4">
				{singleProjectData.description}
			</p>
		</div>

		{/* Features Section */}
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Key Features
			</h2>
			<ul className="list-disc list-inside text-secondary-dark dark:text-secondary-light space-y-2 m-2">
				{singleProjectData.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
		</div>

		{/* Technologies Used Section */}
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Technologies Used
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div>
					<h3 className="text-lg font-medium text-secondary-dark dark:text-secondary-light mb-3">
						Backend
					</h3>
					<ul className="list-disc list-inside text-secondary-dark dark:text-secondary-light">
						{singleProjectData.technologies.backend.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-medium text-secondary-dark dark:text-secondary-light mb-3">
						Frontend
					</h3>
					<ul className="list-disc list-inside text-secondary-dark dark:text-secondary-light">
						{singleProjectData.technologies.frontend.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</div>
			</div>
		</div>

		{/* Key Entities Section */}
		{singleProjectData.keyEntities  && singleProjectData.keyEntities.length > 0  ? 
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Key Entities
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{singleProjectData.keyEntities.map((entity, index) => (
					<div key={index} className="p-4 m-4 border rounded-lg shadow-sm border-gray-300 dark:border-gray-700">
						<h3 className="text-lg font-medium text-secondary-dark dark:text-secondary-light mb-3">
							{entity.name}
						</h3>
						<ul className="list-disc list-inside text-secondary-dark dark:text-secondary-light">
							{entity.fields.map((field, idx) => (
								<li key={idx}>{field}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div> : ""
		}
		{/* Deployment Section */}
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Deployment
			</h2>
			<p className="text-lg text-secondary-dark dark:text-secondary-light">
				Platform: <strong>{singleProjectData.deployment.platform}</strong>
			</p>
			<ol className="list-decimal list-inside text-secondary-dark dark:text-secondary-light mt-3">
				{singleProjectData.deployment.steps.map((step, index) => (
					<li key={index}>{step}</li>
				))}
			</ol>
		</div> 
	
		{/* Target Audience Section */}
		<div className="mb-10">
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Target Audience
			</h2>
			<p className="text-lg text-secondary-dark dark:text-secondary-light">
				{singleProjectData.targetAudience}
			</p>
		</div>

		{/* Future Plans Section */}
		<div>
			<h2 className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-5">
				Future Plans
			</h2>
			<ul className="list-disc list-inside text-lg text-secondary-dark dark:text-secondary-light space-y-2">
				{singleProjectData.futurePlans.map((plan, index) => (
					<li key={index}>{plan}</li>
				))}
			</ul>
		</div>
	</div>
</div>


	);
};

export default ProjectInfo;
