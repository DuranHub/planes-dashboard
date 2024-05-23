/**
 * @description This function generates a machine name from a name,
 * so that it can be used as part of a URL and as a unique identifier.
 * @param name The name to generate the machine name from.
 * @returns The machine name.
 * @example
 * const name = "My Assignment Area";
 * const machineName = formatMachineName(name);
 * console.log(machineName); // my-assignment-area
 * 
 * or with special characters:
 * @example
 * const name = "My Assignment Area! 12/2021";
 * const machineName = formatMachineName(name);
 * console.log(machineName); // my-assignment-area-12-2021
 */

export function formatMachineName(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/--+/g, "-")
        .replace(/^-|-$/g, "");
}