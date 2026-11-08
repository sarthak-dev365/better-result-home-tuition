
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  Headphones,
  MapPin,
  MessageCircle,
  Monitor,
  UserRound,
} from "lucide-react";

import "@/styles/pages/free-demo.css";

function getLocalDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function FreeDemoPage() {
  const [minDate] = useState(getLocalDateString);
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const selectedDate = formData.get("preferredDate");

    if (minDate && selectedDate < minDate) {
      setStatusMessage(
        "Please select today or a future date for your demo request."
      );
      return;
    }

    setStatusMessage(
      "Your Free Demo request has been prepared successfully. Our team will review your details and contact you regarding availability and confirmation. This request has not been sent or saved yet."
    );

    form.reset();
  }

  return (
    <div className="free-demo-page">
      <section className="free-demo-page-hero">
        <div className="free-demo-page-container">
          <Link href="/" className="free-demo-back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="free-demo-page-hero-content">
            <span className="free-demo-page-eyebrow">
              <GraduationCap size={17} />
              YOUR LEARNING JOURNEY STARTS HERE
            </span>

            <h1>
              Request Your
              <span> Free Demo Session</span>
            </h1>

            <p>
              Tell us about your learning requirements. Our team
              will connect with you to discuss a suitable tutor
              and demo schedule.
            </p>

            <div className="free-demo-hero-points">
              <span>
                <CheckCircle2 size={17} />
                Share your requirements
              </span>
              <span>
                <CheckCircle2 size={17} />
                Discuss a suitable schedule
              </span>
              <span>
                <CheckCircle2 size={17} />
                Get confirmation from our team
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="free-demo-form-section">
        <div className="free-demo-form-layout">
          <div className="free-demo-form-main">
            <div className="free-demo-form-heading">
              <span className="free-demo-form-icon">
                <BookOpen size={23} />
              </span>

              <div>
                <span className="free-demo-section-label">
                  DEMO REQUEST FORM
                </span>
                <h2>Tell Us What You Need</h2>
                <p>
                  Fill in the details below so we can understand
                  your learning requirements.
                </p>
              </div>
            </div>

            <form
              className="free-demo-request-form"
              onSubmit={handleSubmit}
            >
              <div className="free-demo-form-group">
                <h3>
                  <UserRound size={19} />
                  Student & Parent Information
                </h3>

                <div className="free-demo-fields-grid">
                  <label className="free-demo-field">
                    <span>Student Name *</span>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="Enter student name"
                      minLength={2}
                      maxLength={70}
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className="free-demo-field">
                    <span>Parent / Guardian Name *</span>
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Enter parent name"
                      minLength={2}
                      maxLength={70}
                      required
                    />
                  </label>

                  <label className="free-demo-field">
                    <span>Mobile Number *</span>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="10-digit mobile number"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      pattern="[6-9][0-9]{9}"
                      minLength={10}
                      maxLength={10}
                      required
                    />
                  </label>

                  <label className="free-demo-field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      autoComplete="email"
                      maxLength={100}
                    />
                  </label>
                </div>
              </div>

              <div className="free-demo-form-group">
                <h3>
                  <GraduationCap size={19} />
                  Academic Information
                </h3>

                <div className="free-demo-fields-grid">
                  <label className="free-demo-field">
                    <span>Class / Course *</span>
                    <select name="class" defaultValue="" required>
                      <option value="" disabled>
                        Select class or course
                      </option>
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index + 1}>
                          Class {index + 1}
                        </option>
                      ))}
                      <option>JEE Preparation</option>
                      <option>NEET Preparation</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="free-demo-field">
                    <span>Board *</span>
                    <select name="board" defaultValue="" required>
                      <option value="" disabled>
                        Select board
                      </option>
                      <option>CBSE</option>
                      <option>ICSE / ISC</option>
                      <option>Uttarakhand State Board</option>
                      <option>Other State Board</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="free-demo-field free-demo-field-full">
                    <span>Subject / Course Interested In *</span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Example: Mathematics, Physics, Commerce..."
                      maxLength={150}
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="free-demo-form-group">
                <h3>
                  <Monitor size={19} />
                  Tuition Preferences
                </h3>

                <div className="free-demo-fields-grid">
                  <label className="free-demo-field">
                    <span>Preferred Tuition Mode *</span>
                    <select
                      name="tuitionMode"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select tuition mode
                      </option>
                      <option>Home Tuition</option>
                      <option>Online Tuition</option>
                      <option>Both - Home / Online</option>
                    </select>
                  </label>

                  <label className="free-demo-field">
                    <span>City / Area *</span>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter your area or city"
                      maxLength={100}
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="free-demo-form-group">
                <h3>
                  <CalendarDays size={19} />
                  Preferred Demo Schedule
                </h3>

                <div className="free-demo-fields-grid">
                  <label className="free-demo-field">
                    <span>Preferred Date *</span>

                    <input
                      type="date"
                      name="preferredDate"
                      min={minDate || undefined}
                      required
                    />

                    <small className="free-demo-date-hint">
                      <CalendarDays size={14} />
                      Select a date from the calendar.
                    </small>
                  </label>

                  <label className="free-demo-field">
                    <span>Preferred Time *</span>
                    <select
                      name="preferredTime"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select preferred time
                      </option>
                      <option>Morning (8 AM - 11 AM)</option>
                      <option>Afternoon (11 AM - 2 PM)</option>
                      <option>Evening (2 PM - 5 PM)</option>
                      <option>Late Evening (5 PM - 8 PM)</option>
                    </select>
                  </label>

                  <label className="free-demo-field free-demo-field-full">
                    <span>Additional Requirements</span>
                    <textarea
                      name="requirements"
                      rows={4}
                      maxLength={1000}
                      placeholder="Tell us about your learning goals or any specific requirements..."
                    />
                  </label>
                </div>
              </div>

              <label className="free-demo-consent">
                <input
                  type="checkbox"
                  name="consent"
                  value="yes"
                  required
                />
                <span>
                  I agree that Better Result Home Tuition may contact
                  me regarding this Free Demo request.
                </span>
              </label>

              <button type="submit" className="free-demo-submit">
                Submit Demo Request
                <ArrowRight size={19} />
              </button>

              {statusMessage && (
                <div
                  className="free-demo-status-message"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 size={21} />
                  <p>{statusMessage}</p>
                </div>
              )}

              <p className="free-demo-form-disclaimer">
                Submitting this form does not confirm a demo booking.
                Our team will review your request and contact you
                regarding availability and confirmation. This form
                is currently a frontend preview and does not transmit
                or store your information.
              </p>
            </form>
          </div>

          <aside className="free-demo-sidebar">
            <div className="free-demo-sidebar-card">
              <span className="free-demo-sidebar-icon">
                <Headphones size={25} />
              </span>

              <h3>Need Help?</h3>
              <p>
                Have questions before requesting your demo?
                Connect with our team.
              </p>

              <a href="tel:+917037374833">
                <MessageCircle size={17} />
                +91 70373 74833
              </a>

              <a
                href="https://wa.me/917037374833"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="free-demo-sidebar-card free-demo-address-card">
              <span className="free-demo-sidebar-icon">
                <MapPin size={25} />
              </span>

              <h3>Our Location</h3>
              <p>
                Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha,
                Dehradun, Uttarakhand.
              </p>
            </div>

            <div className="free-demo-sidebar-note">
              <Clock size={21} />
              <div>
                <strong>Request Review</strong>
                <p>
                  Your preferred schedule will be reviewed by our
                  team before confirmation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
