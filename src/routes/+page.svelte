<script>
    import {FontAwesomeIcon} from "@fortawesome/svelte-fontawesome";
    import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
    import {faEyeSlash} from "@fortawesome/free-regular-svg-icons/faEyeSlash";
    import Category from '../components/category.svelte';

    import { settings } from '../stores/settings.js';
    let showChecked;
    settings.subscribe(value => {
        console.log(value);
        showChecked = value.showChecked;
    });

    const categories = [
        {
            id: 1,
            name: 'Albert Heijn',
            color: 'text-sky-500',
            products: [
                {
                    id: 1,
                    name: 'Test product 1',
                    price: 5.00,
                    amount: 2,
                    notes: '100 ml',
                    checked: false,
                },
                {
                    id: 2,
                    name: 'Test product 2',
                    price: 2.50,
                    amount: 1,
                    checked: false,
                },
                {
                    id: 3,
                    name: 'No amount',
                    price: 2.50,
                    checked: false,
                },
                {
                    id: 4,
                    name: 'No price',
                    amount: 1,
                    checked: false,
                }
            ]
        },
        {
            id: 2,
            name: 'Aldi',
            color: 'text-blue-900',
            products: [
                {
                    id: 1,
                    name: 'Test product 1',
                    price: 5.00,
                    amount: 2,
                    notes: '100 ml',
                    checked: false,
                },
                {
                    id: 2,
                    name: 'Test product 2',
                    price: 2.50,
                    amount: 1,
                    checked: false,
                },
                {
                    id: 3,
                    name: 'No amount',
                    price: 2.50,
                    checked: false,
                },
                {
                    id: 4,
                    name: 'No price',
                    amount: 1,
                    checked: false,
                }
            ]
        },
    ];

    const toggleShowChecked = () => {
        showChecked = !showChecked;
        settings.update(value => value = {showChecked});
    };

</script>

<div class="fixed top-0 left-0 right-0 bg-violet-900 text-white px-4">
    <div class="container max-w-screen-sm mx-auto sm:px-4 flex gap-4">
        <input class="placeholder:italic placeholder:text-violet-400 flex-1 block w-fullpy-2 p-0 bg-transparent text-white focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1 sm:text-sm"
               placeholder="Add product..." type="text" name="search"/>
        <button class="flex justify-center items-center h-10 w-10" class:opacity-50={!showChecked} on:click={toggleShowChecked}>
            {#if showChecked}
                <FontAwesomeIcon class="fa-fw" icon={faEye}></FontAwesomeIcon>
            {:else}
                <FontAwesomeIcon class="fa-fw" icon={faEyeSlash}></FontAwesomeIcon>
            {/if}
        </button>
    </div>
</div>

<div class="container max-w-screen-sm mx-auto sm:py-8 sm:px-4">
    <div class="divide-y divide-slate-400/20 sm:rounded bg-white leading-5 text-slate-900 sm:shadow-xl sm:shadow-black/5 ring-1 ring-slate-200 overflow-hidden">
        {#each categories as category, index (category.id)}
            <Category {...category}/>
        {/each}
    </div>
</div>

<style lang="postcss">

</style>
