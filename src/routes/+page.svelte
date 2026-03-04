<script>
    import Header from '../Header.svelte';
    import ResponsiveTemplate from '../ResponsiveTemplate.svelte';
    import Section from '../Section.svelte';
    import "/src/app.css";
</script>

<style>
  img {
    max-width: 100%;
  }

  p {
    margin: 0 0 1em 0;
  }

  @media (width >= 500px) {
  .media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }

  .media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }

  .img {
    grid-area: image;
  }

  .content {
    grid-area: content;
  }
}
</style>

<Header />

<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>Welcome to the park!</p>
  </div>
</div>
