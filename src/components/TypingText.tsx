// TypingText.tsx
// Types out a line character-by-character with a blinking cursor.
import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before typing begins
  showCursor?: boolean;
  className?: string;
  onDone?: () => void;
};

export default function TypingText({
  text,
  speed = 45,
  startDelay = 0,
  showCursor = true,
  className = '',
  onDone,
}: Props) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const start = () => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            if (!doneRef.current) {
              doneRef.current = true;
              onDone?.();
            }
            return c;
          }
          return c + 1;
        });
      }, speed);
    };

    if (startDelay > 0) timer = setTimeout(start, startDelay);
    else start();

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      {showCursor && <span className="cursor-blink">▋</span>}
      {/* Keep cursor blinking after typing finishes; remove the invisible spacer otherwise */}
      {!showCursor && done ? null : null}
    </span>
  );
}
