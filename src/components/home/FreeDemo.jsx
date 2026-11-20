
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

import "@/styles/home/free-demo.css";

export default function FreeDemo() {
  return (
    <section className="free-demo-section" id="free-demo">
      <div className="free-demo-container">
        <div className="free-demo-content">
          <div className="free-demo-icon">
            <GraduationCap size={27} strokeWidth={1.8} />
          </div>

          <div className="free-demo-text">
            <span className="free-demo-eyebrow">
              <Sparkles size={14} />
              YOUR LEARNING JOURNEY STARTS HERE
            </span>

            <h2>
              Ready to Find the <span>Right Tutor?</span>
            </h2>

            <p>
              Request a free demo and let our team help you find
              the right learning support for your needs.
            </p>
          </div>
        </div>

        <div className="free-demo-action">
          <Link href="/free-demo" className="free-demo-button">
            Request a Free Demo
            <ArrowRight size={19} />
          </Link>

          <span className="free-demo-note">
            Free demo · Subject to availability and confirmation
          </span>
        </div>
      </div>
    </section>
  );
}
