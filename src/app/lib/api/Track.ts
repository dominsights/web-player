
export type Track = {
    title: string;
    artist: string;
    album: string;
    dateAdded: string;
    duration: string;
}

export function formatDate(date: Date) {
    const today = new Date();
    let oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    if (date >= oneWeekAgo) {
        return 'This week';
    } else {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[date.getMonth()-1]} ${date.getDate()}, ${date.getFullYear()}`;
    }
}

export function secondsToTime (seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}