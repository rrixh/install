(() => {
  const DATA = {
    artist: "R$G MJ",
    origin: "South Laurel, Maryland",
    region: "DMV",
    genre: "Hip-Hop / Rap",
    profession: "Independent recording artist",
    published: "August 5, 2021",
    careerStart: "February 26, 2019",

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


    .zoomableImage{
      cursor:zoom-in;
      transition:transform .22s ease,filter .22s ease
    }

    .zoomableImage:hover{
      transform:scale(1.012);
      filter:brightness(1.03)
    }

    .imageLightbox{
      position:fixed;
      inset:0;
      z-index:9999;
      display:none;
      align-items:center;
      justify-content:center;
      background:rgba(0,0,0,.94);
      backdrop-filter:blur(12px);
      touch-action:none
    }

    .imageLightbox.open{display:flex}

    .lightboxStage{
      position:relative;
      width:100%;
      height:100%;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center
    }

    .lightboxImage{
      max-width:94vw;
      max-height:88vh;
      object-fit:contain;
      user-select:none;
      -webkit-user-drag:none;
      transform-origin:center center;
      will-change:transform;
      transition:transform .08s linear
    }

    .lightboxTopbar{
      position:absolute;
      top:max(14px,env(safe-area-inset-top));
      left:14px;
      right:14px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      z-index:3
    }

    .lightboxHint{
      color:#d6d1cb;
      font-size:11px;
      background:rgba(18,18,22,.82);
      border:1px solid rgba(255,255,255,.12);
      border-radius:999px;
      padding:9px 12px;
      backdrop-filter:blur(10px)
    }

    .lightboxControls{
      display:flex;
      gap:8px
    }

    .lightboxBtn{
      width:42px;
      height:42px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.15);
      background:rgba(18,18,22,.86);
      color:#fff;
      display:grid;
      place-items:center;
      font-size:20px;
      font-weight:800;
      cursor:pointer;
      backdrop-filter:blur(10px)
    }

    .lightboxBtn:hover{
      background:rgba(35,35,40,.95)
    }

    .lightboxBottom{
      position:absolute;
      bottom:max(18px,env(safe-area-inset-bottom));
      left:50%;
      transform:translateX(-50%);
      display:flex;
      gap:8px;
      z-index:3
    }

    .lightboxBottom .lightboxBtn{
      width:auto;
      min-width:44px;
      height:40px;
      border-radius:999px;
      padding:0 14px;
      font-size:14px
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
          <span>R$G MJ</span> &middot; Media Profile
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
        <div class="category">Official Artist Profile &middot; DMV Hip-Hop</div>

        <h1>R$G MJ Is Building an Independent Rap Catalog From South Laurel</h1>

        <div class="dek">
          A detailed look at the Maryland artist's South Laurel roots, DMV identity,
          growing music catalog, collaborative releases, and the 2026 era led by
          <i>LIFE WAT U MAKE IT</i>.
        </div>

        <div class="meta">
          <span><b>Published:</b> ${DATA.published}</span>
          <span><b>Career documented since:</b> ${DATA.careerStart}</span>
          <span><b>Subject:</b> R$G MJ</span>
          <span><b>Profession:</b> ${DATA.profession}</span>
          <span><b>Location:</b> South Laurel, Maryland / DMV</span>
        </div>
      </div>
    </header>

    <section class="hero">
      <div class="wrap heroGrid">
        <figure class="heroImg">
          <img class="zoomableImage" src="${DATA.lifestyle}" data-full="${DATA.lifestyle}" alt="R$G MJ lifestyle portrait" tabindex="0" role="button" aria-label="Open R$G MJ lifestyle photo">
          <figcaption class="caption">R$G MJ &middot; Official lifestyle image</figcaption>
        </figure>

        <figure class="coverImg">
          <img class="zoomableImage" src="${DATA.cover}" data-full="${DATA.cover}" alt="LIFE WAT U MAKE IT by R$G MJ" tabindex="0" role="button" aria-label="Open LIFE WAT U MAKE IT cover artwork">
          <figcaption class="caption">LIFE WAT U MAKE IT &middot; 2026</figcaption>
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
          treating &ldquo;DMV&rdquo; as a generic label.
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

        <h2 id="career">The early catalog: 2020&ndash;2022</h2>

        <p>
          Public music-service listings show material from R$G MJ reaching back to 2020,
          including the track &ldquo;again.&rdquo; By 2021, the catalog had expanded significantly.
          Audiomack lists songs from the project <i>$lime Season</i>, including &ldquo;Among Us,&rdquo;
          while the December 2021 project <i>Penny</i> includes &ldquo;No Pixks,&rdquo; &ldquo;Slide,&rdquo;
          &ldquo;Get Tha Picture,&rdquo; &ldquo;Empty,&rdquo; &ldquo;Slaughter,&rdquo; &ldquo;Facts,&rdquo; and &ldquo;Triple Slatt.&rdquo;
        </p>

        <p>
          Another 2021 project, <i>Sauna</i>, includes &ldquo;Hoodie On,&rdquo; &ldquo;The 3 Slayers,&rdquo;
          &ldquo;Trap Nigga,&rdquo; and &ldquo;Slatt Flow V.&rdquo; In 2022, R$G MJ continued the catalog with
          <i>Squid Games</i>, including records such as &ldquo;[Day 2] Kandy Man&rdquo; featuring UPGR4YD
          and &ldquo;[Day 4] Dirt/Rookie.&rdquo;
        </p>

        <div class="timeline">
          <div class="time">
            <div class="year">2020</div>
            <div>
              <strong>Early publicly indexed material</strong>
              <span>Streaming listings include &ldquo;again,&rdquo; establishing material before the larger 2021 catalog.</span>
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
          &ldquo;Dreaming (intro),&rdquo; &ldquo;StaRRy Night,&rdquo; &ldquo;Koke inna kabinet,&rdquo; &ldquo;Beef,&rdquo; &ldquo;NO RUSH,&rdquo;
          &ldquo;HOODIE ON,&rdquo; &ldquo;Traphouse,&rdquo; &ldquo;Krime pays,&rdquo; &ldquo;Money win wars,&rdquo; &ldquo;ROOT OF ALL EVIL,&rdquo;
          &ldquo;FreeKars,&rdquo; &ldquo;FreeKar musik,&rdquo; &ldquo;Gangstas Paradise,&rdquo; &ldquo;RRaised $luts,&rdquo;
          &ldquo;Slime szn,&rdquo; &ldquo;Stuxk ona bloxk (Extended Version),&rdquo; and &ldquo;HEAVYWEIGHT.&rdquo;
        </p>

        <p>
          Public credits attached to that period also show collaborative work with artists
          including Young Kutthroat, Lil Northside, Monalit07, and Official King Reck.
          Earlier catalog entries include collaborations with UPGR4YD, while Apple Music
          also indexes a 2021 appearance by R$G MJ on &ldquo;No purpin&rdquo; by PopUpJay.
        </p>


        <h2 id="collaborations">Collaborations and connected artists</h2>

        <p>
          Collaboration has become a visible part of the R$G MJ catalog. Rather than limiting
          projects to solo records, several releases bring recurring collaborators back across
          multiple songs and different years. The strongest concentration appears around
          <i>ALL GAS NO MORALS</i>, with recurring credits tied to Young Kutthroat,
          Lil Northside, Monalit07, and Official King Reck. R$G MJ's broader collaborative
          circle also includes Geesway, Wokstar Jay, Asia9loxkk, KuttaGang HOG, 9400wokky,
          Niko, and additional artists connected to different release periods.
        </p>

        <p>
          <b>Young Kutthroat</b> is the most frequent collaborator on
          <i>ALL GAS NO MORALS</i>. Public album credits list him on &ldquo;StaRRy Night,&rdquo;
          &ldquo;Koke inna kabinet,&rdquo; &ldquo;Beef,&rdquo; &ldquo;Krime pays,&rdquo; &ldquo;Money win wars,&rdquo;
          &ldquo;ROOT OF ALL EVIL,&rdquo; &ldquo;FreeKars,&rdquo; &ldquo;Gangstas Paradise,&rdquo; and &ldquo;RRaised $luts.&rdquo;
          That run makes the collaboration more than a one-song feature and gives Young Kutthroat
          a recurring role throughout the project.
        </p>

        <p>
          <b>Lil Northside</b> is another recurring collaborator. Public credits connect
          Lil Northside to &ldquo;NO RUSH,&rdquo; &ldquo;HOODIE ON,&rdquo; &ldquo;Traphouse,&rdquo; and
          &ldquo;Gangstas Paradise&rdquo; on <i>ALL GAS NO MORALS</i>, as well as later R$G MJ releases
          including &ldquo;3am&rdquo; and &ldquo;been that.&rdquo; R$G MJ also identifies <b>Monalit07</b> as a name
          connected with Lil Northside. Because some streaming metadata still lists
          &ldquo;Lil Northside&rdquo; and &ldquo;Monalit07&rdquo; as separate credits on &ldquo;NO RUSH,&rdquo; that name
          relationship is presented here as artist-provided background rather than a platform-verified alias.
        </p>

        <p>
          <b>Official King Reck</b> appears with R$G MJ on &ldquo;Traphouse,&rdquo; alongside
          Lil Northside, and later on records including &ldquo;been that&rdquo; and the 2025 single
          &ldquo;OFF THE EARLY.&rdquo; Those releases show the collaboration continuing beyond one album cycle.
        </p>

        <p>
          Beyond the recurring names highlighted below, the wider R$G MJ collaboration network
          spans several independent artists and release eras. Additional collaborators associated
          with the catalog include <b>Geesway</b>, <b>Wokstar Jay</b>, <b>Asia9loxkk</b>,
          <b>KuttaGang HOG</b>, <b>9400wokky</b>, and <b>Niko</b>, among others. Their inclusion
          reflects a catalog that has grown through both solo work and a rotating group of
          collaborators rather than a fixed feature lineup.
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
              Selected credits: StaRRy Night &middot; Koke inna kabinet &middot; Beef &middot; Krime pays &middot;
              Money win wars &middot; ROOT OF ALL EVIL &middot; FreeKars &middot; Gangstas Paradise &middot; RRaised $luts
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
              Selected credits: NO RUSH &middot; HOODIE ON &middot; Traphouse &middot; Gangstas Paradise &middot;
              3am &middot; been that
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
              Selected credits: Traphouse &middot; been that &middot; OFF THE EARLY
            </div>
            <a class="collabLink" href="${DATA.links.officialKingReck}" target="_blank" rel="noopener">
              YouTube channel
            </a>
          </div>
        </div>

        <h2>The 2025 transition</h2>

        <p>
          The following year continued the release pace. Public listings include songs and
          projects such as &ldquo;GMA PRAYING,&rdquo; &ldquo;KAPOW!,&rdquo; &ldquo;GET OUT THE WAY,&rdquo; &ldquo;ME N MARY JANE,&rdquo;
          &ldquo;Dirty Game (The Interlude),&rdquo; and a 2025 version of
          <i>SQUID GAMES (INTERLUDE)</i> featuring UPGR4YD.
        </p>

        <p>
          That period matters because it connects the earlier catalog to the cleaner,
          more concentrated 2026 release run. It shows R$G MJ continuing to release music
          rather than resurfacing only for one project.
        </p>

        <h2>The 2026 era: HIGHSPEED, NO SMOKE, BOMPTON, and LIFE WAT U MAKE IT</h2>

        <p>
          In March 2026, R$G MJ released &ldquo;HIGHSPEED,&rdquo; followed by &ldquo;NO SMOKE.&rdquo;
          April brought <i>BOMPTON</i>, a two-song release containing
          &ldquo;THUGGIN IN HARMONY&rdquo; and &ldquo;DISSING ME?!&rdquo;.
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
          in the Maryland side of the Washington metropolitan area, making &ldquo;Maryland artist&rdquo;
          and &ldquo;DMV artist&rdquo; complementary descriptions rather than competing ones.
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
          <strong>Profile note</strong>
          <p>
            This profile compiles publicly accessible music-service listings together with
            biographical details provided for artist-reference, press, and research purposes.
            Release dates, credits, platform availability, and catalog details are sourced
            from the public references listed below.
          </p>
        </div>

        <section class="sourceSection" id="sources">
          <h3>Public reference links</h3>

          <p>
            Release dates, platform availability, and catalog details on this page are based
            on public music-service listings. South Laurel / DMV background information is
            artist-provided.
          </p>

          <p><a href="${DATA.links.life}" target="_blank" rel="noopener">Apple Music &mdash; LIFE WAT U MAKE IT</a></p>
          <p><a href="${DATA.links.appleArtist}" target="_blank" rel="noopener">Apple Music &mdash; R$G MJ artist page</a></p>
          <p><a href="${DATA.links.audiomack}" target="_blank" rel="noopener">Audiomack &mdash; R$G MJ</a></p>
          <p><a href="${DATA.links.blessedShazam}" target="_blank" rel="noopener">Shazam &mdash; BLESSED by R$G MJ</a></p>
          <p><a href="${DATA.links.unitedMasters}" target="_blank" rel="noopener">UnitedMasters &mdash; R$G MJ</a></p>
          <p><a href="${DATA.links.spotify}" target="_blank" rel="noopener">Spotify &mdash; R$G MJ</a></p>
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
            <small>Career documented since</small>
            <b>${DATA.careerStart}</b>
          </div>

          <div class="fact">
            <small>Public catalog</small>
            <b>2020&ndash;present</b>
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
            <small>Collaborators</small>
            <b>Young Kutthroat &middot; Lil Northside / Monalit07 &middot; Official King Reck &middot; Geesway &middot; Wokstar Jay &middot; Asia9loxkk &middot; KuttaGang HOG &middot; 9400wokky &middot; Niko &middot; and others</b>
          </div>

          <div class="fact">
            <small>Platforms</small>
            <b>Apple Music &middot; Spotify &middot; Amazon Music &middot; Audiomack &middot; Shazam &middot; UnitedMasters</b>
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


    <div class="imageLightbox" id="imageLightbox" aria-hidden="true">
      <div class="lightboxStage" id="lightboxStage">
        <div class="lightboxTopbar">
          <div class="lightboxHint">Pinch, scroll, or use + / &minus; to zoom</div>
          <div class="lightboxControls">
            <button class="lightboxBtn" id="lightboxClose" type="button" aria-label="Close image">&times;</button>
          </div>
        </div>

        <img class="lightboxImage" id="lightboxImage" src="" alt="Expanded media">

        <div class="lightboxBottom">
          <button class="lightboxBtn" id="zoomOut" type="button" aria-label="Zoom out">&minus;</button>
          <button class="lightboxBtn" id="zoomReset" type="button">Reset</button>
          <button class="lightboxBtn" id="zoomIn" type="button" aria-label="Zoom in">+</button>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="wrap">
        <span>R$G MJ Official Media Profile &middot; Published ${DATA.published}</span>
        <span><a href="${DATA.links.official}">Official R$G MJ artist page</a></span>
      </div>
    </footer>
  `;
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxStage = document.getElementById("lightboxStage");
  const closeBtn = document.getElementById("lightboxClose");
  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const zoomResetBtn = document.getElementById("zoomReset");

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let startTranslateX = 0;
  let startTranslateY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function applyLightboxTransform() {
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  function resetLightbox() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    applyLightboxTransform();
  }

  function setScale(nextScale) {
    scale = clamp(nextScale, 1, 6);
    if (scale === 1) {
      translateX = 0;
      translateY = 0;
    }
    applyLightboxTransform();
  }

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Expanded media";
    resetLightbox();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightboxImage.src = "";
    }, 120);
  }

  document.querySelectorAll(".zoomableImage").forEach((img) => {
    const open = () => openLightbox(img.dataset.full || img.src, img.alt);
    img.addEventListener("click", open);
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  zoomInBtn.addEventListener("click", () => setScale(scale + 0.5));
  zoomOutBtn.addEventListener("click", () => setScale(scale - 0.5));
  zoomResetBtn.addEventListener("click", resetLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxStage) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "+" || event.key === "=") setScale(scale + 0.5);
    if (event.key === "-") setScale(scale - 0.5);
    if (event.key === "0") resetLightbox();
  });

  lightboxStage.addEventListener("wheel", (event) => {
    if (!lightbox.classList.contains("open")) return;
    event.preventDefault();
    setScale(scale + (event.deltaY < 0 ? 0.2 : -0.2));
  }, { passive:false });

  lightboxImage.addEventListener("mousedown", (event) => {
    if (scale <= 1) return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    startTranslateX = translateX;
    startTranslateY = translateY;
    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!dragging) return;
    translateX = startTranslateX + (event.clientX - dragStartX);
    translateY = startTranslateY + (event.clientY - dragStartY);
    applyLightboxTransform();
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
  });

  lightboxStage.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      const [a, b] = event.touches;
      pinchStartDistance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
      pinchStartScale = scale;
    } else if (event.touches.length === 1 && scale > 1) {
      dragging = true;
      dragStartX = event.touches[0].clientX;
      dragStartY = event.touches[0].clientY;
      startTranslateX = translateX;
      startTranslateY = translateY;
    }
  }, { passive:false });

  lightboxStage.addEventListener("touchmove", (event) => {
    if (event.touches.length === 2 && pinchStartDistance) {
      event.preventDefault();
      const [a, b] = event.touches;
      const distance = Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
      setScale(pinchStartScale * (distance / pinchStartDistance));
    } else if (event.touches.length === 1 && dragging && scale > 1) {
      event.preventDefault();
      translateX = startTranslateX + (event.touches[0].clientX - dragStartX);
      translateY = startTranslateY + (event.touches[0].clientY - dragStartY);
      applyLightboxTransform();
    }
  }, { passive:false });

  lightboxStage.addEventListener("touchend", (event) => {
    if (event.touches.length < 2) pinchStartDistance = 0;
    if (event.touches.length === 0) dragging = false;
  });

  let lastTap = 0;
  lightboxImage.addEventListener("touchend", (event) => {
    if (event.changedTouches.length !== 1) return;
    const now = Date.now();
    if (now - lastTap < 280) {
      setScale(scale > 1 ? 1 : 2.5);
      lastTap = 0;
    } else {
      lastTap = now;
    }
  });

})();
