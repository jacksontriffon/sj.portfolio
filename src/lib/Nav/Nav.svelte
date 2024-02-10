<!-- Nav: Display all elements for Navigation -->
<script lang="ts">
	import NavButton from "./NavButton.svelte";

	// Transition
	import { fly } from "svelte/transition";
	import Icon from "../Icon/Icon.svelte";
	import { portfolioEntered } from "../../stores/portfolioStore";

	// Button Hover
	let anchorTagColor = "var(--neutral-200)";
</script>

{#if $portfolioEntered}
	<nav class="header">
		<div transition:fly={{ delay: 300, y: 20 }}>
			<NavButton highlighted={true} buttonText="SJ's Portfolio" />
		</div>
		<div transition:fly={{ delay: 600, y: 20 }}>
			<a
				href="/documents/SJ's Resume.pdf"
				download="SJs-resume.pdf"
				on:mouseenter={() => {
					anchorTagColor = "white";
				}}
				on:mouseleave={() => {
					anchorTagColor = "var(--neutral-200)";
				}}
			>
				Download Resume
				<Icon name="Download" size="m" color={anchorTagColor} />
			</a>
		</div>
	</nav>
{/if}

<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		top: 40px;
		left: 0px;
	}

	nav div {
		padding: 0px 40px;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		/* background-color: rgba(0, 0, 0, 0.3); */
		/* backdrop-filter: blur(8px); */
		color: var(--neutral-200);
		transition: color 0.2s;
		-webkit-text-stroke: 0.01px black;
		text-shadow:
			1px 1px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	a:hover {
		color: white;
	}

	a:active {
		color: var(--neutral-200);
	}

	@media only screen and (max-width: 450px) {
		nav {
			top: 16px;
		}
		nav div {
			padding: 0px 8px;
		}
	}
</style>
