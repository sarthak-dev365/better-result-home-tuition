
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import "@/styles/home/free-demo.css";

export default function FreeDemo() {
  return (
    <section className="free-demo-section" id="free-demo">
      <div className="free-demo-decoration free-demo-decoration-one" />
      <div className="free-demo-decoration free-demo-decoration-two" />

      <div className="free-demo-container">
        <div className="free-demo-visual">
          <div className="free-demo-visual-card">
            <div className="free-demo-icon free-demo-icon-main">
              <GraduationCap size={54} strokeWidth={1.6} />
            </div>

            <div className="free-demo-floating-icon demo-float-one">
              <BookOpen size={25} />
            </div>

            <div className="free-demo-floating-icon demo-float-two">
              <Atom size={25} />
            </div>

            <div className="free-demo-floating-icon demo-float-three">
              <Calculator size={24} />
            </div>

            <div className="free-demo-visual-text">
              <span>Your First Step</span>
              <h3>Learn with Confidence.</h3>
              <p>Find the right learning support for your goals.</p>
            </div>

            <div className="free-demo-sparkle">
              <Sparkles size={25} />
            </div>
          </div>
        </div>

        <div className="free-demo-content">
          <span className="free-demo-eyebrow">
            <Lightbulb size={17} />
            START YOUR LEARNING JOURNEY
          </span>

          <h2 className="free-demo-heading">
            The Right Tutor Can Make
            <span> All the Difference.</span>
          </h2>

          <p className="free-demo-description">
            Not sure where to begin? Request a free demo session
            and explore a learning experience that suits your
            child&apos;s academic needs.
          </p>

          <div className="free-demo-points">
            <div>
              <span className="free-demo-point-icon">01</span>
              <p>Share your learning requirements</p>
            </div>

            <div>
              <span className="free-demo-point-icon">02</span>
              <p>Discuss a suitable tutor and schedule</p>
            </div>

            <div>
              <span className="free-demo-point-icon">03</span>
              <p>Get confirmation from our team</p>
            </div>
          </div>

          <Link href="/free-demo" className="free-demo-button">
            Request a Free Demo
            <ArrowRight size={20} />
          </Link>

          <p className="free-demo-note">
            Free demo requests are subject to availability and
            confirmation by our team.
          </p>
        </div>
      </div>
    </section>
  );
}
