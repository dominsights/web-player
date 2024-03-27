import {act, renderHook} from "@testing-library/react";
import {usePlaylists} from "@/app/playlist/usePlaylists";
import {Track} from "@/app/lib/api/Track";
import {Playlist} from "@/app/lib/api/playlist";
import {StoreProvider} from "@/app/StoreProvider";
import {ReactNode} from "react";

describe('usePlaylistsViewModel', () => {
    const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
    const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);

    const playlist: Playlist = new Playlist(1, "Rock'n Roll", "My favorite Rock'n Roll songs", [track1, track2]);

    it('should add playlist', () => {
        const wrapper = ({ children }: { children: ReactNode}) => (
            <StoreProvider>{children}</StoreProvider>
        )

        const { result } = renderHook(() => usePlaylists(), { wrapper });

        act(() => result.current.add(playlist));

        expect(result.current.playlists).toContain(playlist);
    })
})