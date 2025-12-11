<script>
    import Header from '../../Header.svelte';
    import Section from '../../Section.svelte';

    export function getMembershipType() {
        const date = new Date();
        const month = date.getMonth(); // 0 = Jan, 11 = Dec
        const day = date.getDate();

        // Convert (month, day) to a numeric value for easier comparison
        const value = month * 100 + day;

        if (value >= 601 && value <= 1130) {
            return "Annual memberships on sale now!";
        } else if (value >= 1201 || value <= 430) {
            return "Half-year memberships now available!";
        } else {
            return "Memberships are currently closed. Annual memberships will be available starting June 1st.";
        }
    }
</script>

<Header />
<Section 
  title="Memberships"
  sections={[
    {
      subheading: "",
      paragraphs: [
        [
          { type: "text", content: `${getMembershipType()}` }
        ],
        [
          { type: "text", content: "Membership grants you, your spouse, and any children under 18 year-round access to the park (except Christmas Day and Thanksgiving Day, the only days we aren't open)." }
        ]
      ]
    },
    {
      subheading: "Membership Benefits",
      paragraphs: [
        [
          { type: "text", content: "As a member, you enjoy exclusive benefits including:" }
        ],
        [
          { type: "text", content: "Access to all park amenities year-round." }
        ],
        [
          { type: "text", content: "Discounts on events and activities." }
        ],
        [
          { type: "text", content: "Priority booking for special events." }
        ]
      ]
    },
    {
      subheading: "How to Join",
      paragraphs: [
        [
          { type: "text", content: "To become a member, please visit our " },
          { type: "link", content: "membership page.", url: "/memberships" },
          { type: "text", content: " Fill out the application form and submit it along with your payment." }
        ]
      ]
    }
  ]}
/>