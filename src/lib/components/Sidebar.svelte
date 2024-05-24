<script>
  import { page } from "$app/stores"
  export let resume
</script>

<div class="flex flex-col gap-6 print:mt-10 print:gap-2">
  <h1 class="text-3xl md:text-6xl" style="font-variation-settings: 'wdth' 125;">
    {#if resume.firstname}
      <span class="font-black">
        {resume.firstname}
      </span>
    {/if}
    {#if resume.lastname}
      <span class="font-extralight">
        {resume.lastname}
      </span>
    {/if}
  </h1>
  {#if resume.tagline}
    <h2 class="md:text-xl">
      {resume.tagline}
    </h2>
  {/if}
</div>

<div class="flex gap-2 print:hidden flex-col mt-10">
  <a class={`text-sm px-2 border-l-2 hover:border-blue-600 ${$page.url.pathname == "/" ? "border-l-blue-600" : "border-b-transparent"}`} href="/">Projects</a>
  <!-- <a class={`text-sm px-2 border-l-2 hover:border-blue-600 ${$page.url.pathname == "/resume/" ? "border-l-blue-600" : "border-b-transparent"}`} href="/resume/">Resume</a> -->
  <a class={`text-sm px-2 border-l-2 hover:border-blue-600 ${$page.url.pathname == "/about/" ? "border-l-blue-600" : "border-b-transparent"}`} href="/about/">About</a>
</div>
