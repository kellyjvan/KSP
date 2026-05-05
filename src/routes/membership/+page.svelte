<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
</script>

<svelte:head>
  <script async src="https://js.stripe.com/v3/buy-button.js"></script>
  <title>Membership - Klamath Sportsman's Park</title>
  <meta name="description" content="Annual and lifetime memberships at Klamath Sportsman's Park. Discounted range fees, camping, and access to all park facilities." />
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
    font-size: 1.7rem;
    font-weight: bold;
  }

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

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .signup-card {
    text-align: center;
  }

  .signup-card p {
    color: #4a5a4a;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .signup-card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1.1rem;
    text-decoration: none;
    background: white;
    color: #3d5a40;
    border: 1px solid #3d5a40;
  }

  .signup-card a:hover {
    background: #f3f6f1;
  }

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
  <h1>Membership</h1>
</section>

<div class="container">
  <div class="section">
    <h2>2026-2027 memberships now available</h2>
    <p>
      Becoming a member means gaining access to the park year round without having to pay additional fees.
      If you purchase online, an email receipt is sent shortly after. This is your temporary card
      until your physical card arrives. 
    </p>
    <p>
      If you purchase by mail, you won't have a temporary card. Leave your
      details at the kiosk when you visit until your card arrives. If you purchase in person at the park, you
      will receive a physical temporary card from the host. 
    </p>
    <p>
      If possible, please use the online payment option. It's the fastest turnaround for receiving your card. 
      It covers you, your spouse, and any children under 18. Our membership year runs June 1 - May 31.
    </p>
  </div>

  <div class="section grid">
    <div class="card signup-card">
      <h3>Pay Online</h3>
      <p>Pay with a card</p>
      <stripe-buy-button
        buy-button-id="buy_btn_1NCCGqS9ZzXHNdtHCP1jJQba"
        publishable-key="pk_live_51J75X0S9ZzXHNdtHjnaoszYQVNtK8Qb6NkscxvijOmYRusFpiURvSCbKJ6SGJCyRTEKSau2jFilbSQKqrVUhBlgW00Ym89ze4b"
      ></stripe-buy-button>
    </div>

    <div class="card signup-card">
      <h3>Pay by Mail</h3>
      <p>Download the membership form and fill it out.</p>
      <p>Mail it with payment to:</p>
      <p><strong>PO Box 596<br>Klamath Falls, OR 97601</strong></p>
      <p>Or bring the form and payment to the park kiosk. Payment methods are checks or cash.</p>
      <a href="/docs/KSP_annual_membership_2026_2027.pdf" download>Download Form (PDF)</a>
    </div>
  </div>

</div>

<Footer />