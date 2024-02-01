<script lang="ts">
	import type { AriaType, IconName } from "./icon";

    export let name: IconName
    export let ariaType: AriaType = 'stand-alone'
    export let size: 'xs' | 's' | 'm' | 'lg'
    export let color = 'white'

    const mapSizeToPixels = {
        xs: '12px',
        s: '16px',
        m: '24px',
        lg: '40px'
    }
    const iconFilePath = "/images/icons.svg"
</script>

<svg
    {...(ariaType === 'stand-alone' && { role: 'img' })}
    {...(ariaType === 'decorative' && { 'aria-hidden': true })}
    {...(ariaType === 'hidden' && { 'aria-hidden': true })}
    style={`width: ${mapSizeToPixels[size]}; height: ${mapSizeToPixels[size]}`}
    color={color}    
>
    <use href={`${iconFilePath}#${name}`}></use>
</svg>