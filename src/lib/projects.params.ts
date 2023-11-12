import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'ai-spotify-art-generator',
		color: '#1DB954', // Spotify green
		description:
			'A full-stack web app that uses Firebase, Express, React, Node, OpenAI, and Spotify APIs to fetch user playlist data and generate playlist artwork based on sentiment analysis with 98% accuracy.',
		shortDescription:
			'Combining AI and music, this app creates custom Spotify playlist artwork, harnessing sentiment analysis for personalized designs.',
		links: [{ to: 'https://github.com/thanhthuynh/spotify-art-generator', label: 'GitHub' }],
		logo: Assets.JavaScript,
		name: 'A.I. Spotify Art Generator',
		period: {
			from: new Date('2023-04-01'),
			to: new Date('2023-05-31')
		},
		skills: getSkills('javascript', 'typescript', 'html', 'css', 'firebase', 'react', 'node'),
		type: 'Web Application'
	},
	{
		slug: 'course-registration-bot',
		color: '#2E86C1', // A blue color
		description:
			'Engineered a web application using pandas and selenium to scrape and parse BU’s registrar, generate valid schedules based on preferences, and eliminate conflicts, significantly reducing time spent searching for open courses.',
		shortDescription:
			'An efficient bot that aids students in course registration by automating schedule generation and conflict resolution.',
		links: [{ to: 'https://github.com/thanhthuynh/course-registration-bot', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Course Registration Bot',
		period: {
			from: new Date('2022-06-01'),
			to: new Date('2022-08-31')
		},
		skills: getSkills('python', 'javascript', 'html', 'css', 'mongodb'),
		type: 'Web Application'
	}
];

export default MY_PROJECTS;
