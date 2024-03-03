import React from 'react'
import { PlaylistViewModel } from './PlaylistViewModel'

export default function PlaylistView({viewModel}: { viewModel: PlaylistViewModel}) {
  return (
    <div>
        <p>Playlist: {viewModel.title}</p>
        <button onClick={() => viewModel.playAll()}>Play All</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Date added</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {viewModel.tracks.map(t => (
                    <tr key={t.title}>
                        <td>{t.title}</td>
                        <td>{t.artist}</td>
                        <td>{t.album}</td>
                        <td>{t.dateAdded}</td>
                        <td>{t.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
