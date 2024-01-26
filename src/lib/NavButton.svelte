<script lang="ts">
    export let buttonText: string
    export let highlighted: boolean = false
    
    // Update button colour based on dynamic store value
    import { primaryColour } from '../stores/colourStore'
    let highlightedColour = String(primaryColour)
    primaryColour.subscribe((newColour)=>{highlightedColour = newColour})
</script>

<button style="color:{highlighted ? highlightedColour : 'var(--neutral-500)'}; 
        text-decoration: underline;">
    {buttonText}
</button>

<style>
    button {
        background: none;
        font-size: 1.5rem;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
</style>