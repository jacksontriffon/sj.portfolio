<script lang="ts">
	import { videoSrc } from "../stores/portfolioStore";
    let video: HTMLVideoElement
    let source: HTMLSourceElement
    $: $videoSrc, updateVideo()
    const updateVideo = () => {
        if(!video || !source) return
        if($videoSrc){
            source.src = $videoSrc
            video.load()
            video.play() 
        } else {
            video.pause()
        }
    }
</script>

<video width="100%" height="100%" loop bind:this={video} autoplay muted>
    <source bind:this={source} src={$videoSrc} type="video/mp4" />
    <track kind="captions" />
</video>

<style>
    video {
        position: absolute;
        background-color: var(--neutral-900);
        top: 0;
        left: 0;
        object-fit: cover;
        filter: blur(8px);
    }
</style>