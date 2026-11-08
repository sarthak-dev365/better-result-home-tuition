
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import "@/styles/home/contact-section.css";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 70373 74833",
    href: "tel:+917037374833",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "betterresulthometuition@gmail.com",
    href: "mailto:betterresulthometuition@gmail.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value:
      "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let&apos;s Talk About
            <span> Your Learning Goals</span>
          </h2>

          <p>
            Have a question or looking for a suitable tutor?
            Get in touch with our team.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p className="contact-info-description">
              Reach out to us for tuition enquiries, demo requests
              and teacher registration information.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.title}>
                    <div className="contact-detail-icon">
                      <Icon size={22} />
                    </div>

                    <div className="contact-detail-text">
                      <h4>{item.title}</h4>

                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/917037374833"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us an Enquiry</h3>

            <p>
              Share your details and requirements. Our team can
              contact you to discuss suitable options.
            </p>

            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-class">Class / Course</label>
                <select id="contact-class" name="class" defaultValue="">
                  <option value="" disabled>
                    Select class or course
                  </option>
                  <option>Classes 1–5</option>
                  <option>Classes 6–8</option>
                  <option>Classes 9–10</option>
                  <option>Classes 11–12 Science</option>
                  <option>Classes 11–12 Commerce</option>
                  <option>JEE Preparation</option>
                  <option>NEET Preparation</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button type="button" className="contact-submit">
                Send Enquiry
                <ArrowRight size={19} />
              </button>

              <span className="contact-form-note">
                This form is a frontend preview. Enquiry submission
                will be enabled after backend integration.
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
