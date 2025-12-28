import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur-2xl py-6 px-6 md:px-10">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<p className="text-white/30 text-sm font-light tracking-wide">
						&copy; 2025 Faizan Karamat
					</p>

					<div className="flex items-center gap-6">
						<a
							href="https://github.com/neutrino225"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/30 hover:text-white transition-colors duration-300">
							<FiGithub className="text-xl" />
						</a>
						<a
							href="https://www.linkedin.com/in/faizan-karamat/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/30 hover:text-white transition-colors duration-300">
							<FiLinkedin className="text-xl" />
						</a>
						<a
							href="mailto:faizan@example.com"
							className="text-white/30 hover:text-white transition-colors duration-300">
							<FiMail className="text-xl" />
						</a>
					</div>
				</div>

				<div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
			</div>
		</footer>
	);
};

export default Footer;
