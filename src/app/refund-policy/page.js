
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import "./refund-policy.css";

export const metadata = {
  title: "Refund & Cancellation Policy | Better Result Home Tuition",
  description:
    "Read the Refund and Cancellation Policy of Better Result Home Tuition, including cancellations, payment terms, tutor registration, and refund requests.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FileText,
    content: (
      <>
        <p>
          This Refund &amp; Cancellation Policy explains how cancellation
          requests and refund-related enquiries are handled by Better Result
          Home Tuition.
        </p>
        <p>
          We aim to communicate any applicable fees, cancellation conditions,
          and refund terms clearly before a payment or service arrangement is
          confirmed.
        </p>
      </>
    ),
  },
  {
    id: "website-payments",
    title: "Website Payments",
    icon: CreditCard,
    content: (
      <>
        <p>
          At present, this website does not confirm an integrated online
          payment or automatic refund facility. Submitting an enquiry or
          registration form does not, by itself, mean that a payment has been
          made.
        </p>
        <p>
          If a payment is introduced or arranged separately, the applicable
          amount, purpose, payment method, cancellation conditions, and refund
          terms should be communicated and agreed upon before payment.
        </p>
      </>
    ),
  },
  {
    id: "student-cancellation",
    title: "Student and Parent Cancellations",
    icon: XCircle,
    content: (
      <>
        <p>
          Students or parents who wish to cancel a tuition enquiry, change
          their requirements, or discontinue a tuition arrangement should
          contact us using the details provided on this website.
        </p>
        <p>
          Cancellation of an enquiry does not automatically create a refund
          entitlement. If a separate fee has been paid, the agreed terms for
          that particular service or arrangement will apply.
        </p>
      </>
    ),
  },
  {
    id: "tutor-registration",
    title: "Tutor Registration and Verification",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Tutors may submit registration details for consideration. Submitting
          a registration form does not guarantee approval, verification,
          placement, student allocation, or employment.
        </p>
        <p>
          If any registration or verification fee is introduced, its amount,
          purpose, and applicable cancellation or refund conditions will be
          communicated before payment is requested.
        </p>
        <p>
          Refund eligibility, where applicable, will be assessed according to
          the terms communicated and agreed upon for that payment.
        </p>
      </>
    ),
  },
  {
    id: "refund-requests",
    title: "How to Request a Refund",
    icon: RefreshCw,
    content: (
      <>
        <p>
          If you believe you are eligible for a refund under the terms agreed
          for a particular payment, please contact us with the relevant
          information.
        </p>
        <ul>
          <li>Your full name and registered contact details.</li>
          <li>The service or registration related to the payment.</li>
          <li>
            The payment date, amount, and available transaction reference.
          </li>
          <li>A brief explanation of your refund request.</li>
        </ul>
        <p>
          We may request additional information to understand and review the
          request. Please do not send passwords, OTPs, or complete payment
          card details.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    title: "Refund Review and Processing",
    icon: CalendarDays,
    content: (
      <>
        <p>
          Refund requests will be reviewed against the terms applicable to the
          relevant payment or service arrangement. If a refund is approved, we
          will communicate the next steps and any applicable processing
          information.
        </p>
        <p>
          We do not promise a fixed refund processing period in this policy.
          The actual timeline may depend on the agreed terms and the payment
          provider or financial institution involved.
        </p>
      </>
    ),
  },
  {
    id: "exceptions",
    title: "Important Conditions",
    icon: CheckCircle2,
    content: (
      <ul>
        <li>An enquiry or form submission is not proof of payment.</li>
        <li>
          Refund eligibility depends on the terms applicable to the particular
          payment or service.
        </li>
        <li>
          Any changes to a tuition arrangement should be discussed with the
          relevant parties.
        </li>
        <li>
          Nothing in this policy is intended to remove any rights available to
          you under applicable law.
        </li>
      </ul>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: FileText,
    content: (
      <p>
        Better Result Home Tuition may update this policy when its services or
        payment arrangements change. The updated version will be published on
        this page with a revised effective date where appropriate.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: CircleHelp,
    content: (
      <>
        <p>
          If you have a question about cancellation, a payment, or a refund
          request, contact us using the details below.
        </p>

        <div className="refund-contact-details">
          <a href="mailto:betterresulthometuition@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>betterresulthometuition@gmail.com</span>
          </a>

          <a href="tel:+917037374833">
            <Phone size={18} aria-hidden="true" />
            <span>+91 70373 74833</span>
          </a>

          <div className="refund-address">
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

export default function RefundPolicyPage() {
  return (
    <main className="refund-policy-page">
      {/* Hero */}
      <section className="refund-policy-hero">
        <div
          className="refund-policy-hero-shape"
          aria-hidden="true"
        />

        <div className="refund-policy-container refund-hero-content">
          <Link href="/" className="refund-back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <div className="refund-eyebrow">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>TRANSPARENT SERVICE POLICY</span>
          </div>

          <h1>
            Refund &amp; Cancellation <span>Policy</span>
          </h1>

          <p className="refund-hero-description">
            Clear information about cancellations, payment-related enquiries,
            and refund requests at Better Result Home Tuition.
          </p>

          <div className="refund-policy-updated">
            <CalendarDays size={16} aria-hidden="true" />
            <span>Effective Date: 13 October 2026</span>
          </div>

          <div className="refund-hero-highlights">
            <span>
              <ShieldCheck size={15} aria-hidden="true" />
              Clear Terms
            </span>
            <span>
              <FileText size={15} aria-hidden="true" />
              Transparent Process
            </span>
            <span>
              <CircleHelp size={15} aria-hidden="true" />
              Support Available
            </span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="refund-policy-main">
        <div className="refund-policy-container">
          {/* Intro */}
          <div className="refund-policy-intro">
            <div className="refund-intro-icon">
              <FileText size={25} aria-hidden="true" />
            </div>

            <div>
              <span className="refund-content-kicker">
                BETTER RESULT HOME TUITION
              </span>

              <h2>Our Refund &amp; Cancellation Guidelines</h2>

              <p>
                Please read these guidelines before making any payment related
                to our services.
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="refund-policy-notice" role="note">
            <div className="refund-notice-icon">
              <ShieldCheck size={21} aria-hidden="true" />
            </div>

            <div>
              <h3>Important Information</h3>
              <p>
                Any applicable fee and its refund or cancellation conditions
                should be confirmed before payment. This page does not
                guarantee a refund or declare all payments non-refundable.
              </p>
            </div>
          </div>

          {/* Nine independent flash cards */}
          <div className="refund-flashcards">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  className="refund-flashcard"
                  id={section.id}
                  key={section.id}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <div className="refund-flashcard-header">
                    <span className="refund-flashcard-number">
                      {number}
                    </span>

                    <div className="refund-flashcard-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div className="refund-flashcard-heading">
                      <span>POLICY SECTION {number}</span>

                      <h2 id={`${section.id}-heading`}>
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="refund-flashcard-content">
                    {section.content}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="refund-policy-bottom">
            <div className="refund-bottom-icon">
              <Mail size={22} aria-hidden="true" />
            </div>

            <div className="refund-bottom-copy">
              <span>WE ARE HERE TO HELP</span>

              <h2>Have a question about a refund?</h2>

              <p>
                Contact our team with the details of your enquiry so we can
                guide you through the applicable terms.
              </p>

              <a
                href="mailto:betterresulthometuition@gmail.com"
                className="refund-contact-button"
              >
                Email Our Team
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="refund-policy-footer-note">
            <p>
              This policy explains our current approach in general terms.
              Specific payment arrangements may have separate agreed
              conditions, subject to applicable law.
            </p>

            <Link href="/" className="refund-home-link">
              <ArrowLeft size={15} aria-hidden="true" />
              Return to Home
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
