/** @format */

import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-start justify-start p-24 gap-36 overflow-hidden">
			<section
				id="home"
				className="mx-auto w-2/3 h-full flex flex-col gap-10 mt-16">
				<div className="w-min flex flex-col justify-start items-start gap-5">
					{/* Color Bars */}
					<div className="w-full flex gap-1">
						<span className="w-24 h-4 rounded-3xl bg-blue-300/70"></span>
						<span className="w-80 h-4 rounded-3xl bg-red-300/70"></span>
						<span className="w-20 h-4 rounded-3xl bg-green-300/70"></span>
						<span className="w-5 h-4 rounded-3xl bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-5 h-4 rounded-full bg-transparent"></span>
						<span className="w-32 h-4 rounded-full bg-yellow-300/70"></span>
						<span className="w-14 h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-28 h-4 rounded-full bg-teal-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-20 h-4 rounded-full bg-green-300/70"></span>
						<span className="w-24 h-4 rounded-full bg-red-300/70"></span>
						<span className="w-16 h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-20 h-4 rounded-full bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-10 h-4 rounded-full bg-transparent"></span>
						<span className="w-96 h-4 rounded-full bg-red-300/70"></span>
						<span className="w-10 h-4 rounded-full bg-purple-300/70"></span>
					</div>
				</div>

				<div className="w-full flex flex-col justify-start items-start ml-10">
					<h1 className="text-5xl text-slate-200 font-bold">Faizan Karamat</h1>
					<h2 className="text-2xl text-slate-200 font-light">
						FullStack Developer
					</h2>
				</div>

				{/* Color Bars */}
				<div className="w-min flex flex-col justify-start items-start gap-5">
					<div className="w-full flex gap-1">
						<span className="w-24 h-4 rounded-3xl bg-blue-300/70"></span>
						<span className="w-80 h-4 rounded-3xl bg-red-300/70"></span>
						<span className="w-20 h-4 rounded-3xl bg-green-300/70"></span>
						<span className="w-5 h-4 rounded-3xl bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-10 h-4 rounded-full bg-transparent"></span>
						<span className="w-96 h-4 rounded-full bg-red-300/70"></span>
						<span className="w-10 h-4 rounded-full bg-purple-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-5 h-4 rounded-full bg-transparent"></span>
						<span className="w-32 h-4 rounded-full bg-yellow-300/70"></span>
						<span className="w-14 h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-28 h-4 rounded-full bg-teal-300/70"></span>
					</div>

					<div className="w-full flex gap-1">
						<span className="w-20 h-4 rounded-full bg-green-300/70"></span>
						<span className="w-24 h-4 rounded-full bg-red-300/70"></span>
						<span className="w-16 h-4 rounded-full bg-blue-300/70"></span>
						<span className="w-20 h-4 rounded-full bg-purple-300/70"></span>
					</div>
				</div>
			</section>

			{/* about section */}
			<section
				id="aboutme"
				className="mx-auto w-2/3 flex flex-col justify-start items-start gap-5">
				<h1 className="text-lg text-blue-400 font-bold flex justify-center items-center gap-2">
					About Me <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>

				<div className="w-full flex flex-col justify-center items-start gap-3">
					<h1 className="text-2xl text-slate-100 font-semibold">
						Hi I'm Faizan Karamat
					</h1>
					<p className="text-pretty text-lg font-light text-slate-200">
						I'm a self-taught Full Stack Developer with a focus on the MERN
						stack (that's fancy talk for MongoDB, Express, React, and Node.js).
						I've been at it for over 2 years now, and I'm especially pumped
						about building user interfaces with tools like Next.js and Svelte.
						My code isn't just functional, it's fun to use! Beyond web
						development, I'm diving into the world of AI – machine learning and
						deep learning specifically. I'm passionate about using technology to
						make things not just new, but better, more efficient, and way more
						user-friendly.
					</p>
				</div>
			</section>

			{/* skills section */}
			<section
				id="skills"
				className="mx-auto w-2/3 flex flex-col justify-start items-start gap-3">
				<h1 className="text-lg text-blue-400 font-bold flex justify-center items-center gap-2">
					Skills <span className="w-4 h-1 bg-blue-400 rounded-2xl"></span>
				</h1>

				<div className="w-full flex flex-col justify-center items-start gap-7">
					<p className="text-pretty text-lg font-light text-slate-200">
						Here are some of the technologies I've been working with:
					</p>

					<div className="w-full grid grid-cols-3 gap-5">
						<div className="w-full flex flex-col justify-start items-start gap-3 bg-card shadow-2xl p-5 rounded-2xl">
							<h1 className="text-xl text-slate-100 font-semibold">Frontend</h1>
							<ul className="text-pretty text-lg font-light text-slate-200 list-disc list-inside">
								<li>React</li>
								<li>Next.js</li>
								<li>Svelte</li>
								<li>Tailwind CSS</li>
								<li>SCSS</li>
								<li>CSS Modules</li>
								<li>CSS-in-JS</li>
							</ul>
						</div>

						<div className="w-full flex flex-col justify-start items-start gap-3 bg-card shadow-2xl p-5 rounded-2xl">
							<h1 className="text-xl text-slate-100 font-semibold">Backend</h1>
							<ul className="text-pretty text-lg font-light text-slate-200 list-disc list-inside">
								<li>Node.js</li>
								<li>Express</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>REST APIs</li>
							</ul>
						</div>

						<div className="w-full flex flex-col justify-start items-start gap-3 bg-card shadow-2xl p-5 rounded-2xl">
							<h1 className="text-xl text-slate-100 font-semibold">AI</h1>
							<ul className="text-pretty text-lg font-light text-slate-200 list-disc list-inside">
								<li>Python</li>
								<li>TensorFlow</li>
								<li>Keras</li>
								<li>PyTorch</li>
								<li>Scikit-learn</li>
								<li>OpenCV</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
