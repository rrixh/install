/*
  DELTA KEY & AD-LINK BYPASSER 🍭
*/

const BRAND_IMAGE = "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/lhkredits.PNG";

const SOCIAL_LINKS = {
  roblox: "https://www.roblox.com/users/3001347724/profile",
  snapchat: "https://story.snapchat.com/s/clpped",
  discord: "https://discordapp.com/users/1284685023630458963",
  telegram: "https://t.me/sIipped",
  youtube: "https://youtube.com/@rsgmj",
  instagram: "https://www.instagram.com/nugit",
  cashapp: "https://cash.app/$99fail",
  tiktok: "https://www.tiktok.com/@rrixh"
};

const SUPPORTED_HOSTS = [
  "mega-guy.com",
  "loot-link.com",
  "best-links.org",
  "loot-links.com",
  "megaspremium.com",
  "lootdest.com",
  "direct-links.net",
  "risquemega.com",
  "onlyfriends.club",
  "onepiecered.co",
  "multileaks.com",
  "luvsquad-links.com",
  "lootdest.org",
  "free-leaks.com",
  "goldmega.online",
  "realiukzemydre.com",
  "kmendation.com",
  "lootlinks.co",
  "onlyshare.info",
  "leakplugs.com",
  "nswfbox.com",
  "eofmukindwo.com",
  "op-packs.com",
  "thedetective.online",
  "forlinkmeg.com",
  "thegoatpack.org",
  "of-leaks.xyz",
  "links.spacebin.in",
  "supermeg.com",
  "onlyfanessereloaded.com",
  "fanzleaks.com",
  "cemendemons.com",
  "premiummegaz.com",
  "thepremium.online",
  "pasteebins.com",
  "baddiezcentral.com",
  "megazone.website",
  "leak-pragmatic.com",
  "megadumpz.com",
  "thhaven.net",
  "meg4fans.com",
  "depravityweb.co",
  "discordlink.cc",
  "megashub.co",
  "streamergirls.org",
  "your-leaks.com",
  "onlylinksmegas.xyz",
  "pypy.spacebin.in",
  "pypy.in",
  "luvsquad-links.cmo",
  "beast.net.in",
  "hook.beast.net.in",
  "all-fans.online",
  "fansmega.com",
  "worldpacks.co",
  "night-hub.online",
  "dailyofleaks.com",
  "pkofs.com",
  "offree90.com",
  "megadropz.com",
  "onlyfunlink.com",
  "direct-links.org",
  "leaks4you.com",
  "onlylinksmegas.com",
  "direct-link.net",
  "downbadleaks.com",
  "onlyfanscloud.com",
  "missleakz.com",
  "leakszone.online",
  "links-loot.com",
  "holyfanslinks.com",
  "utopianleaks.com",
  "megavip.store",
  "drlinker.com",
  "baddiesheaven.com",
  "of4lm-links.com",
  "holedonly.store",
  "lootlinks.com",
  "free-content.pro",
  "milky-center.com",
  "megaofs.com",
  "bleleadersto.com",
  "link-target.org",
  "daughablelea.com",
  "mymegalinks.com",
  "heroslut.com",
  "tonordersitye.com",
  "vip-linknetwork.com",
  "birdbiss.com",
  "loot-labs.com",
  "links.lootlabs.gg",
  "lootlabs.com",
  "link-hub.net",
  "locconnect.com",
  "premiumstashdrop.com",
  "lootdest.info",
  "of-area.com",
  "link-target.net",
  "megalnk.com",
  "lootlink.org",
  "nsfwcherry.com",
  "cherrypacks.online",
  "hotstars-leaks.com",
  "onlymega.co",
  "hanimeturks.com",
  "dailyleakz.com",
  "content-hub.club",
  "dailyadultmegas.com",
  "oui-chu.com",
  "megalinks.one",
  "starleakz.com",
  "babeslink.click",
  "ofgirls3x.com",
  "pnp-drops.me",
  "nsfw-paradise.club",
  "key-access.co",
  "leaksmix.com",
  "sensual-leaks.com",
  "ofhub-leaks.com",
  "onlyforfan.online",
  "sweetjuice-mega.com",
  "crip-hub.com",
  "leaksfreeday.com",
  "thotshaven.online",
  "mega-leaked.com",
  "beautifulgirls.social",
  "tavernleaks.com",
  "nudeleaksteenz.com",
  "slutywet.com",
  "leakutopia.site",
  "secret-packs.com",
  "attiktok22.com",
  "pancakes-leaks.com",
  "diamond-leaks.com",
  "lewd-leaks.com",
  "ftbleaks.net",
  "thepytheaven.org",
  "of-region.online",
  "admiregirls-byme.com",
  "mzehoney12.com",
  "herplace.online",
  "megaplugleaks.com",
  "of-kingdom.com",
  "onlyfansmegafolder.com",
  "adfoc.us",
  "boost.ink",
  "cuty.io",
  "cety.app",
  "linkvertise.com",
  "mboost.me",
  "bst.gg",
  "booo.st",
  "mendationforc.info",
  "paster.so",
  "paster.gg",
  "rekonise.com",
  "social-unlock.com",
  "socialwolvez.com",
  "sub2get.com",
  "sub2unlock.com",
  "sub2unlock.io",
  "sub2unlock.net",
  "sub2unlock.online",
  "sub2unlock.top",
  "sub4unlock.pro",
  "sub4unlock.com",
  "sub4unlock.io",
  "subfinal.com",
  "unlocknow.net",
  "v.gd",
  "work.ink",
  "workink.net",
  "r.work.ink",
  "workink.one",
  "workink.me",
  "ytsubme.com",
  "esohasl.net",
  "rbscripts.net",
  "link.rbscripts.net",
  "auth.platorelay.com"
];

const BYPASS_TIME = 10;
const BYPASS_KEY = "";

function normalizeHost(hostname) {
  hostname = String(hostname || "").toLowerCase().trim();
  if (hostname.startsWith("www.")) hostname = hostname.slice(4);
  return hostname;
}

function isSupportedHost(hostname) {
  const host = normalizeHost(hostname);

  return SUPPORTED_HOSTS.some((allowed) => {
    const clean = normalizeHost(allowed);
    return host === clean || host.endsWith("." + clean);
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

async function getGlobalStats(env) {
  if (!env || !env.KEYBYPASS_STATS) return null;

  try {
    const raw = await env.KEYBYPASS_STATS.get("successful_bypasses");
    const n = Number.parseInt(raw || "0", 10);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return null;
  }
}

async function incrementGlobalStats(env) {
  if (!env || !env.KEYBYPASS_STATS) return null;

  try {
    const raw = await env.KEYBYPASS_STATS.get("successful_bypasses");
    const current = Number.parseInt(raw || "0", 10) || 0;
    const next = current + 1;
    await env.KEYBYPASS_STATS.put("successful_bypasses", String(next));
    return next;
  } catch {
    return null;
  }
}


async function resolveBypassOnServer(input) {
  const apiUrl = new URL("https://api.bypass.vip/bypass");
  apiUrl.searchParams.set("url", input);

  try {
    const res = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });

    const raw = await res.text();
    let data = null;

    try {
      data = JSON.parse(raw);
    } catch {
      return {
        ok: false,
        error: "bypass API returned an invalid response",
        status: res.status
      };
    }

    // The public docs show `result`, but accept a few common response
    // shapes too so a harmless API format change does not break the site.
    const candidates = [
      data && data.result,
      data && data.bypassed,
      data && data.url,
      data && data.destination,
      data && data.data && data.data.result,
      data && data.data && data.data.url
    ];

    let finalUrl = null;

    for (const value of candidates) {
      if (typeof value !== "string") continue;

      const trimmed = value.trim();

      if (/^https?:\/\//i.test(trimmed)) {
        finalUrl = trimmed;
        break;
      }
    }

    // A valid direct result is enough. Do not require status === "success",
    // because some API clients only check the returned result URL.
    if (finalUrl) {
      try {
        const host = new URL(finalUrl).hostname.toLowerCase();

        if (host === "bypass.vip" || host.endsWith(".bypass.vip")) {
          return {
            ok: false,
            error: "bypass API did not return a direct result",
            status: res.status
          };
        }
      } catch {
        return {
          ok: false,
          error: "bypass API returned an invalid result",
          status: res.status
        };
      }

      return {
        ok: true,
        url: finalUrl
      };
    }

    if (data && typeof data.message === "string" && data.message.trim()) {
      return {
        ok: false,
        error: data.message.trim(),
        status: res.status
      };
    }

    if (data && data.status === "error") {
      return {
        ok: false,
        error: "this URL could not be bypassed. enter a new link!",
        status: res.status
      };
    }

    return {
      ok: false,
      error: "this URL did not return a bypassed link. enter a new link!",
      status: res.status
    };
  } catch {
    return {
      ok: false,
      error: "bypass request failed"
    };
  }
}

async function handleApi(request, env, url) {
  if (request.method === "GET" && url.searchParams.get("api") === "stats") {
    const globalCount = await getGlobalStats(env);

    return json({
      ok: true,
      global: globalCount,
      globalEnabled: globalCount !== null
    });
  }

  if (request.method === "POST" && url.searchParams.get("api") === "bypass") {
    let body;

    try {
      body = await request.json();
    } catch {
      return json({
        ok: false,
        error: "enter a link!"
      }, 400);
    }

    const input = String(body?.url || "").trim();

    if (!input || !input.toLowerCase().startsWith("https://")) {
      return json({
        ok: false,
        error: "enter a link!"
      }, 400);
    }

    let parsed;
    try {
      parsed = new URL(input);
    } catch {
      return json({
        ok: false,
        error: "enter a link!"
      }, 400);
    }

    if (parsed.protocol !== "https:") {
      return json({
        ok: false,
        error: "enter a link!"
      }, 400);
    }

    if (!isSupportedHost(parsed.hostname)) {
      return json({
        ok: false,
        unsupported: true,
        error: "this URL is not supported. enter a new link!"
      }, 422);
    }

    const resolved = await resolveBypassOnServer(input);

    if (!resolved.ok || !resolved.url) {
      return json({
        ok: false,
        error: resolved.error || "bypass failed",
        upstreamStatus: resolved.status || null
      }, 502);
    }

    const globalCount = await incrementGlobalStats(env);

    return json({
      ok: true,
      resultUrl: resolved.url,
      global: globalCount,
      globalEnabled: globalCount !== null
    });
  }

  return null;
}

function pageHtml() {
  const supportedJson = JSON.stringify(SUPPORTED_HOSTS);
  const socialJson = JSON.stringify(SOCIAL_LINKS);
  const brandImageJson = JSON.stringify(BRAND_IMAGE);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#090b10">
  <meta name="color-scheme" content="dark">
  <title>DELTA KEY BYPASS</title>

  <style>
    :root{
      --bg:#07090d;
      --bg2:#0d1118;
      --panel:rgba(18,23,32,.78);
      --panel2:rgba(12,16,23,.92);
      --line:rgba(255,255,255,.09);
      --text:#f5f7fb;
      --muted:#98a1b3;
      --muted2:#697386;
      --accent:#8f6cff;
      --accent2:#3fe0c5;
      --accent3:#ff4e8a;
      --danger:#ff5d73;
      --success:#52e29b;
      --shadow:0 28px 85px rgba(0,0,0,.48);
      --radius:24px;
    }

    *{
      box-sizing:border-box;
      -webkit-tap-highlight-color:transparent;
    }

    html{
      min-height:100%;
      background:var(--bg);
      scroll-behavior:smooth;
    }

    body{
      margin:0;
      min-height:100vh;
      color:var(--text);
      font-family:Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      overflow-x:hidden;
      background:
        radial-gradient(circle at 14% -5%, rgba(143,108,255,.18), transparent 32%),
        radial-gradient(circle at 94% 7%, rgba(63,224,197,.12), transparent 31%),
        linear-gradient(180deg,#080a0f 0%,#080a0e 44%,#05070a 100%);
    }

    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      opacity:.25;
      background-image:
        linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);
      background-size:36px 36px;
      mask-image:linear-gradient(to bottom,black,transparent 82%);
    }

    .glow{
      position:fixed;
      width:340px;
      height:340px;
      border-radius:50%;
      filter:blur(90px);
      opacity:.12;
      pointer-events:none;
      z-index:0;
    }

    .glow.one{
      top:18%;
      left:-180px;
      background:#8f6cff;
    }

    .glow.two{
      right:-180px;
      top:54%;
      background:#3fe0c5;
    }

    .shell{
      width:min(980px,calc(100% - 28px));
      margin:0 auto;
      position:relative;
      z-index:1;
      padding:22px 0 80px;
    }

    .topbar{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      margin-bottom:24px;
    }

    .brand-mini{
      display:flex;
      align-items:center;
      gap:10px;
      min-width:0;
    }

    .brand-dot{
      width:38px;
      height:38px;
      border-radius:13px;
      display:grid;
      place-items:center;
      font-weight:900;
      letter-spacing:-1px;
      background:
        linear-gradient(145deg,rgba(143,108,255,.95),rgba(63,224,197,.8));
      box-shadow:0 10px 30px rgba(143,108,255,.2);
    }

    .brand-copy{
      min-width:0;
    }

    .brand-copy strong{
      display:block;
      font-size:14px;
      letter-spacing:.16em;
      white-space:nowrap;
    }

    .brand-copy span{
      display:block;
      margin-top:2px;
      color:var(--muted2);
      font-size:11px;
      letter-spacing:.08em;
    }

    .status-pill{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:9px 12px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.035);
      border-radius:999px;
      color:var(--muted);
      font-size:12px;
      white-space:nowrap;
    }

    .status-pill i{
      width:8px;
      height:8px;
      border-radius:50%;
      background:var(--success);
      box-shadow:0 0 15px rgba(82,226,155,.75);
    }

    .hero{
      border:1px solid var(--line);
      border-radius:32px;
      overflow:hidden;
      background:
        linear-gradient(160deg,rgba(255,255,255,.045),rgba(255,255,255,.018)),
        rgba(10,13,19,.82);
      box-shadow:var(--shadow);
      backdrop-filter:blur(20px);
    }

    .hero-image-wrap{
      position:relative;
      height:210px;
      overflow:hidden;
      border-bottom:1px solid var(--line);
      background:
        radial-gradient(circle at 50% 10%,rgba(143,108,255,.2),transparent 44%),
        #090c12;
    }

    .hero-image-wrap::after{
      content:"";
      position:absolute;
      inset:0;
      background:
        linear-gradient(to bottom,rgba(7,9,13,.04),rgba(7,9,13,.72)),
        linear-gradient(90deg,rgba(143,108,255,.07),transparent 40%,rgba(63,224,197,.07));
      pointer-events:none;
    }

    .hero-image{
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
      opacity:.88;
    }

    .hero-body{
      padding:38px clamp(20px,5vw,54px) 46px;
    }

    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:9px;
      margin-bottom:14px;
      padding:8px 11px;
      color:#c8c1ff;
      border:1px solid rgba(143,108,255,.22);
      border-radius:999px;
      background:rgba(143,108,255,.08);
      font-size:11px;
      font-weight:800;
      letter-spacing:.13em;
      text-transform:uppercase;
    }

    h1{
      margin:0;
      max-width:760px;
      font-size:clamp(44px,8vw,78px);
      line-height:.94;
      letter-spacing:-.055em;
      font-weight:950;
    }

    .gradient-text{
      color:transparent;
      background:linear-gradient(100deg,#fff 5%,#c8bdff 38%,#79efdc 73%,#fff 100%);
      -webkit-background-clip:text;
      background-clip:text;
    }

    .subtitle{
      margin:20px 0 0;
      max-width:670px;
      color:var(--muted);
      font-size:clamp(15px,2.5vw,18px);
      line-height:1.65;
    }

    .bypass-card{
      margin-top:32px;
      padding:17px;
      border:1px solid rgba(255,255,255,.105);
      border-radius:22px;
      background:rgba(3,5,8,.48);
      box-shadow:inset 0 1px rgba(255,255,255,.025);
    }

    .input-shell{
      display:flex;
      align-items:center;
      gap:11px;
      min-height:61px;
      padding:0 16px;
      border:1px solid rgba(255,255,255,.11);
      border-radius:16px;
      background:rgba(255,255,255,.036);
      transition:border-color .2s ease,box-shadow .2s ease,background .2s ease;
    }

    .input-shell:focus-within{
      border-color:rgba(143,108,255,.58);
      box-shadow:0 0 0 4px rgba(143,108,255,.09);
      background:rgba(255,255,255,.05);
    }

    .lock{
      flex:0 0 auto;
      width:20px;
      height:20px;
      opacity:.66;
    }

    input{
      width:100%;
      min-width:0;
      border:0;
      outline:0;
      background:transparent;
      color:var(--text);
      font:inherit;
      font-size:16px;
      font-weight:650;
    }

    input::placeholder{
      color:#677083;
      font-weight:600;
    }

    .bypass-button{
      position:relative;
      width:100%;
      min-height:61px;
      margin-top:12px;
      border:1px solid rgba(255,255,255,.07);
      border-radius:16px;
      color:#70798a;
      background:#171b22;
      cursor:pointer;
      font-size:16px;
      font-weight:900;
      letter-spacing:.02em;
      overflow:hidden;
      transition:
        color .22s ease,
        transform .15s ease,
        border-color .22s ease,
        background .22s ease,
        box-shadow .22s ease;
    }

    .bypass-button::before{
      content:"";
      position:absolute;
      inset:0;
      opacity:0;
      background:linear-gradient(105deg,rgba(143,108,255,.24),rgba(63,224,197,.18));
      transition:opacity .22s ease;
    }

    .bypass-button::after{
      content:"";
      position:absolute;
      left:12%;
      right:12%;
      bottom:0;
      height:2px;
      opacity:.2;
      background:linear-gradient(90deg,var(--accent3),#ffcc58,var(--accent2),var(--accent));
      transition:opacity .22s ease,left .22s ease,right .22s ease;
    }

    .bypass-button.ready{
      color:#fff;
      border-color:rgba(143,108,255,.38);
      background:#11151d;
      box-shadow:0 11px 35px rgba(143,108,255,.13);
    }

    .bypass-button.ready::before,
    .bypass-button.ready::after{
      opacity:1;
    }

    .bypass-button.ready::after{
      left:0;
      right:0;
    }

    .bypass-button.ready:active{
      transform:scale(.987);
    }

    .button-label{
      position:relative;
      z-index:2;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:9px;
    }

    .button-spinner{
      width:17px;
      height:17px;
      border-radius:50%;
      border:2px solid rgba(255,255,255,.25);
      border-top-color:#fff;
      display:none;
      animation:spin .75s linear infinite;
    }

    .bypass-button.loading .button-spinner{
      display:inline-block;
    }

    @keyframes spin{
      to{transform:rotate(360deg)}
    }

    .quick-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:12px;
      margin-top:14px;
    }

    .mini-card{
      appearance:none;
      width:100%;
      min-height:78px;
      display:flex;
      align-items:center;
      gap:12px;
      text-align:left;
      padding:15px;
      color:var(--text);
      border:1px solid var(--line);
      border-radius:17px;
      background:rgba(255,255,255,.027);
      cursor:pointer;
      transition:transform .15s ease,border-color .2s ease,background .2s ease;
    }

    .mini-card:active{
      transform:scale(.985);
    }

    .mini-card:hover{
      border-color:rgba(143,108,255,.28);
      background:rgba(255,255,255,.04);
    }

    .mini-icon{
      width:42px;
      height:42px;
      flex:0 0 auto;
      display:grid;
      place-items:center;
      border-radius:14px;
      background:linear-gradient(145deg,rgba(143,108,255,.16),rgba(63,224,197,.1));
      border:1px solid rgba(255,255,255,.07);
    }

    .mini-icon svg{
      width:20px;
      height:20px;
    }

    .mini-text{
      min-width:0;
    }

    .mini-text strong{
      display:block;
      font-size:13px;
      margin-bottom:4px;
    }

    .mini-text span{
      color:var(--muted2);
      font-size:11px;
      line-height:1.35;
    }

    .section-grid{
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:16px;
      margin-top:16px;
    }

    .panel{
      border:1px solid var(--line);
      border-radius:var(--radius);
      padding:22px;
      background:linear-gradient(160deg,rgba(255,255,255,.038),rgba(255,255,255,.018));
      box-shadow:0 18px 50px rgba(0,0,0,.22);
      backdrop-filter:blur(16px);
    }

    .section-kicker{
      color:#b5a8ff;
      font-size:10px;
      font-weight:900;
      letter-spacing:.16em;
      text-transform:uppercase;
    }

    .section-title{
      margin:7px 0 0;
      font-size:23px;
      letter-spacing:-.03em;
    }

    .note{
      margin:15px 0 0;
      padding:16px;
      border-left:2px solid var(--accent2);
      border-radius:0 14px 14px 0;
      color:#b9c0ce;
      background:rgba(63,224,197,.05);
      line-height:1.58;
      font-size:14px;
    }

    .stats-box{
      margin-top:16px;
      min-height:132px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding:18px;
      border-radius:18px;
      border:1px solid rgba(255,255,255,.075);
      background:
        radial-gradient(circle at 86% 20%,rgba(143,108,255,.17),transparent 38%),
        rgba(3,5,8,.42);
    }

    .stats-number{
      font-size:42px;
      font-weight:950;
      letter-spacing:-.045em;
    }

    .stats-label{
      margin-top:3px;
      color:var(--muted);
      font-size:12px;
    }

    .stats-mode{
      margin-top:11px;
      color:var(--muted2);
      font-size:10px;
    }

    .links{
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:10px;
      margin-top:17px;
    }

    .social{
      position:relative;
      min-height:91px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:9px;
      padding:12px 7px;
      border:1px solid var(--line);
      border-radius:17px;
      text-decoration:none;
      color:#dce1ea;
      background:rgba(255,255,255,.024);
      transition:transform .15s ease,border-color .2s ease,background .2s ease;
    }

    .social:hover{
      transform:translateY(-2px);
      border-color:rgba(143,108,255,.31);
      background:rgba(255,255,255,.04);
    }

    .social.disabled{
      opacity:.42;
    }

    .social img{
      width:27px;
      height:27px;
      object-fit:contain;
    }

    .social span{
      max-width:100%;
      overflow:hidden;
      text-overflow:ellipsis;
      font-size:10px;
      font-weight:800;
      white-space:nowrap;
    }


    .result-panel{
      display:none;
      margin-top:16px;
      padding:18px;
      border:1px solid rgba(82,226,155,.22);
      border-radius:18px;
      background:linear-gradient(160deg,rgba(82,226,155,.07),rgba(143,108,255,.045));
    }
    .result-panel.show{display:block;animation:fadeIn .2s ease}
    .result-label{
      color:var(--success);
      font-size:10px;
      font-weight:900;
      letter-spacing:.14em;
      text-transform:uppercase;
    }
    .result-url{
      margin-top:10px;
      padding:13px 14px;
      border:1px solid var(--line);
      border-radius:13px;
      color:#dfe6f2;
      background:rgba(0,0,0,.22);
      font-size:12px;
      line-height:1.45;
      word-break:break-all;
    }
    .result-actions{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
      margin-top:12px;
    }
    .result-action{
      min-height:46px;
      border:1px solid var(--line);
      border-radius:13px;
      color:#fff;
      background:rgba(255,255,255,.045);
      font-weight:800;
      cursor:pointer;
    }
    .result-action.primary{
      border-color:rgba(82,226,155,.28);
      background:rgba(82,226,155,.09);
    }

    .footer{
      padding:24px 2px 0;
      color:#50596a;
      text-align:center;
      font-size:11px;
    }

    .modal-backdrop{
      position:fixed;
      inset:0;
      z-index:50;
      display:none;
      align-items:flex-end;
      justify-content:center;
      padding:16px;
      background:rgba(0,0,0,.68);
      backdrop-filter:blur(13px);
    }

    .modal-backdrop.open{
      display:flex;
      animation:fadeIn .18s ease;
    }

    .modal{
      width:min(720px,100%);
      max-height:min(82vh,760px);
      overflow:hidden;
      border:1px solid rgba(255,255,255,.11);
      border-radius:27px;
      background:#0d1118;
      box-shadow:0 35px 100px rgba(0,0,0,.6);
      animation:sheetUp .24s cubic-bezier(.2,.8,.2,1);
    }

    .modal-head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      padding:19px 20px;
      border-bottom:1px solid var(--line);
    }

    .modal-head strong{
      font-size:17px;
    }

    .modal-head span{
      display:block;
      margin-top:3px;
      color:var(--muted2);
      font-size:10px;
    }

    .close{
      width:39px;
      height:39px;
      border:1px solid var(--line);
      border-radius:12px;
      color:#fff;
      background:rgba(255,255,255,.045);
      cursor:pointer;
      font-size:20px;
    }

    .modal-body{
      overflow:auto;
      max-height:calc(min(82vh,760px) - 78px);
      padding:17px 20px 24px;
      -webkit-overflow-scrolling:touch;
    }

    .search{
      width:100%;
      min-height:48px;
      margin-bottom:14px;
      padding:0 14px;
      border:1px solid var(--line);
      border-radius:13px;
      outline:0;
      color:#fff;
      background:rgba(255,255,255,.035);
    }

    .domain-list{
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:8px;
    }

    .domain{
      min-width:0;
      padding:11px 12px;
      border:1px solid rgba(255,255,255,.065);
      border-radius:12px;
      color:#b8c0ce;
      background:rgba(255,255,255,.025);
      font-size:11px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }

    .toast-stack{
      position:fixed;
      z-index:100;
      top:max(16px,env(safe-area-inset-top));
      left:50%;
      width:min(430px,calc(100% - 28px));
      transform:translateX(-50%);
      pointer-events:none;
    }

    .toast{
      position:relative;
      margin-top:10px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.11);
      border-radius:15px;
      padding:13px 15px 14px 45px;
      color:#f6f7fa;
      background:rgba(15,19,27,.96);
      box-shadow:0 16px 50px rgba(0,0,0,.36);
      backdrop-filter:blur(18px);
      font-size:13px;
      font-weight:720;
      animation:toastIn .25s cubic-bezier(.2,.8,.2,1);
    }

    .toast::before{
      content:"";
      position:absolute;
      left:15px;
      top:50%;
      width:17px;
      height:17px;
      border-radius:50%;
      transform:translateY(-50%);
      background:var(--accent);
      box-shadow:0 0 18px rgba(143,108,255,.52);
    }

    .toast.error::before{
      background:var(--danger);
      box-shadow:0 0 18px rgba(255,93,115,.5);
    }

    .toast.success::before{
      background:var(--success);
      box-shadow:0 0 18px rgba(82,226,155,.5);
    }

    .toast.hide{
      animation:toastOut .4s ease forwards;
    }

    @keyframes fadeIn{
      from{opacity:0}
      to{opacity:1}
    }

    @keyframes sheetUp{
      from{opacity:0;transform:translateY(24px) scale(.985)}
      to{opacity:1;transform:none}
    }

    @keyframes toastIn{
      from{opacity:0;transform:translateY(-13px) scale(.98)}
      to{opacity:1;transform:none}
    }

    @keyframes toastOut{
      to{opacity:0;transform:translateY(-10px) scale(.985)}
    }

    @media (min-width:760px){
      .modal-backdrop{
        align-items:center;
      }
    }

    @media (max-width:760px){
      .shell{
        width:min(100% - 20px,980px);
        padding-top:12px;
      }

      .hero{
        border-radius:25px;
      }

      .hero-image-wrap{
        height:160px;
      }

      .hero-body{
        padding:28px 17px 30px;
      }

      .section-grid{
        grid-template-columns:1fr;
      }

      .links{
        grid-template-columns:repeat(4,minmax(0,1fr));
      }

      .quick-grid{
        grid-template-columns:1fr 1fr;
      }
    }

    @media (max-width:480px){
      .topbar{
        padding:0 3px;
      }

      .brand-copy span{
        display:none;
      }

      .status-pill{
        padding:8px 10px;
        font-size:10px;
      }

      h1{
        font-size:clamp(42px,14vw,60px);
      }

      .subtitle{
        font-size:14px;
      }

      .panel{
        padding:18px;
      }

      .links{
        gap:8px;
      }

      .social{
        min-height:78px;
        border-radius:14px;
      }

      .social img{
        width:23px;
        height:23px;
      }

      .social span{
        font-size:9px;
      }

      .mini-card{
        min-height:72px;
        padding:12px;
      }

      .mini-icon{
        width:38px;
        height:38px;
      }

      .mini-text strong{
        font-size:12px;
      }

      .mini-text span{
        font-size:9px;
      }

      .domain-list{
        grid-template-columns:1fr;
      }
    }
  </style>
</head>

<body>
  <div class="glow one"></div>
  <div class="glow two"></div>

  <div class="toast-stack" id="toastStack"></div>

  <main class="shell">
    <header class="topbar">
      <div class="brand-mini">
        <div class="brand-dot">Δ</div>
        <div class="brand-copy">
          <strong>DELTA KEY BYPASS</strong>
          <span>link utility by rrixh</span>
        </div>
      </div>

      <div class="status-pill">
        <i></i>
        online
      </div>
    </header>

    <section class="hero">
      <div class="hero-image-wrap">
        <img
          class="hero-image"
          id="brandImage"
          alt="DELTA KEY BYPASS"
          referrerpolicy="no-referrer"
        >
      </div>

      <div class="hero-body">
        <div class="eyebrow">free link bypass utility</div>

        <h1>
          DELTA KEY
          <span class="gradient-text">BYPASS</span>
        </h1>

        <p class="subtitle">
          paste a supported https:// link below. the bypass button wakes up automatically when a link is entered.
        </p>

        <div class="bypass-card">
          <div class="input-shell">
            <svg class="lock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z" stroke="currentColor" stroke-width="1.7"/>
            </svg>

            <input
              id="linkInput"
              type="url"
              inputmode="url"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              placeholder="enter link here"
              aria-label="enter link here"
            >
          </div>

          <button class="bypass-button" id="bypassButton" type="button" aria-disabled="true">
            <span class="button-label">
              <span class="button-spinner"></span>
              <span id="bypassLabel">Bypass</span>
            </span>
          </button>

          <div class="quick-grid">
            <button class="mini-card" id="supportedButton" type="button">
              <div class="mini-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 6.5h16M4 12h16M4 17.5h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="mini-text">
                <strong>supported websites</strong>
                <span id="supportedCount">loading list...</span>
              </div>
            </button>

            <button class="mini-card" id="statsButton" type="button">
              <div class="mini-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 19V9m7 10V5m7 14v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="mini-text">
                <strong>live stats</strong>
                <span id="miniStats">loading...</span>
              </div>
            </button>
          </div>

          <div class="result-panel" id="resultPanel">
            <div class="result-label">bypass successful</div>
            <div class="result-url" id="resultUrl"></div>
            <div class="result-actions">
              <button class="result-action primary" id="copyResult" type="button">kopy link</button>
              <button class="result-action" id="openResult" type="button">open link</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-grid">
      <section class="panel" id="statsPanel">
        <div class="section-kicker">live usage</div>
        <h2 class="section-title">Bypass stats</h2>

        <div class="stats-box">
          <div class="stats-number" id="statsNumber">0</div>
          <div class="stats-label">successful bypass launches</div>
          <div class="stats-mode" id="statsMode">loading stats...</div>
        </div>
      </section>

      <section class="panel">
        <div class="section-kicker">important</div>
        <h2 class="section-title">Free. No pop-up maze.</h2>

        <p class="note">
          this website was made as an alternative link bypasser so u dont get annoying pop-up ads and it is kompletely free
        </p>
      </section>
    </div>

    <section class="panel" style="margin-top:16px">
      <div class="section-kicker">kredits</div>
      <h2 class="section-title">My Links</h2>

      <div class="links" id="socialLinks"></div>
    </section>

    <footer class="footer">
      DELTA KEY BYPASS · rrixh
    </footer>
  </main>

  <div class="modal-backdrop" id="supportedModal" role="dialog" aria-modal="true" aria-labelledby="supportedTitle">
    <div class="modal">
      <div class="modal-head">
        <div>
          <strong id="supportedTitle">supported websites</strong>
          <span id="modalCount"></span>
        </div>
        <button class="close" id="closeModal" aria-label="close">×</button>
      </div>

      <div class="modal-body">
        <input class="search" id="domainSearch" placeholder="search supported websites">
        <div class="domain-list" id="domainList"></div>
      </div>
    </div>
  </div>

  <script>
    const SUPPORTED_HOSTS = ${supportedJson};
    const SOCIAL_LINKS = ${socialJson};
    const BRAND_IMAGE = ${brandImageJson};

    const input = document.getElementById("linkInput");
    const bypassButton = document.getElementById("bypassButton");
    const bypassLabel = document.getElementById("bypassLabel");
    const supportedButton = document.getElementById("supportedButton");
    const supportedModal = document.getElementById("supportedModal");
    const closeModal = document.getElementById("closeModal");
    const domainSearch = document.getElementById("domainSearch");
    const domainList = document.getElementById("domainList");
    const statsButton = document.getElementById("statsButton");
    const statsPanel = document.getElementById("statsPanel");
    const statsNumber = document.getElementById("statsNumber");
    const statsMode = document.getElementById("statsMode");
    const miniStats = document.getElementById("miniStats");
    const resultPanel = document.getElementById("resultPanel");
    const resultUrl = document.getElementById("resultUrl");
    const copyResult = document.getElementById("copyResult");
    const openResult = document.getElementById("openResult");
    let currentResultUrl = "";

    document.getElementById("brandImage").src = BRAND_IMAGE;

    function showToast(message, type = "") {
      const stack = document.getElementById("toastStack");
      const toast = document.createElement("div");
      toast.className = "toast" + (type ? " " + type : "");
      toast.textContent = message;

      stack.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => toast.remove(), 420);
      }, 2600);
    }

    function startsWithHttps(value) {
      return String(value || "").trim().toLowerCase().startsWith("https://");
    }

    function updateButton() {
      const ready = startsWithHttps(input.value);
      bypassButton.classList.toggle("ready", ready);
      bypassButton.setAttribute("aria-disabled", String(!ready));
    }

    input.addEventListener("input", updateButton);
    input.addEventListener("paste", () => setTimeout(updateButton, 0));

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        bypassButton.click();
      }
    });

    async function launchBypass() {
      const value = input.value.trim();

      if (!value || !startsWithHttps(value)) {
        showToast("enter a link!", "error");
        input.focus();
        return;
      }

      if (bypassButton.classList.contains("loading")) return;

      bypassButton.classList.add("loading");
      bypassLabel.textContent = "checking...";

      try {
        const response = await fetch(location.pathname + "?api=bypass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ url: value })
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
          let message = data.error || "this URL is not supported. enter a new link!";

          if (data.upstreamStatus === 429) {
            message = "bypass API rate limit reached. try again later!";
          }

          showToast(message, "error");
          return;
        }

        let resultHost = "";
        try {
          resultHost = new URL(data.resultUrl).hostname.toLowerCase();
        } catch {
          showToast("bypass failed. invalid result!", "error");
          return;
        }

        if (resultHost === "bypass.vip" || resultHost.endsWith(".bypass.vip")) {
          showToast("bypass failed. direct result unavailable!", "error");
          return;
        }

        currentResultUrl = data.resultUrl;
        resultUrl.textContent = currentResultUrl;
        resultPanel.classList.add("show");

        bumpLocalStats();

        if (typeof data.global === "number") {
          renderStats(data.global, true);
        } else {
          renderStats(getLocalStats(), false);
        }

        showToast("bypass successful", "success");
        resultPanel.scrollIntoView({behavior:"smooth", block:"nearest"});
      } catch (err) {
        showToast("something went wrong. try again!", "error");
      } finally {
        setTimeout(() => {
          bypassButton.classList.remove("loading");
          bypassLabel.textContent = "Bypass";
        }, 500);
      }
    }

    bypassButton.addEventListener("click", launchBypass);

    copyResult.addEventListener("click", async () => {
      if (!currentResultUrl) return;
      try {
        await navigator.clipboard.writeText(currentResultUrl);
        showToast("link kopied!", "success");
      } catch {
        showToast("kopy failed. press and hold the result link!", "error");
      }
    });

    openResult.addEventListener("click", () => {
      if (!currentResultUrl) return;
      window.open(currentResultUrl, "_blank", "noopener,noreferrer");
    });

    function getLocalStats() {
      const n = Number.parseInt(localStorage.getItem("deltaSuccessfulBypasses") || "0", 10);
      return Number.isFinite(n) ? n : 0;
    }

    function bumpLocalStats() {
      const next = getLocalStats() + 1;
      localStorage.setItem("deltaSuccessfulBypasses", String(next));
      return next;
    }

    function renderStats(count, globalEnabled) {
      const number = Number(count || 0);
      statsNumber.textContent = number.toLocaleString();
      miniStats.textContent = number.toLocaleString() + " successful";
      statsMode.textContent = globalEnabled
        ? "global live stats"
        : "local stats on this device · add KEYBYPASS_STATS KV for global stats";
    }

    async function loadStats() {
      try {
        const response = await fetch(location.pathname + "?api=stats", {
          cache: "no-store"
        });

        const data = await response.json();

        if (data.globalEnabled && typeof data.global === "number") {
          renderStats(data.global, true);
        } else {
          renderStats(getLocalStats(), false);
        }
      } catch {
        renderStats(getLocalStats(), false);
      }
    }

    statsButton.addEventListener("click", () => {
      statsPanel.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    const supportedUnique = Array.from(
      new Set(
        SUPPORTED_HOSTS
          .map(x => String(x).replace(/^www\\./i, "").toLowerCase())
          .filter(Boolean)
      )
    ).sort();

    document.getElementById("supportedCount").textContent =
      supportedUnique.length + " supported domains";

    document.getElementById("modalCount").textContent =
      supportedUnique.length + " domains from the bypass @match list";

    function renderDomains(filter = "") {
      const needle = String(filter || "").trim().toLowerCase();
      const matches = supportedUnique.filter(host => host.includes(needle));

      domainList.innerHTML = "";

      if (!matches.length) {
        const empty = document.createElement("div");
        empty.className = "domain";
        empty.style.gridColumn = "1 / -1";
        empty.textContent = "no supported websites found";
        domainList.appendChild(empty);
        return;
      }

      for (const host of matches) {
        const item = document.createElement("div");
        item.className = "domain";
        item.textContent = host;
        item.title = host;
        domainList.appendChild(item);
      }
    }

    function openSupported() {
      renderDomains(domainSearch.value);
      supportedModal.classList.add("open");
      document.body.style.overflow = "hidden";
      setTimeout(() => domainSearch.focus(), 100);
    }

    function closeSupported() {
      supportedModal.classList.remove("open");
      document.body.style.overflow = "";
    }

    supportedButton.addEventListener("click", openSupported);
    closeModal.addEventListener("click", closeSupported);

    supportedModal.addEventListener("click", (e) => {
      if (e.target === supportedModal) closeSupported();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && supportedModal.classList.contains("open")) {
        closeSupported();
      }
    });

    domainSearch.addEventListener("input", () => {
      renderDomains(domainSearch.value);
    });

    const SOCIAL_META = {
      roblox: {
        label: "Roblox",
        icon: "https://cdn.simpleicons.org/roblox/FFFFFF"
      },
      snapchat: {
        label: "Snapchat",
        icon: "https://cdn.simpleicons.org/snapchat/FFFFFF"
      },
      discord: {
        label: "Discord",
        icon: "https://cdn.simpleicons.org/discord/FFFFFF"
      },
      telegram: {
        label: "Telegram",
        icon: "https://cdn.simpleicons.org/telegram/FFFFFF"
      },
      youtube: {
        label: "YouTube",
        icon: "https://cdn.simpleicons.org/youtube/FFFFFF"
      },
      instagram: {
        label: "Instagram",
        icon: "https://cdn.simpleicons.org/instagram/FFFFFF"
      },
      cashapp: {
        label: "Kash App",
        icon: "https://cdn.simpleicons.org/cashapp/FFFFFF"
      },
      tiktok: {
        label: "TikTok",
        icon: "https://cdn.simpleicons.org/tiktok/FFFFFF"
      }
    };

    function isPlaceholder(url) {
      return !url || /^YOUR_/i.test(String(url));
    }

    function renderSocialLinks() {
      const box = document.getElementById("socialLinks");
      box.innerHTML = "";

      for (const [key, meta] of Object.entries(SOCIAL_META)) {
        const url = SOCIAL_LINKS[key];
        const link = document.createElement("a");
        link.className = "social" + (isPlaceholder(url) ? " disabled" : "");
        link.href = isPlaceholder(url) ? "#" : url;
        link.target = isPlaceholder(url) ? "_self" : "_blank";
        link.rel = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = meta.icon;
        img.alt = "";
        img.loading = "lazy";

        const label = document.createElement("span");
        label.textContent = meta.label;

        link.append(img, label);

        if (isPlaceholder(url)) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("add your " + meta.label + " link in SOCIAL_LINKS", "error");
          });
        }

        box.appendChild(link);
      }
    }

    renderSocialLinks();
    renderDomains();
    updateButton();
    loadStats();
  </script>
</body>
</html>`;
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const apiResponse = await handleApi(request, env, url);
  if (apiResponse) return apiResponse;

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        "Allow": "GET, HEAD, POST"
      }
    });
  }

  return new Response(pageHtml(), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  });
}
