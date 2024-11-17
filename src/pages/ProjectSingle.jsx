import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider  }  from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom'; // Import useParams
import { useContext } from 'react'; // Import useContext
import SingleProjectContext from '../context/SingleProjectContext';
import { useEffect } from 'react';

const ProjectSingle = () => {

	const { projectId } = useParams(); // Extract projectId from URL
	const { singleProjectData, loadProjectData } = useContext(SingleProjectContext); // Access context

	// Use useEffect to load project data dynamically based on projectId
	useEffect(() => {
		if (projectId) {
			loadProjectData(projectId); // Load data for the specific project
		}
	}, [projectId, loadProjectData]);

	// Handle case where project data is not yet available
	if (!singleProjectData) {
		return <p className="text-center mt-20 text-red-500">Loading project...</p>;
	}


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				{/* <ProjectRelatedProjects /> */}
			
		</motion.div>
	);
};

export default ProjectSingle;
