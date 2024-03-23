import React, {createContext, ReactNode, useContext, useState} from 'react';

interface PlayQueueType {
    currentTrack: string | undefined;
    updateCurrentTrack: (newValue: File) => void;
}

const PlayQueueContext = createContext<PlayQueueType | undefined>(undefined);

export const PlayQueueProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState<string>();

    const updateCurrentTrack = (track: File) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                setCurrentTrack(e.target.result);
            }
        };

        reader.readAsDataURL(track);
    };

    return (
        <PlayQueueContext.Provider value={{currentTrack, updateCurrentTrack}}>
            {children}
        </PlayQueueContext.Provider>
    );
};

export const usePlayQueueContext = () => {
    const context = useContext(PlayQueueContext);
    if (!context) {
        throw new Error('usePlayQueueContext must be used within a PlayQueueProvider');
    }
    return context;
};
