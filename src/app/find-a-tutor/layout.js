import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/find-a-tutor");

export default function PageLayout({ children }) {
  return children;
}
