import { useEffect } from "react";

export const useScrollReveal = () => {
  try {
    useEffect(() => {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  } catch (error) {
    reportError(error);
  }
};
