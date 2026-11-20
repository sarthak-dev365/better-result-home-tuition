
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import "@/styles/layout/navbar.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Find a Tutor", href: "/find-a-tutor" },
  { label: "Become a Teacher", href: "/become-a-teacher" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;

    if (menuOpen && window.innerWidth <= 1100) {
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">

        {/* LOGO */}

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

        {/* MOBILE MENU BUTTON */}

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

        {/* NAVIGATION */}

        <div
          id="navbar-navigation"
          className={`navbar-navigation ${menuOpen ? "is-open" : ""}`}
        >
          <div className="navbar-links">

            {navigationLinks.map((link) => (
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

          {/* FREE DEMO BUTTON */}

          <div className="navbar-actions">
            <Link
              href="/free-demo"
              className="demo-link"
              onClick={closeMenu}
            >
              <span>Book a Free Demo</span>
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
8