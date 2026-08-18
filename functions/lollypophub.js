const _ =
  "https://raw.githubusercontent.com/rrixh/lollypophubv5.8test/refs/heads/main/lulaslollipop";

export async function onRequestGet(context) {
  const request = context.request;

  const fetchMode =
    request.headers.get("sec-fetch-mode") || "";

  const fetchDestination =
    request.headers.get("sec-fetch-dest") || "";

  const isBrowserVisit =
    fetchMode === "navigate" ||
    fetchDestination === "document";

  if (isBrowserVisit) {
    const lh = `loadstring(game:HttpGet("https://pastebin.com/6edDlaJ/raw", true))()`;

    const escaped = lh
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Raw Source</title>

  <style>
    html,
    body {
      margin: 0;
      padding: 0;

      width: 100%;
      min-height: 100%;

      background: #000000;
      color: #ffffff;
    }

    body {
      padding: 12px;

      font-family:
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        "Courier New",
        monospace;

      font-size: 14px;
      line-height: 1.35;

      overflow-x: hidden;
    }

    pre {
      margin: 0;
      padding: 0;

      font: inherit;
      color: inherit;

      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;

      max-width: 100%;
    }

    @media (max-width: 600px) {
      body {
        font-size: 13px;
        padding: 10px;
      }
    }
  </style>
</head>

<body><pre>${escaped}</pre></body>
</html>`;

    return new Response(html, {
      status: 200,

      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }

  const luaResponse = await fetch(_);

  if (!luaResponse.ok) {
    return new Response(
      "-- Failed to load Lollypop Hub.",
      {
        status: 502,

        headers: {
          "Content-Type": "text/plain; charset=UTF-8",
          "Cache-Control": "no-store"
        }
      }
    );
  }

  return new Response(luaResponse.body, {
    status: 200,

    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
      "Cache-Control": "no-store"
    }
  });
}
