declare function factory(module: unknown): typeof attemptExport

declare function attemptExport<T>(x: () => T): T | undefined

export = factory
