import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Projects</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Browse through a selection of our finest work, showcasing our versatility and commitment to quality across residential and commercial sectors.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="font-headline text-3xl font-bold">{project.title}</h2>
                <p className="mt-4 text-muted-foreground">{project.description}</p>
              </div>
              <div className="p-4 md:p-8">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="relative aspect-video p-0">
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-lg"
                              data-ai-hint={project.hint}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
