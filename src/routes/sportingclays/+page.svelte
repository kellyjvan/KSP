<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/sportingclays/sportingclays_1.webp', alt: 'Sporting clays course' }
  ];
</script>

<svelte:head>
  <title>Sporting Clays - Klamath Sportsman's Park</title>
  <meta name="description" content="Sporting clays course at Klamath Sportsman's Park. Open to the public on scheduled shoot days." />
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

  /* CARD */
  .card {
    background: white;
    border: 1px solid #e5e9e2;
    border-radius: 12px;
    padding: 1.5rem;
  }

  .card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .card p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: #555;
  }

  .card .list {
    margin-top: 0.5rem;
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
  <h1>Sporting Clays</h1>
</section>

<div class="container">
  <!-- PHOTOS -->
  <div class="section">
    <ImageViewer {images} bind:currentIndex={currentImage} fit="contain" />
  </div>
  <!-- SAFETY -->
  <div class="section">
    <div class="important">
      <strong>Safety Rules</strong>
      <p>Eye and ear protection are required at all times. All shotguns must remain unloaded with actions
         open until the shooter is in the shooting cage. No shot larger than #7 1/2 is allowed on the range.</p>
    </div>
  </div>

  <div class="section">
    <h2>About Sporting Clays</h2>
    <p>
      Sporting clays are offered on the second and fourth Saturday of each month, beginning in May and
      ending in September. Registration is at 8:30 AM and shooting begins at 9:00 AM.
    </p>
    <p>
      Our course has ten stations with ten targets at each station. The range actually has twelve stations,
      but we rotate which two are left out each time so the course layout changes with every shoot.
    </p>
    <p>
      $28 per round (100 clay targets), shooter provides gun and shells.
    </p>
  </div>
</div>

<Footer />