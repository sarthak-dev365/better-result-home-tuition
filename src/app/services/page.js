
import Link from "next/link";
import {
  House,
  Monitor,
  UserRound,
  Users,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import "@/styles/pages/services.css";

const services = [
  {
    icon: House,
    title: "Home Tuition",
    subtitle: "Personalised Learning at Home",
    description:
      "Explore home tuition options with a suitable tutor based on your class, subjects, location and learning requirements.",
    features: [
      "Individual learning support",
      "Flexible scheduling",
      "Learning at your preferred location",
    ],
    color: "blue",
  },
  {
    icon: Monitor,
    title: "Online Tuition",
    subtitle: "Learn from Anywhere",
    description:
      "Explore online tuition options that allow students to learn remotely with suitable tutors and flexible scheduling.",
    features: [
      "Remote learning convenience",
      "Interactive online sessions",
      "Flexible learning arrangements",
    ],
    color: "green",
  },
  {
    icon: UserRound,
    title: "One-to-One Tuition",
    subtitle: "Focused Individual Attention",
    description:
      "Enquire about individual tuition support based on the student's academic requirements and learning goals.",
    features: [
      "Individual guidance",
      "Focused subject learning",
      "Personalised learning support",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Group Tuition",
    subtitle: "Learning Together",
    description:
      "Explore group learning arrangements where students can study together in a structured learning environment.",
    features: [
      "Collaborative learning",
      "Knowledge sharing",
      "Group learning support",
    ],
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "Board Exam Preparation",
    subtitle: "Academic Support for Board Classes",
    description:
      "Enquire about academic guidance for CBSE, ICSE, ISC and State Board students according to subject and tutor availability.",
    features: [
      "CBSE and ICSE support",
      "ISC and State Board support",
      "Subject-focused preparation",
    ],
    color: "pink",
  },
  {
    icon: GraduationCap,
    title: "JEE & NEET Preparation",
    subtitle: "Competitive Exam Guidance",
    description:
      "Explore tuition support for JEE and NEET preparation with a focus on subject understanding and practice.",
    features: [
      "JEE Physics, Chemistry and Mathematics",
      "NEET Physics, Chemistry and Biology",
      "Concept-based learning support",
    ],
    color: "teal",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="services-page-hero-content">
          <span className="services-page-eyebrow">
            OUR TUITION SERVICES
          </span>

          <h1>
            Learning Solutions
            <span> Designed Around Your Needs</span>
          </h1>

          <p>
            Explore home and online tuition options for different
            academic levels, subjects and learning goals.
          </p>

          <Link
            href="/contact"
            className="services-page-hero-button"
          >
            Enquire Now <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <section className="services-page-intro">
        <div className="services-page-container">
          <span className="services-page-label">WHAT WE OFFER</span>

          <h2>
            Explore Our <span>Tuition Services</span>
          </h2>

          <p>
            Every student has different academic requirements.
            Share your preferences with us so we can discuss
            suitable tuition options based on availability.
          </p>
        </div>
      </section>

      <section className="services-page-list">
        <div className="services-page-container">
          <div className="services-page-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className={`services-page-card service-page-${service.color}`}
                  key={service.title}
                >
                  <div className="services-page-card-top">
                    <div className="services-page-icon">
                      <Icon size={30} strokeWidth={1.9} />
                    </div>

                    <span className="services-page-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="services-page-subtitle">
                    {service.subtitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p className="services-page-description">
                    {service.description}
                  </p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="services-page-card-link"
                  >
                    Enquire About This Service
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-page-cta">
        <div className="services-page-cta-content">
          <span>NEED HELP CHOOSING?</span>

          <h2>Let&apos;s Discuss Your Learning Requirements</h2>

          <p>
            Tell us your class, subjects and preferred tuition mode.
            Our team can help you explore available options.
          </p>

          <Link href="/contact" className="services-page-cta-button">
            Contact Our Team <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
