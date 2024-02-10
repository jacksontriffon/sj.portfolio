<!-- Carousel: Allows users to navigate between projects -->
<script lang="ts">
	// JSON stored somewhere
	import { data } from "../../data/data";
	const projects = data.projects;
	import Card from "./Card.svelte";

	// Colour
	import { primaryColour } from "../../stores/colourStore";

	// State
	let currentProjectIndex: number;
	let lastProjectIndex = projects.length - 1;
	let cardsCanMoveLeft: boolean;
	$: cardsCanMoveLeft = !(currentProjectIndex >= lastProjectIndex);
	let cardsCanMoveRight: boolean;
	$: cardsCanMoveRight = !(currentProjectIndex <= 0);

	// Card Animation
	import {
		cardsMoving,
		portfolioEntered,
		portfolioIsLoading,
	} from "../../stores/portfolioStore";
	import { onDestroy, onMount } from "svelte";
	import { initAnimation, moveCardsAnimation } from "./carouselAnimations";
	let cardsAnimationState: number[] = projects.map((_val, i) => {
		// Set each card's initial distance
		const distance = 600;
		return i * distance;
	});
	const moveCards = (direction: "right" | "left") => {
		if (!$portfolioEntered) return;
		// Update state
		if (direction === "left") currentProjectIndex++;
		else currentProjectIndex--;
		// Animate cards
		moveCardsAnimation(direction, currentProjectIndex, cardsAnimationState);
		cardsMoving.set(true);
		setTimeout(() => {
			cardsMoving.set(false);
		}, 750);
	};

	// Keyboard Events
	const keydownHandler = (e: KeyboardEvent) => {
		switch (e.code) {
			case "KeyD":
			case "ArrowRight":
				if (cardsCanMoveLeft) {
					moveCards("left");
				}
				break;
			case "KeyA":
			case "ArrowLeft":
				if (cardsCanMoveRight) {
					moveCards("right");
				}
				break;
		}
	};
	onMount(() => {
		initAnimation();
		currentProjectIndex = 0; // Triggers any function reacting to this variable (e.g. play the current video)
		window.addEventListener("keydown", keydownHandler);
	});
	onDestroy(() => {
		window.removeEventListener("keydown", keydownHandler);
	});

	$: $portfolioEntered, initAnimation();

	// Swipe Gestures
	import { swipe } from "svelte-gestures";
	const swipeHandler = (event: CustomEvent) => {
		const {
			direction,
		}: {
			direction: "top" | "right" | "bottom" | "left";
			target: HTMLElement;
		} = event.detail;

		if (direction === "left" && cardsCanMoveLeft) {
			moveCards("left");
		}
		if (direction === "right" && cardsCanMoveRight) {
			moveCards("right");
		}
	};
</script>

<div
	class="carousel"
	style="--project-color: {$primaryColour}; opacity: {$portfolioIsLoading
		? 0
		: 1}"
	use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
	on:swipe={swipeHandler}
>
	{#each projects as project, i}
		<Card {project} class="card" isCurrent={i === currentProjectIndex} />
	{/each}
	<p
		style={`color: ${$primaryColour}; display: ${$portfolioEntered ? "block" : "none"}`}
	>
		{currentProjectIndex + 1} / {projects.length}
	</p>
	<div
		class="arrow-container"
		style={`opacity: ${$portfolioEntered ? "1" : "0"};`}
	>
		<!-- Cards move in the opposite direction to the arrow -->
		<!-- e.g. Left arrow, moves cards right  -->
		<button
			hidden={!cardsCanMoveRight || !$portfolioEntered}
			on:click={() => moveCards("right")}
		>
			{"<"}
		</button>
		<div></div>
		<button
			hidden={!cardsCanMoveLeft || !$portfolioEntered}
			on:click={() => moveCards("left")}
		>
			{">"}
		</button>
	</div>
</div>

<style>
	.carousel {
		position: relative;
		display: flex;
		top: 0;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		transition: opacity 1s;
	}

	p {
		position: absolute;
		bottom: 8px;
		font-weight: 700;
		background-color: rgba(1, 1, 1, 0.1);
		padding: 4px 8px;
		border-radius: 8px;
	}

	button {
		font-size: 2rem;
		z-index: 100;
		transition: color border-color 0.2s;
		background-color: rgba(1, 1, 1, 0.2);
		pointer-events: all;
		padding: 8px 20px;
	}

	button:active {
		color: black;
		background-color: var(--project-color);
	}
	button:focus {
		border-color: var(--project-color);
		outline: 2px solid var(--project-color);
	}

	button:hover:enabled:not(button:active) {
		color: var(--project-color);
		border-color: var(--project-color);
	}

	.arrow-container {
		width: 90%;
		max-width: 800px;
		display: flex;
		justify-content: space-between;
		pointer-events: none;
	}
</style>
