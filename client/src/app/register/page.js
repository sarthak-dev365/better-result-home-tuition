
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  GraduationCap,
  UsersRound,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  BookOpen,
  School,
} from "lucide-react";

import "./register.css";

const initialForm = {
  fullName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  accountType: "student",

  // Student details
  studentClass: "",
  schoolName: "",
  board: "",
  studentSubjects: "",
  tuitionMode: "",
  studentMobile: "",
  guardianName: "",
  relationship: "",
  guardianMobile: "",

  // Parent details
  childName: "",
  childDob: "",
  childGender: "",
  childClass: "",
  childSchool: "",
  childBoard: "",
  childSubjects: "",
  parentOccupation: "",
  alternateMobile: "",

  // Teacher details
  qualification: "",
  specialization: "",
  experience: "",
  teachingClasses: "",
  teachingSubjects: "",
  teachingMode: "",
  expectedFee: "",
  availableDays: "",
  availableTime: "",

  // Common address
  address: "",
  city: "",
  state: "Uttarakhand",
  pincode: "",

  agree: false,
};

const roleOptions = [
  { value: "student", label: "Student", Icon: GraduationCap },
  { value: "parent", label: "Parent", Icon: UsersRound },
  { value: "teacher", label: "Teacher", Icon: BriefcaseBusiness },
];

const TextField = ({
  label,
  name,
  placeholder,
  icon: Icon,
  type = "text",
  required = true,
  autoComplete,
  maxLength,
  inputMode,
  form,
  setForm,
  setError,
  setMessage,
}) => {
  return (
    <label className="reg-field">
      <span>{label}{required ? " *" : ""}</span>
      <div className="reg-input-wrap">
        {Icon && <Icon size={18} aria-hidden="true" />}
        <input
          name={name}
          type={type}
          placeholder={placeholder || label}
          value={form?.[name] ?? ""}
          onChange={(event) => {
            let value = event.target.value;

            if (name.toLowerCase().includes("mobile")) {
              value = value.replace(/\D/g, "").slice(0, 10);
            }

            if (name === "pincode") {
              value = value.replace(/\D/g, "").slice(0, 6);
            }

            setForm((current) => ({ ...current, [name]: value }));
            setError("");
            setMessage("");
          }}
          autoComplete={autoComplete}
          maxLength={maxLength}
          inputMode={inputMode}
          required={required}
        />
      </div>
    </label>
  );
};

const SelectField = ({ label, name, options, required = true, form, updateField }) => {
  return (
    <label className="reg-field">
      <span>{label}{required ? " *" : ""}</span>
      <select
        name={name}
        value={form?.[name] ?? ""}
        onChange={updateField}
        required={required}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

const TextAreaField = ({ label, name, placeholder, required = true, form, updateField }) => {
  return (
    <label className="reg-field reg-field-full">
      <span>{label}{required ? " *" : ""}</span>
      <textarea
        name={name}
        rows={3}
        placeholder={placeholder || label}
        value={form?.[name] ?? ""}
        onChange={updateField}
        required={required}
      />
    </label>
  );
};

const PasswordField = ({
  confirm = false,
  form,
  updateField,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {
  const name = confirm ? "confirmPassword" : "password";
  const visible = confirm ? showConfirmPassword : showPassword;
  const toggle = confirm ? setShowConfirmPassword : setShowPassword;

  return (
    <label className="reg-field">
      <span>{confirm ? "Confirm Password" : "Create Password"} *</span>
      <div className="reg-input-wrap">
        <LockKeyhole size={18} aria-hidden="true" />
        <input
          name={name}
          type={visible ? "text" : "password"}
          autoComplete="new-password"
          placeholder={
            confirm ? "Re-enter your password" : "At least 8 characters"
          }
          minLength={confirm ? undefined : 8}
          value={form?.[name] ?? ""}
          onChange={updateField}
          required
        />
        <button
          className="reg-eye"
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => toggle((current) => !current)}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </label>
  );
};

const SectionTitle = ({ children }) => {
  return <h3 className="reg-section-title">{children}</h3>;
};

export default function RegisterPage() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value, checked, type } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setMessage("");
  }

  function changeRole(role) {
    setForm((current) => ({
      ...initialForm,
      accountType: role,
    }));

    setError("");
    setMessage("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (form.fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    if (!/^[0-9]{6}$/.test(form.pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    if (form.accountType === "student") {
      if (!form.studentClass || !form.guardianName.trim()) {
        setError("Please complete the class and parent/guardian details.");
        return;
      }

      if (!/^[0-9]{10}$/.test(form.guardianMobile)) {
        setError("Enter a valid parent/guardian mobile number.");
        return;
      }
    }

    if (form.accountType === "parent") {
      if (!form.childName.trim() || !form.childClass) {
        setError("Please enter your child's name and class.");
        return;
      }
    }

    if (form.accountType === "teacher") {
      if (!form.qualification.trim() || !form.teachingSubjects.trim()) {
        setError("Please enter your qualification and teaching subjects.");
        return;
      }
    }

    if (!form.agree) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    setMessage(
      "All required fields are valid. Actual registration will work after backend authentication is connected."
    );
  }

  return (
    <main className="register-page">
      <section className="register-shell">
        <div className="register-form-side">
          <div className="register-form-wrap">
            <Link
              href="/"
              className="register-mobile-brand"
              aria-label="Better Result Home Tuition home"
            >
              <Image
                src="/images/logo.png"
                alt="Better Result Home Tuition"
                width={250}
                height={130}
                priority
              />
            </Link>

            <header className="register-heading">
              <span className="register-eyebrow">GET STARTED</span>
              <h1>Create your account</h1>
              <p>
                Enter your details to get started with Better Result Home Tuition.
              </p>
            </header>

            <div className="reg-role-picker">
              <p className="reg-role-label">I want to register as</p>

              <div className="reg-role-options">
                {roleOptions.map(({ value, label, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    className={`reg-role-option ${
                      form.accountType === value ? "selected" : ""
                    }`}
                    aria-pressed={form.accountType === value}
                    onClick={() => changeRole(value)}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              <SectionTitle>
                {form.accountType === "student"
                  ? "Student Account Details"
                  : form.accountType === "parent"
                    ? "Parent / Guardian Details"
                    : "Teacher Account Details"}
              </SectionTitle>

              <div className="reg-grid">
                <TextField
                  label={
                    form.accountType === "parent"
                      ? "Parent / Guardian Full Name"
                      : form.accountType === "teacher"
                        ? "Teacher Full Name"
                        : "Student Full Name"
                  }
                  name="fullName"
                  placeholder="Enter your full name"
                  icon={UserRound}
                  autoComplete="name"
                  form={form}
                  setForm={setForm}
                  setError={setError}
                  setMessage={setMessage}
                />

                <TextField
                  label="Email Address"
                  name="email"
                  placeholder="you@example.com"
                  icon={Mail}
                  type="email"
                  autoComplete="email"
                  form={form}
                  setForm={setForm}
                  setError={setError}
                  setMessage={setMessage}
                />

                <TextField
                  label="Mobile Number"
                  name="mobile"
                  placeholder="10-digit mobile number"
                  icon={Phone}
                  type="tel"
                  autoComplete="tel-national"
                  maxLength={10}
                  inputMode="numeric"
                  form={form}
                  setForm={setForm}
                  setError={setError}
                  setMessage={setMessage}
                />

                <SelectField
                  label="Gender"
                  name="gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                    { value: "prefer-not-to-say", label: "Prefer not to say" },
                  ]}
                  form={form}
                  updateField={updateField}
                />

                <TextField
                  label="Date of Birth"
                  name="dob"
                  icon={CalendarDays}
                  type="date"
                  form={form}
                  setForm={setForm}
                  setError={setError}
                  setMessage={setMessage}
                />

                {form.accountType === "student" && (
                  <>
                    <SectionTitle>Student Information</SectionTitle>

                    <SelectField
                      label="Current Class"
                      name="studentClass"
                      options={[
                        ...Array.from({ length: 12 }, (_, index) => ({
                          value: `class-${index + 1}`,
                          label: `Class ${index + 1}`,
                        })),
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <SelectField
                      label="Board"
                      name="board"
                      options={[
                        { value: "cbse", label: "CBSE" },
                        { value: "icse", label: "ICSE" },
                        { value: "state", label: "State Board" },
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <TextField
                      label="School Name"
                      name="schoolName"
                      placeholder="Enter school name"
                      icon={School}
                    />

                    <TextField
                      label="Subjects Required"
                      name="studentSubjects"
                      placeholder="e.g. Maths, Science, English"
                      icon={BookOpen}
                    />

                    <SelectField
                      label="Preferred Tuition Mode"
                      name="tuitionMode"
                      options={[
                        { value: "home", label: "Home Tuition" },
                        { value: "online", label: "Online Tuition" },
                        { value: "both", label: "Both" },
                      ]}
                    />

                    <TextField
                      label="Student Mobile (if available)"
                      name="studentMobile"
                      placeholder="Student's 10-digit number"
                      icon={Phone}
                      type="tel"
                      required={false}
                      maxLength={10}
                      inputMode="numeric"
                    />

                    <SectionTitle>Parent / Guardian Contact</SectionTitle>

                    <TextField
                      label="Parent / Guardian Name"
                      name="guardianName"
                      placeholder="Parent or guardian full name"
                      icon={UsersRound}
                    />

                    <SelectField
                      label="Relationship with Student"
                      name="relationship"
                      options={[
                        { value: "father", label: "Father" },
                        { value: "mother", label: "Mother" },
                        { value: "guardian", label: "Guardian" },
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <TextField
                      label="Parent / Guardian Mobile"
                      name="guardianMobile"
                      placeholder="10-digit contact number"
                      icon={Phone}
                      type="tel"
                      maxLength={10}
                      inputMode="numeric"
                    />
                  </>
                )}

                {form.accountType === "parent" && (
                  <>
                    <SectionTitle>Child / Student Information</SectionTitle>

                    <TextField
                      label="Child's Full Name"
                      name="childName"
                      placeholder="Enter child's full name"
                      icon={GraduationCap}
                    />

                    <TextField
                      label="Child's Date of Birth"
                      name="childDob"
                      icon={CalendarDays}
                      type="date"
                    />

                    <SelectField
                      label="Child's Gender"
                      name="childGender"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <SelectField
                      label="Child's Current Class"
                      name="childClass"
                      options={[
                        ...Array.from({ length: 12 }, (_, index) => ({
                          value: `class-${index + 1}`,
                          label: `Class ${index + 1}`,
                        })),
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <SelectField
                      label="Child's Board"
                      name="childBoard"
                      options={[
                        { value: "cbse", label: "CBSE" },
                        { value: "icse", label: "ICSE" },
                        { value: "state", label: "State Board" },
                        { value: "other", label: "Other" },
                      ]}
                    />

                    <TextField
                      label="School Name"
                      name="childSchool"
                      placeholder="Enter child's school name"
                      icon={School}
                    />

                    <TextField
                      label="Subjects Required"
                      name="childSubjects"
                      placeholder="e.g. Maths, Science, English"
                      icon={BookOpen}
                    />

                    <TextField
                      label="Occupation"
                      name="parentOccupation"
                      placeholder="Your occupation"
                      icon={BriefcaseBusiness}
                      required={false}
                    />

                    <TextField
                      label="Alternate Mobile (optional)"
                      name="alternateMobile"
                      placeholder="Alternate contact number"
                      icon={Phone}
                      type="tel"
                      required={false}
                      maxLength={10}
                      inputMode="numeric"
                    />
                  </>
                )}

                {form.accountType === "teacher" && (
                  <>
                    <SectionTitle>Professional Information</SectionTitle>

                    <TextField
                      label="Highest Qualification"
                      name="qualification"
                      placeholder="e.g. B.Sc., M.Sc., B.Ed."
                      icon={GraduationCap}
                    />

                    <TextField
                      label="Specialization"
                      name="specialization"
                      placeholder="e.g. Mathematics"
                      icon={BookOpen}
                    />

                    <SelectField
                      label="Teaching Experience"
                      name="experience"
                      options={[
                        { value: "fresher", label: "Fresher" },
                        { value: "1-2", label: "1–2 years" },
                        { value: "3-5", label: "3–5 years" },
                        { value: "6-10", label: "6–10 years" },
                        { value: "10+", label: "10+ years" },
                      ]}
                    />

                    <TextField
                      label="Classes You Can Teach"
                      name="teachingClasses"
                      placeholder="e.g. Classes 6–10"
                      icon={School}
                    />

                    <TextField
                      label="Subjects You Can Teach"
                      name="teachingSubjects"
                      placeholder="e.g. Maths, Physics"
                      icon={BookOpen}
                    />

                    <SelectField
                      label="Teaching Mode"
                      name="teachingMode"
                      options={[
                        { value: "home", label: "Home Tuition" },
                        { value: "online", label: "Online Teaching" },
                        { value: "both", label: "Both" },
                      ]}
                    />

                    <TextField
                      label="Expected Monthly Fee (₹)"
                      name="expectedFee"
                      placeholder="Enter expected fee"
                      icon={BookOpen}
                      type="number"
                      required={false}
                    />

                    <TextField
                      label="Available Days"
                      name="availableDays"
                      placeholder="e.g. Monday to Saturday"
                      required={false}
                    />

                    <TextField
                      label="Available Time"
                      name="availableTime"
                      placeholder="e.g. 4 PM to 8 PM"
                      required={false}
                    />
                  </>
                )}

                <SectionTitle>Address Details</SectionTitle>

                <TextAreaField
                  label="Full Address"
                  name="address"
                  placeholder="House number, street, locality"
                />

                <TextField
                  label="City"
                  name="city"
                  placeholder="Enter your city"
                  icon={MapPin}
                />

                <TextField
                  label="State"
                  name="state"
                  placeholder="Enter your state"
                />

                <TextField
                  label="PIN Code"
                  name="pincode"
                  placeholder="6-digit PIN code"
                  maxLength={6}
                  inputMode="numeric"
                />

                <SectionTitle>Secure Your Account</SectionTitle>

                <PasswordField />
                <PasswordField confirm />
              </div>

              <label className="register-consent">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={updateField}
                  required
                />
                <span>
                  I agree to the <Link href="/terms">Terms &amp; Conditions</Link>{" "}
                  and <Link href="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>

              {error && (
                <p className="register-message register-error" role="alert">
                  {error}
                </p>
              )}

              {message && (
                <p className="register-message register-success" role="status">
                  {message}
                </p>
              )}

              <button type="submit" className="register-submit">
                Create {form.accountType === "teacher" ? "Teacher" : form.accountType === "parent" ? "Parent" : "Student"} Account
              </button>
            </form>

            <p className="register-login-prompt">
              Already have an account? <Link href="/login">Login</Link>
            </p>

            <p className="register-demo-note">
              Registration is currently a frontend demo. Your information is
              not sent to or saved on a server.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
