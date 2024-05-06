import type { FetcherFormProps } from "react-router-dom";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";

type InputsKind = "alphanumeric" | "email" | "alphabetic" | "password" | "select";

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

type SelectInputDefinition = InputDefinition & {
    kind: "select";
    options: { value: string; label: string }[];
};

type InputUnion = TextInputDefinition | EmailInputDefinition | SelectInputDefinition;
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