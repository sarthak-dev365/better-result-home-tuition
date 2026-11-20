
"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Send,
  ShieldCheck,
  CheckCircle2,
  Copy,
  UserRound,
  GraduationCap,
  Clock3,
} from "lucide-react";

import "@/styles/pages/contact.css";

const PHONE = "+917037374833";
const PHONE_DISPLAY = "+91 70373 74833";
const EMAIL = "betterresulthometuition@gmail.com";
const WHATSAPP = "https://wa.me/917037374833";

const ADDRESS =
  "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  enquiry: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("success");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));

    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (name.length < 2) {
      setNoticeType("error");
      setNotice("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNoticeType("error");
      setNotice("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setNoticeType("error");
      setNotice("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!form.enquiry) {
      setNoticeType("error");
      setNotice("Please select your enquiry type.");
      return;
    }

    if (message.length < 5) {
      setNoticeType("error");
      setNotice("Please write a message of at least 5 characters.");
      return;
    }

    const whatsappMessage = [
      "Hello Better Result Home Tuition!",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Enquiry Type: ${form.enquiry}`,
      "",
      "Message:",
      message,
      "",
      "Sent through the Contact Us page.",
    ].join("\n");

    const link = `${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(link, "_blank", "noopener,noreferrer");

    setNoticeType("success");
    setNotice("WhatsApp opened. Please review your message and press Send.");
  }

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setNoticeType("success");
      setNotice("Address copied successfully.");
    } catch {
      setNoticeType("error");
      setNotice("Unable to copy. Please select and copy the address manually.");
    }
  }

  return (
    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-container contact-hero-grid">

          <div className="contact-hero-content">
            <span className="contact-kicker">
              <span className="contact-kicker-dot" />
              CONTACT OUR TEAM
            </span>

            <h1>
              We&apos;re Here
              <span> To Help You.</span>
            </h1>

            <p>
              Looking for the right tutor for your child?
              Have questions about our tuition services?
              We&apos;re just a message away.
            </p>

            <div className="contact-hero-actions">
              <a href="#contact-form" className="contact-btn-primary">
                Send an Enquiry
                <ArrowRight size={17} />
              </a>

              <a href={`tel:${PHONE}`} className="contact-btn-outline">
                <Phone size={16} />
                Call Us
              </a>
            </div>

            <div className="contact-hero-note">
              <ShieldCheck size={17} />
              Personalised guidance for parents, students and teachers
            </div>
          </div>

          <div className="contact-hero-visual">
            <div className="contact-hero-image-frame">
              <Image
                src="/images/contact/contact-hero.jpg"
                alt="Family discussing a student's learning needs with an education consultant"
                width={1536}
                height={512}
                priority
                sizes="(max-width: 760px) 100vw, 55vw"
                className="contact-hero-image"
              />
            </div>

            <div className="contact-image-note">
              <span className="contact-image-note-icon">
                <GraduationCap size={20} />
              </span>
              <span>
                <strong>Your child&apos;s learning matters.</strong>
                <small>Let&apos;s find the right support together.</small>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT METHODS */}

      <section className="contact-methods">
        <div className="contact-container">

          <div className="contact-heading">
            <span className="contact-section-label">GET IN TOUCH</span>
            <h2>We&apos;d Love to Hear From You</h2>
            <p>Choose how you would like to connect with our team.</p>
          </div>

          <div className="contact-method-grid">

            <a href={`tel:${PHONE}`} className="contact-method-card">
              <span className="contact-method-icon method-blue">
                <Phone size={21} />
              </span>

              <span className="contact-method-copy">
                <small>GIVE US A CALL</small>
                <strong>{PHONE_DISPLAY}</strong>
                <span>Speak directly with our team</span>
              </span>

              <ArrowRight size={17} className="contact-method-arrow" />
            </a>

            <a href={`mailto:${EMAIL}`} className="contact-method-card">
              <span className="contact-method-icon method-orange">
                <Mail size={21} />
              </span>

              <span className="contact-method-copy">
                <small>WRITE TO US</small>
                <strong>{EMAIL}</strong>
                <span>Send your questions by email</span>
              </span>

              <ArrowRight size={17} className="contact-method-arrow" />
            </a>

            <div className="contact-method-card">
              <span className="contact-method-icon method-green">
                <MapPin size={21} />
              </span>

              <span className="contact-method-copy">
                <small>OUR LOCATION</small>
                <strong>Dehradun, Uttarakhand</strong>
                <span>Shivalock Colony, Near Vidhan Sabha</span>
              </span>

              <MapPin size={17} className="contact-method-arrow" />
            </div>

          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}

      <section className="contact-enquiry">
        <div className="contact-container">

          <div className="contact-heading">
            <span className="contact-section-label">SEND AN ENQUIRY</span>
            <h2>How Can We Help You?</h2>
            <p>
              Tell us a little about your requirements.
              Our team will be happy to assist you.
            </p>
          </div>

          <div className="contact-enquiry-grid">

            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-title">
                <span className="contact-form-icon">
                  <Send size={19} />
                </span>

                <div>
                  <h3>Send Us a Message</h3>
                  <p>All fields marked with * are required.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>

                    <div className="contact-input-box">
                      <UserRound size={17} />
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        minLength={2}
                        maxLength={80}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <div className="contact-input-box">
                      <Mail size={17} />
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        maxLength={120}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Mobile Number <span>*</span>
                    </label>

                    <div className="contact-input-box">
                      <Phone size={17} />
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-enquiry">
                      I Need Help With <span>*</span>
                    </label>

                    <select
                      id="contact-enquiry"
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose an enquiry type</option>
                      <option value="Home Tuition">Home Tuition</option>
                      <option value="Online Tuition">Online Tuition</option>
                      <option value="One-to-One Tuition">One-to-One Tuition</option>
                      <option value="Group Tuition">Group Tuition</option>
                      <option value="Board Exam Preparation">
                        Board Exam Preparation
                      </option>
                      <option value="JEE / NEET Preparation">
                        JEE / NEET Preparation
                      </option>
                      <option value="Tutor Registration">
                        Tutor Registration
                      </option>
                      <option value="Other">Other</option>
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
                    rows={5}
                    placeholder="Write your requirements or questions here..."
                    value={form.message}
                    onChange={handleChange}
                    minLength={5}
                    maxLength={2000}
                    required
                  />

                  <span className="contact-char-count">
                    {form.message.length}/2000
                  </span>
                </div>

                <button type="submit" className="contact-submit">
                  Continue to WhatsApp
                  <MessageCircle size={18} />
                  <ArrowRight size={17} />
                </button>

                {notice && (
                  <div
                    className={`contact-notice ${
                      noticeType === "error" ? "is-error" : "is-success"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {noticeType === "error" ? (
                      <ShieldCheck size={18} />
                    ) : (
                      <CheckCircle2 size={18} />
                    )}
                    <span>{notice}</span>
                  </div>
                )}
              </form>

              <div className="contact-form-footnote">
                <ShieldCheck size={17} />
                Your details will be added to a WhatsApp message for you
                to review before sending.
              </div>
            </div>

            {/* SUPPORT PANEL */}

            <aside className="contact-support-panel">

              <div className="contact-support-photo">
                <Image
                  src="/images/contact/contact-support.jpg"
                  alt="Customer support professional ready to help"
                  width={760}
                  height={510}
                  sizes="(max-width: 760px) 100vw, 380px"
                  className="contact-support-image"
                />
              </div>

              <div className="contact-support-content">
                <span className="contact-section-label">
                  WE&apos;RE HERE FOR YOU
                </span>

                <h3>Need Quick Assistance?</h3>

                <p>
                  Whether you&apos;re a parent searching for a tutor
                  or a teacher interested in joining us, connect
                  with our team directly.
                </p>

                <a href={`tel:${PHONE}`} className="contact-support-link">
                  <Phone size={17} />
                  <span>
                    <small>Call our team</small>
                    <strong>{PHONE_DISPLAY}</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>

                <a href={`mailto:${EMAIL}`} className="contact-support-link">
                  <Mail size={17} />
                  <span>
                    <small>Email us</small>
                    <strong>Send an Email</strong>
                  </span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-support-whatsapp"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-support-note">
                <span>
                  <Clock3 size={19} />
                </span>
                <p>
                  <strong>We&apos;re happy to help.</strong>
                  Contact us for tuition and teaching-related enquiries.
                </p>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* OFFICE ADDRESS */}

      <section className="contact-office">
        <div className="contact-container">

          <div className="contact-office-card">

            <div className="contact-office-photo">
              <Image
                src="/images/contact/contact-office.jpg"
                alt="Better Result Home Tuition office reception visual"
                width={760}
                height={510}
                sizes="(max-width: 760px) 100vw, 420px"
                className="contact-office-image"
              />
            </div>

            <div className="contact-office-content">
              <span className="contact-section-label">
                <MapPin size={14} />
                FIND US
              </span>

              <h2>Visit Better Result Home Tuition</h2>

              <p>{ADDRESS}</p>

              <span className="contact-office-city">
                Dehradun, Uttarakhand, India
              </span>

              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopyAddress}
              >
                <Copy size={15} />
                Copy Address
              </button>

              {notice === "Address copied successfully." && (
                <span className="contact-copy-success">
                  <CheckCircle2 size={14} />
                  Address copied successfully
                </span>
              )}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
