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

    removeTrack(track: Track): Playlist {
        const updatedTracks = this.tracks.filter(t => t !== track);
        return new Playlist(this.id, this.title, this.description, updatedTracks);
    }

    moveTrack(track: Track, newPosition: number): Playlist {
        const index = this.tracks.indexOf(track);
        if (index === -1) {
            return this;
        }
        const updatedTracks = [...this.tracks];
        const removed = updatedTracks.splice(index, 1);
        updatedTracks.splice(newPosition - 1, 0, ...removed);
        return new Playlist(this.id, this.title, this.description, updatedTracks);
    }

    editPlaylist(newTitle: string, newDescription: string): Playlist {
        return new Playlist(this.id, newTitle, newDescription, this.tracks);
    }
}
