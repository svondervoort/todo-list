<script>
    import Item from '$lib/components/Item.svelte';

    export let id;
    export let title;
    export let color = 'text-slate-900';
    export let items;
</script>

{#if items.length > 0}
    <div class="divide-y divide-white/20">
        <div class="px-4 py-2 md:px-8 md:py-4">
            <h1 class="text-sm md:text-md font-bold text-white">{title}</h1>
        </div>
        {#each items as item (item.id)}
            <Item {...item}/>
        {/each}
    </div>
{/if  }