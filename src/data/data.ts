export interface SiteData {
	projects: Project[];
}
export type Project = {
	title: string;
	colour: string;
	tagline: string;
	description?: string;
	link?: string;
	tags: Tag[];
	githubLink?: string;
	video?: string;
};
export type Tag = {
	text: string;
	link: string;
	icon: string;
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
			tags: [],
			video: "/videos/Sintax-preview.mp4",
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			tags: [],
			video: "/videos/Spitfire-preview.mp4",
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			tags: [],
			video: "/videos/Spitfire-preview.mp4",
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
		{
			title: "Spitfire",
			colour: "#DF4A57",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
	],
};
