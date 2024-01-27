export interface SiteData {
	projects: Project[];
}
export type Project = {
	title: string;
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
			tagline: "an AI hacking sim",
			tags: [],
			video: "/Sintax-preview.mp4",
		},
		{
			title: "Spitfire",
			tagline: "a retro cozy puzzle game",
			tags: [],
			video: "/Spitfire-preview.mp4",
		},
		{
			title: "Spitfire",
			tagline: "a retro cozy puzzle game",
			tags: [],
			video: "/Spitfire-preview.mp4",
		},
		{
			title: "Spitfire",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
		{
			title: "Spitfire",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
		{
			title: "Spitfire",
			tagline: "a retro cozy puzzle game",
			tags: [],
		},
	],
};
