import { graphql } from "~/graphql/client.server";

const fragmentAsAFragment = graphql(`
    fragment AssignmentAreaFields on AssignmentArea @_unmask {
      id
      name
      machineName
      description
      ParentArea {
        name
      }
    }
  `);

const fragmentRecursive = graphql(
  `
      fragment RecursiveAssignmentAreaFields on AssignmentArea @_unmask {
        ...AssignmentAreaFields
        ChildAreas {
          ...AssignmentAreaFields
          ChildAreas {
            ...AssignmentAreaFields
            ChildAreas {
              ...AssignmentAreaFields
            }
          }
        }
      }
    `,
  [fragmentAsAFragment]
);

export const findAssignmentAreasQuery = graphql(`
      query AssignmentAreas {
        findManyAssignmentArea {
          ...RecursiveAssignmentAreaFields
        }
      }
    `,
  [fragmentRecursive]
);

export const listAssignmentAreasQuery = graphql(`
      query AssignmentAreas {
        findManyAssignmentArea {
          id
          name
          machineName
        }
      }
`);
