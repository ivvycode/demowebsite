/* ───────── Edit your links here ─────────
   Replace "#" with each hotel's booking engine and meeting booker URLs. */
const LINKS = {
  "asia-pacific":  { bookingEngine: "#", meetingBooker: "#" },
  "europe":        { bookingEngine: "#", meetingBooker: "#" },
  "north-america": { bookingEngine: "#", meetingBooker: "#" }
};

/* ───────── Photos ─────────
   Photos are embedded once in IMG and assigned to spaces by exact name below.
   Spaces without a photo show a placeholder. HOME_PHOTOS sets the homepage region cards. */
const IMG = {"0": "assets/img/photo-0.jpg", "1": "assets/img/photo-1.jpg", "2": "assets/img/photo-2.jpg", "3": "assets/img/photo-3.jpg", "4": "assets/img/photo-4.jpg", "5": "assets/img/photo-5.jpg", "6": "assets/img/photo-6.jpg", "7": "assets/img/photo-7.jpg", "8": "assets/img/photo-8.jpg", "9": "assets/img/photo-9.jpg", "10": "assets/img/photo-10.jpg", "11": "assets/img/photo-11.jpg", "12": "assets/img/photo-12.jpg", "13": "assets/img/photo-13.jpg", "14": "assets/img/photo-14.jpg", "15": "assets/img/photo-15.jpg", "16": "assets/img/photo-16.jpg", "17": "assets/img/photo-17.jpg", "18": "assets/img/photo-18.jpg", "19": "assets/img/photo-19.jpg", "20": "assets/img/photo-20.jpg", "21": "assets/img/photo-21.jpg", "22": "assets/img/photo-22.jpg", "23": "assets/img/photo-23.jpg"};
IMG["home-hero"] = "assets/img/photo-home-hero.jpg";
IMG["conference"] = "assets/img/photo-conference.jpg";
IMG["tent"] = "assets/img/photo-tent.jpg";
const PHOTOS = {
  "asia-pacific": {"Grand Ballroom": IMG[20], "Ballroom 1": IMG[19], "Ballroom 2": IMG[16], "Ballroom 3": IMG[5], "The Dome": IMG["conference"], "Raffles Room": IMG[13], "Boardroom": IMG[2], "Outdoor Area A": IMG[23], "Outdoor Area B": IMG[22]},
  "europe": {"The Ballroom": IMG[20], "Ballroom A": IMG[16], "Ballroom B": IMG[5], "Ballroom C": IMG[19], "Ballroom Foyer": IMG[15], "The West Wing": IMG["conference"], "The East Wing": IMG[9], "Boardroom 1": IMG[11], "Boardroom 2": IMG[2], "Boardroom 3": IMG[13], "iVvy Restaurant Area": IMG[4], "iVvy Bar and Restaurant": IMG[12], "Private Dining Room": IMG[10], "Bar Area": IMG[7]},
  "north-america": {"Grand Ballroom": IMG[20], "Ballroom 1": IMG[5], "Ballroom 2": IMG[19], "Ballroom 3": IMG[16], "Ballroom Foyer": IMG[21], "Burleigh Room": IMG[13], "Helensvale Room": IMG[15], "Boardroom": IMG[2], "Meeting Room 1": IMG[11], "Meeting Room 2": IMG[9], "StripSteak Restaurant": IMG[0], "StripSteak Downstairs Dining Room": IMG[12], "StripSteak Private Dining Room": IMG[10], "StripSteak Outside Terrace": IMG[6], "Rooftop Bar": IMG[14], "Pool Area": IMG[3], "Cabana 1": IMG[1], "Cabana 2": IMG[22]}
};
const HOME_PHOTOS = {"asia-pacific": IMG[8], "europe": IMG["tent"], "north-america": IMG[6]};
const HERO_PHOTOS = {"home": IMG["home-hero"], "asia-pacific": IMG[18], "europe": IMG[17], "north-america": IMG[14]};

const KINDS = {
  ballroom:{label:"Ballrooms & event spaces", single:"Ballroom & event space"},
  meeting: {label:"Meeting rooms", single:"Meeting room"},
  dining:  {label:"Dining & bars", single:"Dining & bar"},
  outdoor: {label:"Outdoor", single:"Outdoor space"}
};

const REGIONS = {
  "asia-pacific": {
    name:"Asia Pacific", hotelCount:7, hotel:"iVvy Hotel & Conference Centre",
    intro:"Ballrooms, meeting rooms and outdoor event spaces for conferences, gala dinners and board meetings, all under one roof.",
    phone:"+61 7 3000 0000", hours:"Mon–Fri, 8am–6pm AEST",
    spaces:[
      ["Grand Ballroom","ballroom"],["Ballroom 1","ballroom"],["Ballroom 2","ballroom"],["Ballroom 3","ballroom"],
      ["The Dome","ballroom"],["Raffles Room","meeting"],["Boardroom","meeting"],
      ["Outdoor Area A","outdoor"],["Outdoor Area B","outdoor"]
    ]
  },
  "europe": {
    name:"Europe", hotelCount:5, hotel:"iVvy Royal Hotel & Conferencing",
    intro:"A ballroom with its own foyer, two conference wings, three boardrooms and a choice of restaurant and bar spaces for every kind of event.",
    phone:"+44 20 0000 0000", hours:"Mon–Fri, 9am–5:30pm GMT",
    spaces:[
      ["The Ballroom","ballroom"],["Ballroom A","ballroom"],["Ballroom B","ballroom"],["Ballroom C","ballroom"],
      ["Ballroom Foyer","ballroom"],["The West Wing","ballroom"],["The East Wing","ballroom"],
      ["Boardroom 1","meeting"],["Boardroom 2","meeting"],["Boardroom 3","meeting"],
      ["iVvy Restaurant Area","dining"],["iVvy Bar and Restaurant","dining"],["Private Dining Room","dining"],["Bar Area","dining"]
    ]
  },
  "north-america": {
    name:"North America", hotelCount:4, hotel:"iVvy Hotel and Conference Center",
    intro:"From the Grand Ballroom to StripSteak and the rooftop bar, with poolside cabanas for something more relaxed.",
    phone:"+1 212 000 0000", hours:"Mon–Fri, 8am–6pm ET",
    spaces:[
      ["Grand Ballroom","ballroom"],["Ballroom 1","ballroom"],["Ballroom 2","ballroom"],["Ballroom 3","ballroom"],["Ballroom Foyer","ballroom"],
      ["Burleigh Room","meeting"],["Helensvale Room","meeting"],["Boardroom","meeting"],["Meeting Room 1","meeting"],["Meeting Room 2","meeting"],
      ["StripSteak Restaurant","dining"],["StripSteak Downstairs Dining Room","dining"],["StripSteak Private Dining Room","dining"],
      ["StripSteak Outside Terrace","outdoor"],["Rooftop Bar","dining"],["Pool Area","outdoor"],["Cabana 1","outdoor"],["Cabana 2","outdoor"]
    ]
  }
};
/* ───────── Enquiry widgets ─────────
   One iVvy enquiry widget per region; mounted into the contact section by mountWidget(). */
const WIDGETS = {
  "asia-pacific":  {src:"https://www.ivvy.com.au/scripts/enquiry-widget/wdg.js", region:"ap-southeast-2", id:"E025E7F9D0848F5"},
  "europe":        {src:"https://www.ivvy.co.uk/scripts/enquiry-widget/wdg.js", region:"eu-west-2",      id:"114ED6A44E387A6"},
  "north-america": {src:"https://www.ivvy.com/scripts/enquiry-widget/wdg.js",    region:"us-west-2",      id:"3D0C8252F1794E4"}
};

const ORDER = ["asia-pacific","europe","north-america"];

/* ───────── Icons ───────── */
const sv = (p,w=24,sw=2) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I = {
  ballroom: sv('<path d="M12 2v3"/><path d="M5 9c0-2 3-4 7-4s7 2 7 4"/><path d="M5 9h14"/><path d="M6 9v2M10 9v3M14 9v3M18 9v2"/><circle cx="6" cy="12.5" r="1"/><circle cx="10" cy="13.5" r="1"/><circle cx="14" cy="13.5" r="1"/><circle cx="18" cy="12.5" r="1"/><path d="M3 21h18"/>',24,1.3),
  meeting:  sv('<rect x="5" y="9" width="14" height="6" rx="3"/><circle cx="8" cy="6" r="1.2"/><circle cx="12" cy="6" r="1.2"/><circle cx="16" cy="6" r="1.2"/><circle cx="8" cy="18" r="1.2"/><circle cx="12" cy="18" r="1.2"/><circle cx="16" cy="18" r="1.2"/>',24,1.3),
  dining:   sv('<path d="M8 2h8l-1 7a3 3 0 0 1-6 0z"/><path d="M12 12v8"/><path d="M8 21h8"/>',24,1.3),
  outdoor:  sv('<path d="M12 3a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9z"/><path d="M12 12v9"/><path d="M8 21h8"/>',24,1.3),
  bolt:     sv('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',26),
  star:     sv('<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',26),
  check:    sv('<path d="M20 6 9 17l-5-5"/>',18,2.5),
  phone:    sv('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',18),
  left:     sv('<path d="m15 18-6-6 6-6"/>',20),
  right:    sv('<path d="m9 18 6-6-6-6"/>',20),
  clock:    sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',18)
};

const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function photo(key, name, kind){
  const src = PHOTOS[key] && PHOTOS[key][name];
  return `<figure class="photo">${src ? `<img src="${esc(src)}" alt="${esc(name)}" loading="lazy">` : I[kind]}</figure>`;
}

/* ───────── Pages ───────── */
function homePage(){
  const cards = ORDER.map(k=>{const R=REGIONS[k];return `
    <a class="region-card" href="#/${k}">
      <figure class="photo"><img src="${HOME_PHOTOS[k]}" alt="${esc(R.hotel)}" loading="lazy"></figure>
      <div class="body">
        <h3>${esc(R.name)}</h3>
        <p class="hotel">${R.hotelCount} venues</p>
        <p class="meta">Including ${esc(R.hotel)}</p>
        <span class="go">View ${esc(R.name)} venues</span>
      </div>
    </a>`;}).join("");
  return `
  <section class="hero">
    <div class="container">
      <h1 tabindex="-1">Your next event at <em>iVvy Venues</em></h1>
      <p class="lede">Explore our venues across Asia Pacific, Europe and North America, find the right function space for your event, and book your stay or meeting online.</p>
      <div class="actions"><a class="btn btn-primary" href="#regions">Choose a region</a><a class="btn btn-outline" href="#about">About us</a></div>
    </div>
  </section>
  <section class="section" id="regions">
    <div class="container">
      <div class="section-head"><div><h2>Our regions</h2><p>Choose a region to see its spaces, send an enquiry, and book rooms and meetings.</p></div></div>
      <div class="regions">${cards}</div>
    </div>
  </section>
  <section class="section section--alt" id="about">
    <div class="container about">
      <div>
        <h2>About us</h2>
        <div class="stats">
          <div class="stat"><b>${ORDER.reduce((n,k)=>n+REGIONS[k].hotelCount,0)}</b><span>venues</span></div>
          <div class="stat"><b>${ORDER.length}</b><span>regions</span></div>
        </div>
      </div>
      <div class="copy">
        <p>Our venues across Asia Pacific, Europe and North America each have dedicated meeting and event spaces and an in-house events team who handle planning from first enquiry to the last coffee break.</p>
        <p>Rooms and meeting spaces are bookable online through iVvy, so you can see live availability and confirm without waiting on email.</p>
        <ul class="about-list">
          <li>${I.check}<span><strong>A local events team at every venue</strong> for enquiries, site visits and group rates.</span></li>
          <li>${I.check}<span><strong>Instant room booking</strong> with live availability and rates.</span></li>
          <li>${I.check}<span><strong>Online meeting booking</strong> for our VIP clients.</span></li>
        </ul>
      </div>
    </div>
  </section>`;
}

function regionPage(key){
  const R=REGIONS[key], L=LINKS[key];
  return `
  <section class="hero">
    <div class="container">
      <span class="country"><i></i>${esc(R.name)}</span>
      <h1 tabindex="-1">${esc(R.hotel)}</h1>
      <p class="lede">${esc(R.intro)}</p>
      <div class="actions"><a class="btn btn-primary" href="#spaces">View spaces</a><a class="btn btn-outline" href="#contact">Send an enquiry</a></div>
    </div>
  </section>

  <section class="section" id="spaces">
    <div class="container">
      <div class="section-head">
        <div><h2>Spaces</h2><p>${R.spaces.length} spaces for meetings, conferences, dinners and celebrations. Scroll to see them all.</p></div>
        <div class="scroller-nav"><button class="arrow" type="button" data-dir="-1" aria-label="Previous spaces" disabled>${I.left}</button><button class="arrow" type="button" data-dir="1" aria-label="Next spaces">${I.right}</button></div>
      </div>
      <div class="spaces" id="spaceGrid" tabindex="0" aria-label="Spaces at ${esc(R.hotel)}"></div>
    </div>
  </section>

  <section class="section section--alt" id="contact">
    <div class="container contact">
      <div class="copy">
        <h2>Contact our events team</h2>
        <p>Tell us about your event and we'll reply with availability and a quote.</p>
        <div class="contact-detail">
          <div>${I.phone}<span>${esc(R.phone)}</span></div>
          <div>${I.clock}<span>${esc(R.hours)}</span></div>
        </div>
      </div>
      <div class="form-card widget-card" id="formCard"></div>
    </div>
  </section>

  <section class="section">
    <div class="container book">
      <div class="book-block">
        <div class="icon">${I.bolt}</div>
        <h2>Book instantly</h2>
        <p>See live room availability and rates at ${esc(R.hotel)}, choose your dates and confirm your stay in a few clicks.</p>
        <a class="btn btn-primary" href="${esc(L.bookingEngine)}" data-cta="booking engine" target="_blank" rel="noopener">Visit our booking engine</a>
      </div>
      <div class="book-block book-block--vip">
        <div class="icon">${I.star}</div>
        <h2>VIP exclusive</h2>
        <p>As a VIP client, you can use our meeting booker to check availability, choose your space and confirm meetings online, any time, with no back-and-forth.</p>
        <a class="btn btn-outline" href="${esc(L.meetingBooker)}" data-cta="meeting booker" target="_blank" rel="noopener">Open meeting booker</a>
      </div>
    </div>
  </section>`;
}

function renderSpaces(key, kind){
  const R=REGIONS[key];
  document.getElementById("spaceGrid").innerHTML = R.spaces.filter(s=>!kind||s[1]===kind).map(([name,k])=>`
    <article class="space">${photo(key,name,k)}<div class="body"><h3>${esc(name)}</h3><p class="kind">${KINDS[k].single}</p></div></article>`).join("");
}

/* ───────── Router & behaviour ───────── */
const main=document.getElementById("main");
function route(){
  const raw=location.hash.replace(/^#\/?/,"");
  let key = raw==="" ? "home" : (REGIONS[raw] ? raw : null);
  if(key===null){const el=document.getElementById(raw); if(el){el.scrollIntoView();return;} key="home";}
  main.innerHTML = key==="home" ? homePage() : regionPage(key);
  document.querySelectorAll(".nav a").forEach(a=>{ if(a.dataset.route===key) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  document.title = key==="home" ? "iVvy Venues — Meeting and event spaces" : `${REGIONS[key].hotel} — iVvy Venues`;
  const hero=main.querySelector('.hero'); if(hero && HERO_PHOTOS[key]) hero.style.backgroundImage=`url("${HERO_PHOTOS[key]}")`;
  window.scrollTo(0,0);
  if(route.ran) main.querySelector("h1")?.focus({preventScroll:true});
  route.ran=true;
  if(key!=="home"){ renderSpaces(key,""); bindRegion(key); }
}
function mountWidget(key){
  const W=WIDGETS[key], card=document.getElementById("formCard");
  if(!W||!card) return;
  const box="widget-container-"+W.id;
  card.innerHTML=`<div id="${box}"></div>`;
  const sc=document.createElement("script");
  sc.src=W.src; sc.async=true;
  sc.dataset.region=W.region; sc.dataset.widgetId=W.id; sc.dataset.container=box;
  sc.onerror=()=>{card.innerHTML='<p class="widget-fallback">The enquiry form could not be loaded. Please check your internet connection and try again.</p>';};
  card.appendChild(sc);
}
function bindRegion(key){
  const grid=document.getElementById("spaceGrid"), arrows=main.querySelectorAll(".arrow");
  const upd=()=>{arrows[0].disabled=grid.scrollLeft<4; arrows[1].disabled=grid.scrollLeft+grid.clientWidth>=grid.scrollWidth-4;};
  arrows.forEach(b=>b.addEventListener("click",()=>{const card=grid.querySelector(".space"); const step=(card?card.offsetWidth+20:300)*2; grid.scrollBy({left:step*+b.dataset.dir,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}));
  grid.addEventListener("scroll",upd,{passive:true}); window.addEventListener("resize",upd); upd();
  mountWidget(key);
}
main.addEventListener("click",e=>{
  const cta=e.target.closest("[data-cta]");
  if(cta && cta.getAttribute("href")==="#"){e.preventDefault();toast(`Add the ${cta.dataset.cta} link in LINKS to enable this button.`);return;}
  const a=e.target.closest('a[href^="#"]:not([href^="#/"])');
  if(a && a.getAttribute("href").length>1){e.preventDefault();document.getElementById(a.getAttribute("href").slice(1))?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}
});
let tt; function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),3200);}
window.addEventListener("hashchange",route);
route();
