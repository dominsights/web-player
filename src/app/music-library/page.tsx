'use client'
import MusicLibrary from "@/app/music-library/MusicLibrary";
import {useEventEmitter} from "@/app/contexts/EventEmitterContext";

export default function Page() {
    const { eventEmitter } = useEventEmitter();
    return (<MusicLibrary eventEmitter={eventEmitter}/>)
}