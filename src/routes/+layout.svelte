<script>
    import "../app.css"
    import Header from "$lib/components/header.svelte"
    import Navbar from "$lib/components/navbar.svelte"
</script>

<main class="w-full h-full p-4 px-8  bg-gradient-to-r from-black via-black to-blue-900">
    <Header/>
    <div class="flex">
        <Navbar/>
        <slot/>
    </div>
</main>