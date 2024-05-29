<script>
  import { page } from "$app/stores"
</script>

<div class="sticky top-6">
  <a class="flex flex-col gap-6 print:mt-10 print:gap-2" href="/">
    <h1 class="text-3xl md:text-6xl" style="font-variation-settings: 'wdth' 125;">
      <span class="font-black">Bengü</span>
      <span class="font-extralight">Baştuğ</span>
    </h1>
  </a>

  <div class="flex gap-2 print:hidden flex-col mt-10">
    <a class={`text-sm px-4 border-l-2 hover:border-blue-600 hover:text-blue-600 ${$page.url.pathname == "/" ? "border-l-blue-600" : "border-b-transparent"}`} href="/">Projects</a>
    <a class={`text-sm px-4 border-l-2 hover:border-blue-600 hover:text-blue-600 ${$page.url.pathname == "/about/" ? "border-l-blue-600" : "border-b-transparent"}`} href="/about/">About</a>
  </div>
</div>
