"use client";

import "../page.css";
import * as IconLib from "@deemlol/next-icons";
import { getExperienceById } from "../data";
import { useSearchParams } from "next/navigation";

export default function ExperiencePage( ) {
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
      <h1>{exp.title}</h1>
      <p className="experience-time">{exp.time}</p>
      <div className="experience-tags">
        {exp.tags.map((tag, idx) => {
          const iconName = tag.iconName;
          const IconComponent = IconLib[iconName];
          return (
            <div key={idx} className="experience-tag">
              <IconComponent size={16} style={{ marginRight: 4 }} />
              {tag.name}
            </div>
          );
        })}
      </div>
      {exp.repoUrl && (
        <a
          href={exp.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-repo-link"
        >
          View Repository
        </a>
      )}
    </div>
  );
}
