import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

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
             <Link key={project.id} href={`/projects/${project.id}`} className="block h-full">
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
          ))}
        </div>
      </div>
    </div>
  );
}
