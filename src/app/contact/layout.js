import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/contact");

export default function PageLayout({ children }) {
  return children;
}
