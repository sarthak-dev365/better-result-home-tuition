import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import "@/styles/layout/footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Find a Tutor", href: "/find-a-tutor" },
  { label: "Become a Teacher", href: "/become-a-teacher" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Home Tuition", href: "/home-tuition" },
  { label: "Online Tuition", href: "/online-tuition" },
  { label: "Classes 1–12", href: "/classes" },
  { label: "Subjects", href: "/subjects" },
  { label: "JEE Preparation", href: "/classes" },
  { label: "NEET Preparation", href: "/classes" },
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
];

const GITHUB_URL = "https://github.com/sarthak-dev365";
const WHATSAPP_URL = "https://wa.me/917037374833";

function FooterLinks({ title, links }) {
  return (
    <div className="footer-links">
      <h3>{title}</h3>

      <ul>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* About Section */}
          <div className="footer-about">
            <Link
              href="/"
              className="footer-logo"
              aria-label="Better Result Home Tuition - Home"
            >
              <Image
                src="/logo.png"
                alt="Better Result Home Tuition"
                width={190}
                height={75}
                className="footer-logo-image"
                priority={false}
              />
            </Link>

            <p>
              Learn Better. Perform Better. Achieve More.
              We aim to support students with personalised
              home and online tuition options.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
              aria-label="Connect with us on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Connect on WhatsApp</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={quickLinks}
          />

          {/* Services */}
          <FooterLinks
            title="Our Services"
            links={serviceLinks}
          />

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Information</h3>

            {contactDetails.map((contact) => (
              <ContactItem
                key={contact.href}
                {...contact}
              />
            ))}

            <ContactItem
              icon={MapPin}
              text="Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand"
            />
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © {currentYear} Better Result Home Tuition.
            All rights reserved.

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
              <SiGithub size={16} color="currentColor" />
              <span>Sarthak Raj</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </p>

          {/* Legal Links */}
          <nav
            className="footer-legal-links"
            aria-label="Legal information"
          >
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>

            <Link href="/refund-policy">
              Refund Policy
            </Link>
          </nav>

        </div>

      </div>
    </footer>
  );
}