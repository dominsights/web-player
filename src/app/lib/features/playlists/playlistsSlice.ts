import {Playlist} from "@/app/lib/api/playlist";
import {createAppSlice} from "@/app/lib/features/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {Track} from "@/app/lib/api/Track";

// should come from API
const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);
const track3 = new Track("Back to Black", "Amy Winehouse", "Back to Black", new Date(2006, 1, 1), 60 * 3);
const track4 = new Track("Love is the Way", "Thee Sacred Souls", "Love is the Way", new Date(2022, 1, 1), 60 * 5);

const playlists: Playlist[] = [
    { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2]},
    { id: 2, title: "Soul Revival", description: "Soul for concentration", tracks: [track3, track4]}
]
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