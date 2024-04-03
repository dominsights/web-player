import React from 'react';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Add, PlayArrow} from "@mui/icons-material";

function AddToPlaylistMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MenuItem onClick={(e) => setAnchorEl(e.currentTarget)}>
                <ListItemIcon>
                    <Add fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add to playlist</ListItemText>
            </MenuItem>
            <Menu
                id="add-to-playlist-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'more-button',
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>
                    <ListItemText>Playlist 1</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default AddToPlaylistMenu;