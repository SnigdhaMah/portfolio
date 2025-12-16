"use client";

import "./page.css";
import { useState } from "react";
import * as IconLib from "@deemlol/next-icons";
import { allTags, experiences } from "./data";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExperiences = experiences.filter((exp) => {
    const matchesFilter =
      activeFilter === "all" ||
      exp.tags.some((tag) =>
        tag.name.toLowerCase().includes(activeFilter.toLowerCase())
      );
    const matchesSearch =
      searchTerm === "" ||
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const scrollToSection = (id: "home" | "quick-facts" | "experience") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setStar(id);
  };

  const [star, setStar] = useState<"home" | "quick-facts" | "experience">(
    "home"
  );

  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        {/* Links to other social medias */}
        <div className="social-buttons">
          <a href="https://github.com/SnigdhaMah?tab=repositories">
            <IconLib.Github size={24} color="black" />
          </a>
          <a href="https://www.linkedin.com/in/snigdha-mahankali-418236241/">
            <IconLib.Linkedin size={24} color="black" />
          </a>
        </div>
        {/* Actual Nav titles */}
        <div className="nav-stuff">
          s
          <div
            className="nav-sections"
            style={{ justifyContent: "space-evenly", paddingBottom: "1%" }}
          >
            {/* Home */}
            <div
              className="sect"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconLib.Star
                size={24}
                color={star == "home" ? "black" : "#98ffe3"}
              />
              <button
                onClick={() => scrollToSection("home")}
                className="section-button"
              >
                Home
              </button>
            </div>
            {/* Quick Facts */}
            <div
              className="sect"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconLib.Star
                size={24}
                color={star == "quick-facts" ? "black" : "#98ffe3"}
              />
              <button
                onClick={() => scrollToSection("quick-facts")}
                className="section-button"
              >
                Quick Facts
              </button>
            </div>
            {/* Experience */}
            <div
              className="sect"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconLib.Star
                size={24}
                color={star == "experience" ? "black" : "#98ffe3"}
              />
              <button
                onClick={() => scrollToSection("experience")}
                className="section-button"
              >
                Experience
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{ height: window.innerHeight * 0.9 }}
      >
        <div className="hero-container">
          <h1
            className="hero-title"
            style={{ fontSize: window.innerWidth * 0.09 }}
          >
            Snigdha Mahankali
          </h1>
          <h2
            className="hero-subtitle"
            style={{ fontSize: window.innerWidth * 0.03 }}
          >
            Full-Stack, Back-end
            <br />
            Software Developer
          </h2>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section
        id="quick-facts"
        className="quick-facts-section"
        style={{
          minHeight: window.innerHeight,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="quick-facts-container">
          <div className="quick-facts-header">
            <IconLib.Star size={window.innerWidth * 0.025} color={"black"} />
            <h2
              className="quick-facts-title"
              style={{ fontSize: window.innerWidth * 0.03 }}
            >
              Quick Facts
            </h2>
          </div>

          <div className="facts-grid">
            {/* Education Card */}
            <div className="fact-card">
              {/* Grad hat svg */}
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h3
                className="fact-title"
                style={{ fontSize: window.innerWidth * 0.02 }}
              >
                Education
              </h3>
              <p className="fact-text">University of Washington</p>
              <p className="fact-text">
                Bachelor&apos;s in <br />
                Computer Science, Psychology
              </p>
              <p className="fact-text">3.88/4.0 GPA</p>
            </div>

            {/* Experience Card */}
            <div className="fact-card">
              {/* Briefcase svg */}
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h3
                className="fact-title"
                style={{ fontSize: window.innerWidth * 0.02 }}
              >
                Experience
              </h3>
              <p className="fact-text">
                Three SWE Internships at
                <br />
                Startup / Mid-size companies
              </p>
              <p className="fact-text">Tech Lead of own startup</p>
              <p className="fact-text">Many hackathons & projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="experience-container">
          <div className="quick-facts-header">
            <IconLib.Star size={window.innerWidth * 0.025} color={"black"} />

            <h2
              className="quick-facts-title"
              style={{ fontSize: window.innerWidth * 0.03 }}
            >
              Explore my Experience
            </h2>
          </div>

          {/* Filters */}
          <div className="filters">
            {allTags.map((tag, index) => {
              const iconName = tag.iconName;
              const Icon = IconLib[iconName];
              return (
                <button
                  key={index}
                  onClick={() => setActiveFilter(tag.name)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === tag.name
                      ? "bg-pink-300 text-gray-900"
                      : "bg-pink-200 text-gray-700 hover:bg-pink-300"
                  }`}
                >
                  <div className="inline-flex items-center gap-2">
                    {Icon && <Icon size={24} color="black" />}
                    <p>{tag.name}</p>
                  </div>
                </button>
              );
            })}

            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Tags"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-2 pl-10 rounded-full bg-pink-100 border-2 border-pink-200 focus:outline-none focus:border-pink-300"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>;

          {
            /* Wavy Divider */
          }
          <div className="mb-12">
            <svg
              className="w-full h-8"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <path
                d="M0,30 Q300,10 600,30 T1200,30"
                stroke="#ffc0cb"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>;

          {
            /* Experience Cards */
          }
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredExperiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 mb-4">{exp.time}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag, idx) => {
                    const iconName = tag.iconName;
                    const Icon = IconLib[iconName];

                    return (
                      <div
                        key={idx}
                        className="px-4 py-1 bg-yellow-300 rounded-full text-sm font-medium text-gray-900"
                      >
                        {Icon && <Icon size={24} color="black" />}
                        <p>{tag.name}</p>
                      </div>
                    );
                  })}
                </div>
                {exp.repoUrl && (
                  <button className="w-full py-3 bg-green-400 hover:bg-green-500 rounded-full font-semibold text-gray-900 transition-colors">
                    View Repo
                  </button>
                )}
              </div>
            ))}
          </div>;
        </div>
      </section>

      {/* Wavy Footer */}
      <div className="relative bg-gradient-to-br from-cyan-300 to-cyan-400">
        <svg
          className="w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="#ffc0cb"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
