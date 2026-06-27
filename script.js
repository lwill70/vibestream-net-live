const STORAGE_KEYS = {
	media: "vibestream-media",
	uploads: "vibestream-uploads",
	queue: "vibestream-queue",
	follows: "vibestream-follows",
	stream: "vibestream-stream-settings",
	streamItemState: "vibestream-stream-item-state",
	comments: "vibestream-comments",
};

const MAX_MEDIA_ITEMS = 5000;
const MAX_UPLOADS = 5000;
const MAX_QUEUE_ITEMS = 500;
const TITLE_MAX_LEN = 120;
const CREATOR_MAX_LEN = 80;
const RECENT_WINDOW = 200;

const VALID_CATEGORIES = new Set([
	"music",
	"video",
	"videos",
	"podcast",
	"documentary",
	"live set",
	"live session",
	"series",
	"graphics",
	"movie",
	"mixtape",
	"music videos",
	"music video",
	"product",
	"other",
]);

const VALID_RELEASE_TYPES = new Set([
	"single",
	"ep",
	"album",
	"mixtape",
	"live session",
	"podcast",
	"music video",
	"movie",
	"series",
	"video",
	"other",
]);

const VALID_GENRES = new Set([
	"afrobeats",
	"hip hop",
	"r&b",
	"amapiano",
	"dancehall",
	"gospel",
	"podcast",
	"cinematic",
	"other",
]);

const VALID_STREAM_QUALITY = new Set(["360p", "720p", "1080p", "4k"]);
const VALID_STREAM_MODE = new Set(["public", "unlisted", "private"]);
const VALID_STREAM_SOURCE = new Set(["camera", "screen", "mixed"]);
const VALID_STREAM_CATEGORIES = new Set([
	"music stream",
	"live broadcast",
	"listening party",
	"studio session",
	"artist q&a",
]);
const VALID_REACTIONS = ["like", "fire", "love"];
const VALID_THEMES = new Set([
	"neon pulse",
	"sunset glow",
	"midnight stage",
	"cinema noir",
	"clean minimal",
]);

const THEME_PALETTES = {
	"neon pulse": "linear-gradient(140deg, #1f71ff, #7e39ff)",
	"sunset glow": "linear-gradient(140deg, #ff7b45, #ff2f7f)",
	"midnight stage": "linear-gradient(140deg, #0d254f, #101b36)",
	"cinema noir": "linear-gradient(140deg, #5f2938, #121826)",
	"clean minimal": "linear-gradient(140deg, #3568b5, #1f2d4f)",
};

const LABEL_OVERRIDES = {
	ep: "EP",
	"artist q&a": "Artist Q&A",
	"live set": "Live Set",
};

const DEFAULT_MEDIA = [
	{ id: "m1", title: "After Midnight", creator: "Ayo Luna", category: "music", releaseType: "single", trackCount: 1, theme: "neon pulse", genre: "amapiano", views: "42.1K", palette: "linear-gradient(140deg, #2e7bff, #8f3cff)" },
	{ id: "m2", title: "Johannesburg Sunrise", creator: "Sena Wave", category: "music", releaseType: "ep", trackCount: 5, theme: "sunset glow", genre: "afrobeats", views: "28.4K", palette: "linear-gradient(140deg, #ff7b45, #ff2f7f)" },
	{ id: "m3", title: "Street Sermons Vol. 2", creator: "DJ Flexy", category: "music", releaseType: "mixtape", trackCount: 12, theme: "midnight stage", genre: "hip hop", views: "31.8K", palette: "linear-gradient(140deg, #1469ff, #10307f)" },
	{ id: "m4", title: "Pulse Theory", creator: "Nandi Rose", category: "music", releaseType: "album", trackCount: 14, theme: "clean minimal", genre: "r&b", views: "36.2K", palette: "linear-gradient(140deg, #2b91d1, #26426b)" },
	{ id: "m5", title: "Roofside Live", creator: "The Vibe Room", category: "live set", releaseType: "live session", trackCount: 7, theme: "midnight stage", genre: "dancehall", views: "19.9K", palette: "linear-gradient(140deg, #1b4d8c, #371f66)" },
	{ id: "m6", title: "Night Shift Radio", creator: "Kasi Talks", category: "podcast", releaseType: "podcast", trackCount: 8, theme: "clean minimal", genre: "podcast", views: "15.3K", palette: "linear-gradient(140deg, #0e66a8, #2a1655)" },
	{ id: "m7", title: "Forever Loop", creator: "Rex V", category: "music video", releaseType: "music video", trackCount: 1, theme: "cinema noir", genre: "r&b", views: "22.8K", palette: "linear-gradient(140deg, #641d28, #1e182f)" },
	{ id: "m8", title: "Signal Fade", creator: "Vibe Pictures", category: "movie", releaseType: "movie", trackCount: 1, theme: "cinema noir", genre: "cinematic", views: "35.6K", palette: "linear-gradient(140deg, #7d2a20, #25152f)" },
	{ id: "m9", title: "Last City: Season One", creator: "Core Frame", category: "series", releaseType: "series", trackCount: 10, theme: "midnight stage", genre: "cinematic", views: "29.1K", palette: "linear-gradient(140deg, #1f3d6d, #0c141f)" },
	{ id: "m10", title: "Free Cover Pack", creator: "Design Hive", category: "graphics", releaseType: "other", trackCount: 1, theme: "clean minimal", genre: "other", views: "8.3K", palette: "linear-gradient(140deg, #8f6b2f, #1a1e38)" },
];

const DEFAULT_UPLOADS = [
	{ title: "After Midnight", creator: "Ayo Luna", releaseType: "single", category: "music", genre: "amapiano", trackCount: 1, theme: "neon pulse", createdAt: Date.now() - 2 * 60 * 60 * 1000 },
	{ title: "Johannesburg Sunrise", creator: "Sena Wave", releaseType: "ep", category: "music", genre: "afrobeats", trackCount: 5, theme: "sunset glow", createdAt: Date.now() - 4 * 60 * 60 * 1000 },
	{ title: "Street Sermons Vol. 2", creator: "DJ Flexy", releaseType: "mixtape", category: "music", genre: "hip hop", trackCount: 12, theme: "midnight stage", createdAt: Date.now() - 6 * 60 * 60 * 1000 },
	{ title: "Roofside Live", creator: "The Vibe Room", releaseType: "live session", category: "live set", genre: "dancehall", trackCount: 7, theme: "midnight stage", createdAt: Date.now() - 8 * 60 * 60 * 1000 },
	{ title: "Forever Loop", creator: "Rex V", releaseType: "music video", category: "music video", genre: "r&b", trackCount: 1, theme: "cinema noir", createdAt: Date.now() - 10 * 60 * 60 * 1000 },
	{ title: "Night Shift Radio", creator: "Kasi Talks", releaseType: "podcast", category: "podcast", genre: "podcast", trackCount: 8, theme: "clean minimal", createdAt: Date.now() - 12 * 60 * 60 * 1000 },
];

const DEFAULT_STREAM_ITEM_STATE = {
	m1: { status: "live", viewers: 428, updatedAt: Date.now() - 8 * 60 * 1000, broadcastType: "music stream", scheduledAt: "" },
	m2: { status: "scheduled", viewers: 96, updatedAt: Date.now() - 30 * 60 * 1000, broadcastType: "listening party", scheduledAt: "Tonight 8PM" },
	m5: { status: "live", viewers: 214, updatedAt: Date.now() - 18 * 60 * 1000, broadcastType: "studio session", scheduledAt: "" },
	m6: { status: "scheduled", viewers: 44, updatedAt: Date.now() - 2 * 60 * 60 * 1000, broadcastType: "live broadcast", scheduledAt: "Tomorrow 6PM" },
	m7: { status: "offline", viewers: 0, updatedAt: Date.now() - 3 * 60 * 60 * 1000, broadcastType: "live broadcast", scheduledAt: "" },
};

const DEFAULT_COMMENTS = [
	{
		id: "c1",
		streamId: "m1",
		author: "Host",
		text: "Welcome to the After Midnight release stream. New single just dropped.",
		createdAt: Date.now() - 14 * 60 * 1000,
		userReaction: "",
		reactions: { like: 12, fire: 31, love: 18 },
	},
	{
		id: "c2",
		streamId: "m5",
		author: "Live Crew",
		text: "Roofside Live starts in a minute. Drop your city in the chat.",
		createdAt: Date.now() - 11 * 60 * 1000,
		userReaction: "",
		reactions: { like: 8, fire: 22, love: 7 },
	},
	{
		id: "c3",
		streamId: "m2",
		author: "Sena Wave",
		text: "EP listening party is scheduled for tonight 8PM. Save your reminder.",
		createdAt: Date.now() - 90 * 60 * 1000,
		userReaction: "",
		reactions: { like: 15, fire: 5, love: 11 },
	},
];

const promotions = [
	{ title: "Release Rollout Kits", desc: "Single, EP, and album launch guides with creator promo prompts." },
	{ title: "Live Session Spotlight", desc: "Book featured placement for rooftop sets, listening parties, and premieres." },
	{ title: "Collab Hub", desc: "Match with producers, vocalists, editors, and cover designers in one place." },
];

const creators = [
	{ name: "Ayo Luna", role: "Artist" },
	{ name: "Sena Wave", role: "Singer / Producer" },
	{ name: "The Vibe Room", role: "Live Curator" },
	{ name: "Kasi Talks", role: "Podcast Host" },
	{ name: "Core Frame", role: "Video Studio" },
];

const playlist = ["Hot Hits This Week", "Amapiano Heat", "Fresh EP Rotation", "Live Session Cuts", "Premiere Soundtracks"];

const stats = [
	["Live Viewers", "128.4K"],
	["Singles", "12,456"],
	["EPs", "8,742"],
	["Albums", "6,312"],
	["Mixtapes", "4,918"],
	["Music Videos", "7,248"],
	["Podcasts", "5,631"],
	["Premieres", "2,984"],
];

const state = {
	selectedCategory: "all",
	selectedChip: "all",
	query: "",
	mediaItems: [],
	latestUploads: [],
	queue: [],
	follows: {},
	stream: {
		quality: "720p",
		mode: "public",
		source: "camera",
		category: "music stream",
		isLive: false,
		scheduledAt: "",
		schedulePreset: "in 1 hour",
	},
	streamItemState: {},
	streamFilter: "all",
	selectedStreamId: "",
	comments: [],
	pendingFiles: [],
	uploadDisplayLimit: 30,
};

const els = {
	menuToggle: document.getElementById("menuToggle"),
	sidebar: document.getElementById("sidebar"),
	searchInput: document.getElementById("searchInput"),
	menuItems: Array.from(document.querySelectorAll(".menu-item[data-section]")),
	chips: document.getElementById("filterChips"),
	statsStrip: document.getElementById("statsStrip"),
	trendingGrid: document.getElementById("trendingGrid"),
	latestStrip: document.getElementById("latestStrip"),
	promoGrid: document.getElementById("promoGrid"),
	creatorsList: document.getElementById("creatorsList"),
	playlistList: document.getElementById("playlistList"),
	queueList: document.getElementById("queueList"),
	nowPlayingText: document.getElementById("nowPlayingText"),
	queueRandom: document.getElementById("queueRandom"),
	clearFilters: document.getElementById("clearFilters"),
	uploadDialog: document.getElementById("uploadDialog"),
	uploadOpen: document.getElementById("uploadOpen"),
	createBtn: document.getElementById("createBtn"),
	uploadForm: document.getElementById("uploadForm"),
	toast: document.getElementById("toast"),
	playFeatured: document.getElementById("playFeatured"),
	themeCycle: document.getElementById("themeCycle"),
	clearQueue: document.getElementById("clearQueue"),
	communityShare: document.getElementById("communityShare"),
	profileBtn: document.getElementById("profileBtn"),
	joinSpotlight: document.getElementById("joinSpotlight"),
	uploadBack: document.getElementById("uploadBack"),
	uploadCancel: document.getElementById("uploadCancel"),
	streamStatus: document.getElementById("streamStatus"),
	streamQuality: document.getElementById("streamQuality"),
	streamMode: document.getElementById("streamMode"),
	streamSource: document.getElementById("streamSource"),
	streamCategory: document.getElementById("streamCategory"),
	schedulePreset: document.getElementById("schedulePreset"),
	goLiveBtn: document.getElementById("goLiveBtn"),
	scheduleBtn: document.getElementById("scheduleBtn"),
	stopLiveBtn: document.getElementById("stopLiveBtn"),
	liveBadgeLabel: document.getElementById("liveBadgeLabel"),
	streamCategoryLabel: document.getElementById("streamCategoryLabel"),
	viewerSummary: document.getElementById("viewerSummary"),
	scheduleSummary: document.getElementById("scheduleSummary"),
	toggleUploads: document.getElementById("toggleUploads"),
	uploadCustomCategory: document.querySelector("#uploadForm input[name='customCategory']"),
	uploadBulkTitles: document.querySelector("#uploadForm textarea[name='bulkTitles']"),
	uploadMediaFiles: document.getElementById("mediaFiles"),
	pendingFilesWrap: document.getElementById("pendingFilesWrap"),
	pendingFilesList: document.getElementById("pendingFilesList"),
	clearPendingFiles: document.getElementById("clearPendingFiles"),
	streamFilterRow: document.getElementById("streamFilterRow"),
	streamFeed: document.getElementById("streamFeed"),
	screenStatusBadge: document.getElementById("screenStatusBadge"),
	screenTitle: document.getElementById("screenTitle"),
	screenMeta: document.getElementById("screenMeta"),
	screenSupport: document.getElementById("screenSupport"),
	commentsList: document.getElementById("commentsList"),
	commentForm: document.getElementById("commentForm"),
	commentInput: document.getElementById("commentInput"),
};

let toastTimer;
let storageWarned = false;

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function cleanText(value, maxLen) {
	return String(value || "")
		.replace(/[<>]/g, "")
		.replace(/\s+/g, " ")
		.trim()
		.slice(0, maxLen);
}

function normalizeCategory(value) {
	const cleaned = cleanText(value, 30).toLowerCase();
	if (!cleaned) {
		return "music";
	}
	if (["single", "ep", "album"].includes(cleaned)) {
		return "music";
	}
	if (cleaned === "video") {
		return "videos";
	}
	if (cleaned === "live session") {
		return "live set";
	}
	if (cleaned === "music videos") {
		return "music video";
	}
	if (cleaned === "other") {
		return "other";
	}
	return VALID_CATEGORIES.has(cleaned) ? cleaned : cleaned;
}

function normalizeGenre(value) {
	const cleaned = cleanText(value, 30).toLowerCase();
	if (!cleaned) {
		return "other";
	}
	return VALID_GENRES.has(cleaned) ? cleaned : "other";
}

function normalizeReleaseType(value, fallbackCategory = "music") {
	const cleaned = cleanText(value, 30).toLowerCase();
	if (VALID_RELEASE_TYPES.has(cleaned)) {
		return cleaned;
	}
	const category = normalizeCategory(fallbackCategory);
	if (category === "podcast") {
		return "podcast";
	}
	if (category === "music video") {
		return "music video";
	}
	if (category === "movie") {
		return "movie";
	}
	if (category === "series") {
		return "series";
	}
	if (category === "live set") {
		return "live session";
	}
	if (category === "videos") {
		return "video";
	}
	if (category === "mixtape") {
		return "mixtape";
	}
	return "single";
}

function normalizeTheme(value) {
	const cleaned = cleanText(value, 30).toLowerCase();
	if (!cleaned) {
		return "neon pulse";
	}
	return VALID_THEMES.has(cleaned) ? cleaned : "neon pulse";
}

function normalizeTrackCount(value, fallback = 1) {
	const parsed = Number.parseInt(value, 10);
	if (!Number.isFinite(parsed) || parsed < 1) {
		return Math.min(60, Math.max(1, Number(fallback) || 1));
	}
	return Math.min(60, Math.max(1, parsed));
}

function paletteFromTheme(theme) {
	return THEME_PALETTES[normalizeTheme(theme)] || THEME_PALETTES["neon pulse"];
}

function formatLabel(value) {
	const cleaned = String(value || "").toLowerCase();
	if (LABEL_OVERRIDES[cleaned]) {
		return LABEL_OVERRIDES[cleaned];
	}
	return cleaned
		.split(/[\s/-]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}

function inferCategoryFromReleaseType(releaseType, fallbackCategory = "music") {
	switch (releaseType) {
		case "single":
		case "ep":
		case "album":
		case "mixtape":
			return "music";
		case "live session":
			return "live set";
		case "podcast":
			return "podcast";
		case "music video":
			return "music video";
		case "movie":
			return "movie";
		case "series":
			return "series";
		case "video":
			return "videos";
		default:
			return normalizeCategory(fallbackCategory);
	}
}

function inferBroadcastType(item) {
	if (!item) {
		return "music stream";
	}
	if (item.releaseType === "live session") {
		return "studio session";
	}
	if (item.category === "music" || ["single", "ep", "album", "mixtape"].includes(item.releaseType)) {
		return "music stream";
	}
	if (item.releaseType === "podcast") {
		return "live broadcast";
	}
	return "live broadcast";
}

function parseCompactViews(value) {
	const raw = String(value || "").trim().toUpperCase();
	const match = raw.match(/^(\d+(?:\.\d+)?)([KMB])?$/);
	if (!match) {
		return 0;
	}
	const base = Number(match[1]) || 0;
	const mult = match[2] === "M" ? 1000000 : match[2] === "B" ? 1000000000 : match[2] === "K" ? 1000 : 1;
	return Math.round(base * mult);
}

function seedViewerCount(item, multiplier = 1) {
	const baseViews = parseCompactViews(item && item.views ? item.views : "0");
	const trackCount = normalizeTrackCount(item && item.trackCount ? item.trackCount : 1, 1);
	const baseline = Math.max(18, Math.round(baseViews / 180) + trackCount * 4);
	return Math.max(0, Math.round(baseline * multiplier));
}

function getCountLabel(item) {
	const count = normalizeTrackCount(item && item.trackCount ? item.trackCount : 1, 1);
	if (item && item.releaseType === "podcast") {
		return `${count} episode${count === 1 ? "" : "s"}`;
	}
	if (item && item.releaseType === "movie") {
		return "feature release";
	}
	if (item && item.releaseType === "series") {
		return `${count} episode${count === 1 ? "" : "s"}`;
	}
	return `${count} track${count === 1 ? "" : "s"}`;
}

function titleFromFileName(fileName) {
	const raw = String(fileName || "").replace(/\.[^/.]+$/, "");
	return cleanText(raw, TITLE_MAX_LEN);
}

function fileSignature(file) {
	return `${file.name}::${file.size}::${file.lastModified}`;
}

function renderPendingFiles() {
	if (!els.pendingFilesWrap || !els.pendingFilesList || !els.clearPendingFiles) {
		return;
	}
	if (!state.pendingFiles.length) {
		els.pendingFilesWrap.style.display = "none";
		els.pendingFilesList.innerHTML = "";
		return;
	}
	els.pendingFilesWrap.style.display = "block";
	els.pendingFilesList.innerHTML = state.pendingFiles
		.map((file) => `<li>${escapeHtml(file.name)}</li>`)
		.join("");
}

function clearPendingFilesQueue() {
	state.pendingFiles = [];
	if (els.uploadMediaFiles) {
		els.uploadMediaFiles.value = "";
	}
	renderPendingFiles();
}

function appendPendingFiles(files) {
	if (!Array.isArray(files) || !files.length) {
		return;
	}
	const existing = new Set(state.pendingFiles.map(fileSignature));
	files.forEach((file) => {
		if (!file || typeof file.name !== "string") {
			return;
		}
		const signature = fileSignature(file);
		if (!existing.has(signature)) {
			state.pendingFiles.push(file);
			existing.add(signature);
		}
	});
	renderPendingFiles();
}

function formatRelativeTime(createdAt) {
	const parsed = Number(createdAt);
	if (!Number.isFinite(parsed)) {
		return "Just now";
	}
	const diffMs = Math.max(Date.now() - parsed, 0);
	const minute = 60 * 1000;
	const hour = 60 * minute;
	const day = 24 * hour;
	if (diffMs < minute) {
		return "Just now";
	}
	if (diffMs < hour) {
		return `${Math.floor(diffMs / minute)}m ago`;
	}
	if (diffMs < day) {
		return `${Math.floor(diffMs / hour)}h ago`;
	}
	return `${Math.floor(diffMs / day)}d ago`;
}

function loadJson(key, fallback) {
	try {
		const value = localStorage.getItem(key);
		if (!value) {
			return fallback;
		}
		return JSON.parse(value);
	} catch {
		return fallback;
	}
}

function safeSetJson(key, data) {
	try {
		localStorage.setItem(key, JSON.stringify(data));
		return true;
	} catch {
		if (!storageWarned) {
			storageWarned = true;
			showToast("Storage is full. Older items may not be saved.");
		}
		return false;
	}
}

function showToast(message) {
	if (!els.toast) {
		return;
	}
	els.toast.textContent = message;
	els.toast.classList.add("show");
	if (toastTimer) {
		clearTimeout(toastTimer);
	}
	toastTimer = setTimeout(() => {
		els.toast.classList.remove("show");
	}, 2200);
}

function makeId() {
	if (window.crypto && typeof window.crypto.randomUUID === "function") {
		return window.crypto.randomUUID();
	}
	return `id-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

function normalizeMedia(rawMedia) {
	if (!Array.isArray(rawMedia)) {
		return [];
	}
	return rawMedia
		.map((item) => {
			if (!item || typeof item !== "object") {
				return null;
			}
			const title = cleanText(item.title, TITLE_MAX_LEN);
			const creator = cleanText(item.creator, CREATOR_MAX_LEN);
			if (!title || !creator) {
				return null;
			}
			const category = normalizeCategory(item.category);
			const releaseType = normalizeReleaseType(item.releaseType || item.category, category);
			return {
				id: cleanText(item.id || makeId(), 100),
				title,
				creator,
				category: inferCategoryFromReleaseType(releaseType, category),
				releaseType,
				genre: normalizeGenre(item.genre),
				views: cleanText(item.views || "0", 20),
				trackCount: normalizeTrackCount(item.trackCount, releaseType === "single" ? 1 : 1),
				theme: normalizeTheme(item.theme),
				palette: cleanText(item.palette || paletteFromTheme(item.theme), 120),
				createdAt: Number(item.createdAt) || Date.now(),
			};
		})
		.filter(Boolean)
		.slice(0, MAX_MEDIA_ITEMS);
}

function normalizeUploads(rawUploads) {
	if (!Array.isArray(rawUploads)) {
		return [];
	}
	return rawUploads
		.map((item) => {
			if (!item || typeof item !== "object") {
				return null;
			}
			const title = cleanText(item.title, TITLE_MAX_LEN);
			const creator = cleanText(item.creator, CREATOR_MAX_LEN);
			if (!title || !creator) {
				return null;
			}
			const createdAt = Number(item.createdAt)
				|| Date.now() - (typeof item.time === "string" && item.time.endsWith("h ago")
					? Number(item.time.replace("h ago", "")) * 60 * 60 * 1000
					: 0);
			const category = normalizeCategory(item.category);
			const releaseType = normalizeReleaseType(item.releaseType || item.category, category);
			return {
				title,
				creator,
				category: inferCategoryFromReleaseType(releaseType, category),
				releaseType,
				genre: normalizeGenre(item.genre),
				trackCount: normalizeTrackCount(item.trackCount, releaseType === "single" ? 1 : 1),
				theme: normalizeTheme(item.theme),
				createdAt,
			};
		})
		.filter(Boolean)
		.slice(0, MAX_UPLOADS);
}

function normalizeQueue(rawQueue) {
	if (!Array.isArray(rawQueue)) {
		return [];
	}
	return rawQueue
		.map((entry) => {
			if (typeof entry === "string") {
				const title = cleanText(entry, TITLE_MAX_LEN);
				return title ? { id: makeId(), title, creator: "Unknown creator" } : null;
			}
			if (entry && typeof entry === "object") {
				const title = cleanText(entry.title, TITLE_MAX_LEN);
				if (!title) {
					return null;
				}
				return {
					id: cleanText(entry.id || makeId(), 100),
					title,
					creator: cleanText(entry.creator || "Unknown creator", CREATOR_MAX_LEN),
				};
			}
			return null;
		})
		.filter(Boolean)
		.slice(0, MAX_QUEUE_ITEMS);
}

function normalizeStream(rawStream) {
	const stream = rawStream && typeof rawStream === "object" ? rawStream : {};
	const quality = cleanText(stream.quality || "720p", 10).toLowerCase();
	const mode = cleanText(stream.mode || "public", 20).toLowerCase();
	const source = cleanText(stream.source || "camera", 20).toLowerCase();
	const category = cleanText(stream.category || "music stream", 30).toLowerCase();
	return {
		quality: VALID_STREAM_QUALITY.has(quality) ? quality : "720p",
		mode: VALID_STREAM_MODE.has(mode) ? mode : "public",
		source: VALID_STREAM_SOURCE.has(source) ? source : "camera",
		category: VALID_STREAM_CATEGORIES.has(category) ? category : "music stream",
		isLive: Boolean(stream.isLive),
		scheduledAt: cleanText(stream.scheduledAt || "", 80),
		schedulePreset: cleanText(stream.schedulePreset || "in 1 hour", 40),
	};
}

function normalizeComments(rawComments) {
	if (!Array.isArray(rawComments)) {
		return [];
	}
	return rawComments
		.map((entry) => {
			if (!entry || typeof entry !== "object") {
				return null;
			}
			const text = cleanText(entry.text, 240);
			const author = cleanText(entry.author || "Viewer", CREATOR_MAX_LEN);
			if (!text) {
				return null;
			}
			const reactions = entry.reactions && typeof entry.reactions === "object" ? entry.reactions : {};
			return {
				id: cleanText(entry.id || makeId(), 100),
				streamId: cleanText(entry.streamId || "general", 100),
				author,
				text,
				createdAt: Number(entry.createdAt) || Date.now(),
				userReaction: VALID_REACTIONS.includes(cleanText(entry.userReaction || "", 20))
					? cleanText(entry.userReaction || "", 20)
					: "",
				reactions: {
					like: Number(reactions.like) || 0,
					fire: Number(reactions.fire) || 0,
					love: Number(reactions.love) || 0,
				},
			};
		})
		.filter(Boolean)
		.slice(0, 3000);
}

function normalizeStreamItemState(rawState) {
	if (!rawState || typeof rawState !== "object") {
		return {};
	}
	const normalized = {};
	Object.entries(rawState).forEach(([id, value]) => {
		const streamId = cleanText(id, 100);
		if (!streamId || !value || typeof value !== "object") {
			return;
		}
		const status = cleanText(value.status || "offline", 20).toLowerCase();
		normalized[streamId] = {
			status: ["live", "scheduled", "offline"].includes(status) ? status : "offline",
			viewers: Math.max(0, Number(value.viewers) || 0),
			updatedAt: Number(value.updatedAt) || Date.now(),
			broadcastType: VALID_STREAM_CATEGORIES.has(cleanText(value.broadcastType || "", 30).toLowerCase())
				? cleanText(value.broadcastType || "", 30).toLowerCase()
				: "music stream",
			scheduledAt: cleanText(value.scheduledAt || "", 80),
		};
	});
	return normalized;
}

function ensureStateIntegrity() {
	const validIds = new Set(state.mediaItems.map((item) => item.id));
	const cleanedMap = {};
	Object.entries(state.streamItemState).forEach(([id, val]) => {
		if (validIds.has(id)) {
			cleanedMap[id] = val;
		}
	});
	state.streamItemState = cleanedMap;

	if (!state.selectedStreamId || !validIds.has(state.selectedStreamId)) {
		state.selectedStreamId = state.mediaItems[0] ? state.mediaItems[0].id : "";
	}

	if (!state.comments.length) {
		state.comments = normalizeComments(DEFAULT_COMMENTS);
	}
}

function loadState() {
	state.mediaItems = normalizeMedia(loadJson(STORAGE_KEYS.media, DEFAULT_MEDIA));
	if (!state.mediaItems.length) {
		state.mediaItems = normalizeMedia(DEFAULT_MEDIA);
	}
	state.latestUploads = normalizeUploads(loadJson(STORAGE_KEYS.uploads, DEFAULT_UPLOADS));
	if (!state.latestUploads.length) {
		state.latestUploads = normalizeUploads(DEFAULT_UPLOADS);
	}
	state.queue = normalizeQueue(loadJson(STORAGE_KEYS.queue, []));
	const follows = loadJson(STORAGE_KEYS.follows, {});
	state.follows = follows && typeof follows === "object" ? follows : {};
	state.stream = normalizeStream(loadJson(STORAGE_KEYS.stream, state.stream));
	state.streamItemState = normalizeStreamItemState(loadJson(STORAGE_KEYS.streamItemState, DEFAULT_STREAM_ITEM_STATE));
	state.comments = normalizeComments(loadJson(STORAGE_KEYS.comments, DEFAULT_COMMENTS));
	ensureStateIntegrity();
}

function saveState() {
	safeSetJson(STORAGE_KEYS.media, state.mediaItems.slice(0, MAX_MEDIA_ITEMS));
	safeSetJson(STORAGE_KEYS.uploads, state.latestUploads.slice(0, MAX_UPLOADS));
	safeSetJson(STORAGE_KEYS.queue, state.queue.slice(0, MAX_QUEUE_ITEMS));
	safeSetJson(STORAGE_KEYS.follows, state.follows);
	safeSetJson(STORAGE_KEYS.stream, state.stream);
	safeSetJson(STORAGE_KEYS.streamItemState, state.streamItemState);
	safeSetJson(STORAGE_KEYS.comments, state.comments);
}

function getStreamStatusForItem(item) {
	const entry = getStreamEntry(item);
	return entry.status;
}

function getStreamEntry(item) {
	if (!item) {
		return {
			status: "offline",
			viewers: 0,
			updatedAt: Date.now(),
			broadcastType: "music stream",
			scheduledAt: "",
		};
	}
	const entry = state.streamItemState[item.id];
	if (entry && typeof entry === "object") {
		return {
			status: entry.status,
			viewers: Math.max(0, Number(entry.viewers) || 0),
			updatedAt: Number(entry.updatedAt) || Date.now(),
			broadcastType: VALID_STREAM_CATEGORIES.has(cleanText(entry.broadcastType || "", 30).toLowerCase())
				? cleanText(entry.broadcastType || "", 30).toLowerCase()
				: inferBroadcastType(item),
			scheduledAt: cleanText(entry.scheduledAt || "", 80),
		};
	}
	return {
		status: "offline",
		viewers: 0,
		updatedAt: Date.now(),
		broadcastType: inferBroadcastType(item),
		scheduledAt: "",
	};
}

function getFilteredStreams() {
	const streams = state.mediaItems.filter((item) => {
		const category = item.category;
		return category.includes("music")
			|| category.includes("video")
			|| category.includes("movie")
			|| category.includes("series")
			|| category.includes("podcast")
			|| category.includes("live");
	});
	if (state.streamFilter === "all") {
		return streams;
	}
	return streams.filter((item) => getStreamStatusForItem(item) === state.streamFilter);
}

function renderStreamFilters() {
	if (!els.streamFilterRow) {
		return;
	}
	const filters = ["all", "live", "scheduled", "offline"];
	els.streamFilterRow.innerHTML = filters
		.map((filter) => `<button class="stream-filter-chip ${state.streamFilter === filter ? "active" : ""}" data-stream-filter="${filter}">${escapeHtml(formatLabel(filter))}</button>`)
		.join("");

	Array.from(els.streamFilterRow.querySelectorAll("button[data-stream-filter]")).forEach((button) => {
		button.addEventListener("click", () => {
			state.streamFilter = cleanText(button.dataset.streamFilter || "all", 20);
			renderStreamFilters();
			renderStreamFeed();
		});
	});
}

function updateStreamScreen(item) {
	if (!els.screenTitle || !els.screenMeta || !els.screenStatusBadge || !els.screenSupport) {
		return;
	}
	if (!item) {
		els.screenTitle.textContent = "No stream selected";
		els.screenMeta.textContent = "Select a stream from the feed.";
		els.screenSupport.textContent = "Choose a music release or live broadcast to preview its details here.";
		els.screenStatusBadge.textContent = "OFFLINE";
		els.screenStatusBadge.classList.remove("live", "scheduled");
		return;
	}
	const entry = getStreamEntry(item);
	const status = entry.status;
	els.screenTitle.textContent = item.title;
	els.screenMeta.textContent = `${item.creator} • ${formatLabel(item.releaseType)} • ${getCountLabel(item)} • ${item.views} views`;
	els.screenSupport.textContent = `${formatLabel(entry.broadcastType)} • ${status === "live" ? `${entry.viewers} viewers live now` : status === "scheduled" ? `${entry.viewers} waiting • ${entry.scheduledAt || "Schedule saved"}` : `${formatLabel(item.category)} ready to stream`}`;
	els.screenStatusBadge.textContent = status.toUpperCase();
	els.screenStatusBadge.classList.remove("live", "scheduled");
	if (status === "live") {
		els.screenStatusBadge.classList.add("live");
	}
	if (status === "scheduled") {
		els.screenStatusBadge.classList.add("scheduled");
	}
}

function renderStreamFeed() {
	if (!els.streamFeed) {
		return;
	}
	const filtered = getFilteredStreams();
	if (!filtered.length) {
		els.streamFeed.innerHTML = "<p class='meta'>No streams match this filter.</p>";
		updateStreamScreen(null);
		renderComments();
		return;
	}
	if (!state.selectedStreamId || !filtered.some((item) => item.id === state.selectedStreamId)) {
		state.selectedStreamId = filtered[0].id;
	}
	els.streamFeed.innerHTML = filtered
		.map((item) => {
			const entry = getStreamEntry(item);
			const status = entry.status;
			return `
				<article class="stream-card ${state.selectedStreamId === item.id ? "active" : ""}" data-stream-id="${escapeHtml(item.id)}">
					<div class="stream-card-badges">
						<span class="mini-badge ${escapeHtml(status)}">${escapeHtml(status.toUpperCase())}</span>
						<span class="mini-badge neutral">${escapeHtml(formatLabel(item.releaseType))}</span>
					</div>
					<h4>${escapeHtml(item.title)}</h4>
					<p>${escapeHtml(item.creator)} • ${escapeHtml(formatLabel(entry.broadcastType))}</p>
					<p>${escapeHtml(status === "scheduled" ? entry.scheduledAt || "Scheduled soon" : `${entry.viewers} viewers`)} • ${escapeHtml(getCountLabel(item))}</p>
				</article>
			`;
		})
		.join("");

	Array.from(els.streamFeed.querySelectorAll(".stream-card")).forEach((card) => {
		card.addEventListener("click", () => {
			state.selectedStreamId = cleanText(card.dataset.streamId || "", 100);
			renderStreamFeed();
			applyStreamState();
			renderComments();
		});
	});

	const selected = state.mediaItems.find((item) => item.id === state.selectedStreamId) || filtered[0];
	updateStreamScreen(selected);
}

function renderComments() {
	if (!els.commentsList) {
		return;
	}
	const streamId = state.selectedStreamId || "general";
	const comments = state.comments
		.filter((entry) => entry.streamId === streamId)
		.sort((a, b) => b.createdAt - a.createdAt)
		.slice(0, 80);

	if (!comments.length) {
		els.commentsList.innerHTML = "<p class='meta'>No comments yet. Start the conversation.</p>";
		return;
	}

	els.commentsList.innerHTML = comments
		.map(
			(entry) => `
				<article class="comment-item">
					<p class="author">${escapeHtml(entry.author)}</p>
					<p class="text">${escapeHtml(entry.text)}</p>
					<p class="time">${escapeHtml(formatRelativeTime(entry.createdAt))}</p>
					<div class="reaction-row">
						<button class="reaction-btn ${entry.userReaction === "like" ? "active" : ""}" data-reaction-comment-id="${escapeHtml(entry.id)}" data-reaction-type="like">Like ${entry.reactions.like}</button>
						<button class="reaction-btn ${entry.userReaction === "fire" ? "active" : ""}" data-reaction-comment-id="${escapeHtml(entry.id)}" data-reaction-type="fire">Fire ${entry.reactions.fire}</button>
						<button class="reaction-btn ${entry.userReaction === "love" ? "active" : ""}" data-reaction-comment-id="${escapeHtml(entry.id)}" data-reaction-type="love">Love ${entry.reactions.love}</button>
					</div>
				</article>
			`
		)
		.join("");

	Array.from(els.commentsList.querySelectorAll("button[data-reaction-comment-id]")).forEach((button) => {
		button.addEventListener("click", () => {
			const id = cleanText(button.dataset.reactionCommentId || "", 100);
			const reaction = cleanText(button.dataset.reactionType || "", 20).toLowerCase();
			if (!VALID_REACTIONS.includes(reaction)) {
				return;
			}
			const target = state.comments.find((entry) => entry.id === id);
			if (!target) {
				return;
			}
			if (target.userReaction === reaction) {
				target.reactions[reaction] = Math.max(0, target.reactions[reaction] - 1);
				target.userReaction = "";
			} else {
				if (target.userReaction && target.reactions[target.userReaction] > 0) {
					target.reactions[target.userReaction] -= 1;
				}
				target.userReaction = reaction;
				target.reactions[reaction] += 1;
			}
			saveState();
			renderComments();
		});
	});
}

function applyStreamState() {
	if (!els.streamStatus || !els.streamQuality || !els.streamMode || !els.streamSource || !els.streamCategory || !els.schedulePreset) {
		return;
	}
	const { isLive, quality, mode, source, scheduledAt, category, schedulePreset } = state.stream;
	const selectedItem = state.mediaItems.find((item) => item.id === state.selectedStreamId) || state.mediaItems[0] || null;
	const selectedEntry = getStreamEntry(selectedItem);
	const displayIsLive = isLive || selectedEntry.status === "live";
	const displaySchedule = selectedEntry.scheduledAt || scheduledAt;
	const displayCategory = selectedEntry.broadcastType || category;
	els.streamQuality.value = quality;
	els.streamMode.value = mode;
	els.streamSource.value = source;
	els.streamCategory.value = category;
	els.schedulePreset.value = schedulePreset;
	if (els.liveBadgeLabel) {
		els.liveBadgeLabel.textContent = displayIsLive ? "Live Now" : displaySchedule ? "Scheduled" : "Offline";
	}
	if (els.streamCategoryLabel) {
		els.streamCategoryLabel.textContent = formatLabel(displayCategory);
	}
	if (els.viewerSummary) {
		els.viewerSummary.textContent = displayIsLive
			? `${selectedEntry.viewers} watching`
			: displaySchedule
				? `${selectedEntry.viewers} waiting`
				: "0 waiting";
	}
	if (els.scheduleSummary) {
		els.scheduleSummary.textContent = displaySchedule || "Ready now";
	}
	if (displayIsLive) {
		els.streamStatus.textContent = `Status: Live now • ${formatLabel(displayCategory)} • ${selectedEntry.viewers} viewers`;
		return;
	}
	if (displaySchedule) {
		els.streamStatus.textContent = `Status: Scheduled for ${displaySchedule} • ${formatLabel(displayCategory)}`;
		return;
	}
	els.streamStatus.textContent = `Status: Offline • ${formatLabel(displayCategory)} ready`;
}

function categoryMatches(filter, category) {
	if (filter === "all") {
		return true;
	}
	if (filter === "trending") {
		return true;
	}
	if (filter === "advertise") {
		return category.includes("product") || category.includes("graphics") || category.includes("video");
	}
	if (filter === "videos") {
		return category.includes("movie") || category.includes("video");
	}
	if (filter === "marketplace") {
		return category.includes("product");
	}
	if (filter === "movie") {
		return category.includes("movie");
	}
	if (filter === "live session") {
		return category.includes("live");
	}
	if (filter === "podcast") {
		return category.includes("podcast");
	}
	return category.includes(filter);
}

function matchesFilters(item) {
	let bySidebar = categoryMatches(state.selectedCategory, item.category);
	if (state.selectedCategory === "favorites") {
		bySidebar = Boolean(state.follows[item.creator]);
	}
	if (state.selectedCategory === "history") {
		bySidebar = state.queue.some((queued) => queued.title === item.title);
	}
	if (state.selectedCategory === "recent") {
		const recentTitles = new Set(state.latestUploads.slice(0, RECENT_WINDOW).map((upload) => upload.title));
		bySidebar = recentTitles.has(item.title);
	}
	if (state.selectedCategory === "upload") {
		bySidebar = true;
	}
	const byChip = state.selectedChip === "all"
		|| categoryMatches(state.selectedChip, item.category)
		|| item.releaseType === state.selectedChip;
	const q = cleanText(state.query, 120).toLowerCase();
	const bySearch = !q || `${item.title} ${item.creator} ${item.category} ${item.releaseType} ${item.genre} ${item.theme}`.toLowerCase().includes(q);

	return bySidebar && byChip && bySearch;
}

function getFilteredMedia() {
	return state.mediaItems.filter(matchesFilters);
}

function renderStats() {
	if (!els.statsStrip) {
		return;
	}
	els.statsStrip.innerHTML = stats
		.map(
			([label, value]) => `
				<article class="stat-card">
					<p>${escapeHtml(label)}</p>
					<strong>${escapeHtml(value)}</strong>
				</article>
			`
		)
		.join("");
}

function renderChips() {
	if (!els.chips) {
		return;
	}
	const chipValues = ["all", "music", "single", "ep", "album", "mixtape", "live session", "podcast", "music video", "movie", "series"];
	els.chips.innerHTML = chipValues
		.map(
			(chip) =>
				`<button class="chip ${state.selectedChip === chip ? "active" : ""}" data-chip="${escapeHtml(chip)}">${escapeHtml(formatLabel(chip))}</button>`
		)
		.join("");

	Array.from(els.chips.querySelectorAll(".chip")).forEach((chipEl) => {
		chipEl.addEventListener("click", () => {
			state.selectedChip = cleanText(chipEl.dataset.chip || "all", 20);
			renderChips();
			renderMedia();
		});
	});
}

function renderMedia() {
	if (!els.trendingGrid) {
		return;
	}
	const filtered = getFilteredMedia();
	if (!filtered.length) {
		els.trendingGrid.innerHTML = "<p class='meta'>No content matches your filters.</p>";
		return;
	}

	els.trendingGrid.innerHTML = filtered
		.map(
			(item) => `
				<article class="media-card">
					<div class="media-art" style="background:${escapeHtml(item.palette)}">
						<div class="tag-row">
							<span class="tag">${escapeHtml(formatLabel(item.category))}</span>
							<span class="tag alt">${escapeHtml(formatLabel(item.releaseType))}</span>
						</div>
					</div>
					<div class="media-info">
						<p class="media-title">${escapeHtml(item.title)}</p>
						<p class="meta">${escapeHtml(item.creator)} - ${escapeHtml(item.genre || "other")} - ${escapeHtml(item.views)} views</p>
						<p class="meta release-meta">${escapeHtml(getCountLabel(item))} • ${escapeHtml(formatLabel(item.theme))}</p>
						<div class="card-actions">
							<button data-action="play" data-id="${escapeHtml(item.id)}">${item.category === "movie" || item.category === "series" || item.category === "videos" || item.category === "music video" ? "Watch" : "Play"}</button>
							<button data-action="queue" data-id="${escapeHtml(item.id)}">Queue</button>
						</div>
					</div>
				</article>
			`
		)
		.join("");

	Array.from(els.trendingGrid.querySelectorAll("button")).forEach((btn) => {
		btn.addEventListener("click", () => {
			const item = state.mediaItems.find((m) => m.id === btn.dataset.id);
			if (!item) {
				return;
			}

			if (btn.dataset.action === "play" && els.nowPlayingText) {
				els.nowPlayingText.textContent = `Now playing: ${item.title} by ${item.creator}`;
				showToast(`Playing ${item.title}`);
			}

			if (btn.dataset.action === "queue") {
				state.queue.unshift({ id: makeId(), title: item.title, creator: item.creator });
				state.queue = state.queue.slice(0, MAX_QUEUE_ITEMS);
				saveState();
				renderQueue();
				showToast(`${item.title} added to queue`);
			}
		});
	});
}

function renderUploads() {
	if (!els.latestStrip) {
		return;
	}
	const hasMore = state.latestUploads.length > state.uploadDisplayLimit;
	const uploadsToRender = hasMore ? state.latestUploads.slice(0, state.uploadDisplayLimit) : state.latestUploads;

	els.latestStrip.innerHTML = uploadsToRender
		.map(
			(item) => `
				<article class="upload-item">
					<p>${escapeHtml(item.title)}</p>
					<p class="creator">${escapeHtml(item.creator)} • ${escapeHtml(formatLabel(item.releaseType))} • ${escapeHtml(getCountLabel(item))}</p>
					<p class="meta">${escapeHtml(formatLabel(item.category))} • ${escapeHtml(formatLabel(item.theme))}</p>
					<p class="time">${escapeHtml(formatRelativeTime(item.createdAt))}</p>
				</article>
			`
		)
		.join("");

	if (els.toggleUploads) {
		if (state.latestUploads.length <= 30) {
			els.toggleUploads.style.visibility = "hidden";
		} else {
			els.toggleUploads.style.visibility = "visible";
			els.toggleUploads.textContent = hasMore
				? `Show More (${Math.max(state.latestUploads.length - state.uploadDisplayLimit, 0)} left)`
				: "Show Less";
		}
	}
}

function renderPromotions() {
	if (!els.promoGrid) {
		return;
	}
	els.promoGrid.innerHTML = promotions
		.map(
			(item, index) => `
				<article class="promo-card">
					<h4>${escapeHtml(item.title)}</h4>
					<p>${escapeHtml(item.desc)}</p>
					<button class="btn-outline" data-promo-index="${index}">Learn More</button>
				</article>
			`
		)
		.join("");

	Array.from(els.promoGrid.querySelectorAll("button[data-promo-index]")).forEach((button) => {
		button.addEventListener("click", () => {
			const index = Number(button.dataset.promoIndex || 0);
			const promo = promotions[index];
			if (promo) {
				showToast(`${promo.title} opened`);
			}
		});
	});
}

function renderCreators() {
	if (!els.creatorsList) {
		return;
	}
	els.creatorsList.innerHTML = creators
		.map((creator) => {
			const initials = creator.name
				.split(" ")
				.map((part) => part[0])
				.join("")
				.slice(0, 2)
				.toUpperCase();
			const following = Boolean(state.follows[creator.name]);
			return `
				<article class="creator-item">
					<span class="creator-avatar">${escapeHtml(initials)}</span>
					<div>
						<strong>${escapeHtml(creator.name)}</strong>
						<p class="meta">${escapeHtml(creator.role)}</p>
					</div>
					<button data-creator="${escapeHtml(creator.name)}">${following ? "Following" : "Follow"}</button>
				</article>
			`;
		})
		.join("");

	Array.from(els.creatorsList.querySelectorAll("button[data-creator]")).forEach((btn) => {
		btn.addEventListener("click", () => {
			const name = cleanText(btn.dataset.creator || "", CREATOR_MAX_LEN);
			if (!name) {
				return;
			}
			state.follows[name] = !state.follows[name];
			saveState();
			renderCreators();
			showToast(`${state.follows[name] ? "Following" : "Unfollowed"} ${name}`);
		});
	});
}

function renderPlaylist() {
	if (!els.playlistList) {
		return;
	}
	els.playlistList.innerHTML = playlist
		.map((item) => `<li>${escapeHtml(item)} <span class="meta">50 songs</span></li>`)
		.join("");
}

function renderQueue() {
	if (!els.queueList) {
		return;
	}
	const queue = state.queue.slice(0, 8);
	if (!queue.length) {
		els.queueList.innerHTML = "<li class='meta'>Queue is empty. Add a track.</li>";
		return;
	}
	els.queueList.innerHTML = queue
		.map(
			(item) => `
				<li class="queue-item">
					<span>${escapeHtml(item.title)}</span>
					<button data-remove-queue="${escapeHtml(item.id)}">Remove</button>
				</li>
			`
		)
		.join("");

	Array.from(els.queueList.querySelectorAll("button[data-remove-queue]")).forEach((button) => {
		button.addEventListener("click", () => {
			const removeId = cleanText(button.dataset.removeQueue || "", 100);
			state.queue = state.queue.filter((queued) => queued.id !== removeId);
			saveState();
			renderQueue();
			showToast("Removed from queue");
		});
	});
}

function addSafeListener(element, eventName, handler) {
	if (!element) {
		return;
	}
	element.addEventListener(eventName, handler);
}

function registerGlobalErrorHandlers() {
	window.addEventListener("error", () => {
		showToast("Something went wrong. Recovered safely.");
	});
	window.addEventListener("unhandledrejection", () => {
		showToast("An async action failed. Please retry.");
	});
}

function bindEvents() {
	addSafeListener(els.menuToggle, "click", () => {
		if (els.sidebar) {
			els.sidebar.classList.toggle("open");
		}
	});

	addSafeListener(document, "click", (event) => {
		if (!els.sidebar || !els.menuToggle) {
			return;
		}
		if (window.innerWidth > 980 || !els.sidebar.classList.contains("open")) {
			return;
		}
		if (!els.sidebar.contains(event.target) && event.target !== els.menuToggle) {
			els.sidebar.classList.remove("open");
		}
	});

	addSafeListener(els.searchInput, "input", () => {
		state.query = cleanText(els.searchInput.value, 120);
		renderMedia();
	});

	els.menuItems.forEach((menuItem) => {
		addSafeListener(menuItem, "click", () => {
			els.menuItems.forEach((el) => el.classList.remove("active"));
			menuItem.classList.add("active");
			state.selectedCategory = cleanText(menuItem.dataset.section || "all", 20);
			renderMedia();
		});
	});

	addSafeListener(els.clearFilters, "click", () => {
		state.query = "";
		state.selectedCategory = "all";
		state.selectedChip = "all";
		if (els.searchInput) {
			els.searchInput.value = "";
		}
		els.menuItems.forEach((el) => {
			el.classList.toggle("active", el.dataset.section === "all");
		});
		renderChips();
		renderMedia();
	});

	const openUpload = () => {
		if (!els.uploadDialog) {
			return;
		}
		if (typeof els.uploadDialog.showModal === "function") {
			els.uploadDialog.showModal();
			return;
		}
		showToast("Upload dialog is not supported in this browser.");
	};

	addSafeListener(els.uploadOpen, "click", openUpload);
	addSafeListener(els.createBtn, "click", openUpload);

	addSafeListener(els.uploadMediaFiles, "change", () => {
		if (!els.uploadMediaFiles || !els.uploadMediaFiles.files) {
			return;
		}
		appendPendingFiles(Array.from(els.uploadMediaFiles.files));
		const added = els.uploadMediaFiles.files.length;
		els.uploadMediaFiles.value = "";
		if (added > 0) {
			showToast(`${added} file${added === 1 ? "" : "s"} added to upload queue`);
		}
	});

	addSafeListener(els.clearPendingFiles, "click", () => {
		clearPendingFilesQueue();
		showToast("Cleared selected files");
	});

	addSafeListener(els.uploadForm, "submit", (event) => {
		event.preventDefault();
		const formData = new FormData(els.uploadForm);
		const title = cleanText(formData.get("title"), TITLE_MAX_LEN);
		const creator = cleanText(formData.get("creator"), CREATOR_MAX_LEN);
		const baseCategory = normalizeCategory(formData.get("category"));
		const releaseType = normalizeReleaseType(formData.get("releaseType"), baseCategory);
		const genre = normalizeGenre(formData.get("genre"));
		const customCategory = normalizeCategory(formData.get("customCategory"));
		const category = customCategory && customCategory !== "other"
			? customCategory
			: inferCategoryFromReleaseType(releaseType, baseCategory);
		const theme = normalizeTheme(formData.get("theme"));
		const enteredTrackCount = normalizeTrackCount(formData.get("trackCount"), releaseType === "single" ? 1 : 1);
		const bulkRaw = String(formData.get("bulkTitles") || "").slice(0, 20000);
		const bulkTitles = bulkRaw
			.split(/\r?\n/)
			.map((line) => cleanText(line, TITLE_MAX_LEN))
			.filter((line) => line.length >= 3);
		const selectedFiles = [...state.pendingFiles];
		const fileTitles = selectedFiles
			.map((file) => titleFromFileName(file.name))
			.filter((name) => name.length >= 3);
		const titlesToUpload = [title, ...bulkTitles, ...fileTitles].filter(Boolean);
		const uniqueTitles = Array.from(new Set(titlesToUpload));

		if (!uniqueTitles.length) {
			showToast("Add a title, bulk titles, or select media files.");
			return;
		}
		if (creator.length < 2) {
			showToast("Creator name must be at least 2 characters.");
			return;
		}
		if (uniqueTitles.length > 200) {
			showToast("Please upload up to 200 items per batch.");
			return;
		}
		if (releaseType === "single" && uniqueTitles.length > 1) {
			showToast("Singles can only publish one title at a time. Choose EP, album, or mixtape for batches.");
			return;
		}

		const trackCount = releaseType === "single"
			? 1
			: Math.max(enteredTrackCount, uniqueTitles.length);

		let addedCount = 0;
		const start = Date.now();
		uniqueTitles.forEach((uploadTitle, index) => {
			const now = start + index;
			state.latestUploads.unshift({
				title: uploadTitle,
				creator,
				category,
				releaseType,
				genre,
				trackCount,
				theme,
				createdAt: now,
			});
			state.mediaItems.unshift({
				id: makeId(),
				title: uploadTitle,
				creator,
				category,
				releaseType,
				genre,
				trackCount,
				theme,
				views: "0",
				palette: paletteFromTheme(theme),
				createdAt: now,
			});
			addedCount += 1;
		});
		state.latestUploads = state.latestUploads.slice(0, MAX_UPLOADS);
		state.mediaItems = state.mediaItems.slice(0, MAX_MEDIA_ITEMS);

		renderUploads();
		renderMedia();
		saveState();
		if (els.uploadDialog && typeof els.uploadDialog.close === "function") {
			els.uploadDialog.close();
		}
		els.uploadForm.reset();
		clearPendingFilesQueue();
		showToast(`Published ${addedCount} ${formatLabel(releaseType)} ${addedCount === 1 ? "release" : "items"}`);
	});

	addSafeListener(els.uploadDialog, "click", (event) => {
		if (event.target === els.uploadDialog && typeof els.uploadDialog.close === "function") {
			els.uploadDialog.close();
		}
	});

	addSafeListener(els.uploadBack, "click", () => {
		if (els.uploadDialog && typeof els.uploadDialog.close === "function") {
			els.uploadDialog.close();
		}
		showToast("Returned to dashboard");
	});

	addSafeListener(els.uploadCancel, "click", () => {
		if (els.uploadDialog && typeof els.uploadDialog.close === "function") {
			els.uploadDialog.close();
		}
		if (els.uploadForm) {
			els.uploadForm.reset();
		}
		clearPendingFilesQueue();
		showToast("Upload draft cleared");
	});

	addSafeListener(els.playFeatured, "click", () => {
		const featured = state.mediaItems[0];
		if (!featured || !els.nowPlayingText) {
			return;
		}
		els.nowPlayingText.textContent = `Now playing: ${featured.title} by ${featured.creator}`;
		showToast(`Playing ${featured.title}`);
	});

	addSafeListener(els.queueRandom, "click", () => {
		if (!state.mediaItems.length) {
			showToast("No tracks available to queue.");
			return;
		}
		const index = Math.floor(Math.random() * state.mediaItems.length);
		const randomItem = state.mediaItems[index];
		state.queue.unshift({ id: makeId(), title: randomItem.title, creator: randomItem.creator });
		state.queue = state.queue.slice(0, MAX_QUEUE_ITEMS);
		saveState();
		renderQueue();
		showToast(`${randomItem.title} queued`);
	});

	addSafeListener(els.profileBtn, "click", () => {
		showToast("Profile opened: John Doe (Free Plan)");
	});

	addSafeListener(els.joinSpotlight, "click", () => {
		showToast("Spotlight request sent");
	});

	addSafeListener(els.clearQueue, "click", () => {
		state.queue = [];
		saveState();
		renderQueue();
		showToast("Queue cleared");
	});

	addSafeListener(els.communityShare, "click", () => {
		showToast("Creator support info opened");
	});

	if (els.streamQuality && els.streamMode && els.streamSource && els.streamCategory && els.schedulePreset) {
		const updateStreamPrefs = () => {
			state.stream.quality = VALID_STREAM_QUALITY.has(els.streamQuality.value.toLowerCase())
				? els.streamQuality.value.toLowerCase()
				: "720p";
			state.stream.mode = VALID_STREAM_MODE.has(els.streamMode.value.toLowerCase())
				? els.streamMode.value.toLowerCase()
				: "public";
			state.stream.source = VALID_STREAM_SOURCE.has(els.streamSource.value.toLowerCase())
				? els.streamSource.value.toLowerCase()
				: "camera";
			state.stream.category = VALID_STREAM_CATEGORIES.has(els.streamCategory.value.toLowerCase())
				? els.streamCategory.value.toLowerCase()
				: "music stream";
			state.stream.schedulePreset = cleanText(els.schedulePreset.value || "in 1 hour", 40);
			saveState();
			applyStreamState();
		};
		addSafeListener(els.streamQuality, "change", updateStreamPrefs);
		addSafeListener(els.streamMode, "change", updateStreamPrefs);
		addSafeListener(els.streamSource, "change", updateStreamPrefs);
		addSafeListener(els.streamCategory, "change", updateStreamPrefs);
		addSafeListener(els.schedulePreset, "change", updateStreamPrefs);
	}

	addSafeListener(els.goLiveBtn, "click", () => {
		state.stream.isLive = true;
		state.stream.scheduledAt = "";
		if (state.selectedStreamId) {
			const currentItem = state.mediaItems.find((item) => item.id === state.selectedStreamId);
			state.streamItemState[state.selectedStreamId] = {
				status: "live",
				viewers: Math.max(seedViewerCount(currentItem, 1.2), Number((state.streamItemState[state.selectedStreamId] || {}).viewers) || 0, 24),
				updatedAt: Date.now(),
				broadcastType: state.stream.category,
				scheduledAt: "",
			};
		}
		saveState();
		applyStreamState();
		renderStreamFeed();
		showToast("You are now live");
	});

	addSafeListener(els.scheduleBtn, "click", () => {
		state.stream.isLive = false;
		state.stream.scheduledAt = formatLabel(state.stream.schedulePreset || "in 1 hour");
		if (state.selectedStreamId) {
			const currentItem = state.mediaItems.find((item) => item.id === state.selectedStreamId);
			state.streamItemState[state.selectedStreamId] = {
				status: "scheduled",
				viewers: Math.max(seedViewerCount(currentItem, 0.35), Number((state.streamItemState[state.selectedStreamId] || {}).viewers) || 0, 8),
				updatedAt: Date.now(),
				broadcastType: state.stream.category,
				scheduledAt: state.stream.scheduledAt,
			};
		}
		saveState();
		applyStreamState();
		renderStreamFeed();
		showToast(`Stream scheduled for ${state.stream.scheduledAt}`);
	});

	addSafeListener(els.stopLiveBtn, "click", () => {
		state.stream.isLive = false;
		state.stream.scheduledAt = "";
		if (state.selectedStreamId) {
			state.streamItemState[state.selectedStreamId] = {
				status: "offline",
				viewers: 0,
				updatedAt: Date.now(),
				broadcastType: state.stream.category,
				scheduledAt: "",
			};
		}
		saveState();
		applyStreamState();
		renderStreamFeed();
		showToast("Stream stopped");
	});

	addSafeListener(els.commentForm, "submit", (event) => {
		event.preventDefault();
		if (!els.commentInput) {
			return;
		}
		const text = cleanText(els.commentInput.value, 240);
		if (!text) {
			showToast("Comment cannot be empty.");
			return;
		}
		const streamId = state.selectedStreamId || "general";
		state.comments.unshift({
			id: makeId(),
			streamId,
			author: "You",
			text,
			createdAt: Date.now(),
			userReaction: "",
			reactions: { like: 0, fire: 0, love: 0 },
		});
		state.comments = state.comments.slice(0, 3000);
		saveState();
		els.commentInput.value = "";
		renderComments();
		showToast("Comment posted");
	});

	addSafeListener(els.toggleUploads, "click", () => {
		if (state.latestUploads.length <= 30) {
			return;
		}
		if (state.uploadDisplayLimit >= state.latestUploads.length) {
			state.uploadDisplayLimit = 30;
		} else {
			state.uploadDisplayLimit += 30;
		}
		renderUploads();
	});

	const accents = [
		["#1f71ff", "#00d2ff"],
		["#1ecb7f", "#00a4d9"],
		["#ff784f", "#ff2f7f"],
	];
	let accentIndex = 0;
	addSafeListener(els.themeCycle, "click", () => {
		accentIndex = (accentIndex + 1) % accents.length;
		const [a, b] = accents[accentIndex];
		document.documentElement.style.setProperty("--accent", a);
		document.documentElement.style.setProperty("--accent-2", b);
		showToast("Accent updated");
	});
}

function init() {
	registerGlobalErrorHandlers();
	loadState();
	renderStats();
	renderChips();
	renderMedia();
	renderUploads();
	renderPromotions();
	renderCreators();
	renderPlaylist();
	renderQueue();
	applyStreamState();
	renderStreamFilters();
	renderStreamFeed();
	renderComments();
	renderPendingFiles();
	bindEvents();
}

init();
