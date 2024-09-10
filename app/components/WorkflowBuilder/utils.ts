export function getInitialDataForNewNode(type: AllowedType) {
  if (type === "input") {
    return { label: `${type} node` };
  }

  if (type === "decision") {
    return { label: `${type} node` };
  }
}

export function isAllowedType(type: any): type is AllowedType {
  return ["input", "decision"].includes(type);
}
