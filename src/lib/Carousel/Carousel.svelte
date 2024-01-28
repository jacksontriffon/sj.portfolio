<!-- Carousel: Allows users to navigate between projects -->
<script lang="ts">
    // JSON stored somewhere
    import {data} from '../../data/data'
    const projects = data.projects
	import Card from "./Card.svelte";
    
    // State
    let currentProjectIndex: number
    let lastProjectIndex = projects.length - 1
    // Card Animation
	import { onDestroy, onMount } from "svelte";
	import { initAnimation, moveCardsAnimation } from './carouselAnimations';
    let cardsAnimationState: number[] = projects.map((_val, i)=>{
        // Set each card's initial distance
        const distance = 600
        return i * distance
    })

    // Listen to arrow and wasd keys
    // const keydownHandler = (e: KeyboardEvent) => {
    //     let direction: "" | 'right' | 'left' = ""
    //     switch(e.code){
    //         case 'KeyD':
    //         case 'ArrowRight':
    //             direction = 'right'
    //             break;
    //         case 'KeyA':
    //         case 'ArrowLeft':
    //             direction = 'right'
    //             break;                
    //     }
    //     // Handle edge cases
    //     if(!direction) return
    //     if (direction === 'left' && currentProjectIndex >= lastProjectIndex) return
    //     if (direction === 'left' && currentProjectIndex <= 0) return
    //     moveCards(direction)
    // }
    onMount(()=>{
        initAnimation()
        currentProjectIndex = 0 // Triggers any function reacting to this variable (e.g. play the current video)

        // window.addEventListener('keydown', keydownHandler)
    })
    // onDestroy(()=>{
    //     window.removeEventListener('keydown', keydownHandler)
    // })

    const moveCards = (direction: 'right' | "left") => {
        // Update state
        if (direction === "right") currentProjectIndex++
        else currentProjectIndex--
        // Animate cards
        moveCardsAnimation(direction, currentProjectIndex, cardsAnimationState)
    }
</script>

<div class="carousel">
    {#each projects as project, i}
        <Card project={project} class='card' isCurrent={i === currentProjectIndex} />
    {/each}
    <p>{currentProjectIndex + 1} / {projects.length}</p>
    <div class="arrow-container">
        <button 
        hidden={currentProjectIndex <= 0}
        on:click={() => moveCards('left')}
        >
            {"<"}
        </button>
        <div></div>
        <button 
            hidden={currentProjectIndex >= lastProjectIndex}
            on:click={() => moveCards('right')}
        >
            >
        </button>
    </div>
</div>

<style>
    .carousel {
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
        pointer-events: all;
        padding: 8px 20px;
    }

    button:active {
        background-color: var(--neutral-500);
    }

    .arrow-container {
        width: 90%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        pointer-events: none;
    }

</style>