<script>
  import "/src/app.css";

  let menuOpen = false;

  const navLinks = [
    { href: "/dayuse", label: "Day Use" },
    { href: "/membership", label: "Membership" },
    { href: "/ranges", label: "Shooting" },
    { href: "/archery", label: "Archery" },
    { href: "/airfield", label: "R/C Aircraft" },
    { href: "/announcements", label: "Announcements" },
    { href: "/legal", label: "Legal" }
    //{ href: "/offroad", label: "Off Road Vehicles" },
    //{ href: "/contact", label: "Contact" },
    //{ href: "/terms", label: "Terms of Service" }
  ];

  function closeMenu() {
    menuOpen = false;
  }
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<style>

/* =========================
   DESKTOP NAV - Clean Gov Style
========================= */

.desktop-nav {
  width: 100%;
  background-color: #f3f4f6;
  border-bottom: 1px solid #d1d5db;
}

.nav-container {
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;

  display: flex;
  align-items: center;
  gap: 48px;

  height: 68px;
}

.brand a {
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  color: #111827;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  font-size: 0.95rem;
  color: #374151;
}

.nav-links a:hover {
  text-decoration: underline;
}

  
 /* mobile nav */
 .mobile-nav .button-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 25px 5px 25px;
    font-size: 1.0em;
    a {
      color: darkslategray;
      font-size: 2em;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    button {
      border-radius: 15px;
      font-size: 2em;
    }
 }

  .mobile-nav .dropdown ul {
    display: inline-block;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
    background-color: rgb(223, 230, 230);
    border-radius: 4px;
    margin-right: 10px;
  }

  .mobile-nav .dropdown ul a li {
    font-size: 1.2em;
    padding: 5px 20px 5px 20px;
  }

  .close-button {
    width: 100%;
    display: flex;
    justify-content: right;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: rgb(128, 126, 126);
    padding: 10px 15px 10px 15px;
    span {
      font-size: 1em;
    }
  }

  .mobile-nav .dropdown {
    display: flex;
    right: 0;
    position: absolute;
  }  
  
  @media (max-width: 992px) {
    .desktop-nav {
      display: none;
    }
  }

  @media (min-width: 993px) {
    .mobile-nav {
      display: none;
    }
  }
  
</style>

<nav class="mobile-nav">
  <div class="button-row">
   <a href="/" on:click={closeMenu}>KSP</a>
    <button  on:click={toggleMenu}>
    ☰
    </button>
  </div>

  <div class="dropdown">
    {#if menuOpen}
    <ul class="mobile-nav">
    {#each navLinks as link}
      <a href={link.href} on:click={() => (menuOpen = false)}><li>{link.label}</li></a>
    {/each}
    <button type="button" class="close-button" on:click={() => (menuOpen = false)}><span>Close   ▲</span></button>
    </ul>
    {/if}
  </div>
</nav>

<nav class="desktop-nav">
  <div class="nav-container">
    <div class="brand">
      <a href="/">Klamath Sportsman's Park</a>
    </div>

    <ul class="nav-links">
      {#each navLinks as link}
        <li><a href={link.href}>{link.label}</a></li>
      {/each}
    </ul>
  </div>
</nav>