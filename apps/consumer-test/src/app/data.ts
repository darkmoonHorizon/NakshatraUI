export const columns = [
  {
    title: "Platform",
    links: [
      { label: "Ballance* Home", href: "/" },
      { label: "Company", href: "/company" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Customer Stories", href: "/stories" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Cookie Policy", href: "/cookie-policy", isExternal: true },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "404", href: "/404" }
    ]
  }
];

export const featuredProjects = [
  { 
    id: "p1", 
    title: "Designing cards that people actually use",
    category: "PRODUCT",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=300&fit=crop",
    href: "/projects/cards"
  },
  { 
    id: "p2", 
    title: "Reducing friction in business spending",
    category: "OPERATIONS",
    imageUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&h=300&fit=crop",
    href: "/projects/spending"
  },
];

export const servicesData = {
  label: "Services",
  primaryText: "How FIND",
  secondaryText: "Can Help You",
  items: [
    {
      id: "s1",
      number: "1",
      description: "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times, and we know what wins.",
      title: "Buy",
      imageUrl: "/buy.webp"
    },
    {
      id: "s2",
      number: "2",
      description: "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
      title: "Sell",
      imageUrl: "/sell.webp"
    },
    {
      id: "s3",
      number: "3",
      description: "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won't find online.",
      title: "Rent",
      imageUrl: "/rent.webp"
    }
  ]
};
