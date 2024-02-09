import { writable } from "svelte/store";

export const cardsMoving = writable(false);
export const videoSrc = writable("");
export const videosLoading = writable({
	bgVideo: true,
	projectVideos: [],
});
export const portfolioIsLoading = writable(true);
