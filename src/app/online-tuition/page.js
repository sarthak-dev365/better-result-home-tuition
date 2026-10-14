
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  BookOpen,
  Clock3,
  House,
  Video,
  Laptop,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  BookMarked,
  Wifi,
} from "lucide-react";
import "./online-tuition.css";

const benefits = [
  {
    icon: House,
    title: "Learn from Home",
    description:
      "Explore learning options without needing to travel to a tuition location.",
  },
  {
    icon: Clock3,
    title: "Discuss Your Schedule",
    description:
      "Share your preferred days and timings when enquiring about tuition.",
  },
  {
    icon: BookOpen,
    title: "Subject-Focused Learning",
    description:
      "Describe the class and subjects where you would like learning support.",
  },
  {
    icon: Laptop,
    title: "Digital Learning Setup",
    description:
      "Use a suitable device and internet connection for online learning sessions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the student's class, subject, learning goals and preferred timings.",
  },
  {
    number: "02",
    title: "Discuss Your Options",
    description:
      "Review your requirements and discuss a suitable online tuition arrangement.",
  },
  {
    number: "03",
    title: "Prepare to Learn",
    description:
      "Arrange a device, internet access and study materials for your learning sessions.",
  },
];

const subjects = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindi",
  "Social Science",
  "Accountancy",
  "Economics",
];

export default function OnlineTuitionPage() {
  return (
    <div className="ot-page">
      <section className="ot-hero">
        <div className="ot-hero-decoration ot-decoration-one" />
        <div className="ot-hero-decoration ot-decoration-two" />

        <div className="ot-container ot-hero-grid">
          <div className="ot-hero-content">
            <span className="ot-eyebrow">
              <Video size={15} />
              ONLINE LEARNING OPTIONS
            </span>

            <h1>
              Quality learning,
              <span> from your own space.</span>
            </h1>

            <p className="ot-hero-description">
              Explore online home tuition options that fit your class,
              subjects and learning needs. Take the next step towards a
              more focused learning routine.
            </p>

            <div className="ot-hero-actions">
              <Link
                href="/find-a-tutor"
                className="ot-button ot-button-primary"
              >
                Explore Tuition <ArrowRight size={18} />
              </Link>

              <Link
                href="/classes"
                className="ot-button ot-button-outline"
              >
                Browse Classes
              </Link>
            </div>

            <div className="ot-hero-points">
              <span><CheckCircle2 size={17} /> Class-based exploration</span>
              <span><CheckCircle2 size={17} /> Subject-focused enquiries</span>
            </div>
          </div>

          <div className="ot-hero-art">
            <div className="ot-art-main">
              <div className="ot-art-topline">
                <span className="ot-art-dot" />
                <span>YOUR LEARNING SPACE</span>
              </div>

              <div className="ot-laptop-illustration">
                <div className="ot-laptop-screen">
                  <div className="ot-screen-header">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="ot-screen-content">
                    <div className="ot-screen-avatar">
                      <GraduationCap size={36} />
                    </div>
                    <div className="ot-screen-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="ot-screen-book">
                      <BookOpen size={29} />
                    </div>
                  </div>
                </div>
                <div className="ot-laptop-base" />
              </div>

              <div className="ot-art-caption">
                <strong>Your goals. Your learning journey.</strong>
                <span>Plan a setup that works for you.</span>
              </div>
            </div>

            <div className="ot-floating-note ot-floating-note-top">
              <span className="ot-floating-icon"><Monitor size={19} /></span>
              <span><strong>Online learning</strong><small>From your preferred location</small></span>
            </div>

            <div className="ot-floating-note ot-floating-note-bottom">
              <span className="ot-floating-icon orange"><BookMarked size={19} /></span>
              <span><strong>Stay focused</strong><small>Class and subject based</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="ot-benefits-section">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">WHY EXPLORE ONLINE TUITION?</span>
            <h2>Learning that works around your routine</h2>
            <p>
              Online tuition may offer a convenient way to organise learning.
              The exact format depends on your requirements and the agreed arrangement.
            </p>
          </div>

          <div className="ot-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="ot-benefit-card" key={benefit.title}>
                  <div className="ot-benefit-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ot-process-section">
        <div className="ot-container ot-process-layout">
          <div className="ot-process-intro">
            <span className="ot-section-label">A SIMPLE START</span>
            <h2>How to get started with online tuition</h2>
            <p>
              Start by identifying what the student needs. A clear
              requirement makes it easier to discuss the next steps.
            </p>

            <Link
              href="/find-a-tutor"
              className="ot-text-link"
            >
              Share your tuition requirement <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ot-steps">
            {steps.map((step) => (
              <article className="ot-step" key={step.number}>
                <div className="ot-step-number">{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ot-subject-section">
        <div className="ot-container">
          <div className="ot-section-heading">
            <span className="ot-section-label">EXPLORE SUBJECTS</span>
            <h2>Which subject would you like to focus on?</h2>
            <p>
              Explore common subject areas and use the tuition enquiry
              page to describe your specific learning requirements.
            </p>
          </div>

          <div className="ot-subject-grid">
            {subjects.map((subject) => (
              <Link
                href="/find-a-tutor"
                className="ot-subject-item"
                key={subject}
              >
                <span><BookOpen size={17} /></span>
                <strong>{subject}</strong>
                <ArrowRight size={16} className="ot-subject-arrow" />
              </Link>
            ))}
          </div>

          <p className="ot-subject-note">
            <ShieldCheck size={17} />
            Subject links currently open the tuition enquiry page. Tutor
            availability and online class booking will be connected later.
          </p>
        </div>
      </section>

      <section className="ot-requirements-section">
        <div className="ot-container">
          <div className="ot-requirements-panel">
            <div className="ot-requirements-copy">
              <span className="ot-section-label">BEFORE YOUR SESSION</span>
              <h2>Get your online learning setup ready</h2>
              <p>
                A few basic preparations can help make an online learning
                session easier to follow.
              </p>

              <ul>
                <li><CheckCircle2 size={18} /> A suitable phone, tablet or computer</li>
                <li><CheckCircle2 size={18} /> A reliable internet connection</li>
                <li><CheckCircle2 size={18} /> Notebook, stationery and study materials</li>
                <li><CheckCircle2 size={18} /> A reasonably quiet study space</li>
              </ul>

              <Link
                href="/find-a-tutor"
                className="ot-button ot-button-primary"
              >
                Discuss Your Requirement <ArrowRight size={18} />
              </Link>
            </div>

            <div className="ot-requirements-visual">
              <div className="ot-device-circle">
                <Laptop size={72} strokeWidth={1.4} />
              </div>
              <div className="ot-device-chip chip-one"><Wifi size={17} /> Internet</div>
              <div className="ot-device-chip chip-two"><BookOpen size={17} /> Study materials</div>
              <div className="ot-device-chip chip-three"><Monitor size={17} /> Device</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ot-final-cta">
        <div className="ot-container ot-final-cta-inner">
          <div>
            <span className="ot-section-label">TAKE THE NEXT STEP</span>
            <h2>Make your learning needs the starting point.</h2>
            <p>
              Tell us about the student&apos;s class, subject and preferred
              learning format to explore the next step.
            </p>
          </div>

          <Link
            href="/find-a-tutor"
            className="ot-button ot-button-light"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
