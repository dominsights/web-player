import {playlists} from "@/app/lib/mocks/mockData";

export const getPlaylistById = async (id: number) => {
    return  Promise.resolve(playlists.find(p => p.id === id));
}