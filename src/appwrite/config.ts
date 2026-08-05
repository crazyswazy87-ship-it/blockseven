import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);

export const DATABASE_ID =
  import.meta.env.VITE_APPWRITE_DATABASE_ID;

export const INQUIRIES_COLLECTION_ID =
  import.meta.env.VITE_APPWRITE_INQUIRIES_COLLECTION_ID;

export { ID };