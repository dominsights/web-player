import { Playlist } from "@/app/lib/api/Playlist";
import { Track } from "@/app/lib/api/Track";
import { Player } from "@/app/lib/player/Player";
import { usePlaylistViewModel } from "@/app/playlist/[id]/usePlaylistViewModel";
import { act, renderHook } from "@testing-library/react";


describe('PlaylistViewModel', () => {

    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    const playlist: Playlist = { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2]};
    const fetchPlaylist = (id: number) => Promise.resolve(playlist);

    const { result } = renderHook(() => usePlaylistViewModel(1, player,fetchPlaylist))
    const { title, description, tracks, remove, playAll, play, move, edit } = result.current;

    it('should remove track from playlist', () => {
        act(() => {
            result.current.remove(track1)
            //remove(track1);
        })
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
        act(() => {
            move(track1, 2);
        })
        expect(tracks).toEqual([track2, track1]);
    });

    it('should edit playlist title and description', () => {
        act(() => {
            edit('new title', 'new description');
        })
        expect(title).toBe('new title');
        expect(description).toBe('new description');
    });
});