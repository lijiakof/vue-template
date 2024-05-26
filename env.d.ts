/// <reference types="vite/client" />

interface InportMetaEnv {
  readonly VITE_URL_API: string;
  readonly VITE_URL_STATIC: string;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component : DefineComponent<{}, {}, any>;
  export default component;
}