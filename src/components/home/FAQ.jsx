
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/home/faq.css";

const faqs = [
  {
    question: "Which classes do you provide tuition for?",
    answer:
      "We provide tuition support for students from Classes 1 to 12, along with guidance for JEE and NEET preparation.",
  },
  {
    question: "Do you offer both home and online tuition?",
    answer:
      "Yes, you can submit a request for either home tuition or online tuition, depending on your requirements and tutor availability.",
  },
  {
    question: "Which boards do you cover?",
    answer:
      "Tuition support is available for CBSE, ICSE, ISC and State Board students, subject to tutor availability.",
  },
  {
    question: "Do you provide JEE and NEET preparation?",
    answer:
      "Yes, you can enquire about JEE and NEET preparation support. Suitable tutor availability will be discussed with you.",
  },
  {
    question: "How can I request a free demo class?",
    answer:
      "Contact us with your class, subject and preferred date and time. Our team will review your request and confirm the demo schedule.",
  },
  {
    question: "How is a suitable tutor selected?",
    answer:
      "We review your class, subjects, location, tuition mode and other preferences to help identify a suitable tutor.",
  },
  {
    question: "Can I choose my preferred tuition timings?",
    answer:
      "Yes, you can share your preferred days and timings. The final schedule depends on tutor availability and mutual confirmation.",
  },
  {
    question: "How can I register as a teacher?",
    answer:
      "You can apply through our Become a Teacher registration process and submit your educational and professional details for review.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-eyebrow">GOT QUESTIONS?</span>
          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>
          <p>
            Find answers to common questions about our home tuition and
            online tuition services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-active" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={21}
                    className="faq-chevron"
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
