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

  // ============================================
  // NORMAL BROWSER VISIT
  // ============================================

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
      align-items: center;
      justify-content: center;

      padding:
        max(22px, env(safe-area-inset-top))
        20px
        max(22px, env(safe-area-inset-bottom));

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
      max-width: 760px;
    }

    .card {
      position: relative;

      width: 100%;

      padding: 54px 52px 50px;

      background:
        linear-gradient(
          145deg,
          rgba(18, 18, 21, 0.98),
          rgba(13, 13, 16, 0.98)
        );

      border: 1px solid #29292e;
      border-radius: 28px;

      box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.025);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 12px 21px;

      border: 1px solid #7c3035;
      border-radius: 999px;

      background: rgba(94, 29, 34, 0.28);

      color: #ffc8cb;

      font-size: 15px;
      font-weight: 800;

      letter-spacing: 2.2px;

      text-transform: uppercase;
    }

    h1 {
      max-width: 650px;

      margin:
        36px
        0
        26px;

      color: #ffffff;

      font-size: clamp(38px, 7vw, 60px);
      font-weight: 800;

      line-height: 1.08;

      letter-spacing: -2.4px;
    }

    .description {
      margin: 0;

      color: #a5a5ae;

      font-size: 21px;
      font-weight: 600;

      line-height: 1.65;
    }

    .description + .description {
      margin-top: 25px;
    }

    .buttons {
      display: flex;
      flex-direction: column;

      gap: 15px;

      margin-top: 39px;
    }

    .button {
      width: fit-content;
      min-width: 260px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 18px 28px;

      border-radius: 14px;

      font-family: inherit;

      font-size: 18px;
      font-weight: 800;

      text-decoration: none;

      cursor: pointer;

      transition:
        transform 0.16s ease,
        opacity 0.16s ease,
        background 0.16s ease,
        border-color 0.16s ease;
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
        0 9px 28px rgba(209, 45, 117, 0.17);
    }

    .primary:hover {
      opacity: 0.92;
    }

    .secondary {
      border: 1px solid #34343a;

      background: transparent;

      color: #ddddE2;
    }

    .secondary:hover {
      background: rgba(255, 255, 255, 0.035);
      border-color: #424249;
    }

    .domain-wrap {
      display: flex;
      justify-content: center;

      margin-top: 42px;
    }

    .domain {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 11px 22px;

      border: 1px solid #303035;
      border-radius: 999px;

      background: #141416;

      color: #eeeeF1;

      font-size: 15px;
      font-weight: 700;

      letter-spacing: 0.2px;
    }

    @media (max-width: 600px) {
      body {
        align-items: flex-start;

        padding-left: 0;
        padding-right: 0;

        padding-top: 125px;
      }

      .page {
        max-width: none;
      }

      .card {
        padding: 55px 29px 48px;

        border-left: 1px solid #29292e;
        border-right: 1px solid #29292e;

        border-radius: 27px;
      }

      .badge {
        font-size: 14px;
        padding: 11px 18px;
      }

      h1 {
        margin-top: 34px;

        font-size: 42px;

        letter-spacing: -1.9px;
      }

      .description {
        font-size: 19px;
        line-height: 1.65;
      }

      .buttons {
        margin-top: 35px;
      }

      .button {
        min-width: 0;
        width: fit-content;

        padding: 17px 24px;

        font-size: 17px;
      }

      .domain-wrap {
        margin-top: 40px;
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
          href="https://rrixh.pages.dev/"
        >
          Return Home
        </a>

        <a
          class="button secondary"
          href="https://rrixh.pages.dev/"
        >
          Contact Lollypop Hub
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

  // ============================================
  // ROBLOX / NON-BROWSER REQUEST
  // ============================================

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
