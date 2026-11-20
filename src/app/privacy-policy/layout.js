import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/privacy-policy");

export default function PageLayout({ children }) {
  return children;
}
