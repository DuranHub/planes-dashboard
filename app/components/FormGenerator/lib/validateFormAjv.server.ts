import Ajv, { ErrorObject } from "ajv";
import { buildJsonSchema } from "~/components/FormGenerator/Inputs/rules";
import { fullFormats } from "ajv-formats/dist/formats";
import avjErrors from "ajv-errors";
import { Schema } from "~/components/FormGenerator/types";

type JsonDataFromSchema<SchemaType extends Schema> = {
    [K in SchemaType[number]['name']]: string;
}

type ValidateFormJsonSchemaResult<SchemaType extends Schema> = {
    success: boolean;
    data: JsonDataFromSchema<SchemaType>;
    errors: Array<{ path: string, message: string }> | undefined;
}

const getAvj = () => {
    const ajv = new Ajv({ formats: fullFormats, allErrors: true, coerceTypes: true });
    avjErrors(ajv);
    return ajv;
}

const formatErrors = (errors: ErrorObject[] | null | undefined) => {
    if (!errors) {
        return undefined;
    }

    return errors.map((error) => {
        return {
            path: error.instancePath.at(0) === "/" ? error.instancePath.slice(1) : error.instancePath,
            message: error.message ?? "Error"
        }
    });
}

export const validateFormJsonSchema = <SchemaType extends Schema = Schema>
    (formData: FormData, schema: SchemaType): ValidateFormJsonSchemaResult<SchemaType> => {
    const jsonFormData = Object.fromEntries(formData);
    const ajvInstance = getAvj();
    const avjSchema = buildJsonSchema(schema);
    const validator = ajvInstance.compile(avjSchema);
    const validation = validator(jsonFormData);
    return {
        success: validation,
        data: jsonFormData as JsonDataFromSchema<SchemaType>,
        errors: formatErrors(validator.errors),
    }
}