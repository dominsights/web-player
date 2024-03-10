import { Track } from "@/app/lib/api/Track";
import { Player } from "@/app/lib/player/Player";
import { usePlaylistViewModel } from "@/app/playlist/[id]/usePlaylistViewModel";

describe('PlaylistViewModel', () => {

    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    const { title, description, tracks, remove, playAll, play, move, edit } = usePlaylistViewModel(playlistId, player);

    it('should remove track from playlist', () => {
        remove(track1);
        expect(tracks).toEqual([track2]);
    });

    it('should start playing the first song on playlist when clicking play playlist', () => {
        playAll();
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should play selected track', () => {
        play(track1);
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should move track to new position', () => {
        move(track1, 2);
        expect(tracks).toEqual([track2, track1]);
    });

    it('should edit playlist title and description', () => {
        edit('new title', 'new description');
        expect(title).toBe('new title');
        expect(description).toBe('new description');
    });
});