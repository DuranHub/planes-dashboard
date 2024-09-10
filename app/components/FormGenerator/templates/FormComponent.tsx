import React from "react";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { JSONSchema7 } from "json-schema";
import {
  FormRootProps,
  useFormContext,
  FormState,
  RenderTemplate,
} from "@react-formgen/json-schema";
import { Form, useSubmit } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

// Single shared Ajv instance with formats
export const AjvInstance = new Ajv({
  allErrors: true,
  verbose: true,
}).addKeyword("uiSchema");
addFormats(AjvInstance);

/**
 * Represents a JSON object.
 */
interface JSONObject {
  [key: string]: JSONValue;
}

/**
 * Represents a JSON array.
 */
interface JSONArray extends Array<JSONValue> {}

/**
 * Represents any valid JSON value.
 */
type JSONValue = string | number | boolean | JSONObject | JSONArray;

/**
 * Recursively removes specified keys from a JSON object. This is useful for removing UI-specific keys before validation, and can be valuable in instances where it's not ideal or possible to override the Ajv instance, where strict schema validation is required (i.e., no custom keywords or formats).
 *
 * @param {string[]} keys - An array of keys to be removed from the JSON object.
 * @param {JSONObject} obj - The JSON object to process.
 * @returns {JSONObject} - The JSON object with the specified keys removed.
 */
function removeKeys(keys: string[], obj: JSONObject): JSONObject {
  const newObj: JSONObject = {};

  for (const key in obj) {
    if (!keys.includes(key)) {
      if (Array.isArray(obj[key])) {
        newObj[key] = (obj[key] as JSONArray).map((item) =>
          typeof item === "object" && item !== null
            ? removeKeys(keys, item as JSONObject)
            : item
        );
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        newObj[key] = removeKeys(keys, obj[key] as JSONObject);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}

/**
 * Form Component Template
 * @param {Function} onSubmit - The function to call when the form is submitted.
 * @param {Function} onError - The function to call when the form has errors.
 * @returns {JSX.Element} - The form component.
 * @example
 * <FormComponent onSubmit={onSubmit} onError={onError} />
 *
 */
export const ShadcnFormComponent: React.FC<FormRootProps> = ({
  onSubmit,
  onError,
}) => {
  const readonly = useFormContext((state: FormState) => state.readonly);
  const schema = useFormContext((state: FormState) => state.schema);
  const formData = useFormContext((state: FormState) => state.formData);
  const setErrors = useFormContext((state: FormState) => state.setErrors);
  const submit = useSubmit();

  if (readonly) {
    return (
      <div className="p-4 flex flex-col gap-4">
        {Object.keys(schema.properties || {}).map((key) => (
          <RenderTemplate
            key={key}
            schema={schema.properties?.[key] as JSONSchema7}
            path={[key]}
          />
        ))}
      </div>
    );
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const cleanSchema: JSONSchema7 = removeKeys(
      ["uiSchema"],
      schema as JSONObject
    );

    const validate = AjvInstance.compile(cleanSchema);
    const valid = validate(formData);
    if (!valid) {
      setErrors(validate.errors ?? null);
      return;
    }

    setErrors(null);
    submit(event.currentTarget as any, {
      method: "post",
      preventScrollReset: true,
    });
  };

  return (
    <Form onSubmit={handleSubmit} method="post">
      {Object.entries(schema.properties || {}).map(([key, property]) => {
        return (
          <div
            key={key}
            className={cn("mb-4", property.uiSchema?.hidden && "hidden")}
          >
            <RenderTemplate
              schema={schema.properties?.[key] as JSONSchema7}
              path={[key]}
            />
          </div>
        );
      })}
      <Button variant={"default"} type="submit">
        Submit
      </Button>
    </Form>
  );
};
