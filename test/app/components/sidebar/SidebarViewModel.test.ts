import {SidebarViewModel} from "@/app/components/sidebar/SidebarViewModel";
import {Playlist} from "@/app/components/sidebar/Playlist";

describe("SidebarViewModel", () => {
    it("should contain a playlist list", () => {
        const viewModel = new SidebarViewModel(playlists);
        const rock = new Playlist("Rock'n Roll");
        const jazz = new Playlist("Jazz");

        viewModel.addPlaylist(rock);
        viewModel.addPlaylist(jazz);

        expect(viewModel.playlists).toEqual([ rock, jazz ] );
    })
})