<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import { prettyUrl, formatDate } from "$lib/functions"
  import { convertToSlug } from "$lib/functions"

  import SvelteMarkdown from "svelte-markdown"
  import ExternalLink from "$lib/components/markdown/ExternalLink.svelte"

  export let data
</script>

<Head title={`${data.title} – Bengü Baştuğ`} description="Bengü Baştuğ" url={$page.url.toString()} />

<div class="flex flex-col gap-12 lg:gap-20">
  <div>
    <a href="/">← Back</a>
  </div>

  <div class="flex flex-col items-center gap-10 lg:flex-row">
    <img src={data.thumb} alt={`${data.title} by Bengü Baştuğ`} width="150" height="150" class="rounded-xl" style={`view-transition-name: img-${convertToSlug(data.title)}`} />
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h1 class="text-2xl font-bold md:text-4xl lg:text-6xl" style={`view-transition-name: title-${convertToSlug(data.title)}`}>
        {data.title}
      </h1>
      <div class="flex flex-col items-center gap-4 lg:flex-row">
        {#if data.url}
          <a href={data.url} target="_blank" rel="noreferrer nofollow" class="text-blue-600">
            {prettyUrl(data.url)}
          </a>
        {/if}
        {#if data.url && data.date}
          <span class="hidden text-sm text-black/50 lg:inline">–</span>
        {/if}
        {#if data.date}
          <span class="text-sm text-black/50">{formatDate(data.date)}</span>
        {/if}
      </div>
    </div>
  </div>

  <div class="text-xl leading-normal [&_a]:border-b [&_a]:border-b-black">
    <SvelteMarkdown source={data.content} renderers={{ link: ExternalLink }} />
  </div>

  {#if data.photos && data.photos.length}
    <div class="[column-gap:3rem] max-sm:!columns-1" style={data.columns ? `columns:${data.columns}` : ``}>
      {#each data.photos as photo}
        <div class="flex items-center justify-center rounded mb-12">
          <img src={photo} alt={`${data.title} by Bengü Baştuğ - ${photo}`} class="max-h-screen rounded-xl" />
        </div>
      {/each}
    </div>
  {/if}
  {#if data.tags && data.tags.length}
    <div class="flex flex-wrap gap-2">
      {#each data.tags as tag}
        <span class="rounded-3xl border border-black/10 px-3 py-1 text-sm text-black/40">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</div>
