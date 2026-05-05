<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/archery/archery_1.webp', alt: 'Archery range' },
    { src: '/images/archery/archery_2.webp', alt: 'Archery range' },
    { src: '/images/archery/archery_3.webp', alt: 'Archery range' },
    { src: '/images/archery/archery_4.webp', alt: 'Archery range' }
  ];
</script>

<svelte:head>
  <title>Archery - Klamath Sportsman's Park</title>
  <meta name="description" content="Archery range and field course at Klamath Sportsman's Park. Open to all skill levels." />
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

  /* IMAGE VIEWER */

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>Archery</h1>
</section>

<div class="container">

  <div class="section">
    <p>
      The park offers a wooded archery course with targets ranging from 15 to 50 yards. The wild turkeys
      often pass through the archery course, please keep an eye out for them while you shoot and let them pass unharmed!
    </p>
    <p>
      No rental equipment available, bring your own bow and arrows.
    </p>
  </div>

  <!-- PHOTOS -->
  <div class="section">
    <h2>Photos</h2>
    <ImageViewer {images} bind:currentIndex={currentImage} />
  </div>

</div>

<Footer />