'use client'
import { useParams } from 'next/navigation'
import PlaylistView from './PlaylistView';
import { Player } from '@/app/lib/player/Player';
import { getPlaylistById } from '@/app/lib/api/playlists';
import {useEffect, useState} from "react";
import {Playlist} from "@/app/lib/api/Playlist";

export default function Page() {
    const { id } = useParams();
    const player = new Player();

    const [playlist, setPlaylist] = useState<Playlist>();

    useEffect(() => {
        getPlaylistById(+id)
            .then(data => {
                if(data) {
                    setPlaylist(data)
                }
            });

    }, [id])

    if(!playlist) {
        return <div>Playlist not found!</div>
    }

    return (
        <PlaylistView
            playlistId={+id}
            player={player}
            playlist={playlist}
        />
    );
}