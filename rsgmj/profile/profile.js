(() => {
  const DATA = {
    artist: "R$G MJ",
    origin: "South Laurel, Maryland",
    region: "DMV",
    genre: "Hip-Hop / Rap",
    profession: "Independent recording artist",
    published: "August 21, 2020",

    cover: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/RSG_MJ_Life_Wat_U_Make_It_Cover.PNG",
    lifestyle: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/RSG_MJ_Lifestyle_Photo.JPG",

    links: {
      official: "https://rrixh.pages.dev/rsgmj/",
      instagram: "https://instagram.com/nugit",
      tiktok: "https://www.tiktok.com/@xhexkers",
      youtube: "https://youtube.com/@rsgmj",
      audiomack: "https://audiomack.com/rg-mj",
      spotify: "https://open.spotify.com/artist/4kiKBTgrck6JtGS0j181O1",
      appleArtist: "https://music.apple.com/us/artist/r%24g-mj/1552992460",
      life: "https://music.apple.com/us/album/life-wat-u-make-it-single/6771527461",
      unitedMasters: "https://unitedmasters.com/a/rsg-mj",
      youngKutthroat: "https://youtube.com/watch?v=tEwN1oNspMo",
      lilNorthside: "https://youtube.com/channel/UCYtqLyU0N69jYh0hkCmskkg",
      officialKingReck: "https://youtube.com/channel/UCW8br78xtXstfUVwNgvLm3w",
      blessedShazam: "https://www.shazam.com/song/1844755701/blessed",
      amongUs: "https://audiomack.com/rg-mj/song/among-us",
      penny: "https://audiomack.com/rg-mj/song/get-tha-picture"
    }
  };

  const css = `
    :root{
      --bg:#09090b;--panel:#111115;--panel2:#16161b;--text:#f5f2ed;--muted:#aaa59f;
      --line:rgba(255,255,255,.10);--red:#b72635;--cream:#ead9c1;--max:1120px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:
        radial-gradient(circle at 84% 4%,rgba(183,38,53,.14),transparent 28%),
        radial-gradient(circle at 9% 55%,rgba(234,217,193,.05),transparent 30%),
        linear-gradient(#09090b,#08080a);
      color:var(--text);
      font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    }

    a{color:inherit;text-decoration:none}
    img{display:block;max-width:100%}

    .wrap{max-width:var(--max);margin:auto;padding:0 22px}

    .topbar{
      position:sticky;top:0;z-index:30;
      border-bottom:1px solid var(--line);
      background:rgba(9,9,11,.88);
      backdrop-filter:blur(18px)
    }

    .topbar .wrap{
      height:66px;display:flex;align-items:center;justify-content:space-between;gap:20px
    }

    .pub{
      font-size:13px;font-weight:950;letter-spacing:.07em;text-transform:uppercase
    }

    .pub span{color:var(--red)}

    .nav{display:flex;gap:18px;font-size:12px;color:#c9c5c0;font-weight:750}
    .nav a:hover{color:#fff}

    .articleHead{
      padding:72px 0 40px;
      border-bottom:1px solid var(--line)
    }

    .category{
      color:var(--red);font-size:11px;font-weight:900;
      letter-spacing:.18em;text-transform:uppercase
    }

    .articleHead h1{
      max-width:970px;
      font-size:clamp(48px,8vw,96px);
      line-height:.94;
      letter-spacing:-.065em;
      margin:14px 0 22px
    }

    .dek{
      max-width:820px;
      color:#cbc6c0;
      font-family:Georgia,serif;
      font-size:clamp(20px,2.5vw,30px);
      line-height:1.42
    }

    .meta{
      margin-top:28px;display:flex;gap:18px;flex-wrap:wrap;
      color:#85817c;font-size:12px
    }

    .meta b{color:#d9d4cd}

    .hero{padding:34px 0}

    .heroGrid{
      display:grid;
      grid-template-columns:1.25fr .75fr;
      gap:16px
    }

    .heroImg,.coverImg{
      border:1px solid var(--line);
      border-radius:24px;
      overflow:hidden;
      background:#111;
      position:relative;
      min-height:580px
    }

    .heroImg img,.coverImg img{
      width:100%;height:100%;object-fit:cover
    }

    .caption{
      position:absolute;left:14px;bottom:14px;
      background:rgba(0,0,0,.72);
      backdrop-filter:blur(10px);
      padding:9px 11px;
      border-radius:10px;
      font-size:10px;
      color:#d5d1cc;
      border:1px solid rgba(255,255,255,.12)
    }

    .article{
      display:grid;
      grid-template-columns:minmax(0,1fr) 290px;
      gap:54px;
      padding:48px 0 80px
    }

    .body{
      font-family:Georgia,"Times New Roman",serif;
      font-size:19px;
      line-height:1.85;
      color:#ded9d3
    }

    .body p{margin:0 0 25px}

    .body h2{
      font-family:Inter,ui-sans-serif,sans-serif;
      font-size:clamp(30px,4vw,46px);
      letter-spacing:-.05em;
      line-height:1.02;
      margin:56px 0 18px;
      color:#fff
    }

    .body .lead:first-letter{
      float:left;
      font-size:80px;
      line-height:.72;
      padding:10px 10px 0 0;
      color:var(--cream)
    }

    .pullquote{
      font-family:Inter,ui-sans-serif,sans-serif;
      font-size:clamp(27px,3vw,40px);
      font-weight:850;
      letter-spacing:-.04em;
      line-height:1.18;
      border-top:1px solid var(--line);
      border-bottom:1px solid var(--line);
      padding:28px 0;
      margin:42px 0;
      color:#fff
    }

    .timeline{display:grid;gap:10px;margin:26px 0 42px}

    .time{
      display:grid;
      grid-template-columns:80px 1fr;
      gap:16px;
      background:var(--panel);
      border:1px solid var(--line);
      border-radius:16px;
      padding:16px;
      font-family:Inter,sans-serif
    }

    .time .year{font-weight:950;color:var(--red)}
    .time strong{display:block;font-size:14px;margin-bottom:4px}
    .time span{color:var(--muted);font-size:12px;line-height:1.5}

    .sidebar{position:relative}

    .sidebox{
      position:sticky;top:90px;
      border:1px solid var(--line);
      border-radius:20px;
      background:var(--panel);
      padding:20px
    }

    .sidebox h3{
      margin:0 0 14px;
      font-size:13px;
      text-transform:uppercase;
      letter-spacing:.12em
    }

    .fact{padding:11px 0;border-top:1px solid var(--line)}
    .fact:first-of-type{border-top:0}

    .fact small{
      display:block;color:#77736f;font-size:9px;
      text-transform:uppercase;letter-spacing:.12em;font-weight:850
    }

    .fact b{
      display:block;margin-top:4px;font-size:13px;line-height:1.35
    }

    .sourceList{display:grid;gap:9px;margin-top:16px}

    .sourceList a{
      font-size:11px;color:#c7c1ba;
      border:1px solid var(--line);
      border-radius:10px;
      padding:10px;
      background:#141418
    }

    .sourceList a:hover{border-color:rgba(255,255,255,.25)}


    .collabGrid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:12px;
      margin:24px 0 34px;
      font-family:Inter,ui-sans-serif,sans-serif
    }

    .collabCard{
      border:1px solid var(--line);
      border-radius:18px;
      background:linear-gradient(145deg,#15151a,#101014);
      padding:20px;
      display:flex;
      flex-direction:column;
      min-height:250px
    }

    .collabNumber{
      color:var(--red);
      font-size:10px;
      font-weight:950;
      letter-spacing:.15em;
      text-transform:uppercase
    }

    .collabCard h3{
      margin:12px 0 10px;
      font-size:22px;
      letter-spacing:-.035em;
      line-height:1.05
    }

    .collabCard p{
      margin:0;
      color:#a9a49e;
      font-family:Inter,ui-sans-serif,sans-serif;
      font-size:12px;
      line-height:1.65
    }

    .collabTracks{
      margin:14px 0 18px;
      padding-top:13px;
      border-top:1px solid var(--line);
      color:#d4cfc9;
      font-size:11px;
      line-height:1.6
    }

    .collabLink{
      margin-top:auto;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      padding:11px 13px;
      border-radius:999px;
      border:1px solid var(--line);
      background:#19191e;
      color:#f0ece7;
      font-size:11px;
      font-weight:850
    }

    .collabLink:hover{border-color:rgba(255,255,255,.27)}

    .sourceSection{
      margin-top:58px;
      padding-top:28px;
      border-top:1px solid var(--line);
      font-family:Inter,sans-serif
    }

    .sourceSection h3{font-size:18px;margin:0 0 12px}

    .sourceSection p{
      font-size:12px;line-height:1.65;color:#8e8983;margin:0 0 10px
    }

    .sourceSection a{text-decoration:underline;text-underline-offset:3px}

    .officialBox{
      margin-top:38px;
      border:1px solid var(--line);
      border-radius:18px;
      padding:20px;
      background:linear-gradient(135deg,#15151a,#0f0f13);
      font-family:Inter,sans-serif
    }

    .officialBox strong{display:block;font-size:13px;margin-bottom:6px}

    .officialBox p{
      font-size:12px;line-height:1.6;color:#9d9892;margin:0
    }

    .footer{
      border-top:1px solid var(--line);
      padding:32px 0 48px;
      color:#77736f;
      font-size:11px
    }

    .footer .wrap{
      display:flex;justify-content:space-between;
      gap:20px;flex-wrap:wrap
    }

    .footer a{color:#c8c2bb}

    @media(max-width:860px){
      .heroGrid,.article,.collabGrid{grid-template-columns:1fr}
      .heroImg,.coverImg{min-height:unset;aspect-ratio:4/5}
      .coverImg{aspect-ratio:1/1}
      .sidebar{order:-1}
      .sidebox{position:static;display:grid;grid-template-columns:1fr 1fr;gap:0 18px}
      .sidebox h3,.sourceList{grid-column:1/-1}
      .nav{display:none}
    }

    @media(max-width:520px){
      .wrap{padding:0 16px}
      .articleHead{padding-top:48px}
      .articleHead h1{font-size:49px}
      .dek{font-size:20px}
      .body{font-size:18px}
      .sidebox{grid-template-columns:1fr}
      .sourceList{grid-column:auto}
      .time{grid-template-columns:62px 1fr}
    }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context":"https://schema.org",
    "@type":"ProfilePage",
    "dateCreated":"2026-09-20",
    "dateModified":"2026-09-20",
    "url":"https://rrixh.pages.dev/rsgmj/profile/",
    "mainEntity":{
      "@type":"Person",
      "name":"R$G MJ",
      "jobTitle":"Hip-Hop / Rap Recording Artist",
      "description":"Independent hip-hop and rap recording artist from South Laurel, Maryland, representing the DMV.",
      "image":DATA.lifestyle,
      "sameAs":[
        DATA.links.appleArtist,
        DATA.links.spotify,
        DATA.links.audiomack,
        DATA.links.unitedMasters,
        DATA.links.instagram,
        DATA.links.tiktok,
        DATA.links.youtube
      ]
    }
  });
  document.head.appendChild(schema);

  document.getElementById("profile-root").innerHTML = `
    <div class="topbar">
      <div class="wrap">
        <a class="pub" href="${DATA.links.official}">
          <span>R$G MJ</span> · Media Profile
        </a>

        <nav class="nav">
          <a href="#profile">Profile</a>
          <a href="#career">Career</a>
          <a href="#catalog">Catalog</a>
          <a href="#collaborations">Collaborations</a>
          <a href="#sources">Sources</a>
        </nav>
      </div>
    </div>

    <header class="articleHead">
      <div class="wrap">
        <div class="category">Official Artist Profile · DMV Hip-Hop</div>

        <h1>R$G MJ Is Building an Independent Rap Catalog From South Laurel</h1>

        <div class="dek">
          A detailed look at the Maryland artist's South Laurel roots, DMV identity,
          growing music catalog, collaborative releases, and the 2026 era led by
          <i>LIFE WAT U MAKE IT</i>.
        </div>

        <div class="meta">
          <span><b>Published:</b> ${DATA.published}</span>
          <span><b>Subject:</b> R$G MJ</span>
          <span><b>Profession:</b> ${DATA.profession}</span>
          <span><b>Location:</b> South Laurel, Maryland / DMV</span>
        </div>
      </div>
    </header>

    <section class="hero">
      <div class="wrap heroGrid">
        <figure class="heroImg">
          <img src="${DATA.lifestyle}" alt="R$G MJ lifestyle portrait">
          <figcaption class="caption">R$G MJ · Official lifestyle image</figcaption>
        </figure>

        <figure class="coverImg">
          <img src="${DATA.cover}" alt="LIFE WAT U MAKE IT by R$G MJ">
          <figcaption class="caption">LIFE WAT U MAKE IT · 2026</figcaption>
        </figure>
      </div>
    </section>

    <div class="wrap article">
      <article class="body" id="profile">

        <p class="lead">
          R$G MJ is an independent hip-hop and rap recording artist from
          <b>South Laurel, Maryland</b>, representing the broader <b>DMV</b> music region.
          His public catalog stretches across multiple years and platforms, with early releases,
          full-length projects, collaborations, standalone singles, and a growing digital artist identity.
        </p>

        <p>
          South Laurel is the geographic center of R$G MJ's artist story. Located in Maryland
          within the Washington metropolitan area, the community places him directly inside the
          wider DMV cultural region while keeping his identity specifically rooted in Maryland.
          His official artist presentation consistently emphasizes that connection rather than
          treating “DMV” as a generic label.
        </p>

        <p>
          Professionally, R$G MJ operates as an independent recording artist. His work is distributed
          across services including Apple Music, Spotify, Amazon Music, Audiomack, Shazam, and
          UnitedMasters, with social profiles supporting the same artist name and catalog.
        </p>

        <div class="pullquote">
          Maryland roots, DMV identity, and an independent release strategy are the three clearest
          through-lines in the R$G MJ catalog.
        </div>

        <h2 id="career">The early catalog: 2020–2022</h2>

        <p>
          Public music-service listings show material from R$G MJ reaching back to 2020,
          including the track “again.” By 2021, the catalog had expanded significantly.
          Audiomack lists songs from the project <i>$lime Season</i>, including “Among Us,”
          while the December 2021 project <i>Penny</i> includes “No Pixks,” “Slide,”
          “Get Tha Picture,” “Empty,” “Slaughter,” “Facts,” and “Triple Slatt.”
        </p>

        <p>
          Another 2021 project, <i>Sauna</i>, includes “Hoodie On,” “The 3 Slayers,”
          “Trap Nigga,” and “Slatt Flow V.” In 2022, R$G MJ continued the catalog with
          <i>Squid Games</i>, including records such as “[Day 2] Kandy Man” featuring UPGR4YD
          and “[Day 4] Dirt/Rookie.”
        </p>

        <div class="timeline">
          <div class="time">
            <div class="year">2020</div>
            <div>
              <strong>Early publicly indexed material</strong>
              <span>Streaming listings include “again,” establishing material before the larger 2021 catalog.</span>
            </div>
          </div>

          <div class="time">
            <div class="year">2021</div>
            <div>
              <strong>$lime Season, Sauna, and Penny</strong>
              <span>Multiple projects and tracks establish the first major stretch of the public catalog.</span>
            </div>
          </div>

          <div class="time">
            <div class="year">2022</div>
            <div>
              <strong>Squid Games era</strong>
              <span>Additional material expands the catalog and introduces more collaboration.</span>
            </div>
          </div>

          <div class="time">
            <div class="year">2024</div>
            <div>
              <strong>ALL GAS NO MORALS</strong>
              <span>A larger project era with an extended track list and multiple featured artists.</span>
            </div>
          </div>

          <div class="time">
            <div class="year">2026</div>
            <div>
              <strong>LIFE WAT U MAKE IT</strong>
              <span>Three-song Hip-Hop/Rap release issued May 15, 2026.</span>
            </div>
          </div>
        </div>

        <h2 id="catalog">A catalog built across projects, singles, and collaborations</h2>

        <p>
          R$G MJ's catalog is not limited to one release format. Public listings show albums,
          short projects, singles, interludes, and featured appearances. The 2024 project
          <i>ALL GAS NO MORALS</i> includes a lengthy track list with titles such as
          “Dreaming (intro),” “StaRRy Night,” “Koke inna kabinet,” “Beef,” “NO RUSH,”
          “HOODIE ON,” “Traphouse,” “Krime pays,” “Money win wars,” “ROOT OF ALL EVIL,”
          “FreeKars,” “FreeKar musik,” “Gangstas Paradise,” “RRaised $luts,”
          “Slime szn,” “Stuxk ona bloxk (Extended Version),” and “HEAVYWEIGHT.”
        </p>

        <p>
          Public credits attached to that period also show collaborative work with artists
          including Young Kutthroat, Lil Northside, Monalit07, and Official King Reck.
          Earlier catalog entries include collaborations with UPGR4YD, while Apple Music
          also indexes a 2021 appearance by R$G MJ on “No purpin” by PopUpJay.
        </p>


        <h2 id="collaborations">Collaborations and connected artists</h2>

        <p>
          Collaboration has become a visible part of the R$G MJ catalog. Rather than limiting
          projects to solo records, several releases bring recurring collaborators back across
          multiple songs and different years. The strongest concentration appears on
          <i>ALL GAS NO MORALS</i>, where Young Kutthroat, Lil Northside, Monalit07, and
          Official King Reck appear throughout the public track credits.
        </p>

        <p>
          <b>Young Kutthroat</b> is the most frequent collaborator on
          <i>ALL GAS NO MORALS</i>. Public album credits list him on “StaRRy Night,”
          “Koke inna kabinet,” “Beef,” “Krime pays,” “Money win wars,”
          “ROOT OF ALL EVIL,” “FreeKars,” “Gangstas Paradise,” and “RRaised $luts.”
          That run makes the collaboration more than a one-song feature and gives Young Kutthroat
          a recurring role throughout the project.
        </p>

        <p>
          <b>Lil Northside</b> is another recurring collaborator. Public credits connect
          Lil Northside to “NO RUSH,” “HOODIE ON,” “Traphouse,” and
          “Gangstas Paradise” on <i>ALL GAS NO MORALS</i>, as well as later R$G MJ releases
          including “3am” and “been that.” R$G MJ also identifies <b>Monalit07</b> as a name
          connected with Lil Northside. Because some streaming metadata still lists
          “Lil Northside” and “Monalit07” as separate credits on “NO RUSH,” that name
          relationship is presented here as artist-provided background rather than a platform-verified alias.
        </p>

        <p>
          <b>Official King Reck</b> appears with R$G MJ on “Traphouse,” alongside
          Lil Northside, and later on records including “been that” and the 2025 single
          “OFF THE EARLY.” Those releases show the collaboration continuing beyond one album cycle.
        </p>

        <div class="collabGrid">
          <div class="collabCard">
            <div class="collabNumber">Collaborator 01</div>
            <h3>Young Kutthroat</h3>
            <p>
              A recurring R$G MJ collaborator with multiple appearances throughout
              <i>ALL GAS NO MORALS</i>.
            </p>
            <div class="collabTracks">
              Selected credits: StaRRy Night · Koke inna kabinet · Beef · Krime pays ·
              Money win wars · ROOT OF ALL EVIL · FreeKars · Gangstas Paradise · RRaised $luts
            </div>
            <a class="collabLink" href="${DATA.links.youngKutthroat}" target="_blank" rel="noopener">
              Watch on YouTube
            </a>
          </div>

          <div class="collabCard">
            <div class="collabNumber">Collaborator 02</div>
            <h3>Lil Northside</h3>
            <p>
              Recurring collaborator across album tracks and later singles. R$G MJ identifies
              Monalit07 as a name connected with Lil Northside.
            </p>
            <div class="collabTracks">
              Selected credits: NO RUSH · HOODIE ON · Traphouse · Gangstas Paradise ·
              3am · been that
            </div>
            <a class="collabLink" href="${DATA.links.lilNorthside}" target="_blank" rel="noopener">
              YouTube channel
            </a>
          </div>

          <div class="collabCard">
            <div class="collabNumber">Collaborator 03</div>
            <h3>Official King Reck</h3>
            <p>
              A collaborator whose work with R$G MJ extends from the
              <i>ALL GAS NO MORALS</i> period into later releases.
            </p>
            <div class="collabTracks">
              Selected credits: Traphouse · been that · OFF THE EARLY
            </div>
            <a class="collabLink" href="${DATA.links.officialKingReck}" target="_blank" rel="noopener">
              YouTube channel
            </a>
          </div>
        </div>

        <h2>The 2025 transition</h2>

        <p>
          The following year continued the release pace. Public listings include songs and
          projects such as “GMA PRAYING,” “KAPOW!,” “GET OUT THE WAY,” “ME N MARY JANE,”
          “Dirty Game (The Interlude),” and a 2025 version of
          <i>SQUID GAMES (INTERLUDE)</i> featuring UPGR4YD.
        </p>

        <p>
          That period matters because it connects the earlier catalog to the cleaner,
          more concentrated 2026 release run. It shows R$G MJ continuing to release music
          rather than resurfacing only for one project.
        </p>

        <h2>The 2026 era: HIGHSPEED, NO SMOKE, BOMPTON, and LIFE WAT U MAKE IT</h2>

        <p>
          In March 2026, R$G MJ released “HIGHSPEED,” followed by “NO SMOKE.”
          April brought <i>BOMPTON</i>, a two-song release containing
          “THUGGIN IN HARMONY” and “DISSING ME?!”.
        </p>

        <p>
          On May 15, 2026, Apple Music lists <i>LIFE WAT U MAKE IT</i> as a three-song
          Hip-Hop/Rap release. The project is the central release in the artist's current
          presentation and serves as a clear marker of the newest phase of his catalog.
        </p>

        <p>
          The release also works as part of a broader visual identity. Its cover artwork,
          official lifestyle photography, and centralized artist page are used together
          as press-ready assets for editorial inquiries, interviews, platform verification,
          and other professional artist communication.
        </p>

        <h2>South Laurel and the DMV identity</h2>

        <p>
          R$G MJ identifies South Laurel, Maryland as his home base and the DMV as the
          regional culture connected to his music. South Laurel sits in Prince George's County
          in the Maryland side of the Washington metropolitan area, making “Maryland artist”
          and “DMV artist” complementary descriptions rather than competing ones.
        </p>

        <p>
          That regional framing is important to the artist's public identity. The emphasis is
          not on claiming a different city; it is on representing Maryland while recognizing
          the wider DMV environment around it.
        </p>

        <h2>Independent artist infrastructure</h2>

        <p>
          Beyond the music itself, R$G MJ has built a broader artist infrastructure:
          an official web page, a dedicated media profile, platform pages, visual assets,
          streaming links, social channels, press materials, and direct contact options.
          That approach gives editors, listeners, collaborators, and platforms a single place
          to verify the artist identity and move between official sources.
        </p>

        <p>
          The artist's current official handles include Instagram <b>@nugit</b>,
          TikTok <b>@xhexkers</b>, YouTube <b>@rsgmj</b>, and Audiomack
          <b>@rg-mj</b>. Music is also publicly indexed under R$G MJ on Spotify,
          Apple Music, Shazam, UnitedMasters, and Amazon Music.
        </p>

        <div class="officialBox">
          <strong>Editorial transparency</strong>
          <p>
            This is an official, self-published R$G MJ media profile hosted on the artist's
            own web property. It is written in a professional article format for press,
            research, and artist-reference purposes, but it is not presented as independent
            third-party journalism.
          </p>
        </div>

        <section class="sourceSection" id="sources">
          <h3>Public reference links</h3>

          <p>
            Release dates, platform availability, and catalog details on this page are based
            on public music-service listings. South Laurel / DMV background information is
            artist-provided.
          </p>

          <p><a href="${DATA.links.life}" target="_blank" rel="noopener">Apple Music — LIFE WAT U MAKE IT</a></p>
          <p><a href="${DATA.links.appleArtist}" target="_blank" rel="noopener">Apple Music — R$G MJ artist page</a></p>
          <p><a href="${DATA.links.audiomack}" target="_blank" rel="noopener">Audiomack — R$G MJ</a></p>
          <p><a href="${DATA.links.blessedShazam}" target="_blank" rel="noopener">Shazam — BLESSED by R$G MJ</a></p>
          <p><a href="${DATA.links.unitedMasters}" target="_blank" rel="noopener">UnitedMasters — R$G MJ</a></p>
          <p><a href="${DATA.links.spotify}" target="_blank" rel="noopener">Spotify — R$G MJ</a></p>
        </section>
      </article>

      <aside class="sidebar">
        <div class="sidebox">
          <h3>R$G MJ at a glance</h3>

          <div class="fact">
            <small>Profession</small>
            <b>Independent Hip-Hop / Rap Recording Artist</b>
          </div>

          <div class="fact">
            <small>From</small>
            <b>South Laurel, Maryland</b>
          </div>

          <div class="fact">
            <small>Region</small>
            <b>DMV</b>
          </div>

          <div class="fact">
            <small>Public catalog</small>
            <b>2020–present</b>
          </div>

          <div class="fact">
            <small>Current featured release</small>
            <b>LIFE WAT U MAKE IT</b>
          </div>

          <div class="fact">
            <small>Primary genre</small>
            <b>Hip-Hop / Rap</b>
          </div>

          <div class="fact">
            <small>Recurring collaborators</small>
            <b>Young Kutthroat · Lil Northside / Monalit07 · Official King Reck · Geesway · Wokstar Jay · Asia9loxkk · KuttaGang HOG · 9400wokky · Niko & many more</b>
          </div>

          <div class="fact">
            <small>Platforms</small>
            <b>Apple Music · Spotify · Amazon Music · Audiomack · Shazam · UnitedMasters</b>
          </div>

          <div class="sourceList">
            <a href="${DATA.links.official}" target="_blank" rel="noopener">Official artist page</a>
            <a href="${DATA.links.appleArtist}" target="_blank" rel="noopener">Apple Music</a>
            <a href="${DATA.links.spotify}" target="_blank" rel="noopener">Spotify</a>
            <a href="${DATA.links.audiomack}" target="_blank" rel="noopener">Audiomack</a>
            <a href="${DATA.links.unitedMasters}" target="_blank" rel="noopener">UnitedMasters</a>
            <a href="${DATA.links.instagram}" target="_blank" rel="noopener">Instagram @nugit</a>
            <a href="${DATA.links.tiktok}" target="_blank" rel="noopener">TikTok @xhexkers</a>
            <a href="${DATA.links.youtube}" target="_blank" rel="noopener">YouTube @rsgmj</a>
          </div>
        </div>
      </aside>
    </div>

    <footer class="footer">
      <div class="wrap">
        <span>R$G MJ Official Media Profile · Published ${DATA.published}</span>
        <span><a href="${DATA.links.official}">Official R$G MJ artist page</a></span>
      </div>
    </footer>
  `;
})();
