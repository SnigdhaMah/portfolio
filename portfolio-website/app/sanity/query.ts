// Sanity Queries

/**
 * Query to get all experiences from Sanity, sorted by most recent -> old
 */
export const ALL_EXP_QUERY = `*[
  _type == "experience"
  && defined(slug.current)
]{ _id, title, slug, repoUrl, startTime, endTime, tags[]->{ _id,title,iconName }} | order(startTime desc, endTime desc)`;

/**
 * Query for all tags across all experiences
 */
export const TAG_QUERY = `*[
  _type == "tag"
]{ _id,title,iconName } | order(title)`;

/**
 * Query a specific experience based on slug (dereference the tags object as well)
 */
export const EXPERIENCE_QUERY = `*[_type == "experience" && slug.current == $slug][0]{..., tags[]->{_id,title,iconName} }`;

/**
 * Query the most recent file corresponding to the tag
 */
export const FILE_QUERY = `*[
 _type == "portfolioFile" && tag == $tagVal
]| order(publishedAt desc)[0]{ "url": file.asset->url }`;