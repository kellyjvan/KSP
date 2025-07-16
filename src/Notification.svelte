<script>
  // Default color set to a light blue
  export let color = "#f0f8ff"; // Default light blue color
  
  // Properties of the notification, all optional
  export let action = "";
  export let announcement = "";
  export let url = "";
  export let visible = false;
 


  // Optional: internal flag if user closes the banner manually
  let dismissed = false;

    $: htmlMessage = url
        ? `${announcement} ${action} <a href="${url}" style="color: inherit; text-decoration: underline;">${url}</a>`
        : announcement + "  " + action;
  
  // Close handler
  function closeNotification() {
    dismissed = true;
  }
</script>

<style>
  .notification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    padding: 1.25rem 2rem;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    gap: 1rem;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }

  .icon {
    font-size: 1.5rem;
    line-height: 1;
  }

  .message {
    display: inline-block;
  }

  .close-btn {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    color: #333;
  }

  /* Mobile tweaks */
  @media (max-width: 640px) {
    .notification {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.25rem 1rem;
    }

    .content {
      flex-direction: row;
      align-items: flex-start;
    }

    .close-btn {
      align-self: flex-end;
      margin-top: 0.5rem;
      font-size: 2.25rem;
    }

    .icon {
      font-size: 1.75rem;
      margin-top: 0.15rem;
    }

    .message {
      font-size: 1rem;
    }
  }
</style>


{#if visible && !dismissed}
  <div class="notification" style="background-color: {color};" role="alert">
    <div class="content">
      <span class="icon" aria-hidden="true">❗</span>
      <span class="message">{@html htmlMessage}</span>
    </div>
    <button class="close-btn" aria-label="Dismiss notification" on:click={closeNotification}>
      &times;
    </button>
  </div>
{/if}
