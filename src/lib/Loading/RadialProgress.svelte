<script lang="ts">
	import { fly } from "svelte/transition";
	export let percentageLoaded: number;
	const maxPercentage = 100;
	const maxFontWeight = 1000;
</script>

<div class="circle-container">
	{#if percentageLoaded < maxPercentage}
		<div transition:fly={{ delay: 700, y: 20 }}>
			<p
				style={`font-weight: ${(maxFontWeight * (percentageLoaded / maxPercentage)).toString()}`}
			>
				{Math.floor(percentageLoaded)}%
			</p>
		</div>
	{:else}
		<div transition:fly={{ delay: 700, y: 20 }}>
			<svg class="play-icon" viewBox="0 0 1024 1024" fill="currentColor">
				<path d="M891.161 512l-749.992 450v-900l749.992 450z" /></svg
			>
		</div>
	{/if}
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
			stroke-dashoffset={565.48 * (percentageLoaded / 100)}
			fill="transparent"
		></circle>
	</svg>
</div>

<style>
	#svg circle {
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

	.play-icon {
		width: 25%;
		color: var(--project-colour);
	}
</style>
