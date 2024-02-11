<script lang="ts">
	import anime from "animejs";
	export let isCurrent = false;
	export let project: Project;
	import type { Project } from "../../data/data";
	import { primaryColour } from "../../stores/colourStore";
	import {
		cardsMoving,
		videoSrc,
		videosLoading,
		portfolioEntered,
	} from "../../stores/portfolioStore";
	import Icon from "../Icon/Icon.svelte";

	// Data
	const projectTitleId = project.title
		.replaceAll("/", "-")
		.replaceAll(".", "-"); // To make the project.title usable in classes and ids

	// Video
	let video: HTMLVideoElement;
	const updateVideo = () => {
		if (!video) return;
		if (isCurrent && project.video) {
			videoSrc.set(project.video);
			primaryColour.set(project.colour);
			video.play();
		} else {
			video.pause();
			if (flipped) flipCard();
		}
	};
	$: isCurrent, updateVideo();

	let videoReadyState: number;
	const handleVideoReadyStateChange = (state: number) => {
		const isLoading = state !== 4;
		videosLoading.set({
			...$videosLoading,
			projectVideos: [
				...$videosLoading.projectVideos,
				{ loading: isLoading, projectName: project.title },
			],
		});
	};
	$: handleVideoReadyStateChange(videoReadyState);

	// Hover
	let callbackOnceMoved: NodeJS.Timeout | null = null;
	const getRandomRotation = (): number => {
		let rand = Math.random();
		// Make rotation noticeable always > 0.5 and < -0.5
		if (rand < 0.5) rand = -1 + rand;
		return rand * 2;
	};
	const handleHover = (isHovering: boolean) => {
		if ($cardsMoving && !callbackOnceMoved) {
			callbackOnceMoved = setTimeout(() => {
				var element = document.querySelector(
					"." + project.title + " button",
				);
				if (!element) return;
				handleHover(element.matches(":hover"));
				callbackOnceMoved = null;
			}, 900);
		}
		if (!$cardsMoving && !flipping) {
			anime({
				targets: "." + project.title,
				translateY: isHovering ? -10 : 0,
				rotate: isHovering ? getRandomRotation() : 0,
			});
		}
	};
	const updateHover = () => {
		const element = document.querySelector("." + project.title + " button");
		if (!element) return;
		const isHovering = element.matches(":hover");
		anime({
			targets: "." + project.title,
			translateY: isHovering ? -10 : 0,
			rotate: isHovering ? getRandomRotation() : 0,
		});
	};

	// Click
	let flipped = false;
	let flipping = false;
	const flipCard = () => {
		flipping = true;
		anime({
			targets: "#" + projectTitleId + "video-side",
			rotateY: flipped ? 0 : 180,
			opacity: flipped ? 1 : 0,
			duration: 2000,
		});

		anime
			.timeline({
				targets: "#" + projectTitleId + "details",
			})
			.add({
				rotateY: 180,
				duration: 0,
			})
			.add({
				rotateY: flipped ? 180 : 0,
				opacity: flipped ? 0 : 1,
				duration: 2000,
			});
		flipped = !flipped;
		setTimeout(() => {
			updateHover();
			flipping = false;
		}, 1000);
	};

	// Details
	let readMore = false;
	const getDescription = (readMore: boolean, project: Project): string => {
		if (!project.description) return "";
		if (readMore) {
			return project.description;
		} else {
			return project.description.slice(0, 100) + "...";
		}
	};
	let descriptionVisible = getDescription(readMore, project);
	$: descriptionVisible = getDescription(readMore, project);
	let secondaryLinkColour = project.colour;
</script>

<article
	class={`${projectTitleId} ${$$restProps.class}`}
	style={`
		${!isCurrent ? "opacity: 0.3;" : ""} 
		--project-colour: ${project.colour}; 
		opacity: ${$portfolioEntered ? "1" : "0"};
	`}
>
	<div class="video-side" id={projectTitleId + "video-side"}>
		<button
			class="video-side-button"
			on:mouseenter={() => handleHover(true)}
			on:mouseleave={() => handleHover(false)}
			on:click={() => flipCard()}
			disabled={!isCurrent || flipped}
		>
			View more
		</button>
		<video
			class="card-bg-video"
			playsinline
			width="100%"
			height="100%"
			loop
			bind:this={video}
			autoplay
			muted
			bind:readyState={videoReadyState}
		>
			<source src={project.video} type="video/mp4" />
			<track kind="captions" />
		</video>
		<div class="card-shine"></div>
		<div class="bottom-right-shadow"></div>
		<h3 class="project-title">
			{project.title}, <span>{project.tagline}</span>
		</h3>
		<p class="cta">Click me</p>
	</div>
	<!-- Card Details -->
	<section
		class={`details-container`}
		id={projectTitleId + "details"}
		style={!flipped ? "display: none" : ""}
	>
		<div class="card-shine"></div>
		<div class="bottom-right-shadow"></div>
		<div class="details-header">
			<h2 class="details-title">{project.title}</h2>
			<Icon color={project.colour} size="lg" name={project.icon} />
		</div>
		<div class="video-container">
			<video
				class="mini-video"
				playsinline
				width="auto"
				height="100%"
				loop
				bind:this={video}
				autoplay
				muted
			>
				<source src={project.video} type="video/mp4" />
				<track kind="captions" />
			</video>
			<a
				tabindex={!flipped || !isCurrent ? -1 : 0}
				aria-disabled={!flipped || !isCurrent}
				href="/"
			>
				{project.tag.text}
			</a>
		</div>
		<div class="details-content-container">
			<div class="description-container">
				<p contenteditable="false">
					<!-- Generate <br> tags -->
					{#if $portfolioEntered}
						{#each descriptionVisible.split("<br>") as textBeforeLineBreak}
							<span>{textBeforeLineBreak}<br /></span>
						{/each}
					{/if}
					<button
						style={readMore ? "display: block; margin: 0;" : ""}
						on:click={() => (readMore = !readMore)}
					>
						{readMore ? "Read less" : "Read more"}
					</button>
				</p>
			</div>
			<div class="highlights-container">
				{#each project.highlights as highlight}
					<div class="highlight-row">
						<div class="highlight-icons">
							{#each highlight.icons as icon}
								<Icon
									color={project.colour}
									size="m"
									name={icon}
								/>
							{/each}
						</div>
						{#if highlight.link}
							<a
								class="highlight-link"
								tabindex={!flipped || !isCurrent ? -1 : 0}
								aria-disabled={!flipped || !isCurrent}
								href={highlight.link}
							>
								{highlight.text}
								<div class="link-arrow-container">
									<Icon
										name="Arrow"
										color={project.colour}
										size="xs"
									/>
								</div>
							</a>
						{:else}
							<h6>{highlight.text}</h6>
						{/if}
					</div>
				{/each}
			</div>
			<div class="project-details-footer">
				<a
					tabindex={!flipped || !isCurrent ? -1 : 0}
					aria-disabled={!flipped || !isCurrent}
					href={project.link}
					class="primary"
					style={`color: ${project.lightMode ? "white" : "black"}`}
				>
					Go to site <div class="link-arrow-container">
						<Icon
							name="Arrow"
							color={project.lightMode ? "white" : "black"}
							size="s"
						/>
					</div>
				</a>
				{#if project.secondaryLink}
					<a
						href={project.secondaryLink.link}
						class="secondary-link"
						on:mouseenter={() => {
							secondaryLinkColour = "white";
						}}
						on:mouseleave={() => {
							secondaryLinkColour = project.colour;
						}}
						on:click={() => {
							secondaryLinkColour = project.colour;
							setTimeout(() => {
								secondaryLinkColour = "white";
							}, 150);
						}}
					>
						<Icon
							size="lg"
							color={secondaryLinkColour}
							transitionColourInMs={300}
							name={project.secondaryLink.icon}
						/>
					</a>
				{/if}
			</div>
		</div>
	</section>
</article>

<style>
	article {
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

	.project-title span {
		color: var(--neutral-200);
	}

	.project-title {
		z-index: 5;
		-webkit-text-stroke: 1px black;
		color: white;
		text-shadow:
			3px 3px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000;
		padding: 0px 32px;
		margin: 0px;
		font-size: 24px;
		max-width: 220px;
		margin-top: 80px;
	}

	.cta {
		z-index: 5;
		color: var(--project-colour);
		border: solid 1.5px var(--project-colour);
		border-radius: 8px;
		backdrop-filter: blur(10px);
		padding: 4px 24px;
		margin: 0px;
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 40px;
	}

	/* DETAILS */
	.details-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		/* initial state */
		opacity: 0;
		/* Bg */
		background-color: rgba(24, 24, 24, 0.5); /* Neutral-900 */
		border-radius: 20px;
	}

	.details-title {
		margin: 0;
		font-size: 28px;
	}

	.details-header {
		display: flex;
		padding: 24px 48px 0px 48px;
		justify-content: space-between;
	}

	.video-container {
		width: auto;
		height: 200px;
		border: solid var(--project-colour) 2px;
		margin: 0 32px;
		position: relative;
	}

	.mini-video {
		width: 100%;
		object-fit: cover;
		height: 160px;
	}

	.video-container a {
		position: absolute;
		top: 12px;
		right: 12px;
		padding: 4px 12px;
		color: var(--project-colour);
		border: solid 1px var(--project-colour);
		border-radius: 12px;
		background-color: rgba(1, 1, 1, 0.2);
	}

	.details-content-container {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-left: 40px;
		margin-right: 40px;
		justify-content: start;
		align-items: start;
		text-align: left;
		height: 100%;
		overflow-y: auto;
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 1) 80%,
			rgba(0, 0, 0, 0) 90%
		);
	}

	/* Scrollbar style */
	.details-content-container::-webkit-scrollbar {
		width: 4px;
	}
	.details-content-container::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.2);
	}
	.details-content-container::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: var(--project-colour);
	}
	.details-content-container::-webkit-scrollbar-thumb:hover {
		background: var(--project-colour);
	}

	.description-container {
		font-size: 16px;
	}

	.description-container button {
		display: inline-block;
		font-size: 16px;
		font-weight: 700;
		color: var(--project-color);
		border: none;
		padding: 0;
		background: none;
	}

	.highlights-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.highlight-row {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.highlight-icons {
		display: flex;
		row-gap: 4px;
		column-gap: 12px;
		flex-wrap: wrap;
		max-width: 60px;
	}

	.highlight-link {
		display: flex;
		gap: 4px;
		color: var(--project-colour);
		text-decoration: underline;
	}

	h6 {
		font-size: 16px;
		font-weight: 700;
		margin: 0;
		padding: 0;
	}

	.project-details-footer {
		display: flex;
		align-items: end;
		justify-content: center;
		width: 100%;
		margin-top: auto;
		margin-top: 16px;
		margin-bottom: 32px;
		gap: 16px;
	}

	.primary {
		z-index: 5;
		display: flex;
		gap: 12px;
		font-weight: 700;
		border: none;
		background-color: var(--project-colour);
		padding: 8px 24px;
		border-radius: 12px;
		justify-content: center;
	}

	.secondary-link {
		height: 40px;
		padding: 0;
		margin: 0;
		align-items: end;
	}

	@media only screen and (max-width: 350px) {
		.link-arrow-container {
			display: none;
		}
	}
</style>
