
import "../../styles/home/location-section.css";

const locationDetails = {
  city: "Dehradun",
  state: "Uttarakhand",
  address:
    "Shivalock Colony, Chakshha Nagar, Near Vidhan Sabha, Dehradun, Uttarakhand",
};

const mapSearch = encodeURIComponent(locationDetails.address);

const locations = [
  {
    icon: "⌖",
    title: "Dehradun",
    subtitle: "Our Listed Location",
    active: true,
  },
  {
    icon: "⌂",
    title: "Home Tuition",
    subtitle: "Learning at Home",
  },
  {
    icon: "▣",
    title: "Online Tuition",
    subtitle: "Learn from Anywhere",
  },
];

export default function LocationSection() {
  return (
    <section className="br-location" id="location">
      <div className="br-location-container">
        {/* Section heading */}

        <header className="br-location-header">
          <span className="br-location-eyebrow">
            <span className="br-location-eyebrow-icon">⌖</span>
            OUR LOCATION
          </span>

          <h2 className="br-location-title">
            Find Us in <span>Dehradun</span>
          </h2>

          <p className="br-location-subtitle">
            Discover Better Result Home Tuition and explore flexible
            learning support for your academic goals.
          </p>
        </header>

        {/* Location and map */}

        <div className="br-location-layout">
          <div className="br-location-info">
            <div className="br-location-status">
              <span className="br-location-status-dot" />
              <span>OUR LISTED LOCATION</span>
            </div>

            <div className="br-location-city-heading">
              <span className="br-location-pin" aria-hidden="true">
                ⌖
              </span>

              <div>
                <span className="br-location-small-label">
                  LOCATION
                </span>
                <h3>{locationDetails.city}</h3>
                <p>{locationDetails.state}, India</p>
              </div>
            </div>

            <div className="br-location-divider" />

            <div className="br-location-address">
              <span
                className="br-location-detail-icon"
                aria-hidden="true"
              >
                ⌂
              </span>

              <div>
                <h4>Our Address</h4>
                <p>{locationDetails.address}</p>
              </div>
            </div>

            <a
              className="br-location-map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${mapSearch}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>

            <p className="br-location-note">
              Home and online tuition options are available to explore.
            </p>
          </div>

          {/* Google Maps */}

          <div className="br-location-map-card">
            <div className="br-location-map-heading">
              <div>
                <span className="br-location-map-kicker">
                  FIND OUR LOCATION
                </span>
                <h3>Dehradun, Uttarakhand</h3>
              </div>

              <span className="br-location-map-symbol" aria-hidden="true">
                ⌖
              </span>
            </div>

            <div className="br-location-map-frame">
              <iframe
                title="Better Result Home Tuition location in Dehradun"
                src={`https://maps.google.com/maps?q=${mapSearch}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="br-location-map-footer">
              <span className="br-location-map-footer-dot" />
              <p>Shivalock Colony, Near Vidhan Sabha, Dehradun</p>
            </div>
          </div>
        </div>

        {/* Learning modes and location cards */}

        <div className="br-location-options">
          {locations.map((location) => (
            <article
              className={`br-location-option ${
                location.active ? "br-location-option-active" : ""
              }`}
              key={location.title}
            >
              <span className="br-location-option-icon" aria-hidden="true">
                {location.icon}
              </span>

              <div className="br-location-option-copy">
                <h3>{location.title}</h3>
                <p>{location.subtitle}</p>
              </div>

              {location.active && (
                <span className="br-location-option-check" aria-label="Selected location">
                  ✓
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
