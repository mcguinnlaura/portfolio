import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  icon?: React.ComponentType<{ className?: string }>;
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
  icon: Icon,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 min-w-0 group"
          >
            {Icon && (
              <div className="flex-none size-10 rounded-lg border border-border bg-muted flex items-center justify-center">
                <Icon className="size-5 text-foreground" />
              </div>
            )}
            <div className="flex flex-col gap-1 min-w-0">
              <h3 className="font-semibold leading-tight group-hover:underline underline-offset-4">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
          </a>
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex-none"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-1">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs h-6 px-2 hover:bg-muted transition-colors"
                  variant="outline"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
