import { Outlet, useLoaderData } from "@remix-run/react";
import LinkList from "~/components/navigation/LinkList";
import { systemRoutes } from "~/components/navigation/system-routes";
import { Separator } from "~/components/ui/separator";

export async function loader() {
  const emojis = [
    "✏️",
    "📚",
    "📝",
    "📖",
    "🔥",
    "🔨",
    "⚡️",
    "😊",
    "🍎",
    "🍊",
    "🍓",
    "🍇",
    "🍒",
    "🍑",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶️",
    "🥒",
    "🥬",
    "🥦",
    "🍄",
    "🥜",
    "🌰",
    "🍞",
    "🥐",
    "🥖",
    "🥨",
    "🥯",
    "🥞",
    "🧇",
    "🧀",
    "🍖",
    "🍗",
    "🥩",
    "🥓",
  ];

  const procedures = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Procedure ${i + 1}`,
    icon: emojis[Math.floor(Math.random() * emojis.length)],
  }));

  return {
    procedures: [...procedures].map((procedure) => ({
      icon: procedure.icon,
      text: procedure.name,
      to: `/procedures/${procedure.id}`,
    })),
  };
}

export default function Layout() {
  const { procedures } = useLoaderData<typeof loader>();
  return (
    <main className="flex-auto flex overflow-hidden min-h-screen">
      <aside className="min-h-full w-[270px] p-4 bg-stone-50 border-r">
        <LinkList links={systemRoutes} />
        <Separator className="my-4" />
        <LinkList links={procedures} />
      </aside>
      <div className="w-full bg-background h-full py-4">
        <Outlet />
      </div>
    </main>
  );
}
