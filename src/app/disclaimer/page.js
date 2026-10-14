
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  BookOpen,
  GraduationCap,
  Users,
  ShieldCheck,
  Scale,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";
import "./disclaimer.css";

export const metadata = {
  title: "Disclaimer | Better Result Home Tuition",
  description:
    "Read the disclaimer for Better Result Home Tuition, including information about educational services, tutor availability, academic outcomes, and website content.",
};

const disclaimerSections = [
  {
    id: "general",
    number: "01",
    icon: FileText,
    title: "General Information",
    paragraphs: [
      "The information published on the Better Result Home Tuition website is provided for general informational purposes about tuition options and related services.",
      "We aim to keep information useful and accurate, but website content may change and should be confirmed before you make an important decision.",
    ],
  },
  {
    id: "education",
    number: "02",
    icon: BookOpen,
    title: "Educational Services",
    paragraphs: [
      "Information about home tuition, online tuition, school classes, board examination preparation, Commerce, and JEE / NEET preparation describes potential service categories.",
      "The availability of a particular subject, tutor, class, teaching mode, location, or schedule is not guaranteed until confirmed separately.",
      "Submitting a website enquiry or tutor registration form does not automatically confirm a booking, placement, registration approval, or service agreement.",
    ],
  },
  {
    id: "results",
    number: "03",
    icon: GraduationCap,
    title: "Academic Results and Performance",
    paragraphs: [
      "Academic progress may depend on several factors, including a student's existing knowledge, attendance, practice, learning needs, effort, and teaching arrangements.",
      "Better Result Home Tuition does not guarantee specific marks, examination results, ranks, admissions, or other academic outcomes unless a particular written commitment expressly states otherwise and is lawful.",
      "Students and parents should consider their individual requirements when choosing a tuition arrangement.",
    ],
  },
  {
    id: "tutors",
    number: "04",
    icon: Users,
    title: "Tutors and Third Parties",
    paragraphs: [
      "Information supplied by tutors or other users may be based on details they submit during registration or communication.",
      "Any verification process should be understood according to its actual scope. Document review alone does not guarantee a person's future conduct, teaching effectiveness, or suitability for every student.",
      "Students, parents, and tutors should independently discuss and confirm expectations, qualifications, teaching arrangements, and relevant safety considerations before starting tuition.",
    ],
  },
  {
    id: "fees",
    number: "05",
    icon: Scale,
    title: "Fees, Payments and Arrangements",
    paragraphs: [
      "Any tuition fees, registration charges, schedules, or payment conditions should be confirmed with the relevant parties before proceeding.",
      "Website information does not, by itself, establish that a payment has been received, a refund is due, or a booking has been confirmed.",
      "Where applicable, consult the published Terms & Conditions and Refund & Cancellation Policy before making a payment.",
    ],
  },
  {
    id: "external",
    number: "06",
    icon: ShieldCheck,
    title: "External Links and Services",
    paragraphs: [
      "The website may contain links to external services, including mapping, messaging, or other third-party websites.",
      "External services are operated by their respective providers. We do not control all of their content, availability, privacy practices, or terms.",
      "Please review the relevant third party's policies before sharing personal information or using an external service.",
    ],
  },
  {
    id: "availability",
    number: "07",
    icon: AlertTriangle,
    title: "Website Availability and Errors",
    paragraphs: [
      "We aim to maintain a useful website, but uninterrupted access, error-free operation, and continuous availability cannot be guaranteed.",
      "Website content may occasionally contain errors, omissions, outdated details, or temporary technical issues. Where appropriate, information may be corrected or updated.",
    ],
  },
  {
    id: "liability",
    number: "08",
    icon: Scale,
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, this website and its general informational content are provided without a guarantee that every feature will always be available or suitable for every individual purpose.",
      "Nothing in this disclaimer excludes or limits any legal right, remedy, or liability that cannot be excluded or limited under applicable law.",
      "Any specific service agreement may contain additional terms that should be reviewed before the service begins.",
    ],
  },
  {
    id: "updates",
    number: "09",
    icon: FileText,
    title: "Updates to This Disclaimer",
    paragraphs: [
      "This disclaimer may be updated to reflect changes in website features, service arrangements, or applicable requirements.",
      "The current version should be published on this page with its effective date. Please review it periodically.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <main className="disclaimer-page">
      <section className="disclaimer-hero">
        <div className="disclaimer-container">
          <Link href="/" className="disclaimer-back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="disclaimer-hero-icon">
            <AlertTriangle size={30} />
          </div>

          <span className="disclaimer-eyebrow">
            IMPORTANT INFORMATION
          </span>

          <h1>
            Website <span>Disclaimer</span>
          </h1>

          <p className="disclaimer-hero-description">
            Important information about our educational services,
            website content, tutor availability, and academic outcomes.
          </p>

          <div className="disclaimer-meta">
            <span>
              <ShieldCheck size={15} />
              Transparency &amp; Information
            </span>
            <span className="disclaimer-meta-dot" />
            <span>Effective date: 13 October 2026</span>
          </div>
        </div>
      </section>

      <section className="disclaimer-content-section">
        <div className="disclaimer-container disclaimer-layout">
          <aside className="disclaimer-sidebar">
            <div className="disclaimer-sidebar-card">
              <h2>On this page</h2>

              <nav aria-label="Disclaimer sections">
                {disclaimerSections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                ))}

                <a href="#disclaimer-contact">
                  <span>10</span>
                  Contact Information
                </a>
              </nav>
            </div>
          </aside>

          <div className="disclaimer-article">
            <div className="disclaimer-intro-card">
              <div className="disclaimer-intro-icon">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h2>About This Disclaimer</h2>
                <p>
                  Please read this page together with our Terms &amp;
                  Conditions and Privacy Policy. It explains the
                  general limitations of information provided on
                  Better Result Home Tuition.
                </p>
              </div>
            </div>

            {disclaimerSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="disclaimer-article-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="disclaimer-section-heading">
                    <div className="disclaimer-section-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <span className="disclaimer-section-number">
                        SECTION {section.number}
                      </span>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="disclaimer-article-body">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              );
            })}

            <article
              className="disclaimer-article-card"
              id="disclaimer-contact"
            >
              <div className="disclaimer-section-heading">
                <div className="disclaimer-section-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span className="disclaimer-section-number">
                    SECTION 10
                  </span>
                  <h2>Contact Information</h2>
                </div>
              </div>

              <div className="disclaimer-article-body">
                <p>
                  If you have a question about this disclaimer or
                  information published on our website, contact
                  Better Result Home Tuition.
                </p>

                <a
                  className="disclaimer-contact-link"
                  href="mailto:betterresulthometuition@gmail.com"
                >
                  <Mail size={18} />
                  betterresulthometuition@gmail.com
                </a>

                <a
                  className="disclaimer-contact-link"
                  href="tel:+917037374833"
                >
                  <Phone size={18} />
                  +91 70373 74833
                </a>

                <a
                  className="disclaimer-contact-link"
                  href="https://www.google.com/maps/search/?api=1&query=Shivalock%20Colony%2C%20Chakshha%20Nagar%2C%20near%20Vidhan%20Sabha%2C%20Dehradun%2C%20Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={18} />
                  Shivalock Colony, Chakshha Nagar, near Vidhan Sabha,
                  Dehradun, Uttarakhand
                </a>
              </div>
            </article>

            <div className="disclaimer-notice">
              <AlertTriangle size={19} />
              <p>
                This is a general website disclaimer draft, not legal
                advice. Review it against your actual service
                arrangements and applicable law before publication.
              </p>
            </div>

            <div className="disclaimer-related-links">
              <span>Related pages</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
