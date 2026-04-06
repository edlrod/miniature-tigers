import { pastEvents } from "../data";

export function Tour() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4 text-center">
			<a
				href="https://www.bandsintown.com/a/34969-miniature-tigers"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:opacity-80"
			>
				<h1 className="pb-4 text-center">TOUR</h1>
			</a>
			<span className="text-gray-500">No upcoming events.</span>
			<h2>PAST EVENTS</h2>
			{pastEvents.map((event) => (
				<div
					className="flex w-full flex-col rounded-xl bg-white p-4 text-left text-xl shadow-md"
					key={event.url}
				>
					<div className="flex justify-between gap-4">
						<span>{event.date}</span>
						<span>{event.city}</span>
					</div>
					<a
						href={event.url}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline"
					>
						{event.venue}
					</a>
				</div>
			))}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.bandsintown.com/a/34969-miniature-tigers"
				className="hover:underline"
			>
				MORE
			</a>
		</div>
	);
}
