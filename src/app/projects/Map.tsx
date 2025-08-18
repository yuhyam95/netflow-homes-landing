
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";

interface MapProps {
    address: string;
}

export default function Map({ address }: MapProps) {
  // Note: You'll need to add your Google Maps API key to your environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline text-2xl font-bold">Location</h2>
           <Button asChild variant="link" className="p-0 h-auto font-normal text-sm text-accent hover:text-accent/80">
              <a href={externalMapUrl} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                  <ExternalLink className="ml-2 h-4 w-4" />
              </a>
          </Button>
        </div>
        <Card className="overflow-hidden">
            {apiKey ? (
                <iframe
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={embedMapUrl}>
                </iframe>
            ) : (
                <CardContent className="p-6 bg-muted/50 h-[400px] flex flex-col items-center justify-center">
                   <div className="text-center">
                        <p className="text-muted-foreground">Google Maps API key is not configured.</p>
                        <p className="text-muted-foreground mt-2">The interactive map is currently unavailable.</p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5" />
                            <span className="font-semibold">{address}</span>
                        </div>
                   </div>
                </CardContent>
            )}
        </Card>
    </div>
  );
}
