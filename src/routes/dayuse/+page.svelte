<script>
    import Header from '../../Header.svelte';
    import ResponsiveTemplate from '../../ResponsiveTemplate.svelte';
    import Section from '../../Section.svelte';
    import Table from '../../Table.svelte';
</script>

<Header />
<Section
  title="Day Use"
  sections={[
    {
      subheading: "",
      paragraphs: [
        [
            { type: "text", content: "For those not interested in " },
            { type: "link", content: "annual membership,", url: "/membership" },
            { type: "text", content: " the park's full amenities are available to the public on a day-use basis. Fees are listed below." }
        ]
      ]
    },
    {
      subheading: "Park Rules",
      paragraphs: [
        [
            { type: "text", content: "There is a 15 MPH speed limit on all roads. All vehicles must stay on designated roads." }
        ],
        [
            { type: "text", content: "No open fires or fireworks are allowed in the park." }
        ],
        [
            { type: "text", content: "NO HUNTING OF ANY KIND allowed in the park." }
        ],
      ]
    },
    {
      subheading: "IMPORTANT",
      paragraphs: [
        [
            { type: "text", content: "ALL park visitors must check in at the kiosk before entering recreation areas." },
        ],
        [
            { type: "text", content: "ALL day-use visitors must sign a waiver before entering recreation areas. Save time by " },
            { type: "link", content: "downloading the waiver,", url: "../../../KSP_Waiver_2025.pdf", args: { download: '' } },
            { type: "text", content: " filling it out at home and bringing it with you." }
        ]
      ]
    }
  ]}
/>
<ResponsiveTemplate>
  <div slot="left">
    <Section>
      <Table
        subText="Prices as of June 1, 2023"
        title="Day Use Fees"
        columns={[
          { key: 'age'},
          { key: 'price'}
        ]}
        rows={[
          { age: 'Veterans and Active Duty Military (ID required)', price: '$8' },
          { age: 'Adults (18 years and older)', price: '$10' },
          { age: 'Children (6-17 years)', price: '$5' },
          { age: 'Children under 6', price: 'Free' }
        ]}
      />
    </Section>
  </div>
  <div slot="right">
    <Section>
      <Table
        title="Park hours"
        subText="Open everyday besides Christmas and Thanksgiving"
        columns={[
          { key: 'dates'},
          { key: 'hours'}
        ]}
        rows={[
          { dates: 'March 21 - October 31', hours: '8:00 AM - 6:00 PM' },
          { dates: 'November 1 - March 20', hours: '8:00 AM - 5:00 PM' },
          { dates: 'Christmas Day', hours: 'CLOSED' },
          { dates: 'Thanksgiving Day', hours: 'CLOSED' }
        ]}
      />

    </Section>
  </div>
</ResponsiveTemplate>

