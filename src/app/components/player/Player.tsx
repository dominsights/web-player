import React, {useEffect, useRef, useState} from "react";
import {useEventEmitter} from "@/app/contexts/EventEmitterContext";
import EventEmitter from "eventemitter3";

type AudioElementRef = HTMLAudioElement | null;

export default function Player() {
    const audioRef = useRef<AudioElementRef>(null);
    const [ currentTrack, setCurrentTrack ] = useState<string>();
    const { eventEmitter } = useEventEmitter();

    useEffect(() => {
        const handlePlayTrack = (track: File) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    setCurrentTrack(e.target.result);
                }
                playAudio();
            };

            reader.readAsDataURL(track);
        };

        eventEmitter.on('playTrack', handlePlayTrack);

        return () => {
            eventEmitter.off('playTrack', handlePlayTrack);
        };

    }, []);

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