<script>
  export let title = "";

  // Optional: array of sections, each with a subheading and paragraphs
  /**
     * @type {any[]}
     */
   export let sections = []; // e.g. [{ subheading: '...', paragraphs: ['...', '...'] }]
</script>

<style>
  .card-wrapper {
    max-width: 1600px;
    margin: auto;
    padding: auto;
  }

  .card {

    border-radius: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    padding: 2rem;
    font-family: "Inter", "Segoe UI", "Helvetica Neue", sans-serif;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    color: #111827;
  }

  h3 {
    font-size: 1.375rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #374151;
    margin-bottom: 1rem;
  }
</style>

<div class="card-wrapper">
  <div class="card">
    <h2>{title}</h2>
    {#each sections as section}
      <section>
        <h3>{section.subheading}</h3>
        {#each section.paragraphs as paragraph}
          <p>
            {#each paragraph as segment}
              {#if segment.type === 'text'}
                {@html segment.content}
              {:else if segment.type === 'link'}
                <a href={segment.url} {...(segment.args ?? {})}>{segment.content}</a>
              {/if}
            {/each}
          </p>
        {/each}
      </section>
    {/each}
    <slot />
  </div>
</div>
