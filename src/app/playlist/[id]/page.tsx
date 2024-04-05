'use client'
import { useParams } from 'next/navigation'
import Playlist from './Playlist';
import { Player } from '@/app/lib/features/player/Player';
import { getPlaylistById } from '@/app/lib/features/playlists/playlists';

export default function Page() {
    const { id } = useParams();
    const player = new Player();

    return (
        <Playlist
            playlistId={+id}
            player={player}
            fetchPlaylist={getPlaylistById}
        />
    );
}