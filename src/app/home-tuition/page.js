
import Link from "next/link";
import {
  House,
  UserRound,
  BookOpen,
  Clock,
  MapPin,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ClipboardList,
  Users,
} from "lucide-react";

import "@/styles/pages/home-tuition.css";

const benefits = [
  {
    icon: UserRound,
    title: "Individual Attention",
    description:
      "Explore one-to-one learning support according to the student's academic requirements.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Share your preferred days and timings so a suitable schedule can be discussed.",
  },
  {
    icon: House,
    title: "Learn at Home",
    description:
      "Study in a familiar home environment with a suitable tutor, subject to availability.",
  },
  {
    icon: BookOpen,
    title: "Subject-focused Support",
    description:
      "Discuss the subjects and topics where the student needs academic guidance.",
  },
];

const classGroups = [
  {
    title: "Primary Classes",
    range: "Classes 1–5",
    subjects: "English, Hindi, Mathematics, EVS and other school subjects",
    color: "blue",
  },
  {
    title: "Middle School",
    range: "Classes 6–8",
    subjects: "Mathematics, Science, English, Social Science and more",
    color: "green",
  },
  {
    title: "Secondary Classes",
    range: "Classes 9–10",
    subjects: "Mathematics, Science, English and other board subjects",
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
      "Tell us the student's class, subjects, location and preferred timings.",
  },
  {
    icon: Users,
    title: "Discuss Tutor Options",
    description:
      "Our team reviews your requirements and discusses suitable tutor options based on availability.",
  },
  {
    icon: GraduationCap,
    title: "Confirm and Start Learning",
    description:
      "After the tutor and schedule are mutually confirmed, the learning sessions can begin.",
  },
];

const homeTuitionFaqs = [
  {
    question: "Which areas do you currently serve?",
    answer:
      "Our home tuition service is based in Dehradun, Uttarakhand. Share your locality with us to discuss tutor availability.",
  },
  {
    question: "Which classes can enquire for home tuition?",
    answer:
      "Students from Classes 1 to 12 can enquire. Availability depends on the required subject, class and suitable tutor.",
  },
  {
    question: "Can I choose the tuition timings?",
    answer:
      "You can share your preferred days and timings. The final schedule depends on tutor availability and mutual confirmation.",
  },
  {
    question: "How can I request a demo class?",
    answer:
      "Contact our team with your class, subjects and preferred date and time. Your demo request will be reviewed and confirmed by the team.",
  },
];

export default function HomeTuitionPage() {
  return (
    <main className="home-tuition-page">
      {/* HERO */}
      <section className="ht-hero">
        <div className="ht-hero-container">
          <span className="ht-eyebrow">
            PERSONALised HOME LEARNING
          </span>

          <h1>
            Find the Right Home Tutor
            <span> for Your Learning Needs</span>
          </h1>

          <p>
            Explore home tuition options for school students with
            individual academic guidance, flexible scheduling and
            learning support based on tutor availability.
          </p>

          <div className="ht-hero-actions">
            <Link href="/contact" className="ht-primary-btn">
              Enquire for Home Tuition <ArrowRight size={19} />
            </Link>

            <a href="tel:+917037374833" className="ht-secondary-btn">
              Call Us: +91 70373 74833
            </a>
          </div>

          <div className="ht-hero-note">
            <MapPin size={17} />
            <span>Based in Dehradun, Uttarakhand</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ht-intro">
        <div className="ht-container ht-intro-grid">
          <div className="ht-intro-content">
            <span className="ht-section-label">HOME TUITION</span>

            <h2>
              Learning Support
              <span> in the Comfort of Home</span>
            </h2>

            <p>
              Every student has different learning requirements.
              Home tuition allows students and parents to explore
              individual academic support in a familiar environment.
            </p>

            <p>
              Share your class, subjects, locality and preferred
              schedule with us. Our team will review your requirements
              and discuss suitable tutor options based on availability.
            </p>

            <Link href="/contact" className="ht-text-link">
              Discuss Your Requirements <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ht-intro-visual">
            <div className="ht-visual-card">
              <div className="ht-visual-icon">
                <House size={43} />
              </div>

              <h3>Home Tuition</h3>

              <p>
                Personalised academic guidance for your learning journey.
              </p>

              <div className="ht-visual-divider" />

              <div className="ht-visual-point">
                <CheckCircle2 size={18} />
                Individual learning support
              </div>

              <div className="ht-visual-point">
                <CheckCircle2 size={18} />
                Preferred schedule discussion
              </div>

              <div className="ht-visual-point">
                <CheckCircle2 size={18} />
                Suitable tutor options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ht-benefits">
        <div className="ht-container">
          <div className="ht-section-heading">
            <span className="ht-section-label">WHY HOME TUITION?</span>

            <h2>
              Benefits of <span>Home Tuition</span>
            </h2>

            <p>
              Explore learning arrangements that can be discussed
              according to each student&apos;s requirements.
            </p>
          </div>

          <div className="ht-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="ht-benefit-card" key={benefit.title}>
                  <div className="ht-benefit-icon">
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

      {/* CLASSES */}
      <section className="ht-classes">
        <div className="ht-container">
          <div className="ht-section-heading">
            <span className="ht-section-label">ACADEMIC LEVELS</span>

            <h2>
              Home Tuition for <span>Different Classes</span>
            </h2>

            <p>
              Students can enquire about tuition support for the
              following academic levels. Subject and tutor availability
              will be discussed individually.
            </p>
          </div>

          <div className="ht-classes-grid">
            {classGroups.map((group) => (
              <article
                className={`ht-class-card ht-class-${group.color}`}
                key={group.title}
              >
                <span className="ht-class-range">{group.range}</span>

                <h3>{group.title}</h3>

                <p>{group.subjects}</p>

                <Link href="/contact">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ht-process">
        <div className="ht-container">
          <div className="ht-section-heading">
            <span className="ht-section-label">SIMPLE PROCESS</span>

            <h2>
              How to Get <span>Home Tuition</span>
            </h2>
          </div>

          <div className="ht-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="ht-process-card" key={step.title}>
                  <span className="ht-process-number">
                    0{index + 1}
                  </span>

                  <div className="ht-process-icon">
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
      <section className="ht-faq">
        <div className="ht-container">
          <div className="ht-section-heading">
            <span className="ht-section-label">HOME TUITION FAQ</span>

            <h2>
              Common <span>Questions</span>
            </h2>
          </div>

          <div className="ht-faq-list">
            {homeTuitionFaqs.map((faq) => (
              <details className="ht-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ht-cta">
        <div className="ht-cta-content">
          <span>LET&apos;S DISCUSS YOUR REQUIREMENTS</span>

          <h2>Looking for Home Tuition in Dehradun?</h2>

          <p>
            Share your class, subjects and locality with our team
            to discuss available home tuition options.
          </p>

          <Link href="/contact" className="ht-cta-button">
            Contact Us <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
