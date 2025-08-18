
import { Building, ClipboardList, TrendingUp, Warehouse, Briefcase, BedDouble, Sofa, Home, Building2, Bath } from "lucide-react";
import heroImage from "../../public/hero.jpg";
   import teamMeetingImage from "../../public/team-meeting.jpg";
   import propertyInvestmentImage from "../../public/property-investment.jpg";
   import constructionManagementImage from "../../public/construction-management.jpg";
   import facilityManagerImage from "../../public/facility-manager.jpg";
   import consultancyImage from "../../public/consultancy.jpg";
   import katampeSite1 from "../../public/sites/katampe/1.jpeg";
   import katampeSite2 from "../../public/sites/katampe/2.jpeg";
   import katampeSite3 from "../../public/sites/katampe/3.jpeg";
   import katampeSite4 from "../../public/sites/katampe/5.jpeg";
   import katampeSiteFirstFloor from "../../public/sites/katampe/first-floor.png";
   import katampeSiteSecondFloor from "../../public/sites/katampe/first-floor.png";
   import katampeSiteGroundFloor from "../../public/sites/katampe/first-floor.png";
   import kukwabaPlan from "../../public/sites/kukwaba/kukwaba-plan.png";

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
    image: facilityManagerImage,
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
  {
    icon: Briefcase,
    title: "Real Estate Marketing, Advisory and Consultancy",
    description: "Expert guidance in real estate marketing, advisory, and consultancy to help you make informed decisions.",
    link: "/services",
    image: consultancyImage,
    hint: "real estate consulting",
    fullDescription: "These encompass a range of professional services to help property developers, investors, and owners navigate the complex real estate market. These services may include: Market Research and Analysis: Providing insights into market trends, demand, and supply to inform investment decisions. Property Valuation: Determining the value of properties for sale, acquisition, or financing purposes.",
    features: ["Market Research", "Marketing Strategy", "Sales Support", "Investment Analysis", "Portfolio Management", "Consultancy Services"]
  }
];

export const projects = [
  {
    id: 1,
    title: "NETFLOW RESIDENCE KATAMPE",
    description: "4 bedrooms terrace duplex with one room boys quarters and 2 living rooms.",
    images: [katampeSite1, katampeSite2, katampeSite3, katampeSite4, katampeSiteGroundFloor, katampeSiteFirstFloor, katampeSiteSecondFloor],
    hint: "modern residence",
    Address: "Plot 1289, Cadastral Zone B07, Directly Behind Judges Quaters, Katampe Main Abuja",
    location: "Katampe Main, Abuja",
    specifications: [
      { label: "Bedrooms", value: "4", icon: BedDouble },
      { label: "Living Rooms", value: "2", icon: Sofa },
      { label: "BQ", value: "1", icon: Home },
      { label: "Type", value: "Terrace Duplex", icon: Building2 },
      { label: "Bathrooms", value: "5", icon: Bath },
    ],
  },
  {
    id: 2,
    title: "NETFLOW CITY KUKWABA",
    description: "A modern development hub strategically located in Kukwaba, Abuja. It is envisioned as a vibrant smart city community that integrates technology, innovation, and sustainable living",
    images: [kukwabaPlan],
    hint: "modern residence",
    Address: "Plot 891, Cadastral zone B00, Kukwaba District Abuja",
    location: "Kukwaba, Abuja",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const teamMembers = [
  {
    name: "Abdullahi Ahmed Isa",
    slug: "abdullahi-ahmed-isa",
    role: "Founder & CEO",
    image: "https://placehold.co/100x100",
    hint: "male portrait",
    bio: "Abdullahi Ahmed Isa is an astute financial strategist and a project manager. Having served in the Central Bank of Nigeria under Financial System Strategy program for over 13 years and being involved in the strategic process of putting Nigeria among the top 20 economies by transforming the nation's financial landscape through the implementation of well conceptualized transformational initiatives. Abdullahi Ahmed Isa is also an experienced entrepreneur with a demonstrated history of working in the Real Estate industry. A strong visionary whose strength lies in the business development, team building, financial strategy and projection. Ahmed Isa is a firm believer in the integration of technology in the real estate and has led multi-billion Naira sales initiatives. He drives pleasure in engaging and energizing the team leading everyone towards achieving the organizational vision. He holds B.Tech, (Applied Geology), HND (Business Management), Bsc (Banking and Finance) and MBA(General Management) both from Abubakar Tafawa Balewa University Bauchi and Nasarawa State Keﬃ. He is also a certified project manager, strategist and seasoned administrator at various capacity. A member of various professional bodies including Institute of Professional Managers and Administrators of Nigeria, Nigeria Institute of Management, Institute of Debt Recovery Practitioners of Nigeria and Global institute of Project Management Africa."
  },
  {
    name: "Arc. Mustapha Abubakar mnia mcarch",
    slug: "arc-mustapha-abubakar",
    role: "Chief Architect/Project Manager",
    image: "https://placehold.co/100x100",
    hint: "female portrait",
    bio: "Mustapha a hardworking, motivated and conceptional Architect who has acquired extensive knowledge in the field of Architecture at Bsc and Msc level. Work experience which has spanned over 15yrs cut across design, supervision and project management and include working on residential, education, oﬃce and commercial buildings. Also include estate layout and fit outs. Arch. Mustapha worked with various known architectural firms includes Archit Development as project Architect, Akhimax Nig. Ltd  as chief Project Architect as in charge of production of working drawing, contract administration, site supervision, coordination of design team, BIS assessment and conducting site meetings. Arch Mustapha has competent technical skills in AutoCAD, Photoshop CS, and ArchiCAD."
  },
  {
    name: "Sanni Inuwa Baba",
    slug: "sanni-inuwa-baba",
    role: "Head, Digital Marketing and Corporate Communication",
    image: "https://placehold.co/100x100",
    hint: "male portrait professional",
    bio: "Sanni Inuwa Baba is a distinguished Computer Scientist and strategist, holding qualifications from Coventry University coupled with a first-class degree in Business Administration and a rich professional background spanning over 12 years. He has served as a strategy and communication expert for the Financial System Strategy 2020 initiative of the Central Bank of Nigeria. Beyond his role in the public sector, Sanni has made significant strides in the private sector as a communication expert and entrepreneur. He has demonstrated remarkable leadership by founding companies and co-founding two others, solidifying his presence and impact within the business community. In recognition of his expertise and contribution to holistic living, Sanni serves as an honorary advisor to the Sandhya Maarga Institute of Holistic Living in Malaysia, where he continues to share his insight and promote wellness on a global scale."
  },
];

