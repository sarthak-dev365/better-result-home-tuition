
import {
  Target,
  UserCheck,
  Laptop,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import "@/styles/home/trust-us.css";

const trustFeatures = [
  {
    icon: Target,
    title: "Personalised Learning",
    description:
      "Learning support planned around each student's academic needs and learning goals.",
    color: "blue",
  },
  {
    icon: UserCheck,
    title: "Suitable Tutor Matching",
    description:
      "We review your requirements to help identify a suitable tutor for your learning needs.",
    color: "orange",
  },
  {
    icon: Laptop,
    title: "Flexible Learning Options",
    description:
      "Choose home tuition or online tuition according to your convenience.",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "Regular Progress Updates",
    description:
      "Stay informed about learning progress through communication and feedback.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
    description:
      "A supportive and respectful environment focused on comfortable learning.",
    color: "pink",
  },
  {
    icon: MessageCircle,
    title: "Parent Communication",
    description:
      "Keep communication open between parents, students and the tuition team.",
    color: "teal",
  },
];

export default function TrustUs() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-heading">
          <span className="trust-eyebrow">WHY CHOOSE US</span>

          <h2>
            A Better Learning Experience
            <span> Starts With the Right Support</span>
          </h2>

          <p>
            We focus on personalised guidance, suitable learning options
            and clear communication to support every student&apos;s journey.
          </p>
        </div>

        <div className="trust-grid">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                className={`trust-card trust-${feature.color}`}
                key={feature.title}
                style={{ "--card-index": index }}
              >
                <div className="trust-icon">
                  <Icon size={27} strokeWidth={1.9} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
