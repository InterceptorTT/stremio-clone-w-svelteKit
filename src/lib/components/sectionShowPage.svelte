<script>
	export let original_title;
	export let name;
	export let first_air_date;
	export let release_date;
	export let genres;
	export let overview;
	export let tagline;
</script>

<section>
	<div class=" text-white px-20 div_scrollable overflow-y-scroll h-[350px]">
		<h1 class="text-center font-black text-6xl capitalize mb-5">
			{original_title || name}
		</h1>
		<h2 class="text-center italic text-2xl mb-5">
			{#if tagline}
				{tagline}
			{/if}
		</h2>
		<h2 class="text-2xl mb-5">
			{#if release_date }
				{release_date.slice(0, 4)}
			{/if}
			{#if first_air_date }
				{first_air_date.slice(0, 4)}
			{/if}
		<div>
			<div class="mb-5">
				<h2 class="uppercase m-2">genres</h2>
				<div class="flex gap-3">
					{#each genres as genre}
						<p
							class="px-4 py-2 bg-slate-300 bg-opacity-25 hover:bg-opacity-50 rounded-2xl backdrop-blur-xl"
						>
							{genre.name}
						</p>
					{/each}
				</div>
			</div>
			<div>
				<h2 class="uppercase m-2">Summary</h2>
				<p class="bg-black bg-opacity-50 rounded-xl p-2">{overview}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.div_scrollable::-webkit-scrollbar {
		width: 10px;
	}
	.div_scrollable::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: grey;
		opacity: 0.2;
	}
</style>
