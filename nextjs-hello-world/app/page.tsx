import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";
import Home from "./home";
import { POSTS_QUERY, TAG_QUERY } from "./sanity/query";

export default async function IndexPage() {
  const experiences = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, {});
  const allTags = await client.fetch<SanityDocument[]>(TAG_QUERY, {}, {});
  
  return <Home experiences={experiences} allTags={allTags}/>
}