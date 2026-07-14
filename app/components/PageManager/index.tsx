import Home from "../pages/Home";
import Navbar from "../Navbar";

export default function PageManager() {
	return (
		<main className="min-h-screen w-full overflow-hidden bg-black">
			<Navbar />
			<Home />
		</main>
	);
}
