import { useEffect, useState } from 'react';
import { Player } from "@/app/lib/player/Player";
import { Track } from "@/app/lib/api/Track";
import { Playlist } from "@/app/lib/api/Playlist";
import { Track as PlayerTrack } from "@/app/lib/player/Track";

export const usePlaylistViewModel = (id: number, player: Player, fetchPlaylist: (id: number) => Promise<Playlist | undefined>) => {
    const [playlist, setPlaylist] = useState<Playlist | undefined>();

    useEffect(() => {
        fetchPlaylist(+id)
            .then(data => {
                if (data) {
                    setPlaylist(data);
                }
            });
    }, [id, playlist]);

    const removeTrack = (track: Track) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return prevPlaylist.removeTrack(track);
            }
            return prevPlaylist;
        });
    };

    const moveTrack = (track: Track, newPosition: number) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return prevPlaylist.moveTrack(track, newPosition);
            }
            return prevPlaylist;
        });
    };

    const editPlaylist = (newTitle: string, newDescription: string) => {
        setPlaylist(prevPlaylist => {
            if (prevPlaylist) {
                return prevPlaylist.editPlaylist(newTitle, newDescription);
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
