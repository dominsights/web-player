import React, {useRef} from "react";
import {usePlayQueueContext} from "@/app/contexts/PlayQueueContext";

type AudioElementRef = HTMLAudioElement | null;

export default function Player() {
    const audioRef = useRef<AudioElementRef>(null);
    const { currentTrack } = usePlayQueueContext();

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
            <audio ref={audioRef} src={currentTrack}/>
        </div>)
}