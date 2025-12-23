import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ciui9csp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});