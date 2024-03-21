import React, {createContext, ReactNode, useContext, useState} from 'react';

interface PlayQueueType {
    currentTrack: File | undefined;
    updateCurrentTrack: (newValue: File) => void;
}

const PlayQueueContext = createContext<PlayQueueType | undefined>(undefined);

export const PlayQueueProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState<File>();

    const updateCurrentTrack = (newValue: File) => {
        setCurrentTrack(newValue);
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
