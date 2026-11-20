
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import "@/styles/layout/offer-bar.css";

export default function OfferBar() {
  return (
    <div className="offer-bar">
      <div className="offer-bar-inner">
        <div className="offer-bar-message">
          <Sparkles size={16} aria-hidden="true" />
          <p>
            <strong>Special Offer:</strong>{" "}
            Book Your Free Demo Class Today!
          </p>
        </div>

        <Link href="/free-demo" className="offer-bar-link">
          Book Now
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
