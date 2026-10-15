
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

const PHONE = "+917037374833";
const EMAIL = "betterresulthometuition@gmail.com";
const GITHUB_URL = "https://github.com/sarthak-dev365";

// WhatsApp enquiry message
const WHATSAPP_MESSAGE = `Hello Better Result Home Tuition Team! 

I visited your website and would like to enquire about your tuition services.

Student Details:
• Student Name:
• Class:
• Board:
• Subject(s):
• Preferred Tuition Mode: Home Tuition / Online Tuition
• City / Area:

Please share the available tuition options, tutor details, and fee structure.

Thank you!
Better Result Home Tuition`;

const WHATSAPP = `https://wa.me/917037374833?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const ADDRESS =
  "Shivalock Colony, Chakshha Nagar, near Vidhan Sabha, Dehradun, Uttarakhand";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Cities", href: "/cities" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Register as Tutor", href: "/#tutor-registration" },
  { label: "Contact Us", href: "/#contact" },
];

const serviceLinks = [
  { label: "Home Tuition", href: "/#services" },
  { label: "Online Tuition", href: "/#services" },
  { label: "Board Exam Preparation", href: "/#services" },
  { label: "Commerce (Classes 11–12)", href: "/#services" },
  { label: "JEE / NEET Preparation", href: "/#services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="br-footer">
      <div className="br-footer-main">
        <div className="br-footer-container br-footer-grid">
          {/* Brand */}
          <div className="br-footer-brand">
            <Link
              href="/"
              className="br-footer-logo-link"
              aria-label="Better Result Home Tuition - Home"
            >
              <Image
                src="/images/logo.png"
                alt="Better Result Home Tuition"
                width={190}
                height={80}
                className="br-footer-logo"
              />
            </Link>

            <p className="br-footer-tagline">
              Learn Better. Perform Better. Achieve More.
            </p>

            <p className="br-footer-description">
              Helping students and parents find suitable tuition
              support for their learning journey.
            </p>

            <div className="br-footer-socials">
              <a
                href={`mailto:${EMAIL}`}
                className="br-social br-social-email"
                aria-label="Email us"
                title="Email us"
              >
                <Mail size={19} />
              </a>

              {/* WhatsApp social icon with pre-filled message */}
              <a
                href={WHATSAPP}
                className="br-social br-social-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire about tuition on WhatsApp"
                title="WhatsApp Enquiry"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href={MAP_URL}
                className="br-social br-social-location"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find our location"
                title="Location"
              >
                <MapPin size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="br-footer-column">
            <h3 className="br-footer-heading">Quick Links</h3>

            <ul className="br-footer-links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="br-footer-link"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="br-footer-arrow"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="br-footer-column">
            <h3 className="br-footer-heading">Our Services</h3>

            <ul className="br-footer-links">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="br-footer-link"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="br-footer-arrow"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="br-footer-column br-footer-contact">
            <h3 className="br-footer-heading">Contact Info</h3>

            <a
              className="br-contact-row"
              href={`tel:${PHONE}`}
            >
              <Phone size={18} />
              <span>+91 70373 74833</span>
            </a>

            <a
              className="br-contact-row"
              href={`mailto:${EMAIL}`}
            >
              <Mail size={18} />
              <span>{EMAIL}</span>
            </a>

            <a
              className="br-contact-row br-contact-address"
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={19} />
              <span>{ADDRESS}</span>
            </a>

            {/* WhatsApp CTA with pre-filled message */}
            <a
              className="br-footer-whatsapp"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a tuition enquiry on WhatsApp"
              title="Send a WhatsApp enquiry"
            >
              <FaWhatsapp size={19} />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright, developer credit and legal links */}
      <div className="br-footer-bottom">
        <div className="br-footer-container">
          <div className="br-footer-bottom-top">
            <p className="br-footer-copyright">
              <span>© {year}</span>
              <strong>Better Result Home Tuition.</strong>
              <span>All rights reserved.</span>

              <span className="br-footer-credit-label">
                Designed &amp; Developed by
              </span>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="br-footer-developer-link"
                aria-label="Sarthak Raj GitHub profile"
                title="Visit Sarthak Raj on GitHub"
              >
                <FaGithub size={16} aria-hidden="true" />
                <span>Sarthak Raj</span>
                <ArrowUpRight
                  size={13}
                  aria-hidden="true"
                />
              </a>
            </p>

            <nav
              className="br-footer-legal"
              aria-label="Legal policies"
            >
              {legalLinks.map((item) => (
                <Link href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="br-footer-bottom-divider" />

          <button
            type="button"
            className="br-footer-top-button"
            onClick={backToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
