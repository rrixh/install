// script.js (website) RRixh iOS

/* =========================================================
RRIXH IOS WEBSITE SETTINGS
========================================================= */

const SITE_SETTINGS = {
  pageTitle: "RRixh iOS",
  pageDescription: "KRAXKED/MODDED/HACKED IPA & APK FILES WITH FREE VIP, PRO, PREMIUM, MOD MENU ETC.",
  lastUpdated: "LAST UPDATED: July 25, 2026 @12:32 AM (EST)",

  headerImage: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/rrixh.PNG",

  // false = icons always show | true = Social Links dropdown
  socialsDropdown: false
};

/* SOCIAL LINKS
iconType: "font" uses Font Awesome.
iconType: "image" uses your own GitHub image URL.
*/

const SOCIAL_LINKS = [
  { name:"Snapchat", iconType:"font", icon:"fa-brands fa-snapchat", 
url:"https://story.snapchat.com/s/clpped" },
  { name:"Discord", iconType:"font", icon:"fa-brands fa-discord", 
url:"https://discordapp.com/users/1284685023630458963" },
  { name:"Telegram", iconType:"font", icon:"fa-brands fa-telegram", 
url:"https://t.me/sIipped" },
  { name:"Cash App", iconType:"font", icon:"fa-solid fa-dollar-sign", 
url:"https://cash.app/$99fail" },
  { name:"TikTok", iconType:"font", icon:"fa-brands fa-tiktok", 
url:"https://www.tiktok.com/@rrixh" },
  { name:"Instagram", iconType:"font", icon:"fa-brands fa-instagram", 
url:"https://www.instagram.com/nugit" }
];

/* DNS METHOD */
const DNS_PROFILE = {
  description: "DNS method is like a VPN that blocks Apple from blacklisting you and lets you use revoked/expired certificates.",
  image: "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
  url: "https://release-assets.githubusercontent.com/github-production-release-asset/1224449257/fd3e744b-b96b-4ecf-a206-531e54013d60?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-07-20T23:34:43Z&rscd=attachment;+filename=khoindvn.mobileconfig&rsct=application/octet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-07-20T22:34:15Z&ske=2026-07-20T23:34:43Z&sks=b&skv=2018-11-09&sig=nkXrl1o76OLo00hN9pogXEw+JUDbgVIA6g7ksHWIQIU=&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NDU4NzM5NCwibmJmIjoxNzg0NTg3MDk0LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.nGuiQsIocR9Etza0Poy0vmBwCaP8QVdBwu6EVXVLaFc&response-content-disposition=attachment;%20filename=khoindvn.mobileconfig&response-content-type=application/octet-stream"
};

/* DNS INSTALLATION STEPS */
const DNS_STEPS = [
  "You must install the DNS profile or errors will occur during ESign installation.",
  "Install any ESign below until one of them works for you.",
  "How to trust the app if you get the “Untrusted Developer Enterprise” message: Open Settings → General → scroll down → VPN & Device Management → Enterprise Apps → press “Trust” twice. If prompted with “Allow & Restart”, press it and restart your phone."
];

/* ESIGN INSTALLATIONS */
const ESIGN_SHARED_IMAGE = "https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png";
const ESIGN_APPS = [
  {
    "certificate": "✅ Moving Increasingly Interconnected Technology",
    "plist": "https://rrixh.pages.dev/plists/esign-moving.plist"
  },
  {
    "certificate": "MOVING INCREASINGLY INTERCONNECTED TECHNOLOGY V1",
    "plist": "https://rrixh.pages.dev/plists/esign-02.plist"
  },
  {
    "certificate": "VIETNAM AIRLINES",
    "plist": "https://rrixh.pages.dev/plists/esign-03.plist"
  },
  {
    "certificate": "VIETNAM AIRLINES VN V1",
    "plist": "https://rrixh.pages.dev/plists/esign-04.plist"
  },
  {
    "certificate": "VIETNAM AIRLINES VN V2",
    "plist": "https://rrixh.pages.dev/plists/esign-05.plist"
  },
  {
    "certificate": "CHINA TELECOM",
    "plist": "https://rrixh.pages.dev/plists/esign-06.plist"
  },
  {
    "certificate": "CHINA TELECOM 2",
    "plist": "https://rrixh.pages.dev/plists/esign-07.plist"
  },
  {
    "certificate": "BEIJING XIBEI",
    "plist": "https://rrixh.pages.dev/plists/esign-08.plist"
  },
  {
    "certificate": "LUOYANG POSTAL",
    "plist": "https://rrixh.pages.dev/plists/esign-09.plist"
  },
  {
    "certificate": "QINGDAO RURAL",
    "plist": "https://rrixh.pages.dev/plists/esign-10.plist"
  },
  {
    "certificate": "COMISSION ELECTIONS",
    "plist": "https://rrixh.pages.dev/plists/esign-11.plist"
  },
  {
    "certificate": "NATIONAL OILWELL",
    "plist": "https://rrixh.pages.dev/plists/esign-12.plist"
  },
  {
    "certificate": "BEIJING ZHIZHANGYI",
    "plist": "https://rrixh.pages.dev/plists/esign-13.plist"
  },
  {
    "certificate": "ARAMCO",
    "plist": "https://rrixh.pages.dev/plists/esign-14.plist"
  },
  {
    "certificate": "GLOBAL TAKEOFF",
    "plist": "https://rrixh.pages.dev/plists/esign-15.plist"
  },
  {
    "certificate": "BOC",
    "plist": "https://rrixh.pages.dev/plists/esign-16.plist"
  },
  {
    "certificate": "BOC V1",
    "plist": "https://rrixh.pages.dev/plists/esign-17.plist"
  },
  {
    "certificate": "BOC V2",
    "plist": "https://rrixh.pages.dev/plists/esign-18.plist"
  },
  {
    "certificate": "BOC V3",
    "plist": "https://rrixh.pages.dev/plists/esign-19.plist"
  },
  {
    "certificate": "BOC V4",
    "plist": "https://rrixh.pages.dev/plists/esign-20.plist"
  },
  {
    "certificate": "POWERCHINA",
    "plist": "https://rrixh.pages.dev/plists/esign-21.plist"
  },
  {
    "certificate": "POWERCHINA V1",
    "plist": "https://rrixh.pages.dev/plists/esign-22.plist"
  },
  {
    "certificate": "POWERCHINA V2",
    "plist": "https://rrixh.pages.dev/plists/esign-23.plist"
  },
  {
    "certificate": "POWERCHINA V3",
    "plist": "https://rrixh.pages.dev/plists/esign-24.plist"
  },
  {
    "certificate": "POWERCHINA V4",
    "plist": "https://rrixh.pages.dev/plists/esign-25.plist"
  },
  {
    "certificate": "JIANGSU SIMCERE",
    "plist": "https://rrixh.pages.dev/plists/esign-26.plist"
  },
  {
    "certificate": "VIETNAM RUBBER",
    "plist": "https://rrixh.pages.dev/plists/esign-27.plist"
  },
  {
    "certificate": "NONE",
    "plist": "https://rrixh.pages.dev/plists/esign-28.plist"
  },
  {
    "certificate": "NONE",
    "plist": "https://rrixh.pages.dev/plists/esign-29.plist"
  },
  {
    "certificate": "NONE",
    "plist": "https://rrixh.pages.dev/plists/esign-30.plist"
  }
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
    version:"v2.677.762",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/krnl.PNG",
    status:"red",
    actionType:"download",
    url:"https://example.com/KRNL.ipa"
  },
  {
    name:"Codex iOS",
    version:"v2.676.715",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/kodex.JPG",
    status:"red",
    actionType:"download",
    url:"https://example.com/Codex.ipa"
  }
];

const ANDROID_EXECUTORS = [
  {
    name:"Delta APK",
    version:"v2.677.762",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
    status:"red",
    actionType:"download",
    url:"https://example.com/Delta.apk"
  },
  {
    name:"KRNL APK",
    version:"v2.677.762",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
    status:"red",
    actionType:"download",
    url:"https://example.com/KRNL.apk"
  },
  {
    name:"Ronix APK",
    version:"v2.676.715",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/esign.png",
    status:"red",
    actionType:"download",
    url:"https://example.com/Ronix.apk"
  }
];

/* IPA LIBRARY */
const IPA_LIBRARY = [
  {
    name:"Youtube (OLED)",
    version:"v20.50.10",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/oldyoutube.PNG",
    actionType:"download",
    url:"youtube+.OLED.v20.50.10.ipa"
  },
  {
    name:"Spotify Premium",
    version:"v9.1.50",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/spotify.JPG",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/1/Spotify.kraxked.v9.1.50.ipa"
  },
  {
    name:"Instagram (Regram kraxked)",
    version:"v376.0.0",
    image:"https://raw.githubusercontent.com/rrixh/install/refs/heads/main/imgs/instagram.PNG",
    actionType:"download",
    url:"https://github.com/rrixh/direkt-download/releases/download/1/regram.v376.0.0.-.fake.CodeX@com.burbn.instagram55.ipa"
  }
];

/* APK LIBRARY */
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

/* =========================================================
WEBSITE LOGIC
You normally do not need to edit below this line.
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
  link.href=options.esign?buildInstallUrl(item.plist):getActionUrl(item);

  if(!link.href.startsWith("itms-services://")){
    link.target="_blank";
    link.rel="noopener noreferrer";
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
  title.textContent=options.esign?item.certificate:item.name;
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
    li.textContent=step;
    $("dnsSteps").appendChild(li);
  });
}

function initWebsite(){
  initHeader();
  initSocials();
  initDns();
  renderAppList("esignList",ESIGN_APPS,{esign:true});
  renderAppList("iosExecutors",IOS_EXECUTORS);
  renderAppList("androidExecutors",ANDROID_EXECUTORS);
  renderAppList("ipaLibrary",IPA_LIBRARY);
  renderAppList("apkLibrary",APK_LIBRARY);
}

document.addEventListener("DOMContentLoaded",initWebsite);
