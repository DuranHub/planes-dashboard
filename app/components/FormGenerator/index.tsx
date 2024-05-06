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
  const inputs = getInputsFromSchema(schema);
  const jsonSchema = buildJsonSchema(schema);
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
