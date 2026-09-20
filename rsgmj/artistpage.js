(() => {
  const DATA = {
    artist: "R$G MJ",
    genre: "Hip-Hop / Rap",
    origin: "South Laurel, Maryland",
    region: "DMV",
    activeSince: "2019",

    featuredRelease: {
      title: "LIFE WAT U MAKE IT",
      type: "3-track single",
      releaseDate: "May 15, 2026",
      cover: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/RSG_MJ_Life_Wat_U_Make_It_Cover.PNG",
      apple: "https://music.apple.com/us/album/life-wat-u-make-it-single/6771527461",
      spotifyArtist: "https://open.spotify.com/artist/4kiKBTgrck6JtGS0j181O1?si=R4g3oTVDSZ-mLvv3VoQTAg&utm_source=copy-link",
      audiomackArtist: "https://audiomack.com/rg-mj"
    },

    lifestyle: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/RSG_MJ_Lifestyle_Photo.JPG",

    socials: {
      instagram: "https://instagram.com/nugit",
      tiktok: "https://www.tiktok.com/@xhexkers",
      youtube: "https://youtube.com/@rsgmj",
      audiomack: "https://audiomack.com/rg-mj",
      spotify: "https://open.spotify.com/artist/4kiKBTgrck6JtGS0j181O1?si=R4g3oTVDSZ-mLvv3VoQTAg&utm_source=copy-link",
      apple: "https://music.apple.com/us/artist/r%24g-mj/1552992460"
    },

    recent: [
      {
        title: "LIFE WAT U MAKE IT",
        date: "May 15, 2026",
        tag: "Featured release",
        href: "https://music.apple.com/us/album/life-wat-u-make-it-single/6771527461"
      },
      {
        title: "NO SMOKE",
        date: "Mar 23, 2026",
        tag: "Single",
        href: "https://music.amazon.com/albums/B0GV39W243"
      },
      {
        title: "HIGHSPEED",
        date: "Mar 18, 2026",
        tag: "Single",
        href: "https://music.amazon.com/albums/B0GSZ5DYFY"
      },
      {
        title: "ELEKTRONOMIA",
        date: "2026",
        tag: "Single",
        href: "https://music.apple.com/us/artist/r%24g-mj/1552992460"
      }
    ],

    projects: [
      "$lime Season",
      "Penny",
      "ALL GAS NO MORALS",
      "BAXK LIKE I NEVER LEFT"
    ]
  };

  const icons = {
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="fill"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3v11.1a4.6 4.6 0 1 1-4-4.56V13a1.9 1.9 0 1 0 1.3 1.8V3h2.7c.38 2.15 1.62 3.45 3.8 4.02v2.8A8 8 0 0 1 14.5 8.3V3Z" class="fill"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.4 7.2a3 3 0 0 0-2.1-2.1C17.45 4.6 12 4.6 12 4.6s-5.45 0-7.3.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2.1 12c0 1.6.15 3.2.5 4.8a3 3 0 0 0 2.1 2.1c1.85.5 7.3.5 7.3.5s5.45 0 7.3-.5a3 3 0 0 0 2.1-2.1c.35-1.6.5-3.2.5-4.8 0-1.6-.15-3.2-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" class="fill"/></svg>`,
    spotify: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M7 9.2c3.8-1.1 7.9-.7 11.2 1"/><path d="M7.7 12.2c3.2-.85 6.6-.52 9.45.8"/><path d="M8.4 15c2.6-.62 5.3-.35 7.65.68"/></svg>`,
    apple: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.8 4.2c.85-1 2.15-1.7 3.35-1.7.15 1.4-.4 2.8-1.22 3.72-.83.92-2.05 1.63-3.32 1.52-.18-1.35.4-2.72 1.2-3.54ZM20.5 17.5c-.58 1.33-.86 1.92-1.6 3.1-1.05 1.65-2.52 3.72-4.35 3.72-1.62 0-2.05-1.08-4.26-1.06-2.22.01-2.7 1.08-4.32 1.06-1.82-.02-3.22-1.88-4.27-3.54C-1.2 16.2-1.5 10.83.3 8.08c1.28-1.95 3.3-3.1 5.2-3.1 1.93 0 3.15 1.08 4.74 1.08 1.55 0 2.48-1.08 4.7-1.08 1.68 0 3.46.9 4.73 2.46-4.17 2.28-3.5 8.2.83 10.06Z" transform="scale(.9) translate(2.2 0)" class="fill"/></svg>`,
    audiomack: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15.5h2.2v3H3v-3Zm3.4-5h2.2v8H6.4v-8Zm3.4-4h2.2v12H9.8v-12Zm3.4 2h2.2v10h-2.2v-10Zm3.4 3h2.2v7h-2.2v-7Z" class="fill"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
    play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5V7Z" class="fill"/></svg>`,
    download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"/></svg>`
  };

  const style = document.createElement("style");
  style.textContent = `
    :root{
      --bg:#070708;--panel:#0d0d10;--panel2:#121216;--text:#f7f4ef;--muted:#a6a3a0;
      --line:rgba(255,255,255,.09);--red:#b51f2e;--cream:#f0e1cb;--max:1180px;--radius:28px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden}
    a{color:inherit;text-decoration:none}
    button{font:inherit}
    img{max-width:100%;display:block}
    .page{min-height:100vh;background:radial-gradient(circle at 70% 6%,rgba(181,31,46,.13),transparent 28%),radial-gradient(circle at 10% 38%,rgba(240,225,203,.06),transparent 26%),#070708}
    .nav{position:sticky;top:0;z-index:50;background:rgba(7,7,8,.72);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
    .navin{max-width:var(--max);margin:auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:18px}
    .brand{display:flex;align-items:center;gap:12px;font-weight:900;letter-spacing:-.04em;font-size:20px}
    .brandmark{width:10px;height:10px;border-radius:50%;background:var(--red);box-shadow:0 0 22px rgba(181,31,46,.8)}
    .navlinks{display:flex;gap:24px;color:#d8d5d1;font-size:13px;font-weight:700}
    .navlinks a:hover{color:white}
    .menu{display:none;background:none;border:1px solid var(--line);color:white;border-radius:12px;padding:8px 11px}
    .hero{max-width:var(--max);margin:auto;padding:72px 24px 38px;display:grid;grid-template-columns:1.1fr .9fr;gap:46px;align-items:center;min-height:720px}
    .eyebrow{display:inline-flex;align-items:center;gap:9px;border:1px solid var(--line);background:rgba(255,255,255,.035);padding:9px 13px;border-radius:999px;color:#d9d6d2;font-weight:800;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--red)}
    h1{font-size:clamp(62px,10vw,136px);line-height:.83;margin:24px 0 25px;letter-spacing:-.075em;font-weight:950}
    .heroSub{font-size:clamp(19px,2.2vw,28px);line-height:1.35;max-width:650px;color:#d5d1cc;letter-spacing:-.025em}
    .heroSub b{color:white}
    .heroActions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 18px;border-radius:999px;font-size:13px;font-weight:850;border:1px solid var(--line);transition:.2s}
    .btn.primary{background:var(--text);color:#09090a;border-color:var(--text)}
    .btn.secondary{background:rgba(255,255,255,.03)}
    .btn:hover{transform:translateY(-2px)}
    .btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .btn svg .fill{fill:currentColor;stroke:none}
    .heroArt{position:relative}
    .portraitFrame{position:relative;border-radius:34px;overflow:hidden;aspect-ratio:4/5;background:#151518;box-shadow:0 30px 90px rgba(0,0,0,.48);border:1px solid rgba(255,255,255,.1)}
    .portraitFrame img{width:100%;height:100%;object-fit:cover}
    .portraitFrame:after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.42),transparent 50%)}
    .floatCard{position:absolute;left:-34px;bottom:28px;background:rgba(10,10,12,.9);backdrop-filter:blur(16px);border:1px solid var(--line);border-radius:20px;padding:14px 16px;box-shadow:0 14px 40px rgba(0,0,0,.35)}
    .floatCard small{display:block;color:var(--muted);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em}
    .floatCard strong{display:block;margin-top:5px;font-size:15px}
    .section{max-width:var(--max);margin:auto;padding:72px 24px}
    .sectionHead{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:30px}
    .kicker{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--red);font-weight:900}
    .section h2{font-size:clamp(36px,5vw,64px);line-height:.95;letter-spacing:-.055em;margin:8px 0 0}
    .sectionIntro{max-width:560px;color:var(--muted);line-height:1.65;font-size:15px}
    .feature{display:grid;grid-template-columns:.82fr 1.18fr;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:linear-gradient(135deg,#101014,#0a0a0d)}
    .coverWrap{position:relative;min-height:500px}
    .coverWrap img{width:100%;height:100%;object-fit:cover}
    .coverWrap:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 70%,rgba(10,10,13,.5))}
    .releaseInfo{padding:54px;display:flex;flex-direction:column;justify-content:center}
    .releaseBadge{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.17em;color:#d6b8bc}
    .releaseInfo h3{font-size:clamp(45px,6vw,82px);line-height:.92;letter-spacing:-.065em;margin:15px 0 18px}
    .releaseMeta{color:var(--muted);font-size:14px}
    .platforms{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
    .platform{display:inline-flex;align-items:center;gap:9px;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.025);font-size:12px;font-weight:800}
    .platform svg,.social svg,.iconLink svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .platform svg .fill,.social svg .fill{fill:currentColor;stroke:none}
    .bioGrid{display:grid;grid-template-columns:1fr .9fr;gap:20px}
    .bioCard,.facts{border:1px solid var(--line);background:var(--panel);border-radius:var(--radius);padding:34px}
    .bioCard p{font-size:18px;line-height:1.78;color:#d8d5d1;margin:0}
    .bioCard p+p{margin-top:18px}
    .facts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .fact{padding:18px;border-radius:18px;background:var(--panel2);border:1px solid rgba(255,255,255,.05)}
    .fact small{color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:850}
    .fact b{display:block;margin-top:7px;font-size:15px;line-height:1.35}
    .releases{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
    .releaseCard{border:1px solid var(--line);border-radius:20px;background:var(--panel);padding:20px;min-height:210px;display:flex;flex-direction:column;justify-content:space-between;transition:.2s}
    .releaseCard:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.18)}
    .releaseCard .num{font-size:11px;color:#5e5b59;font-weight:900}
    .releaseCard h3{font-size:23px;letter-spacing:-.045em;line-height:1.05;margin:24px 0 8px}
    .releaseCard p{margin:0;color:var(--muted);font-size:12px}
    .cardBottom{display:flex;justify-content:space-between;align-items:center}
    .roundArrow{width:36px;height:36px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center}
    .roundArrow svg{width:16px;fill:none;stroke:currentColor;stroke-width:1.8}
    .photoStrip{display:grid;grid-template-columns:1.1fr .9fr;gap:16px}
    .photoLarge,.photoSmall{border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);position:relative;background:#111;min-height:560px}
    .photoLarge img,.photoSmall img{width:100%;height:100%;object-fit:cover}
    .photoCaption{position:absolute;left:18px;bottom:18px;padding:10px 12px;border-radius:12px;background:rgba(7,7,8,.75);backdrop-filter:blur(12px);font-size:11px;font-weight:800;border:1px solid var(--line)}
    .socialGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .social{display:flex;align-items:center;justify-content:space-between;gap:12px;border:1px solid var(--line);border-radius:18px;background:var(--panel);padding:17px 18px;transition:.2s}
    .social:hover{border-color:rgba(255,255,255,.2);transform:translateY(-2px)}
    .socialLeft{display:flex;align-items:center;gap:12px}
    .social strong{font-size:13px}
    .social span{font-size:11px;color:var(--muted);display:block;margin-top:3px}
    .socialIcon{width:38px;height:38px;border-radius:12px;background:#17171b;display:grid;place-items:center}
    .socialIcon svg{width:19px;height:19px}
    .iconLink svg{width:17px;height:17px}
    .press{border:1px solid var(--line);border-radius:var(--radius);padding:38px;background:linear-gradient(145deg,#121216,#0b0b0e);display:grid;grid-template-columns:1fr .8fr;gap:34px;align-items:center}
    .press h3{font-size:clamp(32px,4vw,52px);letter-spacing:-.05em;margin:5px 0 14px}
    .press p{color:var(--muted);line-height:1.65}
    .downloadRow{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
    .pressQuote{border-left:2px solid var(--red);padding:4px 0 4px 18px;color:#d7d3ce;line-height:1.7;font-size:16px}
    .footer{border-top:1px solid var(--line);margin-top:40px}
    .footerIn{max-width:var(--max);margin:auto;padding:34px 24px 50px;display:flex;justify-content:space-between;gap:22px;align-items:center;color:#77736f;font-size:11px}
    .footer strong{color:#d7d3cf}
    .miniLinks{display:flex;gap:14px}
    .miniLinks a:hover{color:white}
    .reveal{opacity:0;transform:translateY(14px);transition:opacity .65s ease,transform .65s ease}
    .reveal.in{opacity:1;transform:none}

    @media(max-width:900px){
      .hero{grid-template-columns:1fr;min-height:auto;padding-top:50px}
      .heroArt{max-width:620px}
      .floatCard{left:14px}
      .feature,.bioGrid,.photoStrip,.press{grid-template-columns:1fr}
      .releaseInfo{padding:32px}
      .coverWrap{min-height:unset;aspect-ratio:1/1}
      .releases{grid-template-columns:1fr 1fr}
      .socialGrid{grid-template-columns:1fr 1fr}
      .photoLarge,.photoSmall{min-height:440px}
      .sectionHead{align-items:flex-start;flex-direction:column}
      .navlinks{display:none}
      .menu{display:block}
      .nav.open .navlinks{display:flex;position:absolute;top:66px;left:14px;right:14px;flex-direction:column;background:#0d0d10;border:1px solid var(--line);border-radius:18px;padding:18px}
      .hero{padding-bottom:20px}
    }

    @media(max-width:580px){
      .navin{padding:13px 16px}
      .hero,.section{padding-left:16px;padding-right:16px}
      .hero{padding-top:38px}
      .heroSub{font-size:18px}
      .portraitFrame{border-radius:24px}
      .floatCard{bottom:14px;right:14px;left:14px}
      .section{padding-top:56px;padding-bottom:56px}
      .feature,.bioCard,.facts,.press{border-radius:22px}
      .releaseInfo{padding:26px 22px}
      .releases,.socialGrid{grid-template-columns:1fr}
      .facts{grid-template-columns:1fr 1fr;padding:18px}
      .fact{padding:15px}
      .photoLarge,.photoSmall{min-height:420px}
      .footerIn{flex-direction:column;align-items:flex-start}
    }
  `;
  document.head.appendChild(style);

  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "R$G MJ",
    "jobTitle": "Hip-Hop / Rap Artist",
    "description": "Independent DMV hip-hop and rap artist from South Laurel, Maryland, releasing music since 2021.",
    "url": "https://rrixh.pages.dev/rsgmj",
    "image": DATA.lifestyle,
    "sameAs": [
      DATA.socials.instagram,
      DATA.socials.tiktok,
      DATA.socials.youtube,
      DATA.socials.audiomack,
      DATA.socials.spotify,
      DATA.socials.apple
    ],
    "knowsAbout": ["Hip-Hop", "Rap", "DMV music"]
  });
  document.head.appendChild(schema);

  const socialCard = (name, handle, key, href) => `
    <a class="social reveal" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${name}">
      <span class="socialLeft">
        <span class="socialIcon">${icons[key]}</span>
        <span><strong>${name}</strong><span>${handle}</span></span>
      </span>
      <span class="iconLink">${icons.arrow}</span>
    </a>`;

  const root = document.getElementById("artist-page");
  root.innerHTML = `
    <div class="page">
      <nav class="nav" id="nav">
        <div class="navin">
          <a class="brand" href="#top"><span class="brandmark"></span>R$G MJ</a>
          <div class="navlinks" id="navlinks">
            <a href="#music">Music</a>
            <a href="#bio">Bio</a>
            <a href="#releases">Releases</a>
            <a href="#media">Media</a>
            <a href="#links">Links</a>
            <a href="#press">Press / EPK</a>
          </div>
          <button class="menu" id="menu" aria-label="Toggle navigation">Menu</button>
        </div>
      </nav>

      <main id="top">
        <section class="hero">
          <div class="heroCopy reveal">
            <span class="eyebrow"><i></i> Official Artist Page</span>
            <h1>R$G<br>MJ</h1>
            <p class="heroSub">
              <b>Independent hip-hop / rap artist from South Laurel, Maryland</b>,
              representing the DMV with a catalog built independently since 2021.
            </p>
            <div class="heroActions">
              <a class="btn primary" href="#music">${icons.play} Stream latest release</a>
              <a class="btn secondary" href="#press">Press / EPK</a>
            </div>
          </div>

          <div class="heroArt reveal">
            <div class="portraitFrame">
              <img src="${DATA.lifestyle}" alt="R$G MJ lifestyle portrait" loading="eager">
            </div>
            <div class="floatCard">
              <small>From</small>
              <strong>South Laurel · DMV</strong>
            </div>
          </div>
        </section>

        <section class="section" id="music">
          <div class="sectionHead reveal">
            <div>
              <div class="kicker">Featured music</div>
              <h2>LIFE WAT U MAKE IT</h2>
            </div>
            <p class="sectionIntro">
              The 2026 three-track release is the current centerpiece of R$G MJ's catalog
              and a snapshot of his independent direction.
            </p>
          </div>

          <article class="feature reveal">
            <a class="coverWrap" href="${DATA.featuredRelease.apple}" target="_blank" rel="noopener noreferrer">
              <img src="${DATA.featuredRelease.cover}" alt="LIFE WAT U MAKE IT cover artwork">
            </a>

            <div class="releaseInfo">
              <span class="releaseBadge">Latest featured release</span>
              <h3>${DATA.featuredRelease.title}</h3>
              <p class="releaseMeta">${DATA.featuredRelease.type} · ${DATA.featuredRelease.releaseDate} · Hip-Hop/Rap</p>

              <div class="platforms">
                <a class="platform" href="${DATA.featuredRelease.apple}" target="_blank" rel="noopener noreferrer">
                  ${icons.apple} Apple Music
                </a>
                <a class="platform" href="${DATA.featuredRelease.spotifyArtist}" target="_blank" rel="noopener noreferrer">
                  ${icons.spotify} Spotify
                </a>
                <a class="platform" href="${DATA.featuredRelease.audiomackArtist}" target="_blank" rel="noopener noreferrer">
                  ${icons.audiomack} Audiomack
                </a>
              </div>
            </div>
          </article>
        </section>

        <section class="section" id="bio">
          <div class="sectionHead reveal">
            <div>
              <div class="kicker">Artist biography</div>
              <h2>Maryland roots.<br>Independent motion.</h2>
            </div>
            <p class="sectionIntro">
              Official artist information for listeners, press, playlists, collaborators,
              and editorial inquiries.
            </p>
          </div>

          <div class="bioGrid">
            <article class="bioCard reveal">
              <p>
                <b>R$G MJ</b> is an independent hip-hop and rap artist from
                <b>South Laurel, Maryland</b>, part of the greater <b>DMV</b> music region.
                He has been building and releasing his catalog independently since 2021,
                developing a sound and visual identity around direct writing, evolving
                production, and a self-driven release strategy.
              </p>

              <p>
                His catalog includes projects such as <b>$lime Season</b>, <b>Penny</b>,
                <b>ALL GAS NO MORALS</b>, and <b>BAXK LIKE I NEVER LEFT</b>, alongside
                2026 releases including <b>HIGHSPEED</b>, <b>NO SMOKE</b>,
                <b>ELEKTRONOMIA</b>, and <b>LIFE WAT U MAKE IT</b>.
                The current era continues his focus on growth, independence, and documenting
                life through music.
              </p>
            </article>

            <aside class="facts reveal">
              <div class="fact"><small>Artist</small><b>R$G MJ</b></div>
              <div class="fact"><small>Genre</small><b>Hip-Hop / Rap</b></div>
              <div class="fact"><small>From</small><b>South Laurel, Maryland</b></div>
              <div class="fact"><small>Region</small><b>DMV</b></div>
              <div class="fact"><small>Independent since</small><b>2021</b></div>
              <div class="fact"><small>Current release</small><b>LIFE WAT U MAKE IT</b></div>
            </aside>
          </div>
        </section>

        <section class="section" id="releases">
          <div class="sectionHead reveal">
            <div>
              <div class="kicker">Recent releases</div>
              <h2>Latest music</h2>
            </div>
            <p class="sectionIntro">Selected recent releases from the R$G MJ catalog.</p>
          </div>

          <div class="releases">
            ${DATA.recent.map((r, i) => `
              <a class="releaseCard reveal" href="${r.href}" target="_blank" rel="noopener noreferrer">
                <span class="num">0${i + 1}</span>
                <div>
                  <div class="kicker">${r.tag}</div>
                  <h3>${r.title}</h3>
                  <p>${r.date}</p>
                </div>
                <div class="cardBottom">
                  <span></span>
                  <span class="roundArrow">${icons.arrow}</span>
                </div>
              </a>`).join("")}
          </div>
        </section>

        <section class="section" id="media">
          <div class="sectionHead reveal">
            <div>
              <div class="kicker">Visuals</div>
              <h2>Artist media</h2>
            </div>
            <p class="sectionIntro">Official lifestyle photography and current release artwork.</p>
          </div>

          <div class="photoStrip">
            <div class="photoLarge reveal">
              <img src="${DATA.lifestyle}" alt="R$G MJ lifestyle photo" loading="lazy">
              <span class="photoCaption">R$G MJ · Lifestyle</span>
            </div>

            <div class="photoSmall reveal">
              <img src="${DATA.featuredRelease.cover}" alt="LIFE WAT U MAKE IT cover art" loading="lazy">
              <span class="photoCaption">LIFE WAT U MAKE IT · 2026</span>
            </div>
          </div>
        </section>

        <section class="section" id="links">
          <div class="sectionHead reveal">
            <div>
              <div class="kicker">Official links</div>
              <h2>Follow & stream</h2>
            </div>
            <p class="sectionIntro">Official social and music profiles for R$G MJ.</p>
          </div>

          <div class="socialGrid">
            ${socialCard("Instagram", "@nugit", "instagram", DATA.socials.instagram)}
            ${socialCard("TikTok", "@xhexkers", "tiktok", DATA.socials.tiktok)}
            ${socialCard("YouTube", "@rsgmj", "youtube", DATA.socials.youtube)}
            ${socialCard("Spotify", "R$G MJ", "spotify", DATA.socials.spotify)}
            ${socialCard("Apple Music", "R$G MJ", "apple", DATA.socials.apple)}
            ${socialCard("Audiomack", "R$G MJ", "audiomack", DATA.socials.audiomack)}
          </div>
        </section>

        <section class="section" id="press">
          <div class="press reveal">
            <div>
              <div class="kicker">Press / Electronic Press Kit</div>
              <h3>Media-ready artist information.</h3>
              <p>
                For interviews, artist features, reviews, playlist consideration, or editorial
                inquiries, use this page as the official R$G MJ reference. High-resolution
                lifestyle photography and current release artwork are available below.
              </p>

              <div class="downloadRow">
                <a class="btn primary" href="${DATA.lifestyle}" target="_blank" rel="noopener noreferrer">
                  ${icons.download} Lifestyle photo
                </a>
                <a class="btn secondary" href="${DATA.featuredRelease.cover}" target="_blank" rel="noopener noreferrer">
                  ${icons.download} Cover artwork
                </a>
              </div>
            </div>

            <div class="pressQuote">
              “R$G MJ is an independent hip-hop/rap artist from South Laurel, Maryland,
              representing the DMV and building his catalog independently since 2021.”
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footerIn">
          <div><strong>R$G MJ</strong> · Official Artist Page · <span id="year"></span></div>
          <div class="miniLinks">
            <a href="${DATA.socials.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="${DATA.socials.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href="#top">Top</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  document.getElementById("year").textContent = new Date().getFullYear();

  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");
  menu.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll("#navlinks a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
