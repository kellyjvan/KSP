<script>
  export let src = "";
  export let alt = "";
  export let caption = "";
  export let spacing = true;
</script>

<style>
  .banner-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .with-spacing {
    margin: 2rem auto;
  }

  .banner-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
    max-height: 700px; /* ⬅️ Much smaller height than before */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .caption {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }
</style>

<div class="banner-container {spacing ? 'with-spacing' : ''}">
  <img class="banner-image" {src} {alt} loading="lazy" />
  {#if caption}
    <div class="caption">{caption}</div>
  {/if}
</div>
