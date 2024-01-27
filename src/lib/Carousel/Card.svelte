<script lang="ts">
    export let project: Project
    
	import type { Project } from "../../data/data";
</script>

<article class={$$restProps.class}>
    <div class="bottom-right-shadow"></div>
    <h1>{project.title}, <span>{project.tagline}</span></h1>
</article>

<style>
    article {
        position: absolute;
        background-color: var(--neutral-900);
        width: 70vw;
        max-width: 529px;
        height: 70vh;
        /* padding: 12px; */
        border-radius: 17px;
        box-shadow: inset 8px 8px 30px -25px white;
    }
    
    .bottom-right-shadow {
        width: 100%;
        height: 100%;
        border-radius: 17px;
        position: absolute;
        box-shadow: 16px 16px 30px -25px black;
    }

    h1 span {
        color: var(--neutral-500);
        font-size: 1.5rem;
    }
    h1 {
        padding-left: 32px;
        padding-right: 32px;
    }
</style>