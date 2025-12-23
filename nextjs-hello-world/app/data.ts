"use client";

import * as IconLib from "@deemlol/next-icons";
import { PortableTextBlock } from "next-sanity";

export type Tag = {
  _id: number;
  title: string;
  iconName: keyof typeof IconLib;
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