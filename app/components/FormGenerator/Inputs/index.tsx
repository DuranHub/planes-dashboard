import {
  FieldProps,
  InputUnion,
  Schema,
  SelectInputDefinition,
} from "../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { MessageCircleQuestion } from "lucide-react";
import TextInput from "./TextInput";
import { SelectInput } from "./Select";
import { FormItem, FormLabel, FormMessage } from "~/components/ui/form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inputMap: Record<InputUnion["kind"], React.FC<any>> = {
  alphanumeric: TextInput,
  email: TextInput,
  alphabetic: TextInput,
  password: TextInput,
  select: SelectInput,
};

const inputPropsByKind: Record<InputUnion["kind"], Record<string, unknown>> = {
  alphanumeric: {
    type: "text",
  },
  email: {
    type: "email",
  },
  alphabetic: {
    type: "text",
  },
  password: {
    type: "password",
  },
  select: {
    type: "select",
  },
};

const LabelBlock = ({ input }: { input: InputUnion }) => {
  return (
    <div className="flex justify-between mb-4 items-center">
      <FormLabel>
        {input.label}
        {input.required && (
          <span className="text-red-500 text-xs ml-0.5">*</span>
        )}
      </FormLabel>
      {input.helpText ? (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <MessageCircleQuestion className="w-4 h-4 text-gray-500" />
            </TooltipTrigger>
            <TooltipContent className="z-50">
              <p>{input.helpText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null}
    </div>
  );
};

const isInputSelect = (input: InputUnion): input is SelectInputDefinition => {
  return input.kind === "select";
};

export const getInputsFromSchema = (schema: Schema) => {
  return schema.map((input) => {
    const InputComponent = inputMap[input.kind] ?? TextInput;
    const inputProps =
      inputPropsByKind[input.kind] ?? inputPropsByKind.alphanumeric;

    const Component = function Field({ field }: FieldProps) {
      return (
        <FormItem>
          <LabelBlock input={input} />
          <InputComponent
            {...inputProps}
            field={field}
            name={input.name}
            defaultValue={input.defaultValue}
            required={input.required}
            id={input.name}
            options={isInputSelect(input) ? input.options : undefined}
          />
          <FormMessage />
        </FormItem>
      );
    };
    return { Component, name: input.name };
  });
};
