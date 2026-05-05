export const site = {
  name: "LuminaOmnia Solutions Trading OPC",
  shortName: "LuminaOmnia",
  tagline: "Where Efficiency Meets Excellence,\nEvery Mile of the Way.",
  description:
    "A consultancy, brokerage, and logistics firm guiding shipments through the Philippine Bureau of Customs with 15+ years of industry trust.",
  founded: 2024,
  experienceYears: 15,
  founder: {
    name: "Jennelyn Dominguez Thater",
    shortName: "Jenny Thater",
    title: "President & CEO",
    bio: "Born in Olongapo City and raised on the Zambales coast, Jenny has spent over fifteen years inside the consultancy, brokerage, and logistics trade — clearing shipments through the Bureau of Customs, building rapport with issuing bodies, and quietly steering large-scale projects to a calm finish. She is a proud solo parent to three boys, an active member of the Alliance of Business Elites, and the founder behind LuminaOmnia.",
  },
  contact: {
    phone: "+63 998 855 4487",
    email: "luminaomniasolutions@gmail.com",
    address: "Nagbayan, Castillejos, Zambales, Philippines",
    facebook: "https://www.facebook.com/profile.php?id=61560540554232",
    instagram: "https://www.instagram.com/luminaomniasolutionsopc",
  },
  affiliations: [
    { name: "A.B.E.", full: "Alliance of Business Elites" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home", chapter: "01" },
  { href: "/services", label: "Services", chapter: "02" },
  { href: "/projects", label: "Projects", chapter: "03" },
  { href: "/about", label: "About", chapter: "04" },
  { href: "/contact", label: "Contact", chapter: "05" },
] as const;

export const services = [
  {
    slug: "customs-brokerage",
    number: "01",
    title: "Customs Brokerage",
    eyebrow: "Bureau of Customs",
    summary:
      "End-to-end clearance for import and export shipments — tariff classification, valuation, documentation, and direct liaison with the Bureau of Customs and allied agencies.",
    bullets: [
      "Import & export entry preparation",
      "HS code classification and valuation",
      "BOC, BOQ, FDA and BAI permit liaison",
      "Tax and duty computation, payment, refund",
      "Post-clearance audit support",
    ],
  },
  {
    slug: "import-export-logistics",
    number: "02",
    title: "Import & Export Logistics",
    eyebrow: "Sea / Air / Land",
    summary:
      "Door-to-door movement coordination across sea, air, and land — from origin pickup and freight booking through trucking, warehousing, and final-mile delivery.",
    bullets: [
      "International freight forwarding (FCL / LCL / air)",
      "Domestic trucking and inter-island shipping",
      "Warehousing and bonded storage coordination",
      "Cargo insurance facilitation",
      "Project-cargo and oversized lift planning",
    ],
  },
  {
    slug: "consultancy",
    number: "03",
    title: "Trade & Compliance Consultancy",
    eyebrow: "Advisory",
    summary:
      "Strategic counsel for businesses entering or scaling within Philippine markets — regulatory navigation, supply-chain design, and ongoing compliance review.",
    bullets: [
      "Market entry and licensing pathways",
      "Customs compliance audits and risk reviews",
      "Supply-chain architecture and cost engineering",
      "Government agency rapport-building",
      "Trade-agreement utilization (ASEAN, RCEP, FTAs)",
    ],
  },
  {
    slug: "administrative-support",
    number: "04",
    title: "Administrative Support",
    eyebrow: "Operations",
    summary:
      "The unseen scaffolding behind every cleared container — document preparation, agency follow-through, scheduling, and the quiet logistics of getting business done.",
    bullets: [
      "Document drafting, notarization, and submission",
      "Permit renewals and government filings",
      "Vendor and supplier coordination",
      "Records management and retention",
      "Executive scheduling and liaison",
    ],
  },
  {
    slug: "travel-services",
    number: "05",
    title: "Corporate Travel",
    eyebrow: "Itinerary & Visa",
    summary:
      "Corporate travel arranged with the same precision we give to freight — visas, itineraries, accommodations, and ground coordination, end to end.",
    bullets: [
      "Visa processing and embassy liaison",
      "Flight and accommodation booking",
      "Ground transportation and itineraries",
      "Group and incentive travel planning",
      "Expense reconciliation",
    ],
  },
] as const;

export const projects = [
  {
    slug: "malampaya-phase-iii",
    name: "Malampaya Phase III",
    category: "Offshore Energy",
    location: "Palawan, Philippines",
    role: "Customs brokerage & logistics coordination",
    summary:
      "Cleared and coordinated specialized equipment and parts for the Malampaya deep-water gas-to-power facility — the country's largest indigenous energy project.",
    image: "https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "navy",
  },
  {
    slug: "petron-rmp-2",
    name: "Petron RMP-2 Refinery",
    category: "Petrochemical",
    location: "Limay, Bataan",
    role: "Project-cargo logistics",
    summary:
      "Supported the Refinery Master Plan 2 expansion — coordinating heavy-equipment imports, customs entries, and bonded storage during the multi-year build.",
    image: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "lighthouse",
  },
  {
    slug: "shell-procurement",
    name: "Shell Procurement Lanes",
    category: "Energy Major",
    location: "Multiple sites, PH",
    role: "Trade compliance",
    summary:
      "Steady-state customs and trade-compliance support for an energy major's procurement pipeline — keeping critical-path materials moving without delay.",
    image: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "brass",
  },
  {
    slug: "wind-energy-corridor",
    name: "Renewable Energy Corridor",
    category: "Renewables",
    location: "Northern Luzon",
    role: "Project-cargo brokerage",
    summary:
      "Inbound clearance and route coordination for wind-turbine components — towers, blades, and nacelles staged from port through inland highways.",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "navy",
  },
  {
    slug: "kwe-airfreight",
    name: "KWE Airfreight Operations",
    category: "Forwarding Partner",
    location: "NAIA, Manila",
    role: "Customs entry & AOG support",
    summary:
      "Long-running airfreight clearance partnership — including time-critical AOG and high-value electronics consignments cleared on the same shift.",
    image: "https://images.pexels.com/photos/47044/airplane-cargo-loading-shipping-47044.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "brass",
  },
  {
    slug: "royal-cargo-multimodal",
    name: "Royal Cargo Multimodal",
    category: "Forwarding Partner",
    location: "Manila & Subic",
    role: "Brokerage co-op",
    summary:
      "Multimodal customs clearance and trucking coordination for one of the country's most established forwarding houses.",
    image: "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "lighthouse",
  },
] as const;

export const clients = [
  "Petron",
  "Shell",
  "Malampaya",
  "Kintetsu World Express",
  "Royal Cargo",
  "Aylemaar",
] as const;

export const principles = [
  {
    number: "I.",
    title: "Integrity, plainly",
    body: "Every entry, every duty paid, every disclosure — handled the way the rules expect, not the way that's most convenient.",
  },
  {
    number: "II.",
    title: "Speed without shortcuts",
    body: "Expediency is the work of preparation: clean documents, well-kept agency relationships, and shipments that move because the paperwork already cleared the path.",
  },
  {
    number: "III.",
    title: "Quiet competence",
    body: "Our best engagements end without drama. We measure success in shipments that arrived on time and clients who didn't have to ask twice.",
  },
  {
    number: "IV.",
    title: "Care for our people",
    body: "A safe, supportive, and spiritually nourishing workplace produces better operators — and better operators produce better outcomes.",
  },
] as const;

export const timeline = [
  {
    period: "2010 – 2018",
    title: "Foundations in Customs & Forwarding",
    body: "Years inside customs houses, forwarders, and brokerage desks — learning the trade end-to-end, building agency rapport that still carries weight today.",
  },
  {
    period: "2018 – 2023",
    title: "Project Cargo & Government Work",
    body: "Hands-on roles supporting large-scale energy and infrastructure projects, including engagements adjacent to Malampaya and the Petron RMP-2 expansion.",
  },
  {
    period: "2024",
    title: "LuminaOmnia Solutions Trading OPC founded",
    body: "Established as a one-person corporation in Castillejos, Zambales — a deliberately small house, structured around quality, ethics, and direct client care.",
  },
  {
    period: "2025 →",
    title: "Market Expansion",
    body: "Entering two new geographical markets and industry sectors. Local partnerships, tailored marketing, and a deliberate rhythm of growth.",
  },
  {
    period: "2027 →",
    title: "Revenue Diversification",
    body: "Targeting 40% revenue growth through new client acquisition and broader service mix — alongside a structured employee training and development program.",
  },
  {
    period: "2031 →",
    title: "Strategic Partnerships",
    body: "Five-plus deep partnerships with key government agencies and industry stakeholders — for smoother project execution and steadier service delivery.",
  },
] as const;
