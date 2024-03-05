import { cn } from "~/lib/utils";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  visualLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"h1">;

const visualMapping = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-md",
  h6: "text-sm",
};

function Heading({ children, level, visualLevel, className, ...props }: Props) {
  const Component = level;
  const size = visualMapping[visualLevel || level];
  return (
    <Component
      {...props}
      className={cn("font-bold tracking-tight", size, className)}
    >
      {children}
    </Component>
  );
}

export { Heading };
