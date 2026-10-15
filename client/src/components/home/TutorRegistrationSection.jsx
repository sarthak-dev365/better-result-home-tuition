
"use client";

import { useRef, useState } from "react";
import {
  UserRound,
  MapPin,
  BookOpen,
  GraduationCap,
  FileUp,
  IdCard,
  Camera,
} from "lucide-react";

import "../../styles/home/tutor-registration-section.css";

const cities = [
  "Dehradun", "Haridwar", "Rishikesh", "Roorkee",
  "Haldwani", "Nainital", "Rudrapur", "Kashipur",
  "Almora", "Pithoragarh", "Kotdwar",
  "Srinagar (Garhwal)", "Chamoli", "Uttarkashi",
  "Tehri", "Pauri", "Champawat", "Bageshwar", "Other",
];

const experiences = [
  "0–1 year", "1–3 years", "3–5 years",
  "5–10 years", "10+ years",
];

const classLevels = [
  "Primary (Classes 1–5)",
  "Middle (Classes 6–8)",
  "Secondary (Classes 9–10)",
  "Senior Secondary (Classes 11–12)",
  "Competitive Exams (JEE / NEET)",
];

const qualifications = [
  "Graduation", "B.A.", "B.Sc.", "B.Com",
  "Post Graduation", "M.A.", "MCA", "M.Sc.",
  "M.Com", "B.Ed.", "M.Ed.", "Ph.D.", "Others",
];

const modes = [
  "Home Tuition Only",
  "Online Tuition",
  "Both Home and Online",
];

function FormField({ label, children, className = "" }) {
  const fieldId = children?.props?.id || children?.props?.name;

  return (
    <div className={`br-tutor-field ${className}`}>
      <label htmlFor={fieldId}>
        {label}
        <span className="br-tutor-required"> *</span>
      </label>
      {children}
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }) {
  return (
    <div className="br-tutor-section-heading">
      <span className="br-tutor-section-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </span>

      <div>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

function DocumentUpload({
  id,
  name,
  title,
  description,
  accept,
  allowedTypes,
  maxSize,
  onFileChange,
  fileName,
  error,
  icon: Icon,
}) {
  return (
    <div className="br-tutor-document">
      <label className="br-tutor-upload-box" htmlFor={id}>
        <input
          id={id}
          type="file"
          name={name}
          accept={accept}
          required
          aria-describedby={`${id}-hint ${id}-filename`}
          onChange={(event) =>
            onFileChange(event, allowedTypes, maxSize)
          }
        />

        <span className="br-tutor-upload-icon" aria-hidden="true">
          <Icon size={23} strokeWidth={1.8} />
        </span>

        <strong>{title}</strong>

        <span
          className="br-tutor-upload-hint"
          id={`${id}-hint`}
        >
          {description}
        </span>

        <span
          className="br-tutor-upload-filename"
          id={`${id}-filename`}
        >
          {fileName || "No file selected"}
        </span>
      </label>

      {error && (
        <p className="br-tutor-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function TutorRegistrationSection() {
  const formRef = useRef(null);

  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [aadhaarError, setAadhaarError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const imageTypes = ["image/jpeg", "image/png"];
  const aadhaarTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
  ];
  const maxFileSize = 5 * 1024 * 1024;

  function handleFileChange(
    event,
    allowedTypes,
    maxSize,
    setFile,
    setError
  ) {
    const input = event.target;
    const file = input.files?.[0];

    setError("");
    setFile(null);
    setFormMessage("");

    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      setError(
        allowedTypes.includes("application/pdf")
          ? "Only PDF, JPG or PNG files are allowed."
          : "Only JPG or PNG image files are allowed."
      );
      input.value = "";
      return;
    }

    if (file.size > maxSize) {
      setError("File size must not exceed 5 MB.");
      input.value = "";
      return;
    }

    if (file.size === 0) {
      setError(
        "The selected file is empty. Please choose another file."
      );
      input.value = "";
      return;
    }

    setFile(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormMessage("");

    const form = formRef.current;

    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!aadhaarFile || !photoFile) {
      setFormMessage(
        "Please upload both your Aadhaar Card and Profile Photo."
      );
      return;
    }

    if (!termsAccepted) {
      setFormMessage("Please accept the Terms and Conditions.");
      return;
    }

    setFormMessage(
      "Validation successful. Backend/API integration is required to securely submit your registration."
    );
  }

  return (
    <section
      className="br-tutor-registration"
      id="tutor-registration"
    >
      <div className="br-tutor-container">
        <header className="br-tutor-header">
          <span className="br-tutor-eyebrow">
            <span aria-hidden="true">✦</span>
            JOIN OUR TEAM
          </span>

          <h2>
            Register as a <span>Tutor</span>
          </h2>

          <p>
            Share your teaching expertise and help students move
            towards their academic goals with Better Result Home
            Tuition.
          </p>

          <div
            className="br-tutor-header-accent"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>
        </header>

        <form
          ref={formRef}
          className="br-tutor-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* 1. Personal Information */}

          <section className="br-tutor-form-section">
            <SectionHeading
              icon={UserRound}
              title="Personal Information"
              subtitle="Enter your basic details."
            />

            <div className="br-tutor-fields-grid">
              <FormField label="Full Name">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </FormField>

              <FormField label="Date of Birth">
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  autoComplete="bday"
                  required
                />
              </FormField>

              <FormField label="Gender">
                <select
                  id="gender"
                  name="gender"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">
                    Prefer not to say
                  </option>
                </select>
              </FormField>

              <FormField label="Mobile Number">
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  autoComplete="tel-national"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                />
              </FormField>

              <FormField label="Email Address">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </FormField>

              <FormField label="Aadhaar Number">
                <input
                  id="aadhaarNumber"
                  type="password"
                  name="aadhaarNumber"
                  placeholder="Enter 12-digit Aadhaar number"
                  inputMode="numeric"
                  pattern="[0-9]{12}"
                  minLength={12}
                  maxLength={12}
                  autoComplete="off"
                  title="Enter exactly 12 digits"
                  required
                />
              </FormField>
            </div>
          </section>

          {/* 2. Address Information */}

          <section className="br-tutor-form-section">
            <SectionHeading
              icon={MapPin}
              title="Address Information"
              subtitle="Enter your current address in Uttarakhand."
            />

            <div className="br-tutor-fields-grid">
              <FormField
                label="Full Address"
                className="br-tutor-field-full"
              >
                <textarea
                  id="address"
                  name="address"
                  placeholder="House / Flat No., Street, Locality"
                  rows={3}
                  maxLength={500}
                  autoComplete="street-address"
                  required
                />
              </FormField>

              <FormField label="City">
                <select
                  id="city"
                  name="city"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="State">
                <input
                  id="state"
                  type="text"
                  name="state"
                  value="Uttarakhand"
                  readOnly
                  required
                />
              </FormField>

              <FormField label="PIN Code">
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  placeholder="6-digit PIN code"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  autoComplete="postal-code"
                  required
                />
              </FormField>
            </div>
          </section>

          {/* 3. Teaching Preferences */}

          <section className="br-tutor-form-section">
            <SectionHeading
              icon={BookOpen}
              title="Teaching Preferences"
              subtitle="Tell us about your experience and preferred teaching mode."
            />

            <div className="br-tutor-fields-grid">
              <FormField label="Years of Experience">
                <select
                  id="experience"
                  name="experience"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Experience
                  </option>
                  {experiences.map((experience) => (
                    <option key={experience} value={experience}>
                      {experience}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Subjects Taught">
                <input
                  id="subjects"
                  type="text"
                  name="subjects"
                  placeholder="e.g. Mathematics, Physics, English"
                  maxLength={300}
                  required
                />
              </FormField>

              <FormField label="Preferred Class Level">
                <select
                  id="classLevel"
                  name="classLevel"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Class Level
                  </option>
                  {classLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Preferred Mode">
                <select
                  id="preferredMode"
                  name="preferredMode"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Mode</option>
                  {modes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>
          </section>

          {/* 4. Educational Qualifications */}

          <section className="br-tutor-form-section">
            <SectionHeading
              icon={GraduationCap}
              title="Educational Qualifications"
              subtitle="Provide your academic qualification details."
            />

            <div className="br-tutor-fields-grid">
              <FormField label="Highest Qualification">
                <select
                  id="qualification"
                  name="qualification"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Qualification
                  </option>
                  {qualifications.map((qualification) => (
                    <option
                      key={qualification}
                      value={qualification}
                    >
                      {qualification}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Specialization">
                <input
                  id="specialization"
                  type="text"
                  name="specialization"
                  placeholder="e.g. Mathematics, English Literature"
                  maxLength={200}
                  required
                />
              </FormField>

              <FormField label="University / College">
                <input
                  id="university"
                  type="text"
                  name="university"
                  placeholder="Name of University / College"
                  maxLength={200}
                  required
                />
              </FormField>

              <FormField label="Year of Passing">
                <input
                  id="passingYear"
                  type="number"
                  name="passingYear"
                  placeholder="e.g. 2020"
                  min="1950"
                  max={new Date().getFullYear()}
                  required
                />
              </FormField>
            </div>
          </section>

          {/* 5. Required Document Uploads */}

          <section className="br-tutor-form-section">
            <SectionHeading
              icon={FileUp}
              title="Document Uploads"
              subtitle="Both documents are required to complete registration."
            />

            <div className="br-tutor-document-grid">
              <DocumentUpload
                id="br-tutor-aadhaar-file"
                name="aadhaarDocument"
                title="Upload Aadhaar Card"
                description="PDF, JPG or PNG · Maximum 5 MB"
                accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                allowedTypes={aadhaarTypes}
                maxSize={maxFileSize}
                fileName={aadhaarFile?.name}
                error={aadhaarError}
                icon={IdCard}
                onFileChange={(event, types, size) =>
                  handleFileChange(
                    event,
                    types,
                    size,
                    setAadhaarFile,
                    setAadhaarError
                  )
                }
              />

              <DocumentUpload
                id="br-tutor-profile-photo"
                name="profilePhoto"
                title="Upload Profile Photo"
                description="JPG or PNG only · Maximum 5 MB"
                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                allowedTypes={imageTypes}
                maxSize={maxFileSize}
                fileName={photoFile?.name}
                error={photoError}
                icon={Camera}
                onFileChange={(event, types, size) =>
                  handleFileChange(
                    event,
                    types,
                    size,
                    setPhotoFile,
                    setPhotoError
                  )
                }
              />
            </div>
          </section>

          {/* 6. Terms and Submit */}

          <div className="br-tutor-terms">
            <input
              id="br-tutor-terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => {
                setTermsAccepted(event.target.checked);
                setFormMessage("");
              }}
              required
            />

            <label htmlFor="br-tutor-terms">
              I agree to the <a href="/terms">Terms and Conditions</a>{" "}
              and confirm that the information provided is accurate.
            </label>
          </div>

          <button className="br-tutor-submit" type="submit">
            <span>Register as Tutor</span>
            <span aria-hidden="true">→</span>
          </button>

          {formMessage && (
            <p className="br-tutor-form-message" role="status">
              {formMessage}
            </p>
          )}

          <p className="br-tutor-secure-note">
            Documents and personal details should be handled securely
            and accessed only for an authorised registration purpose.
          </p>
        </form>
      </div>
    </section>
  );
}
