import React from 'react'
import { usePlaylistViewModel } from './usePlaylistViewModel';
import { Player } from '@/app/lib/player/Player';
import { Playlist } from '@/app/lib/api/Playlist';

export default function PlaylistView({ playlistId, player, playlist }: { playlistId: number, player: Player, playlist: Playlist}) {
    const { title, description, tracks, remove, playAll, play, move, edit } = usePlaylistViewModel(playlistId, player, playlist!);

  return (
    <div>
        <p>Playlist: {title}</p>
        <button onClick={() => playAll()}>Play All</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Date added</th>
                    <th>Time</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tracks.map(t => (
                    <tr key={t.title}>
                        <td>{t.title}</td>
                        <td>{t.artist}</td>
                        <td>{t.album}</td>
                        <td>{t.dateAdded}</td>
                        <td>{t.duration}</td>
                        <td>
                            <button onClick={() => play(t)}>Play</button>
                            <button onClick={() => remove(t)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
