import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string | undefined;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string | undefined;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: Props) {
  const light = tone === "light";
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      <span className={cn("eyebrow", light && "text-gold", align === "center" && "justify-center")}>
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          light ? "text-ivory" : "text-forest",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
