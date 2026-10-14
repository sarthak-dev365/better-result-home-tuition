import "../../styles/home/about-section.css";

const aboutCards = [
  {
    number: "01",
    icon: "▤",
    label: "SCHOOL EDUCATION",
    title: "Strong Foundations",
    description:
      "Explore learning support for Classes 1–12, designed to help students understand concepts, strengthen fundamentals and progress with confidence.",
    tags: ["Classes 1–12", "CBSE", "ICSE"],
    theme: "blue",
  },
  {
    number: "02",
    icon: "✦",
    label: "BOARD PREPARATION",
    title: "Prepare with Confidence",
    description:
      "Discover learning options for CBSE, ICSE and State Board examinations, along with senior secondary Commerce subjects.",
    tags: ["State Boards", "Commerce 11–12"],
    theme: "orange",
  },
  {
    number: "03",
    icon: "↗",
    label: "COMPETITIVE EXAMS",
    title: "Move Towards Your Goals",
    description:
      "Explore focused preparation options for JEE and NEET, with the flexibility to choose home tuition or online learning.",
    tags: ["JEE", "NEET", "Online & Home"],
    theme: "purple",
  },
];

export default function AboutSection() {
  return (
    <section className="br-about" id="about">
      <div className="br-about-container">
        {/* Centered Section Heading */}

        <header className="br-about-header">
          <div className="br-about-eyebrow">
            <span className="br-about-eyebrow-line" />
            <span className="br-about-eyebrow-star">✦</span>
            <span>ABOUT US</span>
            <span className="br-about-eyebrow-line" />
          </div>

          <h2 className="br-about-title">
            Helping Students Move
            <span>Towards Better Results</span>
          </h2>

          <div className="br-about-title-accent">
            <span />
            <span />
            <span />
          </div>

          <p className="br-about-subtitle">
            Better learning starts with the right support.
            Explore educational opportunities designed around
            your academic needs and goals.
          </p>
        </header>

        {/* About Description */}

        <div className="br-about-intro">
          <p>
            Better Result Home Tuition helps students and families
            explore educational support according to their class
            level, academic requirements and preferred learning mode.
            Our aim is to make it easier to discover suitable learning
            options for every academic stage.
          </p>
        </div>

        {/* Three Premium About Cards */}

        <div className="br-about-grid">
          {aboutCards.map((card, index) => (
            <article
              className={`br-about-card br-about-card-${card.theme}`}
              key={card.number}
              style={{ "--br-card-index": index }}
            >
              <div className="br-about-card-top">
                <span
                  className="br-about-card-icon"
                  aria-hidden="true"
                >
                  {card.icon}
                </span>

                <span className="br-about-card-number">
                  {card.number}
                </span>
              </div>

              <span className="br-about-card-label">
                {card.label}
              </span>

              <h3>{card.title}</h3>

              <p className="br-about-card-description">
                {card.description}
              </p>

              <div className="br-about-card-tags">
                {card.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="br-about-card-bottom">
                <span className="br-about-card-bottom-line" />
                <span
                  className="br-about-card-bottom-icon"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}