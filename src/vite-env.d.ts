/// <reference types="vite/client" />

// Augment Vite's ImportMetaEnv to include your environment variables
interface ImportMetaEnv {
  readonly VITE_FUNCTIONS_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
