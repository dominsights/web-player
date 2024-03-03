import { Player } from "@/app/lib/Player/Player";
import { Track } from "./Track";
import { Track as PlayerTrack } from "@/app/lib/Player/Track"

export class PlaylistViewModel {
    player: Player;
    tracks: Track[];

    constructor(tracks: Track[], player: Player) {
        this.tracks = tracks;
        this.player = player;
    }

    remove(track: Track) {
        this.tracks = this.tracks.filter(t => t !== track);
    }

    playAll() {
        const playerTracks: PlayerTrack[] = this.tracks.map(t => {return {title: t.title}});
        this.player.playAll(playerTracks)
    }

    play(track: Track) {
        this.player.play(new PlayerTrack(track.title));
    }

    move(track: Track, newPosition: number) {
        const i = this.tracks.indexOf(track);
        this.tracks.splice(i, 1);
        this.tracks.splice(newPosition - 1, 0, track);
    }
}