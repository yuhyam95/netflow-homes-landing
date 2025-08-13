import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Eye, Gem, Target } from "lucide-react";
import Image from "next/image";
import TeamSection from "@/components/TeamSection";

const values = [
    "Integrity",
    "Innovation",
    "Professionalism",
    "Excellence",
    "Client-Centric Approach",
    "Safety First"
];

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
              NETFLOW SMART HOME LTD is a Real Estate Company positioned to fully utilize the modern-day construction technique in a smart way and also taking full advantage of the many opportunities to achieve a cliental goal. NETFLOW SMART HOME LTD Incorporated in August 2022, it is an Indigenous Real Estate firm that fully represent a new generation in a smart way.
            </p>
            <h2 className="font-headline text-2xl font-semibold">Who We Are</h2>
            <p className="text-muted-foreground">
              We are a team of seasoned professionals driven with zeal and motivated with passion and quality services delivery with eﬀective and eﬃcient manner within a reasonable cost, quality and time. The firm is based in Abuja with a client range that extend to private, corporate, and government agencies.
            </p>
             <p className="text-muted-foreground">
              Our management expertise is supported by state of the art information system that interface to provide accurate estimating sound and eﬃcient project management with eﬀective cost control mechanism. We are well known for our proactive and innovative approaches to the challenges that inevitably arise during major construction projects to the successful completion.
            </p>
             <p className="text-muted-foreground">
              Of equal importance to our staﬀ, our state of the art technology and our track records is our fundamental integrity. We believe that our competitive advantage result from the mutual trust and respect that we share with our employees and clients. Eﬀective team work significantly and positively aﬀect our ability to deliver a quality project on time within budget.
            </p>
             <p className="text-muted-foreground">
              NETFLOW SMART HOME has established competence in delivering quality projects both in and outside Abuja. The company's core areas of expertise include construction, project management, facilitating management, investment, property marketing and advisory.
            </p>
          </div>
          <div>
            <Image
              src="/team-meeting.jpg"
              alt="Team of construction workers"
              width={600}
              height={700}
              className="rounded-lg object-cover shadow-xl"
              data-ai-hint="construction workers"
            />
          </div>
        </div>
      </section>

       <section id="principles" className="w-full bg-card py-16 md:py-24">
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

      <TeamSection />
    </div>
  );
}
