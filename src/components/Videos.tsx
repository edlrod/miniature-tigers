import { useState } from "react";
import { videos } from "../data";

function VideoCard({ title, youtubeId }: { title: string; youtubeId: string }) {
	const [playing, setPlaying] = useState(false);

	if (playing) {
		return (
			<div className="flex min-w-0 flex-1 basis-[30%] flex-col gap-2 overflow-clip rounded-xl bg-white pb-2 font-futura text-xl text-primary shadow-md sm:min-w-120">
				<div className="relative aspect-video w-full *:absolute *:inset-0 *:size-full *:object-cover">
					<iframe
						src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
						allowFullScreen
						allow="autoplay"
						title={title}
					/>
				</div>
				<span className="text-center text-xl">{title}</span>
			</div>
		);
	}

	return (
		<button
			type="button"
			className="flex min-w-0 flex-1 basis-[30%] cursor-pointer flex-col gap-2 overflow-clip rounded-xl border-0 bg-white pb-2 font-futura text-xl text-primary shadow-md sm:min-w-120 [&:hover_img]:scale-105"
			onClick={() => setPlaying(true)}
		>
			<div className="relative aspect-video w-full overflow-hidden *:absolute *:inset-0 *:size-full *:object-cover *:transition-transform *:duration-200 *:ease-in-out">
				<img
					src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`}
					alt={`${title} Video Thumbnail`}
					loading="lazy"
				/>
			</div>
			<span className="text-center text-xl">{title}</span>
		</button>
	);
}

export function Videos() {
	return (
		<section className="p-4">
			<a
				href="https://www.youtube.com/@MiniatureTigers"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:opacity-80"
			>
				<h1 className="pb-4 text-center">WATCH</h1>
			</a>
			<div className="flex flex-wrap justify-center gap-4">
				{videos.map((video) => (
					<VideoCard
						key={video.youtubeId}
						title={video.title}
						youtubeId={video.youtubeId}
					/>
				))}
			</div>
		</section>
	);
}
