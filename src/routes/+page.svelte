<script>
  function handleCTA() {
    alert("Redirecting...");
  }

  const features = [
    {
      title: "Archery Range",
      description: "Practice precision shooting in a quiet, wooded setting.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/archery"
    },
    {
      title: "Shooting Ranges",
      description: "Well-maintained ranges for all skill levels.",
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b8e52c8",
      link: "/ranges"
    },
    {
      title: "Motocross Track",
      description: "High-energy dirt tracks built for speed and challenge.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228fa4c2",
      link: "/motocross"
    },
    {
      title: "Trails & Camping",
      description: "Explore scenic trails and stay overnight under the stars.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      link: "/trails"
    }
  ];
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f4f6f2;
    color: #2f3e2f;
  }

  /* HERO */
  .hero {
    height: 70vh;
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

  /* CONTENT */
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

  /* FEATURE CARDS */
  .features {
    display: grid;
    gap: 1rem;
  }

  .feature-card {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1.1rem;
    background: white;
    border-radius: 12px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    border: 1px solid #e5e9e2;
  }

  .feature-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.08);
  }

  .feature-card img {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
  }

  .feature-text {
    display: flex;
    flex-direction: column;
  }

  .feature-text h3 {
    margin: 0 0 0.25rem 0;
    color: #2f3e2f;
    font-size: 1.1rem;
  }

  .feature-text p {
    margin: 0;
    font-size: 0.95rem;
    color: #555;
  }

  .cta-hint {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #3d5a40;
    font-weight: 500;
  }

  .arrow {
    transition: transform 0.2s ease;
  }

  .feature-card:hover .arrow {
    transform: translateX(4px);
  }

  /* CTA */
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

  /* FOOTER */
  footer {
    margin-top: 3rem;
    padding: 2rem 1rem;
    text-align: center;
    background: #2f3e2f;
    color: #cfd8cf;
  }

  /* DESKTOP */
  @media (min-width: 768px) {
    .hero h1 {
      font-size: 4rem;
    }

    .features {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .feature-card {
      padding: 1.25rem;
    }

    .feature-card img {
      width: 95px;
      height: 95px;
    }
  }
</style>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>Evergreen Outdoor Park</h1>
    <p>Where trails, fields, and open skies come together.</p>
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

  <!-- FEATURE CARDS -->
  <div class="features">
    {#each features as feature}
      <a class="feature-card" href={feature.link}>
        <img src={feature.image} alt={feature.title} />

        <div class="feature-text">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <span class="cta-hint">
            Learn more <span class="arrow">→</span>
          </span>
        </div>
      </a>
    {/each}
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