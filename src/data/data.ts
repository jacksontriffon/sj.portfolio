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
	],
};
