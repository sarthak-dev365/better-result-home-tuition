
import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "@/styles/layout/footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Find a Tutor", href: "/find-a-tutor" },
  { label: "Become a Teacher", href: "/become-a-teacher" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Home Tuition", href: "/services" },
  { label: "Online Tuition", href: "/services" },
  { label: "One-to-One Tuition", href: "/services" },
  { label: "Group Tuition", href: "/services" },
  { label: "Board Exam Preparation", href: "/services" },
  { label: "JEE & NEET Preparation", href: "/services" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const contactDetails = [
  {
    icon: Phone,
    text: "+91 70373 74833",
    href: "tel:+917037374833",
    label: "Call us",
  },
  {
    icon: Mail,
    text: "betterresulthometuition@gmail.com",
    href: "mailto:betterresulthometuition@gmail.com",
    label: "Email us",
  },
  {
    icon: MapPin,
    text: "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand",
    href: null,
    label: "Our location",
  },
];

/* =========================================
   SOCIAL MEDIA LINKS
   Replace placeholder URLs with real profiles
========================================= */

const socialLinks = [
  {
    name: "Instagram",
    className: "instagram",
    href: null,
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
  },
  {
    name: "Facebook",
    className: "facebook",
    href: null,
    path: "M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8h3.7Z",
  },
  {
    name: "YouTube",
    className: "youtube",
    href: null,
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z",
  },
  {
    name: "LinkedIn",
    className: "linkedin",
    href: null,
    path: "M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-6.5c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.4V9Z",
  },
  {
    name: "X",
    className: "x",
    href: null,
    path: "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.5L5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z",
  },
];

const WHATSAPP_URL =
  "https://wa.me/917037374833?text=" +
  encodeURIComponent(
    "Hello Better Result Home Tuition Team!\n\nI would like to know more about your home tuition and online tuition services. Please guide me with the available options.\n\nThank you."
  );

const GITHUB_URL = "https://github.com/sarthak-dev365";

/* =========================================
   FOOTER LINKS COMPONENT
========================================= */

function FooterLinks({ title, links, label }) {
  return (
    <nav className="footer-links" aria-label={label}>
      <h3>{title}</h3>

      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* =========================================
   CONTACT ITEM COMPONENT
========================================= */

function ContactItem({ icon: Icon, text, href, label }) {
  const content = (
    <>
      <Icon size={18} aria-hidden="true" />
      <span>{text}</span>
    </>
  );

  if (!href) {
    return (
      <div className="footer-contact-item">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="footer-contact-item"
      aria-label={label}
    >
      {content}
    </a>
  );
}

/* =========================================
   SOCIAL ICON COMPONENT
========================================= */

function SocialIcon({ path }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}

/* =========================================
   MAIN FOOTER COMPONENT
========================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* MAIN FOOTER */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-about">

            <Link
              href="/"
              className="footer-logo"
              aria-label="Better Result Home Tuition Home"
            >
              <Image
                src="/logo.png"
                alt="Better Result Home Tuition"
                width={190}
                height={75}
                className="footer-logo-image"
              />
            </Link>

            <p className="footer-about-description">
              Learn Better. Perform Better. Achieve More.
              We are here to help students find the right
              learning support through home and online tuition.
            </p>

            {/* WHATSAPP */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
              aria-label="Chat with our team on WhatsApp"
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>Chat with Our Team</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <p className="footer-whatsapp-note">
              Have a question? We&apos;re just a message away.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="footer-social-section">
              <h3>Follow Us</h3>

              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-icon footer-social-${social.className}`}
                    title={`Visit us on ${social.name}`}
                    aria-label={`Visit our ${social.name} profile`}
                  >
                    <SocialIcon path={social.path} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* QUICK LINKS */}

          <FooterLinks
            title="Quick Links"
            label="Quick navigation"
            links={quickLinks}
          />

          {/* OUR SERVICES */}

          <FooterLinks
            title="Our Services"
            label="Our services"
            links={serviceLinks}
          />

          {/* OUR POLICIES */}

          <FooterLinks
            title="Our Policies"
            label="Our policies"
            links={policyLinks}
          />

          {/* CONTACT INFORMATION */}

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <div className="footer-contact-list">
              {contactDetails.map((contact) => (
                <ContactItem
                  key={contact.label}
                  {...contact}
                />
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT AND DEVELOPER CREDIT */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Better Result Home Tuition.
            All Rights Reserved.
          </p>

          <span className="footer-bottom-separator">|</span>

          <span className="footer-developed-text">
            Designed &amp; Developed by
          </span>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="br-footer-developer-link"
            aria-label="Visit Sarthak Raj on GitHub"
            title="Visit developer on GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.6 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
            </svg>

            <span>Sarthak Raj</span>

            <ArrowUpRight size={13} aria-hidden="true" />
          </a>

        </div>

      </div>
    </footer>
  );
}
