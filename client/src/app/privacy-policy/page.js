
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  UserCheck,
  Mail,
  Phone,
  FileText,
  ArrowLeft,
} from "lucide-react";
import "./privacy-policy.css";

export const metadata = {
  title: "Privacy Policy | Better Result Home Tuition",
  description:
    "Read the Privacy Policy of Better Result Home Tuition to understand how personal information may be collected, used, and protected.",
};

const sections = [
  {
    id: "information",
    number: "01",
    icon: Database,
    title: "Information We May Collect",
    content: (
      <>
        <p>
          Depending on the features you use, Better Result Home Tuition
          may collect information that you voluntarily provide through
          our website forms.
        </p>
        <ul>
          <li>Name and contact details, including email and phone number.</li>
          <li>Class, subjects, tuition preferences, and location details.</li>
          <li>
            Information submitted by tutors about their qualifications,
            experience, and preferred teaching arrangements.
          </li>
          <li>
            Documents or photographs submitted for tutor verification,
            where requested by the registration process.
          </li>
          <li>
            The details you include in an enquiry or contact message.
          </li>
        </ul>
        <p>
          The information actually collected depends on the fields
          available in the relevant form and the information you submit.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    number: "02",
    icon: FileText,
    title: "How We May Use Information",
    content: (
      <>
        <p>Information may be used for purposes such as:</p>
        <ul>
          <li>Responding to enquiries and requests for tuition.</li>
          <li>Understanding student and parent learning requirements.</li>
          <li>Reviewing tutor registration information.</li>
          <li>Communicating about services, requests, or verification.</li>
          <li>Maintaining website security and improving our services.</li>
          <li>Meeting applicable legal obligations.</li>
        </ul>
        <p>
          We will aim to use information only for appropriate purposes
          connected with our services and applicable requirements.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "03",
    icon: UserCheck,
    title: "When Information May Be Shared",
    content: (
      <>
        <p>
          Personal information should not be shared indiscriminately.
          Where necessary, information may be shared for a legitimate
          service-related purpose, with appropriate safeguards.
        </p>
        <ul>
          <li>
            Relevant student or parent details may need to be shared
            with a suitable tutor to respond to a tuition request.
          </li>
          <li>
            Service providers may process information if they are used
            to operate website hosting, forms, communications, or other
            technical features.
          </li>
          <li>
            Information may be disclosed when required by applicable law
            or a valid legal request.
          </li>
        </ul>
        <p>
          The actual sharing practices will depend on the services and
          integrations enabled on the website.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "04",
    icon: LockKeyhole,
    title: "Data Security and Retention",
    content: (
      <>
        <p>
          Reasonable technical and organisational safeguards should be
          used to protect personal information against unauthorised
          access, loss, misuse, or disclosure.
        </p>
        <p>
          No website or electronic transmission can be guaranteed to be
          completely secure. Access to sensitive documents, including
          identity documents submitted for tutor verification, should
          be restricted to authorised personnel and handled carefully.
        </p>
        <p>
          Information should be retained only for as long as reasonably
          necessary for the stated purpose, applicable legal obligations,
          and legitimate record-keeping requirements.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "05",
    icon: Database,
    title: "Cookies and Website Technology",
    content: (
      <>
        <p>
          The website or its hosting and technical services may use
          cookies or similar technologies if these features are enabled.
          They can support essential functionality, security, or user
          experience.
        </p>
        <p>
          The actual cookies used by this website should be identified
          before a complete cookie disclosure is published. You can
          review your browser settings to manage available cookie
          controls.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    number: "06",
    icon: UserCheck,
    title: "Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on applicable law, you may be able to request access
          to, correction of, or deletion of personal information, or
          raise an objection or concern about how it is handled.
        </p>
        <p>
          Requests may require reasonable verification of your identity.
          Some information may need to be retained where the law requires
          it or where a valid exception applies.
        </p>
        <p>
          To ask a privacy-related question, contact us using the details
          provided below.
        </p>
      </>
    ),
  },
  {
    id: "children",
    number: "07",
    icon: ShieldCheck,
    title: "Students and Children",
    content: (
      <>
        <p>
          Our services may be relevant to school-age students. Parents
          and guardians should supervise the submission of children&apos;s
          personal information and use appropriate contact details when
          making enquiries on their behalf.
        </p>
        <p>
          Any collection or processing of children&apos;s data must follow
          the requirements of applicable law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "08",
    icon: FileText,
    title: "Changes to This Policy",
    content: (
      <p>
        This policy may be updated when website features, business
        practices, or legal requirements change. The updated version
        should be published on this page with a revised effective date.
        Please review this page periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container">
          <Link href="/" className="privacy-back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="privacy-hero-icon">
            <ShieldCheck size={31} />
          </div>

          <span className="privacy-eyebrow">
            YOUR PRIVACY MATTERS
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p className="privacy-hero-description">
            Understand how personal information may be collected,
            used, and protected when you interact with Better Result
            Home Tuition.
          </p>

          <div className="privacy-meta">
            <span>
              <LockKeyhole size={15} />
              Privacy &amp; Data Protection
            </span>
            <span className="privacy-meta-dot" />
            <span>Effective date: 13 October 2026</span>
          </div>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="privacy-container privacy-content-layout">
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar-card">
              <h2>On this page</h2>
              <nav aria-label="Privacy Policy sections">
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    <span>{section.number}</span>
                    {section.title}
                  </a>
                ))}
                <a href="#contact-privacy">
                  <span>09</span>
                  Contact Information
                </a>
              </nav>
            </div>
          </aside>

          <div className="privacy-article">
            <div className="privacy-intro-card">
              <div className="privacy-intro-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h2>About This Policy</h2>
                <p>
                  This Privacy Policy describes the intended approach
                  to handling information in connection with Better
                  Result Home Tuition. It should be read alongside
                  the website&apos;s Terms &amp; Conditions and other
                  applicable policies.
                </p>
              </div>
            </div>

            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="privacy-article-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="privacy-section-heading">
                    <div className="privacy-section-icon">
                      <Icon size={21} />
                    </div>
                    <div>
                      <span className="privacy-section-number">
                        SECTION {section.number}
                      </span>
                      <h2>{section.title}</h2>
                    </div>
                  </div>

                  <div className="privacy-article-body">
                    {section.content}
                  </div>
                </article>
              );
            })}

            <article
              className="privacy-article-card privacy-contact-card"
              id="contact-privacy"
            >
              <div className="privacy-section-heading">
                <div className="privacy-section-icon">
                  <Mail size={21} />
                </div>
                <div>
                  <span className="privacy-section-number">
                    SECTION 09
                  </span>
                  <h2>Contact Information</h2>
                </div>
              </div>

              <div className="privacy-article-body">
                <p>
                  If you have a question or concern about this Privacy
                  Policy or the handling of your information, you can
                  contact Better Result Home Tuition.
                </p>

                <a
                  className="privacy-contact-detail"
                  href="mailto:betterresulthometuition@gmail.com"
                >
                  <Mail size={18} />
                  <span>
                    betterresulthometuition@gmail.com
                  </span>
                </a>

                <a
                  className="privacy-contact-detail"
                  href="tel:+917037374833"
                >
                  <Phone size={18} />
                  <span>+91 70373 74833</span>
                </a>

                <p className="privacy-address">
                  Shivalock Colony, Chakshha Nagar, near Vidhan Sabha,
                  Dehradun, Uttarakhand
                </p>
              </div>
            </article>

            <div className="privacy-notice">
              <ShieldCheck size={19} />
              <p>
                Before publishing, verify that this policy matches
                the website&apos;s actual data collection, storage,
                sharing, and deletion practices.
              </p>
            </div>

            <div className="privacy-related-links">
              <span>Related pages</span>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
