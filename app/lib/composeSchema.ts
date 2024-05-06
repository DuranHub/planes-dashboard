import { Schema } from "~/components/FormGenerator/types";

type PropertyNames<T> = T extends { name: infer U }[] ? U : never;

export class ComposeSchema<T extends Schema> {
    private schema: T;
    constructor(schema: T) {
        this.schema = schema;
    }
    getSchema(): T {
        return this.schema;
    }
    setOptions(field: PropertyNames<T>, options: { label: string; value: string }[]) {
        const schema = this.getSchema();
        const fieldSchema = schema.find((s) => s.name === field);
        if (fieldSchema && fieldSchema.kind === "select") {
            fieldSchema.options = options;
        }

        return this;
    }
    setDefaultValue(field: PropertyNames<T>, value: string) {
        const schema = this.getSchema();
        const fieldSchema = schema.find((s) => s.name === field);
        if (fieldSchema) {
            fieldSchema.defaultValue = value;
        }

        return this;
    }
    setDefaultValues(values: Record<PropertyNames<T>, string>) {
        Object.entries(values).forEach(([key, value]) => {
            this.setDefaultValue(key as PropertyNames<T>, value as string);
        });

        return this;
    }
}