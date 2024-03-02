import { Player } from "@/app/lib/Player/Player";
import { PlaylistViewModel } from "@/app/playlist/[id]/PlaylistViewModel";
import { Track } from "@/app/playlist/[id]/Track"

describe('PlaylistViewModel', () => {
    it('should remove track from playlist', () => {
        const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60*3);
        const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60*5);

        const viewModel = new PlaylistViewModel([track1, track2], new Player());
        viewModel.remove(track1);

        expect(viewModel.tracks).toEqual([track2]);
    })

    it('should start playing the first song on playlist when clicking play playlist', () => {
        const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60*3);
        const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60*5);

        const player = new Player();
        const viewModel = new PlaylistViewModel([track1, track2], player);
        viewModel.playAll();

        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should play selected track', () => {
        const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60*3);
        const player = new Player();

        const viewModel = new PlaylistViewModel([track1], player);
        viewModel.play(track1);

        expect(player.currentTrack?.title).toBe(track1.title);
    })
})