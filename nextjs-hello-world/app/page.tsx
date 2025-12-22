import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";
import Home from "./home";

const POSTS_QUERY = `*[
  _type == "experience"
  && defined(slug.current)
]{ _id, title, slug, tags[]->{ _id,title,iconName } }`;

const TAG_QUERY = `*[
  _type == "tag"
]{ _id,title,iconName }`;

export default async function IndexPage() {
  const experiences = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, {});
  const allTags = await client.fetch<SanityDocument[]>(TAG_QUERY, {}, {});
  
  return <Home experiences={experiences} allTags={allTags}/>
}