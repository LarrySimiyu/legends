import React, { useState, useEffect, useRef } from "react";

const ProgressBar = ({ step }) => {
  const [progress, setProgress] = useState(0);
  const prevProgressRef = useRef(0);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const targetProgress = ((step + 1) / 5) * 100;

    const stepAnimation = (timestamp) => {
      if (!prevProgressRef.current) prevProgressRef.current = timestamp;
      const progressStep = timestamp - prevProgressRef.current;
      const progressIncrement = progressStep / 150;
      const newProgress = Math.min(
        progress + progressIncrement,
        targetProgress
      );

      setProgress(newProgress);

      if (newProgress < targetProgress) {
        animationIdRef.current = requestAnimationFrame(stepAnimation);
      }
      prevProgressRef.current = timestamp;
    };

    animationIdRef.current = requestAnimationFrame(stepAnimation);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [step, progress]);

  return (
    <div className="h-4 bg-white rounded-lg mt-4">
      <div
        className={`h-4 rounded-lg bg-gradient-to-r from-red-500 to-purple-800`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
