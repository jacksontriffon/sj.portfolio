<!-- Nav: Display all elements for Navigation -->
<script lang="ts">
	import NavButton from "./NavButton.svelte";

	// Transition
	import { fly } from "svelte/transition";
	import Icon from "../Icon/Icon.svelte";
	import { portfolioEntered } from "../../stores/portfolioStore";
	import { primaryColour } from "../../stores/colourStore";
	import IconLink from "../IconLink.svelte";

	// Button Hover
	let anchorTagColor = "var(--neutral-200)";
	let downloadedResume = false;
	let downloadedResumeAtleastOnce = false;
	$: () => {
		if (downloadedResume) anchorTagColor = $primaryColour;
	};
</script>

{#if $portfolioEntered}
	<nav class="header">
		<div class="left">
			<div transition:fly={{ delay: 300, y: 20 }}>
				<NavButton highlighted={true} buttonText="SJ's Portfolio" />
			</div>
			<div class="socials">
				<div transition:fly={{ delay: 400, y: 20 }}>
					<IconLink
						href={"https://github.com/jacksontriffon"}
						defaultIconColor={$primaryColour}
						size="m"
						iconName="GitHub"
						iconHoverColor="white"
					/>
				</div>
				<div transition:fly={{ delay: 500, y: 20 }}>
					<IconLink
						href={"https://www.linkedin.com/in/sj-triffon/"}
						defaultIconColor={$primaryColour}
						size="m"
						iconName="LinkedIn"
						iconHoverColor="white"
					/>
				</div>
			</div>
		</div>
		<div class="right" transition:fly={{ delay: 700, y: 20 }}>
			<a
				style={`--anchor-tag-color: ${downloadedResume ? $primaryColour : anchorTagColor};`}
				href="/documents/SJ's Resume 03.2024.pdf"
				download="SJs-resume.pdf"
				on:mouseenter={() => {
					if (!downloadedResume) {
						anchorTagColor = "white";
					}
				}}
				on:mouseleave={() => {
					if (!downloadedResume) {
						anchorTagColor = "var(--neutral-200)";
					}
				}}
				on:click={() => {
					downloadedResume = true;
					downloadedResumeAtleastOnce = true;
					setTimeout(() => {
						downloadedResume = false;
					}, 10000);
				}}
			>
				{downloadedResume
					? "Downloading..."
					: downloadedResumeAtleastOnce
						? "Download again?"
						: "Download Resume"}
				<Icon
					name="Download"
					size="m"
					color={downloadedResume ? $primaryColour : anchorTagColor}
				/>
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

	.header .left {
		display: flex;
		padding-left: 40px;
		align-items: center;
		flex-wrap: wrap;
	}

	.socials {
		display: flex;
		gap: 8px;
	}

	.header .right {
		display: flex;
		gap: 8px;
		padding-right: 40px;
	}

	a {
		color: var(--anchor-tag-color);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		/* background-color: rgba(0, 0, 0, 0.3); */
		/* backdrop-filter: blur(8px); */
		transition: color 0.2s;
		-webkit-text-stroke: 0.01px black;
		text-shadow:
			1px 1px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
	}

	@media only screen and (max-width: 450px) {
		nav {
			top: 16px;
		}
		.header .left {
			padding-left: 8px;
		}

		.header .right {
			padding-right: 8px;
		}
	}
</style>
