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
            <EventEmitterProvider>
                <MusicLibrary eventEmitter={new EventEmitter()}/>
            </EventEmitterProvider>
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

        const addToPlaylist = renderResult.getByText(/add to playlist/i);
        fireEvent.mouseOver(addToPlaylist);
        await waitFor(() => renderResult.getByTestId('dropdown-playlists-menu'))

        const playlistMenuItem = renderResult.getByRole('menu-item', { value: { text: playlist.title}});
        fireEvent.click(playlistMenuItem);



    })
})