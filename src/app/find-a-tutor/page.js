
"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  House,
  Laptop,
  MessageCircle,
  UserRound,
  Phone,
} from "lucide-react";
import "@/styles/pages/find-a-tutor.css";

export default function FindATutorPage() {
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [mobile, setMobile] = useState("");
  const [tuitionType, setTuitionType] = useState("");
  const [location, setLocation] = useState("");

  const classes = Array.from({ length: 12 }, (_, index) => index + 1);

  const subjects = [
    "All Subjects",
    "Mathematics",
    "Science",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Accountancy",
    "Business Studies",
    "Economics",
    "Computer Science",
    "Hindi",
    "Social Science",
    "Other",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanMobile = mobile.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hello Better Result Home Tuition Team,

I am looking for a tutor.

Student Name: ${studentName.trim()}
Class: ${studentClass}
Subject: ${subject}
Mobile Number: ${cleanMobile}
Tuition Type: ${tuitionType}
Location: ${location.trim()}

Please help me find a suitable tutor.

Thank you.`;

    const whatsappURL = `https://wa.me/917037374833?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="find-tutor-page">
      <section className="find-tutor-section">
        <div className="find-tutor-container">
          <div className="find-tutor-heading">
            <h1>
              Find Your <span>Perfect Tutor</span>
            </h1>
          </div>

          <form
            className="find-tutor-form"
            onSubmit={handleSubmit}
          >
            <div className="find-tutor-field">
              <label htmlFor="studentName">
                Student Name
              </label>

              <div className="find-tutor-input-wrap">
                <UserRound size={19} />

                <input
                  id="studentName"
                  type="text"
                  placeholder="Enter student's full name"
                  value={studentName}
                  onChange={(event) =>
                    setStudentName(event.target.value)
                  }
                  maxLength={80}
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            <div className="find-tutor-field">
              <label htmlFor="studentClass">
                Select Class
              </label>

              <select
                id="studentClass"
                value={studentClass}
                onChange={(event) =>
                  setStudentClass(event.target.value)
                }
                required
              >
                <option value="">Choose your class</option>

                {classes.map((classNumber) => (
                  <option
                    key={classNumber}
                    value={`Class ${classNumber}`}
                  >
                    Class {classNumber}
                  </option>
                ))}
              </select>
            </div>

            <div className="find-tutor-field">
              <label htmlFor="subject">
                Select Subject
              </label>

              <select
                id="subject"
                value={subject}
                onChange={(event) =>
                  setSubject(event.target.value)
                }
                required
              >
                <option value="">Choose your subject</option>

                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="find-tutor-field">
              <label htmlFor="mobile">
                Mobile Number
              </label>

              <div className="find-tutor-input-wrap">
                <Phone size={19} />

                <span className="find-tutor-country-code">
                  +91
                </span>

                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(event) =>
                    setMobile(
                      event.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  maxLength={10}
                  autoComplete="tel-national"
                  required
                />
              </div>
            </div>

            <div className="find-tutor-field">
              <label>Choose Tuition Type</label>

              <div className="find-tutor-type-options">
                <label
                  className={`find-tutor-type-card ${
                    tuitionType === "Home Tuition" ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="tuitionType"
                    value="Home Tuition"
                    checked={tuitionType === "Home Tuition"}
                    onChange={(event) =>
                      setTuitionType(event.target.value)
                    }
                    required
                  />

                  <House size={23} />
                  <span>Home Tuition</span>
                </label>

                <label
                  className={`find-tutor-type-card ${
                    tuitionType === "Online Tuition" ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="tuitionType"
                    value="Online Tuition"
                    checked={tuitionType === "Online Tuition"}
                    onChange={(event) =>
                      setTuitionType(event.target.value)
                    }
                  />

                  <Laptop size={23} />
                  <span>Online Tuition</span>
                </label>
              </div>
            </div>

            <div className="find-tutor-field">
              <label htmlFor="location">
                City / Area / PIN Code
              </label>

              <div className="find-tutor-input-wrap">
                <MapPin size={19} />

                <input
                  id="location"
                  type="text"
                  list="tutor-location-suggestions"
                  placeholder="Type or select your location"
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  maxLength={100}
                  autoComplete="address-level2"
                  required
                />

                <datalist id="tutor-location-suggestions">
                  <option value="Dehradun" />
                  <option value="Delhi" />
                  <option value="Noida" />
                  <option value="Gurugram" />
                  <option value="Mumbai" />
                  <option value="Pune" />
                  <option value="Lucknow" />
                  <option value="Patna" />
                  <option value="Deoghar" />
                  <option value="Other" />
                </datalist>
              </div>
            </div>

            <button
              type="submit"
              className="find-tutor-submit"
            >
              <MessageCircle size={20} />
              Find a Tutor on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
