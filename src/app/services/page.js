
import Link from "next/link";
import Image from "next/image";

import {
  House,
  Monitor,
  UserRound,
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  Target,
  CalendarDays,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import "@/styles/pages/services.css";

const services = [
  {
    title: "Home Tuition",
    subtitle: "Personalised Learning at Home",
    description:
      "Learn comfortably at home with suitable tutors, flexible timings and individual learning support.",
    image: "/images/services/home-tuition.jpg",
    alt: "Tutor helping a school student with studies at home",
    icon: House,
    color: "blue",
  },
  {
    title: "Online Tuition",
    subtitle: "Learn from Anywhere",
    description:
      "Interactive online learning sessions that help students understand subjects from the comfort of home.",
    image: "/images/services/online-tuition.jpg",
    alt: "Student attending an online tuition class on a laptop",
    icon: Monitor,
    color: "green",
  },
  {
    title: "One-to-One Tuition",
    subtitle: "Focused Individual Attention",
    description:
      "Individual learning support based on the student's academic needs, pace and learning goals.",
    image: "/images/services/one-to-one-tuition.jpg",
    alt: "Tutor teaching a student individually",
    icon: UserRound,
    color: "purple",
  },
  {
    title: "Group Tuition",
    subtitle: "Learn Together, Grow Together",
    description:
      "A collaborative learning environment where students can learn, discuss and practise together.",
    image: "/images/services/group-tuition.jpg",
    alt: "Students studying together in a small group",
    icon: Users,
    color: "orange",
  },
  {
    title: "Board Exam Preparation",
    subtitle: "Prepare with Confidence",
    description:
      "Subject-focused academic support for CBSE, ICSE, ISC and State Board students.",
    image: "/images/services/board-exam.jpg",
    alt: "Student preparing for school board examinations",
    icon: BookOpen,
    color: "pink",
  },
  {
    title: "JEE & NEET Preparation",
    subtitle: "Build Strong Concepts",
    description:
      "Concept-based tuition support for JEE and NEET subjects, with focused learning and practice.",
    image: "/images/services/jee-neet.jpg",
    alt: "Student preparing for JEE and NEET examinations",
    icon: GraduationCap,
    color: "teal",
  },
];

const classLevels = [
  {
    title: "Primary Classes",
    range: "Class 1 – 5",
    description: "Strong learning foundations",
    color: "blue",
  },
  {
    title: "Middle Classes",
    range: "Class 6 – 8",
    description: "Concept building and practice",
    color: "green",
  },
  {
    title: "Secondary Classes",
    range: "Class 9 – 10",
    description: "Academic and board preparation",
    color: "orange",
  },
  {
    title: "Senior Secondary",
    range: "Class 11 – 12",
    description: "Subject-focused learning",
    color: "purple",
  },
];

const benefits = [
  {
    icon: Trophy,
    title: "Experienced Tutors",
    description:
      "Learn with tutors selected according to academic requirements and subject needs.",
  },
  {
    icon: Target,
    title: "Personalised Learning",
    description:
      "Learning support planned around each student's individual requirements.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Tuition Options",
    description:
      "Explore home and online tuition arrangements according to your convenience.",
  },
  {
    icon: HeartHandshake,
    title: "Student-Focused Approach",
    description:
      "A supportive approach that keeps the student's learning needs at the centre.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO SECTION */}

      <section className="services-hero">
        <div className="services-container services-hero-inner">
          <div className="services-hero-content">
            <span className="services-eyebrow">
              OUR SERVICES
            </span>

            <h1>
              Quality Education.
              <span> Personalised Learning.</span>
              <strong> Better Results.</strong>
            </h1>

            <p>
              Explore our tuition services designed to support
              students from Class 1 to 12, as well as JEE and
              NEET preparation.
            </p>
          </div>

          <div className="services-hero-image">
            <Image
              src="/images/services/services-hero.jpg"
              alt="Tutor guiding a student during a learning session"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* TUITION SERVICES */}

      <section className="services-list-section">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Explore Our <span>Tuition Services</span>
            </h2>

            <p>
              Choose from a range of tuition services based on
              your learning needs, class, subjects and
              preparation goals.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className={`service-card service-${service.color}`}
                  key={service.title}
                >
                  <div className="service-card-image">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={900}
                      height={600}
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />

                    <span className="service-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="service-card-content">
                    <div className="service-card-icon">
                      <Icon size={23} strokeWidth={1.9} />
                    </div>

                    <span className="service-card-subtitle">
                      {service.subtitle}
                    </span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLASSES WE COVER */}

      <section className="services-classes-section">
        <div className="services-container services-classes-layout">

          <div className="services-classes-intro">
            <span className="services-section-label">
              ACADEMIC SUPPORT
            </span>

            <h2>
              Classes <span>We Cover</span>
            </h2>

            <p>
              Tuition support for different academic levels
              and learning requirements.
            </p>

            <div className="services-classes-image">
              <Image
                src="/images/services/classes.jpg"
                alt="School students ready for learning"
                width={900}
                height={600}
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          </div>

          <div className="services-class-levels">
            {classLevels.map((level) => (
              <div
                className={`services-class-card class-${level.color}`}
                key={level.title}
              >
                <div className="services-class-icon">
                  <GraduationCap size={29} />
                </div>

                <h3>{level.title}</h3>

                <strong>{level.range}</strong>

                <p>{level.description}</p>
              </div>
            ))}

            <div className="services-competitive-note">
              <div className="services-competitive-icon">
                <Target size={27} />
              </div>

              <div>
                <h3>Competitive Exam Preparation</h3>
                <p>
                  Additional tuition support for JEE and NEET
                  aspirants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="services-benefits-section">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-section-label">
              THE BETTER RESULT ADVANTAGE
            </span>

            <h2>
              Why Choose <span>Better Result?</span>
            </h2>

            <p>
              A learning approach focused on student needs,
              academic understanding and suitable tuition support.
            </p>
          </div>

          <div className="services-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="services-benefit-card"
                  key={benefit.title}
                >
                  <div className="services-benefit-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="services-contact-section">
        <div className="services-container">
          <div className="services-contact-box">

            <div className="services-contact-image">
              <Image
                src="/images/services/contact-support.jpg"
                alt="Parent discussing tuition support with an education professional"
                width={900}
                height={650}
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>

            <div className="services-contact-content">
              <span className="services-contact-label">
                LET&apos;S GET STARTED
              </span>

              <h2>
                Looking for the Right Tuition Support?
              </h2>

              <p>
                Tell us about your learning requirements.
                Our team will help you explore suitable options.
              </p>

              <Link
                href="/contact"
                className="services-contact-button"
              >
                Contact Us
                <ArrowRight size={19} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
