<script lang="ts">
	import Nav from "./lib/Nav/Nav.svelte";
	import Portfolio from "./lib/Portfolio.svelte";
</script>

<main>
	<Portfolio />
	<Nav />
</main>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: start;
		max-height: none;
		margin: 0 auto;
		max-width: 1920px;
		width: 100%;
		height: 100%;
	}
</style>
