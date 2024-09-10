import { FormProvider, Templates } from "@react-formgen/json-schema";
import { ShadcnArrayField } from "./templates/ArrayField";
import { ShadcnBooleanField } from "./templates/BooleanField";
import { ShadcnNumberField } from "./templates/NumberField";
import { ShadcnObjectField } from "./templates/ObjectField";
import { ShadcnStringField } from "./templates/StringField";
import { ShadcnFormComponent } from "./templates/FormComponent";
import { JSONSchema7 } from "json-schema";

/**
 * Custom Fields Object
 */
const inputTemplates: Templates = {
  ArrayTemplate: ShadcnArrayField,
  BooleanTemplate: ShadcnBooleanField,
  NumberTemplate: ShadcnNumberField,
  ObjectTemplate: ShadcnObjectField,
  StringTemplate: ShadcnStringField,
};

export function FormGenerator({
  initialData,
  schema,
}: {
  initialData: any;
  schema: JSONSchema7;
}) {
  return (
    <FormProvider
      templates={inputTemplates}
      initialData={initialData}
      schema={schema}
    >
      <ShadcnFormComponent onSubmit={() => {}} onError={() => {}} />
    </FormProvider>
  );
}
