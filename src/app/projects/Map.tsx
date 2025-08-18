"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface MapProps {
  address: string;
}

export default function Map({ address }: MapProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-headline text-xl font-bold mb-4">Location</h3>
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-muted-foreground">{address}</p>
            <Button asChild variant="link" className="p-0 h-auto mt-2">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
