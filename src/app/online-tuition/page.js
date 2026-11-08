
import Link from "next/link";
import {
  Monitor,
  Wifi,
  Laptop,
  Video,
  BookOpen,
  Clock,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ClipboardList,
  Users,
  Headphones,
} from "lucide-react";

import "@/styles/pages/online-tuition.css";

const benefits = [
  {
    icon: Monitor,
    title: "Learn from Anywhere",
    description:
      "Explore online tuition options without travelling to a tutor's location.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Share your preferred days and timings to discuss a suitable learning schedule.",
  },
  {
    icon: Video,
    title: "Interactive Sessions",
    description:
      "Learn through online sessions with a suitable tutor, depending on availability.",
  },
  {
    icon: BookOpen,
    title: "Subject-focused Support",
    description:
      "Discuss your academic requirements and the subjects where you need guidance.",
  },
];

const learningLevels = [
  {
    title: "Primary Classes",
    range: "Classes 1–5",
    subjects: "English, Hindi, Mathematics, EVS and other school subjects",
    color: "blue",
  },
  {
    title: "Middle School",
    range: "Classes 6–8",
    subjects: "Mathematics, Science, English and Social Science",
    color: "green",
  },
  {
    title: "Secondary Classes",
    range: "Classes 9–10",
    subjects: "Mathematics, Science, English and board subjects",
    color: "purple",
  },
  {
    title: "Senior Secondary",
    range: "Classes 11–12",
    subjects: "Science and Commerce stream subjects",
    color: "orange",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "Share Your Requirements",
    description:
      "Tell us your class, subjects, learning goals and preferred timings.",
  },
  {
    icon: Users,
    title: "Discuss Tutor Options",
    description:
      "Our team reviews your requirements and discusses suitable online tutor options based on availability.",
  },
  {
    icon: GraduationCap,
    title: "Confirm and Start Learning",
    description:
      "After the tutor and schedule are mutually confirmed, online learning sessions can begin.",
  },
];

const onlineFaqs = [
  {
    question: "What do I need for online tuition?",
    answer:
      "You generally need a suitable internet connection and a device such as a laptop, desktop, tablet or smartphone. Specific session requirements can be discussed with the tutor.",
  },
  {
    question: "Which classes are available for online tuition?",
    answer:
      "Students from Classes 1 to 12 can enquire. Availability depends on the required subject and suitable tutor.",
  },
  {
    question: "Can I choose my online tuition timings?",
    answer:
      "You can share your preferred days and timings. The final schedule depends on tutor availability and mutual confirmation.",
  },
  {
    question: "Can students outside Dehradun enquire?",
    answer:
      "Yes, students can enquire about online tuition from other locations. Tutor availability and arrangements will be discussed individually.",
  },
  {
    question: "How can I request a demo session?",
    answer:
      "Contact our team with your class, subjects and preferred date and time. Your demo request will be reviewed and confirmed by the team.",
  },
];

export default function OnlineTuitionPage() {
  return (
    <main className="online-tuition-page">
      {/* HERO */}
      <section className="ot-hero">
        <div className="ot-hero-container">
          <span className="ot-eyebrow">
            FLEXIBLE ONLINE LEARNING
          </span>

          <h1>
            Online Tuition for
            <span> Learning Without Distance</span>
          </h1>

          <p>
            Explore online tuition options for school students with
            subject-focused guidance, convenient learning arrangements
            and scheduling based on tutor availability.
          </p>

          <div className="ot-hero-actions">
            <Link href="/contact" className="ot-primary-btn">
              Enquire for Online Tuition <ArrowRight size={19} />
            </Link>

            <a href="tel:+917037374833" className="ot-secondary-btn">
              Call Us: +91 70373 74833
            </a>
          </div>

          <div className="ot-hero-note">
            <Wifi size={17} />
            <span>Learn remotely with a suitable tutor</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ot-intro">
        <div className="ot-container ot-intro-grid">
          <div className="ot-intro-content">
            <span className="ot-section-label">ONLINE TUITION</span>

            <h2>
              Learn from Anywhere
              <span> with Online Tuition</span>
            </h2>

            <p>
              Online tuition gives students the opportunity to explore
              academic guidance remotely, without needing to travel
              to a tutor&apos;s location.
            </p>

            <p>
              Share your class, subjects, learning requirements and
              preferred schedule. Our team will review your enquiry
              and discuss suitable online tutor options based on
              availability.
            </p>

            <Link href="/contact" className="ot-text-link">
              Discuss Your Requirements <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ot-intro-visual">
            <div className="ot-visual-card">
              <div className="ot-visual-icon">
                <Laptop size={43} />
              </div>

              <h3>Online Learning</h3>

              <p>
                Academic guidance through convenient remote learning
                arrangements.
              </p>

              <div className="ot-visual-divider" />

              <div className="ot-visual-point">
                <CheckCircle2 size={18} />
                Remote learning convenience
              </div>

              <div className="ot-visual-point">
                <CheckCircle2 size={18} />
                Subject-focused guidance
              </div>

              <div className="ot-visual-point">
                <CheckCircle2 size={18} />
                Flexible schedule discussion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ot-benefits">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">WHY ONLINE TUITION?</span>

            <h2>
              Benefits of <span>Online Learning</span>
            </h2>

            <p>
              Explore online learning arrangements according to
              your academic needs and preferences.
            </p>
          </div>

          <div className="ot-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="ot-benefit-card" key={benefit.title}>
                  <div className="ot-benefit-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING LEVELS */}
      <section className="ot-levels">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">ACADEMIC LEVELS</span>

            <h2>
              Online Tuition for <span>Different Classes</span>
            </h2>

            <p>
              Students can enquire about tuition support for these
              academic levels. Subject and tutor availability will
              be discussed individually.
            </p>
          </div>

          <div className="ot-levels-grid">
            {learningLevels.map((level) => (
              <article
                className={`ot-level-card ot-level-${level.color}`}
                key={level.title}
              >
                <span className="ot-level-range">{level.range}</span>

                <h3>{level.title}</h3>

                <p>{level.subjects}</p>

                <Link href="/contact">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="ot-requirements">
        <div className="ot-container ot-requirements-grid">
          <div className="ot-requirements-content">
            <span className="ot-section-label">GETTING STARTED</span>

            <h2>
              What You Need for
              <span> Online Tuition</span>
            </h2>

            <p>
              A few basic things can help you prepare for an online
              learning session. The exact platform and session
              arrangements can be discussed with your tutor.
            </p>

            <ul>
              <li>
                <CheckCircle2 size={19} />
                <span>Laptop, desktop, tablet or smartphone</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Stable internet connection</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Quiet and comfortable study space</span>
              </li>
              <li>
                <CheckCircle2 size={19} />
                <span>Notebook and required study material</span>
              </li>
            </ul>
          </div>

          <div className="ot-requirements-visual">
            <div className="ot-device-card">
              <div className="ot-device-icon">
                <Monitor size={38} />
              </div>

              <h3>Ready to Learn Online?</h3>

              <p>
                Share your requirements and explore suitable
                online tuition arrangements.
              </p>

              <div className="ot-device-icons">
                <Laptop size={27} />
                <Monitor size={27} />
                <Headphones size={27} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ot-process">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">SIMPLE PROCESS</span>

            <h2>
              How to Get <span>Online Tuition</span>
            </h2>
          </div>

          <div className="ot-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="ot-process-card" key={step.title}>
                  <span className="ot-process-number">
                    0{index + 1}
                  </span>

                  <div className="ot-process-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ot-faq">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">ONLINE TUITION FAQ</span>

            <h2>
              Common <span>Questions</span>
            </h2>
          </div>

          <div className="ot-faq-list">
            {onlineFaqs.map((faq) => (
              <details className="ot-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ot-cta">
        <div className="ot-cta-content">
          <span>LEARNING CAN HAPPEN ANYWHERE</span>

          <h2>Explore Online Tuition Options</h2>

          <p>
            Tell us about your class, subjects and preferred schedule.
            Our team can help you discuss available options.
          </p>

          <Link href="/contact" className="ot-cta-button">
            Contact Us <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
