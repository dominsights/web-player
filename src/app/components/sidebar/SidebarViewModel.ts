import { Playlist } from "../../lib/api/Playlist";

export class SidebarViewModel {
    playlists: Playlist[];

    constructor(playlists: Playlist[]) {
        if(playlists)
            this.playlists = playlists;
        else
            this.playlists = [];
    }
    addPlaylist(playlist: Playlist) {
        this.playlists.push(playlist);
    }
}