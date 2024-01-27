<script lang="ts">
    // JSON stored somewhere
    import {data} from '../../data/data'
    const projects = data.projects
	import { onMount } from "svelte";
	import Card from "./Card.svelte";

    let cardsAnimationState: number[] = []
    let initAnimation: () => void
    let moveCardsAnimation: (direction: 'left' | 'right', distance?: number) => void
    onMount(()=>{
        // // When page is loaded
        // initAnimation = () => {
        //     anime.timeline({
        //         targets: '.card',
        //         easing: 'spring',
        //         autoplay: true
        //     }).add({    
        //         translateX: function(_el: HTMLElement, i: number, _length: number) {
        //             return 2000
        //         },
        //         // duration: 0,
        //         scale: function(el: HTMLElement, i: number, _length: number) {
        //             const closestElementIndex = cardsAnimationState.findIndex((val)=> val === 0)
        //             const distanceFromCenter = Math.abs(closestElementIndex - i)
        //             // Always show the closest in front of the rest
        //             el.style.zIndex = String(length - distanceFromCenter)
        //             const scaleDownWhenFurtherFromCenter = 1 - distanceFromCenter/length
        //             return scaleDownWhenFurtherFromCenter
        //         },
        //         duration: 1000,
        //         opacity: 1,
        //         delay: anime.stagger(500),
        //         easing: 'easeInQuad',
        //         // autoplay: true,
        //         // loop: true,
        //     }).add({
        //     })
        // }

        // Called by a button
        
        // moveCardsAnimation(500, 'right')
        // initAnimation()
    })
    
</script>

<div class="carousel">
    {#each projects as project}
        <Card project={project} class='card' />
    {/each}
    <p>{projects.length}</p>
    <div class="arrow-container">
        <button on:click={(_e)=>moveCardsAnimation('left')}>
            {"<"}
        </button>
        <button on:click={(_e)=>moveCardsAnimation('right')}>
            >
        </button>
    </div>
</div>

<style>
    div {
        position: absolute;
        display: flex;
        top: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    p {
        position: absolute;
        bottom: 8px;
    }

    button {
        font-size: 2rem;
        z-index: 100;
        transition: all 0.5s;
        background-color: rgba(1, 1, 1, 0.2);
    }

    button:active {
        background-color: var(--neutral-500);
    }

    .arrow-container {
        width: 90%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
    }
</style>