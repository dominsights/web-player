import {usePlaylists} from "@/app/playlist/usePlaylists";

export default function Playlists() {
    const { playlists } = usePlaylists();

    return (<div>Playlists View</div>);
}