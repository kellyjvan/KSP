<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
</script>

<svelte:head>
  <script async src="https://js.stripe.com/v3/buy-button.js"></script>
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
    font-size: 2.5rem;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    padding: 2.5rem 1.5rem 3rem;
  }

  .section {
    margin-bottom: 2.5rem;
  }

  .card {
    background: white;
    border: 1px solid #e5e9e2;
    border-radius: 12px;
    padding: 1.5rem;
  }

  .card h3 {
    margin-top: 0;
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
    font-size: 0.95rem;
  }

  .signup-card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
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
  }
</style>

<Header />

<section class="hero">
  <h1>Membership</h1>
</section>

<div class="container">
  <div class="section">
    <p>
      Members enjoy unlimited park access during open hours, including all
      shooting ranges and facilities. Your membership also gets you discounted
      entry to events and competitions throughout the year.
    </p>
    <p>
      Every membership directly supports park maintenance and improvements,
      helping keep the grounds open and accessible for everyone.
    </p>
  </div>

  <div class="section grid">
    <div class="card signup-card">
      <h3>Pay Online</h3>
      <p>Pay securely with a credit or debit card.</p>
      <stripe-buy-button
        buy-button-id="buy_btn_1NCCGqS9ZzXHNdtHCP1jJQba"
        publishable-key="pk_live_51J75X0S9ZzXHNdtHjnaoszYQVNtK8Qb6NkscxvijOmYRusFpiURvSCbKJ6SGJCyRTEKSau2jFilbSQKqrVUhBlgW00Ym89ze4b"
      ></stripe-buy-button>
    </div>

    <div class="card signup-card">
      <h3>Pay by Mail</h3>
      <p>Download the membership form, fill it out, and mail it in with a check or money order.</p>
      <a href="/membership-form.pdf">Download Form (PDF)</a>
    </div>
  </div>

  <div class="section">
    <div class="important">
      <strong>Important</strong>
      <p>All members must sign a waiver before using park facilities.</p>
      <p>Memberships are valid for one calendar year from the date of purchase.</p>
    </div>
  </div>

</div>

<Footer />