import {render} from '@testing-library/react'
import MusicLibraryView from "@/app/music-library/MusicLibraryView";
import { EventEmitterProvider } from '@/app/contexts/EventEmitterContext';
import EventEmitter from "eventemitter3";

describe('MusicLibraryView', () => {
    it('should render', () => {
        const renderResult = render(
            <EventEmitterProvider>
                <MusicLibraryView eventEmitter={new EventEmitter()} />
            </EventEmitterProvider>
        );
    })
})