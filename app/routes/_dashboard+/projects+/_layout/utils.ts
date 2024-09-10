import { type TreeData } from "~/components/ui/tree";

// This function will recursively build the tree of levels
// adding the child levels even if they aren't direct children that came from the graphql query
// and add the projects to the level where the project belongs
export function recursiveTree(rootLevels: any, levels: any, projects: any): TreeData {
    return rootLevels.map((level) => {
        if (!level.ChildLevels) {
            return {
                id: level.machineName,
                name: level.name,
            };
        }

        const childLevels = levels.filter(
            (l) => l.ParentLevel?.machineName === level.machineName
        );

        const childProjects = projects.filter(
            (project) => project.level.machineName === level.machineName
        );

        return {
            id: level.machineName,
            name: level.name,
            children: recursiveTree([...childLevels, ...childProjects], levels, projects),
        };
    });
}