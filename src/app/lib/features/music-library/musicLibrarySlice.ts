import {createAppSlice} from "@/app/lib/features/createAppSlice";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {fetchMusics} from "@/app/lib/features/music-library/musicLibraryAPI";

export type Music = {
    name: string;
}

export interface MusicLibraryState {
    musics: Music[]
}

const initialState: MusicLibraryState = {
    musics: []
}

export const fetchMusicAsync = createAsyncThunk(
    'musicLibrary/fetchMusics',
    async () => {
        const response = await fetchMusics();
        return response.data;
    }
)

export const musicLibrarySlice = createAppSlice({
    name: "music-library",
    initialState,
    reducers: (create) => ({
        add: create.reducer((state, action: PayloadAction<Music>) => {
            state.musics = [...state.musics, action.payload]
        }),
        remove: create.reducer((state, action: PayloadAction<Music>) => {
            state.musics = state.musics.filter(t => t.name !== action.payload.name)
        })
    }),
    selectors: {
        selectMusics: (state) => state.musics
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMusicAsync.fulfilled, (state, action) => {
            state.musics = action.payload;
        })
    },
});

export const { add, remove } = musicLibrarySlice.actions;

export const { selectMusics } = musicLibrarySlice.selectors;
