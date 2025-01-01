"use client";

import React from "react";

const phrases = [
  "Frontend Engineer",
  "Performance Optimizer",
  "UI/UX Developer",
  "React Specialist",
];

function RevealingContent() {
  const [typedText, setTypedText] = React.useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);

  React.useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        currentText = currentPhrase.substring(0, currentIndex - 1);
        currentIndex--;
      } else {
        currentText = currentPhrase.substring(0, currentIndex + 1);
        currentIndex++;
      }

      setTypedText(currentText);

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentPhraseIndex]);

  return (
    <div className='code-block mb-8 inline-block text-left text-sm md:text-base'>
      <pre className='text-theme-primary'>
        <code>{`const developer = {
    name: "Afzal Nomani",
    role: "${typedText}",
    location: "New Delhi",
    expertise: ["React", "Next.js", "Performance", "UI/UX"]
};`}</code>
      </pre>
    </div>
  );
}

export default RevealingContent;
