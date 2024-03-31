import React from 'react';
import Link from "next/link";
import {Playlist} from "@/app/lib/api/playlist";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

function Sidebar({fetchPlaylists}: { fetchPlaylists: () => Playlist[] }) {
    const playlists = fetchPlaylists();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={`/music-library`}>
                        <ListItemText primary={'Music Library'}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={`/playlists`}>
                        <ListItemText primary={'Playlists'}/>
                    </ListItemButton>
                </ListItem>
                <Divider />
                {playlists.map(p => (
                    <ListItem key={p.id} disablePadding>
                        <ListItemButton component="a" href={`/playlist/${p.id}`}>
                            <ListItemText primary={p.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;