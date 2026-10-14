"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/layout/navbar.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Find a Tutor", href: "/find-a-tutor" },
  { label: "Classes", href: "/classes" },
  { label: "Online Tuition", href: "/online-tuition" },
  { label: "Become a Tutor", href: "/become-a-teacher" },
  { label: "About Us", href: "/about" },
];

function ArrowIcon() {
  return (
    <svg
      className="br-button-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((previous) => !previous);
  }

  function isActive(href) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") closeMenu();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="br-header">
      <nav className="br-navbar" aria-label="Main navigation">
        <Link
          href="/"
          className="br-brand"
          aria-label="Better Result Home Tuition home"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Better Result Home Tuition"
            width={1155}
            height={332}
            priority
            sizes="(max-width: 480px) 205px, (max-width: 1100px) 250px, 290px"
            className="br-brand-logo"
          />
        </Link>

        <div className="br-desktop-links">
          {links.map(({ label, href }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className={`br-nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="br-desktop-actions">
          <Link href="/login" className="br-login-link">
            Log in
          </Link>

          <Link href="/register" className="br-register-link">
            <span>Get Started</span>
            <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          className={`br-menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="br-mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="br-mobile-navigation"
          className={`br-mobile-panel ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <div className="br-mobile-links">
            {links.map(({ label, href }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`br-mobile-link ${active ? "is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span>{label}</span>
                  <span className="br-mobile-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="br-mobile-actions">
            <Link
              href="/login"
              className="br-mobile-login"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="br-mobile-register"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>Get Started</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
