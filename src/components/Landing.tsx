import { featuredAlbum, streamingLinks } from "../data";
import { FeaturedAlbum } from "./FeaturedAlbum";
import { Icon, type IconName } from "./Icon";

const MINIATURE = "MINIATURE".split("").map((letter, i) => ({ letter, i }));
const TIGERS = "TIGERS".split("").map((letter, i) => ({ letter, i }));

export function Landing() {
	return (
		<div className="flex h-screen w-full items-center gap-4 p-4 max-md:flex-col">
			<div className="flex grow flex-col items-center justify-center p-[1em] text-center text-[3rem] max-md:text-[1rem]">
				<h1 className="flex flex-wrap justify-center gap-4 gap-y-0">
					<div className="flex justify-center whitespace-nowrap">
						{MINIATURE.map(({ letter, i }) => (
							<div
								key={`m-${i}`}
								className="animate-appear transition-all duration-100 ease-in-out"
							>
								{letter}
							</div>
						))}
					</div>
					<div className="flex justify-center whitespace-nowrap">
						{TIGERS.map(({ letter, i }) => (
							<div
								key={`t-${i}`}
								className="animate-appear transition-all duration-100 ease-in-out"
							>
								{letter}
							</div>
						))}
					</div>
				</h1>
				<h2>NEW ALBUM OUT NOW</h2>
				<div className="flex gap-4 sm:gap-8">
					{streamingLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.name}
							className="p-2 text-2xl transition-all duration-100 ease-in-out hover:scale-110"
						>
							<Icon name={link.icon as IconName} className="size-6" />
						</a>
					))}
				</div>
			</div>
			<div className="flex aspect-square self-stretch justify-end max-md:self-center">
				<FeaturedAlbum
					image={featuredAlbum.image}
					alt={`${featuredAlbum.title} (${featuredAlbum.year})`}
					spotifyId={featuredAlbum.spotifyId}
				/>
			</div>
		</div>
	);
}
