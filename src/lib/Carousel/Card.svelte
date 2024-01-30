<script lang="ts">
	import anime from "animejs";
    export let isCurrent = false
    export let project: Project
	import type { Project } from "../../data/data";
	import { primaryColour } from "../../stores/colourStore";
	import { cardsMoving, videoSrc } from "../../stores/portfolioStore";
    
    // Video
    let video: HTMLVideoElement
    const updateVideo = () => {
        if(!video) return
        if(isCurrent && project.video){
            videoSrc.set(project.video)
            primaryColour.set(project.colour)
            video.play() 
        } else {
            video.pause()
        }
    }
    $: isCurrent, updateVideo()

    // Hover
    let hovering = false
    let callbackOnceMoved = null
    const getRandomRotation = (): number => {
        let rand = Math.random()
        // Make rotation noticeable always > 0.5 and < -0.5
        if(rand < 0.5) rand = -1 + rand
        return rand * 2
    }
    const handleHover = (isHovering: boolean) => {
        hovering = isHovering
        if($cardsMoving){
            callbackOnceMoved = setTimeout(()=>{
                handleHover(hovering)
                callbackOnceMoved = null
            }, 500)
        }
        if(!$cardsMoving){
            anime({
                targets: '.'+project.title,
                translateY: isHovering ? -10 : 0,
                rotate: isHovering ? getRandomRotation() : 0,
            })
        }
    }
    // Click
    
</script>

<article class={`${project.title} ${$$restProps.class}`} style={!isCurrent ? "opacity: 0.3;" : ""}>
    <button 
        on:mouseenter={()=>handleHover(true)}
        on:mouseleave={()=>handleHover(false)}
    ></button>
    <div class="card-shine"></div>
    <video width="100%" height="100%" loop bind:this={video} autoplay muted>
        <source src={project.video} type="video/mp4" />
        <track kind="captions" />
    </video>
    <div class="bottom-right-shadow"></div>
    <h3 class="project-title">{project.title}, <span>{project.tagline}</span></h3>
    <h4 class="cta"><img src="/images/Play.svg" alt="">Press anywhere to start</h4>
</article>

<style>
    article {
        position: absolute;
        background-color: var(--neutral-900);
        width: 70vw;
        max-width: 429px;
        height: 70vh;
        border-radius: 17px;
        box-shadow: 8px 8px 30px -4px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        transition: opacity 0.3s;
    }
    button {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        z-index: 10;
        background: none;
        border: none;
    }
    .video-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    .bottom-right-shadow {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        z-index: 2;
        position: absolute;
        
        pointer-events: none;
    }

    video {
        z-index: 1;
        position: absolute;
        border-radius: 20px;
        object-fit: cover;
    }

    .card-shine {
        position: absolute;
        z-index: 2;
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
        z-index: 3;
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
        z-index: 3;
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
        font-size: 16px;
        margin-bottom: 80px;
        display: flex;
        gap: 8px;
    }
    .cta img {
        width: 12px;
        padding-bottom: 2px;
    }



    .button-container {
        display: flex;
        gap: 24px;
        z-index: 3;
    }

    .primary {
        z-index: 3;
        display: flex;
        gap: 16px;
        color: black;
        font-weight: 700;
        border: none;
    }
</style>