import {
  CustomFields,
  FormProvider,
  JSONSchema7,
} from "@react-formgen/json-schema";
import { ShadcnArrayField } from "./templates/ArrayField";
import { ShadcnBooleanField } from "./templates/BooleanField";
import { ShadcnNumberField } from "./templates/NumberField";
import { ShadcnObjectField } from "./templates/ObjectField";
import { ShadcnStringField } from "./templates/StringField";
import { ShadcnFormComponent } from "./templates/FormComponent";

/**
 * Custom Fields Object
 */
const shadcnCustomFields: CustomFields = {
  ArrayField: ShadcnArrayField,
  BooleanField: ShadcnBooleanField,
  NumberField: ShadcnNumberField,
  ObjectField: ShadcnObjectField,
  StringField: ShadcnStringField,
};

export function FormGenerator({ schema }: { schema: JSONSchema7 }) {
  return (
    <FormProvider schema={schema}>
      <ShadcnFormComponent method="post" customFields={shadcnCustomFields} />
    </FormProvider>
  );
}
