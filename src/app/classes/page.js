
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  GraduationCap,
  Monitor,
  House,
  Search,
  CheckCircle2,
  Sparkles,
  BookMarked,
  Atom,
  Landmark,
  X,
} from "lucide-react";
import "./classes.css";

const classGroups = [
  {
    id: "early",
    title: "Early Learning",
    classes: "Nursery – KG",
    description: "Build strong learning habits from the beginning.",
    subjects: ["English", "Hindi", "Mathematics", "EVS"],
    icon: Sparkles,
    color: "peach",
  },
  {
    id: "primary",
    title: "Primary School",
    classes: "Class 1 – 5",
    description: "Strengthen fundamentals across core subjects.",
    subjects: ["Mathematics", "English", "Hindi", "EVS"],
    icon: BookOpen,
    color: "blue",
  },
  {
    id: "middle",
    title: "Middle School",
    classes: "Class 6 – 8",
    description: "Develop concepts, confidence and problem-solving.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    icon: FlaskConical,
    color: "purple",
  },
  {
    id: "secondary",
    title: "Secondary School",
    classes: "Class 9 – 10",
    description: "Focus on concepts, practice and exam preparation.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    icon: GraduationCap,
    color: "green",
  },
  {
    id: "senior-science",
    title: "Senior Secondary",
    classes: "Class 11 – 12 · Science",
    description: "Explore core science subjects with focused learning.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: Atom,
    color: "blue",
  },
  {
    id: "senior-commerce",
    title: "Senior Secondary",
    classes: "Class 11 – 12 · Commerce",
    description: "Build your understanding of commerce and finance.",
    subjects: ["Accountancy", "Business Studies", "Economics"],
    icon: Landmark,
    color: "peach",
  },
  {
    id: "senior-arts",
    title: "Senior Secondary",
    classes: "Class 11 – 12 · Humanities",
    description: "Study humanities and social science subjects.",
    subjects: ["History", "Geography", "Political Science", "English"],
    icon: Languages,
    color: "purple",
  },
  {
    id: "college",
    title: "College & Beyond",
    classes: "College-level learning",
    description: "Explore subject-specific learning requirements.",
    subjects: ["Mathematics", "English", "Economics", "Other subjects"],
    icon: BookMarked,
    color: "green",
  },
];

const subjectGroups = [
  {
    title: "Mathematics",
    description: "Build concepts and practise problem-solving.",
    icon: Calculator,
  },
  {
    title: "Science",
    description: "Explore scientific concepts and applications.",
    icon: FlaskConical,
  },
  {
    title: "Physics",
    description: "Understand principles, formulas and numericals.",
    icon: Atom,
  },
  {
    title: "Chemistry",
    description: "Learn chemical concepts and reactions.",
    icon: Sparkles,
  },
  {
    title: "Biology",
    description: "Study life sciences and biological concepts.",
    icon: BookOpen,
  },
  {
    title: "English & Hindi",
    description: "Develop language, grammar and writing skills.",
    icon: Languages,
  },
  {
    title: "Social Science",
    description: "Explore history, geography and civics.",
    icon: Landmark,
  },
  {
    title: "Commerce",
    description: "Explore accountancy, business and economics.",
    icon: GraduationCap,
  },
];

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMode, setSelectedMode] = useState("all");

  const filteredGroups = classGroups.filter((group) => {
    const searchContent = [
      group.title,
      group.classes,
      group.description,
      ...group.subjects,
    ]
      .join(" ")
      .toLowerCase();

    return searchContent.includes(searchTerm.trim().toLowerCase());
  });

  return (
    <div className="classes-page">
      <section className="classes-hero">
        <div className="classes-hero-shape classes-shape-one" />
        <div className="classes-hero-shape classes-shape-two" />

        <div className="classes-container classes-hero-layout">
          <div className="classes-hero-content">
            <span className="classes-eyebrow">
              <Sparkles size={15} />
              YOUR LEARNING JOURNEY STARTS HERE
            </span>

            <h1>
              The right support for
              <span> better learning.</span>
            </h1>

            <p className="classes-hero-description">
              Explore classes and subjects to find a tuition option that
              matches your learning needs. Start with the right concepts
              and build towards your goals.
            </p>

            <div className="classes-hero-actions">
              <a href="#explore-classes" className="classes-btn classes-btn-primary">
                Explore Classes <ArrowRight size={18} />
              </a>

              <Link
                href="/find-a-tutor"
                className="classes-btn classes-btn-outline"
              >
                Find a Tutor
              </Link>
            </div>

            <div className="classes-hero-note">
              <CheckCircle2 size={17} />
              <span>Explore learning options at your own pace.</span>
            </div>
          </div>

          <div className="classes-hero-visual">
            <div className="classes-visual-card">
              <div className="classes-visual-icon">
                <GraduationCap size={42} strokeWidth={1.7} />
              </div>

              <span className="classes-visual-label">YOUR NEXT CHAPTER</span>

              <h2>Learn better. Grow with confidence.</h2>

              <p>
                Every learning journey begins with a strong foundation.
              </p>

              <div className="classes-visual-subjects">
                <span><Calculator size={15} /> Maths</span>
                <span><FlaskConical size={15} /> Science</span>
                <span><Languages size={15} /> Languages</span>
              </div>

              <div className="classes-visual-decoration decoration-one" />
              <div className="classes-visual-decoration decoration-two" />
            </div>

            <div className="classes-floating-card">
              <BookOpen size={21} />
              <div>
                <strong>Find your focus</strong>
                <span>Class · Subject · Learning mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-search-section" id="explore-classes">
        <div className="classes-container">
          <div className="classes-section-heading">
            <span className="classes-section-label">EXPLORE YOUR OPTIONS</span>
            <h2>Which class are you looking for?</h2>
            <p>
              Search by class, learning level or subject to explore the
              available categories.
            </p>
          </div>

          <div className="classes-search-box">
            <Search size={21} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Try Class 10, Mathematics, Physics..."
              aria-label="Search classes and subjects"
            />

            {searchTerm && (
              <button
                type="button"
                className="classes-clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="classes-results-line">
            <span>
              {filteredGroups.length} learning{" "}
              {filteredGroups.length === 1 ? "category" : "categories"}
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="classes-reset-link"
              >
                Clear search
              </button>
            )}
          </div>

          {filteredGroups.length > 0 ? (
            <div className="classes-grid">
              {filteredGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article className="class-card" key={group.id}>
                    <div className={`class-card-icon ${group.color}`}>
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="class-card-category">
                      {group.title}
                    </span>

                    <h3>{group.classes}</h3>

                    <p className="class-card-description">
                      {group.description}
                    </p>

                    <div className="class-card-subjects">
                      {group.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>

                    <Link
                      href="/find-a-tutor"
                      className="class-card-link"
                    >
                      Explore tuition
                      <ArrowRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="classes-empty-state">
              <div className="classes-empty-icon">
                <Search size={29} />
              </div>
              <h3>No matching category found</h3>
              <p>
                Try another class or subject name, or clear your search
                to see all learning categories.
              </p>
              <button
                type="button"
                className="classes-btn classes-btn-primary"
                onClick={() => setSearchTerm("")}
              >
                Show all classes
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="classes-subject-section">
        <div className="classes-container">
          <div className="classes-section-heading">
            <span className="classes-section-label">SUBJECT EXPLORER</span>
            <h2>Learn one subject at a time</h2>
            <p>
              Explore common school subjects and identify the area in
              which you need learning support.
            </p>
          </div>

          <div className="classes-subject-grid">
            {subjectGroups.map((subject) => {
              const Icon = subject.icon;

              return (
                <article className="classes-subject-card" key={subject.title}>
                  <div className="classes-subject-icon">
                    <Icon size={23} />
                  </div>

                  <div className="classes-subject-copy">
                    <h3>{subject.title}</h3>
                    <p>{subject.description}</p>
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="classes-subject-arrow"
                    aria-label={`Explore tuition for ${subject.title}`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="classes-mode-section">
        <div className="classes-container">
          <div className="classes-mode-panel">
            <div className="classes-mode-copy">
              <span className="classes-section-label">CHOOSE YOUR STYLE</span>
              <h2>Learning that fits your routine</h2>
              <p>
                Choose the tuition format that suits your circumstances.
                Your actual options can be discussed when you submit an
                enquiry.
              </p>

              <div className="classes-mode-options">
                <button
                  type="button"
                  className={`classes-mode-option ${
                    selectedMode === "home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedMode("home")}
                  aria-pressed={selectedMode === "home"}
                >
                  <span className="classes-mode-option-icon">
                    <House size={23} />
                  </span>
                  <span>
                    <strong>Home Tuition</strong>
                    <small>Explore in-person learning</small>
                  </span>
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className={`classes-mode-option ${
                    selectedMode === "online" ? "active" : ""
                  }`}
                  onClick={() => setSelectedMode("online")}
                  aria-pressed={selectedMode === "online"}
                >
                  <span className="classes-mode-option-icon">
                    <Monitor size={23} />
                  </span>
                  <span>
                    <strong>Online Tuition</strong>
                    <small>Explore remote learning</small>
                  </span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <Link
                href="/find-a-tutor"
                className="classes-btn classes-btn-primary classes-mode-cta"
              >
                Continue to Find a Tutor <ArrowRight size={18} />
              </Link>
            </div>

            <div className="classes-mode-visual">
              <div className="classes-mode-visual-circle">
                {selectedMode === "online" ? (
                  <Monitor size={66} strokeWidth={1.4} />
                ) : (
                  <House size={66} strokeWidth={1.4} />
                )}
              </div>
              <span className="classes-mode-visual-tag">
                {selectedMode === "online"
                  ? "ONLINE LEARNING"
                  : "LEARNING AT HOME"}
              </span>
              <h3>
                {selectedMode === "online"
                  ? "Learn from your preferred location."
                  : "Explore a learning setup that feels comfortable."}
              </h3>
              <p>
                {selectedMode === "online"
                  ? "Internet access and a suitable device may be needed."
                  : "Location, schedule and availability can be discussed during enquiry."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="classes-bottom-cta">
        <div className="classes-container classes-bottom-cta-inner">
          <div>
            <span className="classes-section-label">READY TO GET STARTED?</span>
            <h2>Let’s find the right learning path for you.</h2>
            <p>
              Tell us your class, subject and preferred tuition mode to
              explore the next step.
            </p>
          </div>

          <Link
            href="/find-a-tutor"
            className="classes-btn classes-btn-light"
          >
            Find a Tutor <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
