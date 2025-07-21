import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse through a selection of our finest work, showcasing our versatility and commitment to quality across residential and commercial sectors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
                  <p className="text-sm">{project.description.split(',')[0]}</p>
                  <div className="mt-4 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              <CardContent className="grid grid-cols-2 gap-4 p-6">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="font-semibold">{project.price}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Project Year</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
