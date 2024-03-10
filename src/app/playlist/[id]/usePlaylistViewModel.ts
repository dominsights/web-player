import { useState, useEffect } from 'react';
import { Track } from "@/app/lib/api/Track";
import { Player } from "@/app/lib/player/Player";
import { Track as PlayerTrack } from "@/app/lib/player/Track";
import { Playlist } from '@/app/lib/api/Playlist';

export const usePlaylistViewModel = (id: number, player: Player, fetchPlaylist: (id: number) => Promise<Playlist>) => {
    fetchPlaylist(+id)
        .then(data => {
            setTitle(data.title);
            setDescription(data.description);
            setTracks(data.tracks);
        });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tracks, setTracks] = useState<Track[]>([]);

    const remove = (track: Track) => {
        setTracks(prevTracks => prevTracks.filter(t => t !== track));
    }

    const playAll = () => {
        const playerTracks: PlayerTrack[] = tracks.map(t => ({ title: t.title }));
        player.playAll(playerTracks);
    }

    const play = (track: Track) => {
        player.play(new PlayerTrack(track.title));
    }

    const move = (track: Track, newPosition: number) => {
        const i = tracks.indexOf(track);
        const updatedTracks = [...tracks];
        updatedTracks.splice(i, 1);
        updatedTracks.splice(newPosition - 1, 0, track);
        setTracks(updatedTracks);
    }

    const edit = (newTitle: string, newDescription: string) => {
        setTitle(newTitle);
        setDescription(newDescription);
    }

    return {
        title,
        description,
        tracks,
        remove,
        playAll,
        play,
        move,
        edit
    };
};
