import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import { EXPERIENCE_QUERY } from "../sanity/query";
import { Tag } from "../types";
import * as IconLib from "@deemlol/next-icons";
import "../page.css";

import Image from "next/image";
import Stars from "../../assets/stars.png";
import RightSwirl from "../../assets/right-swirl.png";

export default async function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  // get the expereience from the url param slug
  const exp = await client.fetch<SanityDocument>(
    EXPERIENCE_QUERY,
    await params,
    { cache: "force-cache", next: { revalidate: 3600 } }
  );

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
            <p className="exp-subtitle" style={{ marginRight: 20 }}>
              {exp.time}
            </p>
            {exp.repoUrl && (
              <a className="github-button" href={exp.repoUrl}>
                <IconLib.Github size={24} color="black" />
              </a>
            )}
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
        <Image
          src={Stars}
          alt={"stars"}
          height={500}
          style={{
            top: "-15%",
            left: "-15%",
            zIndex: 10,
            position: "absolute",
          }}
        />

        {/* Context Section */}
        {Array.isArray(exp.context) && (
          <div className="exp-section">
            <h2 className="exp-section-title">Context</h2>
            <div className="exp-section-body">
              <PortableText value={exp.context} />
            </div>
          </div>
        )}

        {/* My Project Section */}
        {Array.isArray(exp.project) && (
          <div className="exp-section">
            <h2 className="exp-section-title">My Project</h2>
            <div className="exp-section-body">
              <PortableText value={exp.project} />
            </div>
          </div>
        )}

        {/* Challenges Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">Challenges</h2>
          <div className="exp-section-body">
            {Array.isArray(exp.challenges) ? (
              <PortableText value={exp.challenges} />
            ) : (
              "Details in progress!"
            )}
          </div>
        </div>

        {/* Final Product Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">TLDR</h2>
          <div className="exp-section-body">
            {Array.isArray(exp.tldr) ? (
              <PortableText value={exp.tldr} />
            ) : (
              "Details in progress!"
            )}
          </div>
        </div>
      </div>
      <Image
        src={RightSwirl}
        alt={"color block swirl"}
        height={800}
        style={{ bottom: "-35%", right: 0, zIndex: 10, position: "absolute" }}
      />
    </div>
  );
}
