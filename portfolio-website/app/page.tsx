import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";
import Home from "./home";
import { ALL_EXP_QUERY, FILE_QUERY, TAG_QUERY } from "./sanity/query";

export default async function IndexPage() {
  // Query Sanity in asynchronous server component
  const experiences = await client.fetch<SanityDocument[]>(ALL_EXP_QUERY, {}, {});
  const allTags = await client.fetch<SanityDocument[]>(TAG_QUERY, {}, {});
  const resume = await client.fetch(FILE_QUERY, { tagVal: "Resume" }, {});
  const transcript = await client.fetch(FILE_QUERY, { tagVal: "Transcript" }, {});
  
  // then pass the info into the client component to have access to useStates
  return <Home experiences={experiences} allTags={allTags} resume={resume.url as string} transcript={transcript.url as string}/>
}