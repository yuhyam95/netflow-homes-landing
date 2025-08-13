import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Eye, Gem, Target } from "lucide-react";
import Image from "next/image";

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
              Founded on the principles of quality, integrity, and sustainability, NETFLOW Smart Homes Ltd has grown from a small local builder into a leading construction firm recognized for its commitment to excellence.
            </p>
            <h2 className="font-headline text-2xl font-semibold">Our Story</h2>
            <p className="text-muted-foreground">
              For over two decades, we have been transforming visions into reality. Our journey began with a passion for building and a single goal: to deliver exceptional results that exceed our clients' expectations. Today, we continue to uphold that promise on every project, big or small.
            </p>
             <p className="text-muted-foreground">
              We are a team of seasoned professionals driven with zeal and motivated with passion and quality services delivery in an effective and efficient manner within a reasonable cost, quality and time. The firm is based in Abuja with a client range that extends to private, corporate, and government agencies. Our management expertise is supported by state-of-the-art information systems that interface to provide accurate estimating, sound and efficient project management with an effective cost control mechanism. We are well known for our proactive and innovative approaches to the challenges that inevitably arise during major construction projects to ensure their successful completion.
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
    </div>
  );
}
