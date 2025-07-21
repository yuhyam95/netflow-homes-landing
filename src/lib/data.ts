import { Building2, Home as HomeIcon, Wrench } from "lucide-react";

export const services = [
  {
    icon: HomeIcon,
    title: "Residential Construction",
    description: "Building custom homes with quality craftsmanship and attention to detail, tailored to your lifestyle.",
    link: "/services",
    image: "https://placehold.co/600x400",
    hint: "residential construction",
    fullDescription: "Our residential construction service focuses on creating beautiful, functional, and sustainable custom homes. We work closely with clients from the initial design phase to the final touches, ensuring every aspect of the home reflects their vision and lifestyle. Our team uses high-quality materials and innovative building techniques to deliver homes that are not only aesthetically pleasing but also durable and energy-efficient.",
    features: ["Custom Home Design", "New Builds", "Luxury Residences", "Energy-Efficient Solutions", "Quality Materials", "Personalized Service"]
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Expert solutions for commercial buildings, from office spaces to retail centers, delivered on time and on budget.",
    link: "/services",
    image: "https://placehold.co/600x400",
    hint: "commercial building",
    fullDescription: "We provide comprehensive construction services for a wide range of commercial projects, including office buildings, retail spaces, and industrial facilities. Our team has the expertise to manage projects of all sizes, ensuring they are completed on time, within budget, and to the highest standards of quality. We focus on creating spaces that are functional, sustainable, and meet the specific needs of your business.",
    features: ["Office Buildings", "Retail Centers", "Industrial Facilities", "Project Management", "LEED Certification", "Tenant Improvements"]
  },
  {
    icon: Wrench,
    title: "Renovations & Remodeling",
    description: "Transforming existing spaces with modern designs and functional upgrades for homes and businesses.",
    link: "/services",
    image: "https://placehold.co/600x400",
    hint: "home renovation kitchen",
    fullDescription: "Our renovation and remodeling services are designed to breathe new life into existing spaces. Whether you're looking to update a single room, undertake a whole-home renovation, or remodel a commercial property, our team has the skills and experience to deliver exceptional results. We combine modern design principles with quality craftsmanship to create spaces that are both beautiful and functional.",
    features: ["Kitchen & Bath Remodels", "Home Additions", "Historic Restorations", "Basement Finishing", "Exterior Facelifts", "Commercial Remodeling"]
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
