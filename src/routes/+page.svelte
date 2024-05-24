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
      {#each data.projects as project}
        <a href={`/projects/${convertToSlug(project.title)}/`} class="flex flex-col items-center gap-4 rounded-2xl text-slate-700 transition-all duration-700">
          <img src={project.thumb} alt={project.title} width="200" height="200" class="rounded-lg object-cover w-full max-w-none transition-all duration-300" style={`view-transition-name: img-${convertToSlug(project.title)}`} />
          <!-- <div class="text-center text-sm" style={`view-transition-name: title-${convertToSlug(project.title)}`}>
            {project.title}
          </div> -->
        </a>
      {/each}
    </div>
  </div>
{/if}
