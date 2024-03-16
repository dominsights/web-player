import React from 'react'
import {usePlaylistViewModel} from './usePlaylistViewModel';
import {Player} from '@/app/lib/player/Player';
import {Playlist} from '@/app/lib/api/Playlist';

export default function PlaylistView({playlistId, player, fetchPlaylist}: {
    playlistId: number,
    player: Player,
    fetchPlaylist: (id: number) => Promise<Playlist | undefined>
}) {
    const {
        playAll,
        play,
        playlist
    } = usePlaylistViewModel(playlistId, player, fetchPlaylist);

    return (
        <div>
            <p>Playlist: {playlist?.title}</p>
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
                {playlist?.tracks.map(t => (
                    <tr key={t.title}>
                        <td>{t.title}</td>
                        <td>{t.artist}</td>
                        <td>{t.album}</td>
                        <td>{t.dateAdded}</td>
                        <td>{t.duration}</td>
                        <td>
                            <button onClick={() => play(t)}>Play</button>
                            <button onClick={() => playlist?.removeTrack(t)}>Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)
}