"use client";

import { useId, useState } from "react";
import {
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

import "../../styles/home/faq-section.css";

const faqs = [
  {
    category: "CLASSES",
    question: "Which classes does Better Result Home Tuition cover?",
    answer:
      "We cover Classes 1–5 (Primary), Classes 6–8 (Middle), Classes 9–10 (Secondary), and Classes 11–12 (Senior Secondary). Share the student's class, subjects and learning goals to explore suitable tuition options.",
  },
  {
    category: "LEARNING MODES",
    question: "Do you offer both Home Tuition and Online Tuition?",
    answer:
      "You can enquire about both Home Tuition and Online Tuition. The suitable option depends on your location, class level, preferred schedule and learning requirements. Contact us to discuss the available options.",
  },
  {
    category: "BOARD EXAMINATIONS",
    question: "Do you support CBSE, ICSE and State Board examinations?",
    answer:
      "You can enquire about school studies and board examination preparation for CBSE, ICSE and State Boards. Please mention the student's class, board and subjects when submitting your enquiry.",
  },
  {
    category: "COMMERCE",
    question: "Are Commerce classes available for Classes 11–12?",
    answer:
      "Commerce is included among our senior secondary learning categories. You can enquire about Accountancy, Business Studies, Economics and other relevant subjects according to your requirements.",
  },
  {
    category: "COMPETITIVE EXAMS",
    question: "Can I enquire about JEE or NEET preparation?",
    answer:
      "Yes, you can enquire about JEE and NEET preparation. Mention your target examination, current class and preparation needs so the appropriate learning options can be discussed.",
  },
  {
    category: "TUTOR REGISTRATION",
    question: "How can I register as a tutor?",
    answer:
      "Visit the Become a Tutor section and complete the registration form with the requested details and documents. Follow the instructions shown during registration. Any verification steps or applicable fees should be confirmed through the official registration process.",
  },
  {
    category: "SERVICE AREA",
    question: "Is Home Tuition available in Dehradun?",
    answer:
      "Availability may depend on your locality, subjects and preferred schedule. Share your area and PIN code through the Contact Us section so that availability can be confirmed.",
  },
  {
    category: "CONTACT",
    question: "How can I contact Better Result Home Tuition?",
    answer:
      "Visit the Contact Us section and share your question, student's class, required subjects and preferred learning mode. Providing these details helps the team understand your requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionId = useId();

  return (
    <section
      className="br-faq"
      id="faq"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="br-faq-container">
        <header className="br-faq-header">
          <div className="br-faq-eyebrow">
            <span className="br-faq-eyebrow-icon" aria-hidden="true">
              <Sparkles size={15} strokeWidth={2} />
            </span>

            <span>YOUR QUESTIONS, ANSWERED</span>
          </div>

          <h2 className="br-faq-title" id={`${sectionId}-title`}>
            A little clarity.
            <span>A better start.</span>
          </h2>

          <p className="br-faq-subtitle">
            Find clear answers about tuition, classes, board examinations,
            competitive exam preparation and tutor registration.
          </p>

          <div className="br-faq-heading-meta" aria-hidden="true">
            <span className="br-faq-meta-line" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span className="br-faq-meta-line" />
          </div>
        </header>

        <div className="br-faq-content">
          <div className="br-faq-list-heading">
            <div className="br-faq-list-heading-copy">
              <span className="br-faq-list-kicker">GOOD TO KNOW</span>
              <h3>Common questions</h3>
            </div>

            <span className="br-faq-count">
              {String(faqs.length).padStart(2, "0")} QUESTIONS
            </span>
          </div>

          <div className="br-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const questionId = `${sectionId}-question-${index}`;
              const answerId = `${sectionId}-answer-${index}`;

              return (
                <article
                  className={`br-faq-item${isOpen ? " is-open" : ""}`}
                  key={faq.question}
                >
                  <h3 className="br-faq-question-heading">
                    <button
                      className="br-faq-question"
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                    >
                      <span className="br-faq-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="br-faq-question-copy">
                        <span className="br-faq-category">
                          {faq.category}
                        </span>

                        <span className="br-faq-question-text">
                          {faq.question}
                        </span>
                      </span>

                      <span className="br-faq-toggle" aria-hidden="true">
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.8} />
                        ) : (
                          <Plus size={18} strokeWidth={1.8} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    className="br-faq-answer-shell"
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                    data-open={isOpen ? "true" : "false"}
                    inert={!isOpen}
                  >
                    <div className="br-faq-answer-inner">
                      <div className="br-faq-answer">
                        <span
                          className="br-faq-answer-marker"
                          aria-hidden="true"
                        />

                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="br-faq-bottom-accent" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
