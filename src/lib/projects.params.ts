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
		logo: Assets.Spotify,
		name: 'A.I. Spotify Art Generator',
		period: {
			from: new Date('2023-04-01'),
			to: new Date('2023-05-31')
		},
		skills: getSkills('js', 'html', 'css', 'firebase', 'express', 'reactjs', 'node'),
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
		skills: getSkills('python', 'js', 'html', 'css', 'mongodb'),
		type: 'Web Application'
	},
	{
		slug: 'todo-list-web-app',
		color: '#48C9B0', // A teal color
		description:
			'Developed a simple yet effective to-do list web application using React. This project allows users to add, delete, and mark tasks as completed. It features a user-friendly interface and local storage integration to save tasks across sessions.',
		shortDescription:
			'A beginner-friendly React project for managing daily tasks, offering features like adding, deleting, and marking tasks as complete.',
		links: [{ to: 'https://github.com/thanhthuynh/to-do-list', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'To-Do List',
		period: {
			from: new Date('2022-12-1'),
			to: new Date('2023-1-1')
		},
		skills: getSkills('javascript', 'react', 'html', 'css'),
		type: 'Web Application'
	},
	{
		slug: 'leetcode-solutions-repository',
		color: '#F39C12', // An orange color
		description:
			'A comprehensive repository of my solutions to various challenges on LeetCode. This project showcases problem-solving skills and proficiency in algorithms and data structures. Each solution includes comments explaining the logic and approach used.',
		shortDescription:
			'A curated collection of my LeetCode problem solutions, demonstrating algorithmic thinking and coding skills.',
		links: [{ to: 'https://github.com/thanhthuynh/LeetCode', label: 'GitHub' }],
		logo: Assets.LeetCode,
		name: 'LeetCode',
		period: {
			from: new Date('2022-9-1'),
			to: new Date('2023-12-1')
		},
		skills: getSkills('python', 'java', 'cpp'),
		type: 'Coding Challenge Solutions'
	},
	{
		slug: 'mobile-app-dev-projects-cs501',
		color: '#8E44AD', // A purple color
		description:
			'A repository showcasing a series of mobile app development projects created for my CS501 class. These projects, developed using Kotlin and Android Studio, cover a wide range of functionalities and design patterns, demonstrating proficiency in modern mobile app development techniques.',
		shortDescription:
			'A collection of diverse mobile app projects for CS501, built using Kotlin and Android Studio, emphasizing innovative designs and functionalities.',
		links: [{ to: 'https://github.com/thanhthuynh/CS501', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'Android App Projects',
		period: {
			from: new Date('2023-9-1'),
			to: new Date('2023-12-1')
		},
		skills: getSkills('kotlin', 'android-studio', 'mobile-development', 'ui/ux design'),
		type: 'Mobile Application Projects'
	}
	
	
	
];

export default MY_PROJECTS;
