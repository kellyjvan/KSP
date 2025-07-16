<script>
    import Header from '../Header.svelte';
    import HeroImage from '../HeroImage.svelte';
    import Notification from '../Notification.svelte';
    import ResponsiveTemplate from '../ResponsiveTemplate.svelte';
    import Section from '../Section.svelte';
</script>

<!-- <Notification visible={true} announcement="Memberships are now on sale!" action="Head on over to" url="test" /> -->
<!-- <Notification visible={true} announcement="We're proud to announce that Big Pines RV Park is now open! Check it out" /> -->
<Header />

<HeroImage src="/banner5.jpg" alt="Klamath Sportsmens Park Welcome Banner"/>



<ResponsiveTemplate>
    <div slot="left">
<Section
  title="Welcome to Klamath Sportsmens Park!"
  sections={[
    {
      subheading: "",
      paragraphs: [
        "The park is dedicated to family oriented outdoor recreation. We have a  motorcycle course, an ATV area, and an airfield for radio controlled aircraft and drones. For shooters and hunters we have an archery course and several rifle, pistol, and shotgun ranges."
      ]
    },
    {
      subheading: "We're open to the public!",
      paragraphs: [
        "Annual memberships are available now! Annual membership covers you, your spouse, and any children under 18. Help the park grow and access the park year round!",
        "The full park amenities are also available for day use!"
      ]
    },
    {
      subheading: "Contact Us",
      paragraphs: [
        "Have questions or need more information? Reach out to us via our contact page or visit us at the park. We're here to help!"
      ]
    }
  ]}
/>
    </div>
    <div slot="right">
        <Section
  title="Public Announcements"
  sections={[
    {
      subheading: "Big Pines RV Park is now open!",
      paragraphs: [
        "We're proud to announce that our new Big Pines RV Park is now open! Head over to Camping!"
      ]
    },
    {
      subheading: "Organizational Information",
      paragraphs: [
        "As a recognized 501(c)(3) non-profit, Klamath Sportsmens Park holds regular board meetings. These meetings are open to the public and occur on the second Tuesday of every month at 6:00 PM at Sidelines Pizza in Klamath Falls.",
        "Our bylaws are available for review and can be found HERE.",
        "Our board holds elections in December, and those details can be found HERE.",
        "A full listing of announcements we are required to make public can be found HERE."
      ]
    }
  ]}
/>
    </div>
</ResponsiveTemplate>
