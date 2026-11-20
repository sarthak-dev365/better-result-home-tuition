
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  BookOpen,
  GraduationCap,
  House,
  Monitor,
  Users,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Pause,
  Play,
  Square,
  Headphones,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Globe2,
  Languages,
  MessageCircle,
} from "lucide-react";

import "@/styles/pages/about.css";

const learningFeatures = [
  "Home and online tuition options",
  "Learning support for Classes 1–12",
  "CBSE, ICSE, ISC and State Boards",
  "Enquiries for JEE and NEET preparation",
  "Individual learning requirements",
  "Communication with parents",
];

const approachCards = [
  {
    icon: BookOpen,
    number: "01",
    title: "Understand Learning Needs",
    description:
      "We begin by understanding the student's class, subjects, learning goals and tuition preferences.",
  },
  {
    icon: Users,
    number: "02",
    title: "Explore Suitable Tutors",
    description:
      "We review the requirements and discuss suitable tutor options based on availability.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Support the Learning Journey",
    description:
      "Our aim is to support students through personalised guidance and a suitable learning schedule.",
  },
];

const commitmentCards = [
  {
    icon: HeartHandshake,
    title: "Student-focused Support",
    description:
      "We give importance to each student's individual learning needs and preferences.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We value communication with parents and students throughout the enquiry process.",
  },
  {
    icon: ShieldCheck,
    title: "Thoughtful Tutor Matching",
    description:
      "We discuss suitable tutor options according to requirements and availability.",
  },
  {
    icon: Lightbulb,
    title: "A Positive Learning Environment",
    description:
      "We aim to encourage curiosity, confidence and a positive approach towards learning.",
  },
];

const heroNarration = {
  en: `Welcome to Better Result Home Tuition. Learn Better. Perform Better. Achieve More. We aim to connect students and parents with suitable home and online tuition options. Explore our learning support for school classes, different subjects and competitive examination preparation. Let us help you take the next step in your learning journey.`,
  hi: `बेटर रिजल्ट होम ट्यूशन में आपका स्वागत है। हमारा उद्देश्य है, बेहतर सीखें, बेहतर प्रदर्शन करें और बेहतर उपलब्धियाँ हासिल करें। हम विद्यार्थियों और अभिभावकों को उनकी जरूरतों के अनुसार होम ट्यूशन और ऑनलाइन ट्यूशन के विकल्प तलाशने में मदद करते हैं। स्कूल की कक्षाओं से लेकर अलग-अलग विषयों और प्रतियोगी परीक्षाओं की तैयारी तक, हम आपकी सीखने की यात्रा में सहयोग देने का प्रयास करते हैं।`,
};

export default function AboutPage() {
  const [voiceLanguage, setVoiceLanguage] = useState("en");
  const [voiceStatus, setVoiceStatus] = useState("idle");

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const handleVoicesChanged = () => {
      window.speechSynthesis.getVoices();
    };

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged
    );

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged
      );
    };
  }, []);

  const stopVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setVoiceStatus("idle");
  };

  const playVoice = () => {
    if (!("speechSynthesis" in window)) {
      alert(
        "Your browser does not support voice narration. Please try another browser."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      heroNarration[voiceLanguage]
    );

    utterance.lang = voiceLanguage === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const preferredVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(voiceLanguage)
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setVoiceStatus("playing");
    utterance.onend = () => setVoiceStatus("idle");
    utterance.onerror = () => setVoiceStatus("idle");

    window.speechSynthesis.speak(utterance);
  };

  const pauseVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
      setVoiceStatus("paused");
    }
  };

  const resumeVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.resume();
      setVoiceStatus("playing");
    }
  };

  const changeLanguage = (language) => {
    stopVoice();
    setVoiceLanguage(language);
  };

  return (
    <main className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-bg-shape about-hero-bg-one" />
        <div className="about-hero-bg-shape about-hero-bg-two" />

        <div className="about-container about-hero-grid">
          <div className="about-hero-content about-animate-up">
            <span className="about-eyebrow">
              <Sparkles size={15} />
              ABOUT BETTER RESULT HOME TUITION
            </span>

            <h1>
              Every Student Deserves
              <span> The Right Learning Support.</span>
            </h1>

            <p className="about-hero-tagline">
              Learn Better. Perform Better. Achieve More.
            </p>

            <p className="about-hero-description">
              We aim to make home and online tuition more accessible
              through suitable learning support, personalised guidance
              and thoughtful tutor matching.
            </p>

            <div className="about-hero-actions">
              <Link href="/free-demo" className="about-btn about-btn-primary">
                Request a Free Demo
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="about-btn about-btn-outline"
              >
                Explore Services
              </Link>
            </div>

            <div className="about-hero-note">
              <CheckCircle2 size={17} />
              <span>Learning support shaped around individual needs</span>
            </div>
          </div>

          <div className="about-hero-visual about-animate-float">
            <div className="about-hero-image-wrap">
              <Image
                src="/images/about/about-hero.jpg"
                alt="Student studying with books at a desk"
                className="about-hero-image"
                width={1200}
                height={900}
                priority
              />

              <div className="about-image-shine" />
            </div>

            <div className="about-floating-card about-floating-card-top">
              <span className="about-floating-icon">
                <GraduationCap size={24} />
              </span>
              <span>
                <strong>Better Learning</strong>
                <small>One step at a time</small>
              </span>
            </div>

            <div className="about-floating-card about-floating-card-bottom">
              <span className="about-floating-icon gold">
                <BookOpen size={22} />
              </span>
              <span>
                <strong>Personalised Guidance</strong>
                <small>Focused on student needs</small>
              </span>
            </div>

            <div className="about-hero-orbit orbit-one" />
            <div className="about-hero-orbit orbit-two" />
          </div>
        </div>

        <div className="about-hero-bottom">
          <span>LEARNING</span>
          <span className="about-hero-bottom-line" />
          <span>GROWTH</span>
          <span className="about-hero-bottom-line" />
          <span>CONFIDENCE</span>
        </div>
      </section>

      {/* VOICE INTRODUCTION */}
      <section className="about-voice-section">
        <div className="about-container">
          <div className="about-voice-card">
            <div className="about-voice-icon">
              <Headphones size={29} />
            </div>

            <div className="about-voice-content">
              <span className="about-mini-label">LISTEN TO OUR STORY</span>
              <h2>Discover Better Result Home Tuition</h2>
              <p>
                Prefer listening? Choose your language and let us
                introduce our learning approach.
              </p>
            </div>

            <div className="about-voice-controls">
              <div className="about-language-select">
                <Languages size={17} />
                <select
                  value={voiceLanguage}
                  onChange={(event) => changeLanguage(event.target.value)}
                  aria-label="Select narration language"
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>

              <div className="about-audio-buttons">
                {voiceStatus === "playing" ? (
                  <button
                    type="button"
                    className="about-audio-btn"
                    onClick={pauseVoice}
                    aria-label="Pause narration"
                  >
                    <Pause size={19} />
                    <span>Pause</span>
                  </button>
                ) : voiceStatus === "paused" ? (
                  <button
                    type="button"
                    className="about-audio-btn"
                    onClick={resumeVoice}
                    aria-label="Resume narration"
                  >
                    <Play size={19} />
                    <span>Resume</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="about-audio-btn"
                    onClick={playVoice}
                    aria-label="Play narration"
                  >
                    <Play size={19} />
                    <span>Listen</span>
                  </button>
                )}

                <button
                  type="button"
                  className="about-audio-stop"
                  onClick={stopVoice}
                  aria-label="Stop narration"
                  disabled={voiceStatus === "idle"}
                >
                  <Square size={16} />
                  <span>Stop</span>
                </button>
              </div>

              <span className="about-voice-status" aria-live="polite">
                {voiceStatus === "playing"
                  ? "Narration is playing"
                  : voiceStatus === "paused"
                    ? "Narration paused"
                    : "Ready to play"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story-section">
        <div className="about-container about-story-grid">
          <div className="about-story-visual about-reveal">
            <div className="about-story-image-frame">
              <Image
                src="/images/about/about-story.jpg"
                alt="Tutor helping a student with studies"
                className="about-story-image"
                width={1200}
                height={900}
              />
            </div>

            <div className="about-story-sticker">
              <span className="about-sticker-icon">
                <HeartHandshake size={26} />
              </span>
              <span>
                <strong>Learning Together</strong>
                <small>Growing with guidance</small>
              </span>
            </div>

            <div className="about-story-decoration" />
          </div>

          <div className="about-story-content about-reveal">
            <span className="about-section-label">WHO WE ARE</span>

            <h2>
              A Learning Partner
              <span> For Every Step Ahead.</span>
            </h2>

            <p>
              Better Result Home Tuition is a home and online tuition
              service based in Dehradun, Uttarakhand. We aim to connect
              students and parents with suitable tuition options according
              to their academic requirements.
            </p>

            <p>
              From school-level learning to enquiries for competitive
              examination preparation, our focus is on understanding
              individual requirements and helping students find suitable
              academic guidance.
            </p>

            <p>
              We believe that every student&apos;s learning journey deserves
              attention, encouragement and the right support.
            </p>

            <div className="about-story-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Student-focused approach</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Flexible learning options</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Individual learning requirements</span>
              </div>
            </div>

            <Link href="/contact" className="about-text-link">
              Connect With Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose-section">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">OUR PURPOSE</span>
            <h2>
              What We <span>Believe In</span>
            </h2>
            <p>
              Our purpose is guided by a simple belief: the right support
              can make the learning journey more meaningful.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card about-mission-card about-reveal">
              <div className="about-purpose-card-top">
                <div className="about-purpose-icon">
                  <Target size={30} />
                </div>
                <span className="about-card-index">01</span>
              </div>

              <span className="about-card-kicker">OUR MISSION</span>
              <h3>Making Learning Support Accessible</h3>
              <p>
                To help students access suitable tuition support,
                personalised academic guidance and flexible learning
                opportunities according to their needs.
              </p>
              <div className="about-purpose-watermark">
                <Target size={110} />
              </div>
            </article>

            <article className="about-purpose-card about-vision-card about-reveal">
              <div className="about-purpose-card-top">
                <div className="about-purpose-icon">
                  <Eye size={30} />
                </div>
                <span className="about-card-index">02</span>
              </div>

              <span className="about-card-kicker">OUR VISION</span>
              <h3>Encouraging Confident Learners</h3>
              <p>
                To build a supportive learning environment where students
                can develop their understanding, confidence and interest
                in education.
              </p>
              <div className="about-purpose-watermark">
                <Eye size={110} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why-section">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">THE BETTER RESULT APPROACH</span>
            <h2>
              Learning Support With
              <span> The Student In Mind</span>
            </h2>
            <p>
              We focus on understanding what each student needs before
              discussing suitable tuition arrangements.
            </p>
          </div>

          <div className="about-why-grid">
            <article className="about-why-card about-reveal">
              <div className="about-why-icon">
                <Users size={27} />
              </div>
              <h3>Individual Attention</h3>
              <p>
                We consider each student&apos;s class, subjects, learning
                goals and preferences.
              </p>
            </article>

            <article className="about-why-card about-reveal">
              <div className="about-why-icon">
                <House size={27} />
              </div>
              <h3>Flexible Learning Options</h3>
              <p>
                Explore home tuition and online tuition according to
                your requirements.
              </p>
            </article>

            <article className="about-why-card about-reveal">
              <div className="about-why-icon">
                <GraduationCap size={27} />
              </div>
              <h3>Academic Support</h3>
              <p>
                Enquire about school classes, subjects and competitive
                examination preparation.
              </p>
            </article>

            <article className="about-why-card about-reveal">
              <div className="about-why-icon">
                <MessageCircle size={27} />
              </div>
              <h3>Parent Communication</h3>
              <p>
                We value clear communication while understanding and
                reviewing tuition enquiries.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LEARNING OPTIONS */}
      <section className="about-learning-section">
        <div className="about-container about-learning-grid">
          <div className="about-learning-content about-reveal">
            <span className="about-section-label">LEARNING OPPORTUNITIES</span>

            <h2>
              Different Paths.
              <span> One Learning Goal.</span>
            </h2>

            <p>
              Students and parents can enquire about different tuition
              options based on their class, subjects and learning
              preferences. Availability is discussed according to
              individual requirements and tutor availability.
            </p>

            <ul className="about-learning-list">
              {learningFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={19} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/services" className="about-btn about-btn-primary">
              Explore All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-learning-visual">
            <article className="about-learning-option about-reveal">
              <div className="about-option-image">
                <Image
                  src="/images/about/about-home-tuition.jpg"
                  alt="Home tutor teaching a student"
                  width={640}
                  height={420}
                />
                <span className="about-option-icon">
                  <House size={23} />
                </span>
              </div>
              <div className="about-option-content">
                <span className="about-option-kicker">LEARN AT HOME</span>
                <h3>Home Tuition</h3>
                <p>
                  Explore tuition arrangements at home according to
                  location and tutor availability.
                </p>
                <Link href="/services">
                  Discover Home Tuition <ArrowRight size={16} />
                </Link>
              </div>
            </article>

            <article className="about-learning-option about-reveal">
              <div className="about-option-image">
                <Image
                  src="/images/about/about-online-tuition.jpg"
                  alt="Student attending an online tuition lesson"
                  width={640}
                  height={420}
                />
                <span className="about-option-icon">
                  <Monitor size={23} />
                </span>
              </div>
              <div className="about-option-content">
                <span className="about-option-kicker">LEARN ONLINE</span>
                <h3>Online Tuition</h3>
                <p>
                  Explore online learning options with suitable tutors
                  and flexible scheduling.
                </p>
                <Link href="/services">
                  Discover Online Tuition <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach-section">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">HOW WE WORK</span>
            <h2>
              A Simple Approach to
              <span> Learning Support</span>
            </h2>
            <p>
              We focus on understanding requirements before discussing
              suitable tuition arrangements.
            </p>
          </div>

          <div className="about-approach-grid">
            {approachCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  className="about-approach-card about-reveal"
                  key={card.number}
                >
                  <div className="about-approach-top">
                    <span className="about-approach-number">
                      {card.number}
                    </span>
                    <div className="about-approach-icon">
                      <Icon size={27} />
                    </div>
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="about-approach-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY IMAGE */}
      <section className="about-journey-section">
        <div className="about-container">
          <div className="about-journey-image-wrap about-reveal">
            <Image
              src="/images/about/about-learning.jpg"
              alt="Books and graduation cap representing a learning journey"
              className="about-journey-image"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="about-journey-overlay">
              <span className="about-section-label">
                YOUR LEARNING JOURNEY
              </span>
              <h2>
                Every Step Forward
                <span> Begins With Learning.</span>
              </h2>
              <p>
                Explore the learning support that fits your academic
                requirements and goals.
              </p>
              <Link href="/free-demo" className="about-btn about-btn-light">
                Start With a Free Demo <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="about-commitment-section">
        <div className="about-container">
          <div className="about-section-heading about-reveal">
            <span className="about-section-label">OUR COMMITMENT</span>
            <h2>
              Support That Puts
              <span> Learning First</span>
            </h2>
            <p>
              We aim to create a thoughtful and supportive experience
              for students and parents.
            </p>
          </div>

          <div className="about-commitment-grid">
            {commitmentCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  className="about-commitment-card about-reveal"
                  key={card.title}
                >
                  <span className="about-commitment-number">
                    0{index + 1}
                  </span>
                  <div className="about-commitment-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta-section">
        <div className="about-cta-decoration about-cta-decoration-one" />
        <div className="about-cta-decoration about-cta-decoration-two" />

        <div className="about-container about-cta-content about-reveal">
          <span className="about-cta-kicker">
            <Globe2 size={16} /> LET&apos;S BEGIN TOGETHER
          </span>

          <h2>
            Looking for the
            <span> Right Tuition Support?</span>
          </h2>

          <p>
            Tell us about your learning requirements. Our team will
            review your enquiry and help you explore suitable options.
          </p>

          <div className="about-cta-actions">
            <Link href="/free-demo" className="about-btn about-btn-gold">
              Request a Free Demo <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="about-btn about-btn-white">
              Contact Our Team
            </Link>
          </div>

          <div className="about-cta-tagline">
            Learn Better. Perform Better. Achieve More.
          </div>
        </div>
      </section>
    </main>
  );
}
