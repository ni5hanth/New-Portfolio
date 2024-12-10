import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          [
            { left: cursorOutlineRef.current.style.left, top: cursorOutlineRef.current.style.top },
            { left: `${posX}px`, top: `${posY}px` }
          ],
          { 
            duration: 500, 
            fill: "forwards",
            easing: "ease-out"
          }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </div>
  );
};

export default Cursor;