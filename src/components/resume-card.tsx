"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  defaultExpanded?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  defaultExpanded = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const detailsId = React.useId();
  const reducedMotion = useReducedMotion();

  return (
    <Card className="flex">
      <div className="flex-none">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}>
            <Avatar className="border size-12 m-auto bg-white">
              <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </a>
        ) : (
          <Avatar className="border size-12 m-auto bg-white">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <div className="min-w-0 flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <h3><button type="button" className="w-full rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            aria-expanded={isExpanded} aria-controls={detailsId}
            aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title}${subtitle ? `, ${subtitle}` : ""}, ${period} details`}
            onClick={() => setIsExpanded((expanded) => !expanded)}>
          <span className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-x-2 text-base">
            <span className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              <ChevronRightIcon
                className={cn(
                  "ml-1 size-4 shrink-0 transition-transform",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </span>
            <span className="text-xs sm:text-sm font-normal tabular-nums text-muted-foreground sm:text-right">
              {period}
            </span>
          </span>
          {subtitle && <span className="mt-1 block font-sans text-xs font-normal">{subtitle}</span>}
          </button></h3>
        </CardHeader>
        <div id={detailsId} aria-hidden={!isExpanded} className="overflow-hidden">
        {badges && badges.length > 0 && (
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <Badge variant="secondary" className="align-middle text-xs mt-2" key={index}>{badge}</Badge>
            ))}
          </motion.div>
        )}
        {description && (
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden text-xs sm:text-sm leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        </div>
      </div>
    </Card>
  );
};
