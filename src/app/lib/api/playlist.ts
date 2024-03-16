import { Track } from "./Track";

export class Playlist {
    id: number;
    title: string;
    description: string;
    tracks: Track[];

    constructor(id: number, title: string, description: string, tracks: Track[]) {
        this.id = id;
        this.title = title;
        this.tracks = tracks;
        this.description = description;
    }


}

function remove(playlist: Playlist, track: Track): Playlist {
    const updatedTracks = playlist.tracks.filter(t => t !== track);
    return new Playlist(playlist.id, playlist.title, playlist.description, updatedTracks);
}

function move(playlist: Playlist, track: Track, newPosition: number): Playlist {
    const index = playlist.tracks.indexOf(track);
    if (index === -1) {
        return playlist;
    }
    const updatedTracks = [...playlist.tracks];
    const removed = updatedTracks.splice(index, 1);
    updatedTracks.splice(newPosition - 1, 0, ...removed);
    return new Playlist(playlist.id, playlist.title, playlist.description, updatedTracks);
}

function edit(playlist: Playlist, newTitle: string, newDescription: string): Playlist {
    return new Playlist(playlist.id, newTitle, newDescription, playlist.tracks);
}

export { remove, move, edit }
