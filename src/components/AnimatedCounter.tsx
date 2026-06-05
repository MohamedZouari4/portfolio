import React from "react";
import { useCounter } from "../hooks/useCounter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "",
  style,
}: AnimatedCounterProps) {
  const { count, ref } = useCounter(value, duration);

  return (
    <div ref={ref} className={className} style={style}>
      {count}
      {suffix}
    </div>
  );
}
