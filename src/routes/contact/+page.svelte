<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let website = ''; // honeypot
  let submitted = false;
  let submitting = false;
  let error = '';

  async function handleSubmit() {
    error = '';
    submitting = true;

    try {
      const res = await fetch('https://contact.klamathsportsmanspark.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, website })
      });

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      submitted = true;
    } catch (err) {
      error = err.message;
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact Us - Klamath Sportsman's Park</title>
  <meta name="description" content="Contact Klamath Sportsman's Park. Send us a message or mail to PO Box 596, Klamath Falls, OR 97601." />
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
    max-width: 700px;
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

  .card {
    background: white;
    border: 1px solid #e5e9e2;
    border-radius: 12px;
    padding: 2rem 2.5rem;
  }

  .card h2 {
    margin-top: 0;
    margin-bottom: 0.25rem;
    color: #3d5a40;
    font-size: 1.8rem;
  }

  .card p {
    font-size: 1.1rem;
    color: #555;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 1.05rem;
    font-weight: 600;
    color: #2f3e2f;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.7rem 0.85rem;
    font-size: 1.05rem;
    font-family: 'Segoe UI', sans-serif;
    border: 1px solid #cdd5c9;
    border-radius: 8px;
    background: #fafcf9;
    color: #2f3e2f;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: 2px solid #3d5a40;
    outline-offset: 1px;
    border-color: #3d5a40;
  }

  .form-group textarea {
    min-height: 150px;
    resize: vertical;
  }

  .required {
    color: #b94a48;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: white;
    background: #3d5a40;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn:hover {
    background: #2f4632;
  }

  .btn:disabled {
    background: #8a9e8c;
    cursor: not-allowed;
  }

  .error {
    background: #fdecea;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: #842029;
    font-size: 1.05rem;
    margin-bottom: 1.25rem;
  }

  .success {
    text-align: center;
    padding: 2rem 0;
  }

  .success h2 {
    color: #3d5a40;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .success p {
    font-size: 1.2rem;
    color: #555;
  }

  .contact-info {
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .contact-info strong {
    color: #3d5a40;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .card {
      padding: 1.5rem 1.25rem;
    }
  }
</style>

<Header />

<section class="hero">
  <h1>Contact Us</h1>
</section>

<div class="container">
  <div class="card">
    {#if submitted}
      <div class="success">
        <h2>Message Sent</h2>
        <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
      </div>
    {:else}
      <h2>Send Us a Message</h2>
      <p>Fields marked with <span class="required">*</span> are required.</p>

      {#if error}
        <div class="error">{error}</div>
      {/if}

      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="name">Name <span class="required">*</span></label>
          <input type="text" id="name" bind:value={name} required />
        </div>

        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input type="email" id="email" bind:value={email} required />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" bind:value={phone} />
        </div>

        <!-- Honeypot — hidden from real users, bots fill it in -->
        <div style="position: absolute; left: -9999px;" aria-hidden="true">
          <input type="text" name="website" bind:value={website} tabindex="-1" autocomplete="off" />
        </div>

        <div class="form-group">
          <label for="message">Message <span class="required">*</span></label>
          <textarea id="message" bind:value={message} required></textarea>
        </div>

        <button type="submit" class="btn" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    {/if}
  </div>

  <div class="contact-info">
    <strong>You can also reach us at:</strong><br />
    PO Box 596, Klamath Falls, OR 97601, or drop a note in the box inside the kiosk at the park.
  </div>

</div>

<Footer />
