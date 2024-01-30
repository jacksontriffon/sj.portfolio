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
	icon: {
		src: string;
		alt: string;
	};
};
export type Tag = {
	text: string;
	link?: string;
	icons: string[];
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
			video: "/videos/Sintax-preview.mp4",
			icon: {
				src: "/images/GameController.svg",
				alt: "Game Controller",
			},
			tag: {
				text: "Prototype",
				icons: [],
			},
			highlights: [
				{ text: "Godot Engine", icons: ["/images/Godot.svg"] },
				{
					text: "AI Cybersecurity LLMs",
					icons: ["/images/OpenAI.svg", "/images/Terminal.svg"],
				},
				{
					text: "Desktop Only",
					icons: ["/images/Desktop.svg"],
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
			video: "/videos/Spitfire-preview.mp4",
			icon: {
				src: "/images/GameController.svg#GameController'",
				alt: "Game Controller",
			},
			tag: {
				text: "GameJam",
				icons: [],
			},
			highlights: [
				{ text: "Godot Engine", icons: ["/images/Godot.svg"] },
			],
		},
	],
};
