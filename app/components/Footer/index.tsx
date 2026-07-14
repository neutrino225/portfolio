import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="border-t border-primary/[0.08] bg-black px-5 py-8 sm:px-8 md:px-10">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
				<p className="text-sm text-primary/68">&copy; 2026 Faizan Karamat</p>

				<div className="flex items-center gap-5">
					<a
						href="https://github.com/neutrino225"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="focus-ring text-primary/68 transition-colors hover:text-primary">
						<FiGithub className="text-xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/faizan-karamat/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="focus-ring text-primary/68 transition-colors hover:text-primary">
						<FiLinkedin className="text-xl" />
					</a>
					<a
						href="mailto:fznkrmt22503@gmail.com"
						aria-label="Email"
						className="focus-ring text-primary/68 transition-colors hover:text-primary">
						<FiMail className="text-xl" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
