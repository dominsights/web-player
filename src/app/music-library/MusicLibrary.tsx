'use client'
import React from 'react';
import {useMusicLibrary} from "@/app/music-library/useMusicLibrary";
import EventEmitter from "eventemitter3";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Stack
} from "@mui/material";
import MusicMoreMenu from "@/app/music-library/components/MusicMoreMenu";

export interface MusicLibraryProps {
    eventEmitter: EventEmitter
}

function MusicLibrary(props: MusicLibraryProps) {
    const {musics, upload, play} = useMusicLibrary(props);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        if (!event || !event.target.files) return;

        const audioFile = event.target.files[0];
        upload(audioFile);
    };

    return (
        <Stack spacing={3}>
            <Button variant="contained" component={'label'} sx={{ width: '20%'}}>
                Upload File
                <input type='file' hidden onChange={onFileChange}/>
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Title</TableCell>
                            <TableCell align={"left"}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {musics?.map(m => (
                            <TableRow key={m.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">
                                    {m.name}
                                </TableCell>
                                <TableCell align="right">
                                    <MusicMoreMenu play={play} trackName={m.name} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}

export default MusicLibrary;