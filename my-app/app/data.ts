"use client";

import * as IconLib from "@deemlol/next-icons";

export type Tag = {
  name: string;
  iconName: keyof typeof IconLib;
}

export type Experience = {
  id: number;
  title: string;
  time: string;
  tags: Tag[];
  repoUrl?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "SWE Intern @ ServiceNow",
    time: "Jun - Sept 2025",
    tags: [
      { name: "Full-Stack", iconName: "Tv" },
      { name: "Internship", iconName: "Briefcase" },
      { name: "Security", iconName: "Unlock" },
    ],
  },
  {
    id: 2,
    title: "Deep Learning",
    time: "Jun - Sept 2025",
    tags: [
      { name: "Education", iconName: "Book" },
      { name: "AI", iconName: "Bot" },
    ],
  },
];

export const allTags: Tag[] = experiences.flatMap((exp) => exp.tags);
allTags.unshift({ name: "Top Exp", iconName: "Award" });