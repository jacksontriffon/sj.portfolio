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
	secondaryLink?: {
		icon: IconName;
		link: string;
	};
	video?: string;
	icon: IconName;
	lightMode?: boolean;
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
				"Global Creative Innovation Studio that helps businesses including Toyota, Nike and Google to create a more human future. <br><br> I specialised in integrating immersive experiences using Three.js and WebGL into greenfield Nextjs & React projects.",
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
			secondaryLink: {
				icon: "LinkedIn",
				link: "https://www.linkedin.com/company/r-ga-australia/",
			},
		},
		{
			title: "HERO",
			colour: "#ff5900",
			tagline: "boundless creativity",
			video: "/videos/Hero.mp4",
			icon: "HeroLightning",
			tag: {
				text: "Mobile & Web Apps",
				icons: [],
			},
			description:
				"Australia's #1 Independent Digital Agency at the 2022 APAC Effies awarded on work with clients like Coca Cola, Bakers Delight, eBay, Maybeline, and more. <br><br> I lead the front-end of multiple projects using a variety of frameworks and meta-frameworks to create SSR Websites and Mobile apps for both Apple and Android.",
			highlights: [
				{
					text: "React, Next.js, ",
					icons: ["React", "Nextjs"],
				},
				{
					text: "Angular, Ionic, Capacitor",
					icons: ["Angular", "Ionic", "Capacitor"],
				},
				{
					text: "All Devices",
					icons: ["Phone", "Desktop"],
				},
			],
			link: "https://www.thehero.co/",
			secondaryLink: {
				icon: "LinkedIn",
				link: "https://www.linkedin.com/company/hero-co/?originalSubdomain=au",
			},
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
				"Australian Fintech app providing options for extra credit: Wizitpay (Buy-Now-Pay-Later), Wizitcard and Powerup (extra credit with 0% interest)<br><br>This app targets a younger audience and therefore pushes towards gamification. As the lead front-end engineer I collaborated heavily with designers to create smooth animations and transitions between every section of the app. <br><br>Built using Ionic and Angular, I crafted visually dynamic UI and a component library that matches the tone of the brand, that could also be used on other platforms like their website.",
			highlights: [
				{
					text: "Angular",
					icons: ["Angular"],
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
			title: "Vyfrost.com",
			colour: "#95E8F8",
			tagline: "the game studio's portfolio",
			video: "/videos/vyfrost.com.mp4",
			icon: "GameController",
			tag: {
				text: "Game Studio Portfolio",
				icons: [],
			},
			description:
				"Vyfrost's indie game portfolio takes you to a 2D universe inspired by Space Invaders, all powered by the Godot engine.<br><br>Since it's a website I decided on touch-to-move controls so that navigation is easy and intuitive. An essential component to new immersive experiences, especially as this is available on all devices.",
			highlights: [
				{
					text: "Godot Engine",
					icons: ["Godot"],
					link: "https://godotengine.org/",
				},
				{ text: "Point & Click", icons: ["Cursor", "GameController"] },
				{
					text: "For Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://vyfrost.com",
		},
		{
			title: "ThriveByFive",
			colour: "#311c7e",
			tagline: "education for parents in developing countries",
			description:
				"The first five years will shape a child's life. Minderoo Foundation has taken on a mission to help kids thrive in third-world countries. <br><br>When this app was about to launch it was my responsibility to build the landing page from scratch. In two weeks a fully functioning Next.js SSR web app was deployed and with bonus animations added.<br><br>Initial App launch was successful and now has been rolled out in 30+ countries!",
			video: "/videos/ThriveByFive.mp4",
			icon: "Phone",
			tag: {
				text: "Educational App",
				icons: [],
			},
			highlights: [
				{
					text: "Next.js, React, Tailwind",
					icons: ["Nextjs", "React", "TailwindCSS"],
				},
				{ text: "Vercel, GitHub actions", icons: ["Vercel", "GitHub"] },
				{
					text: "For Mobile and Desktop",
					icons: ["Phone", "Desktop"],
				},
			],
			link: "https://thrivebyfive.com/",
			lightMode: true,
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
				"A chill and cozy journey through the abandoned caverns of an old mine, as a little flame lit by a stray lightningbolt.<br><br>Created for LowRezJam, a gamejam which restricts games down to 64x64 pixels (about the size of a nokia).<br><br> As the lead developer I worked closely with our artist and musician to create a cohesive flow to each mechanic and level.",
			highlights: [
				{
					text: "Godot Engine",
					icons: ["Godot"],
					link: "https://godotengine.org/",
				},
				{
					text: "64x64 Puzzle Game",
					icons: ["Puzzle"],
				},
				{
					text: "For all Devices",
					icons: ["Desktop", "Phone", "GameController"],
				},
			],
			link: "https://vyfrost.itch.io/spitfire",
		},
		{
			title: "Sintax",
			colour: "#5CFF46",
			tagline: "an AI hacking sim",
			description:
				"Explore a virtual realm filled with NPC hackers and gain the skills required to enter hacking competitions like CTFs (Capture the flag).<br><br>Seeing all these LLM's (like chatGPT) I've been keen to create a fun yet somewhat educational type game like this for awhile. <br><br>Turns out AI's are great at using the command line, so I flipped the role and made it evaluate players performance and give them hints based on the errors they produce.<br><br>Only a basic prototype so far, currently there's some gameplay and the core mechanic functioning, but remember there's no win or end to the game.",
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
					text: "Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://sintax.vyfrost.com",
		},
		{
			title: "Memopup",
			colour: "#fff",
			tagline: "an AI that saves your prompts",
			video: "/videos/Memopup.mp4",
			icon: "Phone",
			tag: {
				text: "AI Chatbot",
				icons: [],
			},
			description:
				"Reusing prompts saves loads of time spent on rewriting. I built Memopup to allow me to text my Japanese friends quicker. <br><br> Built with OpenAI and the T3 Stack (Nextjs, tRPC, Prisma, Tailwind)",
			highlights: [
				{
					text: "Nextjs, tRPC, Prisma",
					icons: ["Nextjs", "tRPC", "Prisma"],
				},
				{
					text: "OpenAI, TailwindCSS",
					icons: ["OpenAI", "TailwindCSS"],
				},
				{
					text: "For Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://memopup.com",
			secondaryLink: {
				icon: "GitHub",
				link: "https://github.com/jacksontriffon/Memopup",
			},
		},
		{
			title: "SJCoded",
			colour: "#3369e7",
			tagline: "my old portfolio",
			video: "/videos/SJCoded.mp4",
			icon: "Desktop",
			tag: {
				text: "Portfolio Website",
				icons: [],
			},
			description:
				"My first portfolio site built quickly with HTML, CSS & JavaScript. Nothing fancy, but it was a nice challenge to build it over a weekend.<br><br>Links and details aren't up to date, so I'd suggest sticking to this portfolio for accurate links.",
			highlights: [
				{
					text: "HTML, JavaScript",
					icons: ["HTML", "JavaScript"],
				},
				{
					text: "Bootstrap, CSS, SCSS",
					icons: ["Bootstrap", "CSS", "Sass"],
				},
				{
					text: "For Desktop and Mobile",
					icons: ["Desktop", "Phone"],
				},
			],
			link: "https://sjcoded.com",
			secondaryLink: {
				icon: "GitHub",
				link: "https://github.com/jacksontriffon/SJcoded.github.io",
			},
			lightMode: true,
		},
	],
};
