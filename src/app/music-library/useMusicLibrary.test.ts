import {act, renderHook} from "@testing-library/react";
import {useMusicLibrary} from "@/app/music-library/useMusicLibrary";
import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

const emitSpyOn = jest.spyOn(eventEmitter, 'emit');

const blob = new Blob([""], {type: "text/html"});
(blob as any).name = "Windowpane";
const windowPane = blob as File;

describe("MusicLibraryViewModel", () => {
    it("should upload a song file", () => {
        const {result} = renderHook(() => useMusicLibrary({eventEmitter}));

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const fakeFile = blob as File;

        act(() => result.current.upload(fakeFile));

        expect(result.current.musics).toContain("Windowpane");
    })

    it("should play a song from the music library", () => {
        const {result} = renderHook(() => useMusicLibrary({eventEmitter}));

        act(() => result.current.upload(windowPane));
        act(() => result.current.play("Windowpane"));

        expect(emitSpyOn).toHaveBeenCalledWith('playTrack', windowPane)
    })

    it("should remove a song from the library", () => {
        const {result} = renderHook(() => useMusicLibrary({eventEmitter}));

        act(() => {
            result.current.upload(windowPane);
            result.current.remove("Windowpane");
        })

        expect(result.current.musics.length).toBe(0);
    });
})