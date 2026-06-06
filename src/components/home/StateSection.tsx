"use client";

import { useEffect, useRef, useState } from "react";
import { ElementType } from "react";
import styles from "./state.module.css";

// MUI Icons
import EngineeringIcon from "@mui/icons-material/Engineering";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SpeedIcon from "@mui/icons-material/Speed";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

interface Stat {
  Icon: ElementType;
  numericValue: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    Icon: EngineeringIcon,
    numericValue: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    Icon: TaskAltIcon,
    numericValue: 1200,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    Icon: WbSunnyIcon,
    numericValue: 4,
    suffix: "MW+",
    label: "Solar Capacity",
  },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, index, active }: { stat: Stat; index: number; active: boolean }) {
  const count = useCountUp(stat.numericValue, 1800 + index * 150, active);
  const { Icon } = stat;

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={styles.cardInner}>
        {/* Top accent line */}
        <div className={styles.accentLine} />

        {/* Icon box — MUI icon */}
        <div className={styles.iconBox}>
          <Icon className={styles.icon} aria-hidden="true" />
        </div>

        {/* Number */}
        <div className={styles.number}>
          {active ? `${count}${stat.suffix}` : "0"}
        </div>

        {/* Gold divider */}
        <div className={styles.divider} />

        {/* Label */}
        <p className={styles.label}>{stat.label}</p>
      </div>

      {/* Subtle corner glow */}
      <div className={styles.cornerGlow} />
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      {/* Background texture */}
      <div className={styles.bgMesh} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}