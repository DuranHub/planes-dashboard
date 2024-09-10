import type { ActionFunctionArgs } from "@remix-run/node";
import { FormProvider, JSONSchema7 } from "@react-formgen/json-schema";
import { schema as formSchema } from "./schema";
import { FormGenerator } from "~/components/FormGenerator";
import {
  Link,
  useActionData,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { GeneralErrorBoundary } from "~/components/ErrorBoundary";
import { validateFormJsonSchema } from "~/components/FormGenerator/lib/validateFormAjv.server";

export const loader = async () => {
  if (process.env.NODE_ENV !== "development") {
    throw new Response("Not found", { status: 404 });
  }

  return {
    schema: formSchema as unknown as JSONSchema7,
    initialData: {},
  };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  const result = validateFormJsonSchema(formData, formSchema as any);
  return result;
};

export default function Test() {
  const { initialData, schema } = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();
  return (
    <FormProvider schema={schema} initialData={initialData}>
      <FormGenerator schema={schema} />
      {data && (
        <pre className="whitespace-pre-wrap break-all text-body-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </FormProvider>
  );
}

export function ErrorBoundary() {
  const location = useLocation();
  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: () => (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1>We cant find this page:</h1>
              <pre className="whitespace-pre-wrap break-all text-body-lg">
                {location.pathname}
              </pre>
            </div>
            <Link to="/" className="text-body-md underline">
              Back to home
            </Link>
          </div>
        ),
      }}
    />
  );
}
