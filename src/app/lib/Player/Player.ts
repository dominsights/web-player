import { Track } from "./Track";

export class Player {

    currentTrack: Track | undefined;
    playQueue: Track[];

    constructor() {
        this.playQueue = [];
    }

    playAll(tracks: Track[]) {
        this.playQueue.concat(tracks);
        this.currentTrack = tracks[0];
    }

    play(track: Track) {
        console.log(track);

        this.playQueue.unshift(track);
        this.currentTrack = track;
    }
}