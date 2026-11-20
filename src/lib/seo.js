
export const SITE_URL = "https://www.betterresulthometuition.com";

export const SITE_NAME = "Better Result Home Tuition";

export const DEFAULT_OG_IMAGE =
  "/images/banners/01-banner-home-tuition.png";

export const PAGE_SEO = {
  "/": {
    title: "Home Tuition & Online Tutors for Classes 1–12",
    description:
      "Find experienced home tutors and online tutors for school students. Get personalised tuition support, qualified teachers and a free demo class with Better Result Home Tuition.",
    keywords: [
      "home tuition",
      "home tutors",
      "online tuition",
      "online tutors",
      "home tuition for students",
      "private tutors",
      "tuition for classes 1 to 12",
      "home tuition in Dehradun",
      "Better Result Home Tuition",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt:
      "Better Result Home Tuition - Home and Online Tuition Services",
  },

  "/about": {
    title: "About Us",
    description:
      "Learn about Better Result Home Tuition, our teaching approach and our commitment to helping students find suitable home tuition and online learning support.",
    keywords: [
      "about Better Result Home Tuition",
      "home tuition services",
      "online tuition services",
      "personalised learning support",
      "home tutor services",
      "tuition teachers",
    ],
    ogImage: "/images/about/about-hero.jpg",
    ogImageAlt: "About Better Result Home Tuition",
  },

  "/services": {
    title: "Home Tuition & Online Tuition Services",
    description:
      "Explore home tuition, online tuition, one-to-one tuition, group tuition and academic preparation services offered by Better Result Home Tuition.",
    keywords: [
      "home tuition services",
      "online tuition services",
      "one to one tuition",
      "group tuition",
      "private home tutors",
      "online tutors",
      "board exam preparation",
      "JEE preparation",
      "NEET preparation",
    ],
    ogImage: "/images/services/services-hero.jpg",
    ogImageAlt: "Home Tuition and Online Tuition Services",
  },

  "/find-a-tutor": {
    title: "Find a Home Tutor or Online Tutor",
    description:
      "Looking for a suitable tutor? Share your student's class, subject and location to enquire about home tuition or online tuition with our team.",
    keywords: [
      "find a tutor",
      "find home tutor",
      "find online tutor",
      "home tutor for school students",
      "private tutor",
      "tuition teacher",
      "find tutor in Dehradun",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Find a suitable home tutor or online tutor",
  },

  "/free-demo": {
    title: "Request a Free Home Tuition Demo Class",
    description:
      "Request a free demo class for your student. Share academic requirements and preferred timings. Our team will review your request and contact you for confirmation.",
    keywords: [
      "free demo class",
      "free home tuition demo",
      "online tuition demo",
      "request tuition demo",
      "home tutor demo class",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt:
      "Request a free demo class with Better Result Home Tuition",
  },

  "/become-a-teacher": {
    title: "Become a Teacher | Teaching Opportunities",
    description:
      "Explore teaching opportunities with Better Result Home Tuition. Share your educational qualifications, teaching experience and preferred teaching subjects.",
    keywords: [
      "become a tutor",
      "teaching opportunities",
      "home tutor jobs",
      "online tutor jobs",
      "teacher registration",
      "teaching jobs",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Teaching opportunities at Better Result Home Tuition",
  },

  "/contact": {
    title: "Contact Us",
    description:
      "Contact Better Result Home Tuition for home tuition, online tuition, tutor enquiries, demo class requests and academic learning support.",
    keywords: [
      "contact Better Result Home Tuition",
      "home tuition enquiry",
      "online tuition contact",
      "tuition services contact",
      "contact home tutor",
    ],
    ogImage: "/images/contact/contact-hero.jpg",
    ogImageAlt: "Contact Better Result Home Tuition",
  },

  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Read the Privacy Policy of Better Result Home Tuition to understand how personal information shared through our website and enquiry forms is handled.",
    keywords: [
      "privacy policy",
      "Better Result Home Tuition privacy policy",
      "personal information policy",
      "website privacy",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Better Result Home Tuition Privacy Policy",
  },

  "/terms-and-conditions": {
    title: "Terms and Conditions",
    description:
      "Read the Terms and Conditions governing the use of the Better Result Home Tuition website, tuition enquiries and related services.",
    keywords: [
      "terms and conditions",
      "Better Result Home Tuition terms",
      "website terms of use",
      "tuition service terms",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Better Result Home Tuition Terms and Conditions",
  },

  "/refund-policy": {
    title: "Refund and Cancellation Policy",
    description:
      "Review the Refund and Cancellation Policy of Better Result Home Tuition for information about applicable payments, cancellations and refund requests.",
    keywords: [
      "refund policy",
      "cancellation policy",
      "Better Result Home Tuition refund policy",
      "tuition fee refund",
      "payment cancellation policy",
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: "Better Result Home Tuition Refund and Cancellation Policy",
  },
};

export function getPageMetadata(pathname) {
  const page = PAGE_SEO[pathname];

  if (!page) {
    throw new Error(
      `Missing SEO configuration for route: ${pathname}`
    );
  }

  const canonicalUrl = new URL(pathname, SITE_URL).toString();

  const imageUrl = new URL(
    page.ogImage || DEFAULT_OG_IMAGE,
    SITE_URL
  ).toString();

  const socialTitle = page.socialTitle || page.title;

  const imageAlt = page.ogImageAlt || SITE_NAME;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,

    category: "Education",

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: socialTitle,
      description: page.description,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}
