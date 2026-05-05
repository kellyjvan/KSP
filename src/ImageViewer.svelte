<script>
  export let images = [];
  export let currentIndex = 0;
  export let fit = 'cover';

  let modalOpen = false;

  $: hasMultiple = images.length > 1;

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function openModal() {
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOpen = false;
    document.body.style.overflow = '';
  }

  function handleKeydown(e) {
    if (!modalOpen) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && hasMultiple) prev();
    if (e.key === 'ArrowRight' && hasMultiple) next();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<style>
  .viewer {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e9e2;
    background: #000;
    padding-bottom: 56.25%;
    max-height: 400px;
    height: 0;
    cursor: pointer;
  }

  .viewer img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .viewer-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.75rem;
    pointer-events: none;
  }

  .viewer-controls button {
    pointer-events: all;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    cursor: pointer;
    color: #2f3e2f;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .viewer-controls button:hover {
    background: #fff;
  }

  .viewer-caption {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }

  .expand-hint {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 0.8rem;
    padding: 4px 10px;
    border-radius: 4px;
    pointer-events: none;
  }

  .empty {
    padding: 2rem;
    text-align: center;
    color: #666;
    font-size: 1rem;
  }

  /* MODAL */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    position: relative;
    max-width: 95vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-content img {
    max-width: 95vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 4px;
  }

  .modal-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    pointer-events: none;
  }

  .modal-controls button {
    pointer-events: all;
    background: rgba(255, 255, 255, 0.35);
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .modal-controls button:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: #ccc;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 4px 10px;
  }

  .modal-close:hover {
    color: #fff;
  }

  .modal-caption {
    color: #ccc;
    font-size: 0.95rem;
    margin-top: 0.75rem;
    text-align: center;
  }
</style>

{#if images.length === 0}
  <div class="empty">No photos available.</div>
{:else}
  <!-- Inline Viewer -->
  <div class="viewer" on:click={openModal} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }}} role="button" tabindex="0" aria-label="Click to enlarge photo">
    <img src={images[currentIndex].src} alt={images[currentIndex].alt} style="object-fit: {fit};" />
    {#if hasMultiple}
      <div class="viewer-controls">
        <button on:click|stopPropagation={prev} aria-label="Previous photo">&larr;</button>
        <button on:click|stopPropagation={next} aria-label="Next photo">&rarr;</button>
      </div>
    {/if}
    <span class="expand-hint">Click to enlarge</span>
  </div>
  <div class="viewer-caption">
    {images[currentIndex].alt} {#if hasMultiple}({currentIndex + 1} of {images.length}){/if}
  </div>

  <!-- Modal -->
  {#if modalOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="modal-backdrop" on:click={closeModal} role="dialog" aria-modal="true" aria-label="Image viewer">
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div class="modal-content" on:click|stopPropagation>
        <button class="modal-close" on:click={closeModal} aria-label="Close image viewer">✕</button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} style="object-fit: {fit};" />
        {#if hasMultiple}
          <div class="modal-controls">
            <button on:click={prev} aria-label="Previous photo">&larr;</button>
            <button on:click={next} aria-label="Next photo">&rarr;</button>
          </div>
        {/if}
        <div class="modal-caption">
          {images[currentIndex].alt} {#if hasMultiple}({currentIndex + 1} of {images.length}){/if}
        </div>
      </div>
    </div>
  {/if}
{/if}
