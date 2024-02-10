import type { IconName } from "../lib/Icon/icon";

export interface SiteData {
	projects: Project[];
}
export type Project = {
	title: string;
	colour: string;
	tagline: string;
	description?: string;
	link?: string;
	tag: Tag;
	highlights: Tag[];
	githubLink?: string;
	video?: string;
	icon: IconName;
};
export type Tag = {
	text: string;
	link?: string;
	icons: IconName[];
};
// Unused currently
export type VideoDetails = {
	mainSrc: string;
	bgVideoSrc?: string;
	thumbnail?: string;
	captions?: string;
};
// ---

export const data: SiteData = {
	projects: [
		{
			title: "R/GA",
			colour: "#ff0000",
			tagline: "designing a more human future",
			video: "https://res.cloudinary.com/rga/video/upload/f_auto/q_auto/v1636982937/rga.com/RGA-WebHero-05_1_qs6x7a.mp4",
			icon: "Square",
			tag: {
				text: "Immersive Experiences",
				icons: [],
			},
			description:
				"A Digital Creative Agency designing  brands like Toyota, Nike and Google for a more human future -  <br><br> I specialised in integrating immersive experiences using Three.js and WebGL into greenfield projects. <br><br> Part of my responsibility was also the creation and maintenance of the component-library, this often involved things such as: <br><br>Collaborating with designers to keep our design system consistent. <br>Using Storybook to create and document isolated components. <br><br>Having a keen eye for accessibility. Creating bash scripts to automate tasks for my team. Onboarding new developers by teaching the in's and out's of our repository. etc...",
			highlights: [
				{
					text: "Next.js, Typescript, Storybook",
					icons: ["Nextjs", "TypeScript", "Storybook"],
				},
				{ text: "Three.js, React", icons: ["Threejs", "React"] },
				{
					text: "All Devices",
					icons: ["Phone", "Desktop"],
				},
			],
			link: "https://rga.com/",
		},
		{
			title: "HERO",
			colour: "#ff5900",
			tagline: "boundless creativity",
			video: "/videos/Hero.mp4",
			icon: "HeroLightning",
			tag: {
				text: "Immersive Experiences",
				icons: [],
			},
			description:
				"As the lead front-end developer for a gamified Buy-Now-Pay-Later Fintech app catering to young Australians, I utilized Ionic and Angular to craft a visually dynamic and user-friendly interface. <br> My focus on engaging animations not only enhanced the overall user experience but also brought a playful and interactive element to the application. \n\nThis project underscores my expertise in front-end development, demonstrating my ability to seamlessly integrate technologies while aligning with the preferences of the target audience.",
			highlights: [
				{
					text: "Next.js, Typescript, Storybook",
					icons: ["Nextjs"],
				},
				{ text: "Three.js, React", icons: ["Arrow"] },
				{
					text: "All Devices",
					icons: ["Phone", "Desktop"],
				},
			],
			link: "https://www.thehero.co/",
		},
		{
			title: "Wizit",
			colour: "#e61996",
			tagline: "easy credit for millennials",
			video: "/videos/Wizit.mp4",
			icon: "Phone",
			tag: {
				text: "Mobile App",
				icons: [],
			},
			description:
				"As the lead front-end developer for a gamified Buy-Now-Pay-Later Fintech app catering to young Australians, I utilized Ionic and Angular to craft a visually dynamic and user-friendly interface. <br> My focus on engaging animations not only enhanced the overall user experience but also brought a playful and interactive element to the application. \n\nThis project underscores my expertise in front-end development, demonstrating my ability to seamlessly integrate technologies while aligning with the preferences of the target audience.",
			highlights: [
				{
					text: "Angular",
					icons: ["Angular"],
					// link: "https://godotengine.org/",
				},
				{ text: "Ionic & Capacitor", icons: ["Ionic", "Capacitor"] },
				{
					text: "Mobile Only",
					icons: ["Phone"],
				},
			],
			link: "https://wizit.money/",
		},
		{
			title: "ThriveByFive",
			colour: "#a7d3be",
			tagline: "",
			video: "/videos/ThriveByFive.mp4",
			icon: "Phone",
			tag: {
				text: "Website",
				icons: [],
			},
			description:
				"As the lead front-end developer for a gamified Buy-Now-Pay-Later Fintech app catering to young Australians, I utilized Ionic and Angular to craft a visually dynamic and user-friendly interface. <br> My focus on engaging animations not only enhanced the overall user experience but also brought a playful and interactive element to the application. \n\nThis project underscores my expertise in front-end development, demonstrating my ability to seamlessly integrate technologies while aligning with the preferences of the target audience.",
			highlights: [
				{
					text: "Next.js & Vercel",
					icons: ["Nextjs", "Vercel"],
				},
				{ text: "Tailwind", icons: ["TailwindCSS"] },
				{
					text: "All Devices",
					icons: ["Phone", "Desktop"],
				},
			],
			link: "https://thrivebyfive.com/",
		},
		{
			title: "Sintax",
			colour: "#5CFF46",
			tagline: "an AI hacking sim",
			video: "/videos/Sintax.mp4",
			icon: "GameController",
			tag: {
				text: "Prototype",
				icons: [],
			},
			highlights: [
				{
					text: "Godot Engine",
					icons: ["Godot"],
					link: "https://godotengine.org/",
				},
				{
					text: "AI Cybersecurity LLMs",
					icons: ["OpenAI", "Terminal"],
				},
				{
					text: "Desktop Only",
					icons: ["Desktop"],
				},
			],
			description:
				"Explore a virtual realm filled with NPC hackers.\n\n\
				Gain the skills required to enter hacking competitions like CTF’s.",
			link: "https://sintax.vyfrost.com",
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			video: "/videos/Spitfire.mp4",
			icon: "GameController",
			tag: {
				text: "GameJam",
				icons: [],
			},
			description:
				"Explore a virtual realm filled with NPC hackers.\n\n\
				Gain the skills required to enter hacking competitions like CTF’s.",
			highlights: [
				{
					text: "Godot Engine",
					icons: ["Godot"],
					link: "https://godotengine.org/",
				},
				{ text: "Puzzle Game", icons: ["Puzzle"] },
				{
					text: "For Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://vyfrost.itch.io/spitfire",
		},
		{
			title: "Vyfrost.com",
			colour: "#95E8F8",
			tagline: "the game studio's portfolio",
			video: "/videos/vyfrost.com.mp4",
			icon: "GameController",
			tag: {
				text: "Portfolio",
				icons: [],
			},
			description:
				"Explore a virtual realm filled with NPC hackers.\n\n\
				Gain the skills required to enter hacking competitions like CTF’s.",
			highlights: [
				{
					text: "Godot Engine",
					icons: ["Godot"],
					link: "https://godotengine.org/",
				},
				{ text: "Puzzle Game", icons: ["Puzzle"] },
				{
					text: "For Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://vyfrost.com",
		},
	],
};
