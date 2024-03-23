import {useState} from "react";
import {usePlayQueueContext} from "@/app/contexts/PlayQueueContext";

export const useMusicLibraryViewModel = () => {
    const [musics, setMusics] = useState<string[]>([]);
    const [musicFiles, setMusicFiles] = useState<File[]>([]);
    const {currentTrack, updateCurrentTrack} = usePlayQueueContext();

    const upload = (audioFile: File) => {
        setMusicFiles(prevState => {
            const newState = [
                ...prevState,
                audioFile
            ]
            return newState
        });

        setMusics(prevState => {
            const newState = [
                ...prevState,
                audioFile.name
            ]
            return newState
        });
    }

    const play = (trackName: string) => {
        const track = musicFiles.find(m => m.name === trackName);
        if(!track) throw new Error("tried to play track that doesn't exist!");
        updateCurrentTrack(track);
    }

    return {upload, musics, play}
}