import Link from "next/link";
import "@/styles/home/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Decorations */}
      <div className="hero-background-shape" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">
              ✦
            </span>
            <span>
              YOUR JOURNEY TO BETTER LEARNING STARTS HERE
            </span>
          </div>

          <h1 className="hero-title">
            Get One-to-One
            <span className="hero-title-highlight">
              Home Tutor / Online Tutor
            </span>
            for Every Learning Goal
          </h1>

          <p className="hero-description">
            Personalized Home and Online Tuition for Classes
            1–5, 6–10 and 11–12. Get guidance for CBSE, ICSE,
            State Boards, Commerce, JEE and NEET preparation.
            Build confidence with quality learning and
            dedicated guidance.
          </p>

          <div className="hero-buttons">
            <Link
              href="/find-a-tutor"
              className="hero-primary-btn"
            >
              <span>Find a Tutor</span>
              <span className="hero-btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/become-a-teacher"
              className="hero-secondary-btn"
            >
              <span>Join as a Tutor</span>
              <span className="hero-btn-plus" aria-hidden="true">
                +
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}