/** @format */

import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="mx-auto w-full md:w-3/4 flex flex-col justify-start items-center gap-5">
			<h1 className="text-xl uppercase text-blue-400 font-bold flex justify-center items-center gap-2">
				Contact <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
			</h1>

			<div className="w-full flex max-md:flex-col justify-start items-start gap-10">
				<div className="w-full flex flex-col justify-start items-start gap-4">
					<p className="text-lg text-slate-200">
						Got a question, proposal, project, or want to work together on
						something?
					</p>
					<a
						href="mailto:fznkrmt22503@gmail.com"
						className="inline-block bg-blue-500/50 text-white rounded px-3 py-2 hover:bg-blue-600/50 text-center font-bold">
						Send me an email
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
