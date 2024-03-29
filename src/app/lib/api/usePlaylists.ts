import { useEffect, useState } from "react";
import { Playlist } from "./Playlist";
import { Track } from "./Track";

const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60 * 3);
const track2 = new Track("Without Walls", "IQ", "The Road of Bones", new Date(2024, 3, 2), 60 * 5);
const track3 = new Track("Back to Black", "Amy Winehouse", "Back to Black", new Date(2006, 1, 1), 60 * 3);
const track4 = new Track("Love is the Way", "Thee Sacred Souls", "Love is the Way", new Date(2022, 1, 1), 60 * 5);

const seed: Playlist[] = [
    { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: [track1, track2]},
    { id: 2, title: "Soul Revival", description: "Soul for concentration", tracks: [track3, track4]}
]

export const usePlaylists = () => {
    	
    const [playlists, setPlaylists] = useState<Playlist[]>(seed);

    useEffect(() => {
        const getPlaylists = async () => {
            const data = await Promise.resolve(playlists);
            setPlaylists(data);
        }

        getPlaylists();
    }, [playlists]);

    const getPlaylistById = async (id: number) => {
        return  Promise.resolve(playlists.find(p => p.id === id));
    }

    return { playlists, getPlaylistById };
}



