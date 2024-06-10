import { CheckIcon, ChevronsUpDown } from "lucide-react";
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
import { ComponentProps, Fragment, useMemo, useState } from "react";
import { graphql, graphqlClient } from "~/graphql/client.server";
import { authenticator } from "~/services/auth/auth.server";
import { useFormContext } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { FormControl } from "~/components/ui/form";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  invariant(typeof query === "string", "query is required");

  if (query.length < 3) {
    return json({
      users: [],
    });
  }

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

type BaseProps = ComponentProps<typeof Input>;

interface Props extends BaseProps {
  options: { value: string; label: string }[];
  field: { name: string; value: string };
}

export function SearchUserCombobox({ field, options, defaultValue }: Props) {
  const userFetcher = useFetcher<typeof loader>({ key: "searchUser" });
  const form = useFormContext();
  const { setValue: setFormValue, clearErrors } = form;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? "");
  const [query, setQuery] = useState("");

  const users = useMemo(() => {
    const optionsToSelectItem = options.map((option) => ({
      id: option.value,
      name: option.label,
    }));

    if (userFetcher.data?.users) {
      const newUsers = userFetcher.data?.users.filter(
        (user) => !optionsToSelectItem.some((option) => option.id === user.id)
      );

      optionsToSelectItem.push(...newUsers);
    }

    return optionsToSelectItem;
  }, [userFetcher.data?.users, options]);
  const isLoading = userFetcher.state !== "idle";

  const showSpinner = useSpinDelay(isLoading, {
    delay: 10,
    minDuration: 500,
  });

  const displayValue = users.find((user) => user.id === value)?.name;

  return (
    <Fragment>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              type="button"
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {displayValue ? displayValue : "Search a user"}
              {showSpinner ? (
                <Spinner showSpinner={showSpinner} />
              ) : (
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              )}
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[600px] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              asChild
              name="searchUser"
              value={query}
              onValueChange={(args) => {
                if (args !== query) {
                  setQuery(args);
                  userFetcher.load(`/resources/search-user?query=${args}`);
                }
              }}
              placeholder="Start typing to search"
            >
              <input type="text" />
            </CommandInput>
            <CommandEmpty>
              {query.length < 3
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
                    setFormValue(
                      field.name,
                      currentValue === value ? "" : currentValue
                    );
                    clearErrors(field.name);
                    setOpen(false);
                  }}
                >
                  {user.id === value ? (
                    <CheckIcon className="w-4 mr-2" />
                  ) : user.id === options[0].value ? (
                    "(Original) "
                  ) : null}
                  {user.name}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* Hidden input to store the selected value and submit it with the form */}
      <input
        className="hidden"
        type="hidden"
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={() => {}}
      />
    </Fragment>
  );
}
