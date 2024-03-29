import {useState} from "react";
import {MusicLibraryProps} from "@/app/music-library/MusicLibrary";

export const useMusicLibrary = ({eventEmitter}: MusicLibraryProps) => {
    const [musics, setMusics] = useState<string[]>([]);
    const [musicFiles, setMusicFiles] = useState<File[]>([]);

    const upload = (audioFile: File) => {
        setMusicFiles(prevState => [...prevState, audioFile]);
        setMusics(prevState => [...prevState, audioFile.name]);
    }

    const play = (trackName: string) => {
        const track = musicFiles.find(m => m.name === trackName);
        if (!track) throw new Error("tried to play track that doesn't exist!");
        eventEmitter.emit('playTrack', track);
    }

    const remove = (trackName: string) => {
        setMusicFiles(prevState => prevState.filter(f => f.name !== trackName));
        setMusics(prevState => prevState.filter(t => t !== trackName));
    }

    return {upload, musics, play, remove}
}