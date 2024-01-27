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
export const data: SiteData = {
	projects: [
		{
			title: "Sintax",
			tagline: "an AI hacking sim",
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
