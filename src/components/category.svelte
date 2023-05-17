<script>
    import Product from '../components/product.svelte';

    export let id;
    export let name;
    export let color = 'text-slate-900';
    export let products;
</script>

{#if products.length > 0}
    <div class="divide-y divide-slate-200">
        <div class="px-4 py-2 bg-slate-200">
            <h1 class="text-sm font-bold {color}">{name}</h1>
        </div>
        {#each products as product (product.id)}
            <Product {...product}/>
        {/each}
    </div>
{/if  }