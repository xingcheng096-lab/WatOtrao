import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(
      location.hash.replace(/^#/, "")
    );

    if (!targetId) return;

    let attempts = 0;
    let retryTimer = null;
    let highlightTimer = null;

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);

      if (!element) {
        attempts += 1;

        if (attempts < 25) {
          retryTimer = window.setTimeout(
            scrollToTarget,
            100
          );
        }

        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      element.classList.remove(
        "search-result-highlight"
      );

      // Restart animation when visiting same target again.
      void element.offsetWidth;

      element.classList.add(
        "search-result-highlight"
      );

      highlightTimer = window.setTimeout(() => {
        element.classList.remove(
          "search-result-highlight"
        );
      }, 2600);
    };

    retryTimer = window.setTimeout(
      scrollToTarget,
      150
    );

    return () => {
      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }

      if (highlightTimer) {
        window.clearTimeout(highlightTimer);
      }
    };
  }, [location.pathname, location.hash]);

  return null;
}