<script>
	import { libraryContent } from '$lib/store.js';
	import {fade, fly} from "svelte/transition"
	import {page} from "$app/stores"
	import { onMount } from 'svelte';
	import add from '$lib/assets/add.png';
	import remove from '$lib/assets/remove.png';
	import ciak from '$lib/assets/ciak.png';
	let id = $page.params.id
	let element = $page.data.movie || $page.data.serie
	let library = []
	let isAlreadyInLibrary;
	let isVisible = true


	onMount(() => {
		library = localStorage.getItem('library')
			? JSON.parse(localStorage.getItem('library'))
			: [];

			isAlreadyInLibrary = library.some((element) => element.id === parseInt(id))
			console.log(library)
	})

	function handleAddButton() {
			if(isAlreadyInLibrary){
				alert("already in the library")
			}
			else{
				library.push(element) && alert('Saved in library!');
				localStorage.setItem('library', JSON.stringify(library));
				libraryContent.update(() => library);
			}
			isVisible = false
		}


	function handleRemoveButton(){
		library = JSON.parse(localStorage.getItem("library"))
		library = library.filter((el) => el.id !== parseInt(id))
		localStorage.setItem("library", JSON.stringify(library))
		libraryContent.update(() => library) 
		alert("Removed from library")
		isVisible = false
	}
</script>

<section>
	<div class="flex justify-start ml-20 gap-5 items-center mt-5">
		{#if !isAlreadyInLibrary && isVisible}
			<button out:fade
				on:click={handleAddButton}
				class="text-white flex items-center gap-4 bg-slate-300 bg-opacity-50 rounded-xl p-2 hover:bg-opacity-75"
				><img class="h-5 w-5" src={add} alt={add} /> Add to Library <input type="checkbox" class="hidden" bind:checked={isVisible}></button
			>
		{/if}
		{#if isAlreadyInLibrary && isVisible}
			<button out:fade
				on:click={handleRemoveButton}
				class="text-white flex items-center gap-2 bg-slate-300 bg-opacity-50 rounded-xl py-2 px-4 hover:bg-opacity-75"
				><img class="h-5 w-5" src={remove} alt={remove} /> Remove from Library <input type="checkbox" class="hidden" bind:checked={isVisible}></button
			>
		{/if}
		<button
			class="text-white flex items-center gap-4 bg-slate-300 bg-opacity-50 rounded-xl py-2 px-4 hover:bg-opacity-75"
			><img class="h-5 w-5" src={ciak} alt={ciak} />Trailer</button
		>
	</div>
</section>
