import {formatDate, secondsToTime, Track} from "@/app/lib/features/playlists/Track";

describe('Track', () => {
    it('should display date in expected format', () => {
        const track1 = {
            title: "7empest",
            artist: "TOOL",
            album: "Fear Inoculum",
            dateAdded: formatDate(new Date(2024, 3, 2)),
            duration: secondsToTime(60 * 3)
        };
        expect(track1.dateAdded).toEqual('This week');
        
        const track2 = {
            title: "7empest",
            artist: "TOOL",
            album: "Fear Inoculum",
            dateAdded: formatDate(new Date(2024, 1, 20)),
            duration: secondsToTime(60 * 3)
        };
        expect(track2.dateAdded).toEqual('Jan 20, 2024');
    })

    it('should display time in expected format', () => {
        const track1 = {
            title: "7empest",
            artist: "TOOL",
            album: "Fear Inoculum",
            dateAdded: new Date(2024, 3, 2).toISOString(),
            duration: secondsToTime(60 * 3)
        };
        expect(track1.duration).toEqual('3:00');
        const track2 = {
            title: "7empest",
            artist: "TOOL",
            album: "Fear Inoculum",
            dateAdded: new Date(2024, 3, 2).toISOString(),
            duration: secondsToTime(60 * 5)
        };
        expect(track2.duration).toEqual('5:00');
    })
})