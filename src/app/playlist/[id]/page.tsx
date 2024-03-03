'use client'
import { useParams } from 'next/navigation'
import { PlaylistViewModel } from './PlaylistViewModel';
import PlaylistView from './PlaylistView';
import { Player } from '@/app/lib/player/Player';
import { getPlaylistById } from '@/app/lib/api/playlists';

export default function Page() {
    const { id } = useParams();
    const playlist = getPlaylistById(+id)!;
    const player = new Player();

    const playlistVM = new PlaylistViewModel(playlist?.title, playlist?.description, playlist?.tracks, player);
    
    return (<PlaylistView viewModel={playlistVM}></PlaylistView>)
        
}