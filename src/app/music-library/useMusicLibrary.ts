import {useEffect, useState} from "react";
import {MusicLibraryProps} from "@/app/music-library/MusicLibrary";
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";
import {
    selectMusics,
    add,
    remove as removeMusic, fetchMusicAsync,
} from "@/app/lib/features/music-library/musicLibrarySlice";

export const useMusicLibrary = ({eventEmitter}: MusicLibraryProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMusicAsync());
    }, []);

    const musics = useAppSelector(selectMusics);
    const [musicFiles, setMusicFiles] = useState<File[]>([]);

    const upload = (audioFile: File) => {
        setMusicFiles(prevState => [...prevState, audioFile]);
        dispatch(add({ name: audioFile.name }))
    }

    const play = (trackName: string) => {
        const track = musicFiles.find(m => m.name === trackName);
        if (!track) throw new Error("tried to play track that doesn't exist!");
        eventEmitter.emit('playTrack', track);
    }

    const remove = (trackName: string) => {
        setMusicFiles(prevState => prevState.filter(f => f.name !== trackName));
        dispatch(removeMusic({ name: trackName}));
    }

    return {upload, musics, play, remove}
}