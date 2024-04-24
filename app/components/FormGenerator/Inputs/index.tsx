import { FieldProps, InputUnion, Schema } from "../types";
import { Label } from "@radix-ui/react-label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { MessageCircleQuestion } from "lucide-react";
import TextInput from "./TextInput";

const inputMap: Record<InputUnion["kind"], typeof TextInput> = {
  alphanumeric: TextInput,
  email: TextInput,
  alphabetic: TextInput,
  password: TextInput,
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
};

const LabelBlock = ({ input }: { input: InputUnion }) => {
  return (
    <div className="flex justify-between mb-4 items-center">
      <Label htmlFor={input.name}>
        {input.label}
        {input.required && (
          <span className="text-red-500 text-xs ml-0.5">*</span>
        )}
      </Label>
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

export const getInputsFromSchema = (schema: Schema) => {
  return schema.map((input) => {
    console.log(input);
    const InputComponent = inputMap[input.kind] ?? TextInput;
    const inputProps =
      inputPropsByKind[input.kind] ?? inputPropsByKind.alphanumeric;
      console.log(inputProps);

    const Component = function Field({ errors }: FieldProps) {
      return (
        <div>
          <LabelBlock input={input} />
          <InputComponent
            {...inputProps}
            name={input.name}
            defaultValue={input.defaultValue}
            required={input.required}
            id={input.name}
          />
          {errors[input.name] ? (
            <p className="text-red-500 text-xs mt-1">
              {errors[input.name] && errors[input.name]?.message?.toString()}
            </p>
          ) : (
            <div className="h-5" />
          )}
        </div>
      );
    };
    return { Component, name: input.name };
  });
};
