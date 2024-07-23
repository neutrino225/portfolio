/** @format */

import React from "react";
import Tools from "../Tools";

const Skills = () => {
	return (
		<section
			id="skills"
			className="mx-auto w-full md:w-3/4 flex flex-col items-center gap-5">
			<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				Tools I Use <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
			</h1>
			<Tools />
		</section>
	);
};

export default Skills;
