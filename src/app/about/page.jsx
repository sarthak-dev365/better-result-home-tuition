
import Link from "next/link";
import {
  Target,
  Eye,
  BookOpen,
  GraduationCap,
  House,
  Monitor,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "@/styles/pages/about.css";

const learningFeatures = [
  "Home and online tuition options",
  "Learning support for Classes 1–12",
  "CBSE, ICSE, ISC and State Boards",
  "Enquiries for JEE and NEET preparation",
  "Individual learning requirements",
  "Communication with parents",
];

const approachCards = [
  {
    icon: BookOpen,
    title: "Understand Learning Needs",
    description:
      "We begin by understanding the student's class, subjects, learning goals and tuition preferences.",
  },
  {
    icon: Users,
    title: "Explore Suitable Tutors",
    description:
      "We review the requirements and discuss suitable tutor options based on availability.",
  },
  {
    icon: GraduationCap,
    title: "Support the Learning Journey",
    description:
      "Our aim is to support students through personalised guidance and a suitable learning schedule.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-container">
          <span className="about-eyebrow">ABOUT BETTER RESULT HOME TUITION</span>

          <h1>
            Helping Students Move
            <span> Towards Better Learning</span>
          </h1>

          <p>
            Learn Better. Perform Better. Achieve More.
            We aim to make home and online tuition more accessible
            through suitable learning support and personalised guidance.
          </p>

          <div className="about-hero-actions">
            <Link href="/contact" className="about-primary-btn">
              Contact Us <ArrowRight size={19} />
            </Link>

            <Link href="/services" className="about-secondary-btn">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-intro-content">
            <span className="about-section-label">WHO WE ARE</span>

            <h2>
              About <span>Our Organisation</span>
            </h2>

            <p>
              Better Result Home Tuition is a home and online tuition
              service based in Dehradun, Uttarakhand. We aim to connect
              students and parents with suitable tuition options according
              to their academic requirements.
            </p>

            <p>
              From school-level learning to enquiries for competitive
              examination preparation, our focus is on understanding
              individual requirements and helping students find suitable
              academic guidance.
            </p>

            <p>
              We believe that every student&apos;s learning journey deserves
              attention, encouragement and the right support.
            </p>
          </div>

          <div className="about-intro-visual">
            <div className="about-visual-card">
              <div className="about-visual-icon">
                <GraduationCap size={48} strokeWidth={1.6} />
              </div>

              <span className="about-visual-title">
                Better Learning
              </span>

              <span className="about-visual-subtitle">
                A step towards a brighter academic journey
              </span>

              <div className="about-visual-points">
                <span><CheckCircle2 size={17} /> Personalised Guidance</span>
                <span><CheckCircle2 size={17} /> Flexible Learning</span>
                <span><CheckCircle2 size={17} /> Student-focused Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">OUR PURPOSE</span>
            <h2>
              What We <span>Believe In</span>
            </h2>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card about-mission">
              <div className="about-purpose-icon">
                <Target size={30} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To help students access suitable tuition support,
                personalised academic guidance and flexible learning
                opportunities according to their needs.
              </p>
            </article>

            <article className="about-purpose-card about-vision">
              <div className="about-purpose-icon">
                <Eye size={30} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To build a supportive learning environment where students
                can develop their understanding, confidence and interest
                in education.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="about-approach">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-section-label">HOW WE WORK</span>

            <h2>
              Our Approach to <span>Learning Support</span>
            </h2>

            <p>
              We focus on understanding requirements before discussing
              suitable tuition arrangements.
            </p>
          </div>

          <div className="about-approach-grid">
            {approachCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article className="about-approach-card" key={card.title}>
                  <span className="about-approach-number">
                    0{index + 1}
                  </span>

                  <div className="about-approach-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="about-learning">
        <div className="about-container about-learning-grid">
          <div className="about-learning-content">
            <span className="about-section-label">LEARNING OPPORTUNITIES</span>

            <h2>
              Learning Options for
              <span> Different Academic Goals</span>
            </h2>

            <p>
              Students and parents can enquire about different tuition
              options based on their class, subjects and learning
              preferences. Availability is discussed according to
              individual requirements and tutor availability.
            </p>

            <ul>
              {learningFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={19} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-learning-options">
            <article className="about-option-card">
              <div className="about-option-icon">
                <House size={31} />
              </div>

              <h3>Home Tuition</h3>

              <p>
                Explore tuition arrangements at home according to
                location and tutor availability.
              </p>
            </article>

            <article className="about-option-card">
              <div className="about-option-icon">
                <Monitor size={31} />
              </div>

              <h3>Online Tuition</h3>

              <p>
                Explore online learning options with suitable tutors
                and flexible scheduling.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="about-cta-container">
          <span>LET&apos;S START A LEARNING JOURNEY</span>

          <h2>
            Looking for the Right Tuition Support?
          </h2>

          <p>
            Tell us about your learning requirements.
            Our team will help you explore suitable options.
          </p>

          <Link href="/contact" className="about-cta-btn">
            Get in Touch <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
