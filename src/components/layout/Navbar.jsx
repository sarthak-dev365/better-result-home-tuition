
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import "@/styles/layout/navbar.css";

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Home Tuition", href: "/home-tuition" },
  { label: "Online Tuition", href: "/online-tuition" },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Find a Tutor", href: "/find-a-tutor" },
  { label: "Become a Teacher", href: "/become-a-teacher" },
  { label: "Vacancy", href: "/vacancy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          href="/"
          className="navbar-brand"
          aria-label="Better Result Home Tuition Home"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Better Result Home Tuition"
            width={200}
            height={80}
            priority
            className="navbar-logo"
            sizes="(max-width: 480px) 155px, (max-width: 1100px) 180px, 200px"
          />
        </Link>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
        >
          {menuOpen ? (
            <X size={25} strokeWidth={2} />
          ) : (
            <Menu size={25} strokeWidth={2} />
          )}
        </button>

        <div
          id="navbar-navigation"
          className={`navbar-navigation ${menuOpen ? "is-open" : ""}`}
        >
          <div className="navbar-links">
            {navigationLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={`nav-dropdown ${
                servicesOpen ? "dropdown-active" : ""
              }`}
            >
              <button
                type="button"
                className="nav-link dropdown-trigger"
                onClick={toggleServices}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Our Services</span>

                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="dropdown-arrow"
                />
              </button>

              <div className="dropdown-menu">
                <div className="dropdown-heading">
                  <span>OUR SERVICES</span>
                  <span className="dropdown-heading-line" />
                </div>

                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    <span>{service.label}</span>

                    <ArrowUpRight
                      size={15}
                      className="dropdown-item-icon"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {navigationLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <Link
              href="/#login"
              className="login-link"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              href="/#register"
              className="register-link"
              onClick={closeMenu}
            >
              Register

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="register-icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
