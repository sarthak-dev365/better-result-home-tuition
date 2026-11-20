import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/refund-policy");

export default function PageLayout({ children }) {
  return children;
}
