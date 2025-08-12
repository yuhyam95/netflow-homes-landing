import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const values = [
  "Quality Craftsmanship",
  "Client-Centric Approach",
  "Integrity and Honesty",
  "Sustainable Practices",
  "Safety First",
  "Innovation and Technology"
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              About NETFLOW Smart Homes Ltd
            </h1>
            <p className="text-lg text-muted-foreground">
              Founded on the principles of quality, integrity, and sustainability, NETFLOW Smart Homes Ltd has grown from a small local builder into a leading construction firm recognized for its commitment to excellence.
            </p>
            <h2 className="font-headline text-2xl font-semibold">Our Story</h2>
            <p className="text-muted-foreground">
              For over two decades, we have been transforming visions into reality. Our journey began with a passion for building and a single goal: to deliver exceptional results that exceed our clients' expectations. Today, we continue to uphold that promise on every project, big or small.
            </p>
            <h2 className="font-headline text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to build lasting relationships with our clients by providing superior construction services. We are dedicated to delivering projects on time, within budget, and to the highest standards of quality, while ensuring a safe and collaborative work environment.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x700"
              alt="Team of construction workers"
              width={600}
              height={700}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="construction workers"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
