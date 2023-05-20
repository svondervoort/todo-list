<script>
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faPencil} from "@fortawesome/free-solid-svg-icons/faPencil";

    import { settings } from '../stores/settings.js';
    let showChecked;
    settings.subscribe(value => {
        showChecked = value.showChecked;
    });

    export let id;
    export let name;
    export let price = null;
    export let amount = 1;
    export let notes = null;
    export let checked = false;
</script>

<label class:line-through={checked} class:opacity-50={checked} class:hidden={!showChecked && checked}
       class="block text-sm flex divide-x divide-white/20">
    <input hidden type=checkbox bind:checked={checked}>
    <span class="flex flex-1 items-center gap-4 px-4 py-2 md:gap-8 md:px-8 md:py-4 md:px-8 md:py-4">
        {#if amount}
            <span class="text-xs text-slate-400">
                {amount}x
            </span>
        {/if}
        <span class="flex-1">
            <span class="flex flex-col">
                <span>{name}</span>
                {#if notes}
                    <span class="text-xs text-slate-400">{notes}</span>
                {/if}
            </span>
        </span>
        {#if price}
            <span class:text-slate-400={checked} class="text-violet-500 font-bold">
                {new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(price)}
            </span>
        {/if}
    </span>
    <a href="#" class="px-4 py-2 text-slate-300 hover:bg-white hover:text-black flex items-center justify-center">
        <FontAwesomeIcon class="fa-fw" icon={faPencil}></FontAwesomeIcon>
    </a>
</label>