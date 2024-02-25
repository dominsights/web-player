import React from 'react';
import {SidebarViewModel} from "@/app/components/sidebar/SidebarViewModel";

function Sidebar(props: { viewModel: SidebarViewModel}) {
    return (
        <div>
            Sidebar
            <ul>
                {props.viewModel.playlists.map(p => (<li key={p.name}>{p.name}</li>))}
            </ul>
        </div>
    );
}

export default Sidebar;