import Assets from './data/assets';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Thanh\'s Website Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
    title: 'Home',
    name: 'Thanh',
    lastName: 'Huynh',
    description:
        'a first-generation Vietnamese-American student at Boston University, originally from Philadelphia, and an aspiring software engineer fueled by a passion for technology and innovation.',
    profilePic: Assets.Profile,
    links: [
        { platform: Platform.GitHub, 
            link: 'https://github.com/thanhthuynh' 
        },
        {
            platform: Platform.Linkedin,
            link: 'https://www.linkedin.com/in/thanhthuynh/'
        },
        {
            platform: Platform.Email,
            link: 'thanhthuynh7@gmail.com'
        },
        {
            platform: Platform.Facebook,
            link: 'https://www.facebook.com/thanhthuynh'
        }
    ]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/17TzcYaSu4iJHDO4CFA2LJuMadpAn70Nh/view?usp=drive_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
