
"use client";

import { useState } from "react";
import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  MapPin,
  FileText,
  ShieldCheck,
  IndianRupee,
  Upload,
  CheckCircle2,
  LockKeyhole,
  Phone,
  Mail,
  Trash2,
  ArrowRight,
  Clock3,
  Laptop,
  Users,
  CreditCard,
  Award,
  ClipboardCheck,
} from "lucide-react";

import "@/styles/pages/become-a-teacher.css";

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

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const examOptions = ["JEE Main", "JEE Advanced", "NEET"];

const initialForm = {
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

  professionalProfile: "",
  declaration: false,
  contactConsent: false,
};

const fileRules = {
  resume: {
    maxFiles: 1,
    extensions: [".pdf", ".doc", ".docx"],
    types: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
  photo: {
    maxFiles: 1,
    extensions: [".jpg", ".jpeg", ".png", ".webp"],
    types: ["image/jpeg", "image/png", "image/webp"],
  },
  certificates: {
    maxFiles: 5,
    extensions: [".pdf", ".jpg", ".jpeg", ".png", ".webp"],
    types: [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
  },
};

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function SectionHeading({ number, icon: Icon, title, description }) {
  return (
    <div className="bt-section-heading">
      <div className="bt-section-number">{number}</div>

      <div className="bt-section-icon">
        <Icon size={22} />
      </div>

      <div className="bt-section-heading-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  required = false,
  children,
  className = "",
}) {
  return (
    <div className={`bt-field ${className}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="bt-required"> *</span>}
      </label>
      {children}
    </div>
  );
}

function ChoiceCards({ name, value, options, onChange }) {
  return (
    <div className="bt-choice-grid">
      {options.map((option) => (
        <label
          className={`bt-choice-card ${
            value === option.value ? "selected" : ""
          }`}
          key={option.value}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            required
          />

          <span className="bt-choice-radio" />

          <span className="bt-choice-copy">
            <strong>{option.label}</strong>
            {option.description && (
              <small>{option.description}</small>
            )}
          </span>
        </label>
      ))}
    </div>
  );
}

function MultiSelect({
  title,
  items,
  selected,
  onToggle,
  required = false,
}) {
  return (
    <div className="bt-field bt-full">
      <div className="bt-field-label">
        {title}
        {required && <span className="bt-required"> *</span>}
      </div>

      <div className="bt-option-grid">
        {items.map((item) => (
          <label
            className={`bt-option ${
              selected.includes(item) ? "selected" : ""
            }`}
            key={item}
          >
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
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

    if (file.size === 0 || file.size > 5 * 1024 * 1024) {
      return `Each file must be smaller than 5 MB: ${file.name}`;
    }
  }

  return "";
}

export default function BecomeATeacherPage() {
  const [formData, setFormData] = useState(initialForm);

  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [certificates, setCertificates] = useState([]);

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const today = getToday();

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

  const toggleMultiple = (name, value) => {
    setFormData((previous) => ({
      ...previous,
      [name]: previous[name].includes(value)
        ? previous[name].filter((item) => item !== value)
        : [...previous[name], value],
    }));

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

    if (type === "resume") {
      setResume(files[0] || null);
    }

    if (type === "photo") {
      setPhoto(files[0] || null);
    }

    if (type === "certificates") {
      setCertificates(files);
    }

    setStatus("");
    setStatusType("");
  };

  const removeFile = (type, index = 0) => {
    if (type === "resume") {
      setResume(null);
      const input = document.getElementById("bt-resume");
      if (input) input.value = "";
    }

    if (type === "photo") {
      setPhoto(null);
      const input = document.getElementById("bt-photo");
      if (input) input.value = "";
    }

    if (type === "certificates") {
      setCertificates((previous) =>
        previous.filter((_, fileIndex) => fileIndex !== index)
      );

      const input = document.getElementById("bt-certificates");
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

    if (formData.dob > today || formData.dob < "1950-01-01") {
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
      !formData.declaration ||
      !formData.contactConsent
    ) {
      showError("Please accept both declarations before continuing.");
      return;
    }

    setStatus(
      "Your application details have been checked successfully. The Razorpay checkout step is not active yet."
    );
    setStatusType("success");
  };

  return (
    <main className="bt-page">
      {/* HERO */}
      <section className="bt-hero">
        <div className="bt-hero-pattern" />

        <div className="bt-container bt-hero-inner">
          <div className="bt-hero-copy">
            <span className="bt-eyebrow">
              <span className="bt-eyebrow-dot" />
              BETTER RESULT HOME TUITION
            </span>

            <h1>
              Become a
              <span> Teacher</span>
            </h1>

            <p>
              Turn your knowledge into an opportunity to inspire.
              Apply to teach students through home tuition or online
              classes and share your academic expertise with us.
            </p>

            <div className="bt-hero-points">
              <span>
                <CheckCircle2 size={17} />
                Home & Online Tuition
              </span>

              <span>
                <CheckCircle2 size={17} />
                Flexible Teaching Options
              </span>

              <span>
                <CheckCircle2 size={17} />
                Professional Application
              </span>
            </div>

            <a href="#teacher-application" className="bt-hero-button">
              Start Your Application
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="bt-hero-visual" aria-hidden="true">
            <div className="bt-hero-orbit bt-orbit-one" />
            <div className="bt-hero-orbit bt-orbit-two" />

            <div className="bt-hero-visual-card">
              <div className="bt-hero-visual-icon">
                <GraduationCap size={46} />
              </div>

              <span>YOUR TEACHING JOURNEY</span>
              <strong>Teach. Inspire. Grow.</strong>
              <p>Make every lesson meaningful.</p>

              <div className="bt-visual-bottom">
                <BookOpen size={18} />
                <span>Share Your Knowledge</span>
              </div>
            </div>

            <div className="bt-floating-icon bt-floating-one">
              <Laptop size={22} />
            </div>

            <div className="bt-floating-icon bt-floating-two">
              <Users size={22} />
            </div>
          </div>
        </div>
      </section>

      {/* FORM INTRO */}
      <section className="bt-container bt-form-intro" id="teacher-application">
        <div>
          <span className="bt-kicker">TEACHER APPLICATION FORM</span>
          <h2>Let&apos;s Get to Know You</h2>
          <p>
            Complete all the required details to create your teacher
            application profile.
          </p>
        </div>

        <div className="bt-fee-summary">
          <div className="bt-fee-summary-icon">
            <IndianRupee size={23} />
          </div>

          <div>
            <span>TEACHER REGISTRATION FEE</span>
            <strong>₹500</strong>
            <small>One-time application registration fee</small>
          </div>
        </div>
      </section>

      <form className="bt-form bt-container" onSubmit={handleSubmit}>
        {/* 01 PERSONAL DETAILS */}
        <section className="bt-card">
          <SectionHeading
            number="01"
            icon={UserRound}
            title="Personal Information"
            description="Tell us your basic details and how we can contact you."
          />

          <div className="bt-grid">
            <Field label="Full Name" id="bt-fullName" required>
              <input
                id="bt-fullName"
                name="fullName"
                value={formData.fullName}
                onChange={updateField}
                placeholder="Enter your full name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </Field>

            <Field label="Date of Birth" id="bt-dob" required>
              <input
                id="bt-dob"
                name="dob"
                type="date"
                min="1950-01-01"
                max={today}
                value={formData.dob}
                onChange={updateField}
                required
              />
            </Field>

            <Field label="Gender" id="bt-gender" required>
              <select
                id="bt-gender"
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

            <Field label="Mobile Number" id="bt-mobile" required>
              <div className="bt-input-icon">
                <Phone size={17} />
                <input
                  id="bt-mobile"
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

            <Field label="Email Address" id="bt-email" required>
              <div className="bt-input-icon">
                <Mail size={17} />
                <input
                  id="bt-email"
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

            <Field
              label="Current Address"
              id="bt-address"
              required
              className="bt-full"
            >
              <textarea
                id="bt-address"
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

            <Field label="City" id="bt-city" required>
              <input
                id="bt-city"
                name="city"
                value={formData.city}
                onChange={updateField}
                maxLength={100}
                autoComplete="address-level2"
                required
              />
            </Field>

            <Field label="State" id="bt-state" required>
              <input
                id="bt-state"
                name="state"
                value={formData.state}
                onChange={updateField}
                maxLength={100}
                autoComplete="address-level1"
                required
              />
            </Field>

            <Field label="PIN Code" id="bt-pincode" required>
              <input
                id="bt-pincode"
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

        {/* 02 EDUCATION */}
        <section className="bt-card">
          <SectionHeading
            number="02"
            icon={GraduationCap}
            title="Educational Qualification"
            description="Share your academic qualifications and institution details."
          />

          <div className="bt-grid">
            <Field
              label="Highest Qualification"
              id="bt-qualification"
              required
            >
              <select
                id="bt-qualification"
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

            <Field label="Degree / Course" id="bt-degree" required>
              <input
                id="bt-degree"
                name="degree"
                value={formData.degree}
                onChange={updateField}
                placeholder="e.g. B.Sc, B.Com, M.A."
                maxLength={150}
                required
              />
            </Field>

            <Field
              label="University / Institution"
              id="bt-institution"
              required
            >
              <input
                id="bt-institution"
                name="institution"
                value={formData.institution}
                onChange={updateField}
                placeholder="Enter institution name"
                maxLength={200}
                required
              />
            </Field>

            <Field label="Passing Year" id="bt-passingYear" required>
              <input
                id="bt-passingYear"
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

        {/* 03 EXPERIENCE */}
        <section className="bt-card">
          <SectionHeading
            number="03"
            icon={BriefcaseBusiness}
            title="Teaching Experience"
            description="Let us know whether you are beginning your career or have teaching experience."
          />

          <div className="bt-grid">
            <Field
              label="Select Your Experience"
              id="bt-experienceType"
              required
              className="bt-full"
            >
              <ChoiceCards
                name="experienceType"
                value={formData.experienceType}
                onChange={updateField}
                options={[
                  {
                    value: "Fresher",
                    label: "Fresher",
                    description: "I am starting my teaching career.",
                  },
                  {
                    value: "Experienced",
                    label: "Experienced",
                    description: "I have previous teaching experience.",
                  },
                ]}
              />
            </Field>

            {formData.experienceType === "Experienced" && (
              <>
                <Field
                  label="Years of Experience"
                  id="bt-experienceYears"
                  required
                >
                  <input
                    id="bt-experienceYears"
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
                  id="bt-experienceDetails"
                  required
                  className="bt-full"
                >
                  <textarea
                    id="bt-experienceDetails"
                    name="experienceDetails"
                    rows={4}
                    value={formData.experienceDetails}
                    onChange={updateField}
                    placeholder="Mention institutions, classes, subjects and your experience..."
                    maxLength={1500}
                    required
                  />
                </Field>
              </>
            )}
          </div>
        </section>

        {/* 04 TEACHING PREFERENCES */}
        <section className="bt-card">
          <SectionHeading
            number="04"
            icon={BookOpen}
            title="Teaching Preferences"
            description="Select the teaching mode, classes and subjects you are comfortable with."
          />

          <div className="bt-grid">
            <Field
              label="Preferred Teaching Mode"
              id="bt-teachingMode"
              required
              className="bt-full"
            >
              <ChoiceCards
                name="teachingMode"
                value={formData.teachingMode}
                onChange={updateField}
                options={[
                  {
                    value: "Home Tuition",
                    label: "Home Tuition",
                    description: "Teach students at their homes.",
                  },
                  {
                    value: "Online Tuition",
                    label: "Online Tuition",
                    description: "Teach students through online classes.",
                  },
                  {
                    value: "Both",
                    label: "Both",
                    description: "Available for home and online tuition.",
                  },
                ]}
              />
            </Field>

            <MultiSelect
              title="Classes You Can Teach"
              items={classOptions}
              selected={formData.classes}
              onToggle={(value) => toggleMultiple("classes", value)}
              required
            />

            <MultiSelect
              title="Subjects You Can Teach"
              items={subjectOptions}
              selected={formData.subjects}
              onToggle={(value) => toggleMultiple("subjects", value)}
              required
            />

            <MultiSelect
              title="Boards You Can Teach"
              items={boardOptions}
              selected={formData.boards}
              onToggle={(value) => toggleMultiple("boards", value)}
            />

            <MultiSelect
              title="Competitive Exam Teaching (if applicable)"
              items={examOptions}
              selected={formData.competitiveExams}
              onToggle={(value) => toggleMultiple("competitiveExams", value)}
            />
          </div>
        </section>

        {/* 05 LOCATION */}
        <section className="bt-card">
          <SectionHeading
            number="05"
            icon={MapPin}
            title="Location & Availability"
            description="Tell us where and when you are available to teach."
          />

          <div className="bt-grid">
            <Field
              label="Preferred Teaching Areas"
              id="bt-preferredAreas"
              className="bt-full"
            >
              <textarea
                id="bt-preferredAreas"
                name="preferredAreas"
                rows={3}
                value={formData.preferredAreas}
                onChange={updateField}
                placeholder="Mention preferred localities or areas..."
                maxLength={500}
              />
            </Field>

            <MultiSelect
              title="Available Days"
              items={dayOptions}
              selected={formData.availableDays}
              onToggle={(value) => toggleMultiple("availableDays", value)}
            />

            <Field label="Preferred Timing" id="bt-preferredTime">
              <select
                id="bt-preferredTime"
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

            <Field label="Expected Fee / Rate" id="bt-expectedFee">
              <input
                id="bt-expectedFee"
                name="expectedFee"
                value={formData.expectedFee}
                onChange={updateField}
                placeholder="Mention your expected rate"
                maxLength={100}
              />
            </Field>
          </div>
        </section>

        {/* 06 DOCUMENTS */}
        <section className="bt-card">
          <SectionHeading
            number="06"
            icon={FileText}
            title="Documents & Attachments"
            description="Attach your resume, recent photograph and academic certificates."
          />

          <div className="bt-document-grid">
            <div className="bt-document-item">
              <label htmlFor="bt-resume">Resume / CV</label>

              <div className="bt-upload-box">
                <div className="bt-upload-icon">
                  <Upload size={24} />
                </div>

                <strong>Upload Your Resume</strong>
                <span>PDF, DOC or DOCX · Maximum 5 MB</span>

                <input
                  id="bt-resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => handleFileChange(event, "resume")}
                />

                {resume && (
                  <div className="bt-selected-file">
                    <span>{resume.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile("resume")}
                      aria-label="Remove resume"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bt-document-item">
              <label htmlFor="bt-photo">Recent Photograph</label>

              <div className="bt-upload-box">
                <div className="bt-upload-icon">
                  <UserRound size={24} />
                </div>

                <strong>Upload Your Photograph</strong>
                <span>JPG, PNG or WebP · Maximum 5 MB</span>

                <input
                  id="bt-photo"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={(event) => handleFileChange(event, "photo")}
                />

                {photo && (
                  <div className="bt-selected-file">
                    <span>{photo.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile("photo")}
                      aria-label="Remove photograph"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bt-document-item bt-full">
              <label htmlFor="bt-certificates">
                Qualification Certificates
              </label>

              <div className="bt-upload-box">
                <div className="bt-upload-icon">
                  <Award size={24} />
                </div>

                <strong>Upload Your Certificates</strong>
                <span>PDF or images · Up to 5 files, maximum 5 MB each</span>

                <input
                  id="bt-certificates"
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onChange={(event) =>
                    handleFileChange(event, "certificates")
                  }
                />

                {certificates.map((file, index) => (
                  <div
                    className="bt-selected-file"
                    key={`${file.name}-${index}`}
                  >
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

          <div className="bt-document-note">
            <FileText size={19} />
            <p>
              Please upload clear and readable documents. Make sure
              that the information in your certificates matches
              the details entered in this application.
            </p>
          </div>
        </section>

        {/* 07 PROFESSIONAL PROFILE */}
        <section className="bt-card">
          <SectionHeading
            number="07"
            icon={Award}
            title="Professional Background"
            description="Tell us a little more about your teaching approach and strengths."
          />

          <div className="bt-grid">
            <Field
              label="About Yourself / Teaching Profile"
              id="bt-professionalProfile"
              className="bt-full"
            >
              <textarea
                id="bt-professionalProfile"
                name="professionalProfile"
                rows={5}
                value={formData.professionalProfile}
                onChange={updateField}
                placeholder="Introduce yourself, describe your teaching style, strengths, achievements or any additional information..."
                maxLength={2000}
              />
            </Field>
          </div>

          <div className="bt-profile-tips">
            <div>
              <CheckCircle2 size={18} />
              <span>Share your subject expertise clearly.</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Mention relevant qualifications and achievements.</span>
            </div>
            <div>
              <CheckCircle2 size={18} />
              <span>Provide accurate and up-to-date information.</span>
            </div>
          </div>
        </section>

        {/* 08 DECLARATION & PAYMENT */}
        <section className="bt-card bt-final-card">
          <SectionHeading
            number="08"
            icon={ClipboardCheck}
            title="Declaration & Registration"
            description="Confirm your information and review the application registration fee."
          />

          <div className="bt-declarations">
            <label className="bt-consent-row">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={updateField}
                required
              />

              <span>
                I declare that the information provided by me is
                accurate and complete to the best of my knowledge.
                <b className="bt-required"> *</b>
              </span>
            </label>

            <label className="bt-consent-row">
              <input
                type="checkbox"
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={updateField}
                required
              />

              <span>
                I agree that Better Result Home Tuition may contact
                me regarding my teacher application.
                <b className="bt-required"> *</b>
              </span>
            </label>
          </div>

          <div className="bt-payment-card">
            <div className="bt-payment-top">
              <div className="bt-payment-brand">
                <div className="bt-payment-brand-icon">
                  <CreditCard size={23} />
                </div>

                <div>
                  <span>APPLICATION REGISTRATION</span>
                  <h3>Registration Fee</h3>
                </div>
              </div>

              <div className="bt-payment-amount">
                <strong>₹500</strong>
                <span>INR</span>
              </div>
            </div>

            <div className="bt-payment-divider" />

            <div className="bt-payment-bottom">
              <div className="bt-payment-method">
                <span className="bt-payment-method-mark">
                  <LockKeyhole size={16} />
                </span>

                <div>
                  <strong>Payment Method</strong>
                  <span>Razorpay</span>
                </div>
              </div>

              <span className="bt-payment-secure-label">
                <ShieldCheck size={15} />
                Secure Checkout
              </span>
            </div>
          </div>

          <div className="bt-payment-note">
            <IndianRupee size={18} />
            <p>
              The teacher application registration fee is ₹500.
              Payment is to be completed through the available
              Razorpay checkout.
            </p>
          </div>

          <button type="submit" className="bt-submit-button">
            Continue to Payment
            <ArrowRight size={19} />
          </button>

          {status && (
            <div
              className={`bt-status-message ${statusType}`}
              role="status"
              aria-live="polite"
            >
              {statusType === "success" ? (
                <CheckCircle2 size={20} />
              ) : (
                <ShieldCheck size={20} />
              )}

              <span>{status}</span>
            </div>
          )}

          <p className="bt-submit-disclaimer">
            Submission is subject to application review and
            confirmation by the team.
          </p>
        </section>
      </form>

      {/* CONTACT HELP */}
      <section className="bt-help-section">
        <div className="bt-container bt-help-inner">
          <div>
            <span className="bt-kicker">WE ARE HERE TO HELP</span>
            <h2>Need assistance with your application?</h2>
            <p>
              Get in touch with our team for help regarding the
              teacher application process.
            </p>
          </div>

          <div className="bt-help-actions">
            <a href="tel:+917037374833">
              <Phone size={17} />
              Call Our Team
            </a>

            <a
              href="https://wa.me/917037374833"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
