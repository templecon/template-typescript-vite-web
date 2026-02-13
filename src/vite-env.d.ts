/// <reference types="vite/client" />
// Don't use import or export statements in this file, as it is treated as a module
// and can cause issues with Vite's type detection.

// biome-ignore lint/correctness/noUnusedVariables: Used by Vite
interface ViteTypeOptions {
    strictImportEnv: unknown;
}

// biome-ignore lint/suspicious/noEmptyInterface: Empty interface, since empty envs
interface ImportMetaEnv {
    /**
     * VITE_SOMETHING_COOL_ENV will be available in your code as
     * import.meta.env.VITE_SOMETHING_COOL_ENV
     */
    //readonly VITE_SOMETHING_COOL_ENV: string;
}

// biome-ignore lint/correctness/noUnusedVariables: Used by Vite
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
