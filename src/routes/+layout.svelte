<script>
  import "../app.css"
  import Sidebar from "$lib/components/Sidebar.svelte"
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700;900&display=swap" rel="stylesheet" />

  <link rel="icon" type="image/x-icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>👨‍💻</text></svg>" />
</svelte:head>

<div class="mb-24 mt-6 flex flex-col items-center justify-center px-6">
  <div class="flex w-full gap-8 sm:gap-36 print:gap-10 flex-col sm:flex-row">
    <div class="sm:w-1/5">
      <Sidebar />
    </div>
    <div class="sm:w-4/5">
      <slot />
    </div>
  </div>
</div>
