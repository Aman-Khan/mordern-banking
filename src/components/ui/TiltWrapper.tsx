import React, { useState, useRef, type MouseEvent } from 'react';

interface TiltWrapperProps {
  children: React.ReactNode;
  maxRotation?: number; // Maximum tilt angle in degrees
}

export const TiltWrapper: React.FC<TiltWrapperProps> = ({ children, maxRotation = 15 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate rotation percentages (-1 to 1)
    const rotateXValue = ((mouseY - centerY) / centerY) * -maxRotation;
    const rotateYValue = ((mouseX - centerX) / centerX) * maxRotation;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to flat when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      className="relative w-full h-full"
      style={{ perspective: '1000px' }} // Critical for the 3D effect
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full transition-transform ${isHovered ? 'duration-100 ease-linear' : 'duration-500 ease-out'}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </div>
  );
};
