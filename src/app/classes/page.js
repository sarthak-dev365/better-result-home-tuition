
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Calculator,
  Microscope,
  Atom,
  FlaskConical,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  School,
  Target,
} from "lucide-react";

import "@/styles/pages/classes.css";

const classLevels = [
  {
    id: "primary",
    number: "01",
    title: "Primary Classes",
    range: "Classes 1–5",
    description:
      "Build a strong academic foundation through learning support for primary-level students.",
    icon: School,
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "General Studies",
    ],
  },
  {
    id: "middle",
    number: "02",
    title: "Middle School",
    range: "Classes 6–8",
    description:
      "Develop subject understanding and strengthen essential academic concepts.",
    icon: BookOpen,
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Science",
    ],
  },
  {
    id: "secondary",
    number: "03",
    title: "Secondary Classes",
    range: "Classes 9–10",
    description:
      "Focus on subject clarity, academic practice and school examination preparation.",
    icon: GraduationCap,
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Hindi",
      "Social Science",
    ],
  },
];

const seniorStreams = [
  {
    title: "Science Stream",
    range: "Classes 11–12",
    icon: Atom,
    description:
      "Explore subject-focused learning support for senior secondary Science students.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
    ],
  },
  {
    title: "Commerce Stream",
    range: "Classes 11–12",
    icon: BriefcaseBusiness,
    description:
      "Build understanding of core Commerce subjects and academic concepts.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "English",
    ],
  },
];

const competitiveCourses = [
  {
    title: "JEE Preparation",
    subtitle: "Engineering Entrance Preparation",
    description:
      "Enquire about academic support for Physics, Chemistry and Mathematics preparation.",
    icon: Calculator,
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    title: "NEET Preparation",
    subtitle: "Medical Entrance Preparation",
    description:
      "Enquire about academic support for Physics, Chemistry and Biology preparation.",
    icon: Microscope,
    subjects: ["Physics", "Chemistry", "Biology"],
  },
];

export default function ClassesPage() {
  return (
    <main className="classes-page">

      {/* HERO */}

      <section className="classes-hero">
        <div className="classes-container">
          <div className="classes-hero-content">
            <span className="classes-eyebrow">
              LEARNING FOR EVERY ACADEMIC LEVEL
            </span>

            <h1>
              Tuition Support for
              <span> Classes 1 to 12</span>
            </h1>

            <p>
              Explore learning support for different school levels,
              Science and Commerce streams, and competitive examination
              preparation. Find an option according to your academic needs.
            </p>

            <div className="classes-hero-actions">
              <Link href="/find-a-tutor" className="classes-primary-btn">
                Find a Tutor <ArrowRight size={19} />
              </Link>

              <Link href="/contact" className="classes-secondary-btn">
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="classes-intro">
        <div className="classes-container">
          <div className="classes-section-heading">
            <span className="classes-section-label">
              EXPLORE ACADEMIC LEVELS
            </span>

            <h2>
              Find Learning Support for
              <span> Your Class</span>
            </h2>

            <p>
              Students can enquire about tuition requirements according
              to their current class and academic stream. Subject and
              tutor availability will be discussed individually.
            </p>
          </div>

          <div className="classes-level-grid">
            {classLevels.map((level) => {
              const Icon = level.icon;

              return (
                <article
                  className="classes-level-card"
                  key={level.id}
                >
                  <div className="classes-card-top">
                    <span className="classes-card-number">
                      {level.number}
                    </span>

                    <div className="classes-level-icon">
                      <Icon size={28} />
                    </div>
                  </div>

                  <span className="classes-range">
                    {level.range}
                  </span>

                  <h3>{level.title}</h3>

                  <p>{level.description}</p>

                  <div className="classes-subject-list">
                    {level.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="classes-card-link"
                  >
                    Enquire for This Class
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SENIOR SECONDARY */}

      <section className="classes-senior">
        <div className="classes-container">
          <div className="classes-section-heading">
            <span className="classes-section-label">
              SENIOR SECONDARY EDUCATION
            </span>

            <h2>
              Choose Your <span>Academic Stream</span>
            </h2>

            <p>
              Explore Science and Commerce learning requirements for
              Classes 11 and 12.
            </p>
          </div>

          <div className="classes-senior-grid">
            {seniorStreams.map((stream) => {
              const Icon = stream.icon;

              return (
                <article
                  className="classes-senior-card"
                  key={stream.title}
                >
                  <div className="classes-senior-icon">
                    <Icon size={30} />
                  </div>

                  <span className="classes-range">
                    {stream.range}
                  </span>

                  <h3>{stream.title}</h3>

                  <p>{stream.description}</p>

                  <div className="classes-subject-list">
                    {stream.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="classes-card-link"
                  >
                    Explore Tuition
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPETITIVE EXAMS */}

      <section className="classes-competitive">
        <div className="classes-container">
          <div className="classes-section-heading">
            <span className="classes-section-label">
              COMPETITIVE EXAM PREPARATION
            </span>

            <h2>
              Prepare for Your <span>Next Goal</span>
            </h2>

            <p>
              Students can also enquire about subject-focused academic
              support for competitive examination preparation.
            </p>
          </div>

          <div className="classes-competitive-grid">
            {competitiveCourses.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  className="classes-competitive-card"
                  key={course.title}
                >
                  <div className="classes-competitive-icon">
                    <Icon size={32} />
                  </div>

                  <span className="classes-range">
                    {course.subtitle}
                  </span>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="classes-exam-subjects">
                    {course.subjects.map((subject) => (
                      <span key={subject}>
                        <CheckCircle2 size={15} />
                        {subject}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/find-a-tutor"
                    className="classes-card-link"
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

      <section className="classes-boards">
        <div className="classes-container">
          <div className="classes-boards-content">
            <div className="classes-boards-icon">
              <Target size={31} />
            </div>

            <div>
              <span className="classes-section-label">
                EDUCATION BOARDS
              </span>

              <h2>Learning Support Across Different Boards</h2>

              <p>
                Enquiries are welcome for CBSE, ICSE / ISC and State
                Board academic requirements. Suitable tutor availability
                will be discussed based on the student&apos;s needs.
              </p>

              <div className="classes-board-tags">
                <span>CBSE</span>
                <span>ICSE / ISC</span>
                <span>State Boards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="classes-cta">
        <div className="classes-cta-content">
          <span>YOUR LEARNING JOURNEY STARTS HERE</span>

          <h2>Looking for a Suitable Tutor?</h2>

          <p>
            Share your class, subjects and tuition preferences.
            Our team will discuss suitable options based on availability.
          </p>

          <Link href="/find-a-tutor" className="classes-cta-button">
            Find a Tutor <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
