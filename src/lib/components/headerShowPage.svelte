<script>
	import {goto, afterNavigate} from "$app/navigation"
    import back from '$lib/assets/back.png';
	import full_screen from '$lib/assets/full-screen.png';
	import user from '$lib/assets/user.png';

	let previousPage;
	afterNavigate((navigation) => {
		previousPage = navigation.from.url.href
		console.log(navigation)
	})
</script>

<header class="flex items-center justify-between">
	<button on:click={goto(previousPage)} class="h8 w-8 cursor-pointer"><img src={back} alt={back} /></button>
	<div class="flex gap-4">
		<button class="h8 w-8"><img src={full_screen} alt={full_screen} /></button>
		<button class="h8 w-8"><img src={user} alt={user} /></button>
	</div>
</header>
