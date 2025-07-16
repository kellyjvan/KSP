<script>
  import { slide } from 'svelte/transition';

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: white;
    color: #111827;
    flex-wrap: wrap;
    font-family: "Inter", "Segoe UI", "Helvetica Neue", sans-serif;
  }

  .left-group {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo a {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: inherit;
    text-decoration: none;
  }

  nav {
    display: none;
    gap: 2rem;
  }

  a {
    color: #374151;
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 500;
  }

  a:hover {
    color: #111827;
    text-decoration: underline;
  }

  .menu-button {
    background: none;
    border: none;
    font-size: 2rem;
    color: #111827;
    cursor: pointer;
    display: block;
  }

  .mobile-menu {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem;
    background-color: #f9fafb;
    border-top: 1px solid #e5e7eb;
    font-family: inherit;
  }

  .mobile-menu a {
    display: block;
    padding: 0.75rem 0;
  }

  @media (min-width: 768px) {
    .menu-button {
      display: none;
    }

    nav {
      display: flex;
    }

    .mobile-menu {
      display: none !important;
    }
  }
</style>


<header>
  <div class="left-group">
    <div class="logo">
      <a href="/">KSP</a>
    </div>

    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>

  <button class="menu-button" on:click={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
    ☰
  </button>
</header>

{#if menuOpen}
  <div class="mobile-menu" transition:slide={{ duration: 250 }}>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
{/if}
