
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "@/styles/home/hero-slider.css";

const heroSlides = [
  {
    id: "home-tuition",
    image: "/images/banners/01-banner-home-tuition.png",
    alt: "Personalized Home Tuition for Better Results",
  },
  {
    id: "online-tuition",
    image: "/images/banners/02-banner-online-tuition.png",
    alt: "Expert Online Tuition for Classes 1 to 12",
  },
  {
    id: "jee-neet",
    image: "/images/banners/03-banner-jee-neet.png",
    alt: "Focused JEE and NEET Preparation",
  },
  {
    id: "classes-1-12",
    image: "/images/banners/04-banner-classes-1-12.png",
    alt: "Tuition Support for Classes 1 to 12",
  },
  {
    id: "experienced-tutors",
    image: "/images/banners/05-banner-experienced-tutors.png",
    alt: "Learn with Experienced and Verified Home Tutors",
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const totalSlides = heroSlides.length;

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Automatic banner movement
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalSlides]);

  // Mobile swipe support
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Better Result Home Tuition banner slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BANNER SLIDES */}
      <div
        className="hero-carousel-track"
        style={{ "transform": `translateX(-${activeIndex * 20}%)` }} 
      >
        {heroSlides.map((slide, index) => (
          <div
            className="hero-carousel-slide"
            key={slide.id}
            aria-hidden={activeIndex !== index}
            inert={activeIndex !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className="hero-carousel-image"
            />
          </div>
        ))}
      </div>

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        className="hero-carousel-arrow hero-carousel-previous"
        onClick={showPrevious}
        aria-label="Previous banner"
      >
        <ChevronLeft size={27} strokeWidth={2.2} />
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        className="hero-carousel-arrow hero-carousel-next"
        onClick={showNext}
        aria-label="Next banner"
      >
        <ChevronRight size={27} strokeWidth={2.2} />
      </button>

      {/* PAGINATION DOTS */}
      <div className="hero-carousel-dots" aria-label="Select a banner">
        {heroSlides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={`hero-carousel-dot ${
              activeIndex === index ? "is-active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to banner ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
