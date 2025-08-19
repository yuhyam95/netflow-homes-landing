
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Meet Our Team</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          The dedicated professionals behind our success.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`} className="block h-full">
              <Card className="text-center h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
