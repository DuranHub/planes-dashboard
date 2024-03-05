import { Fragment } from "react";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";

interface Props {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: Props) {
  return (
    <Fragment>
      <hgroup className="px-4">
        <Heading level="h1" className="mb-2">
          {title}
        </Heading>
        {description && <p className="mb-4 text-stone-700">{description}</p>}
      </hgroup>
      <Separator />
    </Fragment>
  );
}
