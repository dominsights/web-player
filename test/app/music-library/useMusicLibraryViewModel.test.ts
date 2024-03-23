import {act, renderHook} from "@testing-library/react";
import {useMusicLibraryViewModel} from "@/app/music-library/useMusicLibraryViewModel";

import * as PlayQueueContextModule from '@/app/contexts/PlayQueueContext';

jest.mock('@/app/contexts/PlayQueueContext', () => ({
    __esModule: true,
    usePlayQueueContext: jest.fn(),
}));

const mockUpdateCurrentTrack = jest.fn();

const mockUsePlayQueueContext = PlayQueueContextModule.usePlayQueueContext as jest.MockedFunction<typeof PlayQueueContextModule.usePlayQueueContext>;
mockUsePlayQueueContext.mockReturnValue({
    currentTrack: '',
    updateCurrentTrack: mockUpdateCurrentTrack
});

describe("MusicLibraryViewModel", () => {
    it("should upload a song file", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const fakeFile = blob as File;

        act(() => {
            result.current.upload(fakeFile);
        })

        expect(result.current.musics).toContain("Windowpane");
    })

    it("should play a song from the music library", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const windowPane = blob as File;

        act(() => {
            result.current.upload(windowPane);
        })

        act(() => {
            result.current.play("Windowpane");
        })

        expect(mockUpdateCurrentTrack).toHaveBeenCalledWith(windowPane)
    })
})