
export default function HeartIcon() {
  return (
    <svg
      viewBox="0 0 320 300"
      role="img"
      aria-label="Corazón rojo con electrocardiograma"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heart-gradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#f01928" />
          <stop offset="100%" stopColor="#a70d1b" />
        </linearGradient>
      </defs>

      <path
        d="M160 270 C124 246 27 193 27 112
           C27 47 109 25 160 80
           C211 25 293 47 293 112
           C293 193 196 246 160 270Z"
        fill="url(#heart-gradient)"
      />

      <path
        d="M69 153 H119 L134 202 L147 121
           L160 175 L173 102 L191 202
           L207 153 H251"
        fill="none"
        stroke="#fff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
