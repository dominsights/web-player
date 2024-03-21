import React, {useEffect, useRef, useState} from "react";
import {usePlayQueueContext} from "@/contexts/PlayQueueContext";

type AudioElementRef = HTMLAudioElement | null;

export default function Player() {
    const audioRef = useRef<AudioElementRef>(null);
    const [audioSrc, setAudioSrc] = useState<string>('');
    const { currentTrack } = usePlayQueueContext();

    useEffect(() => {
        if (!currentTrack) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                setAudioSrc(e.target.result);
            }
        };

        reader.readAsDataURL(currentTrack);
    },[currentTrack])

    const playAudio = (): void => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseAudio = (): void => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <div>
            Audio Player
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
            <audio ref={audioRef} src={audioSrc}/>
        </div>)
}