'use client'
import React from 'react';
import {usePlayQueueContext} from "@/contexts/PlayQueueContext";

function MusicLibraryView() {

    const { updateCurrentTrack } = usePlayQueueContext();
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        if(!event || !event.target.files) return;

        const audioFile = event.target.files[0];

        updateCurrentTrack(audioFile);

        // save file
    };

    return (
        <div>Music Library View
            <input type='file' onChange={onFileChange}/>
        </div>
    );
}

export default MusicLibraryView;