export interface Album {
	title: string;
	year: number;
	image: string;
	spotifyId: string;
}

export interface TourEvent {
	date: string;
	city: string;
	venue: string;
	url: string;
}

export interface Video {
	title: string;
	youtubeId: string;
}

export const featuredAlbum: Album = {
	title: "Miniature Tigers",
	year: 2023,
	image: "images/miniature-tigers.jpg",
	spotifyId: "6PG4kE4c70B9H9lq0RlZlM",
};

export const albums: Album[] = [
	{
		title: "Vampires in the Daylight",
		year: 2019,
		image: "images/vampires.jpg",
		spotifyId: "60gaU4HXxICS04UUNzeN4s",
	},
	{
		title: "I Dreamt I Was a Cowboy",
		year: 2016,
		image: "images/cowboy.jpg",
		spotifyId: "6WlwLgu89GG2ybj5m31gDE",
	},
	{
		title: "Cruel Runnings",
		year: 2014,
		image: "images/cruel-runnings.jpg",
		spotifyId: "5YSbrcKPzEjbqwONZDUQOv",
	},
	{
		title: "Mia Pharaoh",
		year: 2012,
		image: "images/mia-pharaoh.jpg",
		spotifyId: "2S88EELcEozMQZCvIJUbRJ",
	},
	{
		title: "F O R T R E S S",
		year: 2010,
		image: "images/fortress.jpg",
		spotifyId: "21YuCtQyw0qvpWrHicimGy",
	},
	{
		title: "Tell It to the Volcano",
		year: 2008,
		image: "images/volcano.jpg",
		spotifyId: "3qmAEhCBKv3TeqhwIqQgqU",
	},
];

export const pastEvents: TourEvent[] = [
	{
		date: "Dec 03 2022",
		city: "Phoenix, AZ",
		venue: "Hance Park",
		url: "https://www.bandsintown.com/z/1026040882-miniature-tigers-at-hance-park",
	},
	{
		date: "Dec 02 2022",
		city: "San Diego, CA",
		venue: "Casbah",
		url: "https://www.bandsintown.com/z/103806193-miniature-tigers-at-casbah",
	},
	{
		date: "Dec 01 2022",
		city: "Los Angeles, CA",
		venue: "Lodge Room Highland Park",
		url: "https://www.bandsintown.com/z/103806201-miniature-tigers-at-lodge-room-highland-park",
	},
	{
		date: "Nov 30 2022",
		city: "Oakland, CA",
		venue: "Starline Social Club",
		url: "https://www.bandsintown.com/z/103806181-miniature-tigers-at-starline-social-club",
	},
	{
		date: "Nov 29 2022",
		city: "Fresno, CA",
		venue: "Strummer's",
		url: "https://www.bandsintown.com/z/103806175-miniature-tigers-at-strummer's",
	},
	{
		date: "Feb 15 2020",
		city: "Los Angeles, CA",
		venue: "Bootleg Theater",
		url: "https://www.bandsintown.com/z/1017581996-miniature-tigers-at-bootleg-theater",
	},
];

export const videos: Video[] = [
	{ title: "Carousel", youtubeId: "1uvB_jfxuCE" },
	{ title: "Hell Is Other People", youtubeId: "cxfGcErf-00" },
	{ title: "Lavender Boombox", youtubeId: "_RLgVRb5Dk8" },
	{ title: "Better Than Ezra", youtubeId: "yvtfs4Y1anw" },
	{ title: "Cool", youtubeId: "PLdoM1CM-1Q" },
	{ title: "Manic Upswings", youtubeId: "pYfRc2Bd-6k" },
	{ title: "Crying in the Sunshine", youtubeId: "c13spOr8V7k" },
	{ title: "Used to Be the Shit", youtubeId: "nUxuaSzhfrc" },
	{ title: "Oblivious", youtubeId: "Jky_-EAXXPI" },
	{ title: "Swimming Pool Blues", youtubeId: "VTLyfpiibUE" },
	{ title: "Sex on the Regular", youtubeId: "QdWSPE43ogM" },
	{ title: "Female Doctor", youtubeId: "K_IGJ32wOzk" },
	{ title: "Bullfighter Jacket", youtubeId: "J6TDP89a_rs" },
	{ title: "Cannibal Queen", youtubeId: "WrUrv7CBbN4" },
];

export const streamingLinks = [
	{
		name: "Spotify",
		url: "https://open.spotify.com/album/6PG4kE4c70B9H9lq0RlZlM?si=Su3SISiITLinUWZh3uTglw",
		icon: "spotify",
	},
	{
		name: "Apple Music",
		url: "https://music.apple.com/us/album/miniature-tigers/1748064074",
		icon: "apple",
	},
	{
		name: "Amazon Music",
		url: "https://www.amazon.com/music/player/albums/B0D49M1CG1",
		icon: "amazon",
	},
	{
		name: "YouTube Music",
		url: "https://music.youtube.com/playlist?list=OLAK5uy_kZR362SrRJU3MLt65AjUNhucYimQUuoWE",
		icon: "youtube",
	},
] as const;

export const socialLinks = [
	{
		name: "Instagram",
		url: "https://instagram.com/miniaturetigers",
		icon: "instagram",
	},
	{
		name: "X",
		url: "https://x.com/miniaturetigers",
		icon: "x",
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/@MiniatureTigers",
		icon: "youtube",
	},
	{
		name: "Discord",
		url: "https://discord.gg/kQ6Gc5UJCb",
		icon: "discord",
	},
	{
		name: "Bandcamp",
		url: "https://miniaturetigers.bandcamp.com",
		icon: "bandcamp",
	},
] as const;

export const merchLinks = [
	{
		name: "Merchbar",
		url: "https://www.merchbar.com/pop/miniature-tigers",
	},
	{
		name: "bandcamp",
		url: "https://miniaturetigers.bandcamp.com/merch",
	},
];
