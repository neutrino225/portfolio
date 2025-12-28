"use client";

import React from "react";

interface GridBackgroundProps {
	gridSize?: number;
	gridColor?: string;
	maskColor?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
	gridSize = 40,
	gridColor = "rgba(255, 255, 255, 0.05)",
	maskColor = "#050505",
}) => {
	return (
		<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
			{/* Grid Pattern */}
			<div 
				className="absolute inset-0"
				style={{
					backgroundImage: `
						linear-gradient(to right, ${gridColor} 1px, transparent 1px),
						linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
					`,
					backgroundSize: `${gridSize}px ${gridSize}px`,
				}}
			/>
		</div>
	);
};

export default GridBackground;
