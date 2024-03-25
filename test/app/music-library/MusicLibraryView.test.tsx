import {render} from '@testing-library/react'
import MusicLibraryView from "@/app/music-library/MusicLibraryView";
import { PlayQueueProvider } from '@/app/contexts/PlayQueueContext';
import Player from '@/app/components/player/Player';

describe('MusicLibraryView', () => {
    it('should render', () => {
        const renderResult = render(
            <PlayQueueProvider>
                <MusicLibraryView />
            </PlayQueueProvider>
        );
    })

    it('should start playing song', () => {
        const renderResult = render(
            <PlayQueueProvider>
                <MusicLibraryView />
                <Player />
            </PlayQueueProvider>
        );

        fail();
        // click play button on music library

        // expect player to begin playing selected track
    })
})