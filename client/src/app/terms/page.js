
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  UserCheck,
  GraduationCap,
  FileText,
  Scale,
  MessageCircle,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";
import "./terms.css";

export const metadata = {
  title: "Terms & Conditions | Better Result Home Tuition",
  description:
    "Read the terms and conditions for using the Better Result Home Tuition website and its tuition enquiry and tutor registration services.",
};

const termsSections = [
  {
    id: "acceptance",
    number: "01",
    icon: FileText,
    title: "Acceptance of Terms",
    paragraphs: [
      "These Terms & Conditions apply to your use of the Better Result Home Tuition website and its available features.",
      "By accessing or using the website, you agree to follow these terms and applicable laws. If you do not agree, please discontinue using the website.",
    ],
  },
  {
    id: "services",
    number: "02",
    icon: BookOpen,
    title: "Our Services",
    paragraphs: [
      "Better Result Home Tuition provides information about tuition options and may facilitate enquiries connecting students, parents, and tutors.",
      "The website may cover home tuition, online tuition, school classes, board examination preparation, Commerce subjects, and JEE / NEET preparation.",
      "The availability of a tutor, subject, class, location, teaching mode, schedule, and fees must be confirmed separately. Submitting an enquiry does not guarantee a tutor assignment or admission.",
    ],
  },
  {
    id: "students",
    number: "03",
    icon: GraduationCap,
    title: "Students and Parents",
    paragraphs: [
      "Students and parents should provide accurate information about the student's class, subjects, learning requirements, preferred teaching mode, location, and contact details.",
      "Parents or legal guardians should supervise website use by children and submit information on their behalf where appropriate.",
      "Any tuition arrangement, including schedule, teaching expectations, fees, and other conditions, should be confirmed with the relevant parties before lessons begin.",
    ],
  },
  {
    id: "tutors",
    number: "04",
    icon: UserCheck,
    title: "Tutor Registration and Verification",
    paragraphs: [
      "Tutors who register must provide truthful information about their identity, qualifications, experience, subjects, availability, and preferred teaching arrangements.",
      "Where requested, tutors may need to submit supporting documents for verification. Submission of documents does not automatically mean that registration has been approved.",
      "Registration, document review, and any further onboarding requirements will depend on the process communicated by Better Result Home Tuition.",
      "Tutors must not submit forged documents, impersonate another person, or misrepresent their qualifications or experience.",
    ],
  },
  {
    id: "communication",
    number: "05",
    icon: MessageCircle,
    title: "Enquiries and Communication",
    paragraphs: [
      "Submitting a contact form or enquiry communicates your interest in a service; it does not create a guaranteed booking, employment relationship, or confirmed tuition arrangement.",
      "We may use the contact details you provide to respond to your enquiry or communicate about your request, subject to our Privacy Policy.",
      "Please use respectful language and do not send unlawful, abusive, misleading, or unrelated content through website forms or communication channels.",
    ],
  },
  {
    id: "fees",
    number: "06",
    icon: Scale,
    title: "Fees and Payments",
    paragraphs: [
      "Any applicable tuition fees, registration charges, payment arrangements, or other costs must be communicated and agreed upon before the relevant transaction or service begins.",
      "Do not assume that submitting a website form means a payment has been made or a service has been confirmed.",
      "Where a specific refund or cancellation policy applies, it should be reviewed before making a payment. The applicable policy and agreed transaction terms should be followed.",
    ],
  },
  {
    id: "conduct",
    number: "07",
    icon: ShieldCheck,
    title: "Acceptable Website Use",
    paragraphs: [
      "You must not use the website to submit false information, impersonate another person, distribute malicious code, attempt unauthorised access, or interfere with website operations.",
      "You must not misuse personal information belonging to students, parents, tutors, or other individuals.",
      "We may take reasonable steps to address suspected misuse or protect the website and its users, subject to applicable law.",
    ],
  },
  {
    id: "accuracy",
    number: "08",
    icon: AlertCircle,
    title: "Information and Availability",
    paragraphs: [
      "Website content is provided for general information. Service details, tutor availability, locations, subjects, and other information may change.",
      "We aim to keep information useful and current, but information on the website should be confirmed before you rely on it for an important decision.",
      "Unless expressly confirmed, no specific academic result, examination score, tutor match, or service outcome is guaranteed.",
    ],
  },
  {
    id: "privacy",
    number: "09",
    icon: ShieldCheck,
    title: "Privacy and Personal Information",
    paragraphs: [
      "Information submitted through the website should be handled in accordance with the Privacy Policy and applicable data protection requirements.",
      "Please do not submit information about another person unless you are authorised to do so. Use particular care when submitting identity documents or information relating to children.",
    ],
  },
  {
    id: "liability",
    number: "10",
    icon: Scale,
    title: "Responsibility and Limitations",
    paragraphs: [
      "Users are responsible for the accuracy of information they provide and for confirming the terms of any tuition arrangement before proceeding.",
      "To the extent permitted by applicable law, Better Result Home Tuition does not guarantee uninterrupted or error-free website availability.",
      "Nothing in these terms excludes or limits any right, remedy, or liability that cannot legally be excluded or limited under applicable law.",
    ],
  },
  {
    id: "changes",
    number: "11",
    icon: FileText,
    title: "Changes to These Terms",
    paragraphs: [
      "These terms may be revised as the website, services, or applicable requirements change. The updated version will be published on this page with a revised effective date.",
      "You should review this page periodically. Continued use after an update takes effect will be subject to the revised terms to the extent permitted by law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="terms-page">
      <section className="terms-hero">
        <div className="terms-container">
          <Link href="/" className="terms-back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="terms-hero-icon">
            <Scale size={30} />
          </div>

          <span className="terms-eyebrow">
            CLEAR RULES. BETTER LEARNING.
          </span>

          <h1>
            Terms &amp; <span>Conditions</span>
          </h1>

          <p className="terms-hero-description">
            Please read these terms carefully before using Better
            Result Home Tuition, submitting an enquiry, or registering
            as a tutor.
          </p>

          <div className="terms-meta">
            <span>
              <ShieldCheck size={15} />
              Website Usage Guidelines
            </span>
            <span className="terms-meta-dot" />
            <span>Effective date: 13 October 2026</span>
          </div>
        </div>
      </section>

      <section className="terms-content-section">
        <div className="terms-container terms-layout">
          <aside className="terms-sidebar">
            <div className="terms-sidebar-card">
              <h2>On this page</h2>

              <nav aria-label="Terms and Conditions sections">
                {termsSections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                ))}

                <a href="#terms-contact">
                  <span>12</span>
                  Contact Information
                </a>
              </nav>
            </div>
          </aside>

          <div className="terms-article">
            <div className="terms-intro-card">
              <div className="terms-intro-icon">
                <BookOpen size={24} />
              </div>

              <div>
                <h2>Welcome to Better Result Home Tuition</h2>
                <p>
                  These terms explain the general rules for using our
                  website and interacting with its available features.
                  Please read them alongside our Privacy Policy and
                  any other policy that applies to your request.
                </p>
              </div>
            </div>

            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="terms-article-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="terms-section-heading">
                    <div className="terms-section-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <span className="terms-section-number">
                        SECTION {section.number}
                      </span>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="terms-article-body">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              );
            })}

            <article
              className="terms-article-card"
              id="terms-contact"
            >
              <div className="terms-section-heading">
                <div className="terms-section-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span className="terms-section-number">
                    SECTION 12
                  </span>
                  <h2>Contact Information</h2>
                </div>
              </div>

              <div className="terms-article-body">
                <p>
                  If you have questions about these Terms &amp;
                  Conditions, contact Better Result Home Tuition
                  using the details below.
                </p>

                <a
                  className="terms-contact-link"
                  href="mailto:betterresulthometuition@gmail.com"
                >
                  <Mail size={18} />
                  betterresulthometuition@gmail.com
                </a>

                <a
                  className="terms-contact-link"
                  href="tel:+917037374833"
                >
                  <Phone size={18} />
                  +91 70373 74833
                </a>

                <p className="terms-address">
                  Shivalock Colony, Chakshha Nagar, near Vidhan Sabha,
                  Dehradun, Uttarakhand
                </p>
              </div>
            </article>

            <div className="terms-notice">
              <ShieldCheck size={19} />
              <p>
                These terms are a starting draft. Review them against
                your actual services, agreements, payment practices,
                and applicable law before publishing.
              </p>
            </div>

            <div className="terms-related-links">
              <span>Related pages</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
