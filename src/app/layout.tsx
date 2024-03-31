'use client'
import "./globals.css";
import Sidebar from "@/app/components/sidebar/Sidebar";
import {EventEmitterProvider} from "@/app/contexts/EventEmitterContext";
import Player from "@/app/components/player/Player";
import {StoreProvider} from "@/app/StoreProvider";
import {useAppSelector} from "@/app/lib/hooks";
import {selectPlaylists} from "@/app/lib/features/playlists/playlistsSlice";
import {ThemeProvider} from "@mui/material/styles";
import theme from './theme';
import CssBaseline from "@mui/material/CssBaseline";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {Box, Container} from "@mui/material";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const useFetchPlaylists = () => useAppSelector(selectPlaylists);

    return (
        <StoreProvider>
            <html lang="en">
            <body>
            <AppRouterCacheProvider options={{enableCssLayer: true}}>
                <ThemeProvider theme={theme}>
                    <Sidebar fetchPlaylists={useFetchPlaylists}/>
                    <EventEmitterProvider>
                        <CssBaseline/>
                        <Container maxWidth="lg">
                            <Box
                                sx={{
                                    my: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {children}
                                <Player/>
                            </Box>
                        </Container>
                    </EventEmitterProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
            </body>
            </html>
        </StoreProvider>
    );
}
