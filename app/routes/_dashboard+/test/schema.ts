import { JSONSchema7 } from "json-schema";

export const schema = {
  type: "object",
  properties: {
    ParagraphCard: {
      type: "object",
      title: "Paragraph Card",
      properties: {
        ID: {
          type: "object",
          properties: {
            fields: {
              $ref: "#/definitions/String",
            },
          },
          title: "ID",
        },
        Nombre: { $ref: "#/definitions/Link" },
      },
    },
  },
  definitions: {
    String: {
      type: "object",
      title: "String",
      properties: {
        maxLength: {
          type: "number",
          title: "Max Length",
        },
        minLength: {
          type: "number",
          title: "Min Length",
        },
        title: {
          type: "string",
          minLength: 1,
          maxLength: 255,
          title: "Field Title",
        },
        description: {
          type: "string",
          minLength: 1,
          maxLength: 255,
          title: "Field Description",
        },
      },
    },
    Link: {
      type: "object",
      title: "Link",
      properties: {
        href: {
          title: "HREF",
          $ref: "#/definitions/String",
        },
        text: {
          title: "Text",
          $ref: "#/definitions/String",
        },
      },
    },
  },
} satisfies JSONSchema7;
