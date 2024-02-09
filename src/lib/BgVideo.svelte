<script lang="ts">
	import {
		videoSrc,
		videosLoading,
		portfolioIsLoading,
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
</script>

<video
	bind:readyState={videoReadyState}
	width="100%"
	height="100%"
	loop
	bind:this={video}
	autoplay
	muted
	style={`opacity: ${portfolioIsLoading ? 0 : 1}`}
>
	<source bind:this={source} src={$videoSrc} type="video/mp4" />
	<track kind="captions" />
</video>

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
</style>
