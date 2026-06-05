import { useState, useEffect } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypingEffect({
  words,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypingEffectProps) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => setIsPaused(false), pauseTime);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[wordIdx];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.substring(0, text.length + 1);
          setText(next);
          if (next === currentWord) {
            setIsPaused(true);
            setIsDeleting(true);
          }
        } else {
          const next = currentWord.substring(0, text.length - 1);
          setText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIdx((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [text, wordIdx, isDeleting, isPaused, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-[#00D9FF]">|</span>
    </span>
  );
}
