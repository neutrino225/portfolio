/** @format */

import React from "react";
import InfiniteScroll from "../InfiniteScroll";

const Skills = () => {
	return (
		<section
			id="skills"
			className="mx-auto w-full md:w-3/4 flex flex-col items-center gap-3">
			<h1 className="text-base md:text-lg uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				[ Tools I Use ]
			</h1>

			<div className="w-full h-full max-md:hidden">
				<div className="mx-auto w-2/3 bg-transparent mt-10 p-2 md:overflow-hidden pointer-events-none scroller">
					<InfiniteScroll />
				</div>
			</div>

			<div className="mx-auto w-2/3 bg-transparent mt-10 p-2 md:overflow-hidden pointer-events-none md:hidden">
				<InfiniteScroll />
			</div>
		</section>
	);
};

export default Skills;
