import { ChevronsUpDown } from "lucide-react";
import { useSpinDelay } from "spin-delay";

import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { invariant } from "@epic-web/invariant";
import { useFetcher } from "@remix-run/react";
import { useState } from "react";
import { graphql, graphqlClient } from "~/graphql/client.server";
import { authenticator } from "~/services/auth/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  invariant(typeof query === "string", "query is required");

  const usersQuery = graphql(`
    query Users($name: String!) {
      findManyUser(where: { name: { contains: $name, mode: insensitive } }) {
        id
        name
      }
    }
  `);

  const users = await graphqlClient.query(usersQuery, { name: query });

  return json({
    users: users.data?.findManyUser ?? [],
  });
}

function Spinner({ showSpinner }: { showSpinner: boolean }) {
  return (
    <div
      className={`transition-opacity ${
        showSpinner ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
      >
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function SearchUserCombobox() {
  const userFetcher = useFetcher<typeof loader>();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const users = userFetcher.data?.users ?? [];
  const isLoading = userFetcher.state !== "idle";

  const showSpinner = useSpinDelay(isLoading, {
    delay: 10,
    minDuration: 500,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? value : "Search a user"}
          {showSpinner ? (
            <Spinner showSpinner={showSpinner} />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[600px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            value={query}
            onValueChange={(args) => {
              setQuery(args);
              userFetcher.submit(
                { query: args ?? "" },
                {
                  method: "GET",
                  action: "/resources/search-user",
                }
              );
            }}
            placeholder="Start typing to search"
          />
          <CommandEmpty>
            {query.length > 0
              ? "Type at least 3 characters to search"
              : isLoading
              ? "Loading..."
              : "No results found"}
          </CommandEmpty>
          <CommandList>
            {users.filter(Boolean).map((user) => (
              <CommandItem
                key={user.id}
                value={user.id as string}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {user.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
