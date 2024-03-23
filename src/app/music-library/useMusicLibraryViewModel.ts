import {useState} from "react";

export const useMusicLibraryViewModel = () => {
    const [musics, setMusics] = useState<File[]>([]);

    const upload = (audioFile: File) => {
        setMusics(prevState => {
            prevState.push(audioFile);
            return prevState
        });
    }

    return {upload, musics}
}