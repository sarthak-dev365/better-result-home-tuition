
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Better Result Home Tuition",
    template: "%s | Better Result Home Tuition",
  },
  description:
    "Find home and online tutors for Classes 1–12, board examinations, Commerce, JEE and NEET preparation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
