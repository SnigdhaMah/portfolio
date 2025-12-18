"use client";

import "../page.css";
import * as IconLib from "@deemlol/next-icons";
import { getExperienceById } from "../data";
import { useSearchParams } from "next/navigation";

export default function ExperiencePage() {
  const searchParams = useSearchParams();
  const expId = Number(searchParams.get("expId"));
  const exp = Number.isNaN(Number(expId))
    ? null
    : getExperienceById(Number(expId));

  if (!exp) {
    return <div>Experience not found</div>;
  }

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
          {exp.tags.map((tag, idx) => {
            const iconName = tag.iconName;
            const IconComponent = IconLib[iconName];
            return (
              <div key={idx} className="exp-tag">
                <IconComponent size={20} style={{ marginRight: 8 }} />
                <span>{tag.name}</span>
              </div>
            );
          })}
        </div>

        {/* Context Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">Context</h2>
          <p className="exp-section-body">
            {exp.context || "Details in progress!"}
          </p>
        </div>

        {/* My Project Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">My Project</h2>
          <p className="exp-section-body">
            {exp.project || "Details in progress!"}
          </p>
        </div>

        {/* Challenges Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">Challenges</h2>
          <p className="exp-section-body">
            {exp.challenges || "Details in progress!"}
          </p>
        </div>

        {/* Final Product Section */}
        <div className="exp-section">
          <h2 className="exp-section-title">TLDR</h2>
          <p className="exp-section-body">
            {exp.tldr || "Details in progress!"}
          </p>
        </div>
      </div>
    </div>
  );
}
