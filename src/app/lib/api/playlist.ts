import { Track } from "./Track";

// export class Playlist {
//     id: number;
//     title: string;
//     description: string;
//     tracks: Track[];
//
//     constructor(id: number, title: string, description: string, tracks: Track[]) {
//         this.id = id;
//         this.title = title;
//         this.tracks = tracks;
//         this.description = description;
//     }
// }

export type Playlist = {
    id: number;
    title: string;
    description: string;
    tracks: Track[];
}

function remove(playlist: Playlist, track: Track): Playlist {
    const updatedTracks = playlist.tracks.filter(t => t !== track);
    return { id: playlist.id, title: playlist.title, description: playlist.description, tracks: updatedTracks} ;
}

function move(playlist: Playlist, track: Track, newPosition: number): Playlist {
    const index = playlist.tracks.indexOf(track);
    if (index === -1) {
        return playlist;
    }
    const updatedTracks = [...playlist.tracks];
    const removed = updatedTracks.splice(index, 1);
    updatedTracks.splice(newPosition - 1, 0, ...removed);
    return { id: playlist.id, title: playlist.title, description: playlist.description, tracks: updatedTracks} ;
}

function edit(playlist: Playlist, newTitle: string, newDescription: string): Playlist {
    return { id: playlist.id, title: newTitle, description: newDescription, tracks: playlist.tracks} ;
}

export { remove, move, edit }
