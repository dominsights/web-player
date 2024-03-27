import {UseSidebar} from "@/app/components/sidebar/useSidebar";
import { Playlist } from "@/app/lib/api/playlist";

describe("SidebarViewModel", () => {
    it("should contain a playlist list", () => {
        const viewModel = new UseSidebar([]);

        const rock: Playlist = { id: 1, title: "Rock'n Roll", description: "My favorite Rock'n Roll songs", tracks: []};
        const jazz: Playlist = { id: 1, title: "Jazz", description: "My favorite Jazz songs", tracks: []};

        viewModel.addPlaylist(rock);
        viewModel.addPlaylist(jazz);

        expect(viewModel.playlists).toEqual([ rock, jazz ] );
    })
})