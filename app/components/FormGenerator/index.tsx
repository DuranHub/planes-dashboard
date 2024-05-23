import { ComponentProps, useMemo } from "react";
import { FormGenerator } from "./Form";
import { getInputsFromSchema } from "./Inputs";
import { buildJsonSchema } from "./Inputs/rules";
import { FormGeneratedProps, FormGeneratorArgs, Schema } from "./types";

const defaultFormConfig: FormGeneratorArgs["formConfig"] = {
  method: "post",
  saveButtonText: "Save changes",
};

function getDefaultValues(schema: Schema) {
  return schema.reduce((acc, field) => {
    if (field.kind === "select") {
      return {
        ...acc,
        [field.name]: field.defaultValue || field.options[0]?.value || "",
      };
    }

    return { ...acc, [field.name]: field.defaultValue || "" };
  }, {});
}

export const useFormGenerator = ({ schema, formConfig }: FormGeneratorArgs) => {
  const inputs = useMemo(() => getInputsFromSchema(schema), [schema]);
  const jsonSchema = useMemo(() => buildJsonSchema(schema), [schema]);
  const { method, saveButtonText } = { ...defaultFormConfig, ...formConfig };

  return {
    FormGenerated: ({
      actions,
      onSubmitCallback,
      fetcher,
    }: FormGeneratedProps) => (
      <FormGenerator
        inputs={inputs}
        schema={jsonSchema}
        fetcher={fetcher}
        method={method}
        saveButtonText={saveButtonText}
        actions={actions}
        onSubmitCallback={onSubmitCallback}
        defaultValues={getDefaultValues(schema)}
      />
    ),
  };
};

interface FormGProps extends FormGeneratorArgs {
  fetcher: ComponentProps<typeof FormGenerator>["fetcher"];
  actions?: ComponentProps<typeof FormGenerator>["actions"];
  callback?: ComponentProps<typeof FormGenerator>["onSubmitCallback"];
}

export function FormGenerate({
  schema,
  formConfig,
  actions,
  fetcher,
  callback,
}: FormGProps) {
  const inputs = useMemo(() => getInputsFromSchema(schema), [schema]);
  const jsonSchema = useMemo(() => buildJsonSchema(schema), [schema]);
  const { method, saveButtonText } = { ...defaultFormConfig, ...formConfig };

  return (
    <FormGenerator
      inputs={inputs}
      schema={jsonSchema}
      method={method}
      saveButtonText={saveButtonText}
      defaultValues={getDefaultValues(schema)}
      fetcher={fetcher}
      actions={actions}
      onSubmitCallback={callback}
    />
  );
}
