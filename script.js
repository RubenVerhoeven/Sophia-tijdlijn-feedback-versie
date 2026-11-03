const MOMENTEN = [
  {
    kort: "Het idee",
    datum: "Juni 2026",
    titel: "Het begon aan de eettafel",
    tekst: "Sophia maakte aan de eettafel een handchain voor zichzelf. Haar vriendinnen zeiden: \"Oh, die is echt leuk, kun je die niet ook voor mij maken?\" Zo begon het.",
    les: "De eerste vraag kwam niet van klanten, maar van vriendinnen. Als mensen om je heen iets willen hebben, zit er misschien een merk in.",
    beelden: ["img/werkplek/eettafel.jpg"],
    seizoen: 0
  },
  {
    kort: "Eerste ringetjes",
    datum: "Juli 2026",
    titel: "De eerste ringetjes",
    tekst: "De eerste ringetjes zagen er mooi uit, maar na een paar weken verkleurden ze.",
    les: "Goedkoop materiaal verkleurt. We stapten over op stainless steel met 18k verguld en nikkelvrij.",
    beelden: [{ oud: "img/product/ring-oud.jpg", nieuw: "img/product/ring-nieuw.jpg", tekst: "Het ringetje, toen en nu" }],
    seizoen: 0.05
  },
  {
    kort: "Naam + logo",
    datum: "Juli 2026",
    titel: "Het wordt SOPHÉA",
    tekst: "Het merk krijgt een naam: SOPHÉA, naar Sophia zelf. Daarbij komt een hoofdlogo en een sublogo. Klik met de pijlen om ze allebei te zien.",
    les: "Een naam met een eigen verhaal blijft beter hangen. Door Sophia's eigen naam te gebruiken, met een sierlijk accent op de É, voelt het merk meteen persoonlijk en luxe.",
    beelden: [
      { src: "img/sophea-logo.png", tekst: "Het hoofdlogo", passend: true },
      { src: "img/sophea-sublogo.png", tekst: "Het sublogo", passend: true }
    ],
    seizoen: 0.1
  },
  {
    kort: "Tagje",
    datum: "Juli 2026",
    titel: "Het tagje aan elk sieraad",
    tekst: "Het eerste tagje was langwerpig, met SOPHÉA er gewoon in uitgetypt. Het nieuwe tagje is rond, met het sublogo erin gegraveerd. Dat ziet er veel luxer uit. Sleep over de foto om het verschil te zien.",
    les: "Aan zo'n klein detail zie je of een sieraad goedkoop of luxe is. Een mooi tagje maakt het hele sieraad meer waard.",
    beelden: [{ oud: "img/tagje/tagje-oud.jpg", nieuw: "img/tagje/tagje-nieuw.jpg", tekst: "Het tagje, toen en nu" }],
    seizoen: 0.15
  },
  {
    kort: "Website",
    datum: "20 augustus 2026",
    titel: "Ik bouw de website",
    tekst: "Ik bouw sophea.nl helemaal zelf, in een zomerse stijl die past bij de eerste collectie. Klik met de pijlen door de pagina's.",
    les: "Zelf bouwen kost meer tijd dan een standaard thema, maar je kunt alles precies zo maken als je wilt.",
    beelden: [
      { src: "img/website/website-zomer.jpg", tekst: "De eerste versie van sophea.nl", breed: true },
      { src: "img/website/website-zomer-2.jpg", tekst: "De eerste versie van sophea.nl", breed: true },
      { src: "img/website/website-zomer3.jpg", tekst: "De eerste versie van sophea.nl", breed: true },
      { src: "img/website/website-zomer-4.jpg", tekst: "De eerste versie van sophea.nl", breed: true }
    ],
    seizoen: 0.2
  },
  {
    kort: "Zomerdrop",
    datum: "1 september 2026",
    titel: "De zomercollectie",
    tekst: "Côte, Capri, Azur en Soleil: namen die klinken als een zomer aan de Middellandse Zee. Klik op een foto om hem groot te zien.",
    les: "Een collectie met een thema werkt. Door elk sieraad een naam te geven die bij de zomer past, vertel je een verhaal in plaats van alleen producten te verkopen.",
    beelden: [
      {
        collage: [
          { src: "img/zomer/cotexcapriset-gedragen.jpg", tekst: "Côte x Capri set, gedragen" },
          { src: "img/zomer/capri-gedragen.jpg", tekst: "Capri, gedragen" },
          { src: "img/zomer/cote-gedragen.jpg", tekst: "Côte, gedragen" },
          { src: "img/zomer/cote-blauw-gedragen.jpg", tekst: "Côte, blauw" },
          { src: "img/zomer/cotexcapri-donkerblauw-gedragen.jpg", tekst: "Côte x Capri, donkerblauw" },
          { src: "img/zomer/cotexcapri-helder-gedragen.jpeg", tekst: "Côte x Capri, helder", positie: "center 75%" },
          { src: "img/zomer/cotexcapri-gedragen.jpg", tekst: "Côte x Capri, gedragen" },
          { src: "img/zomer/azur-soleil-gedragen.jpg", tekst: "Azur en Soleil, gedragen" }
        ]
      }
    ],
    deco: "zomer",
    seizoen: 0.3
  },
  {
    kort: "Live!",
    datum: "1 september 2026",
    titel: "De webshop gaat live",
    tekst: "Op 1 september gaat sophea.nl live. Betalen gaat via Shopify en verzenden als brievenbuspakje met PostNL. Op de eerste dag kwamen er meteen al bestellingen binnen.",
    les: "Betalen, verzenden, retouren en voorwaarden: een webshop is veel meer dan alleen een website.",
    beelden: ["img/live.jpeg"],
    seizoen: 0.4
  },
  {
    kort: "Bestellingen maken",
    datum: "1 september 2026",
    titel: "Alles met de hand gemaakt",
    tekst: "Echte klanten! Na de eerste bestellingen zit Sophia aan tafel om alle sieraden met de hand te maken, zodat ze snel verstuurd kunnen worden.",
    les: "Handgemaakt betekent dat elke bestelling tijd kost. Bij veel bestellingen tegelijk moet je goed plannen.",
    beelden: [{ src: "video/alles-handmaken-om-op-te-sturen.mov", tekst: "Sophia maakt de sieraden voor de eerste bestellingen" }],
    seizoen: 0.45
  },
  {
    kort: "Inpakken + verzenden",
    datum: "3 september 2026",
    titel: "Inpakken en op de post",
    tekst: "Elk sieraad wordt netjes ingepakt en als brievenbuspakje met PostNL verstuurd. Daarvoor schaffen we een labelprinter aan. Klik met de pijlen door de foto's.",
    les: "Voor het eerst gewerkt met een labelprinter. Dat scheelt veel tijd: geen adressen meer met de hand schrijven, en elk pakketje ziet er netjes en hetzelfde uit.",
    beelden: [
      { src: "img/inpakken/eerste-ingepakte-bestellingen.jpeg", tekst: "De eerste ingepakte bestellingen" },
      { src: "img/inpakken/nog-meer-bestellingen.jpg", tekst: "En nog meer bestellingen" },
      { src: "img/inpakken/labelprinter.jpg", tekst: "Nieuw: onze eerste labelprinter" }
    ],
    seizoen: 0.52
  },
  {
    kort: "Monaco",
    datum: "28 september 2026",
    titel: "SOPHÉA in Monaco",
    tekst: "Een model draagt SOPHÉA in Monaco. Precies de luxe sfeer waar de namen van de collectie over gaan. Let goed op: in de video zitten al sieraden uit de herfstcollectie, die toen nog niet te koop waren. Die komen pas online bij de herfstdrop op 1 november.",
    les: "Nieuwe sieraden al laten zien voordat ze te koop zijn, maakt mensen nieuwsgierig naar de volgende drop.",
    beelden: [{ src: "video/monaco.mp4", breed: true }],
    seizoen: 0.58
  },
  {
    kort: "Advertenties",
    datum: "Oktober 2026",
    titel: "Adverteren op social media",
    tekst: "Om meer mensen te bereiken, zetten we de sieraden in advertenties op Instagram en TikTok. Klik op een advertentie om hem groot te zien.",
    les: "Advertenties met gedragen foto's werken beter dan losse productfoto's. Mensen willen zien hoe een sieraad staat als je het draagt.",
    beelden: [
      {
        collage: [
          { src: "img/advertenties/advertentie-1.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-2.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-3.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-4.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-5.jpg", tekst: "Advertentie" }
        ]
      }
    ],
    seizoen: 0.68
  },
  {
    kort: "Eigen atelier",
    datum: "10 oktober 2026",
    titel: "Van eettafel naar atelier",
    tekst: "Sophia krijgt een eigen werkplek in huis, met alles binnen handbereik.",
    les: "Een vaste plek maakt het werk sneller en rustiger.",
    beelden: [{ oud: "img/werkplek/eettafel.jpg", nieuw: "img/werkplek/atelier.jpg", tekst: "De werkplek, toen en nu" }],
    seizoen: 0.78
  },
  {
    kort: "Samenwerking",
    datum: "19 oktober 2026",
    titel: "Samen met Scentique Amsterdam",
    tekst: "SOPHÉA werkt samen met Scentique Amsterdam, een parfummerk uit Amsterdam. Samen doen ze een fotoshoot met de parfum en de sieraden in één beeld. Klik op een foto om hem groot te zien.",
    les: "Door samen te werken met een ander merk bereik je een nieuwe doelgroep: de klanten van Scentique leren SOPHÉA kennen. En je krijgt er mooie content voor terug die je zelf ook kunt gebruiken.",
    beelden: [
      {
        collage: [
          { src: "img/samenwerking/scentique-1.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-2.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-3.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-4.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-5.jpg", tekst: "SOPHÉA x Scentique Amsterdam" }
        ]
      }
    ],
    seizoen: 0.84
  },
  {
    kort: "Website-update",
    datum: "1 november 2026",
    titel: "De website krijgt een update",
    tekst: "Op 1 november, samen met de herfstdrop, krijgt sophea.nl een herfstvibe, met de nieuwe foto's van de herfstcollectie. Ook nieuw: cadeautips voor de feestdagen en echte reviews van klanten via Trustpilot. Sleep eerst van oud naar nieuw en klik daarna met de pijlen door de pagina's.",
    les: "De eerste website sloeg goed aan bij de doelgroep. We kregen veel complimenten over hoe mooi hij eruitzag. Daarom hebben we niet te veel veranderd: we bewegen mee met het seizoen en voegen toe wat miste, zoals reviews.",
    beelden: [
      { oud: "img/website/website-zomer.jpg", nieuw: "img/website/website-herfst-1.png", tekst: "De homepage: zomer en herfst", breed: true },
      { oud: "img/website/website-zomer-2.jpg", nieuw: "img/website/website-herfst-2.png", tekst: "Toen en nu", breed: true },
      { oud: "img/website/website-zomer3.jpg", nieuw: "img/website/website-herfst-3.png", tekst: "Toen en nu", breed: true },
      { src: "img/website/website-herfst-4.png", tekst: "Nieuw: cadeautips voor de feestdagen", breed: true },
      { src: "img/website/website-herfst-5.png", tekst: "Nieuw: echte reviews via Trustpilot", breed: true }
    ],
    seizoen: 0.9
  },
  {
    kort: "Herfstdrop",
    datum: "1 november 2026",
    titel: "De herfstcollectie",
    tekst: "Op 1 november gaan de nieuwe collectie en de nieuwe website in herfstkleuren tegelijk live. Een paar van deze sieraden zag je al in de video uit Monaco. Klik op een foto om hem groot te zien.",
    les: "Alles in één keer lanceren geeft meer aandacht dan steeds iets kleins.",
    beelden: [
      {
        collage: [
          { src: "img/herfst/lumi-handchain-bruin-gedragen.jpg", tekst: "Lumi handchain, bruin" },
          { src: "img/herfst/capri-aubergine-gedragen.jpg", tekst: "Capri, aubergine" },
          { src: "img/herfst/cotexcapri-bordeaux-gedragen.jpg", tekst: "Côte x Capri, bordeaux" },
          { src: "img/herfst/elara-oorbellen-gedragen.jpg", tekst: "Elara oorbellen, aubergine" },
          { src: "img/herfst/cotexcapri-olijfrgoen.jpg", tekst: "Côte x Capri, olijfgroen" },
          { src: "img/herfst/lumi-handchain-bordeaux-gerdagen.jpg", tekst: "Lumi handchain, bordeaux" },
          { src: "img/herfst/stras-armband&handchain-gedragen.jpg", tekst: "Stras armband en handchain" }
        ]
      }
    ],
    deco: "herfst",
    seizoen: 1
  }
];

const ZOMER = { bg: [251, 246, 236], kaart: [255, 253, 248], accent: [201, 169, 110], les: [243, 230, 208] };
const HERFST = { bg: [236, 224, 208], kaart: [246, 238, 228], accent: [160, 98, 56], les: [230, 210, 188] };

function meng(a, b, t) {
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(",")})`;
}

function zetSeizoen(t) {
  const root = document.documentElement.style;
  root.setProperty("--bg", meng(ZOMER.bg, HERFST.bg, t));
  root.setProperty("--kaart", meng(ZOMER.kaart, HERFST.kaart, t));
  root.setProperty("--accent", meng(ZOMER.accent, HERFST.accent, t));
  root.setProperty("--les", meng(ZOMER.les, HERFST.les, t));
}

function maakMedia(pad, alt, metKnoppen = false) {
  if (/\.(mp4|mov|webm)$/i.test(pad)) {
    const video = document.createElement("video");
    video.src = pad;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.controls = metKnoppen;
    video.setAttribute("aria-label", alt);
    video.addEventListener("error", () => video.replaceWith(leegVlak(pad)));
    return video;
  }
  const img = document.createElement("img");
  img.src = pad;
  img.alt = alt;
  img.addEventListener("error", () => img.replaceWith(leegVlak(pad)));
  return img;
}

function leegVlak(pad) {
  const div = document.createElement("div");
  div.className = "leeg";
  div.textContent = `Foto komt hier: ${pad}`;
  return div;
}

function maakVergelijker(v, titel) {
  const box = document.createElement("div");
  box.className = "vergelijk-beeld";
  box.innerHTML = `
    <div class="nieuw"></div>
    <div class="oud"></div>
    <span class="streep"></span>
    <span class="label links">Toen</span>
    <span class="label rechts">Nu</span>
    <input type="range" min="0" max="100" value="50" aria-label="${titel}: sleep om toen en nu te vergelijken">`;
  box.querySelector(".oud").appendChild(maakMedia(v.oud, `${titel}, toen`));
  box.querySelector(".nieuw").appendChild(maakMedia(v.nieuw, `${titel}, nu`));
  const range = box.querySelector("input");
  range.addEventListener("input", () => {
    const pos = Number(range.value);
    box.style.setProperty("--pos", `${pos}%`);
    box.classList.toggle("alleen-nu", pos === 0);
    box.classList.toggle("alleen-toen", pos === 100);
  });
  return box;
}

function maakBeeld(b, titel) {
  if (typeof b === "string") return maakMedia(b, titel, true);
  if (b.collage) return maakCollage(b.collage, titel);
  if (b.oud) return maakVergelijker(b, b.tekst || titel);
  const el = maakMedia(b.src, b.tekst || titel, true);
  if (b.passend) el.classList.add("passend");
  return el;
}

function maakCollage(fotos, titel) {
  const grid = document.createElement("div");
  grid.className = "collage";
  grid.dataset.aantal = Math.min(fotos.length, 9);
  fotos.slice(0, 9).forEach((f, k) => {
    const knop = document.createElement("button");
    knop.type = "button";
    knop.className = "collage-tegel";
    knop.setAttribute("aria-label", `${f.tekst || titel}, bekijk groot`);
    const beeld = maakMedia(f.src, f.tekst || titel);
    if (f.positie) beeld.style.objectPosition = f.positie;
    knop.appendChild(beeld);
    knop.addEventListener("click", () => openGroot(fotos, k, titel));
    grid.appendChild(knop);
  });
  return grid;
}

const groot = document.createElement("dialog");
groot.className = "groot";
groot.innerHTML = `
  <div class="groot-beeld"></div>
  <p class="groot-tekst"></p>
  <button type="button" class="pijl vorige" aria-label="Vorige foto">‹</button>
  <button type="button" class="pijl volgende" aria-label="Volgende foto">›</button>
  <button type="button" class="groot-sluit" aria-label="Sluiten">×</button>`;
document.body.appendChild(groot);

let grootFotos = [];
let grootIndex = 0;
let grootTitel = "";

function toonGroot(k) {
  grootIndex = (k + grootFotos.length) % grootFotos.length;
  const f = grootFotos[grootIndex];
  const plek = groot.querySelector(".groot-beeld");
  plek.innerHTML = "";
  plek.appendChild(maakMedia(f.src, f.tekst || grootTitel, true));
  groot.querySelector(".groot-tekst").textContent = `${f.tekst || ""}  ·  ${grootIndex + 1} / ${grootFotos.length}`;
}

function openGroot(fotos, k, titel) {
  grootFotos = fotos;
  grootTitel = titel;
  toonGroot(k);
  groot.showModal();
}

groot.querySelector(".vorige").addEventListener("click", () => toonGroot(grootIndex - 1));
groot.querySelector(".volgende").addEventListener("click", () => toonGroot(grootIndex + 1));
groot.querySelector(".groot-sluit").addEventListener("click", () => groot.close());
groot.addEventListener("click", (e) => { if (e.target === groot) groot.close(); });
groot.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") toonGroot(grootIndex + 1);
  if (e.key === "ArrowLeft") toonGroot(grootIndex - 1);
});

const mediaBox = document.getElementById("momentMedia");
const hint = document.getElementById("momentHint");
let huidigMoment = 0;
let huidigBeeld = 0;

function toonBeeld(j) {
  const m = MOMENTEN[huidigMoment];
  const aantal = m.beelden.length;
  huidigBeeld = (j + aantal) % aantal;
  const b = m.beelden[huidigBeeld];

  mediaBox.style.aspectRatio = typeof b === "object" && b.breed ? "16 / 9" : "";

  const plek = mediaBox.querySelector(".beeld-plek");
  plek.innerHTML = "";
  plek.appendChild(maakBeeld(b, m.titel));

  const bijschrift = mediaBox.querySelector(".bijschrift");
  const tekst = typeof b === "object" && b.tekst && !b.oud ? b.tekst : "";
  bijschrift.textContent = tekst;
  bijschrift.hidden = !tekst;

  mediaBox.querySelectorAll(".stippen button").forEach((s, k) =>
    s.setAttribute("aria-current", k === huidigBeeld ? "true" : "false")
  );
  const teller = mediaBox.querySelector(".teller");
  if (teller) teller.textContent = `${huidigBeeld + 1} / ${aantal}`;

  const isVergelijk = typeof b === "object" && b.oud;
  const isCollage = typeof b === "object" && b.collage;
  if (isCollage && aantal > 1) hint.textContent = "Klik op een foto om hem groot te zien. Met de pijlen ga je naar het volgende beeld.";
  else if (isCollage) hint.textContent = "Klik op een foto om hem groot te zien.";
  else if (isVergelijk && aantal > 1) hint.textContent = "⇆ Sleep over de foto: links toen, rechts nu. Klik met de pijlen door naar meer foto's.";
  else if (isVergelijk) hint.textContent = "⇆ Sleep over de foto: links toen, rechts nu.";
  else if (aantal > 1) hint.textContent = `Klik met de pijlen door de foto's (${aantal}).`;
  hint.hidden = !(isCollage || isVergelijk || aantal > 1);
}

function bouwMedia(m) {
  const aantal = m.beelden.length;
  mediaBox.innerHTML = `<div class="beeld-plek"></div><p class="bijschrift" hidden></p>`;

  if (aantal > 1) {
    const vorige = document.createElement("button");
    vorige.type = "button";
    vorige.className = "pijl vorige";
    vorige.setAttribute("aria-label", "Vorige foto");
    vorige.textContent = "‹";
    vorige.addEventListener("click", () => toonBeeld(huidigBeeld - 1));

    const volgende = document.createElement("button");
    volgende.type = "button";
    volgende.className = "pijl volgende";
    volgende.setAttribute("aria-label", "Volgende foto");
    volgende.textContent = "›";
    volgende.addEventListener("click", () => toonBeeld(huidigBeeld + 1));

    const teller = document.createElement("span");
    teller.className = "teller";

    const stippen = document.createElement("div");
    stippen.className = "stippen";
    m.beelden.forEach((_, k) => {
      const s = document.createElement("button");
      s.type = "button";
      s.setAttribute("aria-label", `Foto ${k + 1}`);
      s.addEventListener("click", () => toonBeeld(k));
      stippen.appendChild(s);
    });

    mediaBox.append(vorige, volgende, teller, stippen);
  }
  toonBeeld(0);
}

const ICOONTJES = {
  zomer: [
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M2 10c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1M2 16c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6.5"/><path d="M12 5.5v13M5.5 12h13M7.4 7.4l9.2 9.2M16.6 7.4l-9.2 9.2"/></svg>'
  ],
  herfst: [
    '<svg viewBox="0 0 24 24"><path d="M12 3C6 7 5 13 12 21c7-8 6-14 0-18z"/><path d="M12 21V8M12 12l-3-2.5M12 15l3-2.5M12 18l-2.5-2"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5.5 10c0-3 3-5 6.5-5s6.5 2 6.5 5z"/><path d="M7 10c0 5 2 9 5 10.5 3-1.5 5-5.5 5-10.5"/><path d="M12 5V2.5"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 20C4 11 9 5 20 4c-1 11-7 16-16 16z"/><path d="M4 20 15 9M9 15H6.5M12 12V9.5"/></svg>'
  ]
};

const deco = document.createElement("div");
deco.className = "deco";
deco.setAttribute("aria-hidden", "true");
document.querySelector(".moment").appendChild(deco);

function zetDeco(soort) {
  deco.innerHTML = soort && ICOONTJES[soort] ? ICOONTJES[soort].map((s, k) => `<span class="deco-${k + 1}">${s}</span>`).join("") : "";
}

const slider = document.getElementById("tijdSlider");
const lijst = document.getElementById("mijlpalen");

function toonMoment(i) {
  const m = MOMENTEN[i];
  huidigMoment = i;
  slider.value = i;
  slider.setAttribute("aria-valuetext", m.titel);
  document.getElementById("momentDatum").textContent = m.datum;
  document.getElementById("momentTitel").textContent = m.titel;
  document.getElementById("momentTekst").textContent = m.tekst;
  document.getElementById("momentLes").textContent = m.les;

  bouwMedia(m);

  lijst.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-current", j === i ? "true" : "false"));
  zetSeizoen(m.seizoen);
  zetDeco(m.deco);
  slider.style.setProperty("--vol", `${(i / (MOMENTEN.length - 1)) * 100}%`);
}

function maakTijdlijn() {
  slider.max = MOMENTEN.length - 1;
  slider.parentElement.style.setProperty("--n", MOMENTEN.length);
  MOMENTEN.forEach((m, i) => {
    const li = document.createElement("li");
    const knop = document.createElement("button");
    knop.type = "button";
    knop.innerHTML = `<span>${m.kort}</span>`;
    knop.setAttribute("aria-label", `${m.kort}, ${m.datum}`);
    knop.addEventListener("click", () => toonMoment(i));
    li.appendChild(knop);
    lijst.appendChild(li);
  });
  slider.addEventListener("input", () => toonMoment(Number(slider.value)));
  toonMoment(0);
}

maakTijdlijn();
