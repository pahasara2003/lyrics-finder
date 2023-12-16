import { NextResponse } from "next/server";

export async function GET(req, res) {
  const id = req.nextUrl.searchParams.get("id");
  const data = await fetch(`https://api.genius.com/songs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    mode: "no-cors",
  }).then((res) => res.json());

  return NextResponse.json(data.response.song);
}
