
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Cookie,
  Eye,
  FileText,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import "./cookie-policy.css";

export const metadata = {
  title: "Cookie Policy | Better Result Home Tuition",
  description:
    "Learn how cookies and similar technologies may be used on the Better Result Home Tuition website and how you can manage your browser settings.",
};

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    icon: Cookie,
    content: (
      <>
        <p>
          Cookies are small text files that websites may store on your device
          when you visit them. They can help a website remember certain
          preferences, maintain functionality, and understand how visitors use
          its pages.
        </p>
        <p>
          Other technologies, such as local storage or similar tools, may also
          be used for certain website functions.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We May Use Cookies",
    icon: Settings,
    content: (
      <>
        <p>
          Better Result Home Tuition may use cookies or similar technologies
          where needed to support the website and its features.
        </p>
        <ul>
          <li>
            <strong>Essential functionality:</strong> To help pages and
            necessary website features operate correctly.
          </li>
          <li>
            <strong>Preferences:</strong> To remember selected settings where
            such functionality is available.
          </li>
          <li>
            <strong>Performance and analytics:</strong> If analytics tools are
            enabled, they may help us understand website visits and improve
            usability.
          </li>
          <li>
            <strong>Third-party features:</strong> Embedded maps or other
            external services may use their own technologies when accessed.
          </li>
        </ul>
        <p>
          The actual cookies used depend on the features and third-party
          services configured on the live website.
        </p>
      </>
    ),
  },
  {
    id: "types",
    title: "Types of Cookies",
    icon: SlidersHorizontal,
    content: (
      <>
        <p>Cookies are commonly grouped into the following categories:</p>
        <ul>
          <li>
            <strong>Strictly necessary cookies:</strong> Support core website
            operation and security.
          </li>
          <li>
            <strong>Functional cookies:</strong> Help remember preferences and
            improve convenience.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help measure website usage
            where analytics services are enabled.
          </li>
          <li>
            <strong>Advertising cookies:</strong> May be used by advertising
            services if such services are added to the website.
          </li>
        </ul>
        <p>
          These are general categories, not a statement that every category is
          currently active on our website.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    icon: Eye,
    content: (
      <>
        <p>
          Some website features may link to or display content from external
          providers. If you use those features, the relevant provider may
          process information or set cookies under its own policies.
        </p>
        <p>
          Better Result Home Tuition does not control all technologies used by
          external websites or services. Please review their privacy and
          cookie information when using those services.
        </p>
      </>
    ),
  },
  {
    id: "manage",
    title: "How to Manage Cookies",
    icon: SlidersHorizontal,
    content: (
      <>
        <p>
          You can usually manage or delete cookies through your browser
          settings. Depending on your browser, you may be able to block all
          cookies, allow selected cookies, or remove cookies already stored on
          your device.
        </p>
        <p>
          Blocking certain cookies may affect the operation of some website
          features. Browser controls vary, so check your browser&apos;s help
          section for instructions.
        </p>
        <p>
          If a cookie preference or consent tool is provided on the website,
          you can also use the options made available through that tool.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Cookie Duration",
    icon: CalendarDays,
    content: (
      <>
        <p>
          Some cookies are session cookies, which are generally removed when
          you close your browser. Others may remain on your device for a
          defined period or until you delete them.
        </p>
        <p>
          The duration depends on the particular cookie and the service that
          sets it. We do not specify individual cookie names or expiry periods
          here because these need to be confirmed from the website&apos;s
          actual configuration.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy and Personal Information",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Cookies may sometimes be associated with information about your
          device, browser, or interactions with a website. Whether this
          information identifies you depends on the technology and the
          information involved.
        </p>
        <p>
          For information about how personal information may be collected and
          handled, please read our{" "}
          <Link href="/privacy-policy" className="cookie-inline-link">
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    icon: FileText,
    content: (
      <p>
        We may update this Cookie Policy if our website features, technologies,
        or applicable requirements change. Updates will be published on this
        page with a revised effective date where appropriate.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    content: (
      <>
        <p>
          If you have any questions about this Cookie Policy, contact Better
          Result Home Tuition using the details below.
        </p>

        <div className="cookie-contact-details">
          <a href="mailto:betterresulthometuition@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>betterresulthometuition@gmail.com</span>
          </a>

          <a href="tel:+917037374833">
            <Phone size={18} aria-hidden="true" />
            <span>+91 70373 74833</span>
          </a>

          <div className="cookie-address">
            <MapPin size={18} aria-hidden="true" />
            <span>
              Shivalock Colony, Chakshha Nagar, near Vidhan Sabha, Dehradun,
              Uttarakhand.
            </span>
          </div>
        </div>
      </>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="cookie-policy-page">
      <section className="cookie-policy-hero">
        <div className="cookie-hero-circle" aria-hidden="true" />

        <div className="cookie-policy-container cookie-hero-content">
          <Link href="/" className="cookie-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <div className="cookie-eyebrow">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>WEBSITE PRIVACY INFORMATION</span>
          </div>

          <h1>
            Cookie <span>Policy</span>
          </h1>

          <p className="cookie-hero-description">
            Understand how cookies may support website functionality and how
            you can manage them through your browser settings.
          </p>

          <div className="cookie-policy-updated">
            <CalendarDays size={16} aria-hidden="true" />
            <span>Effective Date: 13 October 2026</span>
          </div>

          <div className="cookie-hero-highlights">
            <span>
              <Cookie size={15} aria-hidden="true" />
              Cookie Information
            </span>
            <span>
              <Settings size={15} aria-hidden="true" />
              Browser Controls
            </span>
            <span>
              <ShieldCheck size={15} aria-hidden="true" />
              Privacy Awareness
            </span>
          </div>
        </div>
      </section>

      <section className="cookie-policy-main">
        <div className="cookie-policy-container">
          <div className="cookie-policy-intro">
            <div className="cookie-intro-icon">
              <Cookie size={25} aria-hidden="true" />
            </div>

            <div>
              <span className="cookie-content-kicker">
                BETTER RESULT HOME TUITION
              </span>

              <h2>Our Cookie Guidelines</h2>

              <p>
                Learn about cookies, how they may be used on our website, and
                the options available to manage them.
              </p>
            </div>
          </div>

          <div className="cookie-policy-notice" role="note">
            <div className="cookie-notice-icon">
              <ShieldCheck size={21} aria-hidden="true" />
            </div>

            <div>
              <h3>Important Information</h3>
              <p>
                The exact cookies used depend on the technologies configured
                on the live website. This policy does not claim that analytics,
                advertising, or other non-essential cookies are currently
                active.
              </p>
            </div>
          </div>

          {/* Nine independent numbered flash cards */}
          <div className="cookie-flashcards">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  className="cookie-flashcard"
                  id={section.id}
                  key={section.id}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="cookie-flashcard-header">
                    <span className="cookie-flashcard-number">
                      {number}
                    </span>

                    <div className="cookie-flashcard-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div className="cookie-flashcard-heading">
                      <span>POLICY SECTION {number}</span>

                      <h2 id={`${section.id}-heading`}>
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="cookie-flashcard-content">
                    {section.content}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cookie-policy-bottom">
            <div className="cookie-bottom-icon">
              <ShieldCheck size={22} aria-hidden="true" />
            </div>

            <div className="cookie-bottom-copy">
              <span>YOUR PRIVACY MATTERS</span>

              <h2>Understand Your Privacy Options</h2>

              <p>
                Review our Privacy Policy to learn more about how personal
                information may be collected and handled.
              </p>

              <Link
                href="/privacy-policy"
                className="cookie-privacy-button"
              >
                Read Privacy Policy
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <footer className="cookie-policy-footer-note">
            <p>
              This policy should be checked against the cookies and third-party
              technologies actually used by the live website before
              publication.
            </p>

            <Link href="/" className="cookie-home-link">
              <ArrowLeft size={15} aria-hidden="true" />
              Return to Home
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
