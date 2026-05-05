<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/offroad/offroad_1.webp', alt: 'Off-road area view 1' },
    { src: '/images/offroad/offroad_2.webp', alt: 'Off-road area view 2' },
    { src: '/images/offroad/offroad_3.webp', alt: 'Off-road area view 3' },
    { src: '/images/offroad/offroad_4.webp', alt: 'Off-road area view 4' }
  ];
</script>

<svelte:head>
  <title>Off Road Vehicles - Klamath Sportsman's Park</title>
  <meta name="description" content="Motocross track and ATV riding area at Klamath Sportsman's Park. Looking for a club to take stewardship." />
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

  /* IMPORTANT */
  .important {
    background: #fff7e6;
    border: 1px solid #f0d9a7;
    border-radius: 10px;
    padding: 1rem;
  }

  .important strong {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .important p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>Off-Road Vehicles</h1>
</section>

<div class="container">

  <!-- VOLUNTEER NOTICE -->
  <div class="section">
    <div class="important">
      <strong>Motocross Club Needed</strong>
      <p>
        Klamath Sportsman's Park is looking for a motocross club to take over stewardship of the motocross
        areas at the park. This would mean committing to the maintenance of the motocross areas, overseeing        
        motocross events and sending a representative to monthly board of directors meetings. Your club
        must be a nonprofit organization. If interested, please use the <a href="/contact">contact page</a>
        to send us your contact details, or drop them in the box at the kiosk.</p>
    </div>
  </div>

  <!-- PHOTOS -->
  <div class="section">
    <h2>Photos</h2>
    <ImageViewer {images} bind:currentIndex={currentImage} />
  </div>

  <div class="section">
    <h2>Motocross Track and Riding Area</h2>
    <p>
      The park has dedicated areas for off-road vehicles including an ATV riding area and a motocross track.
      The track covers 5 acres and features starting gates, multiple jumps, and turns. The 10 acre riding area
      is undergoing gradual development. We are looking for a club to take stewardship of our off-road areas,
      see the yellow notice above.
    </p>
  </div>

</div>

<Footer />