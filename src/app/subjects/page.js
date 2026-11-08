
import Link from "next/link";
import {
  Languages,
  Calculator,
  FlaskConical,
  Globe2,
  BriefcaseBusiness,
  Laptop,
  BookOpen,
  Atom,
  Microscope,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import "@/styles/pages/subjects.css";

const subjectCategories = [
  {
    number: "01",
    title: "Languages",
    description:
      "Build reading, writing, grammar and communication skills.",
    icon: Languages,
    subjects: ["English", "Hindi", "Sanskrit", "Other Languages"],
  },
  {
    number: "02",
    title: "Mathematics",
    description:
      "Develop mathematical understanding, logical thinking and problem-solving skills.",
    icon: Calculator,
    subjects: ["Mathematics", "Applied Mathematics"],
  },
  {
    number: "03",
    title: "Science",
    description:
      "Explore scientific concepts through subject-focused learning.",
    icon: FlaskConical,
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "General Science",
    ],
  },
  {
    number: "04",
    title: "Social Science",
    description:
      "Understand society, history, geography and civic concepts.",
    icon: Globe2,
    subjects: [
      "History",
      "Geography",
      "Civics",
      "Political Science",
      "Social Science",
    ],
  },
  {
    number: "05",
    title: "Commerce",
    description:
      "Explore core Commerce subjects for senior secondary students.",
    icon: BriefcaseBusiness,
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
    ],
  },
  {
    number: "06",
    title: "Computer Studies",
    description:
      "Develop academic understanding of computer-related subjects.",
    icon: Laptop,
    subjects: [
      "Computer Science",
      "Informatics Practices",
      "Information Technology",
    ],
  },
  {
    number: "07",
    title: "Other Academic Subjects",
    description:
      "Enquire about additional subjects according to your class and board.",
    icon: BookOpen,
    subjects: [
      "Environmental Studies",
      "General Knowledge",
      "Physical Education",
    ],
  },
];

const competitiveSubjects = [
  {
    title: "JEE",
    fullTitle: "Joint Entrance Examination",
    description:
      "Enquire about subject-focused learning support for engineering entrance preparation.",
    icon: Atom,
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    title: "NEET",
    fullTitle: "National Eligibility cum Entrance Test",
    description:
      "Enquire about subject-focused learning support for medical entrance preparation.",
    icon: Microscope,
    subjects: ["Physics", "Chemistry", "Biology"],
  },
];

export default function SubjectsPage() {
  return (
    <main className="subjects-page">

      {/* HERO */}

      <section className="subjects-hero">
        <div className="subjects-container">
          <div className="subjects-hero-content">
            <span className="subjects-eyebrow">
              EXPLORE YOUR LEARNING OPTIONS
            </span>

            <h1>
              Find the Right
              <span> Subject for Your Goals</span>
            </h1>

            <p>
              Explore academic subjects across different school levels,
              Science and Commerce streams, and competitive examination
              preparation.
            </p>

            <div className="subjects-hero-actions">
              <Link href="/find-a-tutor" className="subjects-primary-btn">
                Find a Tutor <ArrowRight size={19} />
              </Link>

              <Link href="/classes" className="subjects-secondary-btn">
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="subjects-intro">
        <div className="subjects-container">
          <div className="subjects-section-heading">
            <span className="subjects-section-label">
              SUBJECT CATEGORIES
            </span>

            <h2>
              Explore Subjects by
              <span> Learning Area</span>
            </h2>

            <p>
              Choose a subject category to understand the available
              learning options. Actual tutor availability depends on
              your class, location and requirements.
            </p>
          </div>

          <div className="subjects-grid">
            {subjectCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  className="subjects-card"
                  key={category.number}
                >
                  <div className="subjects-card-header">
                    <div className="subjects-card-icon">
                      <Icon size={27} />
                    </div>

                    <span className="subjects-card-number">
                      {category.number}
                    </span>
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <div className="subjects-tags">
                    {category.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="subjects-card-link"
                  >
                    Enquire About Subject
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPETITIVE EXAMS */}

      <section className="subjects-competitive">
        <div className="subjects-container">
          <div className="subjects-section-heading">
            <span className="subjects-section-label">
              COMPETITIVE EXAM PREPARATION
            </span>

            <h2>
              Focus on Your <span>Career Goals</span>
            </h2>

            <p>
              Explore subject requirements for JEE and NEET preparation.
            </p>
          </div>

          <div className="subjects-competitive-grid">
            {competitiveSubjects.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  className="subjects-competitive-card"
                  key={course.title}
                >
                  <div className="subjects-competitive-icon">
                    <Icon size={31} />
                  </div>

                  <span className="subjects-exam-full-title">
                    {course.fullTitle}
                  </span>

                  <h3>{course.title} Preparation</h3>

                  <p>{course.description}</p>

                  <div className="subjects-exam-list">
                    {course.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="subjects-card-link"
                  >
                    Enquire Now
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOARDS */}

      <section className="subjects-boards">
        <div className="subjects-container">
          <div className="subjects-boards-content">
            <div className="subjects-boards-icon">
              <GraduationCap size={32} />
            </div>

            <div>
              <span className="subjects-section-label">
                BOARD-WISE LEARNING
              </span>

              <h2>Academic Support Across Different Boards</h2>

              <p>
                Students can enquire about subject requirements for
                CBSE, ICSE / ISC and State Boards. Suitable subject
                and tutor availability will be discussed individually.
              </p>

              <div className="subjects-board-tags">
                <span>CBSE</span>
                <span>ICSE / ISC</span>
                <span>State Boards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="subjects-cta">
        <div className="subjects-cta-content">
          <span>LET&apos;S PLAN YOUR LEARNING</span>

          <h2>Looking for a Tutor for a Specific Subject?</h2>

          <p>
            Tell us your class, board, subject and tuition preferences.
            Our team will discuss suitable options based on availability.
          </p>

          <Link
            href="/find-a-tutor"
            className="subjects-cta-button"
          >
            Submit Your Requirements
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
