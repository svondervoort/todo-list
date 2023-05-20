<script>
    import Product from '../components/product.svelte';

    export let id;
    export let name;
    export let color = 'text-slate-900';
    export let products;
</script>

{#if products.length > 0}
    <div class="divide-y divide-white/20">
        <div class="px-4 py-2 md:px-8 md:py-4">
            <h1 class="text-sm md:text-md font-bold text-white">{name}</h1>
        </div>
        {#each products as product (product.id)}
            <Product {...product}/>
        {/each}
    </div>
{/if  }