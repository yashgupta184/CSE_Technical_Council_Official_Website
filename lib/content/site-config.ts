export const siteConfig = {
  name: "CSE Technical Council",
  logo: "/logo.svg",
  description: "A student-faculty initiative at JSS University, Noida, building a collaborative ecosystem for hands-on learning, innovation, research, and real-world problem-solving.",
  url: "https://csetc.jssaten.ac.in", // TODO: Replace with actual domain
  links: {
    instagram: "#", // TODO: confirm handles
    linkedin: "#", // TODO: confirm handles
    email: "mailto:csetc@jssaten.ac.in", // TODO: confirm email
  },
  joinUrl: process.env.NEXT_PUBLIC_JOIN_URL || "https://events.ctcjssun.live",
};

export const navItems = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events" },
  {
    title: "Cells",
    href: "/cells",
    items: [
      { title: "AIC — Innovation", href: "/cells/aic" },
      { title: "CPC — Competitive Prog.", href: "/cells/cpc" },
      { title: "DCT — Design & Creativity", href: "/cells/dct" },
      { title: "RAC — Research", href: "/cells/rac" },
    ],
  },
  { title: "Team", href: "/team" },
];
