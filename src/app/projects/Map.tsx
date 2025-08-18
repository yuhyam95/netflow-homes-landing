
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { ExternalLink } from "lucide-react";

interface MapProps {
    address: string;
}

export default function Map({ address }: MapProps) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Location</h2>
        <Card className="bg-muted/50">
            <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                        <p className="font-semibold">{address}</p>
                         <Button asChild variant="link" className="p-0 h-auto font-normal text-sm text-accent hover:text-accent/80">
                            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                View on Google Maps
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
