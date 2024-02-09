<script lang="ts">
	import BgVideo from "./BgVideo.svelte";
	import Carousel from "./Carousel/Carousel.svelte";
	import LoadingCard from "./Carousel/LoadingCard.svelte";

	// Loading State
	import { data } from "../data/data";
	const firstProject = data.projects[0];
</script>

<section>
	<LoadingCard project={firstProject} />
	<BgVideo />
	<Carousel />
</section>

<style>
	section {
		width: 100%;
		height: 100dvh;
		position: relative;
	}
</style>
