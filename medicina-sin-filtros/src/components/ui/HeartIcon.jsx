
import React from "react";

export default function HeartIcon() {
  return (
    <svg
      viewBox="0 0 320 300"
      role="img"
      aria-label="Corazón latiendo con electrocardiograma animado"
      xmlns="http://www.w3.org/2000/svg"
      className="heart-svg"
    >
      <defs>
        <clipPath id="heart-clip">
          <path
            d="M160 270 C124 246 27 193 27 112
               C27 47 109 25 160 80
               C211 25 293 47 293 112
               C293 193 196 246 160 270Z"
          />
        </clipPath>
      </defs>

      <g className="heart-beat">
        {/* Corazón rojo */}
        <path
          d="M160 270 C124 246 27 193 27 112
             C27 47 109 25 160 80
             C211 25 293 47 293 112
             C293 193 196 246 160 270Z"
          fill="#B70F1E"
        />

        {/* Línea de electrocardiograma */}
        <g clipPath="url(#heart-clip)">
          <path
            className="ecg-line"
            d="M69 153 H119 L134 202 L147 121
               L160 175 L173 102 L191 202
               L207 153 H251"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
