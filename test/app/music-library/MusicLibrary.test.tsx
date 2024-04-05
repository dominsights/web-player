import {fireEvent, render, waitFor} from '@testing-library/react'
import MusicLibrary from "@/app/music-library/MusicLibrary";
import {EventEmitterProvider} from '@/app/contexts/EventEmitterContext';
import EventEmitter from "eventemitter3";
import {StoreProvider} from "@/app/StoreProvider";
import Playlist from "@/app/playlist/[id]/Playlist";
import {Player} from "@/app/lib/player/Player";
import {playlists} from "@/app/lib/mocks/mockData";

describe('MusicLibraryView', () => {
    it('should render', () => {
        const renderResult = render(
            <StoreProvider>
                <EventEmitterProvider>
                    <MusicLibrary eventEmitter={new EventEmitter()}/>
                </EventEmitterProvider>
            </StoreProvider>
        );
    })

    it('should update playlist tracks when added from music library', async () => {
        const playlist = playlists[0];
        const fetchPlaylist = (id: number) => Promise.resolve(playlist);

        const renderResult = render(
            <StoreProvider>
                <MusicLibrary eventEmitter={new EventEmitter()}/>
                <Playlist playlistId={playlist.id} player={new Player()} fetchPlaylist={fetchPlaylist}/>
            </StoreProvider>
        );

        await waitFor(() =>
            expect(renderResult.getByText('Windowpane')).toBeInTheDocument()
        )

        renderResult.debug();

        // await waitFor(() => expect(renderResult.getByRole('button', {name: /more/i})).toBeInTheDocument());
        //
        // fireEvent.click(renderResult.getByRole('button', {name: /more/i}));
        // fireEvent.mouseOver(renderResult.getByText(/add to playlist/i));
        //
        // await waitFor(() => renderResult.getByTestId('dropdown-playlists-menu'))
        //
        // fireEvent.click(renderResult.getByRole('menuitem', {name: playlist.title}));
    })
})