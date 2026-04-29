<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';

  let currentImage = 0;

  const images = [
    { src: 'https://images.unsplash.com/photo-1581091215367-59ab6b8e52c8', alt: 'Rifle range' },
    { src: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f', alt: 'Pistol bay' },
    { src: 'https://images.unsplash.com/photo-1584281722575-c4dcfd249fef', alt: 'Range facilities' }
  ];

  function prev() {
    currentImage = (currentImage - 1 + images.length) % images.length;
  }

  function next() {
    currentImage = (currentImage + 1) % images.length;
  }
</script>

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
    font-size: 2.5rem;
  }

  .hero p {
    margin: 0;
    color: #4a5a4a;
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
  }

  .section p {
    max-width: 700px;
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

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* IMAGE VIEWER */
  .viewer {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e5e9e2;
    background: #000;
  }

  .viewer img {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
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
    width: 40px;
    height: 40px;
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
    font-size: 0.85rem;
    color: #666;
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

    .hero h1 {
      font-size: 3rem;
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
  }

  .card p {
    margin: 0;
    font-size: 0.95rem;
    color: #555;
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
  }
</style>

<Header />

<section class="hero">
  <h1>Shooting Ranges</h1>
  <p>Well-maintained ranges for all skill levels.</p>
</section>

<div class="container">

  <div class="section">
    <p>
      The park offers multiple shooting ranges suitable for beginners and
      experienced shooters alike. All ranges are supervised and maintained to
      ensure a safe and enjoyable experience.
    </p>
  </div>

  <!-- RANGE INFO CARDS -->
  <div class="section grid">
    <div class="card">
      <h3>Rifle Range</h3>
      <p>Covered shooting positions with distances from 25 to 200 yards. Benches and target frames provided.</p>
    </div>

    <div class="card">
      <h3>Pistol Bays</h3>
      <p>Individual bays for handgun practice at various distances. Steel and paper target setups available.</p>
    </div>
  </div>

  <!-- VIDEO + PHOTOS -->
  <div class="section grid">
    <div>
      <h2>See the Ranges</h2>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Shooting range tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div>
      <h2>Photos</h2>
      <div class="viewer">
        <img src={images[currentImage].src} alt={images[currentImage].alt} />
        <div class="viewer-controls">
          <button on:click={prev}>&larr;</button>
          <button on:click={next}>&rarr;</button>
        </div>
      </div>
      <div class="viewer-caption">
        {images[currentImage].alt} — {currentImage + 1} of {images.length}
      </div>
    </div>
  </div>

  <!-- SAFETY -->
  <div class="section">
    <div class="important">
      <strong>Range Safety Rules</strong>
      <p>All shooters must follow posted range rules at all times. Eye and ear protection is required.</p>
      <p>Cease fire commands must be obeyed immediately. No exceptions.</p>
    </div>
  </div>

</div>

<Footer />-