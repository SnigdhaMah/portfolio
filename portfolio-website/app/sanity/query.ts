
export const POSTS_QUERY = `*[
  _type == "experience"
  && defined(slug.current)
]{ _id, title, slug, repoUrl, startTime, endTime, tags[]->{ _id,title,iconName }} | order(startTime desc, endTime desc)`;

export const TAG_QUERY = `*[
  _type == "tag"
]{ _id,title,iconName }`;

export const EXPERIENCE_QUERY = `*[_type == "experience" && slug.current == $slug][0]{..., tags[]->{_id,title,iconName} }`;
