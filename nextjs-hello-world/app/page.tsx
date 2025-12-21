import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "./sanity/client";
import { Tag } from "./data";

const POSTS_QUERY = `*[
  _type == "experience"
  && defined(slug.current)
]{ _id, title, slug, tags[]->{ _id,title,iconName } }`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.tags.map((tag: Tag) => {
                return (
                  <p key={tag._id}>{tag.title}</p>
                )
              })}
              {/* <p>{new Date(post.publishedAt).toLocaleDateString()}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}