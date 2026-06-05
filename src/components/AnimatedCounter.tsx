import { useCounter } from "../hooks/useCounter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const { count, ref } = useCounter(value, duration);

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
}
