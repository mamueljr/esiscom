/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Llave pública de Web3Forms. Si falta, el formulario envía por WhatsApp. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
