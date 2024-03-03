import { Player } from "@/app/lib/player/Player";
import { PlaylistViewModel } from "@/app/playlist/[id]/PlaylistViewModel";
import { Track } from "@/app/playlist/[id]/Track"


describe('PlaylistViewModel', () => {

    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    let viewModel: PlaylistViewModel; 

    beforeEach(() => {
        viewModel = new PlaylistViewModel('playlist title', 'playlist description', [track1, track2], player);
    })

    it('should remove track from playlist', () => {
        viewModel.remove(track1);
        expect(viewModel.tracks).toEqual([track2]);
    })

    it('should start playing the first song on playlist when clicking play playlist', () => {
        viewModel.playAll();
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should play selected track', () => {
        viewModel.play(track1);
    });

    it('should move track to new position', () => {
        viewModel.move(track1, 2);
    });

    it('should edit playlist title and description', () => {
        viewModel.edit('new title', 'new description');
        expect(viewModel.title).toBe('new title');
        expect(viewModel.description).toBe('new description');
    });
});