
import React from "react";

export default function CourseHeart({ open = false }) {
  return (
    <span
      className={`course-heart ${open ? "course-heart--broken" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="heart-left-clip">
            <path d="M0 0H32L27 23L34 33L27 43L32 64H0Z" />
          </clipPath>

          <clipPath id="heart-right-clip">
            <path d="M32 0H64V64H32L27 43L34 33L27 23Z" />
          </clipPath>
        </defs>

        <g className="course-heart__left">
          <path
            d="M32 55
               C25 49 8 38 8 23
               C8 14 15 9 23 9
               C28 9 31 12 32 16
               C33 12 36 9 41 9
               C49 9 56 14 56 23
               C56 38 39 49 32 55Z"
            fill="#B70F1E"
            clipPath="url(#heart-left-clip)"
          />
        </g>

        <g className="course-heart__right">
          <path
            d="M32 55
               C25 49 8 38 8 23
               C8 14 15 9 23 9
               C28 9 31 12 32 16
               C33 12 36 9 41 9
               C49 9 56 14 56 23
               C56 38 39 49 32 55Z"
            fill="#E34B5A"
            clipPath="url(#heart-right-clip)"
          />
        </g>
      </svg>
    </span>
  );
}
