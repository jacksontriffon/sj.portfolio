<script lang="ts">
	import type { Project } from "../../data/data";

    export let flipped = false
    export let project: Project
</script>

<div class={$$restProps.class}>
    <h2>{project.title}</h2>
</div>

<style>
    .details-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
        /* rotate: 180; */
        /* background-color: var(--neutral-900); */
    }
</style>