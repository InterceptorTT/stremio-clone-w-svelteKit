<script>
    import "../app.css"
    import Header from "$lib/components/header.svelte"
    import Navbar from "$lib/components/navbar.svelte"
</script>

<main class="relative ">
        <Header/>    
    <div class="flex">
        <div>
            <Navbar/>
        </div>
        <div class="p-32">
            <slot/>
        </div>
    </div>
</main>

<style>
</style>