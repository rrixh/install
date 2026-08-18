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
    * {
      box-sizing: border-box;
    }

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
      padding: 8px 7px;

      font-family:
        ui-monospace,
        "SFMono-Regular",
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        "Courier New",
        monospace;

      font-size: 11px;
      line-height: 1.28;

      overflow-x: hidden;
    }

    pre {
      display: block;

      width: 100%;
      max-width: 100%;

      margin: 0;
      padding: 0;

      font-family: inherit;
      font-size: inherit;
      font-weight: 400;
      line-height: inherit;

      color: #ffffff;
      background: transparent;

      white-space: pre-wrap;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: normal;
    }

    @media (max-width: 600px) {
      body {
        padding: 7px 6px;

        font-size: 10px;
        line-height: 1.3;
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
