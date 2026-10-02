import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  status?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  status,
  tags,
  link,
  image,
  imageAlt,
  imageCaption,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || links?.[0]?.href || "#projects"}
        aria-label={`Explore ${title}`}
        target={href?.startsWith("https://") ? "_blank" : undefined}
        rel={href?.startsWith("https://") ? "noopener noreferrer" : undefined}
        className={cn("block bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto aspect-video w-full object-contain"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={imageAlt || title}
            width={640}
            height={360}
            sizes="(min-width: 640px) 304px, calc(100vw - 48px)"
            className="aspect-video w-full object-contain"
          />
        )}
      </Link>
      {imageCaption && (
        <p className="px-3 pt-2 text-[11px] leading-relaxed text-muted-foreground">{imageCaption}</p>
      )}
      <CardHeader className="px-3 pt-3">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs text-muted-foreground">{dates}</span>
            {status && <Badge variant="outline" className="px-1.5 py-0 text-[10px]">{status}</Badge>}
          </div>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 pb-3">
        {(image || (links && links.length > 0)) && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link.href} key={link.href}
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                aria-label={`${title}: ${link.type}`}>
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
            {image && (
              <Link href={image} target="_blank" rel="noopener noreferrer"
                aria-label={`${title}: View full image`}>
                <Badge variant="outline" className="px-2 py-1 text-[10px]">View image</Badge>
              </Link>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
