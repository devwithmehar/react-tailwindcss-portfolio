import { useState, createContext, useEffect } from 'react';
import { bulkyWebData } from '../data/bulkyWebData';
import { blogPostData } from '../data/blogPostData';
import { portfolioData } from '../data/portfolioData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(null);

	const loadProjectData = (projectId) => {
		switch (parseInt(projectId)) {
			case 1:
				setSingleProjectData(bulkyWebData);
				break;
			case 2:
				setSingleProjectData(blogPostData);
				break;
			case 3:
				setSingleProjectData(portfolioData);
				break;
			default:
				setSingleProjectData(null);
				break;
		}
	};

	return (
		<SingleProjectContext.Provider value={{ singleProjectData, loadProjectData }}>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;