<script>
	import { onMount } from "svelte";
	import {page} from "$app/stores"
	import HeaderShowPage from '$lib/components/headerShowPage.svelte';
	import SectionShowPage from '$lib/components/sectionShowPage.svelte';
	import Add_remove from '$lib/components/add_remove.svelte';
	export let data;
	const movie = data.movie;

	export let isAlreadyInLibrary
	const id = $page.params.id

	onMount(() => {
		let library = JSON.parse(localStorage.getItem('library'));
		isAlreadyInLibrary = library.some((el) => el.id === parseInt(id));
		console.log(isAlreadyInLibrary)
	});
	
	
</script>

<main
	class="h-screen bg-no-repeat bg-cover"
	style="background-image: url('https://image.tmdb.org/t/p/w500{movie.backdrop_path}'"
>
	<div class="py-10 px-20 backdrop-brightness-75 h-full">
		<HeaderShowPage />
		<section class="grid grid-cols-3 gap-5 mt-10">
			<div class="col-span-2">
				<SectionShowPage
					original_title={movie.original_title}
					release_date={movie.release_date}
					genres={movie.genres}
					overview={movie.overview}
					tagline={movie.tagline}
					movie={movie}
					isAlreadyInLibrary={isAlreadyInLibrary}
				/>
				<Add_remove/>
			</div>
			<div class="col-span-1"></div>
		</section>
	</div>
</main>
