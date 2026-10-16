export const siteConfig = {
  name: "Utuhisaniwins",
  slogan: "Tenebo We Smile",
  sloganMeaning: '"Tenebo" means "together" in Maasai.',
  description:
    "Utuhisaniwins works with Maasai girls and their communities in Kajiado, Kenya to expand access to education and healthcare.",
  location: {
    primary: "Kajiado, Kenya",
    secondary: null as string | null,
  },
  contact: {
    phones: ["+254 743 222 589"],
    email: "utuhisaniwins@gmail.com",
    address: "Kajiado, Kenya",
  },
  social: {
    instagram: {
      handle: "@utuhisaniwins",
      url: "https://www.instagram.com/utuhisaniwins",
    },
  },
  whatsapp: {
    phoneNumber: "254743222589",
    prefilledMessage:
      "Hello Utuhisaniwins, I would like to learn more about supporting girls' education and healthcare in Kajiado.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Impact", href: "/impact" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Impact", href: "/impact" },
    { label: "Latest", href: "/latest" },
    { label: "Take Action", href: "/take-action" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ],
} as const;
