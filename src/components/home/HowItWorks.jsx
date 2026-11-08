import {
  ClipboardList,
  Users,
  GraduationCap,
} from "lucide-react";

import "@/styles/home/how-it-works.css";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    description:
      "Share your class, subjects, preferred tuition mode and learning requirements with us.",
    icon: ClipboardList,
    color: "blue",
  },
  {
    number: "02",
    title: "Find a Suitable Tutor",
    description:
      "Our team reviews your requirements and discusses suitable tutor options with you.",
    icon: Users,
    color: "green",
  },
  {
    number: "03",
    title: "Start Learning",
    description:
      "Once the tutor and schedule are confirmed, begin your personalised learning journey.",
    icon: GraduationCap,
    color: "orange",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* SECTION HEADING */}

        <div className="how-heading">
          <span className="how-eyebrow">
            HOW IT WORKS
          </span>

          <h2>
            3 Simple Steps to
            <span> Get Started</span>
          </h2>

          <p>
            Getting the right tuition support is simple.
            Follow these three steps to begin.
          </p>
        </div>

        {/* PROCESS TIMELINE */}

        <div className="how-steps">

          <div className="how-connector" aria-hidden="true" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className={`how-step how-${step.color}`}
                key={step.number}
              >
                <div className="how-step-visual">
                  <div className="how-step-icon">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="how-step-number">
                    {step.number}
                  </span>
                </div>

                <div className="how-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}