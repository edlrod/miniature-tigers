import { merchLinks, socialLinks } from "../data";
import { Icon, type IconName } from "./Icon";

export function Footer() {
	return (
		<footer className="flex justify-center bg-black p-4 text-white shadow-md max-md:flex-col max-md:gap-12 max-md:px-6 [&>div]:mx-auto [&>div]:flex [&>div]:flex-col [&>div]:gap-2 max-md:[&>div]:mx-0">
			<img
				className="mx-auto h-auto max-w-[200px] self-center"
				src="images/logo.png"
				alt="Miniature Tigers logo"
			/>
			<div>
				<h3 className="font-bold tracking-wider">FIND US</h3>
				<div className="flex gap-4">
					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.name}
							className="transition-transform duration-100 ease-in-out hover:scale-110"
						>
							<Icon name={link.icon as IconName} className="size-5" />
						</a>
					))}
				</div>
			</div>
			<div>
				<h3 className="font-bold tracking-wider">MERCH</h3>
				<div className="flex flex-col gap-1">
					{merchLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							{link.name}
						</a>
					))}
				</div>
			</div>
			<div>
				<h3 className="font-bold tracking-wider">CONTACT</h3>
				<div className="flex flex-col gap-1">
					<p>Management: Ben Collins</p>
					<a href="mailto:ben@tmwrk.net" className="hover:underline">
						ben@tmwrk.net
					</a>
				</div>
				<div className="flex flex-col gap-1">
					<p>Booking (North America)</p>
					<p>Andrew Ellis</p>
					<a href="mailto:aellis@apa-agency.com" className="hover:underline">
						aellis@apa-agency.com
					</a>
					<p>John Lashnits (APA)</p>
					<a href="mailto:JLashnits@apa-agency.com" className="hover:underline">
						JLashnits@apa-agency.com
					</a>
				</div>
			</div>
		</footer>
	);
}
