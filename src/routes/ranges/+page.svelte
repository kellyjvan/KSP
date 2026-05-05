<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
  import ImageViewer from '../../ImageViewer.svelte';

  let currentImage = 0;

  const images = [
    { src: '/images/pistol/pistol_1.webp', alt: 'Pistol range bays' },
    { src: '/images/pistol/pistol_2.webp', alt: 'Pistol range entrance' },
    { src: '/images/pistol/pistol_3.webp', alt: 'Pistol range bays' },
    { src: '/images/pistol/pistol_4.webp', alt: 'Pistol range bays' },
    { src: '/images/pistol/pistol_5.webp', alt: 'Pistol range benches, cover and stove' },
    { src: '/images/200/200_1.webp', alt: '200 meter range sign' },
    { src: '/images/200/200_2.webp', alt: '200 meter range handicap access' },
    { src: '/images/200/200_3.webp', alt: '200 meter range handicap accessible bench' },
    { src: '/images/200/200_4.webp', alt: '200 meter range benches' },
    { src: '/images/200/200_5.webp', alt: '200 meter range steel at 200' },
    { src: '/images/600/600_1.webp', alt: '600 yard range cover' },
    { src: '/images/600/600_2.webp', alt: '600 yard range benches and view' },
    { src: '/images/600/600_3.webp', alt: '600 yard range benches' },
    { src: '/images/600/600_4.webp', alt: '600 yard range stove and benches' },
    { src: '/images/600/600_5.webp', alt: '600 yard range sign' }
  ];
</script>

<svelte:head>
  <title>Shooting Ranges - Klamath Sportsman's Park</title>
  <meta name="description" content="Pistol, 200 meter, and 600 yard shooting ranges at Klamath Sportsman's Park. Covered benches, steel targets, and ADA accessible." />
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

  /* GRID */
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid-label {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #2f3e2f;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
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

  .section a {
    color: #3d5a40;
    font-weight: 600;
    text-decoration: underline;
  }

  .section a:hover {
    color: #2f4632;
  }
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>Shooting Ranges</h1>
</section>

<div class="container">
  <!-- SAFETY -->
  <div class="section">
    <div class="important">
      <strong>Range Safety Rules</strong>
      <p>Shooters must follow posted range rules at all times. Eye and ear protection are required. It's your responsibility
         to conduct yourself in a safe manner. New shooters are welcome, but should be familiar
         with basic firearm handling safety prior to visiting the range. Dangerous behavior won't be tolerated and may result in a park ban.</p>
    </div>
  </div>
  <!-- VIDEOS + PHOTOS -->
  <div class="section grid">
    <div>
      <div class="grid-label">Handicap accessible bay at the 200 meter range</div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/uZ-uDxA36FU"
          title="Handicap accessible bay tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div>
      <div class="grid-label">Main pistol range</div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/2YVk7XozfmI"
          title="Main pistol range tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div>
      <div class="grid-label">200 meter range
      </div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/TObCl3sShtw"
          title="200 meter range tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div>
      <div class="grid-label">Photos</div>
      <ImageViewer {images} bind:currentIndex={currentImage} />
    </div>
  </div>
  <div class="section">
    <h2>About the Ranges</h2>
    <p>
      The park offers shotgun, pistol and rifle ranges to the public. Please note that occasionally JSSA closes the
      public ranges for matches. These matches are open to the public and you are encouraged to participate! JSSA is a separate
      organization from Klamath Sportsman's Park. Check the schedule and get more info <a href="https://jeffersonstateshooting.com/jssa-activity-schedule/" target="_blank" rel="noopener noreferrer">here</a>.      
    </p>
    <p>
      Find steel plates at the end of the 200 meter rifle range. The 600 yard rifle range has steel plates at further distances.
      The 50 yard pistol range has only target stands for paper targets.
    </p>
    <p>
      You may bring your own steel or paper targets. <b>Absolutely no Tannerite! Absolutely no glass or plastic!</b>
    </p>
    <p>
      All ranges are covered with concrete floors, benches, gun racks and shooting stations. The pistol and rifle ranges have woodstoves
      for warming in the winter months. Target stands, yardage markers and berms are provided.
    </p>
  </div>

  <div class="section">
    <h2>Accessibility</h2>
    <p>The 50 yard pistol range has a handicap accessible bay. This bay is paved with a path leading downrange to set up targets.</p>
    <p>
      The 200 meter rifle range also has a handicap accessible bay with attached handicap parking spot and a wheelchair accessible
      dirt path downrange to setup targets. The 600 yard rifle range is less handicap accessible.
    </p>
    <p>Watch the video and check out the photos for a good view of the ranges and their accessibility features.</p>
  </div>


  
</div>

<Footer />