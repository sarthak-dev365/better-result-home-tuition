
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "@/styles/home/faq.css";

const faqs = [
  {
    question: "Which classes do you provide tuition for?",
    answer:
      "We provide tuition support for students from Classes 1 to 12, along with specialised preparation support for JEE and NEET.",
  },
  {
    question: "Do you offer both home and online tuition?",
    answer:
      "Yes. We offer both home tuition and online tuition options. You can share your preferred learning mode, and our team will help you explore suitable options.",
  },
  {
    question: "Which boards and subjects do you cover?",
    answer:
      "We provide academic support for CBSE, ICSE, ISC and State Board students. Subjects include Mathematics, Science, English, Social Science, Physics, Chemistry, Biology, Commerce subjects and more, depending on class and tutor availability.",
  },
  {
    question: "Do you provide preparation for JEE and NEET?",
    answer:
      "Yes. Students can enquire about JEE and NEET preparation, including Physics, Chemistry and Mathematics for JEE, and Physics, Chemistry, Botany and Zoology for NEET.",
  },
  {
    question: "How can I request a free demo class?",
    answer:
      "You can submit your details through our Free Demo form. Share your class, subjects and preferred tuition mode. Our team will review your request and contact you to discuss the demo schedule.",
  },
  {
    question: "Will my demo class be confirmed immediately?",
    answer:
      "No. Submitting a demo request does not mean automatic confirmation. Our team will review your requirements, check suitable tutor availability and contact you with the next steps. Your demo will be confirmed after discussion with our team.",
  },
  {
    question: "How do you help students find a suitable tutor?",
    answer:
      "We review the student's class, subjects, location, preferred tuition mode and learning requirements to help identify a suitable tutor. Tutor availability and final arrangements are discussed with you.",
  },
  {
    question: "Can I choose my preferred tuition days and timings?",
    answer:
      "Yes. You can share your preferred days and timings with our team. The final schedule will depend on tutor availability and mutual confirmation.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

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
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={21}
                    className="faq-chevron"
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                  >
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
