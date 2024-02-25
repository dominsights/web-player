import {SidebarViewModel} from "@/app/components/sidebar/SidebarViewModel";
import {Playlist} from "@/app/components/sidebar/Playlist";

describe("SidebarViewModel", () => {
    it("should contain a playlist list", () => {
        const viewModel = new SidebarViewModel([]);
        const rock = new Playlist(1,"Rock'n Roll");
        const jazz = new Playlist(2,"Jazz");

        viewModel.addPlaylist(rock);
        viewModel.addPlaylist(jazz);

        expect(viewModel.playlists).toEqual([ rock, jazz ] );
    })
})