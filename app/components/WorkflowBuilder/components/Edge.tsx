import {
  BaseEdge,
  Edge,
  EdgeLabelRenderer,
  EdgeProps,
  getSimpleBezierPath,
} from "@xyflow/react";
import { EditArrow } from "./EditArrow";

export type DataType = {
  label: string;
  id: string;
  requirements: {
    label: string;
    machineName: string;
    value: boolean;
  }[];
  collaborators: {
    name: string;
    avatar: string;
  }[];
  indicators: any[];
  procedure: any[];
};

export function Arrow({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  data,
}: EdgeProps<Edge<DataType>>) {
  const [edgePath, labelX, labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  if (!data) return null;

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <EditArrow arrowId={id} data={data} labelX={labelX} labelY={labelY} />
      </EdgeLabelRenderer>
    </>
  );
}
