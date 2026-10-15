"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import "../../styles/home/contact-section.css";

const CONTACT_PHONE = "+917037374833";
const CONTACT_EMAIL = "betterresulthometuition@gmail.com";

const address =
  "Shivalock Colony, Chakshha Nagar, near Vidhan Sabha, Dehradun, Uttarakhand";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });

  const [notice, setNotice] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // The form needs a backend/API to deliver messages.
    setNotice(
      "Your form is ready. Message delivery will work after backend/API integration."
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="contact-eyebrow">
            <MessageCircle size={15} />
            Get In Touch
          </span>

          <h2>
            Contact <span>Us</span>
          </h2>

          <p className="contact-description">
            Have questions? We&apos;re here to help! Reach out to us
            through any of the following channels.
          </p>

          <div className="contact-details">
            <a
              className="contact-detail"
              href={
                CONTACT_PHONE !== "YOUR_MOBILE_NUMBER"
                  ? `tel:${CONTACT_PHONE}`
                  : undefined
              }
            >
              <span className="contact-icon phone-icon">
                <Phone size={21} />
              </span>

              <span className="contact-detail-content">
                <strong>Phone</strong>
                <span>
                  {CONTACT_PHONE === "YOUR_MOBILE_NUMBER"
                    ? "Add your mobile number"
                    : CONTACT_PHONE}
                </span>
              </span>
            </a>

            <a
              className="contact-detail"
              href={
                CONTACT_EMAIL !== "YOUR_EMAIL_ADDRESS"
                  ? `mailto:${CONTACT_EMAIL}`
                  : undefined
              }
            >
              <span className="contact-icon email-icon">
                <Mail size={21} />
              </span>

              <span className="contact-detail-content">
                <strong>Email</strong>
                <span>
                  {CONTACT_EMAIL === "YOUR_EMAIL_ADDRESS"
                    ? "Add your email address"
                    : CONTACT_EMAIL}
                </span>
              </span>
            </a>

            <a
              className="contact-detail"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon address-icon">
                <MapPin size={21} />
              </span>

              <span className="contact-detail-content">
                <strong>Address</strong>
                <span>{address}</span>
                <small>View on Google Maps ↗</small>
              </span>
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Send us a Message</h3>
          <p className="contact-form-subtitle">
            Tell us how we can help you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="10-digit mobile number"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                autoComplete="tel-national"
                title="Enter a valid 10-digit Indian mobile number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-enquiry">Enquiry Type</label>
              <select
                id="contact-enquiry"
                name="enquiry"
                value={form.enquiry}
                onChange={handleChange}
                required
              >
                <option value="">Select an enquiry type</option>
                <option value="Home Tuition">Home Tuition</option>
                <option value="Online Tuition">Online Tuition</option>
                <option value="Board Exam Preparation">
                  Board Exam Preparation
                </option>
                <option value="Commerce">Commerce (Classes 11–12)</option>
                <option value="JEE / NEET">JEE / NEET Preparation</option>
                <option value="Tutor Registration">
                  Tutor Registration
                </option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit-btn" type="submit">
              <span>Send Message</span>
              <Send size={17} />
            </button>

            {notice && (
              <p className="contact-form-notice" role="status">
                <CheckCircle2 size={17} />
                {notice}
              </p>
            )}
          </form>

          <p className="contact-privacy-note">
            Your information should be handled securely and used only
            to respond to your enquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
