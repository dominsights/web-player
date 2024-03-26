'use client'
import MusicLibraryView from "@/app/music-library/MusicLibraryView";
import {useEventEmitter} from "@/app/contexts/EventEmitterContext";

export default function Page() {
    const { eventEmitter } = useEventEmitter();
    return (<MusicLibraryView eventEmitter={eventEmitter}/>)
}