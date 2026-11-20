
import {
  GraduationCap,
  House,
  Monitor,
  BookOpen,
  Target,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Link from "next/link";
import "@/styles/home/why-choose-us.css";

const highlights = [
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description: "Qualified and experienced tutors",
  },
  {
    icon: House,
    title: "Home Tuition",
    description: "Personal learning at your home",
  },
  {
    icon: Monitor,
    title: "Online Tuition",
    description: "Learn from anywhere",
  },
  {
    icon: BookOpen,
    title: "Classes 1–12",
    description: "Academic support for school students",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description: "Board, JEE and NEET guidance",
  },
  {
    icon: Users,
    title: "Personalised Learning",
    description: "Support based on student needs",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-promo">
          <div className="why-promo-content">
            <span className="why-eyebrow">
              BETTER LEARNING STARTS HERE
            </span>

            <h2>
              Your Search for the
              <span> Right Home Tutor </span>
              Ends Here!
            </h2>

            <p className="why-description">
              Every student deserves the right guidance to learn,
              improve and achieve better results. Find suitable
              home and online tuition support with experienced
              teachers for different classes and subjects.
            </p>

            <p className="why-supporting-text">
              Whether you need regular academic support, board
              examination preparation or guidance for competitive
              exams, we are here to help you take the next step
              in your learning journey.
            </p>

            <Link href="/free-demo" className="why-demo-button">
              Book a Free Demo
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="why-promo-side">
            <div className="why-side-heading">
              <span className="why-side-label">LEARNING SUPPORT</span>
              <h3>Everything You Need to Learn Better</h3>
              <p>
                Flexible tuition options and academic guidance
                for every learning journey.
              </p>
            </div>

            <div className="why-highlight-list">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="why-highlight" key={item.title}>
                    <div className="why-highlight-icon">
                      <Icon size={21} strokeWidth={1.9} />
                    </div>

                    <div className="why-highlight-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>

                    <CheckCircle2
                      className="why-highlight-check"
                      size={19}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
