import React from 'react';
import Link from "next/link";
// move to view model
import {selectPlaylists} from "@/app/lib/features/playlists/playlistsSlice"
import {useAppSelector} from "@/app/lib/hooks";

// end move to view model

function Sidebar() {

// move to view model
    const playlists = useAppSelector(selectPlaylists);
// end move to view model

    return (
        <div>
            Sidebar
            <ul>
                {playlists.map(p =>
                    (
                        <li key={p.id}>
                            <Link href={`/playlist/${p.id}`}>{p.title}</Link>
                        </li>
                    ))}
                <li>
                    <Link href={'/music-library'}>Music Library</Link>
                </li>
                <li>
                    <Link href={'/playlists'}>Playlists</Link>
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;