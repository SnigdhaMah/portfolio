"use client";

// import * as IconLib from "@deemlol/next-icons";
import { PortableTextBlock } from "next-sanity";

export type Tag = {
  _id: number;
  title: string;
  iconName: string//keyof typeof IconLib;
};

export type Experience = {
  _id: number;
  title: string;
  time: string;
  tags: Tag[];
  repoUrl?: string;
  context?: PortableTextBlock;
  project: PortableTextBlock;
  challenges: PortableTextBlock;
  tldr: PortableTextBlock;
};

// export const experiences: Experience[] = [
//   {
//     id: 1,
//     title: "SWE Intern @ ServiceNow",
//     time: "Jun - Sept 2025",
//     repoUrl: "https://www.heroui.com/docs/components/dropdown",
//     tags: [
//       { name: "Full-Stack", iconName: "Tv" },
//       { name: "Internship", iconName: "Briefcase" },
//       { name: "Security", iconName: "Unlock" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Deep Learning",
//     time: "Jun - Sept 2025",
//     tags: [
//       { name: "College Course", iconName: "Book" },
//       { name: "AI", iconName: "Bot" },
//     ],
//   },
// ];

// export const allTags: Tag[] = experiences.flatMap((exp) => exp.tags);
// allTags.unshift({ _id: 0, name: "Top Exp", iconName: "Award" });

// export function getExperienceById (id: number): Experience | null {
//   console.log("getExperienceById called with id: " + id);
//   const exp = experiences.find((exp) => exp.id === id);
//   if (!exp) {
//     return null
//   }
//   console.log("getExperiencesById: " + id + " " + exp.toString());
//   return exp;
// }