import clsx from "clsx";
import { useState } from "react";
import "./FlipCard.css";

interface FlipCardProps {
	image: string;
	alt: string;
	spotifyId: string;
	className?: string;
}

export function FlipCard({ image, alt, spotifyId, className }: FlipCardProps) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div className={clsx("flip-card", flipped && "flipped", className)}>
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<button
						type="button"
						className="flip-card-btn"
						onClick={() => setFlipped((f) => !f)}
						aria-label={`Show ${alt} on Spotify`}
					>
						<img src={image} alt={alt} />
					</button>
				</div>
				<div className="flip-card-back">
					{flipped && (
						<iframe
							src={`https://open.spotify.com/embed/album/${spotifyId}`}
							loading="lazy"
							title={`${alt} on Spotify`}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
