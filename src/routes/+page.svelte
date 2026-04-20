<script>
    import Header from '../Header.svelte';
    import ResponsiveTemplate from '../ResponsiveTemplate.svelte';
    import Section from '../Section.svelte';
    import "/src/app.css";

    function handleCTA() {
        // Replace with real navigation (Stripe, map, etc.)
        alert("Redirecting...");
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
    height: 60vh;
    background: linear-gradient(
        rgba(0,0,0,0.35),
        rgba(0,0,0,0.35)
      ),
      url('https://images.unsplash.com/photo-1501785888041-af3ef285b470') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
  }

  .hero-content {
    max-width: 800px;
    padding: 1rem;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    padding: 3rem 1.5rem;
  }

  .section {
    margin-bottom: 3rem;
  }

  .section h2 {
    margin-bottom: 0.75rem;
    color: #3d5a40;
  }

  .section p {
    max-width: 700px;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .feature {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }

  .cta {
    margin-top: 2rem;
    padding: 3rem 1rem;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee') center/cover no-repeat;
    color: white;
    border-radius: 12px;
    position: relative;
  }

  .cta::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    border-radius: 12px;
  }

  .cta-content {
    position: relative;
    z-index: 1;
  }

  .cta button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    background: #dde5d5;
    color: #2f3e2f;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
  }

  footer {
    margin-top: 3rem;
    padding: 2rem 1rem;
    text-align: center;
    background: #2f3e2f;
    color: #cfd8cf;
  }

  @media (min-width: 768px) {
    .hero h1 {
      font-size: 4rem;
    }

    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
</style>

<Header />
<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>Klamath Sportsman's Park</h1>
    <p>Family oriented outdoor recreation in Keno, Oregon</p>
  </div>
</section>

<!-- CONTENT -->
<div class="container">

  <div class="section">
    <h2>Experience the Outdoors</h2>
    <p>
      Evergreen Outdoor Park blends natural beauty with recreational space.
      Whether you're here to hike, play, or relax, you'll find room to breathe
      and explore.
    </p>
  </div>

  <div class="features">
    <div class="feature">
      <h2>Trails & Nature</h2>
      <p>
        Wander through scenic trails surrounded by trees, wildlife, and
        peaceful landscapes.
      </p>
    </div>

    <div class="feature">
      <h2>Open Fields</h2>
      <p>
        Spacious areas perfect for sports, picnics, and community gatherings.
      </p>
    </div>

    <div class="feature">
      <h2>Family Friendly</h2>
      <p>
        Safe, welcoming spaces for families, kids, and casual outdoor fun.
      </p>
    </div>

    <div class="feature">
      <h2>Events & Gatherings</h2>
      <p>
        Seasonal events, local meetups, and outdoor activities year-round.
      </p>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta">
    <div class="cta-content">
      <h2>Plan Your Visit</h2>
      <p>Come spend a day outdoors—you’ll want to stay longer.</p>
      <button on:click={handleCTA}>Get Directions</button>
    </div>
  </div>

</div>

<!-- FOOTER -->
<footer>
  <p>&copy; 2026 Evergreen Outdoor Park</p>
  <p>info@evergreenpark.com</p>
</footer>