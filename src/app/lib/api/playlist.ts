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