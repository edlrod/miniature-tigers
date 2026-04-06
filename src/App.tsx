import { Albums } from "./components/Albums";
import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";
import { Tour } from "./components/Tour";
import { Videos } from "./components/Videos";

export function App() {
	return (
		<>
			<header>
				<Landing />
			</header>
			<main>
				<div className="flex max-md:flex-col">
					<Albums />
					<Tour />
				</div>
				<Videos />
			</main>
			<Footer />
		</>
	);
}
