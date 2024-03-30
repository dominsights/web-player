import { useEffect, useState } from 'react';
import { Track } from "@/app/lib/api/Track";
import {edit, move, Playlist, remove} from "@/app/lib/api/playlist";
import { Player } from '@/app/lib/player/Player';
import { Track as PlayerTrack } from "@/app/lib/player/Track";

export const usePlaylist = (id: number, player: Player, fetchPlaylist: (id: number) => Promise<Playlist | undefined>) => {
    const [playlist, setPlaylist] = useState<Playlist>();

    useEffect(() => {
        fetchPlaylist(+id)
            .then(data => {
                if (data) {
                    setPlaylist(data);
                }
            });
    }, [id]);

    const removeTrack = (track: Track) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return remove(prevPlaylist, track);
            }
            return prevPlaylist;
        });
    };

    const moveTrack = (track: Track, newPosition: number) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return move(prevPlaylist, track, newPosition);
            }
            return prevPlaylist;
        });
    };

    const editPlaylist = (newTitle: string, newDescription: string) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return edit(prevPlaylist, newTitle, newDescription);
            }
            return prevPlaylist;
        });
    };

    const play = (track: Track) => {
        player.play(new PlayerTrack(track.title));
    };

    const playAll = () => {
        if (playlist) {
            const playerTracks: PlayerTrack[] = playlist.tracks.map(t => ({ title: t.title }));
            player.playAll(playerTracks);
        }
    };

    return {
        playlist,
        removeTrack,
        moveTrack,
        editPlaylist,
        play,
        playAll
    };
};
