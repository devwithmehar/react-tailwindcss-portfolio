import { useContext } from 'react';
import { FiClock, FiTag, FiExternalLink } from 'react-icons/fi'; // Added FiExternalLink
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex items-center">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center mr-10">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
				{/* Add Live Link */}
				{singleProjectData.ProjectHeader.liveLink && (
					<div className="flex items-center">
						<a
							href={singleProjectData.ProjectHeader.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-primary-dark dark:text-primary-light hover:underline"
						>
							<FiExternalLink className="text-lg mr-2" />
							<span>Live Demo</span>
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
