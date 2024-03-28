import {formatDate, secondsToTime} from "@/app/lib/api/Track";

export const track1 = {
    title: "7empest",
    artist: "TOOL",
    album: "Fear Inoculum",
    dateAdded: formatDate(new Date(2024, 3, 2)),
    duration: secondsToTime(60 * 3)
};

export const track2 = {
    title: "Without Walls",
    artist: "IQ",
    album: "The Road of Bones",
    dateAdded: formatDate(new Date(2024, 3, 2)),
    duration: secondsToTime(60 * 5)
};

const track3 = {
    title: "Back to Black",
    artist: "Amy Winehouse",
    album: "Back to Black",
    dateAdded: formatDate(new Date(2006, 1, 1)),
    duration: secondsToTime(60 * 3)
};

const track4 = {
    title: "Love is the Way",
    artist: "Thee Sacred Souls",
    album: "Love is the Way",
    dateAdded: formatDate(new Date(2022, 1, 1)),
    duration: secondsToTime(60 * 5)
};

export const playlists = [
    { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2] },
    { id: 2, title: "Soul Revival", description: "Soul for concentration", tracks: [track3, track4] }
];