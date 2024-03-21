import {renderHook} from "@testing-library/react";
import {useMusicLibraryViewModel} from "@/app/music-library/useMusicLibraryViewModel";

describe("MusicLibraryViewModel", () => {
    it("should upload a song file", () => {
        const {result} = renderHook(() => useMusicLibraryViewModel());
    })
})