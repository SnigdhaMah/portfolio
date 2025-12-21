// sanity/sanity.query.ts

import { groq } from "next-sanity";
import { client } from "./sanity.client";

export async function getExperiences() {
  const res = await client.fetch(
    groq`*[_type == "experience"]{
      _id,
      title,
      time,
      repoUrl,
       tags[]->{
        _id,
        title,
        iconName
      },
      context,
      project,
      challenges,
      tldr
    }`
  );
  console.log(res)
  return res
}

export async function getTags() {
  return client.fetch(
    groq`*[_type == "tag"]{
      _id,
      title,
      iconName
    }`
  )
};

export async function getExperiencesByTag(name: string) {
  return client.fetch(
    groq`*[_type == "experience" && references(*[_type=="tag" && title==${name}]._id)]{
      _id,
      title,
      time,
      repoUrl,
       tags[]->{
        _id,
        title,
        iconName
      },
      context,
      project,
      challenges,
      tldr
    }`
  )
};
