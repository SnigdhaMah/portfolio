import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import Link from "next/link";
import { Tag } from "../data";

const POST_QUERY = `*[_type == "experience" && slug.current == $slug][0]{..., tags[]->{_id,title,iconName} }`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  console.log(post);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>{post.time}</p>
        {post.repoUrl && <Link href={post.repoUrl}>Link to repo</Link>}
        {post.tags.map((tag: Tag) => {
                        return (
                          <p key={tag._id}>{tag.title}</p>
                        )
                      })}
        {Array.isArray(post.context) && <PortableText value={post.context} />}
        {Array.isArray(post.project) && <PortableText value={post.project} />}
        {Array.isArray(post.challenges) && <PortableText value={post.challenges} />}
        {Array.isArray(post.tldr) && <PortableText value={post.tldr} />}
      </div>
    </main>
  );
}