import { FetcherFormProps } from "react-router-dom";
import { Form } from "@remix-run/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { FieldProps } from "./types";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";
import { fullFormats } from "ajv-formats/dist/formats";

interface Inputs {
  Component: (props: FieldProps) => JSX.Element;
  name: string;
}

interface Props {
  inputs: Inputs[];
  method: FetcherFormProps["method"];
  saveButtonText?: string;
  schema: JSONSchemaType<unknown>;
  actions?: JSX.Element;
}

export const FormGenerator = ({
  inputs,
  method = "post",
  saveButtonText,
  actions,
  schema,
}: Props) => {
  const form = useForm({
    mode: "onBlur",
    resolver: ajvResolver(schema, { allErrors: true, formats: fullFormats }),
  });
  const { formState, handleSubmit } = form;
  const { errors } = formState;

  return (
    <FormProvider {...form}>
      <Form
        method={method}
        className="grid items-start gap-1"
      >
        {inputs.map(({ Component, name }) => {
          return <Component key={name} errors={errors} />;
        })}
        <div className="flex justify-end gap-4">
          {actions}
          <Button type="submit">{saveButtonText}</Button>
        </div>
      </Form>
    </FormProvider>
  );
};
