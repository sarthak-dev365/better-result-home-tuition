
import Link from "next/link";
import {
  RefreshCcw,
  IndianRupee,
  CalendarX,
  FileText,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

import "@/styles/pages/refund-policy.css";

export const metadata = {
  title: "Refund and Cancellation Policy",
  description:
    "Review the refund and cancellation information for Better Result Home Tuition.",
};

const policySections = [
  {
    id: "general",
    icon: FileText,
    title: "1. General Information",
    content: (
      <>
        <p>
          Better Result Home Tuition aims to communicate applicable
          payment, cancellation and refund conditions clearly to users.
          These conditions may differ depending on the service or
          transaction involved.
        </p>
        <p>
          Please contact our team and obtain clarification about the
          applicable terms before making any payment.
        </p>
      </>
    ),
  },
  {
    id: "teacher-registration",
    icon: IndianRupee,
    title: "2. Teacher Registration Fee",
    content: (
      <>
        <p>
          The teacher registration fee currently stated on our website
          is ₹500.
        </p>
        <p>
          The refundability of this fee and any conditions applicable
          to cancellation have not yet been specified in this policy.
          Applicants should contact our team and obtain the applicable
          terms before making a payment.
        </p>
        <p>
          Submission of a teacher application does not guarantee
          selection, employment or a teaching assignment.
        </p>
      </>
    ),
  },
  {
    id: "tuition-fees",
    icon: IndianRupee,
    title: "3. Tuition Fees and Other Payments",
    content: (
      <>
        <p>
          Tuition charges may depend on the class, subject, teaching
          mode, duration and specific learning requirements.
        </p>
        <p>
          Any applicable payment and refund conditions should be
          communicated and clarified before the relevant payment is made.
          This page does not establish a fixed tuition refund amount,
          deduction or processing period.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    icon: CalendarX,
    title: "4. Cancellation and Rescheduling",
    content: (
      <>
        <p>
          Students, parents and teachers should contact our team when
          they need to request cancellation or rescheduling of a
          tuition arrangement or demo session.
        </p>
        <p>
          A requested demo date or time is not automatically confirmed.
          Demo sessions are subject to review and confirmation by our team.
        </p>
        <p>
          Specific cancellation deadlines, charges and rescheduling
          conditions will need to be communicated separately before
          the relevant arrangement is confirmed.
        </p>
      </>
    ),
  },
  {
    id: "refund-request",
    icon: RefreshCcw,
    title: "5. How to Raise a Refund Request",
    content: (
      <>
        <p>
          If you have a question about a payment or wish to request
          clarification regarding a refund, contact our team using
          the details provided below.
        </p>
        <ul>
          <li>Provide your name and registered contact details.</li>
          <li>Mention the service or registration concerned.</li>
          <li>Share the payment reference if a payment has been made.</li>
          <li>Clearly explain your cancellation or refund query.</li>
        </ul>
        <p>
          Our team can review the information and communicate the
          applicable terms. Sending a request does not by itself
          confirm that a refund has been approved.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    icon: ShieldCheck,
    title: "6. Refund Review and Processing",
    content: (
      <>
        <p>
          Refund eligibility, approval, payment method and processing
          time will depend on the applicable transaction terms and
          the review of the request.
        </p>
        <p>
          No fixed refund approval period or processing timeline is
          being promised on this page.
        </p>
      </>
    ),
  },
  {
    id: "payment-clarification",
    icon: AlertCircle,
    title: "7. Important Payment Information",
    content: (
      <>
        <ul>
          <li>Review the applicable payment terms before paying.</li>
          <li>Keep your payment confirmation or transaction reference.</li>
          <li>Contact our team if any payment condition is unclear.</li>
          <li>Do not treat a demo request or tuition enquiry as a confirmed booking until confirmation is received.</li>
        </ul>
        <p>
          Any specific written payment terms communicated for a
          transaction should be reviewed before proceeding.
        </p>
      </>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="refund-page">
      {/* HERO */}
      <section className="refund-hero">
        <div className="refund-hero-content">
          <div className="refund-hero-icon">
            <RefreshCcw size={30} />
          </div>

          <span className="refund-eyebrow">
            PAYMENT INFORMATION
          </span>

          <h1>
            Refund & <span>Cancellation Policy</span>
          </h1>

          <p>
            Information about payment clarification, cancellation
            requests and refund enquiries for Better Result Home Tuition.
          </p>

          <div className="refund-effective-date">
            <span>Effective Date</span>
            <strong>7 November 2026</strong>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="refund-notice-section">
        <div className="refund-notice">
          <div className="refund-notice-icon">
            <AlertCircle size={25} />
          </div>

          <div>
            <h2>Please Read Before Making a Payment</h2>
            <p>
              The refundability of the ₹500 teacher registration fee,
              tuition cancellation conditions and refund timelines
              have not yet been specified. Please contact our team
              to clarify the applicable terms before making a payment.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="refund-content-section">
        <div className="refund-content-layout">
          <aside className="refund-sidebar">
            <h3>On This Page</h3>

            <nav aria-label="Refund policy sections">
              {policySections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}

              <a href="#refund-contact">
                Contact Information
              </a>
            </nav>
          </aside>

          <div className="refund-sections">
            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  className="refund-policy-card"
                  id={section.id}
                  key={section.id}
                >
                  <div className="refund-policy-heading">
                    <div className="refund-policy-icon">
                      <Icon size={21} />
                    </div>

                    <h2>{section.title}</h2>
                  </div>

                  <div className="refund-policy-body">
                    {section.content}
                  </div>
                </article>
              );
            })}

            {/* CONTACT */}
            <article
              className="refund-policy-card"
              id="refund-contact"
            >
              <div className="refund-policy-heading">
                <div className="refund-policy-icon">
                  <MessageCircle size={21} />
                </div>

                <h2>8. Contact Information</h2>
              </div>

              <div className="refund-policy-body">
                <p>
                  For payment clarification, cancellation enquiries
                  or refund-related questions, please contact:
                </p>

                <div className="refund-contact-details">
                  <div>
                    <span>Email</span>
                    <a href="mailto:betterresulthometuition@gmail.com">
                      <Mail size={16} />
                      betterresulthometuition@gmail.com
                    </a>
                  </div>

                  <div>
                    <span>Phone</span>
                    <a href="tel:+917037374833">
                      <Phone size={16} />
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
      <section className="refund-bottom-cta">
        <h2>Have a Payment-Related Question?</h2>

        <p>
          Please contact our team before making a payment if you
          need clarification about the applicable terms.
        </p>

        <Link href="/contact">
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
