import { ComponentProps } from "react";
import { FormControl } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

type BaseProps = ComponentProps<typeof Input>;
interface Props extends BaseProps {
  field: { name: string; value: string };
}

export default function BaseInput({ field, defaultValue }: Props) {
  return (
    <FormControl>
      <Input defaultValue={defaultValue || ""} {...field} />
    </FormControl>
  );
}
