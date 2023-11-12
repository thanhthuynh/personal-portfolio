import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'software-engineer-intern-cidar',
		company: 'CIDAR Lab',
		description: 'Developed a GUI with over 50 widgets using PyQt5, improving control over microfluidic devices, and reducing experiment run times by 50%.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Boston, MA',
		period: { from: new Date('2023-05-01'), to: new Date('2023-08-31') },
		skills: getSkills('python', 'pyqt5', 'agile', 'jira'),
		name: 'Software Engineer Intern',
		color: '#4B8BBE', // Python blue
		links: [],
		logo: Assets.Unknown, // Replace with actual logo if available
		shortDescription: 'Improved automated control in microfluidics through GUI development and optimization.'
	},
	{
		slug: 'game-developer-intern-the-verse',
		company: 'The Verse',
		description: 'Developed form components for game HUDs and rendered 3D graphic skins using Unity and C#, enhancing user experience for 300 trial users.',
		contract: ContractType.Internship,
		type: 'Game Development',
		location: 'Boston, MA',
		period: { from: new Date('2022-11-01'), to: new Date('2023-01-31') },
		skills: getSkills('unity', 'javascript', 'html', 'css', 'csharp'),
		name: 'Game Developer Intern',
		color: '#963D32', // Unity maroon
		links: [],
		logo: Assets.Unknown, // Replace with actual logo if available
		shortDescription: 'Contributed to game development and 3D character model design in Unity.'
	},
	{
		slug: 'web-developer-intern-hack4impact',
		company: 'Hack4Impact',
		description: 'Designed an educational website platform using JavaScript, HTML, CSS, MySQL, and Firebase, enhancing user engagement and site performance.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Boston, MA',
		period: { from: new Date('2021-08-01'), to: new Date('2022-05-31') },
		skills: getSkills('javascript', 'html', 'css', 'mysql', 'firebase', 'figma', 'bootstrap'),
		name: 'Web Developer Intern',
		color: '#F0DB4F', // JavaScript yellow
		links: [],
		logo: Assets.Unknown, // Replace with actual logo if available
		shortDescription: 'Enhanced educational accessibility through web development and UI/UX design.'
	}
];

export default MY_EXPERIENCES;
