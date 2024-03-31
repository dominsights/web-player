import React, {FC, ReactElement} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import Player from "@/app/components/player/Player";

export const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                //backgroundColor: "secondary.main",
                width: '100%',
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position:'fixed',
                bottom: 0
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Player/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;