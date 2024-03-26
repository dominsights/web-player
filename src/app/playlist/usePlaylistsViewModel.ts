import {Playlist} from "@/app/lib/api/playlist";
import { add as addPlaylist, selectPlaylists } from "@/app/lib/features/playlists/playlistsSlice"
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";

export const usePlaylistsViewModel = () => {
    const dispatch = useAppDispatch();
    const playlists = useAppSelector(selectPlaylists);

    const add = (playlist: Playlist) => {
        dispatch(addPlaylist(playlist));
    }

    return { playlists, add };
}