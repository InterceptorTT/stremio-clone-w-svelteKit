<script>
    import home from "$lib/assets/home.png"
    import discover from "$lib/assets/discover.png"
    import calendar from "$lib/assets/calendar.png"
    import library from "$lib/assets/library.png"
    import settings from "$lib/assets/settings.png"
    import addons from "$lib/assets/addons.png"
</script>

<nav class="fixed left-5 top-32">
    <ul  class="flex flex-col gap-10 w-16">
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/"><img src={home} alt={home}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/discover/movie/popular"><img src={discover} alt={discover}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/calendar"><img src={calendar} alt={calendar}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/library"><img src={library} alt={library}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/addons"><img src={addons} alt={addons}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:bg-slate-100 transition-all p-1 h-10 w-10 mx-auto"><a href="/settings"><img src={settings} alt={settings}></a></li>
    </ul>
</nav>

<style>
</style>