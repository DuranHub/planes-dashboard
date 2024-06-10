import { graphqlClient, graphql } from "~/graphql/client.server";

export async function saveWorkflow(workflow: string, projectMachineName: string) {
    const saveWorkflowMutation = graphql(`
    mutation SaveWorkflow($workflow: Json!, $projectMachineName: String) {
        updateOneProject(data: {
            workflow: $workflow
        }
        format: ReactFlow
        where: {
            machineName: $projectMachineName
        }) {
            id
            workflow
        }
    }
`)

    const { data, error } = await graphqlClient.mutation(saveWorkflowMutation, {
        workflow: JSON.parse(workflow),
        projectMachineName
    })

    if (error || !data) {
        throw new Error("Failed to save workflow")
    }

    return data.updateOneProject
}

interface CreateRequirementInput {
    requirementName: string
    edgeId: string
    machineName: string
}

export async function createRequirement({ requirementName, edgeId, machineName }: CreateRequirementInput) {
    console.log("createRequirement", requirementName, edgeId, machineName)
    const createRequirementMutation = graphql(`
    mutation CreateRequirement($requirementName: String! $edgeId: String! $machineName: String!) {
        createOneRequirement(data: {
            label: $requirementName
            ArrowData: {
                connect: {
                    id: $edgeId
                }
            }
            machineName: $machineName
            value: false
        }) {
            id
            label
        }
    }
`)

    const { data, error } = await graphqlClient.mutation(createRequirementMutation, {
        requirementName,
        edgeId,
        machineName
    })

    if (error || !data) {
        throw new Error("Failed to create requirement")
    }

    return data.createOneRequirement
}