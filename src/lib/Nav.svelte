<script lang="ts">
	import NavButton from "./NavButton.svelte";

    
</script>

<nav class="header">
    <NavButton highlighted={true} buttonText="SJ's Portfolio" />
    <div></div>
    <NavButton buttonText="About" />
    <div></div>
    <NavButton buttonText="Contact" />
</nav>

<style>
    nav {
        width: 100%;
        display: flex;
        gap: 16px;
        align-items: center;
    }

    div {
        width: 8px;
        height: 8px;
        background: var(--neutral-500);
        border-radius: 50%;
    }
</style>