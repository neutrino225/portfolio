/** @format */
import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="py-8 px-4 md:px-8 border-t border-gray-700/30 bg-gray-900/50 backdrop-blur-lg">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Copyright Text */}
				<p className="text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-300">
					&copy; 2024 Faizan Karamat. All rights reserved.
				</p>

				{/* Social Links */}
				<div className="flex items-center gap-6">
					<a
						href="https://github.com/neutrino225"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
						<FiGithub className="text-xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/faizan-karamat/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
						<FiLinkedin className="text-xl" />
					</a>
				</div>
			</div>

			{/* Decorative Gradient Line */}
			<div className="mt-6 h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
		</footer>
	);
};

export default Footer;
