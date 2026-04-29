"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const wrapRef = useRef(null);
  const xRef = useRef(null);
  const yRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let raf = 0;
    let nextX = 0;
    let nextY = 0;
    let pending = false;

    const apply = () => {
      pending = false;
      if (!wrapRef.current) return;
      wrapRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (nextX / Math.max(1, w)).toFixed(3);
      const ny = (nextY / Math.max(1, h)).toFixed(3);
      if (xRef.current) xRef.current.textContent = nx;
      if (yRef.current) yRef.current.textContent = ny;
    };

    const handleMove = (e) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(apply);
      }
      if (wrapRef.current && wrapRef.current.style.opacity !== "1") {
        wrapRef.current.style.opacity = "1";
      }
    };

    const handleLeave = () => {
      if (wrapRef.current) wrapRef.current.style.opacity = "0";
    };
    const handleEnter = () => {
      if (wrapRef.current) wrapRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);
    document.body.classList.add("custom-cursor-active");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div ref={wrapRef} className="custom-cursor" aria-hidden="true">
      <div className="cc-frame">
        <span className="cc-corner cc-tl" />
        <span className="cc-corner cc-tr" />
        <span className="cc-corner cc-bl" />
        <span className="cc-corner cc-br" />
        <span className="cc-dot" />
      </div>
      <span ref={xRef} className="cc-axis cc-axis-x">0.000</span>
      <span ref={yRef} className="cc-axis cc-axis-y">0.000</span>
    </div>
  );
}
