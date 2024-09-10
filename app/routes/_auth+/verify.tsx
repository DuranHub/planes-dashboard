import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth/auth.server";
import { getSession, commitSession } from "~/services/auth/auth-session.server";
import { Button } from "~/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { Label } from "@radix-ui/react-label";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/profile",
  });

  const session = await getSession(request.headers.get("cookie"));
  const authEmail = session.get("auth:email");
  const authError = session.get(authenticator.sessionErrorKey);
  if (!authEmail) return redirect("/login");

  return json(
    { authError },
    {
      headers: {
        "set-cookie": await commitSession(session),
      },
    }
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  const currentPath = url.pathname;

  await authenticator.authenticate("TOTP", request, {
    successRedirect: currentPath,
    failureRedirect: currentPath,
  });
}

export default function Verify() {
  const { authError } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-4">
      <Form method="POST" className="flex flex-col gap-4">
        <Label htmlFor="code">Code</Label>
        <InputOTP type="text" maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} id="code" name="code">
          <InputOTPGroup id="code">
            <InputOTPSlot  index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button type="submit">Continue</Button>
      </Form>

      <Form method="POST">
        <Button variant="secondary" type="submit">
          Request new Code
        </Button>
      </Form>

      <span>{authError?.message}</span>
    </div>
  );
}
