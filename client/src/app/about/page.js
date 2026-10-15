
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Heart,
  Eye,
  Target,
  Volume2,
  VolumeX,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";

import "./about.css";

const story =
  "Hello friends! Welcome to Better Result Home Tuition. Do you know, every child is special in their own way? Everyone has a different way of learning. Our aim is to help students and parents explore home tuition and online tuition according to their needs. Come on, let’s make our learning journey interesting, learn new concepts, and discover something new every day. Remember friends, learn better, perform better, achieve more. Thank you, and happy learning!";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Students and parents ko unki learning requirements ke according suitable tuition options explore karne mein help karna.",
    color: "blue",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Learning options ko accessible, easy to explore aur student-friendly banane ki direction mein kaam karna.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Our Approach",
    text: "Har learner ki needs ko samajhna aur home aur online learning choices ko clearly present karna.",
    color: "purple",
  },
];

const journey = [
  {
    number: "01",
    icon: BookOpen,
    title: "Explore",
    text: "Apni class, subjects aur learning preferences ke according options explore karein.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Choose",
    text: "Home tuition ya online learning jaise available options mein se apni need select karein.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Begin Learning",
    text: "Apni learning journey ka next step confidence ke saath lein.",
  },
];

export default function AboutPage() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState("");
  const [storyProgress, setStoryProgress] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function stopStory() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
    setStoryProgress(false);
    setMessage("Story paused. You can listen again anytime.");
  }

  function playStory() {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      setMessage(
        "Voice playback is not supported in this browser. Please read the story below."
      );
      return;
    }

    if (isSpeaking) {
      stopStory();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(story);
    utterance.lang = "en-IN";
    utterance.rate = 0.88;
    utterance.pitch = 1.12;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const indianEnglishVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase() === "en-in" &&
        /female|woman|zira|heera/i.test(voice.name)
    );

    const anyIndianEnglishVoice = voices.find(
      (voice) => voice.lang.toLowerCase() === "en-in"
    );

    if (indianEnglishVoice || anyIndianEnglishVoice) {
      utterance.voice = indianEnglishVoice || anyIndianEnglishVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setStoryProgress(true);
      setMessage("Your learning buddy is speaking...");
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setStoryProgress(false);
      setMessage("Story completed. Thank you for listening!");
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      setStoryProgress(false);

      if (event.error !== "canceled" && event.error !== "interrupted") {
        setMessage("Voice could not play. Please try again.");
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  return (
    <main className="about-page">
      {/* HERO + TALKING PHOTO */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <div className="about-pill">
              <Sparkles size={16} />
              A BETTER WAY TO LEARN
            </div>

            <h1>
              Every Child Has a Story.
              <span> Every Dream Deserves a Chance.</span>
            </h1>

            <p className="about-hero-description">
              Welcome to Better Result Home Tuition — a place to
              explore learning options that fit your class, subjects
              and learning preferences.
            </p>

            <div className="about-hero-actions">
              <Link href="/find-a-tutor" className="about-btn-primary">
                Find a Tutor <ArrowRight size={18} />
              </Link>

              <Link href="/classes" className="about-btn-secondary">
                Explore Classes
              </Link>
            </div>

            <div className="about-tagline">
              <span className="about-tagline-line" />
              Learn Better. Perform Better. Achieve More.
            </div>
          </div>

          <div className="about-character-stage">
            <div className="about-glow about-glow-one" />
            <div className="about-glow about-glow-two" />

            <div
              className={`about-photo-card ${
                isSpeaking ? "about-photo-speaking" : ""
              }`}
            >
              <div className="about-photo-frame">
                <Image
                  src="/images/about-child.png"
                  alt="Student imagining a bright learning journey"
                  fill
                  priority
                  sizes="(max-width: 680px) 90vw, 500px"
                  className="about-child-photo"
                />
              </div>

              <div className="about-photo-gradient" />

              <div className="about-live-label">
                <span className={isSpeaking ? "about-live-dot active" : "about-live-dot"} />
                {isSpeaking ? "Speaking now" : "Your learning buddy"}
              </div>

              <div className="about-speech-card">
                <span className="about-speech-emoji">👋</span>
                <div>
                  <strong>
                    {isSpeaking ? "Hello, friends!" : "Hi, friends!"}
                  </strong>
                  <p>
                    {isSpeaking
                      ? "Let's learn something new together!"
                      : "Ready for a little learning story?"}
                  </p>
                </div>
                <div className="about-sound-bars" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <span
                      key={bar}
                      className={isSpeaking ? "sound-bar sound-active" : "sound-bar"}
                    />
                  ))}
                </div>
              </div>

              <div className="about-floating-icon about-floating-book">
                <BookOpen size={22} />
              </div>

              <div className="about-floating-icon about-floating-star">
                <Sparkles size={22} />
              </div>
            </div>

            <div className="about-story-control">
              <button
                type="button"
                onClick={playStory}
                className="about-listen-btn"
                aria-pressed={isSpeaking}
              >
                {isSpeaking ? <Pause size={19} /> : <Play size={19} />}
                {isSpeaking ? "Stop My Story" : "Listen to My Story"}
                {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <p className="about-voice-status" aria-live="polite">
                {message || "Tap to hear the learning buddy's story."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div>
            <span className="about-kicker">OUR STORY</span>
            <h2>
              Learning starts with
              <span> understanding every student.</span>
            </h2>
          </div>

          <div className="about-intro-text">
            <p>
              Every student has different interests, academic goals
              and learning preferences. Finding a suitable learning
              option should be a clear and comfortable process.
            </p>
            <p>
              Better Result Home Tuition helps students and parents
              explore tuition options, including home tuition and
              online learning, according to their requirements.
            </p>

            <Link href="/online-tuition" className="about-inline-link">
              Discover Online Tuition <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, APPROACH */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-kicker">WHAT MATTERS TO US</span>
            <h2>Our Mission, Vision & Values</h2>
            <p>
              A thoughtful approach to discovering learning opportunities.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className={`about-value-card value-${value.color}`}
                >
                  <div className="about-value-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <span className="about-value-decoration" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="about-journey">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-kicker">YOUR JOURNEY</span>
            <h2>Three Simple Steps to Get Started</h2>
            <p>
              Explore your options and choose the next step for your learning.
            </p>
          </div>

          <div className="about-journey-grid">
            {journey.map((step) => {
              const Icon = step.icon;

              return (
                <article className="about-journey-card" key={step.number}>
                  <div className="about-journey-top">
                    <div className="about-journey-icon">
                      <Icon size={25} />
                    </div>
                    <span>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY TRANSCRIPT */}
      <section className="about-story">
        <div className="about-container about-story-inner">
          <div className="about-story-heading">
            <div className="about-story-mini-icon">
              <Heart size={24} />
            </div>
            <span className="about-kicker">A LITTLE MESSAGE FOR YOU</span>
            <h2>
              Let&apos;s make learning
              <span> a wonderful journey.</span>
            </h2>
            <p>
              Here is the story our learning buddy shares with every visitor.
            </p>
          </div>

          <div className={`about-transcript ${storyProgress ? "transcript-active" : ""}`}>
            <div className="about-transcript-top">
              <span className="about-transcript-dot" />
              <strong>Learning Buddy Says</strong>
              <span className="about-transcript-time">
                {isSpeaking ? "Now speaking" : "Story"}
              </span>
            </div>

            <p>{story}</p>

            <button
              type="button"
              className="about-transcript-play"
              onClick={playStory}
            >
              {isSpeaking ? <Pause size={17} /> : <Play size={17} />}
              {isSpeaking ? "Stop narration" : "Play narration"}
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div>
            <span className="about-cta-kicker">YOUR NEXT CHAPTER</span>
            <h2>Ready to explore your learning options?</h2>
            <p>
              Start exploring classes and tuition options that match your needs.
            </p>
          </div>

          <Link href="/find-a-tutor" className="about-cta-button">
            Start Exploring <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
