<script>
  import { page } from "$app/stores"
  import { Head } from "svead"
  import SvelteMarkdown from "svelte-markdown"

  import ExternalLink from "$lib/components/markdown/ExternalLink.svelte"
  export let data
</script>

<Head title={data.resume.title} description={data.resume.description} url={$page.url.toString()} />

<div class="leading-loose [&_a]:font-bold [&_a]:underline max-w-2xl">
  <SvelteMarkdown source={data.about} renderers={{ link: ExternalLink }} />
</div>
