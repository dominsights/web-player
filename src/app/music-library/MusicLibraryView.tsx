'use client'
import React from 'react';
import {useEventEmitter} from "@/app/contexts/EventEmitterContext";
import {useMusicLibraryViewModel} from "@/app/music-library/useMusicLibraryViewModel";
import EventEmitter from "eventemitter3";

export interface MusicLibraryProps {
    eventEmitter: EventEmitter
}

function MusicLibraryView(props: MusicLibraryProps) {
    const {musics, upload, play} = useMusicLibraryViewModel(props);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        if (!event || !event.target.files) return;

        const audioFile = event.target.files[0];
        upload(audioFile);
    };

    return (
        <div>Music Library View
            <input type='file' onChange={onFileChange}/>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {musics?.map(m => (
                    <tr key={m}>
                        <td>{m}</td>
                        <td>
                            <button onClick={() => play(m)}>Play</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MusicLibraryView;