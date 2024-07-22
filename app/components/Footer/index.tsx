/** @format */

import React from "react";

const Footer = () => {
	return (
		<footer className="bg-zinc-900 backdrop-blur-lg backdrop-filter mx-auto w-full md:rounded-2xl py-6">
			<div className="mx-auto w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-5 px-10 md:px-24">
				<p className="text-base md:text-lg text-gray-200">
					&copy; 2024 Faizan Karamat. All rights reserved.
				</p>

				<div className="flex gap-5 md:gap-10">
					<a
						href="https://www.linkedin.com/in/faizan-karamat/"
						target="_blank"
						rel="noreferrer"
						className="text-gray-200 hover:text-blue-400 transition-colors flex justify-center items-center">
						<span className="uppercase text-lg underline underline-offset-8 flex justify-center items-center">
							LinkedIn
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M5.708 19L5 18.292L16.292 7H9V6h9v9h-1V7.708z"></path>
							</svg>
						</span>
					</a>
					<a
						href="https://github.com/neutrino225"
						target="_blank"
						rel="noreferrer"
						className="text-gray-200 hover:text-gray-400 transition-colors  flex justify-center items-center">
						<span className="uppercase text-lg underline underline-offset-8 flex justify-center items-center">
							GitHub
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M5.708 19L5 18.292L16.292 7H9V6h9v9h-1V7.708z"></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
