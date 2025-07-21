import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <article className="space-y-8">
        <div>
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <h1 className="font-headline text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            </div>
          </div>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          className="w-full rounded-lg bg-muted object-cover shadow-lg"
          data-ai-hint={post.hint}
        />

        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}