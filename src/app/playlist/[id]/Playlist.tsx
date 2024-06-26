import React from 'react'
import {usePlaylist} from './usePlaylist';
import {Playlist} from "@/app/lib/features/playlists/playlist";
import {Player} from "@/app/lib/features/player/Player";

export default function Playlist({playlistId, player, fetchPlaylist}: {
    playlistId: number,
    player: Player,
    fetchPlaylist: (id: number) => Promise<Playlist | undefined>
}) {
    const {
        playAll,
        play,
        removeTrack,
        playlist
    } = usePlaylist(playlistId, player, fetchPlaylist);

    return (
        <main>
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
                            <button onClick={() => removeTrack(t)}>Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>)
}
