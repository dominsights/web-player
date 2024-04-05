import { Player } from "@/app/lib/features/player/Player";
import {formatDate, secondsToTime, Track} from "@/app/lib/features/playlists/Track";
import { usePlaylist } from "@/app/playlist/[id]/usePlaylist";
import { act, renderHook, waitFor } from "@testing-library/react";
import {Playlist} from "@/app/lib/features/playlists/playlist";
import {playlists, track1, track2} from "@/app/lib/mocks/mockData";

describe('PlaylistViewModel', () => {
    const player = new Player();

    const playlist = playlists[0];
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
