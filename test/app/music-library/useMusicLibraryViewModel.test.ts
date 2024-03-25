import {act, renderHook} from "@testing-library/react";
import {useMusicLibraryViewModel} from "@/app/music-library/useMusicLibraryViewModel";

const mockUpdateCurrentTrack = jest.fn();

jest.mock('@/app/contexts/PlayQueueContext', () => ({
    usePlayQueueContext: jest.fn(() => {
        return {
            updateCurrentTrack: mockUpdateCurrentTrack
        }
    }),
}));

const blob = new Blob([""], {type: "text/html"});
(blob as any).name = "Windowpane";
const windowPane = blob as File;

describe("MusicLibraryViewModel", () => {
    it("should upload a song file", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const fakeFile = blob as File;

        act(() => result.current.upload(fakeFile));

        expect(result.current.musics).toContain("Windowpane");
    })

    it("should play a song from the music library", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        act(() => result.current.upload(windowPane));
        act(() => result.current.play("Windowpane"));

        expect(mockUpdateCurrentTrack).toHaveBeenCalledWith(windowPane)
    })

    it("should remove a song from the library", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        act(() => {
            result.current.upload(windowPane);
            result.current.remove("Windowpane");
        })

        expect(result.current.musics.length).toBe(0);
    });
})