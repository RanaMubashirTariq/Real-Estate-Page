"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

export default function Counter({
  end,
  duration = 2,
  className
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // start when 30% visible
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          useGrouping={false}
        />
      ) : (
        "0"
      )}
    </div>
  );
}
