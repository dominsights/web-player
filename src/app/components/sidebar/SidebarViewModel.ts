import {Playlist} from "@/app/components/sidebar/Playlist";

export class SidebarViewModel {
    playlists: Playlist[];
    constructor() {
        this.playlists = [];
    }
    addPlaylist(playlist: Playlist) {
        this.playlists.push(playlist);
    }
}