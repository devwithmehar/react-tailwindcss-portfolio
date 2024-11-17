import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
  {singleProjectData.ProjectImages.map((project) => (
    <div
      className="flex flex-col items-center bg-blue-900 rounded-xl shadow-lg p-4 h-[400px] w-full"
      key={project.id}
    >
      <img
        src={project.img}
        className="h-[250px] w-full object-cover rounded-lg"
        alt={project.title}
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.type}</p>
      </div>
    </div>
  ))}
</div>


	);
};

export default ProjectGallery;
