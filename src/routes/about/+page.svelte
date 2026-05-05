<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
</script>

<svelte:head>
  <title>About Us - Klamath Sportsman's Park</title>
  <meta name="description" content="About Klamath Sportsman's Park Association. Monthly meetings, park history, and location off Hwy 66 near Keno, Oregon." />
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

  .section p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .section h2 {
    margin-bottom: 0.75rem;
    color: #3d5a40;
    font-size: 2rem;
  }

  .card {
    background: white;
    border: 1px solid #e5e9e2;
    border-radius: 12px;
    padding: 2rem 2.5rem;
  }

  .card p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin: 0 0 1rem;
  }

  .card p:last-child {
    margin-bottom: 0;
  }

  .highlight {
    background: #e9efe6;
    border: 1px solid #c8d8c8;
    border-radius: 12px;
    padding: 1.5rem 2rem;
  }

  .highlight h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #3d5a40;
    font-size: 1.6rem;
  }

  .highlight p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin: 0;
  }

  .map-section h2 {
    margin-bottom: 0.75rem;
    color: #3d5a40;
    font-size: 2rem;
  }

  .map-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #e5e9e2;
  }

  .map-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .card {
      padding: 1.5rem 1.25rem;
    }

    .highlight {
      padding: 1.25rem 1.25rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>About Us</h1>
</section>

<div class="container">

  <div class="section">
    <div class="card">
      <p>
        Klamath Sportsman's Park is a nonprofit organization. The park is situated on 345 acres
        off Hwy 66 about 8 miles west of Keno, Oregon. The park is operated by the Klamath
        Sportsman's Park Association.
      </p>
      <p>
        The park is dedicated to family oriented outdoor recreation. We provide many different
        activities to the public.
      </p>
    </div>
  </div>

  <div class="section">
    <div class="highlight">
      <h2>Monthly Meetings</h2>
      <p>
        Klamath Sportsman's Park Association meetings are held at 6 PM on the second Tuesday of
        the month at Sidelines Pizza in Klamath Falls. These meetings are open to the public.
      </p>
    </div>
  </div>

  <div class="section map-section">
    <h2>Find Us</h2>
    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.1260870523274!2d-122.0215926239643!3d42.139062949035136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54cf27cc743962a3%3A0xc92a8354f90a2f5b!2sKlamath%20Sportsmen&#39;s%20Park!5e1!3m2!1sen!2sus!4v1777826219610!5m2!1sen!2sus&maptype=roadmap"
        title="Klamath Sportsman's Park location"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

</div>

<Footer />
