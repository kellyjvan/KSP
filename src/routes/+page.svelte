<script>
  import Footer from '../Footer.svelte';
  import Header from '../Header.svelte';

  function becomeMember() {
    alert("Go to membership signup");
  }

  function dayUse() {
    alert("Go to day use info");
  }

  const features = [
    {
      title: "Archery Range",
      description: "Practice precision shooting in a quiet, wooded setting.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/archery"
    },
    {
      title: "Off Road Vehicles",
      description: "Experience the thrill of off-road driving on challenging terrains.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/offroad"
    },
    {
      title: "Camping",
      description: "Enjoy a night under the stars in our well-equipped camping areas.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      link: "/camping"
    },
    {
      title: "RC Aircraft",
      description: "Fly remote-controlled aircraft in a safe and open environment.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/rc"
    },
    {
      title: "Sporting Clays",
      description: "Practice precision shooting in a quiet, wooded setting.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      link: "/sportingclays"
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
    padding: 2.5rem 1.5rem 3rem;
  }

  .section {
    margin-bottom: 2rem;
  }

  .section h2 {
    margin-bottom: 0.75rem;
    color: #3d5a40;
  }

  .section p {
    max-width: 700px;
  }

  /* CTA (NOW BELOW EXPERIENCE BLOCK) */
  .cta {
    margin: 2rem 0 3rem;
    padding: 2.5rem 1.5rem;
    text-align: center;
    background: #e9efe6;
    border-radius: 12px;
    border: 1px solid #d6dfd0;
  }

  .cta-content h2 {
    margin-bottom: 0.5rem;
    color: #2f3e2f;
  }

  .cta-content p {
    margin-bottom: 1.5rem;
    color: #4a5a4a;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    min-width: 200px;
  }

  .primary {
    background: #3d5a40;
    color: white;
  }

  .primary:hover {
    background: #2f4632;
  }

  .secondary {
    background: white;
    color: #3d5a40;
    border: 1px solid #3d5a40;
  }

  .secondary:hover {
    background: #f3f6f1;
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
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #3d5a40;
    font-weight: 500;
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

    .cta-buttons {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>

<Header />

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <h1>Evergreen Outdoor Park</h1>
    <p>Where trails, fields, and open skies come together.</p>
  </div>
</section>

<div class="container">

  <!-- EXPERIENCE -->
  <div class="section">
    <h2>Experience the Outdoors</h2>
    <p>
      Evergreen Outdoor Park blends natural beauty with recreational space.
      Whether you're here to hike, play, or relax, you'll find room to breathe
      and explore.
    </p>
  </div>

  <!-- CTA (MOVED HERE) -->
  <div class="cta">
    <div class="cta-content">
      <h2>Plan Your Visit</h2>
      <p>Choose how you want to experience the park.</p>

      <div class="cta-buttons">
        <button class="primary" on:click={becomeMember}>
          Become a Member
        </button>

        <button class="secondary" on:click={dayUse}>
          Day Use
        </button>
      </div>
    </div>
  </div>

  <!-- FEATURES -->
  <div class="features">
    {#each features as feature}
      <a class="feature-card" href={feature.link}>
        <img src={feature.image} alt={feature.title} />
        <div class="feature-text">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <span class="cta-hint">Learn more →</span>
        </div>
      </a>
    {/each}
  </div>

</div>

<Footer />