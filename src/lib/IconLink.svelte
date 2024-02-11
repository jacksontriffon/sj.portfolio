<script lang="ts">
	import Icon from "./Icon/Icon.svelte";
	import type { IconName, IconSize } from "./Icon/icon";

	export let defaultIconColor: string;
	export let iconHoverColor: string;
	export let iconName: IconName;
	export let size: IconSize;
	export let href: string;

	let iconColor = defaultIconColor;
	$: defaultIconColor, (iconColor = defaultIconColor);
</script>

<a
	{href}
	on:mouseenter={() => {
		iconColor = iconHoverColor;
	}}
	on:mouseleave={() => {
		iconColor = defaultIconColor;
	}}
	on:click={() => {
		iconColor = defaultIconColor;
		setTimeout(() => {
			iconColor = iconHoverColor;
		}, 150);
	}}
>
	<Icon {size} color={iconColor} transitionColourInMs={300} name={iconName} />
</a>
