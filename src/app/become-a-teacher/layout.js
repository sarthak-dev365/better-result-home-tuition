import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/become-a-teacher");

export default function PageLayout({ children }) {
  return children;
}
