import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/about");

export default function PageLayout({ children }) {
  return children;
}
