"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  y = 18,
  className = "",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "blue" | "subtle";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
  type = "button",
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const springX = useSpring(offset.x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(offset.y, { stiffness: 260, damping: 20, mass: 0.4 });

  useEffect(() => {
    springX.set(offset.x);
    springY.set(offset.y);
  }, [offset, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.16;
    const deltaY = (e.clientY - centerY) * 0.16;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
    primary:
      "bg-[#0B1220] text-white hover:bg-[#162033] shadow-[0_1px_2px_rgba(11,18,32,0.12),0_8px_20px_-4px_rgba(11,18,32,0.22)] border border-[#0B1220]",
    blue:
      "bg-[#1A73E8] text-white hover:bg-[#1557B0] shadow-[0_1px_2px_rgba(26,115,232,0.2),0_8px_20px_-4px_rgba(26,115,232,0.32)] border border-[#1A73E8]",
    secondary:
      "bg-white text-[#0B1220] hover:bg-[#F8F9FB] border border-slate-900/12 shadow-[0_1px_2px_rgba(11,18,32,0.04)]",
    subtle:
      "bg-[#F8F9FB] text-[#0B1220] hover:bg-slate-100 border border-slate-900/8",
  };

  const sharedClasses = `inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.975 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} onClick={onClick} aria-label={ariaLabel} className={sharedClasses}>
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={sharedClasses}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const spring = useSpring(value, { stiffness: 120, damping: 22 });
  const display = useTransform(spring, (latest) => {
    const rounded = Math.round(latest);
    return `${prefix}${rounded.toLocaleString("en-IN")}${suffix}`;
  });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  if (prefersReducedMotion) {
    return (
      <span className={`tabular-nums ${className}`}>
        {prefix}
        {Math.round(value).toLocaleString("en-IN")}
        {suffix}
      </span>
    );
  }

  return <motion.span className={`tabular-nums ${className}`}>{display}</motion.span>;
}

export function BrandLogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-[#0B1220] border border-slate-800 shadow-xs ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimalist order-book depth ladder geometry */}
        <rect x="3" y="5" width="8" height="2.4" rx="1.2" fill="#34A853" />
        <rect x="5" y="9.2" width="6" height="2.4" rx="1.2" fill="#1A73E8" />
        <rect x="13" y="9.2" width="8" height="2.4" rx="1.2" fill="#FFFFFF" />
        <rect x="13" y="13.4" width="6" height="2.4" rx="1.2" fill="#EA4335" />
        <rect x="4" y="17.6" width="7" height="2.4" rx="1.2" fill="#FBBC04" />
      </svg>
    </div>
  );
}

interface SectionBadgeProps {
  label: string;
  accent?: "blue" | "green" | "yellow" | "neutral";
}

export function SectionBadge({ label, accent = "blue" }: SectionBadgeProps) {
  const dotColors = {
    blue: "bg-[#1A73E8]",
    green: "bg-[#188038]",
    yellow: "bg-[#E37400]",
    neutral: "bg-[#0B1220]",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-900/10 px-3.5 py-1.5 shadow-[0_1px_2px_rgba(11,18,32,0.03)]">
      <span className={`h-1.5 w-1.5 rounded-full ${dotColors[accent]}`} />
      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-700">
        {label}
      </span>
    </div>
  );
}
