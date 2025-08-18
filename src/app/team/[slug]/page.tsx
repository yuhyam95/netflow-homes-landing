
import { teamMembers } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <Avatar className="h-48 w-48 mb-4">
              <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h1 className="font-headline text-3xl font-bold text-primary">{member.name}</h1>
            <p className="text-xl text-accent font-semibold">{member.role}</p>
          </div>
          <div className="md:col-span-2">
             <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{member.bio}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
