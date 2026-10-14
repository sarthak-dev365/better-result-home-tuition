import Link from "next/link";
import "../../styles/home/hero-section.css";

const features = [
  {
    title: "Personalised Attention",
    description: "Learning support based on each student's needs.",
    theme: "green",
  },
  {
    title: "Flexible Learning",
    description: "Choose home tuition or online tuition.",
    theme: "blue",
  },
  {
    title: "Academic Guidance",
    description: "Build strong concepts and exam confidence.",
    theme: "orange",
  },
];

const learningOptions = [
  {
    title: "Primary Classes",
    subtitle: "Classes 1–5",
    category: "primary",
  },
  {
    title: "Middle & Secondary",
    subtitle: "Classes 6–10",
    category: "secondary",
  },
  {
    title: "Board Exam Preparation",
    subtitle: "CBSE · ICSE · State Boards",
    category: "board-exams",
  },
  {
    title: "Commerce",
    subtitle: "Classes 11–12",
    category: "commerce",
  },
  {
    title: "JEE Preparation",
    subtitle: "Engineering entrance",
    category: "jee",
  },
  {
    title: "NEET Preparation",
    subtitle: "Medical entrance",
    category: "neet",
  },
];

export default function HeroSection() {
  return (
    <section className="br-hero">
      <div className="br-hero-background" aria-hidden="true">
        <div className="br-hero-light" />
        <div className="br-hero-lines" />
        <div className="br-hero-shine" />
      </div>

      <div className="br-hero-container">
        <div className="br-hero-content">
          <div className="br-hero-eyebrow">
            <span className="br-hero-eyebrow-line" />
            BETTER RESULT HOME TUITION
          </div>

          <h1>
            Better learning.
            <span>Brighter results.</span>
          </h1>

          <p className="br-hero-description">
            Discover personalised home and online tuition for Classes 1–12,
            board examinations, Commerce, JEE and NEET. Find learning support
            that matches your academic goals and helps you build confidence.
          </p>

          <div className="br-hero-tags">
            <span>Classes 1–12</span>
            <span>CBSE · ICSE · State Boards</span>
            <span>JEE &amp; NEET</span>
          </div>

          <div className="br-hero-actions">
            <Link
              href="/find-a-tutor"
              className="br-hero-btn br-hero-btn-primary"
            >
              Find a Tutor <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/become-a-teacher"
              className="br-hero-btn br-hero-btn-secondary"
            >
              Become a Tutor
            </Link>
          </div>

          <div className="br-hero-trust">
            <span className="br-hero-trust-check" aria-hidden="true">
              ✓
            </span>
            <p>
              Personalised support. Flexible learning. Better confidence.
            </p>
          </div>
        </div>

        <div className="br-hero-right">
          <div className="br-hero-card">
            <div className="br-hero-card-heading">
              <div>
                <span className="br-hero-kicker">
                  YOUR LEARNING JOURNEY
                </span>
                <h2>Learning that fits your goals.</h2>
              </div>

              <span className="br-hero-card-mark" aria-hidden="true">
                ✦
              </span>
            </div>

            <p className="br-hero-card-intro">
              Explore school tuition, board exams and entrance preparation.
            </p>

            <div className="br-hero-features">
              {features.map((feature) => (
                <div
                  className={`br-hero-feature br-hero-feature-${feature.theme}`}
                  key={feature.title}
                >
                  <span className="br-hero-feature-check" aria-hidden="true">
                    ✓
                  </span>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="br-hero-options-heading">
              <h3>Explore learning options</h3>
              <span>FIND YOUR FIT</span>
            </div>

            <div className="br-hero-options">
              {learningOptions.map((option, index) => (
                <Link
                  href={`/find-a-tutor?category=${option.category}`}
                  className="br-hero-option"
                  key={option.category}
                >
                  <span className="br-hero-option-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="br-hero-option-copy">
                    <strong>{option.title}</strong>
                    <small>{option.subtitle}</small>
                  </span>

                  <span className="br-hero-option-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="br-hero-modes">
              <Link href="/find-a-tutor?mode=home">
                <span aria-hidden="true">⌂</span>
                Home Tuition
              </Link>

              <Link href="/find-a-tutor?mode=online">
                <span aria-hidden="true">↗</span>
                Online Tuition
              </Link>
            </div>

            <div className="br-hero-card-footer">
              <span />
              Your goals. Your pace. Your progress.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}