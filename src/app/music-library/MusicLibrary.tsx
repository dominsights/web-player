'use client'
import React from 'react';
import {useEventEmitter} from "@/app/contexts/EventEmitterContext";
import {useMusicLibrary} from "@/app/music-library/useMusicLibrary";
import EventEmitter from "eventemitter3";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

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
        <div>
            <input type='file' onChange={onFileChange}/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align={"right"}>Title</TableCell>
                            <TableCell align={"right"}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {musics?.map(m => (
                            <TableRow key={m} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">
                                    {m}
                                </TableCell>
                                <TableCell align="right">
                                    <button onClick={() => play(m)}>Play</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MusicLibrary;