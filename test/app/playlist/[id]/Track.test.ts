import { Track } from "@/app/playlist/[id]/Track";

describe('Track', () => {
    it('should display date in expected format', () => {
        const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60*3);
        expect(track1.dateAdded).toEqual('This week');
        
        const track2 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 1, 20), 60*3);
        expect(track2.dateAdded).toEqual('Jan 20, 2024');
    })

    it('should display time in expected format', () => {
        const track1 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 2), 60*3);
        expect(track1.duration).toEqual('3:00');
        const track2 = new Track("7empest", "TOOL", "Fear Inoculum", new Date(2024, 3, 1), 60*5);
        expect(track2.duration).toEqual('5:00');
    })
})