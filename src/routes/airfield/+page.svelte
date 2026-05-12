<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';
  import YouTubeEmbed from '../../YouTubeEmbed.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/rc/rc_1.webp', alt: 'RC aircraft field view 1' },
    { src: '/images/rc/rc_2.webp', alt: 'RC aircraft field view 2' },
    { src: '/images/rc/rc_3.webp', alt: 'RC aircraft field view 3' },
    { src: '/images/rc/rc_4.webp', alt: 'RC aircraft field view 4' },
    { src: '/images/rc/rc_5.webp', alt: 'RC aircraft field view 5' }
  ];
</script>

<svelte:head>
  <title>R/C Aircraft - Klamath Sportsman's Park</title>
  <meta name="description" content="R/C aircraft airfield at Klamath Sportsman's Park. Operated by the Flightmasters Radio Control club." />
</svelte:head>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f4f6f2;
    color: #2f3e2f;
  }

  .hero {
    padding: 4rem 1.5rem 3rem;
    text-align: center;
    background: #e9efe6;
    border-bottom: 1px solid #d6dfd0;
  }

  .hero h1 {
    margin: 0 0 0.5rem;
    font-size: 3rem;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    padding: 2.5rem 1.5rem 3rem;
  }

  .section {
    margin-bottom: 2.5rem;
  }

  .section h2 {
    margin-bottom: 0.75rem;
    color: #3d5a40;
    font-size: 2rem;
  }

  .section h3 {
    margin-bottom: 0.5rem;
    color: #2f3e2f;
    font-size: 1.3rem;
  }

  .section p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .section a {
    color: #3d5a40;
    font-weight: 600;
    text-decoration: underline;
  }

  .section a:hover {
    color: #2f4632;
  }

  .list {
    padding-left: 1rem;
  }

  .list li {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  /* VIDEO */
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #e5e9e2;
    background: #000;
  }

  /* GRID */
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>R/C Aircraft</h1>
</section>

<div class="container">
  <!-- VIDEO + PHOTOS -->
  <div class="section grid">
    <div>
      <h2>See the Airfield</h2>
      <div class="video-wrapper">
        <YouTubeEmbed videoId="7_Xgjl1vt7w" title="Klamath Sportsmen's Park Airfield" />
      </div>
    </div>

    <div>
      <h2>Photos</h2>
      <ImageViewer {images} bind:currentIndex={currentImage} />
    </div>
  </div>

  <div class="section">
    <h2>About the Airfield</h2>
    <p>
      The park offers a dedicated R/C aircraft flying area with multiple runways. The airspace over the park
      has also been authorized for drones by the FAA!
    </p>
  </div>

  <div class="section">
    <h2>Flightmasters of Klamath</h2>
    <p>
      Flightmasters of Klamath is a nonprofit organization separate from the park. They are the club
      that maintains and flies from the R/C aircraft area at the park. If you're interested in joining
      or learning more, you can check out their <a href="https://www.facebook.com/FlightmastersRadioControlOfKlamathFallsOR/" target="_blank" rel="noopener noreferrer">Facebook page</a>.
    </p>
  </div>

</div>

<Footer />