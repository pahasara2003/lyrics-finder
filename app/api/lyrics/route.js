import { NextResponse, NextRequest } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req, res) {
  const query = req.nextUrl.searchParams;
  const id = query.get("id");
  const data = await fetch(`https://www.genius.com/songs/${id}/embed.js`).then(
    (res) => res.text()
  );

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
  }

  function getStringBetweenWords(inputString, startWord, endWord) {
    const escapedStartWord = escapeRegExp(startWord);
    const escapedEndWord = escapeRegExp(endWord);
    const regexPattern = new RegExp(
      `${escapedStartWord}(.*?${escapedEndWord})`
    );
    const match = inputString.match(regexPattern);

    if (match && match[1]) {
      return match[1].trim();
    } else {
      return null; // Return null if the words are not found
    }
  }

  // Example usage:
  const inputString =
    "This is a sample string between the start and end words.";
  const startWord = "rg_embed_body";
  const endWord = "rg_embed_footer";

  const result =
    '<div class = "lyrics' +
    getStringBetweenWords(data, startWord, endWord) +
    '"></div>';

  return new Response(result.replace(/\\n/g, "").replace(/\\/g, ""));
}

export async function POST(req, res) {
  return new Response("div");
}
