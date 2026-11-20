import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/free-demo");

export default function PageLayout({ children }) {
  return children;
}
