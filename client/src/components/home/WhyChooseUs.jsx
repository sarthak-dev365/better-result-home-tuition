
import "../../styles/home/why-choose-us.css";

const reasons = [
  {
    number: "01",
    icon: "♧",
    title: "Personalised Learning",
    description:
      "Learning options suited to each student's class, academic needs and goals.",
    theme: "orange",
  },
  {
    number: "02",
    icon: "✳",
    title: "Individual Attention",
    description:
      "Explore learning support focused on understanding concepts and building confidence.",
    theme: "green",
  },
  {
    number: "03",
    icon: "◷",
    title: "Flexible Learning",
    description:
      "Choose home tuition or online tuition to suit your preferred learning mode.",
    theme: "pink",
  },
  {
    number: "04",
    icon: "₹",
    title: "Options for Your Needs",
    description:
      "Explore suitable learning options for school classes, board exams, Commerce, JEE and NEET.",
    theme: "cyan",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="br-why" id="why-choose-us">
      <div className="br-why-container">
        <header className="br-why-header">
          <span className="br-why-badge">Why Better Result Home Tuition</span>

          <h2>
            Why Choose <span>Us?</span>
          </h2>

          <p>
            We help students and families explore learning options
            designed around their academic needs and goals.
          </p>
        </header>

        <div className="br-why-grid">
          {reasons.map((reason) => (
            <article
              className={`br-why-card br-why-card-${reason.theme}`}
              key={reason.number}
            >
              <div className="br-why-card-top">
                <span className="br-why-icon" aria-hidden="true">
                  {reason.icon}
                </span>

                <span className="br-why-number">{reason.number}</span>
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

              <span className="br-why-card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
