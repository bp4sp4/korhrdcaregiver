import React from "react";

interface DownChevronIconProps {
  className?: string;
  size?: number;
}

export default function DownChevronIcon({
  className = "",
  size = 32,
}: DownChevronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
