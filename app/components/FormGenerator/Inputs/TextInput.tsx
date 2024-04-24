import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "~/components/ui/input";

type Props = ComponentProps<typeof Input>;

export default function BaseInput(props: Props) {
  const { register } = useFormContext();

  return <Input {...props} {...register(props.name!)} />;
}
