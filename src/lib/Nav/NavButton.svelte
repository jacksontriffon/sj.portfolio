<!-- NavButton: Allows users to navigate to a new page -->
<script lang="ts">
	export let buttonText: string;
	export let highlighted: boolean = false;

	// Update button colour based on dynamic store value
	import { primaryColour } from "../../stores/colourStore";
</script>

<button
	style={`
    color:
        ${highlighted ? $primaryColour : "var(--neutral-500)"}; 
    --project-colour: ${$primaryColour}
    `}
>
	{buttonText}
</button>

<style>
	button {
		background: none;
		font-size: 1.25rem;
		font-weight: 900;
		border: none;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 4px;
		padding-bottom: 4px;
		/* -webkit-text-stroke: 0.01px rgba(0, 0, 0, 0.1);
		text-shadow:
			1px 1px 0 #000,
			-1px -1px 0 #000,
			1px -1px 0 #000,
			-1px 1px 0 #000,
			1px 1px 0 #000; */
	}
	button:focus {
		outline: 2px solid var(--project-colour);
	}
</style>
