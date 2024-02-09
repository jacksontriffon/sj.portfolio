import { writable, type Writable } from "svelte/store";

export const cardsMoving = writable(false);
export const videoSrc = writable("");

// Loading
export interface VideosLoading {
	bgVideo: boolean;
	projectVideos: { projectName: string; loading: boolean }[];
}
export const videosLoading: Writable<VideosLoading> = writable({
	bgVideo: true,
	projectVideos: [],
});
export const portfolioIsLoading = writable(true);
export const portfolioEntered = writable(false);
