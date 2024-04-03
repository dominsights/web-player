import React from 'react';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Add, PlayArrow} from "@mui/icons-material";
import AddToPlaylistMenu from "@/app/music-library/components/AddToPlaylistMenu";

function MusicMoreMenu({ play, trackName }: { play: (trackName: string) => void, trackName: string }) {
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
            <IconButton aria-label="more"
                        id="more-button"
                        aria-controls={open ? 'more-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="more-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'more-button',
                }}
            >
                <MenuItem onClick={() => play(trackName)}>
                    <ListItemIcon>
                        <PlayArrow fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Play</ListItemText>
                </MenuItem>
                <AddToPlaylistMenu />
            </Menu>
        </div>
    );
}

export default MusicMoreMenu;