<script lang="ts">
	import anime from "animejs";
	import { version } from "../../../package.json";
	import type { Project } from "../../data/data";
	export let project: Project;
	import { primaryColour } from "../../stores/colourStore";
	import { videoSrc, portfolioIsLoading } from "../../stores/portfolioStore";
	import { onDestroy, onMount } from "svelte";

	// State
	let loading = true;
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
	onMount(() => {
		updateVideo();
		startLoading();
	});
	// Button Events
	const handleHover = (isHovering: boolean) => {};
	const handleClick = () => {};

	// Loading Animations
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
	onDestroy(() => {
		clearInterval(interval);
	});
	const circumference = 565.48;
	let inversedProgressDashOffset = 0;
	$: percentageLoaded,
		() => {
			inversedProgressDashOffset =
				((100 - percentageLoaded) / 100) * circumference;
		};
</script>

<div id="loading-container">
	<div id="loading-card" style={`--project-colour: ${project.colour}`}>
		<div class="video-side">
			<button
				class="video-side-button"
				on:mouseenter={() => handleHover(true)}
				on:mouseleave={() => handleHover(false)}
				on:click={() => handleClick()}
				disabled={loading}
			>
				View more
			</button>
			<video
				class="card-bg-video"
				width="100%"
				height="100%"
				loop
				bind:this={video}
				autoplay
				muted
				style={`opacity:${loading ? 0 : 1}`}
			>
				<source src={project.video} type="video/mp4" />
				<track kind="captions" />
			</video>
			<div class="card-shine"></div>
			<div class="bottom-right-shadow"></div>
			<h3 class="card-title">SJ's Portfolio</h3>
			<div id="loading-progress-container">
				<div class="circle-container">
					<div class="percentage-container">
						<p
							style={`font-weight: ${(1000 * (percentageLoaded / 100)).toString()}`}
						>
							{Math.floor(percentageLoaded)}%
						</p>
					</div>
					<svg id="svg" width="200" height="200">
						<circle
							r="90"
							cx="100"
							cy="100"
							fill="transparent"
							stroke-dasharray="565.48"
							stroke-dashoffset="0"
						></circle>
						<circle
							r="80"
							cx="100"
							cy="100"
							fill="transparent"
							stroke-dasharray="565.48"
							stroke-dashoffset="0"
						></circle>
						<circle
							id="bar"
							r="85"
							cx="100"
							cy="100"
							stroke-dasharray="565.48"
							stroke-dashoffset="0"
							fill="transparent"
						></circle>
						<circle
							id="inversed-progress"
							r="85"
							cx="100"
							cy="100"
							stroke-dasharray="565.48"
							stroke-dashoffset={565.48 *
								(percentageLoaded / 100)}
							fill="transparent"
						></circle>
					</svg>
				</div>
				<p class="loading-status">
					{loading ? "Loading..." : "Ready to Enter"}
				</p>
				<p class="version">v{version}</p>
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
	}

	#loading-card {
		position: absolute;
		width: 70vw;
		max-width: 429px;
		height: 70vh;
		border-radius: 17px;
		transition: opacity 0.3s;
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
	.card-bg-video {
		z-index: 2;
		position: absolute;
		left: 0;
		border-radius: 20px;
		object-fit: cover;
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

	.loading-status {
		color: var(--project-colour);
	}

	#svg circle {
		/* stroke-dashoffset: 0; */
		transition: stroke-dashoffset 1s linear;
		stroke: var(--project-colour);
		stroke-width: 2px;
		transform-box: fill-box;
		transform-origin: center;
		transition: all 1s;
	}
	#svg #bar {
		stroke: var(--project-colour);
		stroke-width: 10px;
		transform: rotateY(180deg) rotate(-90deg);
	}

	#svg #inversed-progress {
		stroke: #121212;
		stroke-width: 10px;
		transform: rotateY(180deg) rotate(-90deg);
	}

	.circle-container {
		position: relative;
	}

	.circle-container div {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle-container p {
		color: var(--project-colour);
		font-size: 40px;
		font-weight: 50;
		transition: all 0.3s;
	}
</style>
