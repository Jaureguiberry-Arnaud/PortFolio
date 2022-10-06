

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        DB_CONNECTION: string;
        DB_HOST: string;
        DB_PORT: string;
        DB_DATABASE: string;
        DB_USERNAME: string;
        DB_PASSWORD: string;
        ADMIN_PASSWORD: string;
    }
  }
}