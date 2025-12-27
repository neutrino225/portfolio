"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	size?: "small" | "medium" | "large";
	variant?: "primary" | "secondary";
	className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({
	children,
	onClick,
	size = "medium",
	variant = "primary",
	className = "",
}) => {
	const sizeStyles = {
		small: "px-4 py-2 text-sm",
		medium: "px-6 py-3 text-base",
		large: "px-8 py-4 text-lg",
	};

	const variantStyles = {
		primary:
			"bg-white/10 border-white/20 hover:border-white/40 hover:bg-white/20",
		secondary:
			"bg-transparent border-white/10 hover:border-white/30 hover:bg-white/5",
	};

	const buttonVariants = {
		hover: {
			scale: 1.02,
			boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
		},
		tap: { scale: 0.98 },
	};

	return (
		<motion.button
			onClick={onClick}
			variants={buttonVariants}
			whileHover="hover"
			whileTap="tap"
			className={`
				relative overflow-hidden
				backdrop-blur-md
				rounded-xl
				border
				transition-all duration-300
				${sizeStyles[size]}
				${variantStyles[variant]}
				${className}
			`}>
			<span className="relative z-10 font-medium text-white">
				{children}
			</span>
		</motion.button>
	);
};

export default GlassButton;
