/**
 * Creates an `attemptExport` function.
 *
 * @param exportsObj - An exports object (currently unused, but accepted for API compatibility).
 * @returns A function that safely executes another function and returns its result.
 */
declare function factory(exportsObj: unknown): typeof attemptExport

/**
 * Safely executes a function.
 *
 * If the provided function throws an error, this returns `undefined`.
 * Otherwise, it returns the function’s return value.
 *
 * @typeParam T - The return type of the function being executed.
 * @param x - A function to execute.
 * @returns The function’s return value, or `undefined` if it throws.
 *
 * @throws If `x` is not a function.
 */
declare function attemptExport<T>(x: () => T): T | undefined

export = factory
