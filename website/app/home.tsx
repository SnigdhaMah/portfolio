"use client";

import "./page.css";
import { useState, useEffect, useRef } from "react";
import * as IconLib from "@deemlol/next-icons";
import { Tag, Experience } from "./data";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { getExperiences, getTags } from "./sanity/sanity.query";

type HomeProps= {
  experiences: Experience[];
  allTags: Tag[];
}

export default function Home({experiences, allTags}: HomeProps) {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [star, setStar] = useState<"home" | "quick-facts" | "experience">(
    "home"
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const searchBarRef = useRef<HTMLDivElement>(null);

  // const [expSanity, setExpSanity] = useState<Experience[]>([]);
  // const [allTags, setAllTags] = useState<Tag[]>([]);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    /* Listeners */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    const updateSize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // const getExp = async () => {
    //   setExpSanity(await getExperiences());
    //   setAllTags(await getTags());
    // };

    updateSize(); // initial
    // getExp();
    window.addEventListener("resize", updateSize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const filteredExperiences = experiences.filter((exp) => {
    const matchesFilter =
      activeFilter.length == 0 ||
      exp.tags.some((tag) => activeFilter.includes(tag.title));
    return matchesFilter && true;
  });

  const filteredTags = allTags.filter((tag) => {
    return activeFilter.includes(tag.title);
  });

  const searchTags = allTags.filter((tag) => {
    return (
      tag.title
        .toLocaleLowerCase()
        .startsWith(searchTerm.toLocaleLowerCase()) ||
      activeFilter.includes(tag.title)
    );
  });

  const scrollToSection = (id: "home" | "quick-facts" | "experience") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setStar(id);
  };

  const toggleActiveFilter = (term: string) => {
    if (activeFilter.includes(term)) {
      // unselect
      const newarr = activeFilter.filter((t) => t !== term);
      setActiveFilter(newarr);
    } else {
      setActiveFilter([...activeFilter, term]);
    }
  };

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
        style={{ height: viewport.height * 0.9 }}
      >
        <div className="hero-container">
          <h1
            className="hero-title"
            style={{ fontSize: viewport.width * 0.09 }}
          >
            Snigdha Mahankali
          </h1>
          <h2
            className="hero-subtitle"
            style={{ fontSize: viewport.width * 0.03 }}
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
          minHeight: viewport.height,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div className="quick-facts-container">
          <div className="header">
            <IconLib.Star size={window.innerWidth * 0.025} color={"black"} />
            <h2
              className="header-title"
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
          <div className="header">
            <IconLib.Star size={window.innerWidth * 0.025} color={"black"} />

            <h2
              className="header-title"
              style={{ fontSize: window.innerWidth * 0.03 }}
            >
              Explore my Experience
            </h2>
          </div>
          {/* Filters */}
          <div
            className="filters"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {filteredTags.map((tag, index) => {
              const iconName = tag.iconName;
              const Icon = IconLib[iconName];
              return (
                <button
                  key={index}
                  onClick={() => toggleActiveFilter(tag.title)}
                  className={`filter-button`}
                  style={{
                    marginRight: 10,
                    borderRadius: 30,
                    padding: 10,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    alignItems: "center",
                    ...(activeFilter.includes(tag.title)
                      ? { backgroundColor: "#f9a8d4", color: "#111827" }
                      : { backgroundColor: "#fce7f3", color: "#374151" }),
                  }}
                >
                  <div
                    className="filter-container"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={24}
                        color="black"
                        style={{ marginRight: 8 }}
                      />
                    )}
                    <p>{tag.title}</p>
                  </div>
                </button>
              );
            })}
            <div
              className="search-container"
              ref={searchBarRef}
              style={{ maxWidth: "50%" }}
            >
              <div className="search-bar-overlay">
                <input
                  type="text"
                  placeholder="Search For Relevant Tags"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  className="search-input"
                  style={{ color: "black" }}
                />
                <IconLib.Search
                  size={24}
                  color={"black"}
                  style={{ position: "absolute", top: "20%", left: "1%" }}
                />
              </div>
              {showDropdown && (
                <div
                  className="dropdown"
                  style={{
                    position: "absolute",
                    borderRadius: 30,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginTop: 4,
                    width: "100%",
                  }}
                >
                  {searchTags.map((tag, idx) => {
                    const iconName = tag.iconName;
                    const Icon = IconLib[iconName];
                    return (
                      <div
                        key={idx}
                        className="dropdown-item"
                        onClick={() => {
                          toggleActiveFilter(tag.title);
                          setSearchTerm("");
                        }}
                        style={{
                          ...(activeFilter.includes(tag.title)
                            ? {
                                backgroundColor: "#f9a8d4",
                                color: "#111827",
                                borderBottom: "1px solid #f289c3ff",
                              }
                            : {
                                backgroundColor: "#fce7f3",
                                color: "#374151",
                                borderBottom: "1px solid #f9a8d4",
                              }),
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 8,
                          ...(idx === 0 && {
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                          }),
                          ...(idx === searchTags.length - 1 && {
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                          }),
                        }}
                      >
                        {Icon && (
                          <Icon
                            size={20}
                            color="black"
                            style={{ marginRight: 8 }}
                          />
                        )}
                        <p>{tag.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            ;
          </div>
          ;{/* Wavy Divider */}
          <div className="wavy-divider-small">
            <svg
              className="wavy-svg-small"
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
          </div>
          {/* Experience Cards */}
          <div className="experience-grid">
            {filteredExperiences.map((exp) => (
              <Link
                key={exp._id}
                href={{
                  pathname: "/experience",
                  query: { expId: exp._id },
                }}
              >
                <div key={exp._id} className="experience-card">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-period">{exp.time}</p>
                  <div className="tag-container">
                    {exp.tags.map((tag, idx) => {
                      const iconName = tag.iconName;
                      const Icon = IconLib[iconName];

                      return (
                        <div
                          key={idx}
                          className="tag"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                            marginRight: 8,
                          }}
                        >
                          {Icon && (
                            <Icon
                              size={24}
                              color="black"
                              style={{ marginRight: 8 }}
                            />
                          )}
                          <p>{tag.title}</p>
                        </div>
                      );
                    })}
                  </div>
                  {exp.repoUrl && (
                    <button
                      className="repo-button"
                      onClick={() => {
                        router.push(exp.repoUrl as string);
                      }}
                    >
                      View Repo
                    </button>
                  )}
                </div>
              </Link>
            ))}
          </div>
          ;
        </div>
      </section>

      <section
        className="footer"
        style={{
          backgroundColor: "#01C4FD",
          padding: "2%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="contact-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            className="contact-title"
            style={{ fontWeight: 700, fontSize: 30, color: "black" }}
          >
            Contact Me
          </h1>
          <p className="contact-text" style={{ color: "black" }}>
            snigsm@uw.edu
          </p>
          <p className="footer-text" style={{ color: "black" }}>
            © 2026 Snigdha Mahankali. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
