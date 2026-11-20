
"use client";

import { useRef, useState } from "react";
import {
  UserRound,
  Users,
  GraduationCap,
  BookOpen,
  MapPin,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Send,
  ClipboardCheck,
} from "lucide-react";

import "@/styles/pages/free-demo.css";

const WHATSAPP_NUMBER = "917037374833";

const steps = [
  { title: "Student Details", subtitle: "Student's personal information", icon: UserRound },
  { title: "Parent Details", subtitle: "Parent or guardian contact information", icon: Users },
  { title: "Academic Details", subtitle: "School, class and subjects", icon: GraduationCap },
  { title: "Tuition Preferences", subtitle: "Learning mode and tutor requirements", icon: BookOpen },
  { title: "Demo Schedule", subtitle: "Preferred date and time", icon: CalendarDays },
  { title: "Review & Submit", subtitle: "Check all details before submitting", icon: ClipboardCheck },
];

const cities = [
  "Dehradun",
  "Rishikesh",
  "Haridwar",
  "Roorkee",
  "Mussoorie",
  "Vikasnagar",
  "Doiwala",
  "Saharanpur",
  "Other",
];

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Hindi",
  "Science",
  "Social Science",
  "Accountancy",
  "Business Studies",
  "Economics",
  "Computer Science",
  "Informatics Practices",
  "History",
  "Geography",
  "Political Science",
  "Psychology",
  "Other",
];

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const initialForm = {
  // Student
  studentFirstName: "",
  studentMiddleName: "",
  studentLastName: "",
  studentMobile: "",
  studentEmail: "",
  dob: "",
  studentGender: "",
  studentNationality: "Indian",
  studentAddress: "",
  studentCity: "",
  studentState: "Uttarakhand",
  studentPincode: "",

  // Parent
  parentFirstName: "",
  parentMiddleName: "",
  parentLastName: "",
  relationship: "",
  parentMobile: "",
  alternateMobile: "",
  parentEmail: "",
  parentOccupation: "",
  preferredContact: "WhatsApp",

  // Academic
  className: "",
  schoolName: "",
  schoolAddress: "",
  board: "",
  academicSession: "2026-2027",
  medium: "",
  subjects: [],
  otherSubject: "",
  learningGoal: "",
  currentAcademicLevel: "",
  previousTuition: "",

  // Tuition
  tuitionMode: "",
  tuitionType: "",
  city: "",
  area: "",
  pincode: "",
  fullAddress: "",
  tutorGender: "No Preference",
  teachingLanguage: "English & Hindi",
  weeklyFrequency: "",
  classDuration: "",
  budget: "",
  specialRequirements: "",

  // Demo
  preferredDate: "",
  preferredTime: "",
  preferredDays: [],
  demoMode: "",
  demoMessage: "",
};

function todayString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Field({ label, name, value, onChange, required, type = "text", placeholder = "", options, ...props }) {
  return (
    <label className="wizard-field">
      <span>{label}{required && <b> *</b>}</span>

      {options ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      )}
    </label>
  );
}

function CheckGroup({ title, options, selected, onChange, requiredText }) {
  return (
    <div className="wizard-check-group">
      <div className="wizard-check-heading">
        <strong>{title}</strong>
        {requiredText && <span>{requiredText}</span>}
      </div>

      <div className="wizard-check-grid">
        {options.map((option) => (
          <label className="wizard-check-option" key={option}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ number, title, description, icon: Icon }) {
  return (
    <div className="wizard-section-title">
      <span className="wizard-section-icon"><Icon size={21} /></span>
      <div>
        <span className="wizard-section-number">STEP {number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="wizard-summary-row">
      <span>{label}</span>
      <strong>{value || "Not provided"}</strong>
    </div>
  );
}

export default function FreeDemoPage() {
  const [form, setForm] = useState(initialForm);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  };

  const toggleArrayValue = (field, value) => {
    setForm((previous) => {
      const current = previous[field];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return { ...previous, [field]: updated };
    });
    setError("");
  };

  const validateCurrentStep = () => {
    if (!formRef.current?.reportValidity()) return false;

    if (currentStep === 2 && form.subjects.length === 0) {
      setError("Please select at least one subject.");
      return false;
    }

    if (currentStep === 4 && form.preferredDays.length === 0) {
      setError("Please select at least one preferred day.");
      return false;
    }

    if (currentStep === 0 && !/^[6-9]\d{9}$/.test(form.studentMobile)) {
      setError("Please enter a valid 10-digit student mobile number.");
      return false;
    }

    if (currentStep === 1) {
      if (!/^[6-9]\d{9}$/.test(form.parentMobile)) {
        setError("Please enter a valid 10-digit parent mobile number.");
        return false;
      }

      if (
        form.alternateMobile &&
        !/^[6-9]\d{9}$/.test(form.alternateMobile)
      ) {
        setError("Please enter a valid alternate mobile number.");
        return false;
      }
    }

    if (currentStep === 3 && form.pincode && !/^\d{6}$/.test(form.pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return false;
    }

    if (currentStep === 3 && form.tuitionMode === "Home Tuition" && !form.fullAddress.trim()) {
      setError("Please enter the full address for Home Tuition.");
      return false;
    }

    return true;
  };

  const goNext = () => {
    if (!validateCurrentStep()) return;
    setError("");
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrevious = () => {
    setError("");
    setCurrentStep((step) => Math.max(step - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fullName = (first, middle, last) =>
    [first, middle, last].filter(Boolean).join(" ") || "Not provided";

  const sendToWhatsApp = () => {
    const message = `
*NEW FREE DEMO ENQUIRY*
*BETTER RESULT HOME TUITION*

━━━━━━━━━━━━━━━━━━
*01. STUDENT INFORMATION*
━━━━━━━━━━━━━━━━━━
Full Name: ${fullName(form.studentFirstName, form.studentMiddleName, form.studentLastName)}
Student Mobile: ${form.studentMobile}
Student Email: ${form.studentEmail || "Not provided"}
Date of Birth: ${form.dob || "Not provided"}
Gender: ${form.studentGender}
Nationality: ${form.studentNationality}
Address: ${form.studentAddress || "Not provided"}
City: ${form.studentCity || "Not provided"}
State: ${form.studentState}
PIN Code: ${form.studentPincode || "Not provided"}

━━━━━━━━━━━━━━━━━━
*02. PARENT / GUARDIAN INFORMATION*
━━━━━━━━━━━━━━━━━━
Parent Name: ${fullName(form.parentFirstName, form.parentMiddleName, form.parentLastName)}
Relationship: ${form.relationship}
Parent Mobile: ${form.parentMobile}
Alternate Mobile: ${form.alternateMobile || "Not provided"}
Email: ${form.parentEmail || "Not provided"}
Occupation: ${form.parentOccupation || "Not provided"}
Preferred Contact: ${form.preferredContact}

━━━━━━━━━━━━━━━━━━
*03. ACADEMIC INFORMATION*
━━━━━━━━━━━━━━━━━━
Class / Course: ${form.className}
School: ${form.schoolName || "Not provided"}
School Address: ${form.schoolAddress || "Not provided"}
Board: ${form.board}
Academic Session: ${form.academicSession}
Medium: ${form.medium}
Subjects: ${form.subjects.join(", ")}
Other Subject: ${form.otherSubject || "Not provided"}
Learning Goal: ${form.learningGoal}
Current Academic Level: ${form.currentAcademicLevel || "Not provided"}
Previous Tuition: ${form.previousTuition || "Not provided"}

━━━━━━━━━━━━━━━━━━
*04. TUITION & TUTOR PREFERENCES*
━━━━━━━━━━━━━━━━━━
Tuition Mode: ${form.tuitionMode}
Tuition Type: ${form.tuitionType}
City: ${form.city}
Area: ${form.area}
PIN Code: ${form.pincode || "Not provided"}
Full Address: ${form.fullAddress || "Not provided"}
Tutor Gender: ${form.tutorGender}
Teaching Language: ${form.teachingLanguage}
Classes Per Week: ${form.weeklyFrequency}
Class Duration: ${form.classDuration}
Monthly Budget: ${form.budget || "Not provided"}
Special Requirements: ${form.specialRequirements || "Not provided"}

━━━━━━━━━━━━━━━━━━
*05. PREFERRED DEMO SCHEDULE*
━━━━━━━━━━━━━━━━━━
Date: ${form.preferredDate}
Time: ${form.preferredTime}
Preferred Days: ${form.preferredDays.join(", ")}
Demo Mode: ${form.demoMode}
Additional Message: ${form.demoMessage || "Not provided"}

━━━━━━━━━━━━━━━━━━
*REQUEST STATUS: NEW DEMO ENQUIRY*

Please review this enquiry and contact the parent/guardian for availability and final confirmation.

This is a request, not a confirmed booking.

*Better Result Home Tuition*
Learn Better. Perform Better. Achieve More.
`.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const renderStudentStep = () => (
    <>
      <SectionTitle
        number="01"
        title="Student Information"
        description="Please enter the student's personal and contact details."
        icon={UserRound}
      />

      <div className="wizard-grid">
        <Field label="First Name" name="studentFirstName" value={form.studentFirstName} onChange={updateField} required placeholder="Enter first name" autoComplete="given-name" maxLength={50} />
        <Field label="Middle Name" name="studentMiddleName" value={form.studentMiddleName} onChange={updateField} placeholder="Enter middle name (if any)" maxLength={50} />
        <Field label="Last Name" name="studentLastName" value={form.studentLastName} onChange={updateField} required placeholder="Enter last name" autoComplete="family-name" maxLength={50} />
        <Field label="Student Mobile Number" name="studentMobile" value={form.studentMobile} onChange={updateField} required type="tel" placeholder="10-digit mobile number" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} />
        <Field label="Student Email Address" name="studentEmail" value={form.studentEmail} onChange={updateField} type="email" placeholder="Student email (if available)" />
        <Field label="Date of Birth" name="dob" value={form.dob} onChange={updateField} type="date" max={todayString()} />
        <Field label="Gender" name="studentGender" value={form.studentGender} onChange={updateField} required options={["Male", "Female", "Other", "Prefer not to say"]} />
        <Field label="Nationality" name="studentNationality" value={form.studentNationality} onChange={updateField} required options={["Indian", "Other"]} />
        <Field label="City / Town" name="studentCity" value={form.studentCity} onChange={updateField} placeholder="Enter current city" required />
        <Field label="State" name="studentState" value={form.studentState} onChange={updateField} required options={["Uttarakhand", "Uttar Pradesh", "Bihar", "Delhi", "Haryana", "Other"]} />
        <Field label="PIN Code" name="studentPincode" value={form.studentPincode} onChange={updateField} placeholder="6-digit PIN code" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} />
        <Field label="Current Residential Address" name="studentAddress" value={form.studentAddress} onChange={updateField} type="textarea" placeholder="House number, street, locality, landmark" />
      </div>
    </>
  );

  const renderParentStep = () => (
    <>
      <SectionTitle
        number="02"
        title="Parent / Guardian Information"
        description="Enter the details of the parent or guardian we should contact."
        icon={Users}
      />

      <div className="wizard-grid">
        <Field label="Parent First Name" name="parentFirstName" value={form.parentFirstName} onChange={updateField} required placeholder="First name" maxLength={50} />
        <Field label="Parent Middle Name" name="parentMiddleName" value={form.parentMiddleName} onChange={updateField} placeholder="Middle name (if any)" maxLength={50} />
        <Field label="Parent Last Name" name="parentLastName" value={form.parentLastName} onChange={updateField} required placeholder="Last name" maxLength={50} />
        <Field label="Relationship with Student" name="relationship" value={form.relationship} onChange={updateField} required options={["Father", "Mother", "Legal Guardian", "Other"]} />
        <Field label="Parent Mobile Number" name="parentMobile" value={form.parentMobile} onChange={updateField} required type="tel" placeholder="10-digit mobile number" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} />
        <Field label="Alternate Contact Number" name="alternateMobile" value={form.alternateMobile} onChange={updateField} type="tel" placeholder="Optional alternate number" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} />
        <Field label="Parent Email Address" name="parentEmail" value={form.parentEmail} onChange={updateField} type="email" placeholder="Enter email address" />
        <Field label="Parent Occupation" name="parentOccupation" value={form.parentOccupation} onChange={updateField} placeholder="Enter occupation" />
        <Field label="Preferred Contact Method" name="preferredContact" value={form.preferredContact} onChange={updateField} required options={["WhatsApp", "Phone Call", "Email"]} />
      </div>
    </>
  );

  const renderAcademicStep = () => (
    <>
      <SectionTitle
        number="03"
        title="Academic Information"
        description="Tell us about the student's current education and subjects."
        icon={GraduationCap}
      />

      <div className="wizard-grid">
        <Field label="Current Class / Course" name="className" value={form.className} onChange={updateField} required options={[...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`), "JEE Preparation", "NEET Preparation", "Other"]} />
        <Field label="School / College Name" name="schoolName" value={form.schoolName} onChange={updateField} required placeholder="Enter school or college name" />
        <Field label="School / College Address" name="schoolAddress" value={form.schoolAddress} onChange={updateField} placeholder="Enter school address" />
        <Field label="Education Board" name="board" value={form.board} onChange={updateField} required options={["CBSE", "ICSE", "ISC", "Uttarakhand State Board", "Bihar Board", "UP Board", "Other State Board", "Other"]} />
        <Field label="Academic Session" name="academicSession" value={form.academicSession} onChange={updateField} required options={["2026-2027", "2027-2028", "2028-2029", "Other"]} />
        <Field label="Medium of Instruction" name="medium" value={form.medium} onChange={updateField} required options={["English", "Hindi", "English & Hindi", "Other"]} />
        <Field label="Current Academic Level" name="currentAcademicLevel" value={form.currentAcademicLevel} onChange={updateField} options={["Excellent", "Good", "Average", "Needs Improvement", "Prefer to Discuss"]} />
        <Field label="Previous Tuition Experience" name="previousTuition" value={form.previousTuition} onChange={updateField} options={["Yes", "No", "Currently Taking Tuition"]} />
        <Field label="Other Subject (if applicable)" name="otherSubject" value={form.otherSubject} onChange={updateField} placeholder="Enter another subject" />
        <Field label="Main Learning Goal" name="learningGoal" value={form.learningGoal} onChange={updateField} required options={["Improve School Performance", "Board Exam Preparation", "Concept Clarity", "Homework & Practice", "JEE Preparation", "NEET Preparation", "Overall Academic Improvement", "Other"]} />
      </div>

      <CheckGroup
        title="Select Subjects Required"
        requiredText="Select at least one"
        options={subjects}
        selected={form.subjects}
        onChange={(value) => toggleArrayValue("subjects", value)}
      />
    </>
  );

  const renderTuitionStep = () => (
    <>
      <SectionTitle
        number="04"
        title="Tuition & Tutor Preferences"
        description="Tell us about the tuition arrangement and tutor you prefer."
        icon={MapPin}
      />

      <div className="wizard-grid">
        <Field label="Preferred Tuition Mode" name="tuitionMode" value={form.tuitionMode} onChange={updateField} required options={["Home Tuition", "Online Tuition", "Both - Home / Online"]} />
        <Field label="Tuition Type" name="tuitionType" value={form.tuitionType} onChange={updateField} required options={["One-to-One Individual Tuition", "Small Group Tuition", "No Preference"]} />
        <Field label="City" name="city" value={form.city} onChange={updateField} required options={cities} />
        <Field label="Area / Locality" name="area" value={form.area} onChange={updateField} required placeholder="Enter area or nearby landmark" />
        <Field label="PIN Code" name="pincode" value={form.pincode} onChange={updateField} placeholder="6-digit PIN code" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} />
        <Field label="Preferred Tutor Gender" name="tutorGender" value={form.tutorGender} onChange={updateField} required options={["No Preference", "Male Tutor", "Female Tutor"]} />
        <Field label="Teaching Language" name="teachingLanguage" value={form.teachingLanguage} onChange={updateField} required options={["English", "Hindi", "English & Hindi", "Other"]} />
        <Field label="Classes Per Week" name="weeklyFrequency" value={form.weeklyFrequency} onChange={updateField} required options={["2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "Daily", "Discuss with Team"]} />
        <Field label="Preferred Class Duration" name="classDuration" value={form.classDuration} onChange={updateField} required options={["45 Minutes", "1 Hour", "1.5 Hours", "2 Hours", "Discuss with Team"]} />
        <Field label="Monthly Tuition Budget (Optional)" name="budget" value={form.budget} onChange={updateField} options={["Below ₹2,000", "₹2,000 – ₹4,000", "₹4,000 – ₹6,000", "₹6,000 – ₹8,000", "₹8,000 – ₹10,000", "Above ₹10,000", "Discuss with Team"]} />
        <Field label="Full Address for Home Tuition" name="fullAddress" value={form.fullAddress} onChange={updateField} type="textarea" placeholder="House number, street, colony, landmark" />
        <Field label="Special Requirements" name="specialRequirements" value={form.specialRequirements} onChange={updateField} type="textarea" placeholder="Any specific tutor or learning requirements?" />
      </div>
    </>
  );

  const renderScheduleStep = () => (
    <>
      <SectionTitle
        number="05"
        title="Preferred Demo Schedule"
        description="Select the date, time and days that work best for you."
        icon={CalendarDays}
      />

      <div className="wizard-grid">
        <Field label="Preferred Demo Date" name="preferredDate" value={form.preferredDate} onChange={updateField} type="date" required min={todayString()} />
        <Field label="Preferred Demo Time" name="preferredTime" value={form.preferredTime} onChange={updateField} type="time" required />
        <Field label="Preferred Demo Mode" name="demoMode" value={form.demoMode} onChange={updateField} required options={["Home Demo", "Online Demo", "Discuss with Team"]} />
        <Field label="Additional Message" name="demoMessage" value={form.demoMessage} onChange={updateField} type="textarea" placeholder="Any additional details for our team?" />
      </div>

      <CheckGroup
        title="Preferred Days for Demo / Classes"
        requiredText="Select at least one"
        options={weekDays}
        selected={form.preferredDays}
        onChange={(value) => toggleArrayValue("preferredDays", value)}
      />
    </>
  );

  const renderReview = () => (
    <>
      <SectionTitle
        number="06"
        title="Review Your Information"
        description="Please check your details carefully before submitting."
        icon={ClipboardCheck}
      />

      <div className="wizard-review">
        <div className="wizard-review-section">
          <div className="wizard-review-heading">
            <h3>Student Information</h3>
            <button type="button" onClick={() => setCurrentStep(0)}>Edit</button>
          </div>
          <SummaryRow label="Student Name" value={fullName(form.studentFirstName, form.studentMiddleName, form.studentLastName)} />
          <SummaryRow label="Student Mobile" value={form.studentMobile} />
          <SummaryRow label="Student Email" value={form.studentEmail} />
          <SummaryRow label="Date of Birth" value={form.dob} />
          <SummaryRow label="Gender" value={form.studentGender} />
          <SummaryRow label="Address" value={form.studentAddress} />
          <SummaryRow label="City / State" value={`${form.studentCity}, ${form.studentState}`} />
        </div>

        <div className="wizard-review-section">
          <div className="wizard-review-heading">
            <h3>Parent / Guardian Information</h3>
            <button type="button" onClick={() => setCurrentStep(1)}>Edit</button>
          </div>
          <SummaryRow label="Parent Name" value={fullName(form.parentFirstName, form.parentMiddleName, form.parentLastName)} />
          <SummaryRow label="Relationship" value={form.relationship} />
          <SummaryRow label="Parent Mobile" value={form.parentMobile} />
          <SummaryRow label="Alternate Mobile" value={form.alternateMobile} />
          <SummaryRow label="Email" value={form.parentEmail} />
        </div>

        <div className="wizard-review-section">
          <div className="wizard-review-heading">
            <h3>Academic Information</h3>
            <button type="button" onClick={() => setCurrentStep(2)}>Edit</button>
          </div>
          <SummaryRow label="Class / Course" value={form.className} />
          <SummaryRow label="School" value={form.schoolName} />
          <SummaryRow label="Board" value={form.board} />
          <SummaryRow label="Medium" value={form.medium} />
          <SummaryRow label="Subjects" value={form.subjects.join(", ")} />
          <SummaryRow label="Learning Goal" value={form.learningGoal} />
        </div>

        <div className="wizard-review-section">
          <div className="wizard-review-heading">
            <h3>Tuition Preferences</h3>
            <button type="button" onClick={() => setCurrentStep(3)}>Edit</button>
          </div>
          <SummaryRow label="Tuition Mode" value={form.tuitionMode} />
          <SummaryRow label="Tuition Type" value={form.tuitionType} />
          <SummaryRow label="City / Area" value={`${form.city}, ${form.area}`} />
          <SummaryRow label="Tutor Gender" value={form.tutorGender} />
          <SummaryRow label="Teaching Language" value={form.teachingLanguage} />
          <SummaryRow label="Weekly Frequency" value={form.weeklyFrequency} />
        </div>

        <div className="wizard-review-section">
          <div className="wizard-review-heading">
            <h3>Preferred Demo Schedule</h3>
            <button type="button" onClick={() => setCurrentStep(4)}>Edit</button>
          </div>
          <SummaryRow label="Date" value={form.preferredDate} />
          <SummaryRow label="Time" value={form.preferredTime} />
          <SummaryRow label="Demo Mode" value={form.demoMode} />
          <SummaryRow label="Preferred Days" value={form.preferredDays.join(", ")} />
        </div>
      </div>

      <div className="wizard-final-consent">
        <CheckCircle2 size={19} />
        <p>
          By submitting, you agree that our team may contact you
          about this tuition enquiry. This is a request and not a
          confirmed demo booking.
        </p>
      </div>
    </>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderStudentStep();
      case 1: return renderParentStep();
      case 2: return renderAcademicStep();
      case 3: return renderTuitionStep();
      case 4: return renderScheduleStep();
      default: return renderReview();
    }
  };

  return (
    <main className="demo-wizard-page">
      <div className="wizard-container">
        <header className="wizard-header">
          <span className="wizard-brand">BETTER RESULT HOME TUITION</span>
          <h1>Free Demo Enquiry Form</h1>
          <p>
            Complete each step to tell us about the student&apos;s
            learning needs and preferred tuition arrangements.
          </p>
        </header>

        <div className="wizard-progress">
          <div className="wizard-progress-top">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <strong>{Math.round(((currentStep + 1) / steps.length) * 100)}% Completed</strong>
          </div>

          <div className="wizard-progress-track">
            <span style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
          </div>

          <div className="wizard-step-list">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const active = currentStep === index;
              const completed = currentStep > index;

              return (
                <button
                  type="button"
                  key={step.title}
                  className={`wizard-step-item ${active ? "active" : ""} ${completed ? "completed" : ""}`}
                  onClick={() => {
                    if (index < currentStep) {
                      setError("");
                      setCurrentStep(index);
                    }
                  }}
                  disabled={index > currentStep}
                  aria-current={active ? "step" : undefined}
                >
                  <span className="wizard-step-circle">
                    {completed ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                  </span>
                  <span className="wizard-step-name">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <form
          ref={formRef}
          className="wizard-card"
          onSubmit={(event) => {
            event.preventDefault();
            if (currentStep === steps.length - 1) sendToWhatsApp();
          }}
        >
          <div className="wizard-card-content">
            {renderCurrentStep()}
          </div>

          {error && (
            <div className="wizard-error" role="alert">
              {error}
            </div>
          )}

          <div className="wizard-navigation">
            <button
              type="button"
              className="wizard-previous"
              onClick={goPrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                className="wizard-next"
                onClick={goNext}
              >
                Save & Next
                <ChevronRight size={18} />
              </button>
            ) : (
              <button type="submit" className="wizard-next wizard-submit">
                <MessageCircle size={18} />
                Submit via WhatsApp
                <Send size={16} />
              </button>
            )}
          </div>
        </form>

        <p className="wizard-footer">
          Your enquiry will be reviewed by our team. Demo timing
          and tutor availability will be confirmed after discussion.
        </p>
      </div>
    </main>
  );
}
