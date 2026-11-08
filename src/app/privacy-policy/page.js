
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  UserRound,
  Database,
  Share2,
  Cookie,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

import "@/styles/pages/privacy-policy.css";

const policySections = [
  {
    id: "information",
    icon: UserRound,
    title: "1. Information We May Collect",
    content: (
      <>
        <p>
          Depending on the services you use and the features available on
          our website, we may request information such as:
        </p>
        <ul>
          <li>Name and contact details, including mobile number and email address.</li>
          <li>Student details such as class, board, subjects and learning requirements.</li>
          <li>Parent or guardian contact information where applicable.</li>
          <li>Teacher application details, educational qualifications and teaching experience.</li>
          <li>Location and preferred tuition requirements.</li>
          <li>Documents voluntarily provided during an application process, where secure submission is available.</li>
          <li>Technical information such as browser type, device information and website usage data, where applicable.</li>
        </ul>
        <p>
          We aim to request only information relevant to the enquiry,
          application or service being considered.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    icon: Database,
    title: "2. How We May Use Your Information",
    content: (
      <>
        <p>Information provided to us may be used for purposes such as:</p>
        <ul>
          <li>Responding to tuition enquiries and service requests.</li>
          <li>Understanding student learning requirements.</li>
          <li>Reviewing teacher applications and qualifications.</li>
          <li>Contacting applicants, students or parents regarding their enquiries.</li>
          <li>Coordinating tuition-related communication and arrangements.</li>
          <li>Improving our website, services and user experience.</li>
          <li>Meeting applicable legal or regulatory requirements.</li>
        </ul>
        <p>
          We will not describe an enquiry, application or booking as confirmed
          unless it has actually been reviewed and confirmed by our team.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "3. Sharing of Information",
    content: (
      <>
        <p>
          We do not intend to sell personal information to third parties.
          Information may be shared only where reasonably necessary, such as:
        </p>
        <ul>
          <li>With relevant team members handling an enquiry or application.</li>
          <li>With a suitable tutor when necessary to evaluate or coordinate a tuition request.</li>
          <li>With service providers involved in website hosting, communication, storage or payment processing, if and when such services are implemented.</li>
          <li>Where disclosure is required by applicable law or a lawful request from an authority.</li>
        </ul>
        <p>
          Any third-party service used for handling personal information
          should be subject to appropriate safeguards and applicable terms.
        </p>
      </>
    ),
  },
  {
    id: "security",
    icon: LockKeyhole,
    title: "4. Data Security",
    content: (
      <>
        <p>
          We recognise the importance of protecting personal information.
          Appropriate technical and organisational safeguards should be
          maintained when personal data is collected or processed.
        </p>
        <p>
          Our website forms are currently frontend previews. They do not
          establish a working application submission, database storage or
          document-upload service by themselves.
        </p>
        <p>
          Sensitive identity documents, including Aadhaar information,
          should only be requested through a secure and appropriately
          protected process where genuinely required.
        </p>
        <p>
          No method of online transmission or electronic storage can be
          guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    icon: FileText,
    title: "5. Data Retention",
    content: (
      <>
        <p>
          Where personal information is collected through an operational
          service, it should be retained only for as long as reasonably
          necessary for the relevant purpose or as required by applicable law.
        </p>
        <p>
          Retention periods may depend on the nature of an enquiry,
          application, service relationship and legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "6. Cookies and Website Technologies",
    content: (
      <>
        <p>
          Our website or its hosting and technical services may use cookies
          or similar technologies to support essential functionality,
          security and performance.
        </p>
        <p>
          Where non-essential cookies or analytics tools are introduced,
          relevant information and choices should be provided as required
          by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    icon: UserRound,
    title: "7. Information Relating to Students",
    content: (
      <>
        <p>
          Our services may be relevant to school students, including
          individuals under 18 years of age.
        </p>
        <p>
          Parents or legal guardians should provide or supervise the
          submission of information relating to minors wherever appropriate.
          We encourage users not to share unnecessary personal or sensitive
          information about children.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    icon: ShieldCheck,
    title: "8. Your Choices and Requests",
    content: (
      <>
        <p>
          Depending on applicable law and the circumstances of processing,
          you may request information about your personal data or ask for
          correction, deletion or other appropriate action.
        </p>
        <p>
          To make a privacy-related request, please contact us using the
          details provided below. We may need to verify your identity before
          acting on certain requests.
        </p>
      </>
    ),
  },
  {
    id: "external",
    icon: Share2,
    title: "9. Third-Party Websites",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites or services.
          Those websites operate under their own privacy policies and terms.
        </p>
        <p>
          We are not responsible for the privacy practices or content of
          external websites. Please review their policies before sharing
          personal information with them.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    icon: FileText,
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy when our website, services or
        applicable requirements change. The updated version will be
        published on this page with a revised effective date.
      </p>
    ),
  },
];

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Better Result Home Tuition to understand how personal information may be collected, used and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      {/* HERO */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-hero-icon">
            <ShieldCheck size={30} />
          </div>

          <span className="privacy-eyebrow">YOUR PRIVACY MATTERS</span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            We value your trust. Learn how information may be handled when
            you visit Better Result Home Tuition and explore our services.
          </p>

          <div className="privacy-effective-date">
            <span>Effective Date</span>
            <strong>7 November 2026</strong>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="privacy-intro">
        <div className="privacy-intro-card">
          <div className="privacy-intro-icon">
            <LockKeyhole size={25} />
          </div>

          <div>
            <h2>Our Commitment to Privacy</h2>
            <p>
              This Privacy Policy explains the approach of Better Result
              Home Tuition towards personal information relating to
              students, parents, teachers, applicants and website visitors.
              Please read it carefully before sharing information with us.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="privacy-content-section">
        <div className="privacy-content-layout">
          <aside className="privacy-sidebar">
            <h3>On This Page</h3>

            <nav aria-label="Privacy policy sections">
              {policySections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
              <a href="#contact-privacy">Contact Information</a>
            </nav>
          </aside>

          <div className="privacy-sections">
            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="privacy-policy-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="privacy-policy-heading">
                    <div className="privacy-policy-icon">
                      <Icon size={21} />
                    </div>
                    <h2>{section.title}</h2>
                  </div>

                  <div className="privacy-policy-body">
                    {section.content}
                  </div>
                </article>
              );
            })}

            {/* CONTACT */}
            <article
              className="privacy-policy-card privacy-contact-card"
              id="contact-privacy"
            >
              <div className="privacy-policy-heading">
                <div className="privacy-policy-icon">
                  <Mail size={21} />
                </div>
                <h2>11. Contact Information</h2>
              </div>

              <div className="privacy-policy-body">
                <p>
                  If you have questions, concerns or requests relating to
                  this Privacy Policy, you may contact Better Result Home
                  Tuition using the following details:
                </p>

                <div className="privacy-contact-details">
                  <div>
                    <span>Email</span>
                    <a href="mailto:betterresulthometuition@gmail.com">
                      betterresulthometuition@gmail.com
                    </a>
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+917037374833">+91 70373 74833</a>
                  </div>

                  <div>
                    <span>Address</span>
                    <p>
                      Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha,
                      Dehradun, Uttarakhand.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="privacy-bottom-cta">
        <h2>Your Trust Matters to Us</h2>
        <p>
          For any privacy-related question, please get in touch with our team.
        </p>

        <Link href="/contact">
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
