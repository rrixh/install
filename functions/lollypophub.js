const LOLLYPOPHUB =
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
    const lh = ` loadstring(game:HttpGet("https://pastebin.com/6edDlaJ/raw", true))()
`;

    const escaped = lh
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const lines = escaped
      .split("\n")
      .map((line, index) => `
        <div class="line">
          <span class="num">${index + 1}</span>
          <span class="code">${line || " "}</span>
        </div>
      `)
      .join("");

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
      -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      background: #0d1117;
      color: #e6edf3;
    }

    body {
      font-family:
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        "Liberation Mono",
        monospace;

      font-size: 14px;
    }

    .source {
      width: 100%;
      padding: 12px 0 30px;
      overflow-x: auto;
    }

    .line {
      display: flex;
      min-height: 21px;
      line-height: 21px;
      white-space: pre;
    }

    .line:hover {
      background: rgba(177, 186, 196, 0.06);
    }

    .num {
      width: 58px;
      min-width: 58px;

      padding-right: 14px;

      text-align: right;

      user-select: none;

      color: #484f58;
    }

    .code {
      padding-right: 25px;
      color: #e6edf3;
    }

    @media (max-width: 600px) {
      body {
        font-size: 13px;
      }

      .num {
        width: 44px;
        min-width: 44px;
        padding-right: 11px;
      }
    }
  </style>
</head>

<body>

  <div class="source">
    ${lines}
  </div>

</body>
</html>`;

    return new Response(html, {
      status: 200,

      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }

  const luaResponse = await fetch(LOLLYPOPHUB);

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
