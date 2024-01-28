<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    export let buttonProps: HTMLButtonAttributes
    
    // Update bg color
	import { primaryColour } from '../stores/colourStore';
</script>

<button {...buttonProps} style={`${buttonProps.style} backgroundColour: ${primaryColour};`}>
    <img src="/images/Arrow.svg" alt="an arrow, meaning this button will open a new site">
</button>

<style>
    button {
        color: black;
    }
</style>