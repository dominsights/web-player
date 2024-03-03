'use client'
import { useParams } from 'next/navigation'
import { PlaylistViewModel } from './PlaylistViewModel';
import PlaylistView from './PlaylistView';
import { Player } from '@/app/lib/player/Player';
import { getPlaylistById } from '@/app/lib/api/playlists';
import { useEffect, useState } from 'react';
import { Playlist } from '@/app/lib/api/Playlist';

export default function Page() {
    const { id } = useParams();

    const [playlist, setPlaylist] = useState<Playlist>();

    useEffect(() => {
        getPlaylistById(+id)
        .then(data => {
            if(data) {
                setPlaylist(data)
            }
        });
        
    }, [id])

    const player = new Player();

    if(!playlist) {
        return <div>Playlist not found!</div>
    }

    const playlistVM = new PlaylistViewModel(playlist.title, playlist.description, playlist.tracks, player);
    return (<PlaylistView viewModel={playlistVM}></PlaylistView>)
}