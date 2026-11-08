
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Laptop,
  MapPin,
  Users,
  Clock,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  IndianRupee,
} from "lucide-react";

import "@/styles/pages/vacancy.css";

const opportunities = [
  {
    icon: <BookOpen size={27} />,
    title: "Academic Subject Teacher",
    description:
      "Teachers interested in teaching academic subjects to students from Classes 1 to 12.",
    details: ["Primary Classes", "Middle Classes", "Secondary Classes"],
  },
  {
    icon: <GraduationCap size={27} />,
    title: "Senior Secondary Teacher",
    description:
      "Teachers with relevant subject qualifications for Classes 11 and 12.",
    details: ["Science Stream", "Commerce Stream", "Subject Specialists"],
  },
  {
    icon: <Laptop size={27} />,
    title: "Online Tutor",
    description:
      "Teachers interested in conducting online classes for suitable student requirements.",
    details: ["Online Classes", "Digital Teaching", "Remote Learning"],
  },
  {
    icon: <Users size={27} />,
    title: "Competitive Exam Faculty",
    description:
      "Qualified educators interested in teaching students preparing for competitive examinations.",
    details: ["JEE Preparation", "NEET Preparation", "Relevant Subjects"],
  },
];

const requirements = [
  "Relevant educational qualifications for the subjects you wish to teach.",
  "Clear communication and an interest in teaching.",
  "Accurate personal and contact information.",
  "Details of your teaching experience, if applicable.",
  "Availability and preferred teaching locations.",
];

const applicationSteps = [
  {
    number: "01",
    title: "Choose Your Teaching Area",
    description:
      "Identify the classes, subjects and teaching mode suitable for you.",
  },
  {
    number: "02",
    title: "Complete Registration",
    description:
      "Fill out the separate teacher registration application form.",
  },
  {
    number: "03",
    title: "Application Review",
    description:
      "The team will review your submitted details and supporting documents.",
  },
  {
    number: "04",
    title: "Further Communication",
    description:
      "You may be contacted if a suitable teaching requirement is available.",
  },
];

export default function VacancyPage() {
  return (
    <div className="vacancy-page">
      {/* Hero Section */}
      <section className="vacancy-hero">
        <div className="vacancy-hero-pattern"></div>

        <div className="vacancy-hero-content">
          <span className="vacancy-eyebrow">
            CAREER & TEACHING OPPORTUNITIES
          </span>

          <h1>
            Explore Teaching
            <span> Opportunities With Us</span>
          </h1>

          <p>
            Are you looking for teaching opportunities in home tuition
            or online tuition? Explore the teaching areas and submit
            your application to Better Result Home Tuition.
          </p>

          <div className="vacancy-hero-actions">
            <Link href="/teacher-registration" className="vacancy-primary-btn">
              Apply for Teaching <ArrowRight size={19} />
            </Link>

            <Link href="/become-a-teacher" className="vacancy-outline-btn">
              Become a Teacher
            </Link>
          </div>

          <div className="vacancy-hero-info">
            <span><MapPin size={17} /> Dehradun, Uttarakhand</span>
            <span><Laptop size={17} /> Home & Online Tuition</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="vacancy-intro section-padding">
        <div className="vacancy-section-heading">
          <span>FIND YOUR TEACHING AREA</span>
          <h2>Teaching Opportunities Across Different Levels</h2>
          <p>
            We invite applications from educators interested in teaching
            different academic levels and subjects. Opportunities depend
            on student requirements and teacher suitability.
          </p>
        </div>
      </section>

      {/* Opportunity Cards */}
      <section className="vacancy-opportunities section-padding">
        <div className="vacancy-section-heading">
          <span>AREAS OF INTEREST</span>
          <h2>Explore Teaching Categories</h2>
          <p>
            Select the category that matches your qualifications and
            teaching interests.
          </p>
        </div>

        <div className="vacancy-card-grid">
          {opportunities.map((item, index) => (
            <article className="vacancy-card" key={index}>
              <div className="vacancy-card-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="vacancy-card-tags">
                {item.details.map((detail, detailIndex) => (
                  <span key={detailIndex}>{detail}</span>
                ))}
              </div>

              <Link href="/teacher-registration" className="vacancy-card-link">
                Apply Now <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Teaching Modes */}
      <section className="vacancy-modes section-padding">
        <div className="vacancy-section-heading">
          <span>FLEXIBLE TEACHING MODES</span>
          <h2>Choose Your Preferred Teaching Mode</h2>
          <p>
            Mention your preferred teaching mode in the application.
          </p>
        </div>

        <div className="vacancy-mode-grid">
          <div className="vacancy-mode-card">
            <div className="vacancy-mode-icon">
              <MapPin size={30} />
            </div>
            <h3>Home Tuition</h3>
            <p>
              Teach students at their homes in your preferred and
              available teaching areas.
            </p>
          </div>

          <div className="vacancy-mode-card">
            <div className="vacancy-mode-icon">
              <Laptop size={30} />
            </div>
            <h3>Online Tuition</h3>
            <p>
              Conduct classes remotely using suitable online teaching
              tools and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="vacancy-requirements section-padding">
        <div className="vacancy-requirements-content">
          <div className="vacancy-section-heading vacancy-heading-left">
            <span>APPLICATION GUIDELINES</span>
            <h2>Who Can Apply?</h2>
            <p>
              Applicants should provide accurate details so their
              qualifications and teaching preferences can be reviewed.
            </p>
          </div>

          <div className="vacancy-requirements-list">
            {requirements.map((item, index) => (
              <div className="vacancy-requirement" key={index}>
                <CheckCircle2 size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="vacancy-requirements-side">
          <div className="vacancy-side-icon">
            <FileText size={40} />
          </div>
          <h3>Keep Your Details Ready</h3>
          <p>
            Keep your educational information, experience details and
            supporting documents ready before starting the application.
          </p>
          <div className="vacancy-side-note">
            <Clock size={19} />
            <span>Complete application details carefully.</span>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="vacancy-process section-padding">
        <div className="vacancy-section-heading">
          <span>HOW TO APPLY</span>
          <h2>Your Application Journey</h2>
          <p>
            Follow the application process to share your teaching profile.
          </p>
        </div>

        <div className="vacancy-process-grid">
          {applicationSteps.map((step, index) => (
            <div className="vacancy-process-card" key={index}>
              <span className="vacancy-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Fee */}
      <section className="vacancy-fee section-padding">
        <div className="vacancy-fee-card">
          <div className="vacancy-fee-icon">
            <IndianRupee size={30} />
          </div>

          <div className="vacancy-fee-text">
            <span>TEACHER APPLICATION</span>
            <h2>Registration Fee: ₹500</h2>
            <p>
              A registration fee of ₹500 is applicable for submitting
              a teacher application.
            </p>
          </div>

          <Link href="/teacher-registration" className="vacancy-fee-btn">
            Start Application <ArrowRight size={18} />
          </Link>
        </div>

        <p className="vacancy-fee-disclaimer">
          Application submission does not guarantee selection or
          assignment of tuition. Applications are subject to review.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="vacancy-cta section-padding">
        <div className="vacancy-cta-content">
          <BriefcaseBusiness size={42} />
          <span>TAKE THE NEXT STEP</span>
          <h2>Interested in Teaching With Us?</h2>
          <p>
            Submit your teacher registration application or contact
            our team if you need assistance.
          </p>

          <div className="vacancy-cta-actions">
            <Link href="/teacher-registration" className="vacancy-primary-btn">
              Apply Now <ArrowRight size={19} />
            </Link>

            <Link href="/contact" className="vacancy-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
