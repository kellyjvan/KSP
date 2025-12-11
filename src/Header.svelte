<script>
  import { slide } from 'svelte/transition';
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
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<style>

  /* desktop nav */
  .desktop-nav ul{
    background-color:cyan;
    display: flex; 
  }

  .desktop-nav ul li {
    margin: 10px;
  }

  .desktop-nav ul li a {
    color: blue;
    font-size: 1.4em;
  }

  ul li a:hover {
    color: red;
  }
  /*  */

/* mobile nav */
  .mobile-nav button {
    font-size: 3em;
  }



  .mobile-nav ul {
    padding: 5px 5px 5px 20px;
    margin: 0px 0px 0px 0px;
    background-color: lightgray;
    border: 2px solid gray;
  }



  .mobile-nav a {
    color: teal;
    font-size: 2em;
    position: right;
    align-items: right;

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
  <button  on:click={toggleMenu}>
    ☰
  </button>
  
  <a href="/">KSP</a>
  {#if menuOpen}
  <ul class="mobile-nav">
    {#each navLinks as link}
      <li><a href={link.href} on:click={() => (menuOpen = false)}>{link.label}</a></li>
    {/each}
  </ul>
  {/if}


</nav>

<nav class="desktop-nav">
  <ul>
    <li><a href="/">KSP</a></li>
    {#each navLinks as link}
      <li><a href={link.href}>{link.label}</a></li>
    {/each}
  </ul>
</nav>

