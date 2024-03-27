import React from 'react';
import {UseSidebar} from "@/app/components/sidebar/useSidebar";
import Link from "next/link";
// move to view model
import { selectPlaylists } from "@/app/lib/features/playlists/playlistsSlice"
import {useAppSelector} from "@/app/lib/hooks";
// end move to view model

function Sidebar(props: { viewModel: UseSidebar}) {

// move to view model
    const playlists = useAppSelector(selectPlaylists);
// end move to view model

    return (
        <div>
            Sidebar
            <ul>
                {/*{props.viewModel.playlists.map(p =>*/}
                {playlists.map(p =>
                    (
                        <li key={p.id}>
                            <Link href={`/playlist/${p.id}`}>{p.title}</Link>
                        </li>
                    ))}
            </ul>
            <Link href={'/music-library'}>Music Library</Link>
        </div>
    );
}

export default Sidebar;