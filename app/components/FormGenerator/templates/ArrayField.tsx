import React from "react";
import { JSONSchema7 } from "json-schema";
import {
  BaseArraySchema,
  useFormContext,
  useArrayTemplate,
  FormState,
  generateInitialData,
  RenderTemplate,
} from "@react-formgen/json-schema";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { X, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Array Field Component Template
 * @param {BaseArraySchema} schema - The schema for the array field.
 * @param {string[]} path - The path to the array field in the form data.
 * @param {SchemaDefinitions} definitions - The definitions object from the schema.
 * @param {CustomFields} customFields - The custom fields object.
 * @returns {JSX.Element} - The array field component.
 * @example
 * <ShadcnArrayField schema={schema} path={path} definitions={definitions} customFields={customFields} />
 */
export const ShadcnArrayField: React.FC<{
  schema: BaseArraySchema;
  path: string[];
}> = ({ schema, path }) => {
  const readonly = useFormContext((state: FormState) => state.readonly);
  const definitions = useFormContext(
    (state: FormState) => state.schema.definitions || {}
  );

  const { valueAtPath, errorsAtPath, moveItem, removeItem, addItem } =
    useArrayTemplate(path, () =>
      generateInitialData(schema.items as JSONSchema7, definitions)
    );

  return (
    <div className="border-dashed rounded-xl border-2 border-gray-400 dark:border-gray-600 p-4 my-4 flex flex-col space-y-2">
      {schema.title && <Label>{schema.title}</Label>}
      {schema.description && (
        <small className="text-gray-500 dark:text-gray-400">
          {schema.description}
        </small>
      )}
      <br />
      {schema.items &&
        Array.isArray(valueAtPath) &&
        valueAtPath.map((_, index: number) => (
          <div className="relative p-4 my-2" key={index}>
            <Button
              variant={"destructive"}
              className="absolute top-4 right-0 rounded-none size-10 flex items-center justify-center"
              onClick={() => removeItem(index)}
            >
              <X />
            </Button>
            <Button
              // variant={"destructive"}
              className="absolute top-4 right-10 rounded-none size-10 flex items-center justify-center"
              onClick={() => moveItem(index, "up")}
              disabled={index === 0}
            >
              <ChevronUp />
            </Button>
            <Button
              // variant={"destructive"}
              className="absolute top-4 right-20 rounded-none size-10 flex items-center justify-center"
              onClick={() => moveItem(index, "down")}
              disabled={index === valueAtPath.length - 1}
            >
              <ChevronDown />
            </Button>
            <RenderTemplate
              schema={schema.items as JSONSchema7}
              path={[...path, index.toString()]}
            />
          </div>
        ))}
      <Button type="button" onClick={addItem}>
        Add Item
      </Button>
      {errorsAtPath &&
        errorsAtPath.map((error, index) => (
          <p key={index} className="text-sm font-medium text-destructive">
            {error.message}
          </p>
        ))}
    </div>
  );
};
