
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  MapPin,
  FileText,
  ShieldCheck,
  ArrowRight,
  IndianRupee,
  Upload,
  Clock3,
  CalendarDays,
  CheckCircle2,
  LockKeyhole,
  Phone,
  Mail,
  Trash2,
} from "lucide-react";

import "@/styles/pages/teacher-registration.css";

const classOptions = Array.from(
  { length: 12 },
  (_, index) => `Class ${index + 1}`
);

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
  "History",
  "Geography",
  "Political Science",
  "Other",
];

const boardOptions = ["CBSE", "ICSE", "ISC", "State Board", "Other"];

const daysOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const examOptions = ["JEE Main", "JEE Advanced", "NEET"];

const fileRules = {
  resume: {
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    extensions: [".pdf", ".doc", ".docx"],
    types: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
  photo: {
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
    types: ["image/jpeg", "image/png", "image/webp"],
  },
  certificates: {
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024,
    extensions: [".pdf", ".jpg", ".jpeg", ".png", ".webp"],
    types: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
  },
};

function getLocalDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function validateFiles(files, rule) {
  if (files.length > rule.maxFiles) {
    return `You can select a maximum of ${rule.maxFiles} file(s).`;
  }

  for (const file of files) {
    const extension = `.${file.name.split(".").pop().toLowerCase()}`;

    if (
      !rule.extensions.includes(extension) ||
      !rule.types.includes(file.type)
    ) {
      return `Unsupported file format: ${file.name}`;
    }

    if (file.size === 0 || file.size > rule.maxSize) {
      return `Each file must be smaller than 5 MB: ${file.name}`;
    }
  }

  return "";
}

function SectionHeading({ number, icon: Icon, title, description }) {
  return (
    <div className="tr-section-heading">
      <div className="tr-section-icon">
        <Icon size={23} />
      </div>

      <div className="tr-section-heading-copy">
        <span>SECTION {number}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Field({ label, id, required = false, children, className = "" }) {
  return (
    <div className={`tr-field ${className}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="tr-required"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function TeacherRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "",

    qualification: "",
    degree: "",
    institution: "",
    passingYear: "",

    experienceType: "",
    experienceYears: "",
    experienceDetails: "",

    teachingMode: "",
    classes: [],
    subjects: [],
    boards: [],
    competitiveExams: [],

    preferredAreas: "",
    availableDays: [],
    preferredTime: "",
    expectedFee: "",

    identityConsent: false,
    declaration: false,
    contactConsent: false,
  });

  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [minDob] = useState("1950-01-01");
  const [maxDob] = useState(getLocalDateString());

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "experienceType" && value === "Fresher"
        ? {
            experienceYears: "",
            experienceDetails: "",
          }
        : {}),
    }));

    setStatus("");
    setStatusType("");
  };

  const updateMultiple = (name, value) => {
    setFormData((previous) => {
      const current = previous[name];

      return {
        ...previous,
        [name]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });

    setStatus("");
    setStatusType("");
  };

  const showError = (message) => {
    setStatus(message);
    setStatusType("error");
  };

  const handleFileChange = (event, type) => {
    const files = Array.from(event.target.files || []);
    const rule = fileRules[type];

    if (!rule) return;

    const error = validateFiles(files, rule);

    if (error) {
      event.target.value = "";
      showError(error);
      return;
    }

    if (type === "resume") setResume(files[0] || null);
    if (type === "photo") setPhoto(files[0] || null);
    if (type === "certificates") setCertificates(files);

    setStatus("");
    setStatusType("");
  };

  const removeFile = (type, index = 0) => {
    if (type === "resume") setResume(null);
    if (type === "photo") setPhoto(null);

    if (type === "certificates") {
      setCertificates((previous) =>
        previous.filter((_, fileIndex) => fileIndex !== index)
      );

      const input = document.getElementById("tr-certificates");
      if (input) input.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!/^[6-9][0-9]{9}$/.test(formData.mobile)) {
      showError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      showError("Please enter a valid 6-digit PIN code.");
      return;
    }

    if (formData.dob > maxDob || formData.dob < minDob) {
      showError("Please select a valid date of birth.");
      return;
    }

    if (formData.classes.length === 0) {
      showError("Please select at least one class you can teach.");
      return;
    }

    if (formData.subjects.length === 0) {
      showError("Please select at least one subject you can teach.");
      return;
    }

    if (
      formData.experienceType === "Experienced" &&
      (
        !formData.experienceYears ||
        Number(formData.experienceYears) < 1 ||
        !formData.experienceDetails.trim()
      )
    ) {
      showError("Please complete your teaching experience details.");
      return;
    }

    if (
      !formData.identityConsent ||
      !formData.declaration ||
      !formData.contactConsent
    ) {
      showError("Please accept all required declarations and consents.");
      return;
    }

    setStatus(
      "Your application preview is complete. No application has been submitted or stored. Secure backend integration is required for actual submission and document upload."
    );
    setStatusType("success");
  };

  return (
    <div className="teacher-registration-page">
      {/* HERO */}
      <section className="tr-hero">
        <div className="tr-container tr-hero-inner">
          <div className="tr-hero-content">
            <span className="tr-eyebrow">
              <span className="tr-eyebrow-dot" />
              TEACHER APPLICATION PORTAL
            </span>

            <h1>
              Turn Your Knowledge
              <span> Into Someone&apos;s Success.</span>
            </h1>

            <p>
              Join our teaching network and share your academic
              expertise. Complete your profile so our team can
              understand your qualifications and teaching preferences.
            </p>

            <div className="tr-hero-points">
              <span><CheckCircle2 size={17} /> Professional Profile</span>
              <span><CheckCircle2 size={17} /> Flexible Teaching Options</span>
              <span><CheckCircle2 size={17} /> Application Review</span>
            </div>
          </div>

          <div className="tr-hero-visual" aria-hidden="true">
            <div className="tr-visual-orbit tr-orbit-one" />
            <div className="tr-visual-orbit tr-orbit-two" />

            <div className="tr-visual-card">
              <div className="tr-visual-card-icon">
                <GraduationCap size={39} />
              </div>
              <span>YOUR NEXT CHAPTER</span>
              <strong>Teach. Inspire. Grow.</strong>
              <p>Make learning meaningful.</p>
            </div>

            <div className="tr-floating-icon tr-floating-one">
              <BookOpen size={22} />
            </div>

            <div className="tr-floating-icon tr-floating-two">
              <ShieldCheck size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="tr-intro tr-container">
        <div>
          <span className="tr-section-label">APPLICATION FORM</span>
          <h2>Teacher Registration</h2>
          <p>
            Complete the following sections carefully. Fields marked
            with <span className="tr-required">*</span> are mandatory.
          </p>
        </div>

        <div className="tr-fee-card">
          <div className="tr-fee-icon">
            <IndianRupee size={23} />
          </div>
          <div>
            <strong>₹500 Registration Fee</strong>
            <span>Payment is not collected on this preview form.</span>
          </div>
        </div>
      </section>

      <form className="tr-form tr-container" onSubmit={handleSubmit}>
        {/* SECTION 01 */}
        <section className="tr-card">
          <SectionHeading
            number="01"
            icon={UserRound}
            title="Personal Information"
            description="Basic details and contact information."
          />

          <div className="tr-grid">
            <Field label="Full Name" id="tr-fullName" required>
              <input
                id="tr-fullName"
                name="fullName"
                value={formData.fullName}
                onChange={updateField}
                placeholder="Enter your full name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </Field>

            <Field label="Date of Birth" id="tr-dob" required>
              <input
                id="tr-dob"
                name="dob"
                type="date"
                min={minDob}
                max={maxDob}
                value={formData.dob}
                onChange={updateField}
                required
              />
            </Field>

            <Field label="Gender" id="tr-gender" required>
              <select
                id="tr-gender"
                name="gender"
                value={formData.gender}
                onChange={updateField}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </Field>

            <Field label="Mobile Number" id="tr-mobile" required>
              <div className="tr-input-with-icon">
                <Phone size={17} />
                <input
                  id="tr-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={updateField}
                  placeholder="10-digit mobile number"
                  autoComplete="tel-national"
                  required
                />
              </div>
            </Field>

            <Field label="Email Address" id="tr-email" required>
              <div className="tr-input-with-icon">
                <Mail size={17} />
                <input
                  id="tr-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={updateField}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  maxLength={150}
                  required
                />
              </div>
            </Field>

            <Field label="Current Address" id="tr-address" required className="tr-full">
              <textarea
                id="tr-address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={updateField}
                placeholder="House number, street, locality..."
                maxLength={500}
                autoComplete="street-address"
                required
              />
            </Field>

            <Field label="City" id="tr-city" required>
              <input
                id="tr-city"
                name="city"
                value={formData.city}
                onChange={updateField}
                maxLength={100}
                autoComplete="address-level2"
                required
              />
            </Field>

            <Field label="State" id="tr-state" required>
              <input
                id="tr-state"
                name="state"
                value={formData.state}
                onChange={updateField}
                maxLength={100}
                autoComplete="address-level1"
                required
              />
            </Field>

            <Field label="PIN Code" id="tr-pincode" required>
              <input
                id="tr-pincode"
                name="pincode"
                inputMode="numeric"
                pattern="[0-9]{6}"
                maxLength={6}
                value={formData.pincode}
                onChange={updateField}
                placeholder="6-digit PIN code"
                autoComplete="postal-code"
                required
              />
            </Field>
          </div>
        </section>

        {/* SECTION 02 */}
        <section className="tr-card">
          <SectionHeading
            number="02"
            icon={GraduationCap}
            title="Educational Qualification"
            description="Provide your highest academic qualification."
          />

          <div className="tr-grid">
            <Field label="Highest Qualification" id="tr-qualification" required>
              <select
                id="tr-qualification"
                name="qualification"
                value={formData.qualification}
                onChange={updateField}
                required
              >
                <option value="">Select qualification</option>
                <option value="12th">12th Pass</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="B.Ed">B.Ed</option>
                <option value="M.Ed">M.Ed</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Degree / Course" id="tr-degree" required>
              <input
                id="tr-degree"
                name="degree"
                value={formData.degree}
                onChange={updateField}
                placeholder="e.g. B.Sc, B.Com, M.A."
                maxLength={150}
                required
              />
            </Field>

            <Field label="University / Institution" id="tr-institution" required>
              <input
                id="tr-institution"
                name="institution"
                value={formData.institution}
                onChange={updateField}
                placeholder="Enter institution name"
                maxLength={200}
                required
              />
            </Field>

            <Field label="Passing Year" id="tr-passingYear" required>
              <input
                id="tr-passingYear"
                name="passingYear"
                type="number"
                min="1950"
                max={new Date().getFullYear() + 5}
                step="1"
                value={formData.passingYear}
                onChange={updateField}
                placeholder="e.g. 2024"
                required
              />
            </Field>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="tr-card">
          <SectionHeading
            number="03"
            icon={BriefcaseBusiness}
            title="Teaching Experience"
            description="Tell us about your teaching background."
          />

          <div className="tr-grid">
            <Field
              label="Are you a fresher or experienced teacher?"
              id="tr-experienceType"
              required
              className="tr-full"
            >
              <div className="tr-choice-grid">
                {["Fresher", "Experienced"].map((option) => (
                  <label className="tr-choice-card" key={option}>
                    <input
                      type="radio"
                      name="experienceType"
                      value={option}
                      checked={formData.experienceType === option}
                      onChange={updateField}
                      required
                    />
                    <span className="tr-choice-content">
                      <strong>{option}</strong>
                      <small>
                        {option === "Fresher"
                          ? "Starting my teaching career"
                          : "I have previous teaching experience"}
                      </small>
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            {formData.experienceType === "Experienced" && (
              <>
                <Field
                  label="Years of Experience"
                  id="tr-experienceYears"
                  required
                >
                  <input
                    id="tr-experienceYears"
                    name="experienceYears"
                    type="number"
                    min="1"
                    max="60"
                    step="1"
                    value={formData.experienceYears}
                    onChange={updateField}
                    placeholder="Number of years"
                    required
                  />
                </Field>

                <Field
                  label="Teaching Experience Details"
                  id="tr-experienceDetails"
                  required
                  className="tr-full"
                >
                  <textarea
                    id="tr-experienceDetails"
                    name="experienceDetails"
                    rows={4}
                    value={formData.experienceDetails}
                    onChange={updateField}
                    placeholder="Mention institutions, classes, subjects and experience..."
                    maxLength={1500}
                    required
                  />
                </Field>
              </>
            )}
          </div>
        </section>

        {/* SECTION 04 */}
        <section className="tr-card">
          <SectionHeading
            number="04"
            icon={BookOpen}
            title="Teaching Preferences"
            description="Select your preferred teaching mode, classes and subjects."
          />

          <div className="tr-grid">
            <Field label="Preferred Teaching Mode" id="tr-teachingMode" required className="tr-full">
              <div className="tr-choice-grid tr-three-columns">
                {["Home Tuition", "Online Tuition", "Both"].map((option) => (
                  <label className="tr-choice-card" key={option}>
                    <input
                      type="radio"
                      name="teachingMode"
                      value={option}
                      checked={formData.teachingMode === option}
                      onChange={updateField}
                      required
                    />
                    <span className="tr-choice-content">
                      <strong>{option}</strong>
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            <div className="tr-field tr-full">
              <span className="tr-field-label">Classes You Can Teach <span className="tr-required">*</span></span>
              <div className="tr-option-grid">
                {classOptions.map((item) => (
                  <label className="tr-option" key={item}>
                    <input
                      type="checkbox"
                      checked={formData.classes.includes(item)}
                      onChange={() => updateMultiple("classes", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="tr-field tr-full">
              <span className="tr-field-label">Subjects You Can Teach <span className="tr-required">*</span></span>
              <div className="tr-option-grid">
                {subjectOptions.map((item) => (
                  <label className="tr-option" key={item}>
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(item)}
                      onChange={() => updateMultiple("subjects", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="tr-field tr-full">
              <span className="tr-field-label">Boards You Can Teach</span>
              <div className="tr-option-grid">
                {boardOptions.map((item) => (
                  <label className="tr-option" key={item}>
                    <input
                      type="checkbox"
                      checked={formData.boards.includes(item)}
                      onChange={() => updateMultiple("boards", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="tr-field tr-full">
              <span className="tr-field-label">Competitive Exam Teaching (if applicable)</span>
              <div className="tr-option-grid">
                {examOptions.map((item) => (
                  <label className="tr-option" key={item}>
                    <input
                      type="checkbox"
                      checked={formData.competitiveExams.includes(item)}
                      onChange={() => updateMultiple("competitiveExams", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05 */}
        <section className="tr-card">
          <SectionHeading
            number="05"
            icon={MapPin}
            title="Location & Availability"
            description="Share your preferred teaching areas and schedule."
          />

          <div className="tr-grid">
            <Field label="Preferred Teaching Areas" id="tr-preferredAreas" className="tr-full">
              <textarea
                id="tr-preferredAreas"
                name="preferredAreas"
                rows={3}
                value={formData.preferredAreas}
                onChange={updateField}
                placeholder="Mention preferred localities or areas..."
                maxLength={500}
              />
            </Field>

            <div className="tr-field tr-full">
              <span className="tr-field-label">Available Days</span>
              <div className="tr-option-grid">
                {daysOptions.map((item) => (
                  <label className="tr-option" key={item}>
                    <input
                      type="checkbox"
                      checked={formData.availableDays.includes(item)}
                      onChange={() => updateMultiple("availableDays", item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <Field label="Preferred Timing" id="tr-preferredTime">
              <select
                id="tr-preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={updateField}
              >
                <option value="">Select timing</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Flexible">Flexible</option>
              </select>
            </Field>

            <Field label="Expected Fee / Rate" id="tr-expectedFee">
              <input
                id="tr-expectedFee"
                name="expectedFee"
                value={formData.expectedFee}
                onChange={updateField}
                placeholder="Mention your expected rate"
                maxLength={100}
              />
            </Field>
          </div>
        </section>

        {/* SECTION 06 */}
        <section className="tr-card">
          <SectionHeading
            number="06"
            icon={FileText}
            title="Documents & Attachments"
            description="Select supporting documents for your application."
          />

          <div className="tr-document-grid">
            <div className="tr-document-item">
              <label htmlFor="tr-resume">Resume / CV</label>
              <div className="tr-upload-box">
                <Upload size={25} />
                <strong>Select your resume</strong>
                <span>PDF, DOC or DOCX · Max 5 MB</span>
                <input
                  id="tr-resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => handleFileChange(event, "resume")}
                />
                {resume && (
                  <div className="tr-selected-file">
                    <span>{resume.name}</span>
                    <button type="button" onClick={() => removeFile("resume")} aria-label="Remove resume">
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="tr-document-item">
              <label htmlFor="tr-photo">Recent Photograph</label>
              <div className="tr-upload-box">
                <Upload size={25} />
                <strong>Select your photograph</strong>
                <span>JPG, PNG or WebP · Max 5 MB</span>
                <input
                  id="tr-photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(event) => handleFileChange(event, "photo")}
                />
                {photo && (
                  <div className="tr-selected-file">
                    <span>{photo.name}</span>
                    <button type="button" onClick={() => removeFile("photo")} aria-label="Remove photograph">
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="tr-document-item tr-full">
              <label htmlFor="tr-certificates">Qualification Certificates</label>
              <div className="tr-upload-box">
                <Upload size={25} />
                <strong>Select certificates</strong>
                <span>PDF or images · Up to 5 files, max 5 MB each</span>
                <input
                  id="tr-certificates"
                  type="file"
                  multiple
                  accept=".pdf,image/jpeg,image/png,image/webp"
                  onChange={(event) => handleFileChange(event, "certificates")}
                />
                {certificates.map((file, index) => (
                  <div className="tr-selected-file" key={`${file.name}-${index}`}>
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile("certificates", index)}
                      aria-label={`Remove ${file.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tr-security-note">
            <LockKeyhole size={21} />
            <p>
              Files are selected locally in this preview only. They are not
              uploaded or stored. Actual document submission will use a
              secure backend with access controls.
            </p>
          </div>
        </section>

        {/* SECTION 07 */}
        <section className="tr-card">
          <SectionHeading
            number="07"
            icon={ShieldCheck}
            title="Identity Verification"
            description="Understand how identity verification will be handled."
          />

          <div className="tr-identity-panel">
            <div className="tr-identity-icon">
              <ShieldCheck size={27} />
            </div>
            <div>
              <h3>Secure Identity Verification</h3>
              <p>
                Identity verification may be required during the application
                review process. If Aadhaar verification is required, it will
                be handled separately through an authorised and secure
                verification process, with the required consent.
              </p>
              <span>
                No Aadhaar number or Aadhaar document is collected in this
                preview form.
              </span>
            </div>
          </div>

          <label className="tr-consent-row">
            <input
              type="checkbox"
              name="identityConsent"
              checked={formData.identityConsent}
              onChange={updateField}
              required
            />
            <span>
              I understand that identity verification may be required
              separately during the application process, subject to the
              applicable procedure and my required consent.
              <b className="tr-required"> *</b>
            </span>
          </label>
        </section>

        {/* SECTION 08 */}
        <section className="tr-card tr-final-card">
          <SectionHeading
            number="08"
            icon={CheckCircle2}
            title="Declaration & Final Consent"
            description="Review and confirm your application information."
          />

          <label className="tr-consent-row">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={updateField}
              required
            />
            <span>
              I declare that the information provided by me is accurate
              and complete to the best of my knowledge.
              <b className="tr-required"> *</b>
            </span>
          </label>

          <label className="tr-consent-row">
            <input
              type="checkbox"
              name="contactConsent"
              checked={formData.contactConsent}
              onChange={updateField}
              required
            />
            <span>
              I agree that Better Result Home Tuition may contact me
              regarding this teaching application.
              <b className="tr-required"> *</b>
            </span>
          </label>

          <div className="tr-fee-notice">
            <IndianRupee size={22} />
            <div>
              <strong>Registration Fee: ₹500</strong>
              <p>
                This is fee information only. No payment is collected
                through this frontend preview. Payment terms and secure
                processing will be provided after backend integration.
              </p>
            </div>
          </div>

          <button type="submit" className="tr-submit-button">
            Submit Application Preview
            <ArrowRight size={19} />
          </button>

          {status && (
            <div
              className={`tr-status-message ${statusType}`}
              role="status"
              aria-live="polite"
            >
              {statusType === "success" ? (
                <CheckCircle2 size={19} />
              ) : (
                <ShieldCheck size={19} />
              )}
              <span>{status}</span>
            </div>
          )}

          <p className="tr-submit-disclaimer">
            Preview only: this form does not submit, transmit or store
            your application or documents.
          </p>
        </section>
      </form>

      {/* HELP */}
      <section className="tr-help-section tr-container">
        <div className="tr-help-content">
          <span className="tr-section-label">NEED ASSISTANCE?</span>
          <h2>Have questions before applying?</h2>
          <p>
            Contact our team if you need clarification about the
            application process or teaching opportunities.
          </p>
        </div>

        <div className="tr-help-actions">
          <a href="tel:+917037374833">
            <Phone size={17} /> Call Our Team
          </a>
          <a
            href="https://wa.me/917037374833"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* BOTTOM LINKS */}
      <section className="tr-bottom-links tr-container">
        <Link href="/become-a-teacher">
          Become a Teacher <ArrowRight size={16} />
        </Link>
        <Link href="/vacancy">
          Teaching Opportunities <ArrowRight size={16} />
        </Link>
        <Link href="/contact">
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
