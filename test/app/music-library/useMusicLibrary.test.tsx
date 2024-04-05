import {act, renderHook, waitFor} from "@testing-library/react";
import {useMusicLibrary} from "@/app/music-library/useMusicLibrary";
import EventEmitter from "eventemitter3";
import {ReactNode} from "react";
import {StoreProvider} from "@/app/StoreProvider";

const eventEmitter = new EventEmitter();

const emitSpyOn = jest.spyOn(eventEmitter, 'emit');

const blob = new Blob([""], {type: "text/html"});
(blob as any).name = "Windowpane";
const windowPane = blob as File;

describe("MusicLibraryViewModel", () => {
    it("should load initial music data", async () => {
        const wrapper = ({children}: { children: ReactNode }) => (
            <StoreProvider>{children}</StoreProvider>
        )

        const {result} = renderHook(() => useMusicLibrary({eventEmitter}), {wrapper});

        await waitFor(() => result.current.musics.length == 1);

        expect(result.current.musics).toContainEqual({name: "Windowpane"});
    })

    it("should upload a song file", () => {
        const wrapper = ({ children }: { children: ReactNode}) => (
            <StoreProvider>{children}</StoreProvider>
        )

        const {result} = renderHook(() => useMusicLibrary({eventEmitter}), { wrapper});

        const blob = new Blob([""], {type: "text/html"});
        (blob as any).name = "Windowpane";
        const fakeFile = blob as File;

        act(() => result.current.upload(fakeFile));

        expect(result.current.musics).toContainEqual({ name: "Windowpane" });
    })

    it("should play a song from the music library", () => {
        const wrapper = ({ children }: { children: ReactNode}) => (
            <StoreProvider>{children}</StoreProvider>
        )
        const {result} = renderHook(() => useMusicLibrary({eventEmitter}), { wrapper});

        act(() => result.current.upload(windowPane));
        act(() => result.current.play("Windowpane"));

        expect(emitSpyOn).toHaveBeenCalledWith('playTrack', windowPane)
    })

    it("should remove a song from the library", () => {
        const wrapper = ({ children }: { children: ReactNode}) => (
            <StoreProvider>{children}</StoreProvider>
        )
        const {result} = renderHook(() => useMusicLibrary({eventEmitter}), { wrapper});

        act(() => {
            result.current.upload(windowPane);
            result.current.remove("Windowpane");
        })

        expect(result.current.musics.length).toBe(0);
    });
})