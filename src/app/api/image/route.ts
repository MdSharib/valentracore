import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const file = url.searchParams.get("file");
  if (!file) return new Response("Not found", { status: 404 });
  
  try {
    const ext = path.extname(file).slice(1);
    const contentType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
    const buffer = fs.readFileSync(file);
    return new Response(buffer, {
      headers: { "Content-Type": contentType, "Cache-Control": "public, max-age=31536000" }
    });
  } catch (e) {
    return new Response("Not found", { status: 404 });
  }
}
