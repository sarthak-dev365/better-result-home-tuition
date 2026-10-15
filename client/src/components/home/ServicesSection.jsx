import "../../styles/home/services-section.css";

const services = [
  {
    number: "01",
    icon: "⌂",
    label: "PERSONALISED LEARNING",
    title: "Home Tuition",
    description:
      "Explore learning support at home, planned around each student's academic needs, class level and preferred schedule.",
    features: [
      "Personal attention",
      "Flexible learning schedules",
      "Support for Classes 1–12",
    ],
    theme: "blue",
  },
  {
    number: "02",
    icon: "▣",
    label: "LEARN FROM ANYWHERE",
    title: "Online Tuition",
    description:
      "Discover convenient online learning options that help students study from home and work towards their academic goals.",
    features: [
      "Learn from home",
      "Convenient study sessions",
      "Flexible learning options",
    ],
    theme: "green",
  },
  {
    number: "03",
    icon: "▤",
    label: "SCHOOL & BOARD STUDIES",
    title: "Subject Coaching",
    description:
      "Explore academic support for school classes, board curricula and senior secondary Commerce studies.",
    features: [
      "Classes 1–12",
      "CBSE, ICSE & State Boards",
      "Commerce for Classes 11–12",
    ],
    theme: "purple",
  },
  {
    number: "04",
    icon: "✦",
    label: "PREPARE WITH CONFIDENCE",
    title: "Exam Preparation",
    description:
      "Explore dedicated learning options for school board examinations and competitive entrance exam goals.",
    features: [
      "Board examination preparation",
      "JEE preparation",
      "NEET preparation",
    ],
    theme: "orange",
  },
];

export default function ServicesSection() {
  return (
    <section className="br-services" id="services">
      <div className="br-services-container">
        {/* Section Heading */}

        <header className="br-services-header">
          <span className="br-services-eyebrow">
            <span
              className="br-services-eyebrow-dot"
              aria-hidden="true"
            />
            OUR SERVICES
          </span>

          <h2 className="br-services-title">
            Comprehensive
            <span>Learning Solutions</span>
          </h2>

          <p className="br-services-subtitle">
            Explore flexible learning options designed around
            different academic needs, school curricula and
            educational goals.
          </p>

          <div
            className="br-services-heading-line"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>
        </header>

        {/* Services Grid */}

        <div className="br-services-grid">
          {services.map((service) => (
            <article
              className={`br-service-card br-service-card-${service.theme}`}
              key={service.number}
            >
              <div className="br-service-card-top">
                <span
                  className="br-service-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>

                <span className="br-service-number">
                  {service.number}
                </span>
              </div>

              <span className="br-service-label">
                {service.label}
              </span>

              <h3>{service.title}</h3>

              <p className="br-service-description">
                {service.description}
              </p>

              <ul className="br-service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span
                      className="br-service-check"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Card Footer — No Link */}

              <div
                className="br-service-card-footer"
                aria-hidden="true"
              >
                <span className="br-service-footer-line" />

                <span className="br-service-footer-mark">
                  {service.number}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
