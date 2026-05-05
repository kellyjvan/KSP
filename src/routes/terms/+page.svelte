<script>
  import Header from '../../Header.svelte';
  import Footer from '../../Footer.svelte';
</script>

<svelte:head>
  <title>Terms of Service - Klamath Sportsman's Park</title>
  <meta name="description" content="Terms of service and liability waiver for Klamath Sportsman's Park." />
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

  .card h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #555;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .card p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .terms-list {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: term;
  }

  .terms-list li {
    counter-increment: term;
    font-size: 1.15rem;
    line-height: 1.7;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e9e2;
    display: flex;
    gap: 0.75rem;
  }

  .terms-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .terms-list li::before {
    content: counter(term) ".";
    font-weight: 700;
    color: #3d5a40;
    min-width: 1.75rem;
    flex-shrink: 0;
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
  <h1>Terms of Service</h1>
</section>

<div class="container">

  <div class="card">
    <h2>Agreement, Waiver, and Release</h2>
    <h3>Bill Scholtes' Klamath Sportsman's Park</h3>

    <p>
      I agree and acknowledge by my signature and my participation, or presence at any of the various
      sporting activities set forth below conducted at Bill Scholtes' Klamath Sportsman's Park either
      individually or as part of a group that:
    </p>

    <ol class="terms-list">
      <li>
        Watching, engaging in, or presence at any activities at the Park as a spectator or otherwise
        constitutes my involvement in a potentially hazardous activity with accompanying risks of personal
        injury including death, and loss or damage to personal property, and I VOLUNTARILY ASSUME THOSE RISKS.
      </li>
      <li>
        I, or anyone acting on my behalf, will hold harmless jointly and severally, the members, officers,
        agents, and employees of Bill Scholtes' Klamath Sportsman's Park, Jefferson State Shooting Association,
        Kingsley Bowmen, Flightmasters, NW Extreme Motorsports, and Klamath County for any claim that I may
        have arising out of my participation in or attendance at any such activities.
      </li>
      <li>
        I acknowledge that it is my responsibility to fully understand and comply with all safety rules that
        apply to activities I am present for or participating in. To the best of my knowledge the equipment
        and any accessories that I will be using are in safe and usable condition.
      </li>
      <li>
        I may legally possess firearms and that I will not participate in any illegal activities during my
        visit to the Bill Scholtes' Klamath Sportsman's Park.
      </li>
      <li>
        I acknowledge that no minor or incapacitated person may participate in any activity or be present at
        any activity conducted on the premises without the parent or guardian of the minor or incapacitated
        person having first executed this Agreement, Waiver, and Release on the minor or protected person's behalf.
      </li>
      <li>
        Activities included within park boundaries include but are not limited to: Archery, ATV riding,
        Motorcycle riding, Drone flying, Remote Control aircraft flying, Shooting range use, Picnicking,
        and Camping.
      </li>
    </ol>
  </div>

</div>

<Footer />