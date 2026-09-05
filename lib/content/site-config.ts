export const siteConfig = {
  name: "CSE Technical Council",
  logo: "https://res.cloudinary.com/dh8cqlngr/image/upload/v1788639511/ChatGPT_Image_Sep_6_2026_01_47_36_AM_kns90i.png",
  description: "A student-faculty initiative at JSS University, Noida, building a collaborative ecosystem for hands-on learning, innovation, research, and real-world problem-solving.",
  url: "https://csetc.jssaten.ac.in", // TODO: Replace with actual domain
  links: {
    instagram: "#", // TODO: confirm handles
    linkedin: "#", // TODO: confirm handles
    email: "mailto:csetc@jssaten.ac.in", // TODO: confirm email
  },
  joinUrl: process.env.NEXT_PUBLIC_JOIN_URL || "#", // TODO: wire to env var once verified
};

export const navItems = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events" },
  {
    title: "Cells",
    href: "#", // Dummy for dropdown
    items: [
      { title: "AIC", href: "/cells/aic" },
      { title: "RAC", href: "/cells/rac" },
      { title: "CPC", href: "/cells/cpc" },
    ],
  },
  { title: "Team", href: "/team" },
];
