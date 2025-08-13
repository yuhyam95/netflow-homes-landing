import { Building, ClipboardList, TrendingUp, Warehouse } from "lucide-react";
import heroImage from "../../public/hero.jpg";
   import teamMeetingImage from "../../public/team-meeting.jpg";
   import propertyInvestmentImage from "../../public/property-investment.jpg";
   import constructionManagementImage from "../../public/construction-management.jpg";
export const services = [
  {
    icon: Building,
    title: "Construction",
    description: "High-quality construction services for residential and commercial properties, ensuring durability and excellence.",
    link: "/services",
    image: heroImage,
    hint: "construction site",
    fullDescription: "Our construction operation comprises all types of build environment. This includes the most complex projects such as tall buildings as well as a large number of mid-size projects and small projects such as private homes. In addition to our construction services, we contribute with our specialized expertise, for example withing design build. We target client in both private and public sectors.",
    features: ["New Builds", "Renovations", "Structural Engineering", "Quality Materials", "Safety Compliance", "On-Time Delivery"]
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Expert project management to ensure your construction project is completed on time, within budget, and to the highest standards.",
    link: "/services",
    image: teamMeetingImage,
    hint: "blueprints planning",
    fullDescription: "Project management ties together in all activities on a project. A project mya be well conceived and adequately financed, the contract may be carefully drown-up, the contractors and workers highly experienced. But if all aspect of the project is not expertly integrated and managed, it may overrun the budget, fail to meet the schedule or fall short in technical quality.",
    features: ["Budget Management", "Timeline Planning", "Contractor Coordination", "Risk Assessment", "Quality Control", "Client Reporting"]
  },
  {
    icon: Warehouse,
    title: "Facility Management",
    description: "Comprehensive facility management services to maintain and optimize your properties for long-term value.",
    link: "/services",
    image: constructionManagementImage,
    hint: "modern building maintenance",
    fullDescription: "Our focus is to manage your facility so that you can concentrate on you own core business/ professional activities while we help prolong the lifespan and functionality of your existing structure/property. Facility management is curtailed in the maintenance and some total renovation of a building. It is a strategy that seeks to minimize infrastructure cost in the long run because it lessens the depreciation rate of a building. Moreover, it preserves the intrinsic and extrinsic value of a given infrastructure. At NETFLOW SMART HOMES LTD, we strive to provide professional and eﬃcient services, tailored to respond to the individual needs of our clients. We are providing a high-quality facilities management including cleaning services, property rent/ lease both public and private properties.",
    features: ["Preventative Maintenance", "Asset Management", "Operational Support", "Safety & Compliance", "Vendor Management", "Tenant Support"]
  },
  {
    icon: TrendingUp,
    title: "Property Investment",
    description: "Strategic property investment advice and opportunities to help you build and grow your real estate portfolio.",
    link: "/services",
    image: propertyInvestmentImage,
    hint: "real estate investment",
    fullDescription: "It involves the purchase, management and sales or retail of real estate for profit. In NETFLOW SMART HOME we have various investing options and advisors to make investment profitable particularly in the real estate. Investment properties are often purchased from a variety of sources including market listing, real estate brokers, Banks and Government entities and sale properties to make valuable profit. NETFLOW SMART HOME will help an investor to make a market analysis before selling oﬀ to obtain profit.",
    features: ["Market Analysis", "Portfolio Strategy", "Property Sourcing", "Due Diligence", "Financial Modeling", "Acquisition Support"]
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern Lakeside Residence",
    description: "A stunning example of modern architecture, this custom-built home features expansive glass walls, natural wood accents, and a seamless connection to the surrounding landscape.",
    images: ["https://placehold.co/1200x675", "https://placehold.co/1200x675", "https://placehold.co/1200x675"],
    hint: "modern residence",
    location: "Lakeview, USA",
    price: "From $1.2M",
    client: "The Miller Family",
    year: "2023",
    duration: "18 Months"
  },
  {
    id: 2,
    title: "Downtown Office Tower",
    description: "This commercial project involved the construction of a 20-story office building in the heart of the city. We implemented innovative, sustainable technologies to achieve a LEED Platinum certification.",
    images: ["https://placehold.co/1200x675", "https://placehold.co/1200x675", "https://placehold.co/1200x675"],
    hint: "office tower",
    location: "Metropolis, USA",
    price: "$35M",
    client: "Innovate Corp.",
    year: "2022",
    duration: "3 Years"
  },
  {
    id: 3,
    title: "Historic Farmhouse Renovation",
    description: "We meticulously restored and expanded a 19th-century farmhouse, preserving its historic charm while integrating modern amenities for family living.",
    images: ["https://placehold.co/1200x675", "https://placehold.co/1200x675", "https://placehold.co/1200x675"],
    hint: "historic farmhouse",
    location: "Willow Creek, USA",
    price: "From $850k",
    client: "The Garcia Family",
    year: "2023",
    duration: "14 Months"
  },
   {
    id: 4,
    title: "Retail Complex 'The Grove'",
    description: "A multi-unit retail complex designed to foster community and commerce, featuring unique storefronts and pedestrian-friendly walkways.",
    images: ["https://placehold.co/1200x675", "https://placehold.co/1200x675", "https://placehold.co/1200x675"],
    hint: "retail complex",
    location: "Oakwood, USA",
    price: "$12.5M",
    client: "Commerce Group",
    year: "2021",
    duration: "2.5 Years"
  },
];

export const featuredProjects = projects.slice(0, 3);
