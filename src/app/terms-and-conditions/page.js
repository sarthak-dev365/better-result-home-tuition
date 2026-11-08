
import Link from "next/link";
import {
  FileText,
  Users,
  GraduationCap,
  BookOpen,
  IndianRupee,
  CalendarCheck,
  ShieldCheck,
  Scale,
  AlertCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

import "@/styles/pages/terms-and-conditions.css";

const termsSections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          Welcome to Better Result Home Tuition. By accessing or using our
          website, you agree to follow these Terms and Conditions.
          Please read them carefully before using our website or exploring
          our services.
        </p>
        <p>
          If you do not agree with these terms, please discontinue using
          the website.
        </p>
      </>
    ),
  },
  {
    id: "services",
    icon: BookOpen,
    title: "2. Our Services",
    content: (
      <>
        <p>
          Better Result Home Tuition provides information and assistance
          relating to home tuition and online tuition opportunities.
          Our services may include:
        </p>
        <ul>
          <li>Home tuition enquiries for school students.</li>
          <li>Online tuition enquiries.</li>
          <li>Tuition support for Classes 1 to 12.</li>
          <li>Subject-based learning requirements.</li>
          <li>Commerce and competitive examination preparation enquiries, including JEE and NEET.</li>
          <li>Teacher registration and teaching opportunity applications.</li>
        </ul>
        <p>
          Service availability depends on location, subject requirements,
          teacher availability and other relevant factors. Listing a
          service on our website does not guarantee that a suitable tutor
          is immediately available.
        </p>
      </>
    ),
  },
  {
    id: "students",
    icon: Users,
    title: "3. Student and Parent Responsibilities",
    content: (
      <>
        <p>
          Students, parents and guardians are expected to provide accurate
          information when making an enquiry or requesting tuition.
        </p>
        <ul>
          <li>Provide correct contact details and learning requirements.</li>
          <li>Share accurate information about class, board and subjects.</li>
          <li>Ensure that a parent or guardian is involved where appropriate for students under 18.</li>
          <li>Communicate respectfully with tutors and our team.</li>
          <li>Inform our team if tuition requirements or availability change.</li>
        </ul>
        <p>
          Parents or guardians should supervise arrangements involving
          minor students, particularly for home tuition and online sessions.
        </p>
      </>
    ),
  },
  {
    id: "teachers",
    icon: GraduationCap,
    title: "4. Teacher Registration and Applications",
    content: (
      <>
        <p>
          Individuals interested in teaching opportunities may submit
          their details through the teacher registration process when
          the application service is operational.
        </p>
        <ul>
          <li>Applicants should provide accurate personal, educational and professional information.</li>
          <li>Applicants should provide genuine qualification and experience details.</li>
          <li>Additional verification or supporting documents may be requested through an appropriate secure process.</li>
          <li>Application submission does not guarantee selection, employment, student allocation or teaching assignments.</li>
          <li>Teaching opportunities depend on actual requirements and availability.</li>
        </ul>
        <p>
          The teacher registration fee is ₹500. Applicable payment
          information and terms will be displayed before any payment
          facility is activated. No payment is collected through the
          current frontend preview.
        </p>
      </>
    ),
  },
  {
    id: "matching",
    icon: Users,
    title: "5. Tutor Matching and Availability",
    content: (
      <>
        <p>
          We may review student requirements and teacher profiles to
          identify potentially suitable tuition arrangements.
        </p>
        <ul>
          <li>Matching depends on subject, class, location, teaching mode and availability.</li>
          <li>Submitting an enquiry does not guarantee tutor assignment.</li>
          <li>Teacher profiles and availability may change over time.</li>
          <li>Any proposed arrangement may require confirmation by our team and the concerned parties.</li>
        </ul>
        <p>
          We do not guarantee a particular academic result, examination
          score, admission outcome or improvement in performance.
        </p>
      </>
    ),
  },
  {
    id: "demo",
    icon: CalendarCheck,
    title: "6. Demo Sessions and Enquiries",
    content: (
      <>
        <p>
          Users may request information about a demo session or tuition
          discussion through the available enquiry channels.
        </p>
        <ul>
          <li>A requested date or time is a preference, not an automatic confirmation.</li>
          <li>Demo arrangements are subject to review and confirmation.</li>
          <li>Availability may depend on the relevant teacher and location.</li>
          <li>Users should wait for confirmation from our team before treating a demo as scheduled.</li>
        </ul>
      </>
    ),
  },
  {
    id: "fees",
    icon: IndianRupee,
    title: "7. Fees and Payments",
    content: (
      <>
        <p>
          Any applicable tuition charges, registration fees or other
          payment requirements will be communicated through the relevant
          service or payment process.
        </p>
        <ul>
          <li>The teacher registration fee currently stated on our website is ₹500.</li>
          <li>Tuition fees may depend on class, subject, teaching mode, duration and other requirements.</li>
          <li>Users should review the applicable amount and payment terms before making a payment.</li>
          <li>Payment confirmation should be relied upon only after it has been verified through the relevant payment process.</li>
        </ul>
        <p>
          No tuition fee amount or additional charge is implied by these
          Terms unless it has been separately communicated and agreed.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    icon: AlertCircle,
    title: "8. Cancellation and Refunds",
    content: (
      <>
        <p>
          Cancellation, rescheduling and refund requests will be governed
          by the applicable Refund and Cancellation Policy and any
          specific terms communicated before a relevant transaction.
        </p>
        <p>
          Please review the published policy before making a payment.
          If the applicable policy does not address your situation,
          contact our team for clarification.
        </p>
        <p>
          These Terms do not independently promise a refund or establish
          a cancellation period.
        </p>
        <Link href="/refund-policy" className="terms-inline-link">
          Read Refund and Cancellation Policy <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "conduct",
    icon: ShieldCheck,
    title: "9. User Conduct and Safety",
    content: (
      <>
        <p>
          All users are expected to behave respectfully and responsibly
          while communicating through our website or in connection with
          tuition arrangements.
        </p>
        <ul>
          <li>Do not submit false, misleading or fraudulent information.</li>
          <li>Do not misuse website forms or communication channels.</li>
          <li>Do not share another person&apos;s private information without appropriate permission.</li>
          <li>Do not engage in harassment, threats or inappropriate behaviour.</li>
          <li>Respect the privacy and safety of students, parents and teachers.</li>
        </ul>
        <p>
          Any safety concern relating to a tuition arrangement should be
          reported to our team promptly.
        </p>
      </>
    ),
  },
  {
    id: "intellectual",
    icon: FileText,
    title: "10. Website Content and Intellectual Property",
    content: (
      <>
        <p>
          Website text, branding, graphics, design elements and other
          original materials may be protected by applicable intellectual
          property laws.
        </p>
        <p>
          You may access the website for personal and informational use.
          You must not copy, reproduce, distribute, modify or commercially
          exploit protected website content without appropriate permission,
          except where permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    icon: Scale,
    title: "11. Third-Party Services and Links",
    content: (
      <>
        <p>
          Our website may contain links to external websites or services.
          Such services may operate under separate terms and privacy
          policies.
        </p>
        <p>
          We do not control external websites and users should review
          their applicable terms before using them.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    icon: AlertCircle,
    title: "12. Service Limitations",
    content: (
      <>
        <p>
          We aim to provide useful information and assist with tuition
          enquiries. However, website information and availability may
          change.
        </p>
        <ul>
          <li>We do not guarantee uninterrupted website access.</li>
          <li>We do not guarantee that every enquiry will result in a tuition arrangement.</li>
          <li>We do not guarantee academic results or examination success.</li>
          <li>Users should independently communicate and confirm relevant tuition arrangements.</li>
        </ul>
        <p>
          Nothing in these Terms is intended to exclude or restrict any
          right or protection that cannot lawfully be excluded or restricted.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "13. Privacy and Personal Information",
    content: (
      <>
        <p>
          Information submitted through our services may be handled in
          accordance with our Privacy Policy and applicable requirements.
        </p>
        <p>
          Please avoid sharing unnecessary sensitive personal information
          through ordinary website forms or unsecured communication channels.
        </p>
        <Link href="/privacy-policy" className="terms-inline-link">
          Read Privacy Policy <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "changes",
    icon: FileText,
    title: "14. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms and Conditions when our website,
        services or applicable requirements change. Updated terms will
        be published on this page with a revised effective date.
        Users are encouraged to review this page periodically.
      </p>
    ),
  },
];

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Read the Terms and Conditions for using Better Result Home Tuition services, website and teacher application process.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="terms-page">
      {/* HERO */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <div className="terms-hero-icon">
            <Scale size={30} />
          </div>

          <span className="terms-eyebrow">WEBSITE GUIDELINES</span>

          <h1>
            Terms & <span>Conditions</span>
          </h1>

          <p>
            Please review the terms that guide the use of Better Result
            Home Tuition, our website and the tuition-related services
            we offer.
          </p>

          <div className="terms-effective-date">
            <span>Effective Date</span>
            <strong>7 November 2026</strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="terms-intro">
        <div className="terms-intro-card">
          <div className="terms-intro-icon">
            <FileText size={25} />
          </div>

          <div>
            <h2>Important Information</h2>
            <p>
              These Terms and Conditions apply to visitors and users
              accessing our website and exploring our services.
              Different service arrangements may also be subject to
              additional terms communicated separately.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="terms-content-section">
        <div className="terms-content-layout">
          <aside className="terms-sidebar">
            <h3>On This Page</h3>

            <nav aria-label="Terms and conditions sections">
              {termsSections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
              <a href="#terms-contact">Contact Information</a>
            </nav>
          </aside>

          <div className="terms-sections">
            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="terms-policy-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="terms-policy-heading">
                    <div className="terms-policy-icon">
                      <Icon size={21} />
                    </div>

                    <h2>{section.title}</h2>
                  </div>

                  <div className="terms-policy-body">
                    {section.content}
                  </div>
                </article>
              );
            })}

            {/* CONTACT */}
            <article
              className="terms-policy-card"
              id="terms-contact"
            >
              <div className="terms-policy-heading">
                <div className="terms-policy-icon">
                  <Mail size={21} />
                </div>

                <h2>15. Contact Information</h2>
              </div>

              <div className="terms-policy-body">
                <p>
                  For questions or clarification regarding these Terms
                  and Conditions, please contact Better Result Home Tuition:
                </p>

                <div className="terms-contact-details">
                  <div>
                    <span>Email</span>
                    <a href="mailto:betterresulthometuition@gmail.com">
                      betterresulthometuition@gmail.com
                    </a>
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+917037374833">
                      +91 70373 74833
                    </a>
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

      {/* BOTTOM CTA */}
      <section className="terms-bottom-cta">
        <h2>Need Any Clarification?</h2>
        <p>
          Contact our team if you have questions about these terms or
          our tuition-related services.
        </p>

        <Link href="/contact">
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
