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


    it('should remove track from playlist', () => {
    const { result } = renderHook(() => usePlaylistViewModel(1, player,playlist));

        act(() => {
            result.current.remove(track1);
        })
        expect(result.current.tracks).toEqual([track2]);
    });

    it('should start playing the first song on playlist when clicking play playlist', () => {
    const { result } = renderHook(() => usePlaylistViewModel(1, player,playlist));

        result.current.playAll();
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should play selected track', () => {
    const { result } = renderHook(() => usePlaylistViewModel(1, player,playlist));

        result.current.play(track1);
        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should move track to new position', () => {
    const { result } = renderHook(() => usePlaylistViewModel(1, player,playlist));

        act(() => {
            result.current.move(track1, 2);
        })
        expect(result.current.tracks).toEqual([track2, track1]);
    });

    it('should edit playlist title and description', () => {
    const { result } = renderHook(() => usePlaylistViewModel(1, player,playlist));

        act(() => {
            result.current.edit('new title', 'new description');
        })
        expect(result.current.title).toBe('new title');
        expect(result.current.description).toBe('new description');
    });
});