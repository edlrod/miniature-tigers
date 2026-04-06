import clsx from "clsx";
import { useState } from "react";

interface FeaturedAlbumProps {
	image: string;
	alt: string;
	spotifyId: string;
}

export function FeaturedAlbum({ image, alt, spotifyId }: FeaturedAlbumProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="relative h-full w-full overflow-hidden rounded-xl bg-album-red">
			<button
				type="button"
				className="block size-full cursor-pointer appearance-none border-0 bg-transparent p-0"
				onClick={() => setOpen((o) => !o)}
				aria-label={`Toggle Spotify player for ${alt}`}
			>
				<img
					src={image}
					alt={alt}
					className="size-full object-contain transition-transform duration-200 ease-in-out hover:scale-105"
				/>
			</button>
			<div
				className={clsx(
					"absolute inset-x-0 bottom-0 h-full transition-transform duration-500 ease-in-out",
					open ? "translate-y-0" : "translate-y-full",
				)}
			>
				<iframe
					src={`https://open.spotify.com/embed/album/${spotifyId}`}
					loading="lazy"
					title={`${alt} on Spotify`}
					className="size-full rounded-xl"
				/>
			</div>
		</div>
	);
}
