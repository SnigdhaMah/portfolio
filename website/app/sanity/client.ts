import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'kwh5qxt2',
  dataset: 'experience',
  apiVersion: "2024-01-01",
  useCdn: false,
});