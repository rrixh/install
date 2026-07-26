// skript.js (website) RRixh iOS

/* =========================================================
RRIXH IOS WEBSITE SETTINGS
========================================================= */

const SITE_SETTINGS = {
  pageTitle: "RRixh iOS",
  pageDescription: "KRAXKED/MODDED/HACKED IPA & APK FILES WITH FREE VIP, PRO, PREMIUM, MOD MENU ETC.",
  lastUpdated: "LAST UPDATED: July 26, 2026 @12:59 AM (EST)",

  headerImage: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/rrixh.PNG",

  // false = icons always show | true = Social Links dropdown
  socialsDropdown: false
};

/* SOCIAL LINKS
iconType: "font" uses Font Awesome.
iconType: "image" uses your own GitHub image URL.
*/

const SOCIAL_LINKS = [
  { name:"Snapchat", iconType:"font", icon:"fa-brands fa-snapchat", url:"https://story.snapchat.com/s/clpped" },
  { name:"Discord", iconType:"font", icon:"fa-brands fa-discord", url:"https://discordapp.com/users/1284685023630458963" },
  { name:"Telegram", iconType:"font", icon:"fa-brands fa-telegram", url:"https://t.me/sIipped" },
  { name:"Cash App", iconType:"font", icon:"fa-solid fa-dollar-sign", url:"https://cash.app/$99fail" },
  { name:"TikTok", iconType:"font", icon:"fa-brands fa-tiktok", url:"https://www.tiktok.com/@rrixh" },
  { name:"Instagram", iconType:"font", icon:"fa-brands fa-instagram", url:"https://www.instagram.com/nugit" }
];

/* DNS METHOD */
const DNS_PROFILE = {
  description: "DNS method is like a VPN that blocks Apple from blacklisting you and lets you use revoked/expired certificates.",
  image: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/dns%20logo.png",
  url: "https://release-assets.githubusercontent.com/github-production-release-asset/1224449257/fd3e744b-b96b-4ecf-a206-531e54013d60?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-07-20T23:34:43Z&rscd=attachment;+filename=khoindvn.mobileconfig&rsct=application/octet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-07-20T22:34:15Z&ske=2026-07-20T23:34:43Z&sks=b&skv=2018-11-09&sig=nkXrl1o76OLo00hN9pogXEw+JUDbgVIA6g7ksHWIQIU=&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NDU4NzM5NCwibmJmIjoxNzg0NTg3MDk0LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.nGuiQsIocR9Etza0Poy0vmBwCaP8QVdBwu6EVXVLaFc&response-content-disposition=attachment;%20filename=khoindvn.mobileconfig&response-content-type=application/octet-stream"
};

const DNS_STEPS = [
  "You must install the DNS profile or errors will occur during ESign installation.",
  "Install any ESign below until one of them works for you.",
  "How to trust the app if you get the [[QL]]Untrusted Developer Enterprise[[QR]] message: Open Settings [[AR]] General [[AR]] scroll down [[AR]] VPN & Device Management [[AR]] Enterprise Apps [[AR]] press [[SL]]Trust[[SR]] twice. If prompted with [[QL]]Allow & Restart[[QR]], press it and restart your phone."
];

/* ESIGN INSTALLATIONS
verified:true adds the custom CSS checkmark. No emoji is used.
*/

const ESIGN_SHARED_IMAGE = "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png";

const ESIGN_APPS = [

  { "certificate": "MOVING INCREASINGLY INTERCONNECTED TECHNOLOGY", "plist": "https://rrixh.pages.dev/plists/esign-moving.plist", "verified": true },

  { "certificate": "MOVING INCREASINGLY INTERCONNECTED TECHNOLOGY V1", "plist": "https://rrixh.pages.dev/plists/esign moving 1.plist" },

  { "certificate": "VIETNAM AIRLINES", "plist": "https://rrixh.pages.dev/plists/%20vietnam%20airlines.plist", "verified": true },

  { "certificate": "VIETNAM AIRLINES VN V1", "plist": "https://rrixh.pages.dev/plists/vietnam airlines VN V1.plist" },

  { "certificate": "VIETNAM AIRLINES VN V2", "plist": "https://rrixh.pages.dev/plists/VIETNAM AIRLINES VN V2.plist" },

  { "certificate": "CHINA TELECOM", "plist": "https://rrixh.pages.dev/plists/esign china telecom.plist" },

  { "certificate": "CHINA TELECOM 2", "plist": "https://rrixh.pages.dev/plists/esign china telecom V1.plist" },

  { "certificate": "BEIJING XIBEI", "plist": "https://rrixh.pages.dev/plists/beijing xibei.plist" },

  { "certificate": "LUOYANG POSTAL", "plist": "https://rrixh.pages.dev/plists/luoyang postal.plist" },

  { "certificate": "QINGDAO RURAL", "plist": "https://rrixh.pages.dev/plists/qingdao rural.plist" },

  { "certificate": "COMISSION ELECTIONS", "plist": "https://rrixh.pages.dev/plists/comission elections.plist" },

  { "certificate": "NATIONAL OILWELL", 
"plist": "https://rrixh.pages.dev/plists/national oilwell.plist" },

  { "certificate": "BEIJING ZHIZHANGYI", "plist": "https://rrixh.pages.dev/plists/beijing zhizhangyi.plist" },

  { "certificate": "ARAMCO", "plist": "https://rrixh.pages.dev/plists/aramco.plist" },

  { "certificate": "GLOBAL TAKEOFF", "plist": "https://rrixh.pages.dev/plists/GLOBAL TAKEOFF V2.plist" },

  { "certificate": "BOC", "plist": "https://rrixh.pages.dev/plists/boc.plist", "verified": true},

  { "certificate": "BOC V1", "plist": "https://rrixh.pages.dev/plists/boc1.plist" },

  { "certificate": "BOC V2", "plist": "https://rrixh.pages.dev/plists/boc2.plist" },

  { "certificate": "BOC V3", "plist": "https://rrixh.pages.dev/plists/boc3.plist" },

  { "certificate": "BOC V4", "plist": "https://rrixh.pages.dev/plists/boc4.plist" },

  { "certificate": "POWERCHINA", "plist": "https://rrixh.pages.dev/plists/powerchina.plist" },

  { "certificate": "POWERCHINA V1", "plist": "https://rrixh.pages.dev/plists/powerchina1.plist" },

  { "certificate": "POWERCHINA V2", "plist": "https://rrixh.pages.dev/plists/powerchina2.plist" },

  { "certificate": "POWERCHINA V3", "plist": "https://rrixh.pages.dev/plists/powerchina3.plist" },

  { "certificate": "POWERCHINA V4", "plist": "https://rrixh.pages.dev/plists/powerchina4.plist" },

  { "certificate": "JIANGSU SIMCERE", "plist": "https://rrixh.pages.dev/plists/jiangsu simcere.plist" },

  { "certificate": "VIETNAM RUBBER", "plist": "https://rrixh.pages.dev/plists/vietnam rubber.plist" },

/*
  { "certificate": "NONE", "plist": "https://rrixh.pages.dev/plists/jiangsu simcere1.plist" },

  { "certificate": "NONE", "plist": "https://rrixh.pages.dev/plists/esign-moving.plist" },

  { "certificate": "NONE", "plist": "https://rrixh.pages.dev/plists/esign moving 1.plist" }
*/

];

/* ROBLOX EXECUTORS
status: "green", "yellow", or "red"
actionType:
"install"  = URL is a plist URL
"download" = URL is a direct IPA/APK file
"link"     = normal webpage
*/

const IOS_EXECUTORS = [
  {
    name:"Delta iOS",
    version:"v2.729.838",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/delta.JPG",
    status:"green",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/v2.729.838/DELTA.v2.729.838.undetekted.official.ipa"
  },
  {
    name:"KRNL iOS",
    version:"DISCONTINUED",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/krnl.PNG",
    status:"red",
    actionType:"download",
    url:"https://rrixh.pages.dev"
  },
  {
    name:"Codex iOS",
    version:"needs update",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/kodex.JPG",
    status:"red",
    actionType:"download",
    url:"https://rrixh.pages.dev"
  }
];

const ANDROID_EXECUTORS = [
  {
    name:"Delta APK",
    version:"v2.729.840",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/delta.JPG",
    status:"green",
    actionType:"download",
    url:"https://github.com/rrixh/install/releases/download/v2.729.840/Delta.v2.729.840.apk"
  },
  {
    name:"KRNL APK",
    version:"DISCONTINUED",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/krnl.PNG",
    status:"red",
    actionType:"download",
    url:"https://rrixh.pages.dev"
  },
  {
    name:"Ronix APK",
    version:"DISCONTINUED",
    image:"https://obj.wearedevs.net/images/software/ronin/ronin-061626.webp",
    status:"red",
    actionType:"download",
    url:"https://rrixh.pages.dev"
  }
];

/* IPA LIBRARY */
const IPA_LIBRARY = [
  {
    name:"Youtube+ (OLED)",
    version:"v20.50.10",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/oldyoutube.PNG",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/1/youtube+.OLED.v20.50.10.ipa"
  },
  {
    name:"Spotify Premium",
    version:"Eevee Spotify (v9.1.50)",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/spotify.JPG",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/1/Spotify.kraxked.v9.1.50.ipa"
  },
  {
    name:"Instagram++",
    version:"Regram cracked (v376.0.0)",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/instagram.PNG",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/1/regram.v376.0.0.-.fake.CodeX@com.burbn.instagram55.ipa"
  }
];

/* APK LIBRARY */

/*
const APK_LIBRARY = [
  {
    name:"Example Premium APK",
    version:"Latest",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
    actionType:"download",
    url:"https://example.com/example-premium.apk"
  },
  {
    name:"Example Mod APK",
    version:"Latest",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
    actionType:"download",
    url:"https://example.com/example-mod.apk"
  }
];
*/

/* =========================================================
KUSTOM CSS SYMBOL LIBRARY
========================================================= */

function injectCustomSymbolStyles(){
  const style=document.createElement("style");
  style.textContent=`
    .rr-symbol{display:inline-block;position:relative;flex:0 0 auto;vertical-align:middle;box-sizing:border-box;}

    .rr-symbol-check{
      width:19px;height:19px;margin-right:7px;border-radius:6px;
      background:linear-gradient(145deg,#45e96a,#18b93f);
      box-shadow:0 3px 9px rgba(30,210,74,.3);
    }

    .rr-symbol-check::after{
      content:"";position:absolute;left:5px;top:4px;width:8px;height:4px;
      border-left:2.5px solid #fff;border-bottom:2.5px solid #fff;
      transform:rotate(-45deg);
    }

    .rr-symbol-arrow-right,.rr-symbol-arrow-left{width:13px;height:10px;margin:0 7px;}

    .rr-symbol-arrow-right::before,.rr-symbol-arrow-left::before{
      content:"";position:absolute;left:1px;top:4px;width:10px;height:2px;
      border-radius:2px;background:currentColor;
    }

    .rr-symbol-arrow-right::after,.rr-symbol-arrow-left::after{
      content:"";position:absolute;top:1px;width:6px;height:6px;
      border-top:2px solid currentColor;border-right:2px solid currentColor;
    }

    .rr-symbol-arrow-right::after{right:0;transform:rotate(45deg);}
    .rr-symbol-arrow-left::after{left:0;transform:rotate(-135deg);}

    .rr-symbol-quote-left,.rr-symbol-quote-right{width:14px;height:14px;margin:0 3px;}
    .rr-symbol-single-left,.rr-symbol-single-right{width:7px;height:14px;margin:0 2px;}

    .rr-symbol-quote-left::before,.rr-symbol-quote-left::after,
    .rr-symbol-quote-right::before,.rr-symbol-quote-right::after,
    .rr-symbol-single-left::before,.rr-symbol-single-right::before{
      content:"";position:absolute;top:2px;width:5px;height:8px;
      border-radius:4px 4px 4px 1px;background:currentColor;
    }

    .rr-symbol-quote-left::before{left:0;transform:skewX(-10deg);}
    .rr-symbol-quote-left::after{right:1px;transform:skewX(-10deg);}
    .rr-symbol-quote-right::before{left:0;transform:rotate(180deg) skewX(-10deg);}
    .rr-symbol-quote-right::after{right:1px;transform:rotate(180deg) skewX(-10deg);}
    .rr-symbol-single-left::before{left:1px;transform:skewX(-10deg);}
    .rr-symbol-single-right::before{left:1px;transform:rotate(180deg) skewX(-10deg);}

    .app-card-title{display:flex;align-items:flex-start;}
  `;
  document.head.appendChild(style);
}

function createCustomSymbol(type){
  const symbol=document.createElement("span");
  symbol.className="rr-symbol rr-symbol-"+type;
  symbol.setAttribute("aria-hidden","true");
  return symbol;
}

function appendTextWithCustomSymbols(container,text){
  const tokenPattern=/(\[\[(?:QL|QR|SL|SR|AR|AL)\]\])/g;
  const parts=text.split(tokenPattern);

  const tokenTypes={
    "[[QL]]":"quote-left",
    "[[QR]]":"quote-right",
    "[[SL]]":"single-left",
    "[[SR]]":"single-right",
    "[[AR]]":"arrow-right",
    "[[AL]]":"arrow-left"
  };

  parts.forEach(part=>{
    if(tokenTypes[part]){
      container.appendChild(createCustomSymbol(tokenTypes[part]));
    }else if(part){
      container.appendChild(document.createTextNode(part));
    }
  });
}

/* =========================================================
CUSTOM ESIGN INSTALL POPUP
========================================================= */

let pendingESignPlist = "";

function injectInstallPopupStyles(){
  const style=document.createElement("style");
  style.textContent=`
    body.rr-popup-open{overflow:hidden;}

    .rr-install-overlay{
      position:fixed;inset:0;z-index:999999;display:flex;align-items:center;
      justify-content:center;padding:22px;background:rgba(0,0,0,.64);
      -webkit-backdrop-filter:blur(16px) saturate(135%);
      backdrop-filter:blur(16px) saturate(135%);opacity:0;visibility:hidden;
      transition:opacity .22s ease,visibility .22s ease;
    }

    .rr-install-overlay.is-open{opacity:1;visibility:visible;}

    .rr-install-modal{
      width:min(100%,390px);overflow:hidden;border:1px solid rgba(255,255,255,.16);
      border-radius:28px;background:linear-gradient(145deg,rgba(34,34,38,.96),rgba(12,12,14,.96));
      box-shadow:0 28px 80px rgba(0,0,0,.62),inset 0 1px 0 rgba(255,255,255,.08);
      color:#fff;text-align:center;transform:translateY(18px) scale(.96);
      transition:transform .26s cubic-bezier(.2,.8,.2,1);
    }

    .rr-install-overlay.is-open .rr-install-modal{transform:translateY(0) scale(1);}
    .rr-install-content{padding:28px 24px 22px;}

    .rr-install-icon{
      width:92px;height:92px;display:block;margin:0 auto 18px;border-radius:23px;
      object-fit:cover;box-shadow:0 12px 34px rgba(0,119,255,.32);
    }

    .rr-install-eyebrow{
      margin:0 0 8px;color:#9a9aa2;font:700 12px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      letter-spacing:.18em;text-transform:uppercase;
    }

    .rr-install-title{
      margin:0;color:#fff;font:800 29px/1.1 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      letter-spacing:-.025em;
    }

    .rr-install-message{
      margin:14px auto 0;max-width:310px;color:#c8c8ce;
      font:500 15px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    }

    .rr-install-certificate{
      margin:18px 0 0;padding:13px 14px;border:1px solid rgba(58,255,92,.24);
      border-radius:16px;background:rgba(46,255,83,.075);color:#4dff67;
      font:800 14px/1.35 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      overflow-wrap:anywhere;
    }

    .rr-install-actions{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(255,255,255,.12);}

    .rr-install-button{
      min-height:58px;border:0;border-radius:0;background:transparent;
      font:700 17px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      cursor:pointer;-webkit-tap-highlight-color:transparent;
    }

    .rr-install-cancel{color:#c7c7cc;border-right:1px solid rgba(255,255,255,.12);}
    .rr-install-continue{color:#0a84ff;}
    .rr-install-button:active{background:rgba(255,255,255,.08);}

    @media (max-width:420px){
      .rr-install-overlay{align-items:flex-end;padding:14px;}
      .rr-install-modal{width:100%;border-radius:26px;}
    }

    @media (prefers-reduced-motion:reduce){
      .rr-install-overlay,.rr-install-modal{transition:none;}
    }
  `;
  document.head.appendChild(style);
}

function createInstallPopup(){
  injectInstallPopupStyles();

  const overlay=document.createElement("div");
  overlay.id="rrInstallOverlay";
  overlay.className="rr-install-overlay";
  overlay.setAttribute("aria-hidden","true");

  overlay.innerHTML=`
    <div class="rr-install-modal" role="dialog" aria-modal="true" aria-labelledby="rrInstallTitle">
      <div class="rr-install-content">
        <img id="rrInstallIcon" class="rr-install-icon" src="${ESIGN_SHARED_IMAGE}" alt="ESign icon">
        <p class="rr-install-eyebrow">Direct Install</p>
        <h2 id="rrInstallTitle" class="rr-install-title">Install ESign?</h2>
        <p class="rr-install-message">This ESign is signed with the following certificate:</p>
        <p id="rrInstallCertificate" class="rr-install-certificate"></p>
      </div>

      <div class="rr-install-actions">
        <button id="rrInstallCancel" class="rr-install-button rr-install-cancel" type="button">Kancel</button>
        <button id="rrInstallContinue" class="rr-install-button rr-install-continue" type="button">Kontinue</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById("rrInstallCancel").addEventListener("click",closeInstallPopup);

  document.getElementById("rrInstallContinue").addEventListener("click",()=>{
    const plist=pendingESignPlist;
    closeInstallPopup();

    if(plist){
      window.location.href=buildInstallUrl(plist);
    }
  });

  overlay.addEventListener("click",event=>{
    if(event.target===overlay){
      closeInstallPopup();
    }
  });

  document.addEventListener("keydown",event=>{
    if(event.key==="Escape" && overlay.classList.contains("is-open")){
      closeInstallPopup();
    }
  });
}

function openInstallPopup(item){
  pendingESignPlist=item.plist;
  document.getElementById("rrInstallCertificate").textContent=item.certificate;
  document.getElementById("rrInstallOverlay").classList.add("is-open");
  document.getElementById("rrInstallOverlay").setAttribute("aria-hidden","false");
  document.body.classList.add("rr-popup-open");

  setTimeout(()=>{
    document.getElementById("rrInstallContinue").focus();
  },50);
}

function closeInstallPopup(){
  const overlay=document.getElementById("rrInstallOverlay");

  if(!overlay){
    return;
  }

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden","true");
  document.body.classList.remove("rr-popup-open");
  pendingESignPlist="";
}

/* =========================================================
WEBSITE LOGIK
========================================================= */

const $ = id => document.getElementById(id);

function buildInstallUrl(plistUrl){
  return "itms-services://?action=download-manifest&url=" + encodeURIComponent(plistUrl);
}

function getActionUrl(item){
  return item.actionType === "install" ? buildInstallUrl(item.url) : item.url;
}

function createSocialLink(item){
  const link=document.createElement("a");
  link.className="social-link";
  link.href=item.url;
  link.target="_blank";
  link.rel="noopener noreferrer";
  link.setAttribute("aria-label",item.name);
  link.title=item.name;

  if(item.iconType==="image"){
    const img=document.createElement("img");
    img.src=item.icon;
    img.alt="";
    link.appendChild(img);
  }else{
    const icon=document.createElement("i");
    icon.className=item.icon;
    link.appendChild(icon);
  }
  return link;
}

function createAppCard(item,options={}){
  const link=document.createElement("a");
  link.className="app-card"+(options.esign?" esign-card":"");

  if(options.esign){
    link.href="#";
    link.addEventListener("click",event=>{
      event.preventDefault();
      openInstallPopup(item);
    });
  }else{
    link.href=getActionUrl(item);

    if(!link.href.startsWith("itms-services://")){
      link.target="_blank";
      link.rel="noopener noreferrer";
    }
  }

  const wrap=document.createElement("div");
  wrap.className="app-card-image-wrap";

  const img=document.createElement("img");
  img.className="app-card-image";
  img.src=options.esign?ESIGN_SHARED_IMAGE:item.image;
  img.alt=options.esign?"ESign app icon":item.name+" icon";
  wrap.appendChild(img);

  const body=document.createElement("div");
  body.className="app-card-body";

  const titleRow=document.createElement("div");
  titleRow.className="app-card-title-row";

  if(!options.esign && item.status){
    const dot=document.createElement("span");
    dot.className="status-dot status-"+item.status;
    titleRow.appendChild(dot);
  }

  const title=document.createElement("h4");
  title.className="app-card-title";

  if(options.esign && item.verified){
    title.appendChild(createCustomSymbol("check"));
  }

  title.appendChild(document.createTextNode(options.esign?item.certificate:item.name));
  titleRow.appendChild(title);
  body.appendChild(titleRow);

  if(!options.esign && item.version){
    const sub=document.createElement("p");
    sub.className="app-card-subtitle";
    sub.textContent=item.version;
    body.appendChild(sub);
  }

  link.appendChild(wrap);
  link.appendChild(body);
  return link;
}

function renderAppList(id,items,options={}){
  const container=$(id);
  container.innerHTML="";
  items.forEach(item=>container.appendChild(createAppCard(item,options)));
}

function initHeader(){
  $("pageTitle").textContent=SITE_SETTINGS.pageTitle;
  $("pageDescription").textContent=SITE_SETTINGS.pageDescription;
  $("lastUpdated").textContent=SITE_SETTINGS.lastUpdated;
  $("headerImage").src=SITE_SETTINGS.headerImage;
}

function initSocials(){
  const links=$("socialLinks");
  SOCIAL_LINKS.forEach(item=>links.appendChild(createSocialLink(item)));

  if(SITE_SETTINGS.socialsDropdown){
    document.body.classList.add("social-dropdown-enabled");
    $("socialToggle").addEventListener("click",()=>{
      const open=links.classList.toggle("is-open");
      $("socialToggle").setAttribute("aria-expanded",String(open));
    });
  }
}

function initDns(){
  $("dnsDescription").textContent=DNS_PROFILE.description;
  $("dnsProfileImage").src=DNS_PROFILE.image;
  $("dnsProfileButton").href=DNS_PROFILE.url;

  DNS_STEPS.forEach(step=>{
    const li=document.createElement("li");
    appendTextWithCustomSymbols(li,step);
    $("dnsSteps").appendChild(li);
  });
}

function initWebsite(){
  injectCustomSymbolStyles();
  initHeader();
  initSocials();
  initDns();
  createInstallPopup();
  renderAppList("esignList",ESIGN_APPS,{esign:true});
  renderAppList("iosExecutors",IOS_EXECUTORS);
  renderAppList("androidExecutors",ANDROID_EXECUTORS);
  renderAppList("ipaLibrary",IPA_LIBRARY);
  renderAppList("apkLibrary",APK_LIBRARY);
}

document.addEventListener("DOMContentLoaded",initWebsite);
