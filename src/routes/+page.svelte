<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { convertToSlug } from "$lib/functions"

  export let data
</script>

<Head title={`Bengü Baştuğ – Projects`} description={`Bengü Baştuğ – Projects`} url={$page.url.toString()} />

{#if data.projects && data.projects.length}
  <div class="flex flex-col gap-16 lg:gap-6">
    <div class="my-4 grid gap-2 [@media(max-width:400px)]:grid-cols-1 grid-cols-2 lg:grid-cols-3 [@media(min-width:1800px)]:grid-cols-4 lg:gap-10">
      {#each data.projects as project, index}
        <a href={`/projects/${convertToSlug(project.title)}/`} class="grid group animate-[appear_ease-out]" style={`animation-duration: ${(index + 0.5) * 0.3}s;`}>
          <img src={project.thumb} alt={project.title} width="200" height="200" class="rounded-2xl object-cover aspect-square h-full w-full max-w-none col-start-1 row-start-1 group-hover:brightness-50 transition-all duration-300" />
          <div class="col-start-1 row-start-1 self-end text-white tracking-wide text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 uppercase p-10 translate-y-2">{project.title}</div>
        </a>
      {/each}
    </div>
  </div>
{/if}
