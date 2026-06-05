import { useEffect, useRef } from "react";

/** Thin top progress bar that fills on page load and on hash navigation */
export default function TopProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Animate in on first load
    bar.style.width = "0%";
    bar.style.opacity = "1";

    let raf: number;
    let progress = 0;

    const tick = () => {
      if (progress < 90) {
        progress += (90 - progress) * 0.05;
        bar.style.width = `${progress}%`;
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    const finish = () => {
      cancelAnimationFrame(raf);
      bar.style.transition = "width 0.2s ease, opacity 0.4s ease 0.3s";
      bar.style.width = "100%";
      setTimeout(() => { bar.style.opacity = "0"; }, 500);
      setTimeout(() => { bar.style.width = "0%"; bar.style.opacity = "1"; bar.style.transition = ""; }, 900);
    };

    window.addEventListener("load", finish);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("load", finish); };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
      style={{ background: "transparent" }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          width: "0%",
          background: "linear-gradient(90deg, #00D9FF, #7C3AED, #00FFB2)",
          boxShadow: "0 0 8px #00D9FF80",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
