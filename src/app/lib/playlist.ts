import {Playlist} from "@/app/components/sidebar/Playlist";

export const getPlaylists = async () => {
    const rock = new Playlist(1,"Rock'n Roll");
    const jazz = new Playlist(2,"Jazz");

    return Promise.resolve([ rock, jazz ]);
}