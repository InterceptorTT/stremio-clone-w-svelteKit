<script>
	import HeaderShowPage from '$lib/components/headerShowPage.svelte';
	import SectionShowPage from '$lib/components/sectionShowPage.svelte';
	import Add_remove from '$lib/components/add_remove.svelte';
	import { onMount } from 'svelte';
	export let data;
	const serie = data.serie;

	let isAlreadyInLibrary;

	onMount(() => {
		let library = JSON.parse(localStorage.getItem('library'));
		isAlreadyInLibrary = library.some((el) => el.id === serie.id);
		console.log(isAlreadyInLibrary)
	});
</script>

<main
	class="h-screen bg-no-repeat bg-cover"
	style="background-image: url('https://image.tmdb.org/t/p/w500{serie.backdrop_path}'"
>
	<div class="py-10 px-20 backdrop-brightness-75 h-full">
		<HeaderShowPage />
		<section class="grid grid-cols-3 gap-5 mt-10">
			<div class="col-span-2">
				<SectionShowPage
					name={serie.name}
					first_air_date={serie.first_air_date}
					genres={serie.genres}
					overview={serie.overview}
				/>
				<Add_remove/>
			</div>
			<div class="col-span-1"></div>
		</section>
	</div>
</main>
