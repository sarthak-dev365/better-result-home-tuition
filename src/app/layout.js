
import "./globals.css";
import ConditionalNavbar from "../components/layout/ConditionalNavbar";

export const metadata = {
  title: {
    default: "Better Result Home Tuition",
    template: "%s | Better Result Home Tuition",
  },
  description:
    "Explore home tuition and online tutoring for school classes, board exams, JEE and NEET with Better Result Home Tuition in Dehradun.",
  applicationName: "Better Result Home Tuition",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConditionalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
