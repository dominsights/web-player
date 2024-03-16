'use client'
import { useParams } from 'next/navigation'
import PlaylistView from './PlaylistView';
import { Player } from '@/app/lib/player/Player';
import { getPlaylistById } from '@/app/lib/api/playlists';

export default function Page() {
    const { id } = useParams();
    const player = new Player();

    return (
        <PlaylistView
            playlistId={+id}
            player={player}
            fetchPlaylist={getPlaylistById}
        />
    );
}