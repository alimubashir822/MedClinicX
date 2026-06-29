import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Please provide an array of URLs to index" },
        { status: 400 }
      );
    }

    const key = "8f2cda541e2b4f2c9e782d49c693a12b";
    const host = "medclinicx.com"; // Change to your actual production domain

    // IndexNow API Request Body
    const requestBody = {
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: urls,
    };

    // Submit to Bing (it automatically shares with other IndexNow search engines)
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow.`,
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `IndexNow submission failed: ${errorText}` },
        { status: response.status }
      );
    }
  } catch (error) {
    const err = error as Error;
    console.error("IndexNow Trigger Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
