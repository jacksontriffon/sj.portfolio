<!-- Nav: Display all elements for Navigation -->
<script lang="ts">
	import NavButton from "./NavButton.svelte";

	// Transition
	import { fly } from "svelte/transition";
	import Icon from "../Icon/Icon.svelte";
	import { portfolioIsLoading } from "../../stores/portfolioStore";

	// Button Hover
	let anchorTagColor = "var(--neutral-200)";
</script>

{#if !$portfolioIsLoading}
	<nav class="header">
		<div transition:fly={{ delay: 300, y: 20 }}>
			<NavButton highlighted={true} buttonText="SJ's Portfolio" />
		</div>
		<div transition:fly={{ delay: 600, y: 20 }}>
			<a
				href="/documents/SJ's Resume.pdf"
				download="SJs-resume.pdf"
				on:mouseenter={() => {
					anchorTagColor = "var(--neutral-200)";
				}}
				on:mouseleave={() => {
					anchorTagColor = "var(--neutral-500)";
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
		color: var(--neutral-500);
		transition: color 0.2s;
	}

	a:hover {
		color: var(--neutral-200);
	}

	a:active {
		color: white;
	}
</style>
