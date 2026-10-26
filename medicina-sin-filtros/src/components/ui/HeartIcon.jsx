
import React from "react";

export default function HeartIcon({
  className = "",
  graduate = false,
}) {
  return (
    <svg
      viewBox="0 0 320 340"
      role="img"
      aria-label="Corazón latiendo con electrocardiograma"
      xmlns="http://www.w3.org/2000/svg"
      className={`heart-svg ${className}`}
    >
      <defs>
        <clipPath id="heart-clip">
          <path
            d="M160 290 C124 266 27 213 27 132
               C27 67 109 45 160 100
               C211 45 293 67 293 132
               C293 213 196 266 160 290Z"
          />
        </clipPath>
      </defs>

      {/* Corazón animado */}
      <g className="heart-beat">
        <path
          d="M160 290 C124 266 27 213 27 132
             C27 67 109 45 160 100
             C211 45 293 67 293 132
             C293 213 196 266 160 290Z"
          fill="#B70F1E"
        />

        <g clipPath="url(#heart-clip)">
          <path
            className="ecg-line"
            d="M69 173 H119 L134 222 L147 141
               L160 195 L173 122 L191 222
               L207 173 H251"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* Gorro sobre el corazón */}
      {graduate && (
        <g className="graduation-cap">
          {/* Corona del gorro */}
          <path
            d="M92 66 L160 33 L228 66 L160 99 Z"
            fill="#B70F1E"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Parte inferior */}
          <path
            d="M120 88 V108 Q160 130 200 108 V88"
            fill="#B70F1E"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Borla */}
          <path
            d="M228 66 V119"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <circle
            cx="228"
            cy="124"
            r="6"
            fill="#B70F1E"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </g>
      )}
    </svg>
  );
}
