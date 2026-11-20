
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
  },
];

export default function Classes() {
  return (
    <section className="classes-section" id="classes">
      <div className="classes-container">

        {/* Section Heading */}
        <div className="classes-heading">
          <span className="classes-eyebrow">
            <GraduationCap size={17} />
            OUR ACADEMIC PROGRAMMES
          </span>

          <h2>
            A Learning Journey
            <span> for Every Stage</span>
          </h2>

          <p>
            From primary education to senior secondary studies
            and competitive examinations, explore our academic
            programmes designed to support every step of
            your educational journey.
          </p>
        </div>

        {/* Academic Timeline */}
        <div className="classes-timeline">

          {academicLevels.map((level, index) => {
            const Icon = level.icon;

            return (
              <article
                className="class-timeline-item"
                key={level.number}
                style={{ "--timeline-index": index }}
              >
                {/* Timeline Number */}
                <div className="class-timeline-marker">
                  <span className="class-timeline-number">
                    {level.number}
                  </span>
                </div>

                {/* Programme Content */}
                <div className="class-timeline-content">

                  <div className="class-timeline-top">
                    <div className="class-timeline-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="class-range">
                      {level.classes}
                    </span>
                  </div>

                  <h3>{level.title}</h3>

                  <p className="class-description">
                    {level.description}
                  </p>

                  <div className="class-subjects">
                    <span className="class-subject-label">
                      SUBJECT AREAS
                    </span>

                    <div className="class-subject-list">
                      {level.subjects.map((subject) => (
                        <span
                          className="class-subject"
                          key={subject}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="class-board">
                    {level.boards}
                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
