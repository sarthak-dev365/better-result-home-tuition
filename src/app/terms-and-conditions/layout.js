import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("/terms-and-conditions");

export default function PageLayout({ children }) {
  return children;
}
