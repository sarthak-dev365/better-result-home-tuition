
"use client";

import { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import "@/styles/home/contact-section.css";

const WHATSAPP_NUMBER = "917037374833";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 70373 74833",
    href: "tel:+917037374833",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "betterresulthometuition@gmail.com",
    href: "mailto:betterresulthometuition@gmail.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value:
      "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand",
    href: null,
  },
];

const subjectsByCourse = {
  "Classes 1–5": [
    "English",
    "Hindi",
    "Mathematics",
    "Environmental Studies (EVS)",
    "Basic Science",
    "Sanskrit",
    "General Knowledge",
    "All Subjects",
    "Other",
  ],

  "Classes 6–8": [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Social Science",
    "Sanskrit",
    "Computer Studies",
    "All Subjects",
    "Other",
  ],

  "Classes 9–10": [
    "English",
    "Hindi",
    "Mathematics",
    "Basic Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Social Science",
    "Computer Science",
    "All Subjects",
    "Other",
  ],

  "Classes 11–12 Science": [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "English",
    "Computer Science",
    "Information Practices",
    "Physical Education",
    "All Subjects",
    "Other",
  ],

  "Classes 11–12 Commerce": [
    "Accountancy",
    "Business Studies",
    "Economics",
    "Applied Mathematics",
    "English",
    "Computer Science",
    "Information Practices",
    "Physical Education",
    "All Subjects",
    "Other",
  ],

  "JEE Preparation": [
    "JEE Physics",
    "JEE Chemistry",
    "JEE Mathematics",
    "Complete JEE Preparation",
    "Other",
  ],

  "NEET Preparation": [
    "NEET Physics",
    "NEET Chemistry",
    "Botany",
    "Zoology",
    "Complete NEET Preparation",
    "Other",
  ],

  "Other Enquiry": [
    "Free Demo Class",
    "Tutor Availability",
    "Fee Enquiry",
    "General Enquiry",
    "Other",
  ],
};

function openWhatsApp(message) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.location.assign(whatsappUrl);
}

export default function ContactSection() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const availableSubjects = subjectsByCourse[selectedClass] || [];

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedSubject("");
  };

  const handlePhoneInput = (event) => {
    const digitsOnly = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    event.target.value = digitsOnly;
    event.target.setCustomValidity("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const nameInput = form.elements.namedItem("name");
    const phoneInput = form.elements.namedItem("phone");
    const messageInput = form.elements.namedItem("message");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const studentClass = form.elements.namedItem("class").value;
    const subject = form.elements.namedItem("subject").value;
    const message = messageInput.value.trim();

    nameInput.setCustomValidity(
      name ? "" : "Please enter your name."
    );

    phoneInput.setCustomValidity(
      /^[6-9]\d{9}$/.test(phone)
        ? ""
        : "Please enter a valid 10-digit Indian mobile number."
    );

    messageInput.setCustomValidity(
      message ? "" : "Please enter your enquiry message."
    );

    if (!form.reportValidity()) {
      return;
    }

    const enquiryMessage = [
      "*NEW WEBSITE ENQUIRY*",
      "*Better Result Home Tuition*",
      "",
      "━━━━━━━━━━━━━━━━━━",
      "",
      `*Name:* ${name}`,
      `*Phone Number:* +91 ${phone}`,
      `*Email Address:* ${email || "Not provided"}`,
      `*Class / Course:* ${studentClass}`,
      `*Subject:* ${subject}`,
      "",
      "*Enquiry Message:*",
      message,
      "",
      "━━━━━━━━━━━━━━━━━━",
      "Enquiry received through the official website.",
    ].join("\n");

    openWhatsApp(enquiryMessage);
  };

  const handleWhatsAppChat = () => {
    const message = [
      "Hello Better Result Home Tuition Team!",
      "",
      "I would like to enquire about your home tuition and online tuition services.",
      "",
      "Please share details about available classes, subjects, tutors and tuition options.",
      "",
      "Thank you.",
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}

        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let&apos;s Talk About
            <span> Your Learning Goals</span>
          </h2>

          <p>
            Have a question or looking for a suitable tutor?
            Get in touch with our team.
          </p>
        </div>

        {/* MAIN CONTACT CONTENT */}

        <div className="contact-content">

          {/* LEFT: CONTACT INFORMATION */}

          <div className="contact-info">
            <h3>Contact Information</h3>

            <p className="contact-info-description">
              Reach out to us for tuition enquiries, demo requests
              and teacher registration information.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.title}>
                    <div className="contact-detail-icon">
                      <Icon size={22} />
                    </div>

                    <div className="contact-detail-text">
                      <h4>{item.title}</h4>

                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="contact-whatsapp"
              onClick={handleWhatsAppChat}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT: ENQUIRY FORM */}

          <div className="contact-form-wrapper">
            <h3>Send Us an Enquiry</h3>

            <p>
              Share your details and requirements. Our team can
              contact you to discuss suitable options.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME AND PHONE */}

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Phone Number <span>*</span>
                  </label>

                  <div className="contact-phone-input">
                    <span className="contact-country-code">
                      +91
                    </span>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      minLength={10}
                      maxLength={10}
                      title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
                      onInput={handlePhoneInput}
                      required
                    />
                  </div>
                </div>

              </div>

              {/* EMAIL */}

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  maxLength={254}
                />
              </div>

              {/* CLASS / COURSE */}

              <div className="contact-field">
                <label htmlFor="contact-class">
                  Class / Course <span>*</span>
                </label>

                <select
                  id="contact-class"
                  name="class"
                  value={selectedClass}
                  onChange={handleClassChange}
                  required
                >
                  <option value="" disabled>
                    Select class or course
                  </option>

                  {Object.keys(subjectsByCourse).map((course) => (
                    <option value={course} key={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* SUBJECT */}

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Select Subject <span>*</span>
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={selectedSubject}
                  onChange={(event) =>
                    setSelectedSubject(event.target.value)
                  }
                  disabled={!selectedClass}
                  required
                >
                  <option value="" disabled>
                    {selectedClass
                      ? "Select your subject"
                      : "First select your class / course"}
                  </option>

                  {availableSubjects.map((subject) => (
                    <option value={subject} key={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Your Message <span>*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  maxLength={1500}
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit"
              >
                Send Enquiry
                <ArrowRight size={19} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
