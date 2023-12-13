import { NextResponse, NextRequest } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req, res) {
  const query = req.nextUrl.searchParams;
  const path = query.get("path");
  console.log(path + "sss");
  const data = await fetch(`https://genius.com${path}`).then((res) =>
    res.text()
  );

  const html = cheerio.load(data);
  const div = html("[data-lyrics-container='true']").html();

  return new Response(div);
}

export async function POST(req, res) {
  return new Response("div");
}
