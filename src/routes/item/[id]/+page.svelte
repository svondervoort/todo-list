<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;

    console.log(data);
</script>

<div class="sm:rounded leading-5 text-white ring-1 ring-white/20 overflow-hidden">
    <form class="flex flex-col divide-y divide-white/20">
        <div>
            <label>title</label>
            <input type="text" bind:value={data.item.title} />
        </div>
        <div>
            <label>price</label>
            <input type="text" bind:value={data.item.price} />
        </div>
        <div>
            <label>amount</label>
            <input type="number" min="1" bind:value={data.item.amount} />
        </div>
        <div>
            <label>notes</label>
            <textarea bind:value={data.item.notes}></textarea>
        </div>
    </form>
</div>

<code class="text-white">{JSON.stringify(data.item, 0, 2)}</code>