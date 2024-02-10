<script>
	import { onMount } from 'svelte';
	import Card from '$lib/components/card.svelte';

	let elements = [];
	onMount(() => {
		elements = JSON.parse(localStorage.getItem('library'));
	});
</script>

<section>
	<div class="grid grid-cols-6">
		{#each elements as favourite}
			{#if favourite.title}
				<a href={'/movies/' + favourite.id} class="m-2 hover:scale-105 hover:transition-all"
					><Card title={favourite.title} image={favourite.poster_path} id={favourite.id} /></a
				>
			{/if}
			{#if favourite.name}
				<a href={'/series/' + favourite.id} class="m-2 hover:scale-105 hover:transition-all"
					><Card title={favourite.name} image={favourite.poster_path} id={favourite.id} /></a
				>
			{/if}
		{/each}
	</div>
</section>
