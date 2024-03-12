<script lang="ts">
	import { version } from "../../../package.json";
	import type { Project } from "../../data/data";
	export let project: Project;
	import { primaryColour } from "../../stores/colourStore";
	import {
		videoSrc,
		portfolioIsLoading,
		videosLoading,
		type VideosLoading,
		portfolioEntered,
	} from "../../stores/portfolioStore";
	import { onDestroy, onMount } from "svelte";
	import RadialProgress from "./RadialProgress.svelte";

	// Update Global Loading State
	let loading = true;
	const loadingColour = "#5CFF46";
	const handleLoadingChange = (newVideosLoading: VideosLoading) => {
		if (newVideosLoading.bgVideo) return;
		const videosFinishedLoading = !!!newVideosLoading.projectVideos.find(
			(project) => project.loading === true,
		);
		if (!videosFinishedLoading) {
			percentageLoaded = 100;
			portfolioIsLoading.set(false);
		}
	};
	$: handleLoadingChange($videosLoading);
	// Video
	let video: HTMLVideoElement;
	const updateVideo = () => {
		if (!video) return;
		if (project.video) {
			videoSrc.set(project.video);
			primaryColour.set(project.colour);
			video.play();
		} else {
			video.pause();
		}
	};

	// Button Events
	let hovering: boolean;
	const handleHover = (isHovering: boolean) => {
		hovering = isHovering;
	};
	const handleClick = () => {
		if ($portfolioIsLoading) return;
		portfolioEntered.set(true);
	};

	// Loading Animations
	import { fly } from "svelte/transition";
	let interval: NodeJS.Timeout;
	let percentageLoaded = 0;
	const startLoading = () => {
		const updateIntervalInMilliseconds = 500;
		const maxValue = 100;
		interval = setInterval(() => {
			if (!portfolioIsLoading) {
				percentageLoaded = maxValue;
			} else {
				const percentageLeft = maxValue - percentageLoaded;
				const increaseBy = percentageLeft / 8;
				percentageLoaded += increaseBy;
			}
		}, updateIntervalInMilliseconds);
	};

	onMount(() => {
		updateVideo();
		startLoading();
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div
	id="loading-container"
	style={`${$portfolioEntered ? "pointer-events: none" : ""}`}
>
	<div
		id="loading-card"
		style={`--project-colour: ${loadingColour}; opacity: ${$portfolioEntered ? 0 : 1};`}
	>
		<div
			class="fill"
			style={`
				background-color: ${$portfolioEntered ? loadingColour : ""}; 
				scale: ${$portfolioEntered ? 1.1 : 1};
			`}
		></div>
		<div class="video-side">
			<button
				class="video-side-button"
				on:mouseenter={() => handleHover(true)}
				on:mouseleave={() => handleHover(false)}
				on:click={() => handleClick()}
				disabled={$portfolioIsLoading}
			>
				View more
			</button>
			<div class="card-shine"></div>
			<div class="bottom-right-shadow"></div>
			{#if portfolioIsLoading}
				<h3 class="card-title">SJ's Portfolio</h3>
			{/if}
			<div id="loading-progress-container">
				<RadialProgress {percentageLoaded} />
				<div>
					{#if $portfolioIsLoading}
						<p transition:fly={{ y: 20 }} class="loading-status">
							Loading...
						</p>
					{:else}
						<p
							transition:fly={{ delay: 500, y: 20 }}
							id="ready-to-enter"
							class="loading-status"
						>
							Ready to Enter
						</p>
					{/if}
					<p class="version">v{version}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#loading-container {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		transition: opacity 1s;
		transition-delay: 1s;
	}

	.fill {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 17px;
		transition: all 500ms;
		z-index: 1000;
		/* opacity: 0.5; */
		pointer-events: none;
	}

	#loading-card {
		position: absolute;
		width: 70vw;
		max-width: 429px;
		height: 70vh;
		border-radius: 17px;
		transition: opacity 0.3s;
		transition-delay: 500ms;
		backdrop-filter: blur(20px);
	}
	.video-side-button {
		position: absolute;
		border-radius: 20px;
		width: 100%;
		height: 100%;
		z-index: 10;
		background: none;
		border: none;
		outline: none;
		color: transparent;
	}
	.video-side-button:focus:not(.video-side-button:hover) {
		outline: 2px solid var(--project-colour);
	}
	.video-side-button:disabled {
		cursor: progress;
	}

	.bottom-right-shadow {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		z-index: 2;
		position: absolute;
		pointer-events: none;
	}

	.video-side {
		position: absolute;
		border-radius: 20px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
		box-shadow: 8px 8px 30px -4px black;
	}

	.card-shine {
		position: absolute;
		z-index: 3;
		width: 100%;
		height: 100%;
		box-shadow: inset 8px 8px 40px -25px white;
		border-radius: 20px;
		pointer-events: none;
	}

	.card-title {
		z-index: 5;
		-webkit-text-stroke: 1px black;
		color: var(--project-colour);
		text-shadow:
			3px 3px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		font-size: 32px;
		margin-top: 32px;
		margin-right: auto;
		padding-left: 40px;
		transition: all 0.3s;
		text-align: left;
	}

	#loading-progress-container {
		position: relative;
		height: 100%;
	}

	#loading-progress-container p {
		position: absolute;
		width: 100%;
	}

	.loading-status {
		color: var(--project-colour);
	}

	.version {
		margin-top: 56px;
		color: var(--project-colour);
		opacity: 0.5;
	}
</style>
