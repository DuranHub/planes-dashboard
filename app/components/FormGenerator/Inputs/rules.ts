import { JSONSchemaType } from "ajv";
import { InputsKind, Schema } from "../types";
import { FormatName } from 'ajv-formats'

type JSONSchemaTypes = 'number' | "integer" | "string" | "boolean" | "array" | 'object' | 'null'

const inputKindToJSONSchemaType: Record<InputsKind, JSONSchemaTypes> = {
    alphanumeric: "string",
    email: "string",
    alphabetic: "string",
    password: "string",
    select: "string",
    number: "number",
    "user-autocomplete": "string",
    "free-text": "string",
}

/**
* This function takes a schema and returns a JSON schema object
* @param schema - The schema object
* @returns JSON schema object
*/
const inputKindToJSONSchemaFormat: Record<InputsKind, FormatName | undefined> = {
    alphanumeric: undefined,
    alphabetic: undefined,
    email: "email",
    password: "password",
    select: undefined,
    number: undefined,
    "user-autocomplete": undefined,
    "free-text": undefined,
}

export const buildJsonSchema = (schema: Schema) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonSchema: Record<string, any> = {
        type: "object",
        additionalProperties: false,
        properties: {},
        required: [],
    };

    schema.forEach((field) => {
        const { kind } = field;
        const jsonSchemaType = inputKindToJSONSchemaType[kind];
        const jsonSchemaFormat = inputKindToJSONSchemaFormat[kind];

        const baseSchema: Record<string, unknown> = {
            type: jsonSchemaType,
            errorMessage: {},
        }

        if (kind === 'email') {
            baseSchema.format = jsonSchemaFormat;
            baseSchema.errorMessage = {
                format: "Invalid email address",
                required: "Email is required",
            };
        }

        if (kind === 'alphanumeric') {
            baseSchema.minLength = field.minLength ? field.minLength : field.required ? 1 : undefined;
            baseSchema.pattern = "^[a-zA-Z0-9 ]*$";
            baseSchema.errorMessage = {
                minLength: field.minLength ? `Minimum length is ${field.minLength}` : field.required ? "Field is required" : undefined,
                pattern: "Only alphanumeric characters are allowed",
            };
        }

        if (kind === 'alphabetic') {
            baseSchema.minLength = field.minLength ? field.minLength : field.required ? 1 : undefined;
            baseSchema.pattern = "^[a-zA-Z ]*$";
            baseSchema.errorMessage = {
                minLength: field.minLength ? `Minimum length is ${field.minLength}` : field.required ? "Field is required" : '',
                pattern: "Only alphabetic characters are allowed",
            };
        }

        if (kind === 'free-text') {
            baseSchema.minLength = field.minLength ? field.minLength : field.required ? 1 : undefined;
            baseSchema.errorMessage = {
                minLength: field.minLength ? `Minimum length is ${field.minLength}` : field.required ? "Field is required" : '',
            };
        }

        if (kind === 'select') {
            baseSchema.enum = field.options.map((option) => option.value);
            baseSchema.errorMessage = {
                required: "Field is required",
                empty: "Field cannot be empty",
                enum: "Invalid option",
            };
        }
        if (kind === 'number') {
            baseSchema.minimum = field.min;
            baseSchema.maximum = field.max;
            baseSchema.errorMessage = {
                minimum: field.min ? `Minimum value is ${field.min}` : '',
                maximum: field.max ? `Maximum value is ${field.max}` : '',
                required: "Field is required",
                type: "Field must be a number",
            };
        }

        jsonSchema.properties[field.name] = baseSchema;
        if (field.required) {
            jsonSchema.required.push(field.name);
        }
    });

    return jsonSchema as JSONSchemaType<unknown>;
}