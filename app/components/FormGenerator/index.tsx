import { FormGenerator } from "./Form";
import { getInputsFromSchema } from "./Inputs";
import { buildJsonSchema } from "./Inputs/rules";
import { FormGeneratedProps, FormGeneratorArgs } from "./types";

const defaultFormConfig: FormGeneratorArgs["formConfig"] = {
  method: "post",
  saveButtonText: "Save changes",
};

export const useFormGenerator = ({ schema, formConfig }: FormGeneratorArgs) => {
  const inputs = getInputsFromSchema(schema);
  const jsonSchema = buildJsonSchema(schema);
  const { method, saveButtonText } = { ...defaultFormConfig, ...formConfig };
  return {
    Form: ({ actions }: FormGeneratedProps) => (
      <FormGenerator
        inputs={inputs}
        schema={jsonSchema}
        method={method}
        saveButtonText={saveButtonText}
        actions={actions}
      />
    ),
  };
};
