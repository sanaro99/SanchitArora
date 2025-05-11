import { Card } from "@/components/ui/card";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CourseCardProps {
  name: string;
  url: string;
  date: string;
  image: string;
  altText?: string;
}

export const CourseCard = ({ name, url, date, image, altText }: CourseCardProps) => (
  <Card className="mb-3 p-4 flex items-center">
    <div className="flex-none">
      <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
        <AvatarImage src={image} alt={altText || name} className="object-contain" />
        <AvatarFallback>{(altText || name)[0]}</AvatarFallback>
      </Avatar>
    </div>
    <div className="ml-4 flex-grow">
      <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-base underline underline-offset-2 hover:text-primary">
        {name}
      </a>
      <div className="text-xs text-muted-foreground mt-0.5">{date}</div>
    </div>
  </Card>
);
