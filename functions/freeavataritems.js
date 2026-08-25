const rbx =
  "https://raw.githubusercontent.com/IuIas/skripts/refs/heads/main/.dev/robloxugc";


const IMG =
  "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/lhkredits.PNG";


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
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>RRixh iOS</title>

  <style>
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      background: #000;
    }

    body {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 260px;
      max-width: 75%;
      height: auto;
    }
  </style>
</head>

<body>
  <img src="${IMG}" alt="Lollypop Hub">
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }

const luaResponse = await fetch(rbx);

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
