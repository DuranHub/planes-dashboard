import type { FetcherFormProps } from "react-router-dom";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

type InputsKind = "alphanumeric" | "email" | "alphabetic" | "password" | "select" | "number" | "user-autocomplete" | "free-text";

type InputDefinition = {
    kind: InputsKind;
    name: string;
    label: string;
    defaultValue?: string;
    required?: boolean;
    helpText?: string;
    hidden?: boolean;
};

type TextInputDefinition = InputDefinition & {
    kind: "alphanumeric" | "alphabetic" | "password" | "free-text";
    minLength?: number;
};

type EmailInputDefinition = InputDefinition & {
    kind: "email";
};

type SelectInputDefinition = InputDefinition & {
    kind: "select" | "user-autocomplete";
    options: { value: string; label: string }[];
};

type NumericInputDefinition = InputDefinition & {
    kind: "number";
    min?: number;
    max?: number;
};

type InputUnion = TextInputDefinition | EmailInputDefinition | SelectInputDefinition | NumericInputDefinition;
type Schema = InputUnion[];

interface FormGeneratorArgs {
    schema: Schema;
    formConfig?: {
        method?: FetcherFormProps["method"];
        saveButtonText?: string;
    };
}

interface FieldProps {
    field: ControllerRenderProps<FieldValues, string>
}

interface FormGeneratedProps {
    actions?: JSX.Element;
    onSubmitCallback?: () => void;
    fetcher: FetcherWithComponents;
}