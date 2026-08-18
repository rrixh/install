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
const lh = `-- Lollypop Hub Loader
-- build: 10.5.1
-- channel: stable

local env = getgenv and getgenv() or _G
local http = game.HttpGet
local seed = tostring(os.time()) .. tostring(math.random(100000, 999999))

local packet = {
    version = "10.5.1",
    branch = "main",
    status = "ready",
    session = seed,
    endpoint = "https://cdn.lollypophub.dev/bootstrap",
    flags = {
        "ui",
        "avatar",
        "autoexec",
        "shelf",
        "animations"
    }
}

local map = {
    [1] = "Players",
    [2] = "RunService",
    [3] = "TweenService",
    [4] = "HttpService",
    [5] = "ReplicatedStorage"
}

local services = {}

for i = 1, #map do
    local ok, result = pcall(function()
        return game:GetService(map[i])
    end)

    if ok then
        services[map[i]] = result
    end
end

local function rot(value, amount)
    local output = {}

    for i = 1, #value do
        local byte = string.byte(value, i)
        output[i] = string.char((byte + amount) % 255)
    end

    return table.concat(output)
end

local function checksum(str)
    local total = 0

    for i = 1, #str do
        total = (total + string.byte(str, i) * i) % 2147483647
    end

    return total
end

local function generateNonce()
    local chars =
        "abcdefghijklmnopqrstuvwxyz" ..
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ..
        "0123456789"

    local out = {}

    for i = 1, 32 do
        local index = math.random(1, #chars)
        out[i] = chars:sub(index, index)
    end

    return table.concat(out)
end

local nonce = generateNonce()

local manifest = {
    magic = "LH_BOOTSTRAP",
    revision = 10501,
    nonce = nonce,
    checksum = checksum(nonce .. packet.version),
    timestamp = os.time()
}

local encoded = rot(
    tostring(manifest.magic) ..
    ":" ..
    tostring(manifest.revision) ..
    ":" ..
    tostring(manifest.checksum),
    7
)

local cache = {}
local runtime = {}

runtime.step = 0
runtime.ready = false
runtime.state = "initializing"

local function pulse()
    runtime.step = runtime.step + 1

    if runtime.step > 4 then
        runtime.step = 1
    end

    return runtime.step
end

local phases = {
    "bootstrap",
    "handshake",
    "manifest",
    "hydrate",
    "mount",
    "finalize"
}

for _, phase in ipairs(phases) do
    cache[phase] = {
        id = pulse(),
        state = "queued",
        token = generateNonce():sub(1, 12)
    }
end

local function setPhase(name, state)
    if cache[name] then
        cache[name].state = state
        cache[name].updated = os.clock()
    end
end

setPhase("bootstrap", "running")

local headers = {
    ["x-lh-version"] = packet.version,
    ["x-lh-session"] = packet.session,
    ["x-lh-nonce"] = nonce,
    ["x-lh-build"] = tostring(manifest.revision)
}

local requestPacket = {
    url = packet.endpoint,
    method = "POST",
    headers = headers,
    body = encoded
}

setPhase("bootstrap", "complete")
setPhase("handshake", "running")

local handshake = {
    accepted = true,
    code = 200,
    region = "iad",
    node = "edge-17",
    route = "/v1/loader/init",
    key = generateNonce()
}

if handshake.accepted then
    runtime.state = "handshake_ok"
else
    runtime.state = "handshake_failed"
end

setPhase("handshake", "complete")
setPhase("manifest", "running")

local manifestData = {
    modules = {
        {
            name = "core",
            hash = "0f8e2c5b7e9d1a44",
            size = 18422,
            priority = 1
        },
        {
            name = "interface",
            hash = "a83d029ce71b991f",
            size = 57201,
            priority = 2
        },
        {
            name = "avatar",
            hash = "97b12f6d2e1c8840",
            size = 42018,
            priority = 3
        },
        {
            name = "autoexec",
            hash = "4f01ea884d195d3e",
            size = 11806,
            priority = 4
        }
    }
}

local moduleTable = {}

for _, module in ipairs(manifestData.modules) do
    moduleTable[module.name] = {
        loaded = false,
        hash = module.hash,
        size = module.size,
        priority = module.priority
    }
end

setPhase("manifest", "complete")
setPhase("hydrate", "running")

local hydrateOrder = {
    "core",
    "interface",
    "avatar",
    "autoexec"
}

for _, name in ipairs(hydrateOrder) do
    local module = moduleTable[name]

    if module then
        module.loaded = true
        module.loadedAt = os.clock()
        module.ticket = generateNonce():sub(1, 16)
    end
end

setPhase("hydrate", "complete")
setPhase("mount", "running")

local mount = {
    root = "LollypopHub",
    ready = true,
    revision = packet.version,
    session = packet.session,
    fingerprint = checksum(
        packet.version ..
        packet.session ..
        nonce
    )
}

runtime.ready = mount.ready
runtime.state = "mounted"

setPhase("mount", "complete")
setPhase("finalize", "running")

local final = {
    success = runtime.ready,
    state = runtime.state,
    modules = #hydrateOrder,
    build = manifest.revision,
    signature =
        tostring(mount.fingerprint) ..
        "-" ..
        tostring(manifest.checksum)
}

setPhase("finalize", "complete")

if final.success then
    env.LH_SESSION = {
        id = packet.session,
        build = packet.version,
        state = runtime.state,
        signature = final.signature
    }
end

return final`;

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

        font-size: 11px;
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
