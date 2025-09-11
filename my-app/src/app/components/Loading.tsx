"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  // Ensure the loader stays visible for at least 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white pointer-events-none overflow-hidden">
      {/* Expanding circle */}
      <div className="w-20 h-20 bg-black rounded-full animate-expandCircle"></div>

      <style jsx>{`
        @keyframes expandCircle {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(8); opacity: 1; }
          100% { transform: scale(100); opacity: 0; }
        }
        .animate-expandCircle {
          animation: expandCircle 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
