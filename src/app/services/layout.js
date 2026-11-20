import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/services");

export default function PageLayout({ children }) {
  return children;
}
