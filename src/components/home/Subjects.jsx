
"use client";

import { useState } from "react";

import {
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Microscope,
  Languages,
  Globe,
  Landmark,
  Laptop,
  BriefcaseBusiness,
  Dumbbell,
  Brain,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

import "@/styles/home/subjects.css";

const classGroups = [
  {
    id: "primary",
    number: "01",
    title: "Primary Classes",
    range: "Classes 1–5",
    description: "Build strong foundations in essential school subjects.",
    icon: BookOpen,
    subjects: [
      { name: "English", icon: Languages },
      { name: "Hindi", icon: BookOpen },
      { name: "Mathematics", icon: Calculator },
      { name: "Environmental Studies (EVS)", icon: Globe },
      { name: "Basic Science", icon: FlaskConical },
      { name: "Sanskrit", icon: Languages },
      { name: "General Knowledge", icon: Brain },
      { name: "Moral Education", icon: BookOpen },
    ],
  },
  {
    id: "middle",
    number: "02",
    title: "Middle School",
    range: "Classes 6–8",
    description: "Strengthen concepts and develop subject knowledge.",
    icon: BookOpen,
    subjects: [
      { name: "English", icon: Languages },
      { name: "Hindi", icon: BookOpen },
      { name: "Sanskrit", icon: Languages },
      { name: "Mathematics", icon: Calculator },
      { name: "Science", icon: FlaskConical },
      { name: "Social Science", icon: Landmark },
      { name: "Computer Studies", icon: Laptop },
      { name: "Physical Education", icon: Dumbbell },
    ],
  },
  {
    id: "secondary",
    number: "03",
    title: "Secondary School",
    range: "Classes 9–10",
    description: "Prepare for school assessments and board examinations.",
    icon: GraduationCap,
    subjects: [
      { name: "English", icon: Languages },
      { name: "Hindi", icon: BookOpen },
      { name: "Mathematics", icon: Calculator },
      { name: "Basic Mathematics", icon: Calculator },
      { name: "Physics", icon: Atom },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Biology", icon: Microscope },
      { name: "History", icon: Landmark },
      { name: "Geography", icon: Globe },
      { name: "Political Science", icon: Landmark },
      { name: "Economics", icon: Calculator },
      { name: "Computer Science", icon: Laptop },
    ],
  },
  {
    id: "science",
    number: "04",
    title: "Senior Secondary – Science",
    range: "Classes 11–12",
    description: "Focused learning for Science stream students.",
    icon: Atom,
    subjects: [
      { name: "Physics", icon: Atom },
      { name: "Chemistry", icon: FlaskConical },
      { name: "Mathematics", icon: Calculator },
      { name: "Biology", icon: Microscope },
      { name: "English", icon: Languages },
      { name: "Applied Mathematics", icon: Calculator },
      { name: "Computer Science", icon: Laptop },
      { name: "Information Practices", icon: Laptop },
      { name: "Physical Education", icon: Dumbbell },
    ],
  },
  {
    id: "commerce",
    number: "05",
    title: "Senior Secondary – Commerce",
    range: "Classes 11–12",
    description: "Academic guidance for Commerce stream subjects.",
    icon: BriefcaseBusiness,
    subjects: [
      { name: "Accountancy", icon: Calculator },
      { name: "Business Studies", icon: BriefcaseBusiness },
      { name: "Economics", icon: Calculator },
      { name: "Applied Mathematics", icon: Calculator },
      { name: "English", icon: Languages },
      { name: "Computer Science", icon: Laptop },
      { name: "Information Practices", icon: Laptop },
      { name: "Physical Education", icon: Dumbbell },
    ],
  },
  {
    id: "jee",
    number: "06",
    title: "JEE Preparation",
    range: "Engineering Entrance",
    description: "Concept-based learning for engineering entrance exams.",
    icon: Brain,
    subjects: [
      { name: "JEE Physics", icon: Atom },
      { name: "JEE Chemistry", icon: FlaskConical },
      { name: "JEE Mathematics", icon: Calculator },
    ],
  },
  {
    id: "neet",
    number: "07",
    title: "NEET Preparation",
    range: "Medical Entrance",
    description: "Focused Science preparation with NCERT-oriented learning.",
    icon: Microscope,
    subjects: [
      { name: "NEET Physics", icon: Atom },
      { name: "NEET Chemistry", icon: FlaskConical },
      { name: "Botany", icon: Microscope },
      { name: "Zoology", icon: Microscope },
    ],
  },
];

export default function Subjects() {
  // Initially, all classes remain closed.
  const [activeClass, setActiveClass] = useState(null);

  const toggleClass = (id) => {
    setActiveClass((current) => (current === id ? null : id));
  };

  return (
    <section className="subjects-section" id="subjects">
      <div className="subjects-container">

        <div className="subjects-heading">
          <span className="subjects-eyebrow">
            <GraduationCap size={17} />
            CLASS-WISE SUBJECTS
          </span>

          <h2>
            Choose Your Class,
            <span> Explore Your Subjects</span>
          </h2>

          <p>
            Select your academic class or preparation programme
            to explore the subjects available for personalised
            tuition and academic guidance.
          </p>
        </div>

        <div className="subjects-accordion">
          {classGroups.map((group) => {
            const Icon = group.icon;
            const isOpen = activeClass === group.id;

            return (
              <article
                className={`subject-group ${isOpen ? "is-open" : ""}`}
                key={group.id}
              >
                <button
                  type="button"
                  className="subject-group-trigger"
                  onClick={() => toggleClass(group.id)}
                  aria-expanded={isOpen}
                  aria-controls={`subjects-panel-${group.id}`}
                >
                  <span className="subject-group-number">
                    {group.number}
                  </span>

                  <span className="subject-group-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <span className="subject-group-info">
                    <span className="subject-group-title">
                      {group.title}
                    </span>

                    <span className="subject-group-description">
                      {group.range} · {group.subjects.length} Subjects
                    </span>
                  </span>

                  <span className="subject-group-chevron">
                    <ChevronDown size={21} />
                  </span>
                </button>

                <div
                  className="subject-group-panel"
                  id={`subjects-panel-${group.id}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="subject-group-panel-inner">
                    <p className="subject-group-intro">
                      {group.description}
                    </p>

                    <div className="subject-group-grid">
                      {group.subjects.map((subject, index) => {
                        const SubjectIcon = subject.icon;

                        return (
                          <div
                            className="subject-entry"
                            key={`${subject.name}-${index}`}
                            style={{ "--subject-index": index }}
                          >
                            <span className="subject-entry-icon">
                              <SubjectIcon
                                size={19}
                                strokeWidth={1.8}
                              />
                            </span>

                            <span>{subject.name}</span>
                          </div>
                        );
                      })}
                    </div>
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
