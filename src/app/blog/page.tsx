import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Company Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Insights, news, and stories from the Nationwide Housing team. Stay updated on our latest projects and industry trends.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105">
            <CardHeader className="p-0">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="h-auto w-full object-cover"
                  data-ai-hint={post.hint}
                />
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                By {post.author} on {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="mt-4 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="link" className="p-0">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
