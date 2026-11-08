
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Headphones,
  GraduationCap,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import "@/styles/pages/contact.css";

const CONTACT_PHONE = "+917037374833";
const CONTACT_EMAIL = "betterresulthometuition@gmail.com";

const CONTACT_ADDRESS =
  "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand";

const WHATSAPP_URL = "https://wa.me/917037374833";

export default function ContactPage() {
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

    setNotice(
      "Your enquiry form is ready. Message delivery will be enabled after backend/API integration."
    );
  }

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <span className="contact-orb contact-orb-one" />
          <span className="contact-orb contact-orb-two" />
          <span className="contact-grid-pattern" />
        </div>

        <div className="contact-container contact-hero-inner">
          <div className="contact-hero-content">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              WE ARE HERE TO HELP
            </div>

            <h1>
              Let&apos;s Start a
              <span> Conversation</span>
            </h1>

            <p>
              Have questions about home tuition, online tuition,
              teacher registration or our services? Get in touch
              with our team. We would be happy to hear from you.
            </p>

            <div className="contact-hero-actions">
              <a href="#contact-form" className="contact-primary-btn">
                Send an Enquiry
                <ArrowRight size={19} />
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="contact-outline-btn"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>

            <div className="contact-hero-trust">
              <div>
                <ShieldCheck size={19} />
                <span>Personalised Assistance</span>
              </div>

              <div>
                <GraduationCap size={20} />
                <span>Learning Support</span>
              </div>
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-visual-card">
              <div className="contact-visual-top">
                <div className="contact-visual-icon">
                  <Headphones size={27} />
                </div>
                <span>We&apos;re Listening</span>
              </div>

              <div className="contact-visual-heading">
                <span>BETTER RESULT HOME TUITION</span>
                <h2>
                  Your Learning Journey Starts With a Conversation.
                </h2>
              </div>

              <div className="contact-visual-divider" />

              <div className="contact-visual-contact">
                <div className="contact-visual-contact-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span>Call our team</span>
                  <strong>{CONTACT_PHONE}</strong>
                </div>
              </div>

              <div className="contact-visual-contact">
                <div className="contact-visual-contact-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span>Write to us</span>
                  <strong>{CONTACT_EMAIL}</strong>
                </div>
              </div>

              <div className="contact-visual-decoration">
                <MessageCircle size={34} />
              </div>
            </div>

            <div className="contact-floating-note">
              <span className="contact-floating-check">
                <CheckCircle2 size={19} />
              </span>
              <div>
                <strong>We&apos;re here to help</strong>
                <span>Let&apos;s discuss your requirements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-information contact-section">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">GET IN TOUCH</span>
            <h2>
              We Would Love to <span>Hear From You</span>
            </h2>
            <p>
              Choose the most convenient way to contact
              Better Result Home Tuition.
            </p>
          </div>

          <div className="contact-info-grid">
            <a
              className="contact-info-card"
              href={`tel:${CONTACT_PHONE}`}
            >
              <div className="contact-info-card-top">
                <div className="contact-info-icon contact-blue">
                  <Phone size={25} />
                </div>
                <span className="contact-card-arrow">
                  <ArrowRight size={18} />
                </span>
              </div>

              <span className="contact-card-label">
                DIRECT COMMUNICATION
              </span>
              <h3>Call Us</h3>
              <p>
                Speak with our team for enquiries and assistance.
              </p>
              <strong>{CONTACT_PHONE}</strong>
            </a>

            <a
              className="contact-info-card"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <div className="contact-info-card-top">
                <div className="contact-info-icon contact-orange">
                  <Mail size={25} />
                </div>
                <span className="contact-card-arrow">
                  <ArrowRight size={18} />
                </span>
              </div>

              <span className="contact-card-label">EMAIL SUPPORT</span>
              <h3>Email Us</h3>
              <p>
                Send us your questions and detailed enquiries.
              </p>
              <strong>{CONTACT_EMAIL}</strong>
            </a>

            <div className="contact-info-card contact-address-card">
              <div className="contact-info-card-top">
                <div className="contact-info-icon contact-green">
                  <MapPin size={25} />
                </div>
                <span className="contact-card-arrow">
                  <MapPin size={18} />
                </span>
              </div>

              <span className="contact-card-label">OUR LOCATION</span>
              <h3>Visit Us</h3>
              <p>
                Find Better Result Home Tuition in Dehradun.
              </p>
              <strong>{CONTACT_ADDRESS}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM AND SIDEBAR */}
      <section className="contact-main contact-section">
        <div className="contact-container">
          <div className="contact-main-grid">

            {/* CONTACT FORM */}
            <div className="contact-form-wrapper" id="contact-form">
              <div className="contact-form-heading">
                <span className="contact-section-label">
                  SEND US A MESSAGE
                </span>

                <h2>
                  How Can We <span>Help You?</span>
                </h2>

                <p>
                  Share your details and tell us what you would
                  like to know about our services.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Your Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={80}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength={120}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number <span>*</span>
                    </label>

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
                    <label htmlFor="contact-enquiry">
                      Enquiry Type <span>*</span>
                    </label>

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
                      <option value="Commerce">
                        Commerce (Classes 11–12)
                      </option>
                      <option value="JEE / NEET">JEE / NEET Preparation</option>
                      <option value="Tutor Registration">
                        Tutor Registration
                      </option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={5}
                    maxLength={2000}
                  />
                </div>

                <button className="contact-submit-btn" type="submit">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>

                {notice && (
                  <div className="contact-form-notice" role="status">
                    <CheckCircle2 size={19} />
                    <span>{notice}</span>
                  </div>
                )}
              </form>

              <div className="contact-privacy-note">
                <ShieldCheck size={19} />
                <p>
                  This form is currently a frontend preview.
                  Messages will not be delivered or stored until
                  backend/API integration is completed.
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="contact-sidebar">
              <div className="contact-sidebar-card">
                <div className="contact-sidebar-icon">
                  <Headphones size={29} />
                </div>

                <span className="contact-sidebar-label">
                  NEED QUICK ASSISTANCE?
                </span>

                <h3>
                  Let&apos;s Talk About Your Requirements
                </h3>

                <p>
                  Whether you are a parent looking for a tutor
                  or a teacher interested in joining us, our
                  team is available through the contact details below.
                </p>

                <div className="contact-sidebar-divider" />

                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="contact-sidebar-link"
                >
                  <span className="contact-sidebar-link-icon">
                    <Phone size={18} />
                  </span>
                  <span>
                    <small>Call our team</small>
                    <strong>{CONTACT_PHONE}</strong>
                  </span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-sidebar-link"
                >
                  <span className="contact-sidebar-link-icon">
                    <Mail size={18} />
                  </span>
                  <span>
                    <small>Email us</small>
                    <strong>Email Our Team</strong>
                  </span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="contact-hours-card">
                <div className="contact-hours-icon">
                  <Clock3 size={23} />
                </div>
                <div>
                  <h3>Contact Information</h3>
                  <p>
                    For enquiries, please call or email us using
                    the contact details provided on this page.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* SIMPLE ADDRESS SECTION */}
      <section className="contact-location contact-section">
        <div className="contact-container">
          <div className="contact-location-card">
            <div className="contact-location-icon">
              <MapPin size={29} />
            </div>

            <div className="contact-location-content">
              <span className="contact-location-label">
                OUR ADDRESS
              </span>

              <h2>Better Result Home Tuition</h2>

              <p>{CONTACT_ADDRESS}</p>

              <span className="contact-location-city">
                Dehradun, Uttarakhand, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-final-cta">
        <div className="contact-final-bg">
          <span className="contact-final-orb" />
        </div>

        <div className="contact-container contact-final-content">
          <div className="contact-final-icon">
            <GraduationCap size={31} />
          </div>

          <span>LOOKING FOR A TUTOR?</span>

          <h2>
            Let&apos;s Find the Right
            <br />
            Learning Support
          </h2>

          <p>
            Tell us your class, subjects and tuition preferences
            to start your tutor enquiry.
          </p>

          <Link
            href="/find-a-tutor"
            className="contact-primary-btn"
          >
            Find a Tutor
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
}
