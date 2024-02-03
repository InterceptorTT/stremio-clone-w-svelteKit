<script>
    import logo from "$lib/assets/logo.png"
    import search from "$lib/assets/search.png"
    import fullScreen from "$lib/assets/full-screen.png"
    import user from "$lib/assets/user.png"
</script>

<header class="flex justify-between flex-row items-center mb-10">
    <div><img src={logo} alt={logo}></div>
    <div class="flex rounded-3xl border-solid border-slate-300 border-2 p-2 bg-white">
        <input type="text" class="bg-purple">
        <button><img src={search} alt={search}></button>
    </div>
    <div class="flex gap-4">
        <button><img src={fullScreen} alt={fullScreen}></button>
        <button><img src={user} alt={user}></button>
    </div>
</header>

<style>
  
</style>