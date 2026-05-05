<script>
  import "/src/app.css";

  let menuOpen = false;

  const navLinks = [
    { href: "/dayuse", label: "Day Use" },
    { href: "/membership", label: "Membership" },
    { href: "/ranges", label: "Shooting" },
    { href: "/sportingclays", label: "Sporting Clays" },
    { href: "/archery", label: "Archery" },
    { href: "/airfield", label: "R/C Aircraft" },
    // { href: "/announcements", label: "Announcements" },
    // { href: "/legal", label: "Legal" },
    { href: "/offroad", label: "Off Road" },
    { href: "/camping", label: "Camping" },
    { href: "/contact", label: "Contact Us" }
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
   DESKTOP NAV
========================= */

.desktop-nav {
  width: 100%;
  background-color: #f3f4f6;
  border-bottom: 1px solid #d1d5db;
}

.nav-container {
  width: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 40px;
  height: 88px;
}

.brand a {
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: #1a2e1a;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.brand a:hover {
  color: #3d5a40;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  display: block;
  text-decoration: none;
  font-size: 1rem;
  color: #374151;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.nav-links a:hover {
  background-color: #e9efe6;
  color: #2f3e2f;
}


/* =========================
   MOBILE NAV
========================= */

.mobile-nav {
  background-color: #f3f4f6;
  border-bottom: 1px solid #d1d5db;
  position: relative;
}

.button-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 0 20px;
  height: 82px;
  box-sizing: border-box;
  width: 100%;
}

.button-row .brand-link {
  color: #1a2e1a;
  font-size: 1.35rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.01em;
}

.button-row .brand-link:hover {
  color: #3d5a40;
}

.hamburger {
  background: #e9efe6;
  border: 1px solid #b8cbb8;
  border-radius: 8px;
  color: #2f3e2f;
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s;
  line-height: 1;
}

.hamburger:hover {
  background: #d6e4d6;
}

/* Backdrop */
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
}

/* Dropdown panel */
.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 100;
  width: 100%;
}

.dropdown-panel {
  background: #ffffff;
  border: 1px solid #d6dfd0;
  border-top: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.dropdown-panel ul {
  list-style: none;
  padding: 8px 0;
  margin: 0;
}

.dropdown-panel ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  padding: 13px 24px;
  text-decoration: none;
  color: #2f3e2f;
  font-weight: 500;
  border-bottom: 1px solid #f0f4ef;
  transition: background 0.12s;
}

.dropdown-panel ul li:last-child a {
  border-bottom: none;
}

.dropdown-panel ul li a:hover {
  background-color: #f0f6f0;
  color: #1e2e1e;
}

.dropdown-panel ul li a::before {
  content: '›';
  color: #4a7c59;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
}

.close-row {
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  background: #f4f6f2;
  border-top: 1px solid #d6dfd0;
}

.close-btn {
  background: none;
  border: 1px solid #aabcaa;
  border-radius: 6px;
  color: #3d5a40;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 7px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.15s;
}

.close-btn:hover {
  background: #e5ede5;
}


/* =========================
   BREAKPOINTS
========================= */

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

<!-- MOBILE -->
<nav class="mobile-nav">
  <div class="button-row">
    <a href="/" class="brand-link" on:click={closeMenu}>Klamath Sportsman's Park</a>
    <button class="hamburger" on:click={toggleMenu} aria-label="Open navigation menu">
      ☰
    </button>
  </div>

  {#if menuOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="backdrop" on:click={closeMenu}></div>
    <div class="dropdown">
      <div class="dropdown-panel">
        <ul>
          {#each navLinks as link}
            <li><a href={link.href} on:click={closeMenu}>{link.label}</a></li>
          {/each}
        </ul>
        <div class="close-row">
          <button class="close-btn" type="button" on:click={closeMenu} aria-label="Close menu">
            ▲ Close Menu
          </button>
        </div>
      </div>
    </div>
  {/if}
</nav>

<!-- DESKTOP -->
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
