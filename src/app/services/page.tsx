import { services } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From initial concept to final construction, we offer a complete range of services designed to bring your vision to life with quality, integrity, and innovation.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <Card key={service.title} className="overflow-hidden border-none shadow-none">
              <div className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={600}
                    className="w-full rounded-lg object-cover shadow-xl"
                    data-ai-hint={service.hint}
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Service 0{index + 1}
                  </div>
                  <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground">{service.fullDescription}</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-shrink-0 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
