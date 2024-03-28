import {Playlist} from "@/app/lib/api/playlist";
import {createAppSlice} from "@/app/lib/features/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import { playlists } from '../../mocks/mockData';

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