import { FetcherFormProps } from "react-router-dom";
import { FetcherWithComponents, Form, useSubmit } from "@remix-run/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { FieldProps } from "./types";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";
import { fullFormats } from "ajv-formats/dist/formats";
import { FormField } from "../ui/form";
import { useRef } from "react";
import { LoaderIcon } from "lucide-react";

interface Inputs {
  Component: (props: FieldProps) => JSX.Element;
  props?: Record<string, unknown>;
  name: string;
}

interface Props {
  inputs: Inputs[];
  method: FetcherFormProps["method"];
  saveButtonText?: string;
  schema: JSONSchemaType<unknown>;
  actions?: JSX.Element;
  onSubmitCallback?: () => void;
  fetcher?: FetcherWithComponents<unknown>;
  defaultValues?: Record<string, unknown>;
}

export const FormGenerator = ({
  inputs,
  method = "post",
  saveButtonText,
  actions,
  schema,
  onSubmitCallback,
  fetcher,
  defaultValues,
}: Props) => {
  const form = useForm({
    defaultValues: defaultValues,
    mode: "onBlur",
    resolver: ajvResolver(schema, {
      allErrors: true,
      formats: fullFormats,
      coerceTypes: true,
      validateSchema: "log"
    }),
  });

  const formRef = useRef<HTMLFormElement>(null);
  const navSubmit = useSubmit();
  const submit = fetcher?.submit ?? navSubmit;

  const onSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    cb?: () => void
  ) => {
    form.handleSubmit(() => {
      if (!formRef.current) return;
      if (cb) cb();
      return submit(formRef.current, {
        method,
        preventScrollReset: true,
        unstable_flushSync: true,
      });
    })(event);
  };

  return (
    <FormProvider {...form}>
      <Form
        ref={formRef}
        method={method}
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event, onSubmitCallback);
        }}
      >
        {inputs.map(({ Component, name, props }) => {
          return (
            <FormField
              control={form.control}
              name={name}
              key={name}
              render={({ field }) => <Component field={field} {...props} />}
            />
          );
        })}
        <div className="flex justify-end gap-4">
          {actions}
          <Button disabled={fetcher?.state !== "idle"} type="submit">
            {fetcher?.state !== "idle" ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              saveButtonText
            )}
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
};
