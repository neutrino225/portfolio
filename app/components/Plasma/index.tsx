import React from 'react';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'reverse' | 'pingpong';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

export const Plasma: React.FC<PlasmaProps> = ({
  color = '#ffffff',
  opacity = 1,
}) => {
  return (
    <div 
      className="w-full h-full relative overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <div className="plasma-mesh" />
      <div className="bg-grain" />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 80%)`,
          mixBlendMode: 'screen'
        }} 
      />
    </div>
  );
};

export default Plasma;
