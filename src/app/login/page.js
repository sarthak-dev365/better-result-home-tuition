"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
  Home,
} from "lucide-react";

import "./login.css";

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [forgotMode, setForgotMode] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "Login form ready. Real account authentication will be connected in the backend phase."
    );
  }

  function handleGoogleClick() {
    setMessage(
      "Google sign-in will be available after authentication setup."
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <Link
          href="/"
          className="login-logo-link"
          aria-label="Better Result Home Tuition home"
        >
          <Image
            src="/images/logo.png"
            alt="Better Result Home Tuition — Your Success, Our Mission"
            width={350}
            height={190}
            priority
            className="login-logo"
          />
        </Link>

        <header className="login-heading">
          <h1>Welcome Back!</h1>
          <p>
            Login to access your account and continue
            <span> your learning journey.</span>
          </p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="identifier">
            Mobile Number / Email
          </label>

          <div className="login-input">
            <UserRound size={20} aria-hidden="true" />

            <input
              id="identifier"
              name="identifier"
              type="text"
              autoComplete="username"
              placeholder="Enter your mobile number or email"
              value={identifier}
              onChange={(event) => {
                setIdentifier(event.target.value);
                setMessage("");
              }}
              required
            />
          </div>

          <div className="login-password-row">
            <label htmlFor="password">Password</label>

            <button
              type="button"
              className="login-forgot-link"
              onClick={() => {
                setForgotMode((current) => !current);
                setMessage("");
              }}
            >
              Forgot Password?
            </button>
          </div>

          <div className="login-input">
            <LockKeyhole size={20} aria-hidden="true" />

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setMessage("");
              }}
              required
            />

            <button
              type="button"
              className="login-eye-button"
              onClick={() =>
                setShowPassword((current) => !current)
              }
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {forgotMode && (
            <div className="login-info-panel" role="status">
              <strong>Password recovery</strong>
              <p>
                Password reset will be enabled after backend
                authentication is connected. No reset email has
                been sent.
              </p>
            </div>
          )}

          <div className="login-options">
            <label className="login-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
              />
              <span>Remember me</span>
            </label>
          </div>

          <button type="submit" className="login-submit">
            Login
            <ArrowRight size={21} />
          </button>

          {message && (
            <p className="login-status" role="status">
              {message}
            </p>
          )}
        </form>

        <div className="login-or">
          <span />
          <p>OR</p>
          <span />
        </div>

        <button
          type="button"
          className="login-google-button"
          onClick={handleGoogleClick}
        >
          <span className="login-google-mark">
            <GoogleIcon />
          </span>
          Continue with Google
        </button>

        <p className="login-register">
          Don&apos;t have an account?
          <Link href="/register">Register Now</Link>
        </p>

        <Link href="/" className="login-home-link">
          <Home size={17} aria-hidden="true" />
          <span>Main Website</span>
        </Link>

        <p className="login-legal">
          By continuing, you agree to our{" "}
          <Link href="/terms">Terms &amp; Conditions</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>
    </main>
  );
}