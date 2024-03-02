import { Track } from "./Track";

export class PlaylistViewModel {

    tracks: Track[];

    constructor(tracks: Track[]) {
        this.tracks = tracks;
    }

    remove(track: Track) {
        this.tracks = this.tracks.filter(t => t !== track);
    }
}