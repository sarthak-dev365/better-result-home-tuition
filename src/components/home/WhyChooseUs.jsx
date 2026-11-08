import {
  GraduationCap,
  House,
  Monitor,
  BookOpen,
  CalendarDays,
  Target,
  Users,
  Award,
} from "lucide-react";

import "@/styles/home/why-choose-us.css";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description:
      "Learn with qualified and experienced teachers who guide students according to their learning needs.",
  },
  {
    icon: House,
    title: "Home Tuition",
    description:
      "Get personalised learning support at your home with a suitable tutor.",
  },
  {
    icon: Monitor,
    title: "Online Tuition",
    description:
      "Learn from anywhere through flexible online tuition sessions.",
  },
  {
    icon: BookOpen,
    title: "Multiple Boards",
    description:
      "Tuition support for CBSE, ICSE and State Board students.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description:
      "Choose a suitable weekly schedule according to your availability.",
  },
  {
    icon: Target,
    title: "Personalised Learning",
    description:
      "Learning support based on the student's class, subjects and individual requirements.",
  },
  {
    icon: Users,
    title: "Multiple Learning Levels",
    description:
      "Tuition options for students from Classes 1 to 12.",
  },
  {
    icon: Award,
    title: "Exam Preparation",
    description:
      "Academic guidance for board examinations, JEE and NEET preparation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-heading">
          <span className="why-eyebrow">
            WHY BETTER RESULT HOME TUITION?
          </span>

          <h2>
            A Better Way to
            <span> Learn and Grow</span>
          </h2>

          <p>
            Every student has a different learning journey.
            We help students find suitable tuition support
            through personalised guidance and flexible learning options.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article className="why-card" key={feature.title}>
                <div className="why-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <span className="why-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}