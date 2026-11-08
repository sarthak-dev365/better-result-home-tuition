
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  MapPin,
  IndianRupee,
  FileText,
  ShieldCheck,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

import "@/styles/pages/become-a-teacher.css";

const opportunities = [
  {
    icon: <MapPin size={26} />,
    title: "Home Tuition",
    description:
      "Teach students at their homes according to your preferred teaching areas and availability.",
  },
  {
    icon: <Laptop size={26} />,
    title: "Online Tuition",
    description:
      "Connect with students through online teaching and conduct classes remotely.",
  },
  {
    icon: <BookOpen size={26} />,
    title: "Multiple Subjects",
    description:
      "Apply for the subjects and academic levels that match your educational qualifications.",
  },
];

const benefits = [
  {
    icon: <Clock size={23} />,
    title: "Flexible Availability",
    description:
      "Share your preferred days and teaching timings.",
  },
  {
    icon: <Users size={23} />,
    title: "Student Opportunities",
    description:
      "Get considered for suitable tuition requirements.",
  },
  {
    icon: <GraduationCap size={23} />,
    title: "Different Academic Levels",
    description:
      "Apply to teach the classes and subjects you are qualified for.",
  },
  {
    icon: <UserCheck size={23} />,
    title: "Professional Profile",
    description:
      "Provide your qualifications and teaching experience for review.",
  },
];

const requirements = [
  "Educational qualification relevant to the subjects you wish to teach.",
  "Clear information about your teaching experience or fresher status.",
  "Preferred classes, subjects and teaching mode.",
  "Your preferred teaching locations and availability.",
  "Valid contact details and required supporting documents.",
];

const applicationSteps = [
  {
    number: "01",
    title: "Explore the Opportunity",
    description:
      "Understand the teaching options and application requirements.",
  },
  {
    number: "02",
    title: "Fill the Application Form",
    description:
      "Complete the separate teacher registration form with accurate details.",
  },
  {
    number: "03",
    title: "Pay Registration Fee",
    description:
      "The teacher application registration fee is ₹500.",
  },
  {
    number: "04",
    title: "Application Review",
    description:
      "Your submitted details will be reviewed by the team. Further communication will follow the review.",
  },
];

export default function BecomeATeacherPage() {
  return (
    <div className="become-teacher-page">
      {/* Hero Section */}
      <section className="teacher-hero">
        <div className="teacher-hero-overlay"></div>

        <div className="teacher-hero-content">
          <span className="teacher-eyebrow">
            TEACH WITH BETTER RESULT HOME TUITION
          </span>

          <h1>
            Turn Your Knowledge
            <span> Into Someone&apos;s Success</span>
          </h1>

          <p>
            Are you passionate about teaching? Explore home tuition and
            online teaching opportunities. Share your knowledge, help
            students learn and take the next step in your teaching journey.
          </p>

          <div className="teacher-hero-actions">
            <Link
              href="/teacher-registration"
              className="teacher-primary-btn"
            >
              Apply as a Teacher <ArrowRight size={19} />
            </Link>

            <Link
              href="/vacancy"
              className="teacher-secondary-btn"
            >
              Explore Vacancies
            </Link>
          </div>

          <div className="teacher-hero-note">
            <ShieldCheck size={17} />
            Application details are subject to review and verification.
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="teacher-intro section-padding">
        <div className="teacher-section-heading">
          <span>YOUR TEACHING JOURNEY STARTS HERE</span>
          <h2>
            Make Teaching Your <span>Next Opportunity</span>
          </h2>
          <p>
            Better Result Home Tuition welcomes applications from teachers
            who are interested in providing quality home tuition or online
            tuition to students.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="teacher-opportunities section-padding">
        <div className="teacher-section-heading">
          <span>TEACHING OPTIONS</span>
          <h2>Choose How You Want to Teach</h2>
          <p>
            Select your preferred teaching mode while submitting your
            application.
          </p>
        </div>

        <div className="teacher-opportunity-grid">
          {opportunities.map((item, index) => (
            <div className="teacher-opportunity-card" key={index}>
              <div className="teacher-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="teacher-benefits section-padding">
        <div className="teacher-section-heading">
          <span>WHY APPLY WITH US</span>
          <h2>A Teaching Platform Built Around Your Preferences</h2>
          <p>
            Share your teaching preferences so the team can consider
            opportunities that match your profile.
          </p>
        </div>

        <div className="teacher-benefits-grid">
          {benefits.map((item, index) => (
            <div className="teacher-benefit-card" key={index}>
              <div className="teacher-benefit-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="teacher-eligibility section-padding">
        <div className="teacher-eligibility-content">
          <div className="teacher-section-heading teacher-heading-left">
            <span>BEFORE YOU APPLY</span>
            <h2>What You Need to Get Started</h2>
            <p>
              Keep the following information ready before filling out the
              teacher registration form.
            </p>
          </div>

          <div className="teacher-requirements-list">
            {requirements.map((item, index) => (
              <div className="teacher-requirement-item" key={index}>
                <CheckCircle2 size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="teacher-eligibility-visual">
          <div className="teacher-visual-icon">
            <GraduationCap size={62} />
          </div>
          <h3>Your Knowledge Matters</h3>
          <p>
            Share your academic background, subjects and availability
            clearly to help the team understand your teaching profile.
          </p>
          <div className="teacher-visual-bottom">
            <FileText size={20} />
            <span>Complete Application Required</span>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="teacher-process section-padding">
        <div className="teacher-section-heading">
          <span>SIMPLE APPLICATION PROCESS</span>
          <h2>How to Apply?</h2>
          <p>
            Follow these steps to submit your teacher application.
          </p>
        </div>

        <div className="teacher-process-grid">
          {applicationSteps.map((step, index) => (
            <div className="teacher-process-card" key={index}>
              <span className="teacher-step-number">{step.number}</span>
              <div className="teacher-step-line"></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Fee */}
      <section className="teacher-fee-section section-padding">
        <div className="teacher-fee-card">
          <div className="teacher-fee-icon">
            <IndianRupee size={30} />
          </div>

          <div className="teacher-fee-content">
            <span>TEACHER APPLICATION</span>
            <h2>Registration Fee</h2>
            <p>
              A registration fee of ₹500 is applicable for submitting a
              teacher application.
            </p>
          </div>

          <div className="teacher-fee-amount">
            <span>₹</span>500
            <small>Application Registration Fee</small>
          </div>
        </div>

        <p className="teacher-fee-note">
          Please review the application details and applicable terms
          before proceeding. Application submission does not guarantee
          selection or assignment of tuition.
        </p>
      </section>

      {/* Final CTA */}
      <section className="teacher-final-cta section-padding">
        <div className="teacher-final-cta-content">
          <span>READY TO TAKE THE NEXT STEP?</span>
          <h2>
            Start Your Teaching Journey Today
          </h2>
          <p>
            Complete your teacher application with your personal,
            educational and teaching preference details.
          </p>

          <Link
            href="/teacher-registration"
            className="teacher-primary-btn"
          >
            Apply Now <ArrowRight size={19} />
          </Link>

          <small>
            Need help?{" "}
            <Link href="/contact">Contact our team</Link>
          </small>
        </div>
      </section>
    </div>
  );
}
