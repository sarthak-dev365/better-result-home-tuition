
import {
  House,
  Monitor,
  UserRound,
  Users,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import "@/styles/home/services.css";

const services = [
  {
    icon: House,
    title: "Home Tuition",
    description:
      "Learn at home with a suitable tutor and personalised academic guidance.",
  },
  {
    icon: Monitor,
    title: "Online Tuition",
    description:
      "Study from anywhere with flexible and interactive online learning sessions.",
  },
  {
    icon: UserRound,
    title: "One-to-One Tuition",
    description:
      "Get individual attention with lessons based on your learning needs.",
  },
  {
    icon: Users,
    title: "Group Tuition",
    description:
      "Learn alongside other students in a structured and supportive environment.",
  },
  {
    icon: BookOpen,
    title: "Board Exam Preparation",
    description:
      "Get subject guidance and preparation support for CBSE, ICSE and State Boards.",
  },
  {
    icon: GraduationCap,
    title: "JEE & NEET Preparation",
    description:
      "Build strong subject understanding with focused competitive exam guidance.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-eyebrow">OUR TUITION SERVICES</span>

          <h2>
            Find the Right
            <span> Learning Support</span>
          </h2>

          <p>
            Explore our tuition options for school studies, board
            examinations and competitive exam preparation. Choose
            the learning support that suits your academic needs.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-item" key={service.title}>
                <div className="service-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services-bottom">
          <p>
            Not sure which tuition option is right for you?
            Get in touch with our team.
          </p>

          <Link href="/free-demo" className="services-demo-button">
            Request a Free Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
