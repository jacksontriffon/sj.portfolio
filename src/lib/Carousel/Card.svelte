<script lang="ts">
    export let isCurrent = false
    export let project: Project
	import type { Project } from "../../data/data";
	import { videoSrc } from "../../stores/portfolioStore";
    
    // Video
    let video: HTMLVideoElement
    const updateVideo = () => {
        if(!video) return
        if(isCurrent && project.video){
            videoSrc.set(project.video)
            video.play() 
        } else {
            video.pause()
        }
    }
    $: isCurrent, updateVideo()
</script>

<article class={$$restProps.class}>
    <div class="bottom-right-shadow"></div>
    <h1>{project.title}, <span>{project.tagline}</span></h1>
    <video width="80%" height="65%" loop bind:this={video}>
        <source src={project.video} type="video/mp4" />
        <track kind="captions" />
    </video>
</article>

<style>
    article {
        position: absolute;
        background-color: var(--neutral-900);
        width: 70vw;
        max-width: 529px;
        height: 70vh;
        border-radius: 17px;
        box-shadow: inset 8px 8px 30px -25px white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
    
    .bottom-right-shadow {
        width: 100%;
        height: 100%;
        border-radius: 17px;
        position: absolute;
        box-shadow: 16px 16px 30px -25px black;
        pointer-events: none;
    }

    h1 span {
        color: var(--neutral-500);
        font-size: 1.5rem;
    }
    h1 {
        padding: 0px 32px;
        margin: 0px;
    }

    video {
        z-index: 10;
        border-radius: 20px;
        margin: 0 64px;
    }
</style>