
import {
  BookOpen,
  GraduationCap,
  School,
  Calculator,
  Atom,
  Microscope,
  Brain,
} from "lucide-react";

import "@/styles/home/classes.css";

const academicLevels = [
  {
    number: "01",
    title: "Primary Education",
    classes: "Classes 1–5",
    description:
      "Build a strong foundation through engaging learning, essential concepts and personalised academic support.",
    subjects: [
      "English",
      "Mathematics",
      "EVS",
      "Hindi",
      "Basic Science",
    ],
    boards: "CBSE • ICSE • State Boards",
    icon: BookOpen,
    color: "blue",
  },
  {
    number: "02",
    title: "Middle School",
    classes: "Classes 6–8",
    description:
      "Strengthen fundamental concepts, develop subject knowledge and build effective learning habits.",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
      "Hindi",
    ],
    boards: "CBSE • ICSE • State Boards",
    icon: School,
    color: "orange",
  },
  {
    number: "03",
    title: "Secondary Education",
    classes: "Classes 9–10",
    description:
      "Develop deeper subject understanding and prepare confidently for school and board examinations.",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Social Science",
      "English",
    ],
    boards: "CBSE • ICSE • State Boards",
    icon: GraduationCap,
    color: "purple",
  },
  {
    number: "04",
    title: "Senior Secondary",
    classes: "Classes 11–12 • Science",
    description:
      "Get focused academic guidance in science subjects with concept-based learning and board examination preparation.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
    ],
    boards: "CBSE • ISC • State Boards",
    icon: Brain,
    color: "green",
  },
  {
    number: "05",
    title: "Commerce Stream",
    classes: "Classes 11–12 • Commerce",
    description:
      "Develop a strong understanding of business, finance and economics through structured commerce education.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Applied Mathematics",
      "English",
    ],
    boards: "CBSE • ISC • State Boards",
    icon: Calculator,
    color: "teal",
  },
  {
    number: "06",
    title: "JEE Preparation",
    classes: "Engineering Entrance",
    description:
      "Build strong conceptual understanding and problem-solving skills for engineering entrance examinations.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Numerical Practice",
    ],
    boards: "JEE Main • JEE Advanced",
    icon: Atom,
    color: "pink",
  },
  {
    number: "07",
    title: "NEET Preparation",
    classes: "Medical Entrance",
    description:
      "Strengthen your science fundamentals through focused preparation and NCERT-oriented subject learning.",
    subjects: [
      "Physics",
      "Chemistry",
      "Botany",
      "Zoology",
      "NCERT Practice",
    ],
    boards: "NEET-UG",
    icon: Microscope,
    color: "indigo",
  },
];

export default function Classes() {
  return (
    <section className="classes-section" id="classes">
      <div className="classes-container">

        {/* Section Heading */}
        <div className="classes-heading">
          <span className="classes-eyebrow">
            <GraduationCap size={16} />
            ACADEMIC PROGRAMMES
          </span>

          <h2>
            Learning Pathways
            <span> for Every Ambition</span>
          </h2>

          <p>
            From primary education to senior secondary studies
            and competitive examinations, explore academic
            programmes designed to support every stage of
            your learning journey.
          </p>
        </div>

        {/* Academic Programme Cards */}
        <div className="classes-grid">

          {academicLevels.map((level) => {
            const Icon = level.icon;

            return (
              <article
                className={`class-card class-${level.color}`}
                key={level.number}
              >
                <div className="class-card-top">

                  <div className="class-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="class-number">
                    {level.number}
                  </span>

                </div>

                <span className="class-range">
                  {level.classes}
                </span>

                <h3>{level.title}</h3>

                <p className="class-description">
                  {level.description}
                </p>

                <div className="class-subjects">

                  <span className="class-subject-label">
                    SUBJECT AREAS
                  </span>

                  <ul>
                    {level.subjects.map((subject) => (
                      <li key={subject}>
                        <span className="class-subject-check">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 10.5L8 14.5L16 5.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        {subject}
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="class-board">
                  {level.boards}
                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
