import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={image}
                        alt={`${project.title} image ${index + 1}`}
                        fill
                        className="rounded-lg object-cover shadow-lg"
                        data-ai-hint={project.hint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>{project.Address}</span>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{project.description}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}