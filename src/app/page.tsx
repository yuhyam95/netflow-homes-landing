import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home as HomeIcon, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredProjects } from "@/lib/data";

const services = [
  {
    icon: <HomeIcon className="mb-4 h-12 w-12 text-primary" />,
    title: "Residential Construction",
    description: "Building custom homes with quality craftsmanship and attention to detail, tailored to your lifestyle.",
    link: "#",
  },
  {
    icon: <Building2 className="mb-4 h-12 w-12 text-primary" />,
    title: "Commercial Projects",
    description: "Expert solutions for commercial buildings, from office spaces to retail centers, delivered on time and on budget.",
    link: "#",
  },
  {
    icon: <Wrench className="mb-4 h-12 w-12 text-primary" />,
    title: "Renovations & Remodeling",
    description: "Transforming existing spaces with modern designs and functional upgrades for homes and businesses.",
    link: "#",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Modern house exterior"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="modern house"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Building Your Vision
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            VerdantBuild brings your architectural dreams to life with precision, passion, and professionalism.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a comprehensive range of construction services to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="w-full py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
           <div>
            <Image
              src="https://placehold.co/600x400"
              alt="Construction team meeting"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="construction team"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose VerdantBuild?</h2>
            <p className="mt-4 text-muted-foreground">
              With over 20 years of experience, VerdantBuild is a trusted name in the construction industry. Our commitment to quality, sustainability, and client satisfaction sets us apart. We use the latest technology and eco-friendly materials to create structures that are not only beautiful but also built to last.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A glimpse into our portfolio of successfully completed projects.
            </p>
          </div>
          <Carousel className="mx-auto mt-12 w-full max-w-4xl"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        width={1200}
                        height={675}
                        className="h-full w-full object-cover"
                         data-ai-hint={project.hint}
                      />
                      <div className="p-6">
                        <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                        <p className="mt-2 text-muted-foreground">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
           <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}