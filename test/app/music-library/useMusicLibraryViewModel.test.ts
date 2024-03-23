import {act, renderHook} from "@testing-library/react";
import {useMusicLibraryViewModel} from "@/app/music-library/useMusicLibraryViewModel";

describe("MusicLibraryViewModel", () => {
    it("should upload a song file", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const fakeFile = blob as File;

        act(() => {
            result.current.upload(fakeFile);
        })

        expect(result.current.musics).toContain(fakeFile);
    })
})