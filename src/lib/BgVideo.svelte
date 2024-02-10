<script lang="ts">
	import { primaryColour } from "../stores/colourStore";
	import {
		videoSrc,
		videosLoading,
		portfolioIsLoading,
		portfolioEntered,
	} from "../stores/portfolioStore";
	let video: HTMLVideoElement;
	let source: HTMLSourceElement;
	$: $videoSrc, updateVideo();
	const updateVideo = () => {
		if (!video || !source) return;
		if ($videoSrc) {
			source.src = $videoSrc;
			video.load();
			video.play();
		} else {
			video.pause();
		}
	};

	// Loading
	let videoReadyState: number;
	const handleVideoReadyStateChange = (state: number) => {
		const bgIsLoading = state !== 4;
		videosLoading.set({
			...$videosLoading,
			bgVideo: bgIsLoading,
		});
	};
	$: handleVideoReadyStateChange(videoReadyState);

	// Overlay
	let overlayColour = "none";
	const handlePortfolioEntered = (entered: boolean) => {
		if (!entered) return;
		overlayColour = $primaryColour;
		setTimeout(() => {
			overlayColour = "none";
		}, 500);
	};
	$: handlePortfolioEntered($portfolioEntered);
</script>

<div>
	<video
		bind:readyState={videoReadyState}
		playsinline
		width="100%"
		height="100%"
		loop
		bind:this={video}
		autoplay
		muted
		style={`opacity: ${$portfolioIsLoading ? 0 : $portfolioEntered ? 1 : 0.3}`}
	>
		<source bind:this={source} src={$videoSrc} type="video/mp4" />
		<track kind="captions" />
	</video>
	<div class="overlay" style={`background-color: ${overlayColour};`}></div>
</div>

<style>
	video {
		position: absolute;
		background-color: var(--neutral-900);
		top: 0;
		left: 0;
		object-fit: cover;
		filter: blur(8px);
		transition: opacity 1s;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		transition: background-color 1s;
		opacity: 0.2;
	}
</style>
