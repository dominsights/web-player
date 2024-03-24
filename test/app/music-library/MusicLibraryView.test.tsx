import {render} from '@testing-library/react'
import MusicLibraryView from "@/app/music-library/MusicLibraryView";
import { PlayQueueProvider } from '@/app/contexts/PlayQueueContext';

describe('MusicLibraryView', () => {
    it('should render', () => {
        const renderResult = render(
            <PlayQueueProvider>
                <MusicLibraryView />
            </PlayQueueProvider>
        );
    })
})