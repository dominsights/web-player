import { Playlist } from "@/app/lib/api/Playlist";
import { Track } from "@/app/lib/api/Track";
import { Player } from "@/app/lib/player/Player";
import { usePlaylistViewModel } from "@/app/playlist/[id]/usePlaylistViewModel";
import {act, renderHook, waitFor} from "@testing-library/react";


describe('PlaylistViewModel', () => {
    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    const playlist: Playlist = { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2]};
    const fetchPlaylist = (id: number) => Promise.resolve(playlist);

    it('should load correct data', async () => {
        const {result} = renderHook(() => usePlaylistViewModel(1, player, fetchPlaylist));

        await waitFor(() => expect(result.current.title).toBe(playlist.title));
        await waitFor(() => expect(result.current.description).toBe(playlist.description));
        await waitFor(() => expect(result.current.tracks).toBe(playlist.tracks));
    })

    it('should remove track from playlist', async () => {
        const {result} = renderHook(() => usePlaylistViewModel(1, player, fetchPlaylist));

        act(() => {
            result.current.remove(track1);
        })
        await waitFor(() => expect(result.current.tracks).toEqual([track2]));
    });

    it('should play selected track', async () => {
        const {result} = renderHook(() => usePlaylistViewModel(1, player, fetchPlaylist));
        result.current.play(track1);
        await waitFor(() => expect(player.currentTrack?.title).toBe(track1.title));
    });

    it('should move track to new position', async () => {
        const {result} = renderHook(() => usePlaylistViewModel(1, player, fetchPlaylist));
        act(() => {
            result.current.move(track1, 2);
        })
        await waitFor(() => expect(result.current.tracks).toEqual([track2, track1]));
    });

    it('should edit playlist title and description', async () => {
        const { result } = renderHook(() => usePlaylistViewModel(1, player,fetchPlaylist));

        act(() => {
            result.current.edit('new title', 'new description');
        })

        await waitFor(() => expect(result.current.title).toBe('new title'));
        await waitFor(() => expect(result.current.description).toBe('new description'));
    });
});