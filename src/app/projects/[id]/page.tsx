

"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { MapPin, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Map from "../Map";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string | null>(null);
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const handleImageClick = (image: StaticImageData | string) => {
    setSelectedImage(image);
  };

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Dialog>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                     <CarouselItem key={index} className="group relative">
                        <DialogTrigger asChild onClick={() => handleImageClick(image)}>
                           <div className="relative aspect-[4/3] w-full cursor-pointer">
                           <Image
                              src={image}
                              alt={`${project.title} image ${index + 1}`}
                              fill
                              className="rounded-lg object-cover shadow-lg"
                              data-ai-hint={project.hint}
                           />
                           <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                              <Search className="h-12 w-12 text-white" />
                           </div>
                           </div>
                        </DialogTrigger>
                     </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              {selectedImage && (
                <DialogContent className="max-w-4xl p-0">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={selectedImage}
                        alt="Enlarged project image"
                        fill
                        className="object-contain"
                      />
                    </div>
                </DialogContent>
              )}
            </Dialog>
          </div>
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              {project.title}
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{project.description}</p>
            </div>

            {project.specifications && (
              <div>
                <h2 className="font-headline text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.specifications.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <Card key={spec.label} className="bg-muted/50 p-4">
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-0 text-center">
                          <Icon className="h-8 w-8 text-primary" />
                          <p className="text-sm font-semibold text-muted-foreground">{spec.label}</p>
                          <p className="font-headline text-lg font-bold">{spec.value}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
         <div className="mt-12">
            <Map address={project.Address} />
        </div>
      </div>
    </div>
  );
}
