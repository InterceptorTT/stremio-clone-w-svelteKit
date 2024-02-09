<script>
    import "../app.css"
    import Header from "$lib/components/header.svelte"
    import Navbar from "$lib/components/navbar.svelte"
</script>

<main class="">
        <Header/>    
    <div class="flex">
        <div>
            <Navbar/>
        </div>
        <div class="pt-32 sm:px-24 md:px-28 lg:px-28">
            <slot/>
        </div>
    </div>
</main>
