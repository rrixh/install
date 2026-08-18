<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  <div class="source" id="source"></div>

  <script>
    const lh = `loadstring(game:HttpGet("https://pastebin.com/6eaDLfn/raw", true))();
`;

    const source = document.getElementById("source");

    lh.split("\n").forEach((line, index) => {
      const row = document.createElement("div");
      row.className = "line";

      const num = document.createElement("span");
      num.className = "num";
      num.textContent = index + 1;

      const code = document.createElement("span");
      code.className = "code";
      code.textContent = line || " ";

      row.appendChild(num);
      row.appendChild(code);
      source.appendChild(row);
    });
  </script>
</body>
</html>
