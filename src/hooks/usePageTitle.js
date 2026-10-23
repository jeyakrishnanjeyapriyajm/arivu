import { useEffect } from "react";

const DEFAULT_TITLE =
  "Arivu Foundation | Tamil School in Coventry, Birmingham & Shirley";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Arivu Foundation` : DEFAULT_TITLE;
  }, [title]);
}
