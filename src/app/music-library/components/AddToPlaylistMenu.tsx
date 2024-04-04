import React from 'react';
import {ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Add} from "@mui/icons-material";

function AddToPlaylistMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MenuItem onMouseEnter={(e) => setAnchorEl(e.currentTarget)}>
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
                sx={{
                    marginLeft: '1px'
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