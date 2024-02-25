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
                            <Link href={`/playlists/${p.id}`}>{p.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Sidebar;