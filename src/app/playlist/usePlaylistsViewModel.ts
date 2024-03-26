import {useState} from "react";
import {Playlist} from "@/app/lib/api/playlist";

export const usePlaylistsViewModel = () => {
    const [ playlists, setPlaylists ] = useState<Playlist[]>([]);

    const add = (playlist: Playlist) => {
        setPlaylists(prevState => [playlist, ...prevState])
    }

    return { playlists, add };
}