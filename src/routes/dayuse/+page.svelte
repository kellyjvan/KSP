<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';

  const fees = [
    { label: 'Veterans & Active Duty (ID required)', price: '$8' },
    { label: 'Adults (18+)', price: '$10' },
    { label: 'Children (6–17)', price: '$5' },
    { label: 'Children under 6', price: 'Free' }
  ];

  const hours = [
    { label: 'March 21 – October 31', value: '8:00 AM – 6:00 PM' },
    { label: 'November 1 – March 20', value: '8:00 AM – 5:00 PM' },
    { label: 'Christmas Day', value: 'Closed' },
    { label: 'Thanksgiving Day', value: 'Closed' }
  ];

  const rules = [
    '15 MPH speed limit on all roads. Stay on designated roads.',
    'No open fires or fireworks allowed.',
    'No hunting of any kind permitted.'
  ];
</script>

<svelte:head>
  <title>Day Use - Klamath Sportsman's Park</title>
  <meta name="description" content="Day use fees and rules at Klamath Sportsman's Park. Open to the public — shooting, archery, R/C aircraft, and more." />
</svelte:head>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f4f6f2;
    color: #2f3e2f;
  }

  /* HERO */
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

  /* IMPORTANT WRAPPER */
  .important-wrapper {
    max-width: 1000px;
    margin: auto;
    padding: 2rem 1.5rem 0;
  }

  /* LAYOUT */
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

  /* LIST */
  .list {
    padding-left: 1rem;
  }

  .list li {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  /* IMPORTANT BOX */
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

<!-- HERO -->
<section class="hero">
  <h1>Day Use</h1>
</section>

<!-- IMPORTANT -->
<div class="important-wrapper">
  <div class="important">
    <strong>Important</strong>
    <p>
      All visitors, including members, must check in at the kiosk before entering recreation areas. Please do not skip checking in at the kiosk!
    </p>
  </div>
</div>

<div class="container">

  <!-- INTRO -->
  <div class="section">
    <p>
      The public may access the park on a day-use basis. The day use fee grants you access to all areas of the park
      for one day (ranges, off road area, archery, etc). Fees are listed below and must
      be paid for each person in party. Please bring cash or check. Check in at the kiosk to pay and sign a liability waiver.
    </p>
  </div>

  <!-- GRID: FEES + HOURS -->
  <div class="grid section">

    <!-- FEES -->
    <div class="card">
      <h3>Day Use Fees</h3>
      <div class="subtext">Prices as of June 1, 2023</div>

      <div class="table">
        {#each fees as fee}
          <div class="row">
            <span>{fee.label}</span>
            <strong>{fee.price}</strong>
          </div>
        {/each}
      </div>
    </div>

    <!-- HOURS -->
    <div class="card">
      <h3>Park Hours</h3>
      <div class="subtext">Open everyday except Christmas Day and Thanksgiving Day</div>

      <div class="table">
        {#each hours as h}
          <div class="row">
            <span>{h.label}</span>
            <strong>{h.value}</strong>
          </div>
        {/each}
      </div>
    </div>

  </div>

  <!-- RULES -->
  <div class="section">
    <h2>Park Rules</h2>
    <ul class="list">
      {#each rules as rule}
        <li>{rule}</li>
      {/each}
    </ul>
  </div>

</div>

<Footer />