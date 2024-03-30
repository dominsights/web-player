import React from 'react';
import Link from "next/link";
import {Playlist} from "@/app/lib/api/playlist";

function Sidebar({ fetchPlaylists } : { fetchPlaylists: () => Playlist[]}) {
    const playlists = fetchPlaylists();

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