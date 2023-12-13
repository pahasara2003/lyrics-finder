import { NextResponse } from "next/server";

export async function GET(req, res) {
  const data = await fetch(
    `${process.env.DOMAIN}/search${req.nextUrl.search}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      mode: "no-cors",
    }
  ).then((res) => res.json());

  return NextResponse.json(data.response.hits);
}
