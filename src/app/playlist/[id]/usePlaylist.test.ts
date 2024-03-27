import { Player } from "@/app/lib/Player/Player";
import { Track } from "@/app/lib/api/Track";
import { usePlaylist } from "@/app/playlist/[id]/usePlaylist";
import { act, renderHook, waitFor } from "@testing-library/react";
import {Playlist} from "@/app/lib/api/playlist";

describe('PlaylistViewModel', () => {
    const player = new Player();
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    const playlist: Playlist = new Playlist(1, "Rock'n Roll", "My favorite Rock'n Roll songs", [track1, track2]);
    const fetchPlaylist = (id: number) => Promise.resolve(playlist);

    it('should load correct data', async () => {
        const { result } = renderHook(() => usePlaylist(1, player, fetchPlaylist));
        await waitFor(() => result.current.playlist !== undefined);
        expect(result.current.playlist).toEqual(playlist);
    });

    it('should remove track from playlist', async () => {
        const { result } = renderHook(() => usePlaylist(1, player, fetchPlaylist));
        await waitFor(() => result.current.playlist !== undefined);

        act(() => {
            result.current.removeTrack(track1);
        });

        expect(result.current.playlist?.tracks).toEqual([track2]);
    });

    it('should play selected track', async () => {
        const { result } = renderHook(() => usePlaylist(1, player, fetchPlaylist));
        await waitFor(() => result.current.playlist !== undefined);

        act(() => {
            result.current.play(track1);
        });

        expect(player.currentTrack?.title).toBe(track1.title);
    });

    it('should move track to new position', async () => {
        const { result } = renderHook(() => usePlaylist(1, player, fetchPlaylist));
        await waitFor(() => result.current.playlist !== undefined);

        act(() => {
            result.current.moveTrack(track1, 2);
        });

        expect(result.current.playlist?.tracks).toEqual([track2, track1]);
    });

    it('should edit playlist title and description', async () => {
        const { result } = renderHook(() => usePlaylist(1, player, fetchPlaylist));
        await waitFor(() => result.current.playlist !== undefined);

        act(() => {
            result.current.editPlaylist('new title', 'new description');
        });

        expect(result.current.playlist?.title).toBe('new title');
        expect(result.current.playlist?.description).toBe('new description');
    });
});
