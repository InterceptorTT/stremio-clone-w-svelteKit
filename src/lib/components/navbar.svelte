<script>
    import home from "$lib/assets/home.png"
    import discover from "$lib/assets/discover.png"
    import calendar from "$lib/assets/calendar.png"
    import library from "$lib/assets/library.png"
    import settings from "$lib/assets/settings.png"
    import addons from "$lib/assets/addons.png"
</script>

<nav>
    <ul  class="flex flex-col gap-5 w-16">
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/"><img src={home} alt={home}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/discover"><img src={discover} alt={discover}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/calendar"><img src={calendar} alt={calendar}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/library"><img src={library} alt={library}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/addons"><img src={addons} alt={addons}></a></li>
        <li class="hover:border-solid hover:rounded-md hover:border-slate-300 hover:border-2 p-1"><a href="/settings"><img src={settings} alt={settings}></a></li>
    </ul>
</nav>

<style>
    .over{
        border: solid 2px rgba(128, 128, 128, 0.68);
        border-radius: 10px;
    }
</style>