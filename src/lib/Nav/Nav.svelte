<!-- Nav: Display all elements for Navigation -->
<script lang="ts">
	import NavButton from "./NavButton.svelte";

    // Transition
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte';
    let isMounted = false
    onMount(()=>{
        isMounted = true
    })
</script>

{#if isMounted}
    <nav class="header">
         <div transition:fly={{delay: 300, y: 20}}>
             <NavButton
                 highlighted={true} 
                 buttonText="SJ's Portfolio" />
         </div>
         <div class="divider" transition:fly={{delay: 400, y: 20}}></div>
         <div transition:fly={{delay: 500, y: 20}}>
         <NavButton 
             buttonText="About" />
         </div>
         <div class="divider" transition:fly={{delay: 600, y: 20}}></div>
         <div transition:fly={{delay: 700, y: 20}}>
         <NavButton 
             buttonText="Contact" />
         </div>
     </nav>
{/if}

<style>
    nav {
        width: 100%;
        display: flex;
        gap: 16px;
        align-items: center;
        position: absolute;
        top: 40px;
        left: 40px;
    }

    .divider {
        width: 6px;
        height: 6px;
        background: var(--neutral-500);
        border-radius: 50%;
    }
</style>