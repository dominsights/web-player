import React, {createContext, ReactNode, useContext } from 'react';
import EventEmitter from "eventemitter3";

interface EventEmitterType {
   eventEmitter: EventEmitter
}

const EventEmitterContext = createContext<EventEmitterType | undefined>(undefined);

export const EventEmitterProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const eventEmitter = new EventEmitter();

    return (
        <EventEmitterContext.Provider value={{eventEmitter}}>
            {children}
        </EventEmitterContext.Provider>
    );
};

export const useEventEmitter = () => {
    const context = useContext(EventEmitterContext);
    if (!context) {
        throw new Error('useEventEmitter must be used within a EventEmitterProvider');
    }
    return context;
};
