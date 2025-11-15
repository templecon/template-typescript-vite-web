/// <reference types="vite/client" />

// biome-ignore lint/correctness/noUnusedVariables: Used by Vite
interface ViteTypeOptions {
    strictImportEnv: unknown;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // 다른 환경 변수들에 대한 타입 정의...
}

// biome-ignore lint/correctness/noUnusedVariables: Used by Vite
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
