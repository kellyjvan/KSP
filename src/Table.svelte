<script>
  /**
     * @type {any[]}
     */
   export let columns = []; // e.g. [{ key: 'name', label: 'Name' }, { key: 'price', label: 'Price' }]
  /**
     * @type {any[]}
     */
   export let rows = [];
  export let subText = "";
  export let title = "";
</script>

<style>
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1f2937; /* gray-800 */
  }

  .sub-text {
    font-style: italic;
    font-size: 1rem;
    color: #6b7280; /* gray-500 */
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 2rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  thead {
    background-color: #f9fafb; /* light gray */
  }

  th, td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e5e7eb; /* gray-200 */
    text-align: left;
  }

  /* Right-align second column (index 1) */
  td:nth-child(2), th:nth-child(2) {
    text-align: right;
  }

  tbody tr:nth-child(even) {
    background-color: #f9fafb;
  }

  tbody tr:hover {
    background-color: #f3f4f6; /* hover highlight */
  }
</style>

{#if title}
  <h2>{title}</h2>
{/if}

{#if subText}
  <div class="sub-text">{subText}</div>
{/if}

<table>
  <thead>
    <tr>
      {#each columns as column}
        {#if column.label}
          <th>{column.label}</th>
        {/if}
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each rows as row}
      <tr>
        {#each columns as column}
          <td>{row[column.key]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
