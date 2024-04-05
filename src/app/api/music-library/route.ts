import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: undefined;
}

export async function GET(request: NextRequest, context: Context) {
    const musics = [{name: "Windowpane"}];

    // simulate IO latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ data: musics });
}