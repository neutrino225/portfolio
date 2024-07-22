/** @format */

import React from "react";
import typescript from "@/public/typescript.svg";
import javascript from "@/public/javascript.svg";
import react from "@/public/react.svg";
import next from "@/public/nextjs.svg";
import node from "@/public/nodejs.svg";
import tailwind from "@/public/tailwind.svg";
import python from "@/public/python.svg";
import django from "@/public/django.svg";
import postgresql from "@/public/postgresql.svg";
import mongodb from "@/public/mongodb.svg";
import git from "@/public/git.svg";

const Tools = () => {
	// Tools I use section
	return (
		<div className="w-full h-full flex flex-col justify-start items-center">
			{/* frontend */}
			<div className="w-full flex flex-col justify-start items-center gap-5">
				<div className="w-full flex flex-col justify-start items-center gap-3">
					<h1 className="text-2xl text-slate-100 font-semibold">Frontend</h1>
					<div className="w-full flex gap-5">
						<img src={typescript} alt="typescript" className="w-16 h-16" />
						<img src={javascript} alt="javascript" className="w-16 h-16" />
						<img src={react} alt="react" className="w-16 h-16" />
						<img src={next} alt="next" className="w-16 h-16" />
						<img src={tailwind} alt="tailwind" className="w-16 h-16" />
					</div>
				</div>
			</div>
			{/* backend */}

			{/* others */}
		</div>
	);
};

export default Tools;
