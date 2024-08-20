import Ajv, { ErrorObject } from "ajv";
import { fullFormats } from "ajv-formats/dist/formats";
import avjErrors from "ajv-errors";
import { JSONSchema7 } from "json-schema";

type JsonDataFromSchema<SchemaType extends JSONSchema7> = {
  [K in keyof SchemaType["properties"]]: SchemaType["properties"][K]["type"] extends "array"
    ? Array<any>
    : any;
};

type ValidateFormJsonSchemaResult<SchemaType extends JSONSchema7> = {
  success: boolean;
  data: JsonDataFromSchema<SchemaType>;
  errors: Array<{ path: string; message: string }> | undefined;
};

const getAvj = () => {
  const ajv = new Ajv({
    formats: fullFormats,
    allErrors: true,
    coerceTypes: true,
  });
  avjErrors(ajv);
  return ajv;
};

const formatErrors = (errors: ErrorObject[] | null | undefined) => {
  if (!errors) {
    return undefined;
  }

  return errors.map((error) => {
    return {
      path:
        error.instancePath.at(0) === "/"
          ? error.instancePath.slice(1)
          : error.instancePath,
      message: error.message ?? "Error",
    };
  });
};

export const validateFormJsonSchema = <
  SchemaType extends JSONSchema7 = JSONSchema7
>(
  formData: FormData,
  schema: SchemaType
): ValidateFormJsonSchemaResult<SchemaType> => {
  const jsonFormData = Object.fromEntries(formData);
  const ajvInstance = getAvj();
  const validator = ajvInstance.compile(schema);
  const validation = validator(jsonFormData);
  return {
    success: validation,
    data: jsonFormData as any,
    errors: formatErrors(validator.errors),
  };
};
