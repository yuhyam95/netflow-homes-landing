
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Target, Eye, Gem, ArrowRight, MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredProjects, services, teamMembers } from "@/lib/data";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const missionVision = [
    {
        icon: <Target className="h-10 w-10 text-primary" />,
        title: "Our Mission",
        description: "Our mission at NETFLOW SMART HOMES is to deliver exceptional services to our client Though our team of experienced professionals who process the necessary capacity and expertise required to get the job done. We strive to achieve this by delivering high-quality projects, fostering a culture of excellence and upholding the highest standard of professionalism..",
    },
    {
        icon: <Eye className="h-10 w-10 text-primary" />,
        title: "Our Vision",
        description: "To be the most reliable and eﬃcient construction company for clients in Nigeria and beyond, recognized for our quality services and commitment to excellence.",
    },
];

const values = [
    "Integrity",
    "Innovation",
    "Professionalism",
    "Excellence",
    "Client-Centric Approach",
    "Safety First"
];


export default function HomePage() {
  const ceo = teamMembers.find(member => member.role === "Founder & CEO");

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] w-full">
        <Image
          src="/hero.jpg"
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
            NETFLOW Smart Homes brings your architectural dreams to life with precision, passion, and professionalism.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      <section id="principles" className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-6">
                 <div className="flex-shrink-0"><Gem className="h-10 w-10 text-primary" /></div>
                 <div>
                    <h3 className="font-headline text-xl font-bold">Our Values</h3>
                 </div>
              </div>
               <div className="mt-8 grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {missionVision.map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We offer a comprehensive range of construction services to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="relative border bg-background shadow-lg overflow-hidden text-center flex flex-col items-center">
                  <CardHeader className="p-6 flex flex-col items-center gap-4">
                    <div className="rounded-lg bg-primary p-4 shadow-md">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                      <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                      <Link href={service.link}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {ceo && (
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">A Message From Our CEO</h2>
                <blockquote className="mt-4 border-l-4 border-primary pl-6 italic text-muted-foreground text-lg">
                  "Welcome to NETFLOW Smart Homes, where we don't just build structures; we build dreams. Our commitment is to deliver excellence and create lasting value for our clients. We are dedicated to innovation, quality, and turning your vision into a reality. Thank you for trusting us with your future."
                </blockquote>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left md:order-last order-first">
                <Avatar className="h-40 w-40 border-4 border-primary shadow-lg">
                  <AvatarImage src={ceo.image} alt={ceo.name} data-ai-hint={ceo.hint} />
                  <AvatarFallback>{ceo.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-headline text-2xl font-bold">{ceo.name}</h3>
                <p className="font-semibold text-primary">{ceo.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <section id="about" className="w-full py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
           <div>
            <Image
              src="/team-meeting.jpg"
              alt="Construction team meeting"
              width={600}
              height={350}
              className="rounded-lg shadow-xl"
              data-ai-hint="construction team"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Why Choose Us?</h2>
            <p className="mt-4 text-muted-foreground">
              We are a team of seasoned professionals driven with zeal and motivated with passion and quality services delivery with eﬀective and eﬃcient manner within a reasonable cost, quality and time. The firm is based in Abuja with a client range that extend to private, corporate, and government agencies. Our management expertise is supported by state of the art information system that interface to provide accurate estimating sound and eﬃcient project management with eﬀective cost control mechanism. We are well known for our proactive and innovative approaches to the challenges that inevitably arise during major construction projects to the successful completion.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Featured Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A glimpse into our portfolio of successfully completed projects.
            </p>
          </div>
          <Carousel className="mx-auto mt-12 w-full max-w-6xl"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="-ml-4">
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2">
                   <Link href={`/projects/${project.id}`} className="block h-full">
                    <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                      <div className="relative">
                        <div className="aspect-[4/3] w-full">
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={project.hint}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
                          <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6 flex-grow flex flex-col gap-4">
                          <p className="text-muted-foreground text-sm flex-grow font-semibold">{project.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{project.Address}</span>
                          </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem> 
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
          </Carousel>
           <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <TeamSection />

    </div>
  );
}
