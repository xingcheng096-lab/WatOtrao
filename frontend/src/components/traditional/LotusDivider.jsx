import React from "react";

export function LotusDivider({ className = "", goldColor = "#D4AF37", maroon = "#6E1F1F" }) {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
      <div className="relative flex items-center justify-center text-[#D4AF37] p-1">
        {/* Sacred Khmer Lotus Motif SVG */}
        <svg
          viewBox="0 0 48 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-6 text-[#D4AF37] fill-current drop-shadow-sm"
        >
          {/* Central Lotus Bud */}
          <path
            d="M24 2C24 2 28 10 28 19C28 23 26 26 24 28C22 26 20 23 20 19C20 10 24 2 24 2Z"
            fill="currentColor"
          />
          {/* Left Inner Petal */}
          <path
            d="M21 9C21 9 14 14 14 21C14 24 16 26 19 27C17.5 23.5 18 17 21 9Z"
            fill="currentColor"
            opacity="0.85"
          />
          {/* Right Inner Petal */}
          <path
            d="M27 9C27 9 34 14 34 21C34 24 32 26 29 27C30.5 23.5 30 17 27 9Z"
            fill="currentColor"
            opacity="0.85"
          />
          {/* Left Outer Petal */}
          <path
            d="M17 17C17 17 8 20 8 26C8 28.5 11 30 15 29C13 26 14 21 17 17Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Right Outer Petal */}
          <path
            d="M31 17C31 17 40 20 40 26C40 28.5 37 30 33 29C35 26 34 21 31 17Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Lotus Base Pedestal */}
          <path
            d="M16 29C20 31 28 31 32 29C34 32 30 33 24 33C18 33 14 32 16 29Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
    </div>
  );
}

export function KhmerDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center my-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
      <div className="mx-3 flex items-center gap-1.5 text-[#D4AF37]">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
        <span className="w-2.5 h-2.5 rotate-45 border border-[#D4AF37] bg-[#6E1F1F]" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
      </div>
      <div className="h-[1px] flex-1 max-w-xs bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
    </div>
  );
}

export function KhmerCornerDecor({ position = "top-left", className = "" }) {
  const rotation = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-x-[-1] scale-y-[-1]"
  }[position] || "";

  return (
    <div className={`absolute pointer-events-none text-[#D4AF37] ${rotation} ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M2 26V4C2 2.89543 2.89543 2 4 2H26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 18V7C6 6.44772 6.44772 6 7 6H18"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
        <path d="M12 2C12 5 9 8 6 8" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function KhmerPatternBackground({ opacity = "opacity-[0.04]", className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${opacity} ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="khmer-kbach-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.8"
            />
            <circle cx="30" cy="30" r="4" fill="none" stroke="#6E1F1F" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#D4AF37" />
            <circle cx="60" cy="0" r="1.5" fill="#D4AF37" />
            <circle cx="0" cy="60" r="1.5" fill="#D4AF37" />
            <circle cx="60" cy="60" r="1.5" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khmer-kbach-pattern)" />
      </svg>
    </div>
  );
}
