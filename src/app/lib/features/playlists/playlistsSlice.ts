import {Playlist} from "@/app/lib/api/playlist";
import {createAppSlice} from "@/app/lib/features/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {secondsToTime, Track} from "@/app/lib/api/Track";

// should come from API
const track1 = {
    title: "7empest",
    artist: "TOOL",
    album: "Fear Inoculum",
    dateAdded: new Date(2024, 3, 2).toISOString(),
    duration: secondsToTime(60 * 3)
};

const track2 = {
    title: "Without Walls",
    artist: "IQ",
    album: "The Road of Bones",
    dateAdded: new Date(2024, 3, 2).toISOString(),
    duration: secondsToTime(60 * 5)
};

const track3 = {
    title: "Back to Black",
    artist: "Amy Winehouse",
    album: "Back to Black",
    dateAdded: new Date(2006, 1, 1).toISOString(),
    duration: secondsToTime(60 * 3)
};

const track4 = {
    title: "Love is the Way",
    artist: "Thee Sacred Souls",
    album: "Love is the Way",
    dateAdded: new Date(2022, 1, 1).toISOString(),
    duration: secondsToTime(60 * 5)
};

const playlists = [
    { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2] },
    { id: 2, title: "Soul Revival", description: "Soul for concentration", tracks: [track3, track4] }
];
// ends should come from API

export interface PlaylistsSliceState {
    playlists: Playlist[]
}

const initialState: PlaylistsSliceState = {
    playlists: playlists
}

export const playlistsSlice = createAppSlice({
    name: "playlists",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action: PayloadAction<Playlist>) => {
            state.playlists = [...state.playlists, action.payload]
        })
    }),
    selectors: {
        selectPlaylists: (state) => state.playlists
    }
});

export const { add } = playlistsSlice.actions;

export const { selectPlaylists } = playlistsSlice.selectors;