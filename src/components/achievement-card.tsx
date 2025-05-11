import { Card } from "@/components/ui/card";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AchievementCardProps {
  title: string;
  date?: string;
  description: string;
  image: string;
  altText?: string;
}

export const AchievementCard = ({ title, date, description, image, altText }: AchievementCardProps) => (
  <Card className="mb-3 p-4 flex items-center">
    <div className="flex-none">
      <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
        <AvatarImage src={image} alt={altText || title} className="object-contain" />
        <AvatarFallback>{(altText || title)[0]}</AvatarFallback>
      </Avatar>
    </div>
    <div className="ml-4 flex-grow">
      <div className="font-semibold text-base">{title}</div>
      {date && <div className="text-xs text-muted-foreground mb-1">{date}</div>}
      <div className="text-sm">{description}</div>
    </div>
  </Card>
);
