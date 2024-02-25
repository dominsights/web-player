import {Playlist} from "@/app/components/sidebar/Playlist";

export const getPlaylists = async () => {
    const rock = new Playlist("Rock'n Roll");
    const jazz = new Playlist("Jazz");

    return Promise.resolve([ rock, jazz ]);
}