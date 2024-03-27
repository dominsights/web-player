import { Player } from "@/app/lib/Player/Player";
import {secondsToTime, Track} from "@/app/lib/api/Track";
import { usePlaylist } from "@/app/playlist/[id]/usePlaylist";
import { act, renderHook, waitFor } from "@testing-library/react";
import {Playlist} from "@/app/lib/api/playlist";

describe('PlaylistViewModel', () => {
    const player = new Player();
    const track1 = {
        title: "7empest",
        artist: "TOOL",
        album: "Fear Inoculum",
        dateAdded: new Date(2024, 3, 2).toISOString(),
        duration: secondsToTime(60 * 3)
    };

    const track2 = {
        title: "Without Walls",
        artist: "IQ",
        album: "The Road of Bones",
        dateAdded: new Date(2024, 3, 2).toISOString(),
        duration: secondsToTime(60 * 5)
    };

    const playlist = {id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2]};
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
