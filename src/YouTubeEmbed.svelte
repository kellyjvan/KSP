<script>
  export let videoId;
  export let title = 'Video';

  let loaded = false;
</script>

{#if loaded}
  <iframe
    src="https://www.youtube.com/embed/{videoId}?autoplay=1"
    {title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="facade" on:click={() => loaded = true}>
    <img
      src="https://img.youtube.com/vi/{videoId}/hqdefault.jpg"
      alt="Play {title}"
      loading="lazy"
    />
    <button class="play-btn" aria-label="Play {title}">
      <svg viewBox="0 0 68 48" width="68" height="48">
        <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
        <path d="M45 24L27 14v20" fill="white"/>
      </svg>
    </button>
  </div>
{/if}

<style>
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .facade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .facade img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play-btn {
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.2s ease;
  }

  .play-btn:hover {
    transform: scale(1.1);
  }
</style>
