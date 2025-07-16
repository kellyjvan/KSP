<script>
  export let reverse = false;
</script>

<style>
  .section-wrapper {
    max-width: 1600px;
    margin: 1rem auto;
    padding: auto;
    box-sizing: border-box;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .section {
      flex-direction: row;
      align-items: stretch; /* Ensures children grow to match tallest */
    }

    .section.reverse {
      flex-direction: row-reverse;
    }
  }

  /* These ARE the visual boxes — not wrappers */
  .left,
  .right {
    width: 100%;
    box-sizing: border-box;
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    .left,
    .right {
      width: 50%;
    }
  }
</style>

<div class="section-wrapper">
  <div class="section {reverse ? 'reverse' : ''}">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</div>
