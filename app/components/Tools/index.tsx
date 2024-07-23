/** @format */
import React from "react";

const Tools = () => {
	// Tools I use section
	return (
		<div className="w-full h-full flex flex-col justify-start items-center gap-20 px-2">
			{/* frontend */}
			<div className="w-full h-full flex flex-col justify-center items-center gap-10">
				<h1 className="text-3xl font-bold">Frontend</h1>
				<div className="w-full h-full flex flex-row justify-center items-center gap-10 flex-wrap">
					<div className="text-white hover:text-blue-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="none"
								stroke="currentColor"
								d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-yellow-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="none"
								stroke="currentColor"
								d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-blue-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582c.01.105.022.212.037.321a13.654 13.654 0 0 1 1.676-.311a13.28 13.28 0 0 1 1.275-1.54a7.111 7.111 0 0 0-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14c-.06-.05-.121-.1-.182-.148c-.572-.452-1.158-.789-1.724-.953C5.024.711 4.441.711 3.928.99c-.513.278-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965c.016.17.037.344.065.523c-.17.06-.334.125-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584c0 .583.278 1.097.694 1.519c.414.42.989.774 1.66 1.062c.156.067.32.131.49.192a8.672 8.672 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149c.06.051.121.1.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a8.616 8.616 0 0 0-.065-.523a8.2 8.2 0 0 0 .49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a8.706 8.706 0 0 0-.49-.192c.027-.179.049-.353.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334C10.56.711 9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365c-.225.23-.45.483-.672.755a16.99 16.99 0 0 1 1.344 0a11.385 11.385 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582c-.01.105-.022.212-.037.32a13.655 13.655 0 0 0-1.676-.31m-.563.944a15.628 15.628 0 0 0-2.898 0A15.627 15.627 0 0 0 4.72 7.584a15.693 15.693 0 0 0 1.33 2.433a15.634 15.634 0 0 0 2.9 0a15.63 15.63 0 0 0 1.33-2.433A15.691 15.691 0 0 0 8.95 5.15m1.824 1.138a17.244 17.244 0 0 0-.527-.956c.26.05.511.106.752.168c-.063.256-.138.52-.225.788m0 2.591a16.837 16.837 0 0 1-.527.957c.26-.05.511-.106.752-.169a11.69 11.69 0 0 0-.225-.788m1.18.487a13.805 13.805 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782c.103.038.203.079.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a7.467 7.467 0 0 1-.3.12m-.765 1.285a13.57 13.57 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032c.216-.117.404-.348.525-.746c.123-.4.164-.936.105-1.582a7.422 7.422 0 0 0-.037-.32M7.5 11.826c.225-.23.45-.483.672-.755a16.945 16.945 0 0 1-1.344 0c.222.272.447.524.672.755m-2.746-1.99a16.972 16.972 0 0 1-.527-.957c-.087.27-.162.532-.225.788c.24.063.492.119.752.169m-.942.815a13.57 13.57 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54a6.761 6.761 0 0 1-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032c-.216-.117-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a7.47 7.47 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a13.806 13.806 0 0 1-.588-1.782a8.518 8.518 0 0 0-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846c.097.041.197.081.3.12m.955-3.865c.063.255.138.519.225.787a17.116 17.116 0 0 1 .527-.956c-.26.05-.511.106-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"
								clipRule="evenodd"
							/>
						</svg>
					</div>

					<div className="text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="currentColor"
								d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-orange-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={44}
							height={44}
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498"></path>
						</svg>
					</div>

					<div className="text-white hover:text-blue-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="currentColor"
								d="M7.5 2.5c-1.026 0-1.908.277-2.6.87c-.688.59-1.137 1.447-1.387 2.516a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156c-.582-.359-1.305-.6-2.264-.6M4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7"
							/>
						</svg>
					</div>
				</div>
			</div>

			{/* backend */}
			<div className="w-full h-full flex flex-col justify-center items-center gap-10">
				<h1 className="text-3xl font-bold">Backend</h1>
				<div className="w-full h-full flex flex-row justify-center gap-10 flex-wrap">
					<div className="text-white hover:text-green-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="currentColor"
								d="m7.5.5l.369-.338a.5.5 0 0 0-.738 0zm0 13l-.393.309a.5.5 0 0 0 .786 0zM4.623 9.838l-.393.31zm.246-6.467L4.5 3.032zm5.262 0l.369-.338zm.246 6.467l.393.31zM8 15V.5H7V15zm-.107-1.809L5.016 9.53l-.786.618l2.877 3.662zM5.237 3.708L7.87.838L7.13.162L4.5 3.032zM7.131.838l2.632 2.87l.737-.675L7.869.163zm2.853 8.691l-2.877 3.662l.786.618l2.877-3.662zm-.221-5.82a4.5 4.5 0 0 1 .22 5.82l.787.618a5.5 5.5 0 0 0-.27-7.114zm-4.747 5.82a4.5 4.5 0 0 1 .221-5.82L4.5 3.032a5.5 5.5 0 0 0-.27 7.114z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-blue-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M16.805 1a9.85 9.85 0 0 0-2.603.37l-.06.018a10.629 10.629 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805c.475 1.256.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.61 4.61 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.254 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18c-.373.08-.753.124-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701c.012-.798-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456c-.052-.001-.104-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.724.724 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.478.478 0 0 1 .173.39a.635.635 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18.073 18.073 0 0 1-.097-1.315a45.725 45.725 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696c-.65.107-1.232.002-1.579-.082a2.19 2.19 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.559.559 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57a1.166 1.166 0 0 1-.003-.037a2.864 2.864 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917c-.371.431-.781.678-1.214.696c-.433.018-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006c.79-.811 1.872-1.118 2.928-1.177c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.185 7.185 0 0 1 1.588.2l.019-.008c.229-.078.462-.144.698-.196a9.362 9.362 0 0 1 1.957-.23zm.143.614h-.137a8.502 8.502 0 0 0-1.61.176a7.048 7.048 0 0 1 2.692 2.062a7.72 7.72 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.392.392 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127c.038.044.072.088.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985zm-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.898 7.898 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035c.463.175.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a8.628 8.628 0 0 0-.312.929c.04-.01.08-.02.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714c.031.082.054.17.067.26c.014.038.02.077.019.117a49.059 49.059 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939c.32.26.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a5.487 5.487 0 0 0-.23-.298a4.065 4.065 0 0 1-.629-1.007a7.578 7.578 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7.125 7.125 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047c-.12 0-.24.004-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40.03 40.03 0 0 1 1.71-1.877a3.206 3.206 0 0 1-.932-1.307a3.116 3.116 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.806 8.806 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7.4 7.4 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464c.165.644.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51c.052.122.11.23.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a5.639 5.639 0 0 0-.699-.044m-7.78.105a2.743 2.743 0 0 0-.582.068a4.49 4.49 0 0 0-1.09.412c-.115.06-.226.13-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.431 1.431 0 0 0-.495-.077m7.48.187h.048c.062.002.12.009.17.02a.396.396 0 0 1 .13.051a.153.153 0 0 1 .071.1v.008a.215.215 0 0 1-.034.124a.614.614 0 0 1-.104.137a.646.646 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.569.569 0 0 1-.123-.108a.235.235 0 0 1-.06-.116a.151.151 0 0 1 .04-.118a.361.361 0 0 1 .111-.082a1.256 1.256 0 0 1 .504-.118zm-7.388.154c.05 0 .103.005.157.012c.144.02.273.057.371.112c.048.025.09.057.126.097a.214.214 0 0 1 .042.073a.195.195 0 0 1 .009.083a.274.274 0 0 1-.071.141a.608.608 0 0 1-.135.12a.619.619 0 0 1-.424.103a.694.694 0 0 1-.396-.209a.652.652 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.842.842 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.423.423 0 0 0-.225.197c-.06.105-.11.292-.095.61a.49.49 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.247 1.247 0 0 1-.314-.183zm-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073c.518-.086 1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.632.632 0 0 0-.193-.054z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-green-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="none"
								stroke="currentColor"
								d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 9m-2-5v5.264a2 2 0 0 1-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5l6 3.5v6l-6 3.5z"
							/>
						</svg>
					</div>
				</div>
			</div>

			{/* others */}
			<div className="w-full h-full flex flex-col justify-center items-center gap-10">
				<h1 className="text-3xl font-bold">Others</h1>
				<div className="w-full h-full flex flex-row justify-center gap-10 flex-wrap">
					<div className="text-white hover:text-orange-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="currentColor"
								d="m6.793 1.207l.353.354zM1.207 6.793l-.353-.354zm0 1.414l.354-.353zm5.586 5.586l-.354.353zm1.414 0l-.353-.354zm5.586-5.586l.353.354zm0-1.414l-.354.353zM8.207 1.207l.354-.353zM6.44.854L.854 6.439l.707.707l5.585-5.585zM.854 8.56l5.585 5.585l.707-.707l-5.585-5.585zm7.707 5.585l5.585-5.585l-.707-.707l-5.585 5.585zm5.585-7.707L8.561.854l-.707.707l5.585 5.585zm0 2.122a1.5 1.5 0 0 0 0-2.122l-.707.707a.5.5 0 0 1 0 .708zM6.44 14.146a1.5 1.5 0 0 0 2.122 0l-.707-.707a.5.5 0 0 1-.708 0zM.854 6.44a1.5 1.5 0 0 0 0 2.122l.707-.707a.5.5 0 0 1 0-.708zm6.292-4.878a.5.5 0 0 1 .708 0L8.56.854a1.5 1.5 0 0 0-2.122 0zm-2 1.293l1 1l.708-.708l-1-1zM7.5 5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 4.5zM7.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 3zm0-1A1.5 1.5 0 0 0 6 4.5h1a.5.5 0 0 1 .5-.5zm.646 2.854l1.5 1.5l.707-.708l-1.5-1.5zM10.5 8a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 7.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 6zm0-1A1.5 1.5 0 0 0 9 7.5h1a.5.5 0 0 1 .5-.5zM7 5.5v4h1v-4zm.5 5.5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 12zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 10.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 9zm0-1A1.5 1.5 0 0 0 6 10.5h1a.5.5 0 0 1 .5-.5z"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-yellow-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 15 15">
							<path
								fill="none"
								stroke="currentColor"
								d="M6 2.5h1M4.5 4V1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11M8 4.5H1.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3m2.5-1h6.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-3m-2.5 9h1"
							/>
						</svg>
					</div>

					<div className="text-white hover:text-green-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24">
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M15.172 0h-4.176v5.932a7.21 7.21 0 0 0-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268c1.703 0 3.278-.15 5.417-.53zM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1c-2.14 0-3.305-1.142-3.305-3.21c0-2.125 1.22-3.338 3.331-3.338"
								clipRule="evenodd"
							/>
							<path
								fill="currentColor"
								d="M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786c-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88c.726-1.288.973-2.782.973-5.887M21.585 0h-4.176v3.993h4.176z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tools;
