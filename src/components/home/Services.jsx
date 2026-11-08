
import {
  House,
  Monitor,
  UserRound,
  Users,
  BookOpen,
  GraduationCap,
  Check,
} from "lucide-react";

import "@/styles/home/services.css";

const services = [
  {
    icon: House,
    title: "Home Tuition",
    description:
      "Learn at home with a suitable tutor and personalised academic guidance.",
    features: [
      "Personal attention",
      "Flexible timings",
      "Comfortable learning",
    ],
    color: "blue",
  },
  {
    icon: Monitor,
    title: "Online Tuition",
    description:
      "Study from anywhere with flexible and interactive online learning sessions.",
    features: [
      "Learn from home",
      "Interactive sessions",
      "Flexible learning",
    ],
    color: "green",
  },
  {
    icon: UserRound,
    title: "One-to-One Tuition",
    description:
      "Get individual attention with lessons based on your learning needs.",
    features: [
      "Individual guidance",
      "Personalised lessons",
      "Focused learning",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Group Tuition",
    description:
      "Learn alongside other students in a structured and supportive environment.",
    features: [
      "Collaborative learning",
      "Knowledge sharing",
      "Supportive environment",
    ],
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "Board Exam Preparation",
    description:
      "Get subject guidance and preparation support for CBSE, ICSE and State Boards.",
    features: [
      "CBSE and ICSE Boards",
      "State and Other Boards",
      "Exam-focused learning",
    ],
    color: "pink",
  },
  {
    icon: GraduationCap,
    title: "JEE & NEET Preparation",
    description:
      "Build strong subject understanding with focused competitive exam guidance.",
    features: [
      "Physics, Chemistry & Maths",
      "Biology preparation",
      "Concept-based learning",
    ],
    color: "teal",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* SECTION HEADING */}
        <div className="services-heading">
          <span className="services-eyebrow">
            WHAT WE OFFER
          </span>

          <h2>
            Learning Solutions
            <span> That Fit Your Goals</span>
          </h2>

          <p>
            Explore tuition options designed to support different
            learning preferences, academic levels and educational goals.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className={`service-card service-${service.color}`}
                key={service.title}
                style={{ "--card-index": index }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon
                      size={27}
                      strokeWidth={1.9}
                    />
                  </div>

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check
                        size={17}
                        strokeWidth={2.2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
