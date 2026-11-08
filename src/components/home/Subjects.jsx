import {
  Languages,
  Calculator,
  Atom,
  FlaskConical,
  Microscope,
  BookOpen,
  Globe,
  Landmark,
  Laptop,
  BriefcaseBusiness,
  Dumbbell,
  Brain,
} from "lucide-react";

import "@/styles/home/subjects.css";

const subjectCategories = [
  {
    title: "Languages",
    subjects: [
      { name: "English", icon: Languages, color: "blue" },
      { name: "Hindi", icon: BookOpen, color: "orange" },
      { name: "Sanskrit", icon: Languages, color: "purple" },
    ],
  },
  {
    title: "Mathematics",
    subjects: [
      { name: "Mathematics", icon: Calculator, color: "blue" },
      { name: "Basic Mathematics", icon: Calculator, color: "cyan" },
      { name: "Applied Mathematics", icon: Calculator, color: "purple" },
      { name: "Statistics", icon: Calculator, color: "green" },
    ],
  },
  {
    title: "Science",
    subjects: [
      { name: "Science", icon: FlaskConical, color: "green" },
      { name: "Physics", icon: Atom, color: "purple" },
      { name: "Chemistry", icon: FlaskConical, color: "green" },
      { name: "Biology", icon: Microscope, color: "red" },
      { name: "Environmental Studies (EVS)", icon: Globe, color: "orange" },
    ],
  },
  {
    title: "Social Science",
    subjects: [
      { name: "History", icon: Landmark, color: "orange" },
      { name: "Geography", icon: Globe, color: "blue" },
      { name: "Political Science", icon: Landmark, color: "purple" },
      { name: "Civics", icon: BookOpen, color: "green" },
      { name: "Economics", icon: Calculator, color: "teal" },
    ],
  },
  {
    title: "Commerce",
    subjects: [
      { name: "Accountancy", icon: Calculator, color: "blue" },
      { name: "Business Studies", icon: BriefcaseBusiness, color: "orange" },
      { name: "Economics", icon: Calculator, color: "green" },
      { name: "Applied Mathematics", icon: Calculator, color: "purple" },
    ],
  },
  {
    title: "Computer Studies",
    subjects: [
      { name: "Computer Studies", icon: Laptop, color: "cyan" },
      { name: "Computer Science", icon: Laptop, color: "blue" },
      { name: "Information Practices", icon: Laptop, color: "purple" },
    ],
  },
  {
    title: "Other Academic Subjects",
    subjects: [
      { name: "Physical Education", icon: Dumbbell, color: "green" },
      { name: "General Knowledge", icon: BookOpen, color: "orange" },
      { name: "Moral Education", icon: BookOpen, color: "teal" },
    ],
  },
  {
    title: "JEE Preparation",
    subjects: [
      { name: "JEE Physics", icon: Atom, color: "purple" },
      { name: "JEE Chemistry", icon: FlaskConical, color: "green" },
      { name: "JEE Mathematics", icon: Calculator, color: "blue" },
    ],
  },
  {
    title: "NEET Preparation",
    subjects: [
      { name: "NEET Physics", icon: Atom, color: "purple" },
      { name: "NEET Chemistry", icon: FlaskConical, color: "green" },
      { name: "Botany", icon: Microscope, color: "teal" },
      { name: "Zoology", icon: Microscope, color: "red" },
    ],
  },
];

export default function Subjects() {
  return (
    <section className="subjects-section" id="subjects">
      <div className="subjects-container">

        <div className="subjects-heading">
          <span className="subjects-badge">
            OUR SUBJECTS
          </span>

          <h2>
            Explore Our
            <span> Academic Subjects</span>
          </h2>

          <p>
            Choose from a wide range of school subjects,
            academic streams and competitive exam subjects.
          </p>
        </div>

        <div className="subjects-categories">
          {subjectCategories.map((category) => (
            <div
              className="subject-category"
              key={category.title}
            >
              <h3 className="subject-category-title">
                {category.title}
              </h3>

              <div className="subjects-grid">
                {category.subjects.map((subject, index) => {
                  const Icon = subject.icon;

                  return (
                    <article
                      className={`subject-card subject-${subject.color}`}
                      key={`${subject.name}-${index}`}
                    >
                      <div className="subject-icon">
                        <Icon
                          size={24}
                          strokeWidth={1.9}
                        />
                      </div>

                      <h4>{subject.name}</h4>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}