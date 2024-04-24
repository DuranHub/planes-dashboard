import type { FetcherFormProps } from "react-router-dom";
import type { FieldErrors, FieldValues } from "react-hook-form";

type InputsKind = "alphanumeric" | "email" | "alphabetic" | "password";

type InputDefinition = {
    kind: InputsKind;
    name: string;
    label: string;
    defaultValue?: string;
    required?: boolean;
    helpText?: string;
};

type TextInputDefinition = InputDefinition & {
    kind: "alphanumeric" | "alphabetic" | "password";
    minLength?: number;
};

type EmailInputDefinition = InputDefinition & {
    kind: "email";
};

type InputUnion = TextInputDefinition | EmailInputDefinition;
type Schema = InputUnion[];

interface FormGeneratorArgs {
    schema: Schema;
    formConfig?: {
        method?: FetcherFormProps["method"];
        saveButtonText?: string;
    };
}

interface FieldProps {
    errors: FieldErrors<FieldValues>
}

interface FormGeneratedProps {
    actions?: JSX.Element;
}