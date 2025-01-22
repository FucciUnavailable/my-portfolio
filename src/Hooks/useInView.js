import { useEffect, useState } from 'react';

function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Only updates when the element enters or leaves the viewport
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer when component unmounts
      }
    };
  }, [ref]);

  return isInView;
}

export default useInView;
