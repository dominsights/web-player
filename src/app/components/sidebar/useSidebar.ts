import { Playlist } from "@/app/lib/api/playlist";

export class UseSidebar {
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