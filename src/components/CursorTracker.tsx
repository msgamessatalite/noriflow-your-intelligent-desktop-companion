import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full"
      style={{
        width: 400,
        height: 400,
        background: "radial-gradient(circle, hsl(185 80% 68% / 0.06), transparent 70%)",
        x: pos.x - 200,
        y: pos.y - 200,
      }}
      animate={{ x: pos.x - 200, y: pos.y - 200 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
};

export default CursorTracker;
