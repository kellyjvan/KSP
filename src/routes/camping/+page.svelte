<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/camping/camping_1.webp', alt: 'New sites with power and water' },
    { src: '/images/camping/camping_2.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_3.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_4.webp', alt: 'Campground easy entrance' },
    { src: '/images/camping/camping_5.webp', alt: 'Campground aerial view 4' },
    { src: '/images/camping/camping_6.webp', alt: 'Plenty of clearance to enter and exit' },
    { src: '/images/camping/camping_7.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_8.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_9.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_10.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_11.webp', alt: 'Campground aerial view' },
    { src: '/images/camping/camping_12.webp', alt: 'Restroom facilities' }
  ];

  const rates = [
    { label: 'Non Park Members', price: '$40 / night' },
    { label: 'Annual KSP Members', price: '$30 / night' },
    { label: 'Lifetime KSP Members', price: 'Free' }
  ];

  const rules = [
    'All guests must check in with hosts on arrival. Hosts are located next to the RV park.',
    'Quiet hours are from 10 PM to 7 AM. No generators may be run and no excessive noise during this time.',
    'Each space must be kept clean and tidy.',
    'Campfires in fire rings only. No exceptions.',
    'Pets are welcome but must be kept leashed at all times. Pet owners must clean up after their pets immediately.',
    'Maximum stay is 14 days.',
    'Trash must be placed in bins.',
    'No fireworks. No exceptions.',
    'Speed limit in the park is 5 MPH.',
    'The park reserves the right to evict guests for violating rules.'
  ];
</script>

<svelte:head>
  <title>Camping - Klamath Sportsman's Park</title>
  <meta name="description" content="RV and tent camping at Klamath Sportsman's Park. Full hookups, picnic tables, quiet hours. $30–$40/night." />
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

  .video-label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #2f3e2f;
    font-weight: 600;
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

  .subtext {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  /* TABLE STYLE */
  .table {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.25rem;
    font-size: 1.05rem;
  }

  .row strong {
    color: #2f3e2f;
  }

  /* RULES */
  .rules-list {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: rule;
  }

  .rules-list li {
    counter-increment: rule;
    font-size: 1.05rem;
    line-height: 1.6;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e9e2;
    display: flex;
    gap: 0.75rem;
  }

  .rules-list li:last-child {
    border-bottom: none;
  }

  .rules-list li::before {
    content: counter(rule) ".";
    font-weight: 700;
    color: #3d5a40;
    min-width: 1.75rem;
    flex-shrink: 0;
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
  <h1>Camping</h1>
</section>

<div class="container">

  <!-- PHOTOS -->
  <div class="section">
    <h2>Photos</h2>
    <ImageViewer {images} bind:currentIndex={currentImage} />
  </div>

  <!-- ANNOUNCEMENT -->
  <div class="section">
    <div class="important">
      <strong>Big Pines RV Park is Now Open!</strong>
      <p>We offer 10 campsites with easy entrance and exit access for self-contained RVs and tent camping.
         The RV park is open from April 1st to October 31st. Two permanent restrooms are available,
         one located a short walk from the RV park.</p>
    </div>
  </div>

  <div class="section">
    <h2>Each Campsite Includes</h2>
    <ul class="list">
      <li>Electricity and water</li>
      <li>Easy entrance and exit access</li>
      <li>A picnic table</li>
    </ul>
  </div>

  <!-- VIDEOS -->
  <div class="section grid">
    <div>
      <div class="video-label">Campground Tour</div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/7uNNNLFzGBE"
          title="Campground tour"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div>
      <div class="video-label">Facilities Overview</div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/XG7ThVRYKkc"
          title="Facilities overview"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

  <!-- RATES CARD -->
  <div class="section">
    <div class="card">
      <h3>Big Pines Camping Rates</h3>
      <div class="subtext">Open April 1st – October 31st</div>
      <div class="table">
        {#each rates as rate}
          <div class="row">
            <span>{rate.label}</span>
            <strong>{rate.price}</strong>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- RULES -->
  <div class="section">
    <h2>Big Pines RV Park Rules</h2>
    <ol class="rules-list">
      {#each rules as rule}
        <li>{rule}</li>
      {/each}
    </ol>
  </div>

</div>

<Footer />