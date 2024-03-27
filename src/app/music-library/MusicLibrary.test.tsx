import {render} from '@testing-library/react'
import MusicLibrary from "@/app/music-library/MusicLibrary";
import { EventEmitterProvider } from '@/app/contexts/EventEmitterContext';
import EventEmitter from "eventemitter3";

describe('MusicLibraryView', () => {
    it('should render', () => {
        const renderResult = render(
            <EventEmitterProvider>
                <MusicLibrary eventEmitter={new EventEmitter()} />
            </EventEmitterProvider>
        );
    })
})