import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { FormControl } from "~/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { ComponentProps, Fragment } from "react";
import { CommandList } from "cmdk";

type BaseProps = ComponentProps<typeof Input>;

interface Props extends BaseProps {
  options: { value: string; label: string }[];
  field: { name: string; value: string };
}

export function SelectInput({ field, ...props }: Props) {
  const form = useFormContext();
  const { setValue, clearErrors } = form;

  return (
    <Fragment>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              id={field.name}
              name={field.name}
              className={cn(
                "w-full justify-between",
                !field?.value && "text-muted-foreground"
              )}
            >
              {field?.value
                ? props.options.find((option) => option.value === field.value)
                    ?.label
                : "Select an option"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup>
              <CommandList>
                <CommandItem
                  value=""
                  onSelect={() => {
                    setValue(field.name, "");
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      !field?.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  None
                </CommandItem>
                {props.options.map((option) => (
                  <CommandItem
                    value={option?.label}
                    key={option?.value}
                    onSelect={() => {
                      clearErrors(field.name);
                      setValue(field.name, option?.value);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        option?.value === field?.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option?.label}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
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
