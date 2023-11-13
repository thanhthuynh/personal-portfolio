<script lang="ts">
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';

	export let items: Array<Skill> = [];
	const delay = 2000;

	const visibleItems = 3;

    let element: HTMLElement;
    let timeout: unknown;
    let index = 0;
    let downward = true;

	$: {
		if (element) {
			element.scroll({
				top: index * 190,
				behavior: 'smooth'
			});
		}
	}
    const slide = (down: boolean) => {
        if (down) {
            if (index < items.length - visibleItems) {
                index++;
            } else {
                index--;
                downward = false;
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                index++;
                downward = true;
            }
        }
    };

    const toggle = (down: boolean) => {
        clearTimeout(timeout as number);
        timeout = setTimeout(() => {
            slide(down);
            toggle(downward);
        }, delay);
    };

	const toggleUp = () => {
		clearTimeout(timeout as number);
		downward = false
		slide(false);
		toggle(downward);
	};

	const toggleDown = () => {
		clearTimeout(timeout as number);
		downward = true;
		slide(true);
		toggle(downward);
	};

	onMount(() => {
		toggle(true);
	});
</script>

<div class="carrousel flex-[0.5] column-center">
	<button
		class="column-center font-500 p-5px m-y-10px m-x-75px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleUp}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-up" />
	</button>

	<div bind:this={element} class="column overflow-hidden box-content h-[560px]">
		{#each items as item}
			<div class="box-content w-150px p-15px col-center">
				<img class="w-120px h-120px aspect-square" src={getAssetURL(item.logo)} alt={item.name} />
				<span class="text-center m-t-20px">{item.name}</span>
			</div>
		{/each}
	</div>

	<button
		class="column-center font-500 p-5px m-y-10px m-x-75px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleDown}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-down" />
	</button>
</div>
