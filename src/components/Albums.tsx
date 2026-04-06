import { albums } from "../data";
import { FlipCard } from "./FlipCard";

export function Albums() {
	return (
		<div className="flex-2 p-4">
			<h1 className="pb-4 text-center">MORE ALBUMS</h1>
			<div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
				{albums.map((album) => (
					<FlipCard
						key={album.spotifyId}
						image={album.image}
						alt={`${album.title} (${album.year})`}
						spotifyId={album.spotifyId}
					/>
				))}
			</div>
		</div>
	);
}
