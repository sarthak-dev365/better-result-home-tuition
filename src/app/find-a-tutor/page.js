
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  GraduationCap,
  BookOpen,
  MapPin,
  CalendarDays,
  Home,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Phone,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "@/styles/pages/find-a-tutor.css";

const classOptions = [
  "Class 1", "Class 2", "Class 3", "Class 4",
  "Class 5", "Class 6", "Class 7", "Class 8",
  "Class 9", "Class 10", "Class 11", "Class 12",
];

const boardOptions = [
  "CBSE",
  "ICSE / ISC",
  "State Board",
  "Other",
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
  "Business Studies",
  "Economics",
  "Computer Science",
  "JEE Preparation",
  "NEET Preparation",
  "Other",
];

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getLocalDate = () => {
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
};

const formatISODate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (dateString) => {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function FindATutorPage() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  // CUSTOM CALENDAR STATES

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const today = getLocalDate();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  });

  const today = getLocalDate();
  const todayString = formatISODate(today);

  // CALENDAR MONTH NAVIGATION

  const previousMonth = () => {
    setCalendarMonth((current) => {
      const previous = new Date(
        current.getFullYear(),
        current.getMonth() - 1,
        1
      );

      if (
        previous.getFullYear() < today.getFullYear() ||
        (
          previous.getFullYear() === today.getFullYear() &&
          previous.getMonth() < today.getMonth()
        )
      ) {
        return current;
      }

      return previous;
    });
  };

  const nextMonth = () => {
    setCalendarMonth((current) =>
      new Date(
        current.getFullYear(),
        current.getMonth() + 1,
        1
      )
    );
  };

  // OPEN CALENDAR

  const openCalendar = () => {
    if (selectedDate) {
      const [year, month] = selectedDate.split("-").map(Number);

      setCalendarMonth(new Date(year, month - 1, 1));
    } else {
      setCalendarMonth(
        new Date(today.getFullYear(), today.getMonth(), 1)
      );
    }

    setCalendarOpen((previous) => !previous);
  };

  // SELECT DATE

  const handleDateSelect = (date) => {
    if (date < today) return;

    setSelectedDate(formatISODate(date));
    setCalendarOpen(false);
    setStatusMessage("");
  };

  // CALENDAR GENERATION

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();

  const startingDay = (firstDay.getDay() + 6) % 7;

  const calendarDays = [
    ...Array(startingDay).fill(null),
    ...Array.from(
      { length: totalDays },
      (_, index) => index + 1
    ),
  ];

  const handleDayChange = (day) => {
    setSelectedDays((previous) =>
      previous.includes(day)
        ? previous.filter((item) => item !== day)
        : [...previous, day]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatusMessage(
      "Your form is ready for submission. Online enquiry submission will be enabled after backend integration. Please contact our team for assistance."
    );
  };

  return (
    <main className="find-tutor-page">

      {/* HERO */}

      <section className="ft-hero">
        <div className="ft-container">
          <div className="ft-hero-content">

            <span className="ft-eyebrow">
              FIND A SUITABLE TUTOR
            </span>

            <h1>
              Find the Right Tutor
              <span> for Your Learning Needs</span>
            </h1>

            <p>
              Tell us about your class, subjects, preferred learning
              mode and schedule. Our team will review your requirements
              and discuss suitable tutor options based on availability.
            </p>

            <a href="#tutor-enquiry" className="ft-hero-button">
              Find a Tutor <ArrowRight size={19} />
            </a>

            <div className="ft-hero-features">
              <span>
                <CheckCircle2 size={17} />
                Home Tuition
              </span>

              <span>
                <CheckCircle2 size={17} />
                Online Tuition
              </span>

              <span>
                <CheckCircle2 size={17} />
                Classes 1–12
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="ft-intro">
        <div className="ft-container">

          <div className="ft-intro-content">

            <span className="ft-section-label">
              PERSONALISED TUTOR SEARCH
            </span>

            <h2>
              Tell Us What You
              <span> Are Looking For</span>
            </h2>

            <p>
              Every student has different learning requirements.
              Share a few details so our team can understand your
              academic needs and discuss suitable tuition options.
            </p>

          </div>

          <div className="ft-info-grid">

            <article className="ft-info-card">
              <div className="ft-info-icon">
                <GraduationCap size={27} />
              </div>

              <h3>Choose Your Class</h3>

              <p>
                Select your current academic class and education board.
              </p>
            </article>

            <article className="ft-info-card">
              <div className="ft-info-icon">
                <BookOpen size={27} />
              </div>

              <h3>Select Your Subjects</h3>

              <p>
                Tell us which subjects or preparation you need support with.
              </p>
            </article>

            <article className="ft-info-card">
              <div className="ft-info-icon">
                <MapPin size={27} />
              </div>

              <h3>Share Your Location</h3>

              <p>
                Provide your location for home tuition or online learning.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* TUTOR ENQUIRY */}

      <section className="ft-enquiry" id="tutor-enquiry">
        <div className="ft-container">

          <div className="ft-form-heading">

            <span className="ft-section-label">
              TUTOR ENQUIRY FORM
            </span>

            <h2>
              Find Your <span>Tutor</span>
            </h2>

            <p>
              Fill in your requirements. Our team can review your
              preferences and discuss the available options.
            </p>

          </div>

          <div className="ft-form-layout">

            {/* MAIN FORM */}

            <form className="ft-form" onSubmit={handleSubmit}>

              {/* ACADEMIC INFORMATION */}

              <div className="ft-form-section-title">

                <span className="ft-form-section-icon">
                  <GraduationCap size={21} />
                </span>

                <div>
                  <h3>Academic Information</h3>
                  <p>
                    Tell us about the student&apos;s learning requirements.
                  </p>
                </div>

              </div>

              <div className="ft-form-grid">

                <div className="ft-field">
                  <label htmlFor="student-class">
                    Select Class <span>*</span>
                  </label>

                  <select
                    id="student-class"
                    name="studentClass"
                    required
                  >
                    <option value="">Choose your class</option>

                    {classOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ft-field">
                  <label htmlFor="student-board">
                    Education Board <span>*</span>
                  </label>

                  <select
                    id="student-board"
                    name="board"
                    required
                  >
                    <option value="">Select board</option>

                    {boardOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ft-field ft-full-width">
                  <label htmlFor="student-subject">
                    Required Subject <span>*</span>
                  </label>

                  <select
                    id="student-subject"
                    name="subject"
                    required
                  >
                    <option value="">Select a subject</option>

                    {subjectOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <small>
                    Subject availability depends on suitable tutor availability.
                  </small>
                </div>

              </div>

              <div className="ft-form-divider" />

              {/* TUITION PREFERENCE */}

              <div className="ft-form-section-title">

                <span className="ft-form-section-icon">
                  <Home size={21} />
                </span>

                <div>
                  <h3>Tuition Preferences</h3>
                  <p>
                    Select your preferred learning arrangements.
                  </p>
                </div>

              </div>

              <div className="ft-field">

                <label>
                  Tuition Mode <span>*</span>
                </label>

                <div className="ft-mode-options">

                  <label className="ft-mode-option">
                    <input
                      type="radio"
                      name="tuitionMode"
                      value="Home Tuition"
                      required
                    />

                    <span className="ft-mode-option-content">
                      <Home size={22} />
                      <strong>Home Tuition</strong>
                      <small>Learn at home</small>
                    </span>
                  </label>

                  <label className="ft-mode-option">
                    <input
                      type="radio"
                      name="tuitionMode"
                      value="Online Tuition"
                    />

                    <span className="ft-mode-option-content">
                      <Monitor size={22} />
                      <strong>Online Tuition</strong>
                      <small>Learn remotely</small>
                    </span>
                  </label>

                </div>
              </div>

              <div className="ft-form-grid">

                <div className="ft-field">
                  <label htmlFor="student-location">
                    Your Location <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="student-location"
                    name="location"
                    placeholder="Enter your area or city"
                    required
                  />
                </div>

                <div className="ft-field">
                  <label htmlFor="student-budget">
                    Monthly Budget Preference
                  </label>

                  <select id="student-budget" name="budget">
                    <option value="">Select budget preference</option>
                    <option value="Below ₹2,000">Below ₹2,000</option>
                    <option value="₹2,000 – ₹4,000">₹2,000 – ₹4,000</option>
                    <option value="₹4,000 – ₹6,000">₹4,000 – ₹6,000</option>
                    <option value="₹6,000 – ₹10,000">₹6,000 – ₹10,000</option>
                    <option value="Above ₹10,000">Above ₹10,000</option>
                    <option value="Discuss with team">Discuss with team</option>
                  </select>

                  <small>
                    Final tuition fees depend on the agreed requirements.
                  </small>
                </div>

              </div>

              <div className="ft-form-divider" />

              {/* PREFERRED SCHEDULE */}

              <div className="ft-form-section-title">

                <span className="ft-form-section-icon">
                  <CalendarDays size={21} />
                </span>

                <div>
                  <h3>Preferred Schedule</h3>
                  <p>
                    Share your convenient learning days and timings.
                  </p>
                </div>

              </div>

              <div className="ft-field">

                <label>Preferred Days</label>

                <div className="ft-days-grid">
                  {dayOptions.map((day) => (
                    <label className="ft-day-option" key={day}>
                      <input
                        type="checkbox"
                        checked={selectedDays.includes(day)}
                        onChange={() => handleDayChange(day)}
                      />

                      <span>{day.slice(0, 3)}</span>
                    </label>
                  ))}
                </div>

              </div>

              <div className="ft-form-grid">

                <div className="ft-field">
                  <label htmlFor="student-timing">
                    Preferred Timing
                  </label>

                  <select id="student-timing" name="timing">
                    <option value="">Select preferred timing</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                {/* CUSTOM INTERACTIVE CALENDAR */}

                <div className="ft-field ft-calendar-field">

                  <label htmlFor="start-date-display">
                    Expected Start Date
                  </label>

                  <button
                    type="button"
                    id="start-date-display"
                    className={`ft-date-trigger ${selectedDate ? "has-date" : ""}`}
                    onClick={openCalendar}
                    aria-expanded={calendarOpen}
                    aria-controls="ft-custom-calendar"
                  >
                    <span>
                      {selectedDate
                        ? formatDisplayDate(selectedDate)
                        : "Select expected start date"}
                    </span>

                    <CalendarDays size={20} />
                  </button>

                  {/* ACTUAL FORM VALUE */}

                  <input
                    type="hidden"
                    name="startDate"
                    value={selectedDate}
                  />

                  {calendarOpen && (
                    <div
                      className="ft-calendar-popup"
                      id="ft-custom-calendar"
                    >

                      {/* CALENDAR HEADER */}

                      <div className="ft-calendar-header">

                        <div className="ft-calendar-month-info">
                          <span className="ft-calendar-label">
                            SELECT DATE
                          </span>

                          <h3>
                            {calendarMonth.toLocaleDateString("en-IN", {
                              month: "long",
                              year: "numeric",
                            })}
                          </h3>
                        </div>

                        <div className="ft-calendar-navigation">

                          <button
                            type="button"
                            onClick={previousMonth}
                            disabled={
                              year === today.getFullYear() &&
                              month === today.getMonth()
                            }
                            aria-label="Previous month"
                          >
                            <ChevronLeft size={19} />
                          </button>

                          <button
                            type="button"
                            onClick={nextMonth}
                            aria-label="Next month"
                          >
                            <ChevronRight size={19} />
                          </button>

                        </div>

                      </div>

                      {/* WEEK DAYS */}

                      <div className="ft-calendar-weekdays">
                        {weekDays.map((day) => (
                          <span key={day}>{day}</span>
                        ))}
                      </div>

                      {/* CALENDAR DATES */}

                      <div className="ft-calendar-days">

                        {calendarDays.map((day, index) => {

                          if (day === null) {
                            return (
                              <span
                                key={`empty-${index}`}
                                className="ft-calendar-empty"
                              />
                            );
                          }

                          const date = new Date(year, month, day);
                          const dateString = formatISODate(date);

                          const isPast = date < today;
                          const isToday = dateString === todayString;
                          const isSelected = dateString === selectedDate;

                          return (
                            <button
                              key={dateString}
                              type="button"
                              className={[
                                "ft-calendar-day",
                                isToday ? "is-today" : "",
                                isSelected ? "is-selected" : "",
                              ].filter(Boolean).join(" ")}
                              disabled={isPast}
                              onClick={() => handleDateSelect(date)}
                              aria-label={date.toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                              aria-pressed={isSelected}
                            >
                              {day}
                            </button>
                          );
                        })}

                      </div>

                      {/* CALENDAR FOOTER */}

                      <div className="ft-calendar-footer">

                        <span>
                          <span className="ft-today-dot" />
                          Today
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            setCalendarMonth(
                              new Date(
                                today.getFullYear(),
                                today.getMonth(),
                                1
                              )
                            );

                            handleDateSelect(today);
                          }}
                        >
                          Select Today
                        </button>

                      </div>

                    </div>
                  )}

                  <small>
                    Select your preferred date to start tuition.
                  </small>

                </div>

              </div>

              <div className="ft-form-divider" />

              {/* CONTACT INFORMATION */}

              <div className="ft-form-section-title">

                <span className="ft-form-section-icon">
                  <User size={21} />
                </span>

                <div>
                  <h3>Contact Information</h3>
                  <p>
                    How can our team contact you?
                  </p>
                </div>

              </div>

              <div className="ft-form-grid">

                <div className="ft-field">
                  <label htmlFor="contact-name">
                    Student / Parent Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="contactName"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="ft-field">
                  <label htmlFor="contact-phone">
                    Mobile Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter mobile number"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    title="Enter a valid 10-digit Indian mobile number"
                    required
                  />
                </div>

                <div className="ft-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>

                <div className="ft-field ft-full-width">
                  <label htmlFor="additional-requirements">
                    Additional Requirements
                  </label>

                  <textarea
                    id="additional-requirements"
                    name="requirements"
                    rows="4"
                    placeholder="Tell us anything else we should know..."
                  />
                </div>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="ft-submit-button"
              >
                Submit Tutor Enquiry
                <ArrowRight size={19} />
              </button>

              {statusMessage && (
                <p className="ft-form-status" role="status">
                  {statusMessage}
                </p>
              )}

              <p className="ft-form-disclaimer">
                This is currently a frontend preview. Your information
                will not be sent or stored until backend integration
                is completed.
              </p>

            </form>

            {/* SIDEBAR */}

            <aside className="ft-form-sidebar">

              <div className="ft-sidebar-card">

                <div className="ft-sidebar-icon">
                  <Search size={27} />
                </div>

                <h3>What Happens Next?</h3>

                <div className="ft-sidebar-step">
                  <span>01</span>
                  <p>We review your tuition requirements.</p>
                </div>

                <div className="ft-sidebar-step">
                  <span>02</span>
                  <p>Our team discusses suitable tutor options.</p>
                </div>

                <div className="ft-sidebar-step">
                  <span>03</span>
                  <p>Schedule and arrangements are confirmed with you.</p>
                </div>

              </div>

              <div className="ft-sidebar-contact">

                <div className="ft-sidebar-icon">
                  <Phone size={25} />
                </div>

                <h3>Need Assistance?</h3>

                <p>
                  Contact our team if you need help with your tuition enquiry.
                </p>

                <a href="tel:+917037374833">
                  +91 70373 74833
                </a>

                <Link href="/contact" className="ft-contact-link">
                  Contact Us <ArrowRight size={17} />
                </Link>

              </div>

            </aside>

          </div>
        </div>
      </section>

    </main>
  );
}
