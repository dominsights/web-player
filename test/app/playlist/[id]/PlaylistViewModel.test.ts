import { Player } from "@/app/lib/player/Player";
import { PlaylistViewModel } from "@/app/playlist/[id]/PlaylistViewModel";
import { Track } from "@/app/playlist/[id]/Track"


describe('PlaylistViewModel', () => {

    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    let playlistVM: PlaylistViewModel; 

    beforeEach(() => {
        playlistVM = new PlaylistViewModel('playlist title', 'playlist description', [track1, track2], player);
    })

    it('should remove track from playlist', () => {
        playlistVM.remove(track1);
        expect(playlistVM.tracks).toEqual([track2]);
    })

    it('should start playing the first song on playlist when clicking play playlist', () => {
        playlistVM.playAll();
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should play selected track', () => {
        playlistVM.play(track1);
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should move track to new position', () => {
        playlistVM.move(track1, 2);
        expect(playlistVM.tracks).toEqual([track2, track1]);
    });

    it('should edit playlist title and description', () => {
        playlistVM.edit('new title', 'new description');
        expect(playlistVM.title).toBe('new title');
        expect(playlistVM.description).toBe('new description');
    });
});