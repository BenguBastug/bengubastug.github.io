<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { convertToSlug } from "$lib/functions"

  export let data
</script>

<Head title={`Bengü Baştuğ – Projects`} description={`Bengü Baştuğ – Projects`} url={$page.url.toString()} />

{#if data.projects && data.projects.length}
  <div class="flex flex-col gap-16 lg:gap-6">
    <div class="my-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {#each data.projects as project, index}
        <a href={`/projects/${convertToSlug(project.title)}/`} class="animate-[appear_ease-out]" style={`animation-duration: ${(index + 0.5) * 0.3}s;`}>
          <img src={project.thumb} alt={project.title} width="200" height="200" class="rounded-2xl object-cover aspect-square h-full w-full max-w-none" />
        </a>
      {/each}
    </div>
  </div>
{/if}
