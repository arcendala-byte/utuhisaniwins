
"use client";

import { useEffect, useState } from "react";

const messages = [
  "The people behind the work.",
  "Rooted in community. Driven by hope.",
  "Together, we help girls thrive.",
];

export function AnimatedHeading() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    let delay = deleting ? 35 : 65;

    if (!deleting && displayedText === currentMessage) {
      delay = 2200;
    } else if (deleting && displayedText === "") {
      delay = 350;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && displayedText === currentMessage) {
        setDeleting(true);
        return;
      }

      if (deleting && displayedText === "") {
        setDeleting(false);
        setMessageIndex((previous) => (previous + 1) % messages.length);
        return;
      }

      setDisplayedText(
        deleting
          ? currentMessage.slice(0, displayedText.length - 1)
          : currentMessage.slice(0, displayedText.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayedText, deleting, messageIndex]);

  return (
    <h1
      aria-label={messages[messageIndex]}
      className="mt-4 min-h-[2.9em] max-w-4xl text-balance text-[2.5rem] font-semibold leading-[0.96] tracking-[-0.06em] text-[#202522] md:min-h-[1.95em] md:text-[4rem]"
    >
      <span aria-hidden="true">{displayedText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.06em] animate-cursor-blink bg-[#244C3A]"
      />
    </h1>
  );
}
