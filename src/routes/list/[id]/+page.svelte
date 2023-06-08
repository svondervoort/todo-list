<script lang="ts">
    import type {PageData} from './$types';
    import Category from '$lib/components/Category.svelte';

    export let data: PageData;
</script>

<div class="divide-y divide-white/20 sm:rounded leading-5 text-white ring-1 ring-white/20 overflow-hidden">
    {#each data.list.categories as category (category.id)}
        <Category {...category}/>
    {/each}
</div>