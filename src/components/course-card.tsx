import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CourseCardProps {
  name: string;
  url?: string;
  linkLabel?: string;
  date: string;
  image?: string;
  altText?: string;
  issued_by?: string;
}

export const CourseCard = ({ name, url, linkLabel = "Show Certificate", date, image, altText, issued_by }: CourseCardProps) => (
  <Card className="mb-3 p-4 flex items-center">
    <div className="flex-none">
      {image ? <a href={image} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} certificate image`}>
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={image} alt={altText || name} className="object-contain" />
          <AvatarFallback>{(altText || name)[0]}</AvatarFallback>
        </Avatar>
      </a> : <Avatar className="border size-12 bg-muted"><AvatarFallback>{issued_by?.[0] || name[0]}</AvatarFallback></Avatar>}
    </div>
    <div className="ml-4 flex-grow">
      <div className="font-semibold text-base">{name}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{date}</div>
      {issued_by && (
        <div className="text-xs text-muted-foreground">{`Issued by: ${issued_by}`}</div>
      )}
      {url && <div className="mt-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Badge className="px-2 py-1 text-[10px]">{linkLabel}</Badge>
        </a>
      </div>}
    </div>
  </Card>
);
