// A mock function to mimic making an async request for data
import {Music} from "@/app/lib/features/music-library/musicLibrarySlice";

export const fetchMusics = async () => {
    const response = await fetch("http://localhost:3000/api/music-library", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const result: { data: Music[] } = await response.json();
    return result;
};