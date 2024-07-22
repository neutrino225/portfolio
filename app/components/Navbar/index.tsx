/** @format */

import React from "react";

const Navbar = () => {
	return (
		<nav className="w-full fixed top-0 left-1/2 p-5 transform -translate-x-1/2 h-16 bg-transparent backdrop-blur-lg flex items-center justify-center px-10 md:px-24 z-50">
			<div className="flex items-center gap-10">
				<ul className="flex gap-5 md:gap-10">
					<li>
						<a href="#home" className="text-slate-200 font-medium">
							Home
						</a>
					</li>
					<li>
						<a href="#aboutme" className="text-slate-200 font-medium">
							About
						</a>
					</li>
					<li>
						<a href="#work" className="text-slate-200 font-medium">
							Work
						</a>
					</li>
					<li>
						<a href="#contact" className="text-slate-200 font-medium">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
