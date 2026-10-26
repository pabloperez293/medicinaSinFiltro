
import React, { useEffect, useRef, useState } from "react";
import HeartIcon from "./HeartIcon";

export default function FlyingHeart() {
  const [position, setPosition] = useState(null);
  const frame = useRef(null);

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector(".hero-art");
      const destination = document.querySelector(".courses-visual");

      if (!hero || !destination) return;

      const start = hero.getBoundingClientRect();
      const end = destination.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight * 0.8 - end.top) /
            (viewportHeight * 0.65)
        )
      );

      const startX = start.left + start.width / 2;
      const startY = start.top + start.height / 2;

      const target = document.querySelector(".courses-heart-target");

if (!target) return;

const targetRect = target.getBoundingClientRect();

const endX = targetRect.left + targetRect.width / 2;
const endY = targetRect.top + targetRect.height / 2;

      setPosition({
        x: startX + (endX - startX) * progress,
        y: startY + (endY - startY) * progress,
        scale: 1 - progress * 0.25,
        progress,
      });
    };

    const requestUpdate = () => {
      if (frame.current !== null) return;

      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        update();
      });
    };

    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  if (!position) return null;

  return (
    <div
      className="flying-heart"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${position.scale})`,
      }}
      aria-hidden="true"
    >
      <HeartIcon graduate={position.progress > 0.7} />
    </div>
  );
}
