import type { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigate, useParams } from "@remix-run/react";
import { ClientOnly } from "remix-utils/client-only";
import Modal from "~/components/ui/modal";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export default function ConfigureProcedure() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <ClientOnly fallback={<div />}>
      {() => (
        <Modal
          showTrigger={false}
          triggerLabel="Create Assignment Area"
          title="Create a new assignment area"
          description="Fill in the form below to create a new assignment area."
          openByDefault
          controls={{
            open: true,
            onOpenChange: (open) => {
              if (!open) {
                navigate(`/${params.projectMachineName}/workflow`);
              }
            },
          }}
        >
          {({ closeModal }) => (
            <div>
              Here goes the react flow component to build the workflow for the
              procedure
            </div>
          )}
        </Modal>
      )}
    </ClientOnly>
  );
}
