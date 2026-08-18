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

  // Browser visit = show protected page
  if (isBrowserVisit) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
  >

  <meta name="theme-color" content="#08080a">

  <title>Access Denied | Lollypop Hub</title>

  <style>
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
      padding: 0;
      background: #08080a;
    }

    body {
      min-height: 100vh;
      min-height: 100dvh;

      display: flex;
      align-items: flex-start;
      justify-content: center;

      padding:
        max(120px, env(safe-area-inset-top))
        16px
        max(35px, env(safe-area-inset-bottom));

      color: #ffffff;

      font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
    }

    .page {
      width: 100%;
      max-width: 720px;
    }

    .card {
      width: 100%;

      padding: 48px 48px 42px;

      background:
        linear-gradient(
          145deg,
          rgba(18, 18, 21, 0.98),
          rgba(13, 13, 16, 0.98)
        );

      border: 1px solid #29292e;
      border-radius: 26px;

      box-shadow:
        0 28px 70px rgba(0, 0, 0, 0.32),
        inset 0 1px 0 rgba(255, 255, 255, 0.025);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 10px 19px;

      border: 1px solid #7c3035;
      border-radius: 999px;

      background: rgba(94, 29, 34, 0.28);

      color: #ffc8cb;

      font-size: 14px;
      font-weight: 800;

      letter-spacing: 2px;
    }

    h1 {
      max-width: 580px;

      margin: 31px 0 23px;

      color: #ffffff;

      font-size: clamp(34px, 6vw, 50px);
      font-weight: 800;

      line-height: 1.09;

      letter-spacing: -2px;
    }

    .description {
      margin: 0;

      color: #a5a5ae;

      font-size: 19px;
      font-weight: 600;

      line-height: 1.55;
    }

    .description + .description {
      margin-top: 23px;
    }

    .buttons {
      display: flex;
      flex-direction: column;

      align-items: flex-start;

      gap: 13px;

      margin-top: 32px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      min-width: 235px;

      padding: 16px 24px;

      border-radius: 13px;

      font-family: inherit;

      font-size: 17px;
      font-weight: 800;

      text-decoration: none;

      cursor: pointer;

      transition:
        transform 0.15s ease,
        opacity 0.15s ease,
        background 0.15s ease,
        border-color 0.15s ease;
    }

    .button:active {
      transform: scale(0.965);
    }

    .primary {
      border: 1px solid #d62d77;

      background:
        linear-gradient(
          135deg,
          #dd347e,
          #c9286d
        );

      color: #ffffff;

      box-shadow:
        0 8px 24px rgba(209, 45, 117, 0.16);
    }

    .primary:hover {
      opacity: 0.92;
    }

    .secondary {
      border: 1px solid #34343a;

      background: transparent;

      color: #dedee3;
    }

    .secondary:hover {
      background: rgba(255, 255, 255, 0.035);
      border-color: #424249;
    }

    .domain-wrap {
      display: flex;
      justify-content: center;

      margin-top: 34px;
    }

    .domain {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 10px 20px;

      border: 1px solid #303035;
      border-radius: 999px;

      background: #141416;

      color: #eeeeF1;

      font-size: 14px;
      font-weight: 700;
    }

    @media (max-width: 600px) {
      body {
        padding-top: 125px;
        padding-left: 0;
        padding-right: 0;
      }

      .page {
        max-width: none;
      }

      .card {
        padding: 38px 28px 36px;
        border-radius: 24px;
      }

      .badge {
        font-size: 13px;
        padding: 9px 17px;
      }

      h1 {
        margin-top: 28px;
        margin-bottom: 21px;

        font-size: 36px;
        line-height: 1.08;
        letter-spacing: -1.6px;
      }

      .description {
        font-size: 17px;
        line-height: 1.55;
      }

      .description + .description {
        margin-top: 21px;
      }

      .buttons {
        margin-top: 29px;
        gap: 12px;
      }

      .button {
        min-width: 0;

        padding: 15px 22px;

        font-size: 16px;
      }

      .domain-wrap {
        margin-top: 32px;
      }
    }
  </style>
</head>

<body>

  <main class="page">

    <section class="card">

      <div class="badge">
        ACCESS DENIED
      </div>

      <h1>
        This Lua script is protected by Lollypop Hub
      </h1>

      <p class="description">
        You don't have permission to access these files.
      </p>

      <p class="description">
        This script has been protected against unauthorized access,
        reverse engineering, and tampering.
      </p>

      <div class="buttons">

        <a
          class="button primary"
          href="https://www.roblox.com/users/3001347724/profile"
        >
          Return Home
        </a>

        <a
          class="button secondary"
          href="https://discordapp.com/users/1284685023630458963"
        >
          Kontact Lollypop Hub
        </a>

      </div>

    </section>

    <div class="domain-wrap">
      <div class="domain">
        rrixh.pages.dev
      </div>
    </div>

  </main>

</body>
</html>`;

    return new Response(html, {
      status: 200,

      headers: {
        "Content-Type": "text/html; charset=UTF-8",

        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",

        "Pragma": "no-cache",

        "Expires": "0",

        "X-Robots-Tag":
          "noindex, nofollow, noarchive, nosnippet"
      }
    });
  }

  // Roblox / other non-browser request = return Lua
  try {
    const luaResponse = await fetch(LOLLYPOPHUB, {
      headers: {
        "Cache-Control": "no-cache"
      }
    });

    if (!luaResponse.ok) {
      return new Response(
        "-- Lollypop Hub failed to load. HTTP " +
          luaResponse.status,
        {
          status: 502,

          headers: {
            "Content-Type":
              "text/plain; charset=UTF-8",

            "Cache-Control":
              "no-store"
          }
        }
      );
    }

    const luaCode =
      await luaResponse.text();

    return new Response(luaCode, {
      status: 200,

      headers: {
        "Content-Type":
          "text/plain; charset=UTF-8",

        "Cache-Control":
          "no-store, no-cache, must-revalidate",

        "Pragma":
          "no-cache",

        "Expires":
          "0"
      }
    });
  } catch (error) {
    return new Response(
      "-- Lollypop Hub connection failed.",
      {
        status: 502,

        headers: {
          "Content-Type":
            "text/plain; charset=UTF-8",

          "Cache-Control":
            "no-store"
        }
      }
    );
  }
}
