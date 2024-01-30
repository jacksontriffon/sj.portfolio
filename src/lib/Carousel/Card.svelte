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
    
    let callbackOnceMoved: NodeJS.Timeout | null = null
    const getRandomRotation = (): number => {
        let rand = Math.random()
        // Make rotation noticeable always > 0.5 and < -0.5
        if(rand < 0.5) rand = -1 + rand
        return rand * 2
    }
    const handleHover = (isHovering: boolean) => {
        if($cardsMoving && !callbackOnceMoved){
            callbackOnceMoved = setTimeout(()=>{
                var element = document.querySelector('.'+project.title+' button');
                if(!element) return
                handleHover(element.matches(':hover'))
                callbackOnceMoved = null
            }, 900)
        }
        if(!$cardsMoving && !flipping){
            anime({
                targets: '.'+project.title,
                translateY: isHovering ? -10 : 0,
                rotate: isHovering ? getRandomRotation() : 0,
            })
        }
    }
    const updateHover = () => {
        const element = document.querySelector('.'+project.title+' button');
        if(!element) return
        const isHovering = element.matches(':hover')
        anime({
            targets: '.'+project.title,
            translateY: isHovering ? -10 : 0,
            rotate: isHovering ? getRandomRotation() : 0,
        })
    }
    // Click
    let flipped = false
    let flipping = false
    const showDetails = () => {
        flipping = true
        anime({
            targets: '#'+project.title+"video-side",
            rotateY: flipped ? 0 : 180,
            opacity: flipped ? 1 : 0,
            duration: 2000
        })

        anime.timeline({
            targets: '#'+project.title+'details',
        }).add({
            rotateY: 180,
            duration: 0
        }).add({
            rotateY: flipped ? 180 : 0,
            opacity: flipped ? 0 : 1,
            duration: 2000
        })
        flipped = !flipped
        setTimeout(()=>{
            updateHover()
            flipping = false
        }, 1000)
    }
</script>

<article class={`${project.title} ${$$restProps.class}`} style={`${!isCurrent ? "opacity: 0.3;" : ""} --project-colour: ${project.colour}`}>
    <div class="video-side" id={project.title+"video-side"}>
        <button 
            on:mouseenter={()=>handleHover(true)}
            on:mouseleave={()=>handleHover(false)}
            on:click={()=>showDetails()}
        ></button>
        <video 
            class="card-bg-video" width="100%" height="100%" loop 
            bind:this={video} autoplay muted style={`opacity:${flipped}`}
        >
            <source src={project.video} type="video/mp4" />
            <track kind="captions" />
        </video>
        <div class="card-shine"></div>
        <div class="bottom-right-shadow"></div>
        <h3 class="project-title">{project.title}, <span>{project.tagline}</span></h3>
        <h4 class="cta"><img src="/images/Play.svg" alt="">Press anywhere to start</h4>
    </div>
    <!-- Card Details -->
    <section class={`details-container`} id={project.title+'details'}>
        <div class="card-shine"></div>
        <div class="bottom-right-shadow"></div>
        <div class="details-header">
            <h2 class="details-title">{project.title}</h2>
            <img class="project-icon" src={project.icon.src} alt={project.icon.alt}>
        </div>
        <div class="video-container">
            <video class="mini-video" width="auto" height="100%" loop bind:this={video} autoplay muted>
                <source src={project.video} type="video/mp4" />
                <track kind="captions" />
            </video>
            <a href="/">{project.tag.text}</a>
        </div>
        <div class="details-content-container">
            <p contenteditable="false" bind:innerText={project.description}></p>
            <a href={project.link} class="primary">Go to site <img src='/public/images/Arrow.svg' alt="External link's arrow"></a>
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
    button {
        position: absolute;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        /* display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 8px; */
        z-index: 10;
        background: none;
        border: none;
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
        background-color: rgba(0,0,0, 0.5);
        border-radius: 20px;
    }
/* 
    .details-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 12px;
        pointer-events: none;
    } */

    .details-title {
        margin: 0;
    }

    .details-header {
        display: flex;
        padding: 24px 48px 0px 48px;
        justify-content: space-between;
    }

    .project-icon{
        fill: green;
    }

    .video-container {
        width: auto;
        height: 200px;
        border: solid var(--project-colour) 2px;
        margin: 0 32px;

    }
    /* .video-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
     */
    .mini-video {
        width: 100%;
        object-fit: cover;
    }

    .video-container a {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 4px 12px;
        color: var(--project-colour);
        border: solid 1px var(--project-colour);
        border-radius: 12px;
        background-color: rgba(1,1,1,0.2);
    }

    .details-content-container {
        display: flex;
        flex-direction: column;
        padding: 0px 48px;
        justify-content: start;
        align-items: start;
        text-align: left;
    }

    
    .button-container {
        display: flex;
        gap: 24px;
        z-index: 5;
    }

    .primary {
        z-index: 5;
        display: flex;
        gap: 12px;
        color: black;
        font-weight: 700;
        border: none;
        background-color: var(--project-colour);
        padding: 8px 24px;
        border-radius: 12px;
    }
    .primary img {
        width: 12px;
    }
</style>