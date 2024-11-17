import profileImage from '../../images/profile_picture.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				I am a passionate and results-driven Full Stack Developer with expertise in <b> C#, .NET, React, JavaScript </b> and integrating APIs with third-party applications. With hands-on experience working on diverse projects in various companies across <b> Winnipeg, Canada </b>, I bring real-world problem-solving skills to the table. My academic foundation in <b> Business Information Technology </b> 
				from <b> Red River College </b> equips me with a unique blend of technical expertise and business acumen.
				</p>

				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				I pride myself on my ability to "get things done on time." Debugging and troubleshooting errors is one of my core strengths, allowing me to resolve complex issues effectively. I'm energized by taking on new challenges and thrive in dynamic environments that foster growth and innovation.
				</p>

				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				I am always eager to learn new technologies and approaches, as I firmly believe in continuous improvement. Whether it's tackling innovative projects or contributing to impactful solutions, I am open to opportunities that allow me to grow and make meaningful contributions.
				</p>

				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
					<b>Let's build something amazing together!</b>
				</p>

			</div>
		</div>
	);
};

export default AboutMeBio;
