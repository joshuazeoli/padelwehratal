/* ═══════════════════════════════════════════════════════════════
   ⚙️ THE CUBE SHOP – PRODUKTDATEN ⚙️
   Diese Datei wird von shop.html UND artikel.html verwendet.
   ─────────────────────────────────────────────────────────────
   ▶ LAGER-SYNC: Bestand & Preise werden automatisch aus der
   Google-Tabelle "The Cube – Lagerliste Shop" geladen (siehe
   SHEET_CSV_URL unten). Die Werte hier sind nur der Notfall-
   Fallback, falls die Tabelle nicht erreichbar ist.
   Zum Pflegen also einfach die Google-Tabelle bearbeiten!
   ▶ Texte (desc, longDesc, details) pflegst du hier.
   ▶ WICHTIG: Nach Änderungen die Datei auch nach github-deploy/
   kopieren und zu GitHub hochladen.
   ═══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  // ── SHIRTS (The-Cube-Edition) ──
  { id: 'shirt-cube-weiss', cat: 'shirts', brand: 'Babolat', name: 'Exercise Shirt Cube (Weiß)',
    desc: 'Das offizielle The-Cube-Shirt in Weiß – atmungsaktives Funktionsmaterial mit Cube-Branding.',
    longDesc: 'Das offizielle Vereinsshirt der Padelarena Wehratal in klassischem Weiß. Das Babolat Exercise Shirt besteht aus leichtem, atmungsaktivem Funktionsmaterial, das Schweiß schnell von der Haut wegtransportiert – perfekt für intensive Matches und Training. Mit dezentem Cube-Branding zeigst du, zu welchem Club du gehörst.',
    details: ['Offizielle The-Cube-Edition mit Club-Branding', 'Atmungsaktives, schnelltrocknendes Funktionsmaterial', 'Leichter, sportlicher Schnitt', 'Größen S – XL', 'Maschinenwaschbar bei 30 °C'],
    price: 34.90, stock: { S: 3, M: 5, L: 4, XL: 2 }, icon: 'shirt-weiss' },
  { id: 'shirt-cube-schwarz', cat: 'shirts', brand: 'Babolat', name: 'Exercise Shirt Cube (Schwarz)',
    desc: 'Das offizielle The-Cube-Shirt in Schwarz – schnelltrocknend und angenehm leicht.',
    longDesc: 'Das offizielle Vereinsshirt der Padelarena Wehratal in sportlichem Schwarz. Das Babolat Exercise Shirt kombiniert modernen Look mit Hightech-Material: leicht, schnelltrocknend und angenehm auf der Haut. Ob im Training oder beim Turnier – mit dem Cube-Branding bist du Teil des Teams.',
    details: ['Offizielle The-Cube-Edition mit Club-Branding', 'Atmungsaktives, schnelltrocknendes Funktionsmaterial', 'Leichter, sportlicher Schnitt', 'Größen S – XL', 'Maschinenwaschbar bei 30 °C'],
    price: 34.90, stock: { S: 2, M: 5, L: 4, XL: 2 }, icon: 'shirt-schwarz' },
  { id: 'shirt-cube-blau', cat: 'shirts', brand: 'Babolat', name: 'Exercise Shirt Cube (Blau)',
    desc: 'Das offizielle The-Cube-Shirt im Vereinsblau – für echte Cube-Fans.',
    longDesc: 'Das offizielle Vereinsshirt der Padelarena Wehratal im königsblauen Vereinsdesign – passend zu unserem Logo. Das Babolat Exercise Shirt bietet erstklassigen Tragekomfort dank atmungsaktivem Funktionsmaterial und sportlichem Schnitt. Die erste Wahl für alle, die die Cube-Farben auf den Court bringen wollen.',
    details: ['Offizielle The-Cube-Edition im Vereinsblau', 'Atmungsaktives, schnelltrocknendes Funktionsmaterial', 'Leichter, sportlicher Schnitt', 'Größen S – XL', 'Maschinenwaschbar bei 30 °C'],
    price: 34.90, stock: { S: 3, M: 6, L: 5, XL: 2 }, icon: 'shirt-blau' },
  // ── HOSEN (The-Cube-Edition) ──
  { id: 'short-cube-weiss', cat: 'hosen', brand: 'Babolat', name: 'Exercise Short Cube (Weiß)',
    desc: 'Leichte Padel-Shorts in Weiß mit Cube-Branding – mit Taschen und elastischem Bund.',
    longDesc: 'Die offizielle The-Cube-Short in Weiß. Die Babolat Exercise Short ist extrem leicht, bewegungsfreundlich geschnitten und mit praktischen Taschen für Padelbälle ausgestattet. Der elastische Bund mit Kordelzug sorgt für perfekten Sitz in jeder Spielsituation.',
    details: ['Offizielle The-Cube-Edition mit Club-Branding', 'Seitentaschen mit Platz für Padelbälle', 'Elastischer Bund mit Kordelzug', 'Leichtes, schnelltrocknendes Material', 'Größen S – XL'],
    price: 39.90, stock: { S: 2, M: 4, L: 3, XL: 2 }, icon: 'shorts-weiss' },
  { id: 'short-cube-schwarz', cat: 'hosen', brand: 'Babolat', name: 'Exercise Short Cube (Schwarz)',
    desc: 'Leichte Padel-Shorts in Schwarz mit Cube-Branding – bequem und strapazierfähig.',
    longDesc: 'Die offizielle The-Cube-Short in Schwarz. Robust, bequem und mit durchdachten Details: Die Babolat Exercise Short bietet Seitentaschen für Bälle, einen elastischen Bund mit Kordelzug und strapazierfähiges Funktionsmaterial, das auch intensive Einheiten problemlos mitmacht.',
    details: ['Offizielle The-Cube-Edition mit Club-Branding', 'Seitentaschen mit Platz für Padelbälle', 'Elastischer Bund mit Kordelzug', 'Strapazierfähiges, schnelltrocknendes Material', 'Größen S – XL'],
    price: 39.90, stock: { S: 2, M: 4, L: 4, XL: 1 }, icon: 'shorts-schwarz' },
  // ── SCHLÄGER ──
  { id: 'racket-viper-lebron-31', cat: 'schlaeger', brand: 'Babolat', name: 'Viper Juan Lebron 3.1',
    desc: 'Das kompromisslose Signature-Modell von Juan Lebrón – maximale Power für Angriffsspieler.',
    longDesc: 'Der Viper Juan Lebron 3.1 ist das kompromisslose Signature-Modell des spanischen Weltklassespielers Juan Lebrón. Die Diamantform mit kopflastiger Balance liefert maximale Power für Smashes und aggressives Angriffsspiel. Die strukturierte Schlagfläche gibt zusätzlichen Grip für Effet-Bälle – ein Schläger für Spieler, die das Spiel dominieren wollen.',
    details: ['Signature-Modell von Juan Lebrón', 'Form: Diamant – maximale Power', 'Kopflastige Balance für druckvolle Smashes', 'Strukturierte Schlagfläche für mehr Spin', 'Empfohlen für fortgeschrittene bis Profi-Spieler'],
    price: 389.90, stock: 2, icon: 'racket' },
  { id: 'racket-viper-soft-lebron-31', cat: 'schlaeger', brand: 'Babolat', name: 'Viper Soft Juan Lebron 3.1',
    desc: 'Lebróns Signature mit weicherem Kern – Power mit mehr Komfort und Armschonung.',
    longDesc: 'Der Viper Soft Juan Lebron 3.1 bringt die DNA des Lebrón-Signature-Modells mit einem weicheren Kern zusammen. Das Ergebnis: viel Angriffspower bei deutlich mehr Komfort und Armschonung. Ideal für offensive Spieler, die Wert auf ein angenehmeres Schlaggefühl legen oder empfindliche Arme haben.',
    details: ['Signature-Modell von Juan Lebrón – Soft-Version', 'Form: Diamant – Power mit Komfort', 'Weicherer EVA-Kern, armschonend', 'Strukturierte Schlagfläche für mehr Spin', 'Empfohlen für fortgeschrittene Spieler'],
    price: 389.90, stock: 2, icon: 'racket' },
  { id: 'racket-veron-lebron-31', cat: 'schlaeger', brand: 'Babolat', name: 'Veron Juan Lebron 3.1',
    desc: 'Die Signature-Variante für Allrounder – Kontrolle und Power perfekt ausbalanciert.',
    longDesc: 'Der Veron Juan Lebron 3.1 ist die Allround-Variante der Lebrón-Serie: Die Hybridform verbindet die Kontrolle eines runden Schlägers mit der Power der Diamantform. Wer ein ausgewogenes, vielseitiges Spiel bevorzugt und trotzdem im Angriff zulegen will, findet hier den perfekten Partner.',
    details: ['Signature-Modell von Juan Lebrón', 'Form: Hybrid – Kontrolle & Power ausbalanciert', 'Vielseitig für Angriff und Verteidigung', 'Strukturierte Schlagfläche für mehr Spin', 'Empfohlen für ambitionierte Allrounder'],
    price: 389.90, stock: 2, icon: 'racket' },
  { id: 'racket-technical-viper-31', cat: 'schlaeger', brand: 'Babolat', name: 'Technical Viper 3.1',
    desc: 'Diamantform für ambitionierte Spieler – präzise Schläge mit viel Druck.',
    longDesc: 'Der Technical Viper 3.1 bringt die aggressive Viper-Genetik in ein etwas zugänglicheres Paket. Die Diamantform sorgt für ordentlich Druck im Angriffsspiel, bleibt dabei aber kontrollierbar. Für ambitionierte Spieler, die ihr Offensivspiel auf das nächste Level bringen wollen.',
    details: ['Form: Diamant – offensiv ausgerichtet', 'Viel Power bei guter Kontrollierbarkeit', 'Carbon-Rahmen für Stabilität', 'Strukturierte Schlagfläche', 'Empfohlen für ambitionierte Spieler'],
    price: 329.90, stock: 3, icon: 'racket' },
  { id: 'racket-technical-viper-soft-31', cat: 'schlaeger', brand: 'Babolat', name: 'Technical Viper Soft 3.1',
    desc: 'Die Technical-Serie mit weichem Kern – Power, die den Arm schont.',
    longDesc: 'Der Technical Viper Soft 3.1 kombiniert die offensive Diamantform der Technical-Serie mit einem weicheren Kern. Das sorgt für ein komfortables Schlaggefühl und schont Arm und Ellbogen – ohne auf Angriffspower zu verzichten. Die richtige Wahl für Offensivspieler mit Fokus auf Komfort.',
    details: ['Form: Diamant – offensiv ausgerichtet', 'Weicherer EVA-Kern, armschonend', 'Komfortables Schlaggefühl', 'Carbon-Rahmen für Stabilität', 'Empfohlen für ambitionierte Spieler'],
    price: 329.90, stock: 2, icon: 'racket' },
  { id: 'racket-counter-viper-30', cat: 'schlaeger', brand: 'Babolat', name: 'Counter Viper 3.0',
    desc: 'Ausgewogene Rundform – Kontrolle und Stabilität für konstantes Spiel.',
    longDesc: 'Der Counter Viper 3.0 setzt auf Kontrolle: Die ausgewogene Form mit gleichmäßiger Balance verzeiht Fehler und gibt dir Sicherheit in der Defensive wie im Aufbauspiel. Wer konstant und präzise spielen will, statt nur auf Power zu setzen, liegt hier genau richtig.',
    details: ['Form: Rund – Kontrolle & Sicherheit', 'Ausgewogene Balance, fehlerverzeihend', 'Stabiler Carbon-Rahmen', 'Ideal für konstantes Aufbauspiel', 'Empfohlen für Fortgeschrittene'],
    price: 259.90, stock: 3, icon: 'racket' },
  { id: 'racket-counter-viper-soft-30', cat: 'schlaeger', brand: 'Babolat', name: 'Counter Viper Soft 3.0',
    desc: 'Die komfortable Counter-Variante – weicher Kern, viel Spielgefühl.',
    longDesc: 'Der Counter Viper Soft 3.0 ist die komfortable Variante des Kontroll-Modells: Der weichere Kern bietet maximales Ballgefühl und schont die Arme. Perfekt für Spieler, die viel Wert auf Touch, Präzision und ein sanftes Schlaggefühl legen.',
    details: ['Form: Rund – Kontrolle & Sicherheit', 'Weicherer EVA-Kern, maximales Ballgefühl', 'Armschonend und komfortabel', 'Ideal für präzises, taktisches Spiel', 'Empfohlen für Fortgeschrittene'],
    price: 259.90, stock: 2, icon: 'racket' },
  { id: 'racket-air-viper-27', cat: 'schlaeger', brand: 'Babolat', name: 'Air Viper 2.7',
    desc: 'Ultraleicht und wendig – aggressives Spiel mit schneller Schlagvorbereitung.',
    longDesc: 'Der Air Viper 2.7 ist das Leichtgewicht der Viper-Familie: Das reduzierte Gewicht macht ihn extrem wendig und ermöglicht blitzschnelle Reaktionen am Netz. Trotzdem steckt die aggressive Viper-DNA drin – für schnelles, offensives Spiel ohne schwere Arme.',
    details: ['Ultraleichte Bauweise – extrem wendig', 'Form: Diamant – offensive Ausrichtung', 'Schnelle Schlagvorbereitung am Netz', 'Auch für längere Sessions angenehm', 'Empfohlen für Fortgeschrittene'],
    price: 219.90, stock: 3, icon: 'racket' },
  { id: 'racket-air-veron-27', cat: 'schlaeger', brand: 'Babolat', name: 'Air Veron 2.7',
    desc: 'Leicht und kontrolliert – der Allrounder für schnelles, präzises Spiel.',
    longDesc: 'Der Air Veron 2.7 kombiniert geringes Gewicht mit der ausgewogenen Veron-Form. Das Ergebnis ist ein agiler Allrounder, der sich mühelos durch schnelle Ballwechsel bewegt und dabei präzise bleibt. Ideal für Spieler, die Vielseitigkeit und Leichtigkeit suchen.',
    details: ['Ultraleichte Bauweise – extrem wendig', 'Form: Hybrid – ausgewogen & präzise', 'Vielseitig in Angriff und Verteidigung', 'Auch für längere Sessions angenehm', 'Empfohlen für Allrounder'],
    price: 219.90, stock: 3, icon: 'racket' },
  // ── BÄLLE ──
  { id: 'balls-court', cat: 'baelle', brand: 'Babolat', name: 'Court Bälle – 3er Pack',
    desc: 'Der zuverlässige Trainingsball für den täglichen Einsatz – super Preis-Leistung.',
    longDesc: 'Die Babolat Court Padelbälle sind der zuverlässige Standard für Training und lockere Matches. Konstanter Druck, gleichmäßiger Absprung und gute Haltbarkeit machen sie zum idealen Begleiter für den täglichen Einsatz auf unseren Courts – zum fairen Preis.',
    details: ['3 Bälle pro Dose', 'Ideal für Training und Freizeitspiel', 'Konstanter Druck und gleichmäßiger Absprung', 'Für alle Court-Beläge geeignet'],
    price: 5.90, stock: 30, icon: 'balls' },
  { id: 'balls-ace', cat: 'baelle', brand: 'Babolat', name: 'ACE Bälle – 3er Pack',
    desc: 'Druckvoller Premium-Ball mit hoher Lebensdauer – für Training und Turnier.',
    longDesc: 'Die Babolat ACE Padelbälle sind die Premium-Wahl für ambitionierte Spieler: Sie bieten ein druckvolles, lebendiges Spielgefühl und behalten ihre Eigenschaften auch nach vielen Ballwechseln. Erste Wahl für Matches und Turniere bei The Cube.',
    details: ['3 Bälle pro Dose', 'Premium-Qualität für Match und Turnier', 'Druckvolles, lebendiges Spielgefühl', 'Hohe Lebensdauer und Formstabilität'],
    price: 7.90, stock: 24, icon: 'balls' },
];

/* Bestell-Mails gehen an diese Adresse (FormSubmit.co): */
const ORDER_EMAIL = 'joshua.zeoli@web.de';

/* ═══════════════════════════════════════════════════════════════
   📊 LAGER-SYNCHRONISATION (Google-Tabelle)
   Tabelle: "The Cube – Lagerliste Shop" in Joshuas Google Drive.
   Voraussetzung (einmalig): Tabelle teilen → "Jeder, der über den
   Link verfügt" → "Betrachter". Danach lesen Shop & Artikelseiten
   Bestand und Preise bei jedem Aufruf live aus der Tabelle.
   ═══════════════════════════════════════════════════════════════ */
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1ckD3WRgJGK7HXavmRJEVN_IOfJ77yq4M1u6Akivl75o/gviz/tq?tqx=out:csv';

function parseCSV(text) {
  const rows = []; let row = [], field = '', inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"') { if (text[i+1] === '"') { field += '"'; i++; } else inQ = false; }
      else field += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (field !== '' || row.length) { row.push(field); rows.push(row); row = []; field = ''; }
      if (ch === '\r' && text[i+1] === '\n') i++;
    } else field += ch;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/* Lädt Bestand & Preise aus der Google-Tabelle in PRODUCTS.
   Gibt true zurück, wenn Daten übernommen wurden. */
async function loadStockFromSheet() {
  if (!SHEET_CSV_URL) return false;
  try {
    const sep = SHEET_CSV_URL.includes('?') ? '&' : '?';
    const res = await fetch(SHEET_CSV_URL + sep + 'cb=' + Date.now());
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const rows = parseCSV(await res.text());
    if (rows.length < 2) return false;
    const head = rows[0].map(h => h.trim().toLowerCase());
    const col = n => head.indexOf(n);
    const num = v => { const n = parseFloat((v ?? '').toString().replace(',', '.').trim()); return isNaN(n) ? null : n; };
    let applied = 0;
    rows.slice(1).forEach(r => {
      const id = (r[col('id')] || '').trim();
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const preis = num(r[col('preis')]);
      if (preis !== null && preis > 0) p.price = preis;
      if (typeof p.stock === 'object') {
        ['s','m','l','xl'].forEach(sz => {
          const n = num(r[col(sz)]);
          if (n !== null) p.stock[sz.toUpperCase()] = Math.max(0, Math.round(n));
        });
      } else {
        const n = num(r[col('bestand')]);
        if (n !== null) p.stock = Math.max(0, Math.round(n));
      }
      applied++;
    });
    return applied > 0;
  } catch (e) { return false; /* Tabelle nicht erreichbar → Fallback-Werte bleiben */ }
}

/* ── 📷 Echte Produktfotos ──
   Bild in produktbilder/ legen, benannt nach der Artikel-id,
   z.B. produktbilder/shirt-cube-weiss.jpg (jpg, png oder webp).
   Ohne Bild wird das gezeichnete Icon angezeigt. */
function photoLoaded(img) {
  img.style.display = 'block';
  const icon = img.parentElement.querySelector('.icon-wrap');
  if (icon) icon.style.display = 'none';
}
function photoError(img, id) {
  if (img.src.endsWith('.jpg')) img.src = 'produktbilder/' + id + '.png';
  else if (img.src.endsWith('.png')) img.src = 'produktbilder/' + id + '.webp';
  else img.remove();
}

/* ── Produkt-Icons (SVG, Farbvarianten) ── */
const shirtSVG = (fill, line) => `<svg viewBox="0 0 120 120" fill="none"><path d="M40 22 L55 15 C55 20 65 20 65 15 L80 22 L98 38 L88 52 L80 46 L80 100 L40 100 L40 46 L32 52 L22 38 Z" fill="${fill}" stroke="${line}" stroke-width="2.5" stroke-linejoin="round"/><rect x="51" y="52" width="18" height="11" rx="3" fill="#e6ff53"/><circle cx="60" cy="34" r="4" fill="${line}"/></svg>`;
const shortsSVG = (fill, line) => `<svg viewBox="0 0 120 120" fill="none"><path d="M35 25 L85 25 L92 95 L68 95 L60 55 L52 95 L28 95 Z" fill="${fill}" stroke="${line}" stroke-width="2.5" stroke-linejoin="round"/><rect x="35" y="25" width="50" height="8" fill="#004aab"/><rect x="38" y="42" width="13" height="8" rx="2" fill="#e6ff53"/></svg>`;
const ICONS = {
  'shirt-weiss':    shirtSVG('#f2f6fc', '#aebfd6'),
  'shirt-schwarz':  shirtSVG('#10131c', '#55617a'),
  'shirt-blau':     shirtSVG('#004aab', '#3d7fd6'),
  'shorts-weiss':   shortsSVG('#f2f6fc', '#aebfd6'),
  'shorts-schwarz': shortsSVG('#10131c', '#55617a'),
  racket: `<img src="cube-racket.png" alt="" style="width:30%;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.35));" />`,
  balls: `<svg viewBox="0 0 120 120" fill="none"><circle cx="42" cy="45" r="24" fill="#e6ff53"/><path d="M22 35 Q42 45 22 56 M62 35 Q42 45 62 56" stroke="#004aab" stroke-width="2.5" fill="none"/><circle cx="78" cy="70" r="24" fill="#e6ff53"/><path d="M58 60 Q78 70 58 81 M98 60 Q78 70 98 81" stroke="#004aab" stroke-width="2.5" fill="none"/></svg>`,
};

/* Hilfsfunktionen (gemeinsam) */
const fmt = n => '€ ' + n.toFixed(2).replace('.', ',');
const totalStock = p => typeof p.stock === 'number' ? p.stock : Object.values(p.stock).reduce((a,b) => a+b, 0);
