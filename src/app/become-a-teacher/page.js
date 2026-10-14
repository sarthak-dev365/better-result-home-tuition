
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Laptop,
  House,
  CheckCircle2,
  UserRound,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  BookMarked,
  Send,
  ShieldCheck,
} from "lucide-react";
import "./become-a-teacher.css";

const subjectOptions = [
  "Mathematics",
  "Science",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindi",
  "Social Science",
  "Accountancy",
  "Economics",
  "Other",
];

const benefits = [
  {
    icon: BookOpen,
    title: "Share Your Knowledge",
    description:
      "Use your subject knowledge to support students in their learning journey.",
  },
  {
    icon: Laptop,
    title: "Choose a Teaching Mode",
    description:
      "Tell us whether you prefer home tuition, online tuition or both.",
  },
  {
    icon: Users,
    title: "Student-Focused Teaching",
    description:
      "Share the classes and subjects you are comfortable teaching.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Provide your contact information, qualifications and teaching preferences.",
  },
  {
    number: "02",
    title: "Application Review",
    description:
      "Your application can be reviewed after the registration system is connected.",
  },
  {
    number: "03",
    title: "Discuss Next Steps",
    description:
      "Any further discussion will depend on the review process and suitable opportunities.",
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  qualification: "",
  experience: "",
  teachingMode: "both",
  subjects: [],
  classes: "",
  message: "",
  consent: false,
};

export default function BecomeATeacherPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(false);

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function toggleSubject(subject) {
    setForm((current) => ({
      ...current,
      subjects: current.subjects.includes(subject)
        ? current.subjects.filter((item) => item !== subject)
        : [...current.subjects, subject],
    }));

    setErrors((current) => ({ ...current, subjects: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.city.trim()) {
      nextErrors.city = "Please enter your city.";
    }

    if (!form.qualification.trim()) {
      nextErrors.qualification = "Please enter your qualification.";
    }

    if (!form.experience) {
      nextErrors.experience = "Please select your experience.";
    }

    if (form.subjects.length === 0) {
      nextErrors.subjects = "Select at least one subject.";
    }

    if (!form.classes.trim()) {
      nextErrors.classes = "Enter the classes you prefer to teach.";
    }

    if (!form.consent) {
      nextErrors.consent = "Please confirm your consent.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setPreview(true);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setPreview(false);
  }

  return (
    <main className="bat-page">
      <section className="bat-hero">
        <div className="bat-hero-decoration bat-hero-decoration-one" />
        <div className="bat-hero-decoration bat-hero-decoration-two" />

        <div className="bat-container bat-hero-grid">
          <div className="bat-hero-copy">
            <span className="bat-eyebrow">
              <GraduationCap size={16} />
              TEACH WITH BETTER RESULT HOME TUITION
            </span>

            <h1>
              Your knowledge can
              <span> make a difference.</span>
            </h1>

            <p>
              Introduce your teaching expertise, share the subjects you
              know best and tell us about your preferred teaching mode.
              Start by sharing your details.
            </p>

            <div className="bat-hero-actions">
              <a href="#teacher-application" className="bat-button bat-button-primary">
                Apply to Teach <ArrowRight size={18} />
              </a>

              <Link href="/online-tuition" className="bat-button bat-button-outline">
                Explore Online Tuition
              </Link>
            </div>

            <div className="bat-hero-note">
              <ShieldCheck size={18} />
              <span>Application details are not sent or saved yet.</span>
            </div>
          </div>

          <div className="bat-hero-visual">
            <div className="bat-teacher-illustration">
              <div className="bat-illustration-top">
                <span className="bat-status-dot" />
                <span>YOUR TEACHING JOURNEY</span>
              </div>

              <div className="bat-teacher-icon">
                <GraduationCap size={55} strokeWidth={1.5} />
              </div>

              <div className="bat-illustration-lines">
                <span />
                <span />
                <span />
              </div>

              <div className="bat-illustration-book">
                <BookOpen size={28} />
              </div>

              <div className="bat-illustration-caption">
                <strong>Teach with purpose.</strong>
                <span>Help students build strong foundations.</span>
              </div>
            </div>

            <div className="bat-floating-card">
              <div className="bat-floating-icon">
                <BookMarked size={21} />
              </div>
              <div>
                <strong>Your expertise matters</strong>
                <span>Subjects · Classes · Teaching mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bat-benefits-section">
        <div className="bat-container">
          <div className="bat-section-heading">
            <span className="bat-section-label">WHY EXPLORE TEACHING WITH US?</span>
            <h2>Bring your teaching strengths forward</h2>
            <p>
              Tell us what you teach and how you prefer to teach.
              Any opportunity depends on application review and actual availability.
            </p>
          </div>

          <div className="bat-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="bat-benefit-card" key={benefit.title}>
                  <div className="bat-benefit-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bat-process-section">
        <div className="bat-container">
          <div className="bat-section-heading">
            <span className="bat-section-label">THE APPLICATION JOURNEY</span>
            <h2>Three steps to get started</h2>
            <p>
              Here is the intended application flow. Actual application
              processing will be enabled during backend integration.
            </p>
          </div>

          <div className="bat-process-grid">
            {processSteps.map((step) => (
              <article className="bat-process-card" key={step.number}>
                <span className="bat-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bat-form-section" id="teacher-application">
        <div className="bat-container bat-form-layout">
          <aside className="bat-form-aside">
            <span className="bat-section-label">TEACHER APPLICATION</span>
            <h2>Tell us about yourself.</h2>
            <p>
              Share accurate information about your qualifications,
              subjects and preferred teaching arrangements.
            </p>

            <div className="bat-aside-point">
              <CheckCircle2 size={19} />
              <span>Provide accurate contact information.</span>
            </div>

            <div className="bat-aside-point">
              <CheckCircle2 size={19} />
              <span>Select the subjects and classes you can teach.</span>
            </div>

            <div className="bat-aside-point">
              <CheckCircle2 size={19} />
              <span>Choose your preferred teaching mode.</span>
            </div>

            <div className="bat-aside-notice">
              <ShieldCheck size={20} />
              <p>
                This is a frontend preview form. It does not submit your
                personal information to a server.
              </p>
            </div>
          </aside>

          <div className="bat-form-card">
            {preview ? (
              <div className="bat-preview-success">
                <div className="bat-success-icon">
                  <CheckCircle2 size={38} />
                </div>

                <span className="bat-section-label">PREVIEW COMPLETE</span>
                <h2>Thanks, {form.fullName.trim()}!</h2>
                <p>
                  Your form has passed frontend validation. No application
                  has been submitted or saved.
                </p>

                <div className="bat-preview-summary">
                  <div>
                    <span>Preferred teaching mode</span>
                    <strong>
                      {form.teachingMode === "home"
                        ? "Home Tuition"
                        : form.teachingMode === "online"
                          ? "Online Tuition"
                          : "Both"}
                    </strong>
                  </div>

                  <div>
                    <span>Subjects selected</span>
                    <strong>{form.subjects.join(", ")}</strong>
                  </div>

                  <div>
                    <span>Preferred classes</span>
                    <strong>{form.classes}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="bat-button bat-button-primary bat-reset-button"
                  onClick={resetForm}
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <>
                <div className="bat-form-heading">
                  <span className="bat-form-step">APPLICATION DETAILS</span>
                  <h3>Teacher registration form</h3>
                  <p>Fields marked * are required.</p>
                </div>

                <form className="bat-form" onSubmit={handleSubmit} noValidate>
                  <div className="bat-form-grid">
                    <div className="bat-field">
                      <label htmlFor="bat-fullName">Full Name *</label>
                      <div className="bat-input-wrap">
                        <UserRound size={18} />
                        <input
                          id="bat-fullName"
                          name="fullName"
                          value={form.fullName}
                          onChange={updateField}
                          placeholder="Enter your full name"
                          autoComplete="name"
                        />
                      </div>
                      {errors.fullName && <small className="bat-error">{errors.fullName}</small>}
                    </div>

                    <div className="bat-field">
                      <label htmlFor="bat-phone">Mobile Number *</label>
                      <div className="bat-input-wrap">
                        <Phone size={18} />
                        <input
                          id="bat-phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          value={form.phone}
                          onChange={updateField}
                          placeholder="10-digit mobile number"
                          autoComplete="tel-national"
                        />
                      </div>
                      {errors.phone && <small className="bat-error">{errors.phone}</small>}
                    </div>

                    <div className="bat-field">
                      <label htmlFor="bat-email">Email Address *</label>
                      <div className="bat-input-wrap">
                        <Mail size={18} />
                        <input
                          id="bat-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={updateField}
                          placeholder="you@example.com"
                          autoComplete="email"
                        />
                      </div>
                      {errors.email && <small className="bat-error">{errors.email}</small>}
                    </div>

                    <div className="bat-field">
                      <label htmlFor="bat-city">City / Location *</label>
                      <div className="bat-input-wrap">
                        <MapPin size={18} />
                        <input
                          id="bat-city"
                          name="city"
                          value={form.city}
                          onChange={updateField}
                          placeholder="Enter your city"
                          autoComplete="address-level2"
                        />
                      </div>
                      {errors.city && <small className="bat-error">{errors.city}</small>}
                    </div>

                    <div className="bat-field">
                      <label htmlFor="bat-qualification">Highest Qualification *</label>
                      <div className="bat-input-wrap">
                        <GraduationCap size={18} />
                        <input
                          id="bat-qualification"
                          name="qualification"
                          value={form.qualification}
                          onChange={updateField}
                          placeholder="e.g. B.Sc., B.Ed., M.A."
                        />
                      </div>
                      {errors.qualification && <small className="bat-error">{errors.qualification}</small>}
                    </div>

                    <div className="bat-field">
                      <label htmlFor="bat-experience">Teaching Experience *</label>
                      <div className="bat-input-wrap">
                        <BriefcaseBusiness size={18} />
                        <select
                          id="bat-experience"
                          name="experience"
                          value={form.experience}
                          onChange={updateField}
                        >
                          <option value="">Select experience</option>
                          <option value="Fresher">Fresher</option>
                          <option value="Less than 1 year">Less than 1 year</option>
                          <option value="1–3 years">1–3 years</option>
                          <option value="3–5 years">3–5 years</option>
                          <option value="5+ years">5+ years</option>
                        </select>
                      </div>
                      {errors.experience && <small className="bat-error">{errors.experience}</small>}
                    </div>
                  </div>

                  <fieldset className="bat-fieldset">
                    <legend>Preferred Teaching Mode *</legend>
                    <div className="bat-radio-grid">
                      {[
                        { value: "home", label: "Home Tuition", icon: House },
                        { value: "online", label: "Online Tuition", icon: Laptop },
                        { value: "both", label: "Both", icon: GraduationCap },
                      ].map((mode) => {
                        const Icon = mode.icon;

                        return (
                          <label
                            className={`bat-radio-card ${
                              form.teachingMode === mode.value ? "selected" : ""
                            }`}
                            key={mode.value}
                          >
                            <input
                              type="radio"
                              name="teachingMode"
                              value={mode.value}
                              checked={form.teachingMode === mode.value}
                              onChange={updateField}
                            />
                            <Icon size={20} />
                            <span>{mode.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset className="bat-fieldset">
                    <legend>Subjects You Can Teach *</legend>
                    <div className="bat-subject-options">
                      {subjectOptions.map((subject) => (
                        <label
                          key={subject}
                          className={`bat-subject-chip ${
                            form.subjects.includes(subject) ? "selected" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.subjects.includes(subject)}
                            onChange={() => toggleSubject(subject)}
                          />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                    {errors.subjects && <small className="bat-error">{errors.subjects}</small>}
                  </fieldset>

                  <div className="bat-field">
                    <label htmlFor="bat-classes">Classes You Prefer to Teach *</label>
                    <input
                      className="bat-plain-input"
                      id="bat-classes"
                      name="classes"
                      value={form.classes}
                      onChange={updateField}
                      placeholder="e.g. Class 6–10 or Class 11–12"
                    />
                    {errors.classes && <small className="bat-error">{errors.classes}</small>}
                  </div>

                  <div className="bat-field">
                    <label htmlFor="bat-message">Additional Information (Optional)</label>
                    <textarea
                      className="bat-plain-input bat-textarea"
                      id="bat-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={updateField}
                      placeholder="Share your teaching preferences or other relevant details."
                    />
                  </div>

                  <label className="bat-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={updateField}
                    />
                    <span>
                      I confirm that the information I entered is accurate
                      and agree to use it for this application preview. *
                    </span>
                  </label>
                  {errors.consent && <small className="bat-error">{errors.consent}</small>}

                  <button type="submit" className="bat-button bat-button-primary bat-submit">
                    Review Application <Send size={17} />
                  </button>

                  <p className="bat-form-disclaimer">
                    Frontend demonstration only. Clicking the button will
                    validate and preview the details, not send them.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bat-bottom-cta">
        <div className="bat-container bat-bottom-cta-inner">
          <div>
            <span className="bat-section-label">EXPLORE OUR LEARNING OPTIONS</span>
            <h2>Discover the tuition formats we are building for students.</h2>
            <p>
              Explore online learning or browse classes before continuing.
            </p>
          </div>

          <div className="bat-bottom-actions">
            <Link href="/classes" className="bat-button bat-button-light">
              Browse Classes <ArrowRight size={17} />
            </Link>
            <Link href="/online-tuition" className="bat-bottom-text-link">
              Online Tuition
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
