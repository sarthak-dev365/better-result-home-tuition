"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  BookOpen,
  GraduationCap,
  Monitor,
  House,
  SlidersHorizontal,
  ArrowRight,
  X,
  CheckCircle2,
  Info,
  ChevronDown,
} from "lucide-react";

import "./find-a-tutor.css";

const classOptions = [
  "Nursery – KG",
  "Class 1 – 5",
  "Class 6 – 8",
  "Class 9 – 10",
  "Class 11 – 12",
  "College",
];

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
  "Commerce",
  "Economics",
  "Other",
];

const initialSearch = {
  subject: "",
  classLevel: "",
  location: "",
  mode: "",
};

export default function FindATutorPage() {
  const [search, setSearch] = useState(initialSearch);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showRequirement, setShowRequirement] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [requirement, setRequirement] = useState({
    studentName: "",
    phone: "",
    classLevel: "",
    subject: "",
    location: "",
    mode: "",
    board: "",
    schedule: "",
    message: "",
  });

  const updateSearch = (name, value) => {
    setSearch((current) => ({ ...current, [name]: value }));
  };

  const updateRequirement = (event) => {
    const { name, value } = event.target;

    setRequirement((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const openRequirement = () => {
    setRequirement((current) => ({
      ...current,
      subject: search.subject || current.subject,
      classLevel: search.classLevel || current.classLevel,
      location: search.location || current.location,
      mode: search.mode || current.mode,
    }));

    setErrors({});
    setSubmitted(false);
    setShowRequirement(true);
  };

  const closeRequirement = () => {
    setShowRequirement(false);
    setErrors({});
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // No tutor database is connected yet.
    // Search criteria are kept in the UI for future API integration.
    document
      .getElementById("fat-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearSearch = () => {
    setSearch(initialSearch);
  };

  const handleRequirementSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!requirement.studentName.trim()) {
      nextErrors.studentName = "Please enter your name.";
    }

    if (!/^[6-9]\d{9}$/.test(requirement.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!requirement.classLevel) {
      nextErrors.classLevel = "Please select a class.";
    }

    if (!requirement.subject) {
      nextErrors.subject = "Please select a subject.";
    }

    if (!requirement.location.trim()) {
      nextErrors.location = "Please enter your preferred location.";
    }

    if (!requirement.mode) {
      nextErrors.mode = "Please select a tuition mode.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    // Frontend-only preview. No data is sent or stored.
    setSubmitted(true);
  };

  const resetRequirement = () => {
    setRequirement({
      studentName: "",
      phone: "",
      classLevel: "",
      subject: "",
      location: "",
      mode: "",
      board: "",
      schedule: "",
      message: "",
    });

    setErrors({});
    setSubmitted(false);
    setShowRequirement(false);
  };

  return (
    <div className="fat-page">
      {/* Search hero */}
      <section className="fat-hero">
        <div className="fat-container">
          <div className="fat-hero-copy">
            <span className="fat-eyebrow">
              BETTER RESULT HOME TUITION
            </span>

            <h1>
              Find the right tutor
              <span> for your learning goals.</span>
            </h1>

            <p>
              Tell us what you want to learn, choose your preferred
              location and learning mode, and explore your next steps.
            </p>
          </div>

          <div className="fat-search-card">
            <div className="fat-search-card-heading">
              <div className="fat-search-card-icon">
                <Search size={21} />
              </div>

              <div>
                <h2>What are you looking for?</h2>
                <p>Start with your tuition requirements.</p>
              </div>
            </div>

            <form onSubmit={handleSearch}>
              <div className="fat-search-grid">
                <label className="fat-control">
                  <span>
                    <BookOpen size={16} />
                    Subject
                  </span>

                  <div className="fat-select-wrap">
                    <select
                      value={search.subject}
                      onChange={(event) =>
                        updateSearch("subject", event.target.value)
                      }
                    >
                      <option value="">Choose a subject</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </label>

                <label className="fat-control">
                  <span>
                    <GraduationCap size={16} />
                    Class / Level
                  </span>

                  <div className="fat-select-wrap">
                    <select
                      value={search.classLevel}
                      onChange={(event) =>
                        updateSearch("classLevel", event.target.value)
                      }
                    >
                      <option value="">Choose class</option>
                      {classOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </label>

                <label className="fat-control">
                  <span>
                    <MapPin size={16} />
                    Location
                  </span>

                  <input
                    type="text"
                    value={search.location}
                    onChange={(event) =>
                      updateSearch("location", event.target.value)
                    }
                    placeholder="City or locality"
                    autoComplete="address-level2"
                  />
                </label>
              </div>

              <div className="fat-mode-picker">
                <span className="fat-mode-label">
                  How would you like to learn?
                </span>

                <div className="fat-mode-options">
                  <button
                    type="button"
                    className={
                      search.mode === "Home Tuition"
                        ? "fat-mode-option fat-mode-option-active"
                        : "fat-mode-option"
                    }
                    onClick={() =>
                      updateSearch(
                        "mode",
                        search.mode === "Home Tuition" ? "" : "Home Tuition"
                      )
                    }
                    aria-pressed={search.mode === "Home Tuition"}
                  >
                    <House size={19} />
                    <span>Home tuition</span>
                  </button>

                  <button
                    type="button"
                    className={
                      search.mode === "Online Tuition"
                        ? "fat-mode-option fat-mode-option-active"
                        : "fat-mode-option"
                    }
                    onClick={() =>
                      updateSearch(
                        "mode",
                        search.mode === "Online Tuition"
                          ? ""
                          : "Online Tuition"
                      )
                    }
                    aria-pressed={search.mode === "Online Tuition"}
                  >
                    <Monitor size={19} />
                    <span>Online tuition</span>
                  </button>
                </div>
              </div>

              {showAdvanced && (
                <div className="fat-advanced-search">
                  <p>
                    More preferences can be added here as the tutor-matching
                    requirements are finalized.
                  </p>
                  <span>
                    Future options: board, budget, preferred days and timing.
                  </span>
                </div>
              )}

              <div className="fat-search-actions">
                <button
                  type="button"
                  className="fat-advanced-button"
                  onClick={() => setShowAdvanced((value) => !value)}
                  aria-expanded={showAdvanced}
                >
                  <SlidersHorizontal size={16} />
                  {showAdvanced ? "Hide preferences" : "More preferences"}
                </button>

                <button
                  type="button"
                  className="fat-clear-button"
                  onClick={clearSearch}
                >
                  Clear
                </button>

                <button
                  type="submit"
                  className="fat-button fat-button-primary"
                >
                  Search tutors <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>

          <p className="fat-hero-footnote">
            <Info size={15} />
            Tutor listings will appear here once real tutor data is connected.
          </p>
        </div>
      </section>

      {/* Results: deliberately no dummy tutor cards */}
      <section className="fat-results-section" id="fat-results">
        <div className="fat-container">
          <div className="fat-results-heading">
            <div>
              <span className="fat-eyebrow">TUTOR DISCOVERY</span>
              <h2>Explore your tuition options</h2>
              <p>
                Choose your learning preferences or share your requirements
                to get started.
              </p>
            </div>

            <span className="fat-results-label">
              <span className="fat-status-dot" />
              Tutor listings coming soon
            </span>
          </div>

          <div className="fat-empty-results">
            <div className="fat-empty-illustration">
              <div className="fat-empty-circle">
                <Search size={34} />
              </div>
              <span className="fat-empty-decoration fat-decoration-one">
                <BookOpen size={19} />
              </span>
              <span className="fat-empty-decoration fat-decoration-two">
                <GraduationCap size={21} />
              </span>
            </div>

            <h3>We’re preparing your tutor discovery experience.</h3>

            <p>
              Real tutor profiles, qualifications, teaching experience,
              reviews and availability will be displayed here after the
              tutor database is connected. We won’t show made-up profiles.
            </p>

            <button
              type="button"
              className="fat-button fat-button-primary"
              onClick={openRequirement}
            >
              Share your tuition requirement
              <ArrowRight size={18} />
            </button>

            <span className="fat-empty-note">
              No dummy profiles or fabricated ratings are displayed.
            </span>
          </div>
        </div>
      </section>

      {/* How the future discovery flow works */}
      <section className="fat-process-section">
        <div className="fat-container">
          <div className="fat-process-heading">
            <span className="fat-eyebrow">SIMPLE PROCESS</span>
            <h2>A clearer way to find tuition</h2>
            <p>
              The planned experience for students and parents on
              Better Result Home Tuition.
            </p>
          </div>

          <div className="fat-process-grid">
            <article className="fat-process-card">
              <span className="fat-process-number">01</span>
              <div className="fat-process-icon">
                <Search size={24} />
              </div>
              <h3>Share your preferences</h3>
              <p>
                Choose the subject, class, location and tuition mode you need.
              </p>
            </article>

            <article className="fat-process-card">
              <span className="fat-process-number">02</span>
              <div className="fat-process-icon">
                <GraduationCap size={25} />
              </div>
              <h3>Explore matching tutors</h3>
              <p>
                Once available, real tutor profiles can be compared using
                their published details.
              </p>
            </article>

            <article className="fat-process-card">
              <span className="fat-process-number">03</span>
              <div className="fat-process-icon">
                <CheckCircle2 size={24} />
              </div>
              <h3>Take the next step</h3>
              <p>
                Review suitable options and follow the enquiry process
                when it is connected.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Requirement form modal */}
      {showRequirement && (
        <div
          className="fat-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRequirement();
            }
          }}
        >
          <section
            className="fat-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fat-requirement-title"
          >
            <div className="fat-modal-header">
              <div>
                <span className="fat-eyebrow">TUITION REQUIREMENT</span>
                <h2 id="fat-requirement-title">
                  {submitted
                    ? "Requirement preview"
                    : "Tell us what you need"}
                </h2>
                <p>
                  {submitted
                    ? "Review the frontend validation result below."
                    : "Enter your preferences to preview the requirement form."}
                </p>
              </div>

              <button
                type="button"
                className="fat-close-button"
                onClick={closeRequirement}
                aria-label="Close requirement form"
              >
                <X size={21} />
              </button>
            </div>

            {submitted ? (
              <div className="fat-form-success">
                <div className="fat-success-icon">
                  <CheckCircle2 size={32} />
                </div>
                <h3>Form validation successful</h3>
                <p>
                  This is only a frontend preview. Your details have not
                  been sent, saved or shared. Backend integration and a
                  secure submission flow will be added later.
                </p>

                <div className="fat-review-summary">
                  <span>Class</span>
                  <strong>{requirement.classLevel}</strong>
                  <span>Subject</span>
                  <strong>{requirement.subject}</strong>
                  <span>Location</span>
                  <strong>{requirement.location}</strong>
                  <span>Tuition mode</span>
                  <strong>{requirement.mode}</strong>
                </div>

                <button
                  type="button"
                  className="fat-button fat-button-primary fat-submit-button"
                  onClick={resetRequirement}
                >
                  Close preview
                </button>
              </div>
            ) : (
              <form
                className="fat-requirement-form"
                onSubmit={handleRequirementSubmit}
                noValidate
              >
                <div className="fat-form-grid">
                  <label className="fat-control">
                    <span>Parent / student name *</span>
                    <input
                      name="studentName"
                      value={requirement.studentName}
                      onChange={updateRequirement}
                      placeholder="Enter your name"
                      autoComplete="name"
                    />
                    {errors.studentName && (
                      <small className="fat-error">
                        {errors.studentName}
                      </small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Mobile number *</span>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={requirement.phone}
                      onChange={(event) => {
                        updateRequirement({
                          target: {
                            name: "phone",
                            value: event.target.value.replace(/\D/g, ""),
                          },
                        });
                      }}
                      placeholder="10-digit mobile number"
                      autoComplete="tel-national"
                    />
                    {errors.phone && (
                      <small className="fat-error">{errors.phone}</small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Class / level *</span>
                    <select
                      name="classLevel"
                      value={requirement.classLevel}
                      onChange={updateRequirement}
                    >
                      <option value="">Choose class</option>
                      {classOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.classLevel && (
                      <small className="fat-error">{errors.classLevel}</small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Subject *</span>
                    <select
                      name="subject"
                      value={requirement.subject}
                      onChange={updateRequirement}
                    >
                      <option value="">Choose subject</option>
                      {subjectOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <small className="fat-error">{errors.subject}</small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Preferred location *</span>
                    <input
                      name="location"
                      value={requirement.location}
                      onChange={updateRequirement}
                      placeholder="City or locality"
                    />
                    {errors.location && (
                      <small className="fat-error">{errors.location}</small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Tuition mode *</span>
                    <select
                      name="mode"
                      value={requirement.mode}
                      onChange={updateRequirement}
                    >
                      <option value="">Choose mode</option>
                      <option value="Home Tuition">Home tuition</option>
                      <option value="Online Tuition">Online tuition</option>
                    </select>
                    {errors.mode && (
                      <small className="fat-error">{errors.mode}</small>
                    )}
                  </label>

                  <label className="fat-control">
                    <span>Education board (optional)</span>
                    <select
                      name="board"
                      value={requirement.board}
                      onChange={updateRequirement}
                    >
                      <option value="">Choose board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="fat-control">
                    <span>Preferred schedule (optional)</span>
                    <select
                      name="schedule"
                      value={requirement.schedule}
                      onChange={updateRequirement}
                    >
                      <option value="">Choose schedule</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </label>

                  <label className="fat-control fat-form-full">
                    <span>Additional details (optional)</span>
                    <textarea
                      name="message"
                      value={requirement.message}
                      onChange={updateRequirement}
                      rows={3}
                      placeholder="Any learning requirements you want to share..."
                    />
                  </label>
                </div>

                <p className="fat-privacy-note">
                  <Info size={15} />
                  Frontend preview only. Do not enter sensitive information.
                  No data is transmitted or stored by this form.
                </p>

                <button
                  type="submit"
                  className="fat-button fat-button-primary fat-submit-button"
                >
                  Validate requirement <ArrowRight size={18} />
                </button>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
