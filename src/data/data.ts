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
			video: "/videos/Sintax-preview.mp4",
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
			video: "/videos/Spitfire-preview.mp4",
			icon: "GameController",
			tag: {
				text: "GameJam",
				icons: [],
			},
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
		},
	],
};
