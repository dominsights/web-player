import React from 'react';
import {SidebarViewModel} from "@/app/components/sidebar/SidebarViewModel";
import Link from "next/link";

function Sidebar(props: { viewModel: SidebarViewModel}) {
    return (
        <div>
            Sidebar
            <ul>
                {props.viewModel.playlists.map(p =>
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