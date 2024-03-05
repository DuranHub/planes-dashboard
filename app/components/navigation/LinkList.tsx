import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  className?: string;
  links: {
    to: string;
    text: string;
    icon: LucideIcon | string;
  }[];
}

export default function LinkList({ className = "", links }: Props) {
  return (
    <nav className={cn(className)}>
      <ul className="space-y-2">
        {links.map((link) => {
          const Icon =
            typeof link.icon === "string" ? (
              <span>{link.icon}</span>
            ) : (
              <link.icon size={16} />
            );
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex w-full h-full items-center space-x-2 hover:bg-stone-200 p-2 rounded-md"
              >
                {Icon}
                <span className="text-base">{link.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
