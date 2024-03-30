import {act, renderHook} from "@testing-library/react";
import {usePlaylists} from "@/app/playlists/usePlaylists";
import {secondsToTime, Track} from "@/app/lib/api/Track";
import {StoreProvider} from "@/app/StoreProvider";
import {ReactNode} from "react";

describe('usePlaylistsViewModel', () => {
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

    it('should add playlist', () => {
        const wrapper = ({ children }: { children: ReactNode}) => (
            <StoreProvider>{children}</StoreProvider>
        )

        const { result } = renderHook(() => usePlaylists(), { wrapper });

        act(() => result.current.add(playlist));

        expect(result.current.playlists).toContain(playlist);
    })
})