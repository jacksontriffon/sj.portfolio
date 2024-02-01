<!-- NavButton: Allows users to navigate to a new page -->
<script lang="ts">
    export let buttonText: string
    export let highlighted: boolean = false

    // Update button colour based on dynamic store value
    import { primaryColour } from '../../stores/colourStore'
</script>

<button 
    style={`
    color:
        ${highlighted 
            ? $primaryColour 
            : 'var(--neutral-500)'}; 
    --project-colour: ${$primaryColour}
    `}
>
    {buttonText}
</button>


<style>
    button {
        background: none;
        font-size: 1.25rem;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    button:focus {
        outline: 2px solid var(--project-colour);
    }
</style>