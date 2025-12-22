import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import { Tag } from "../data";
import * as IconLib from "@deemlol/next-icons";
import "../page.css";

const POST_QUERY = `*[_type == "experience" && slug.current == $slug][0]{..., tags[]->{_id,title,iconName} }`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const exp = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

  return (
  <div className="experience-page">
        <div className="experience-container">
          {/* Header */}
          <div
            className="header"
            style={{ textAlign: "center", marginBottom: 20 }}
          >
            <h1 className="exp-title">{exp.title}</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                maxWidth: "90%",
              }}
            >
              <p className="exp-subtitle" style={{marginRight:20}}>{exp.time}</p>
              {exp.repoUrl && <a className="github-button" href={exp.repoUrl}>
                <IconLib.Github size={24} color="black" />
              </a>}
            </div>
          </div>
  
          {/* Tags */}
          <div className="tags-cont">
            {exp.tags.map((tag: Tag) => {
              const iconName = tag.iconName;
              const IconComponent = IconLib[iconName];
              return (
                <div key={tag._id} className="exp-tag">
                  <IconComponent size={20} style={{ marginRight: 8 }} />
                  <span>{tag.title}</span>
                </div>
              );
            })}
          </div>
  
          {/* Context Section */}
          <div className="exp-section">
            <h2 className="exp-section-title">Context</h2>
            <div className="exp-section-body">
          {Array.isArray(exp.context) ? <PortableText value={exp.context} /> : "Details in progress!"}
            </div>
          </div>
  
          {/* My Project Section */}
          <div className="exp-section">
            <h2 className="exp-section-title">My Project</h2>
            <div className="exp-section-body">
              {Array.isArray(exp.project) ? <PortableText value={exp.project} /> : "Details in progress!"}
            </div>
          </div>
  
          {/* Challenges Section */}
          <div className="exp-section">
            <h2 className="exp-section-title">Challenges</h2>
            <div className="exp-section-body">
              {Array.isArray(exp.challenges) ? <PortableText value={exp.challenges} /> : "Details in progress!"}
            </div>
          </div>
  
          {/* Final Product Section */}
          <div className="exp-section">
            <h2 className="exp-section-title">TLDR</h2>
            <div className="exp-section-body">
              {Array.isArray(exp.tldr) ? <PortableText value={exp.tldr} /> : "Details in progress!"}
            </div>
          </div>
        </div>
      </div>
      );
}