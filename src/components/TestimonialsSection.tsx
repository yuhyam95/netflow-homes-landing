
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </div>
        <Carousel
          className="mx-auto mt-12 w-full max-w-4xl"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="h-full border-2 border-primary/10 bg-muted/30 pt-8 shadow-lg">
                    <CardContent className="relative flex h-full flex-col items-center justify-center text-center">
                      <Quote className="absolute -top-4 -left-2 h-10 w-10 text-primary/20" />
                      <p className="italic text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.hint}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Quote className="absolute -bottom-4 -right-2 h-10 w-10 rotate-180 text-primary/20" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
