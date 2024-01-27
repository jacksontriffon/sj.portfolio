<!-- <script lang="ts">
    import { Core, Slidy, classNames, type SlidyCoreOptions,  } from "@slidy/svelte";
	import Card from "./Card.svelte";

    const slides = [
    {
        id: 1,
        width: 800,
        height: 1200,
        src: "../assets/card_bg.svg",
    },
    {
        id: 2,
        width: 800,
        height: 1200,
        src: "../assets/card_bg.svg",
    },
];
    const options: SlidyCoreOptions = {axis: "x", className: "carousel", }
    import {data} from '../data/data'
    const projects = data.projects
</script>

<Core {...options} >
        {#each projects as project}
            <Card project={project} />
        {/each}
      
</Core> -->

<!-- <script>
    import {Slidy} from '@slidy/svelte'
    let slidy = null,
        animation = null,
        easing = null,
        node = document.querySelector('#slidy')

        window.onload = () => {
            animation = Slidy.animation.flip
            easing = Slidy.easing.cubic
            plugin = Slidy.plugin.play
            slidy = Slidy.core(node, { animation, easing, plugins: [ plugin() ] });
        }
</script>

<section>
    <ul id="slidy">
        <div></div>
        <li>...</li>
        <li>...</li>
    </ul>
</section>

<style>
    div {
        background: white;
        width: 100px;
        height: 100;
    }

    .carousel {
        width: 100%;
        height: 100%;
        background-color: aliceblue;
    }
</style> -->

<svelte:options immutable={true}/>

<script>
	import { Slidy } from '@slidy/svelte'

	let index = 4, position = 0, limit = 9

    const slides = [
        {
            id: 1,
            width: 800,
            height: 1200,
            src: "../assets/card_bg.png",
        },
        {
            id: 2,
            width: 800,
            height: 1200,
            src: "https://images.unsplash.com/photo-1548689299-ded8bdeeefbf?w=640",
        },
        {
            id: 3,
            width: 800,
            height: 1200,
            src: "https://images.unsplash.com/photo-1548689299-ded8bdeeefbf?w=640",
        },
        {
            id: 4,
            width: 800,
            height: 1200,
            src: "https://images.unsplash.com/photo-1548689299-ded8bdeeefbf?w=640",
        },
    ];
</script>

<main>
	<Slidy 
		{slides}
		bind:index 
		bind:position
		snap="center"
		thumbnail
		>
        
    </Slidy>
</main>

<style>
	@import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
	main {
		height: 75%
	}
</style>