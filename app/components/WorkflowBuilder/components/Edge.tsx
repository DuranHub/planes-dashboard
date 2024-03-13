import { Fragment, useState } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getSimpleBezierPath,
} from "reactflow";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { RequirementsCard } from "./ArrowConfiguration/RequirementCard";
import { CollaboratorsCard } from "./ArrowConfiguration/Collaborators/CollaboratorsCard";

function ProcedureCard({ labelX, labelY }: { labelX: number; labelY: number }) {
  return (
    <Card
      style={{
        position: "absolute",
        transform: `translate(20%, 20%) translate(${labelX}px,${labelY}px)`,
        pointerEvents: "all",
      }}
      className="nodrag nopan z-50 h-80 w-72 flex flex-col"
    >
      <CardHeader>
        <CardTitle>Procedimiento</CardTitle>
        <CardDescription>
          Procedimiento a seguir para completar la tarea
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full">Configurar</Button>
      </CardFooter>
    </Card>
  );
}

function StadisticsCard({
  labelX,
  labelY,
}: {
  labelX: number;
  labelY: number;
}) {
  return (
    <Card
      style={{
        position: "absolute",
        transform: `translate(20%, -120%) translate(${labelX}px,${labelY}px)`,
        pointerEvents: "all",
      }}
      className="nodrag nopan z-50 h-80 w-72 flex flex-col"
    >
      <CardHeader>
        <CardTitle>Indicadores</CardTitle>
        <CardDescription>Indicadores de desempeño de la tarea</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full">Configurar</Button>
      </CardFooter>
    </Card>
  );
}

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: EdgeProps) {
  const [showCards, setShowCards] = useState(false);

  const [edgePath, labelX, labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        {showCards ? (
          <Button
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
            className="nodrag nopan border"
            onClick={() => {
              setShowCards((prev) => !prev);
            }}
          >
            Hide
          </Button>
        ) : (
          <Button
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
            className="nodrag nopan border"
            onClick={() => {
              setShowCards((prev) => !prev);
            }}
          >
            Show
          </Button>
        )}

        {showCards && (
          <Fragment>
            <CollaboratorsCard labelX={labelX} labelY={labelY} />
            <ProcedureCard labelX={labelX} labelY={labelY} />
            <RequirementsCard labelX={labelX} labelY={labelY} />
            <StadisticsCard labelX={labelX} labelY={labelY} />
          </Fragment>
        )}
      </EdgeLabelRenderer>
    </>
  );
}

export const edgeTypes = {
  custom: CustomEdge,
};
