import {usePlaylistsViewModel} from "@/app/playlist/usePlaylistsViewModel";

export default function PlaylistsView() {
    const { playlists } = usePlaylistsViewModel();

    return (<div>Playlists View</div>);
}