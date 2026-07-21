// ── TRIBE & COLOUR DATA ───────────────────────────────────────────────────

const TRIBES = {
  oromo: {
    name: 'Oromo', code: 'ORM',
    colours: {
      black:  { name: 'Guraccha',  hex: '#1A1A1A', meaning: 'Mystery, protection, ancestral presence',      origin: 'Charcoal, ash, tumtuu paste',              num: 1, originCode: 'M' },
      white:  { name: 'Adii',      hex: '#F5F0E8', meaning: 'Purity, peace, spiritual cleansing',           origin: 'Kaolin clay',                              num: 2, originCode: 'C' },
      red:    { name: 'Diimaa',    hex: '#8B1A2A', meaning: 'Bravery, sacrifice, historical resistance',    origin: 'Cochineal',                                num: 3, originCode: 'I' },
      green:  { name: 'Magariisa', hex: '#2D5C1E', meaning: 'Fertility, land, prosperity',                  origin: 'Onion skins',                              num: 4, originCode: 'V' },
      blue:   { name: 'Doqii',     hex: '#1E2D5C', meaning: 'Unity',                                        origin: 'Indigofera',                               num: 5, originCode: 'V' },
      yellow: { name: 'Kelloo',    hex: '#F0A500', meaning: 'Hope, harvest, divine light',                  origin: 'Annatto seeds, marigolds, tagetes',        num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['black','red','white'],    label: 'Ceremonial',   rule: 'Strictly used for Gadaa gatherings, worship, and Irreecha.' },
      { hues: ['white','green'],           label: 'Thanksgiving', rule: 'The Irreecha palette for ordinary celebrants — thanksgiving and peace.' },
      { hues: ['yellow','green','red'],   label: 'National',     rule: 'The modern national combination — land, hope, and sacrifice.' }
    ]
  },
  hausa: {
    name: 'Hausa', code: 'HSA',
    colours: {
      black:  { name: 'Baƙi',   hex: '#2D2D2D', meaning: 'Undesirable qualities, misfortune, social transgression', origin: 'Charcoal, soot, iron-rich muds',              num: 1, originCode: 'M' },
      white:  { name: 'Fari',   hex: '#FAFAF5', meaning: 'Purity, spirituality, trustworthiness',                   origin: 'Undyed cotton and white clay',                num: 2, originCode: 'C' },
      red:    { name: 'Ja',     hex: '#B03020', meaning: 'Spiritual agency and power',                               origin: 'Red ochre earth and camwood powder',          num: 3, originCode: 'M' },
      blue:   { name: 'Shuni',  hex: '#4A5278', meaning: 'Prestige, identity, celebration',                          origin: 'Indigofera fermented in Kano dye pits',       num: 4, originCode: 'V' },
      yellow: { name: 'Rawaya', hex: '#E8C040', meaning: 'Harvest, celebration',                                     origin: 'Dorayi shrub',                                num: 5, originCode: 'V' },
      green:  { name: 'Kore',   hex: '#1A7A50', meaning: 'Growth, paradise',                                         origin: 'Combined yellow and blue plant dyes',         num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['blue','yellow','white'], label: 'Ceremony',  rule: 'Bold occasion only — indigo, gold, and bright yellow signal prestige.' },
      { hues: ['white','black'],          label: 'Spiritual', rule: 'Neutral and restrained for religious gatherings.' }
    ]
  },
  amazigh: {
    name: 'Amazigh', code: 'AMZ',
    colours: {
      black:  { name: 'Aberkan',       hex: '#1E1E1E', meaning: 'Spiritual connection, strength, survival',       origin: 'Soot and charcoal',                        num: 1, originCode: 'M' },
      white:  { name: 'Azil / Azilal', hex: '#E8E4D8', meaning: 'Purity, peace, spiritual protection',            origin: 'Undyed wool and clay slip',                num: 2, originCode: 'C' },
      red:    { name: 'Azeggway',      hex: '#C03020', meaning: 'Resistance, danger, blood',                      origin: 'Red ochre, henna, madder root',            num: 3, originCode: 'M' },
      blue:   { name: 'Azerwal',       hex: '#3A7A8C', meaning: 'Peace, spirituality, the Mediterranean Sea',     origin: 'Indigo leaves',                            num: 4, originCode: 'V' },
      green:  { name: 'Azegzaw',       hex: '#2A6B45', meaning: 'Nature and mountains',                           origin: 'Fig leaves, malachite',                    num: 5, originCode: 'V' },
      yellow: { name: 'Awray',         hex: '#C4861A', meaning: 'Wealth, energy and vitality',                    origin: 'Yellow ochre, amber and brass',            num: 6, originCode: 'M' }
    },
    rules: [
      { hues: ['black','red','blue'],    label: 'Protective Objects', rule: 'Used exclusively for objects that guard against spirits and the evil eye.' },
      { hues: ['green','red','white'],   label: 'Fertility',          rule: 'Strictly for family textiles — weddings, childbirth, and family rituals.' },
      { hues: ['blue','green','yellow'], label: 'Cosmological',       rule: 'Maintains cosmological balance: blue for sky, green for earth, yellow for sun.' }
    ]
  },
  ndebele: {
    name: 'Ndebele', code: 'NDB',
    colours: {
      black:  { name: 'Mnyama',                 hex: '#0D0D0D', meaning: 'Strength, protection, ancestry',   origin: 'Charcoal, soot from ash',                  num: 1, originCode: 'M' },
      white:  { name: 'Mhlophe',                hex: '#F0EDE0', meaning: 'Peace, purity, spirituality',      origin: 'Kaolin clay, chalk',                       num: 2, originCode: 'C' },
      red:    { name: 'Bomvu',                  hex: '#8B1A22', meaning: 'Life, energy, celebration',         origin: 'Red ochre, iron-rich clay',                num: 3, originCode: 'M' },
      yellow: { name: 'Lithanga',               hex: '#C8841A', meaning: 'Sunlight, abundance',               origin: 'Yellow ochre, iron oxide-rich clay',       num: 4, originCode: 'M' },
      blue:   { name: 'Luhlaza Okwesibakabaka', hex: '#1E3A6E', meaning: 'Stability, hope, harmony',          origin: 'Plant-based dyes, imported pigments',      num: 5, originCode: 'V' },
      green:  { name: 'Hlaza',                  hex: '#2D5A1B', meaning: 'Growth, fertility, nature',         origin: 'Plant extracts, mixed earth pigments',     num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['red','yellow','blue','green'],  label: 'Celebration', rule: 'Bold combinations for communal visibility and celebration.' },
      { hues: ['black','white','red','blue'],   label: 'Identity',    rule: 'Beadwork palette — communicates social status and life stage.' }
    ]
  },
  batwa: {
    name: 'Batwa', code: 'BWA',
    colours: {
      white:  { name: 'Umweru',   hex: '#F2EFE8', meaning: 'Spirit world, purity, clarity, life transitions', origin: 'Kaolin clay',             num: 1, originCode: 'C' },
      black:  { name: 'Irabura',  hex: '#1C1C1C', meaning: 'Groundedness, sanctuary, maturity',                origin: 'Charcoal',                num: 2, originCode: 'M' },
      red:    { name: 'Umutuku',  hex: '#8C2020', meaning: 'Vitality, physical blood of life, active energy',  origin: 'African Redwood',         num: 3, originCode: 'V' },
      green:  { name: 'Icyatsi',  hex: '#3A6B30', meaning: 'Fertility, abundance, healing',                    origin: 'Celadonite',               num: 4, originCode: 'M' },
      blue:   { name: 'Ubururu',  hex: '#4A7AAA', meaning: 'Sky, atmosphere, fresh water',                     origin: 'Sky/water pigments',      num: 5, originCode: 'M' },
      yellow: { name: 'Umuhondo', hex: '#D4A020', meaning: 'Solar energy, warmth, spiritual light',            origin: 'Turmeric',                num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['white','red'],    label: 'Transitions / Initiations', rule: 'Sacred transition and cosmic boundaries.' },
      { hues: ['white','black'],  label: 'Protective / Grounding',    rule: 'White provides ancestral clarity, black offers protective sanctuary.' },
      { hues: ['red','black'],    label: 'Survival / Hunting',        rule: 'Survival, hunting, and physical cycle.' },
      { hues: ['green','red'],    label: 'Healing Ceremonies',        rule: 'Medicine and healing — earth and vitality.' },
      { hues: ['green','yellow'], label: 'Seasonal Abundance',        rule: 'Food security and seasonal abundance.' },
      { hues: ['blue','white'],   label: 'Ancestral / Water Spirit',  rule: 'Signifies cleansing, refreshing, and divine peace.' }
    ]
  }
};

const HUES        = ['black', 'white', 'red', 'blue', 'green', 'yellow'];
const HUE_LABELS  = { black: 'Tiziri-Duhu', white: 'Fari-Timεt', red: 'Mogya-Ja', blue: 'Buluu-Amanzi', green: 'Kore-Uhlaza', yellow: 'Sika-Warabe' };
const TRIBE_ORDER = ['oromo', 'hausa', 'amazigh', 'ndebele', 'batwa'];

// ── STORY MEANINGS (individual) ───────────────────────────────────────────

const STORY_MEANINGS = {
  // ── Conflict [2] ──────────────────────────────────────────────────────────
  'Wrath':                { picks: [{t:'oromo',h:'red'},{t:'hausa',h:'black'}], ctx: 'Wrath is carried in deep red and black — the colours of fire and consequence.' },
  'Danger':               { picks: [{t:'amazigh',h:'red'},{t:'ndebele',h:'black'}], ctx: 'Danger is marked by Azeggway and the black of Mnyama.' },
  'Misfortune':           { picks: [{t:'hausa',h:'black'},{t:'oromo',h:'black'}], ctx: 'Misfortune sits in black — the colour of transgression across traditions.' },
  'Social Transgression': { picks: [{t:'hausa',h:'black'},{t:'amazigh',h:'black'}], ctx: 'Social transgression is signalled by deep charcoal — a colour of warning.' },

  // ── Emotion [3] ──────────────────────────────────────────────────────────
  'Hope':        { picks: [{t:'oromo',h:'yellow'},{t:'oromo',h:'green'},{t:'batwa',h:'yellow'}], ctx: 'Hope rises in yellow and green — harvest coming, the crop already growing.' },
  'Peace':       { picks: [{t:'amazigh',h:'white'},{t:'amazigh',h:'blue'},{t:'ndebele',h:'white'}], ctx: 'Peace sits in white and blue — the undyed and the sky-born.' },
  'Stability':   { picks: [{t:'ndebele',h:'blue'},{t:'amazigh',h:'blue'}], ctx: 'Stability is found in deep blue — the colour of a held horizon.' },
  'Harmony':     { picks: [{t:'amazigh',h:'blue'},{t:'oromo',h:'green'}], ctx: 'Harmony is sky meeting earth — blue and green in balance.' },
  'Prosperity':  { picks: [{t:'oromo',h:'yellow'},{t:'hausa',h:'yellow'},{t:'amazigh',h:'yellow'}], ctx: 'Prosperity is gold — the colour of abundance across every tribe.' },
  'Abundance':   { picks: [{t:'oromo',h:'green'},{t:'hausa',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Abundance is green fields and golden harvest.' },

  // ── Nature [4] ───────────────────────────────────────────────────────────
  'Land':              { picks: [{t:'oromo',h:'green'},{t:'ndebele',h:'green'}], ctx: 'Land is the green beneath every tradition — the earth that feeds.' },
  'Nature':            { picks: [{t:'amazigh',h:'green'},{t:'batwa',h:'green'}], ctx: 'Nature is Azegzaw and Icyatsi — the fig leaf and the forest floor.' },
  'Harvest':           { picks: [{t:'oromo',h:'yellow'},{t:'hausa',h:'yellow'},{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'}], ctx: 'Harvest is yellow across all four traditions.' },
  'Sunlight':          { picks: [{t:'ndebele',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Sunlight is Lithanga and Umuhondo — ochre and turmeric catching the sun.' },
  'Paradise':          { picks: [{t:'hausa',h:'green'}], ctx: 'Paradise is Kore — Hausa green, the colour of the ideal garden.' },
  'Mountains':         { picks: [{t:'amazigh',h:'green'}], ctx: 'Mountains are Azegzaw — Amazigh green, the colour of the Atlas.' },
  'Mediterranean Sea': { picks: [{t:'amazigh',h:'blue'}], ctx: 'The Mediterranean Sea is Azerwal — the blue that Amazigh weavers named for the water.' },

  // ── Life [5] ─────────────────────────────────────────────────────────────
  'Life':        { picks: [{t:'ndebele',h:'red'},{t:'batwa',h:'red'},{t:'oromo',h:'red'}], ctx: 'Life is the red of energy, blood, and celebration across traditions.' },
  'Vitality':    { picks: [{t:'batwa',h:'red'},{t:'ndebele',h:'red'}], ctx: 'Vitality is Umutuku and Bomvu — the active physical energy of being alive.' },
  'Energy':      { picks: [{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Energy is yellow — the colour of the sun\'s force.' },
  'Wealth':      { picks: [{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'}], ctx: 'Wealth is amber and ochre — yellow earned from the earth.' },
  'Growth':      { picks: [{t:'hausa',h:'green'},{t:'oromo',h:'green'},{t:'amazigh',h:'green'},{t:'batwa',h:'green'}], ctx: 'Growth is green across all five tribes — the colour of the living.' },
  'Fertility':   { picks: [{t:'oromo',h:'green'},{t:'amazigh',h:'green'},{t:'batwa',h:'green'},{t:'ndebele',h:'green'}], ctx: 'Fertility belongs to green — the land, the crop, the continuing line.' },
  'Warmth':      { picks: [{t:'batwa',h:'yellow'},{t:'oromo',h:'yellow'}], ctx: 'Warmth is Umuhondo and Kelloo — turmeric and marigold against the cold.' },
  'Celebration': { picks: [{t:'hausa',h:'blue'},{t:'hausa',h:'yellow'},{t:'ndebele',h:'red'}], ctx: 'Celebration is bold — Hausa indigo, gold, and the red of Ndebele ceremony.' },

  // ── Spiritual [7] ────────────────────────────────────────────────────────
  'Soul':                { picks: [{t:'oromo',h:'white'},{t:'hausa',h:'white'}], ctx: 'Soul is carried in white — the undyed, the unmediated.' },
  'Purity':              { picks: [{t:'oromo',h:'white'},{t:'hausa',h:'white'},{t:'amazigh',h:'white'},{t:'ndebele',h:'white'},{t:'batwa',h:'white'}], ctx: 'Purity is white across all traditions — never neutral, always intentional.' },
  'Mystery':             { picks: [{t:'oromo',h:'black'},{t:'amazigh',h:'black'},{t:'ndebele',h:'black'},{t:'batwa',h:'black'}], ctx: 'Mystery lives in black — the colour of the unseen and the ancestral.' },
  'Spirituality':        { picks: [{t:'amazigh',h:'blue'},{t:'hausa',h:'white'}], ctx: 'Spirituality is sky-blue and undyed white — the infinite and the pure.' },
  'Divine Light':        { picks: [{t:'oromo',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Divine light is Kelloo and Umuhondo — the marigold and the turmeric sun.' },
  'Spiritual Agency':    { picks: [{t:'hausa',h:'red'}], ctx: 'Spiritual agency is Ja — Hausa red, the colour of power over the unseen.' },
  'Spiritual Cleansing': { picks: [{t:'oromo',h:'white'},{t:'batwa',h:'white'}], ctx: 'Spiritual cleansing is Adii and Umweru — kaolin clay used in ritual.' },
  'Ancestral Presence':  { picks: [{t:'oromo',h:'black'},{t:'batwa',h:'black'}], ctx: 'Ancestral presence is black — the colour that holds those who have passed.' },
  'Spiritual Connection':{ picks: [{t:'batwa',h:'white'},{t:'amazigh',h:'white'}], ctx: 'Spiritual connection is the undyed — white that opens to the other world.' },

  // ── Power [8] ────────────────────────────────────────────────────────────
  'Blood':                { picks: [{t:'ndebele',h:'red'},{t:'batwa',h:'red'},{t:'amazigh',h:'red'}], ctx: 'Blood is Bomvu, Umutuku, Azeggway — red that carries the cost of living.' },
  'Power':                { picks: [{t:'hausa',h:'red'},{t:'ndebele',h:'black'}], ctx: 'Power is Ja and Mnyama — authority in red and the gravity of black.' },
  'Prestige':             { picks: [{t:'hausa',h:'blue'},{t:'hausa',h:'yellow'}], ctx: 'Prestige is Hausa indigo and gold — the Kano dye pit and the dorayi shrub.' },
  'Sacrifice':            { picks: [{t:'oromo',h:'red'},{t:'amazigh',h:'red'},{t:'ndebele',h:'red'},{t:'batwa',h:'red'}], ctx: 'Sacrifice is carried in red across all traditions — the cost of the sacred.' },
  'Historical Resistance':{ picks: [{t:'oromo',h:'red'},{t:'amazigh',h:'red'}], ctx: 'Historical resistance is Diimaa and Azeggway — the red of those who fought.' },

  // ── Virtue [9] ───────────────────────────────────────────────────────────
  'Unity':           { picks: [{t:'oromo',h:'blue'},{t:'hausa',h:'blue'},{t:'amazigh',h:'blue'},{t:'ndebele',h:'blue'}], ctx: 'Unity is the colour that names togetherness — blue across four traditions.' },
  'Identity':        { picks: [{t:'hausa',h:'blue'},{t:'ndebele',h:'white'}], ctx: 'Identity is Hausa indigo and Ndebele white — presence and clarity.' },
  'Bravery':         { picks: [{t:'oromo',h:'red'},{t:'oromo',h:'black'},{t:'oromo',h:'white'}], ctx: 'Bravery in Oromo tradition is Diimaa — worn together with black and white.' },
  'Survival':        { picks: [{t:'batwa',h:'red'},{t:'batwa',h:'black'}], ctx: 'Survival is Umutuku and Irabura — the Batwa hunting palette.' },
  'Strength':        { picks: [{t:'ndebele',h:'black'},{t:'amazigh',h:'black'},{t:'oromo',h:'black'}], ctx: 'Strength is black — the colour of ancestry, endurance, and protection.' },
  'Protection':      { picks: [{t:'oromo',h:'black'},{t:'hausa',h:'blue'},{t:'amazigh',h:'black'}], ctx: 'Protection requires black and blue — the unseen and the powerful.' },
  'Endurance':       { picks: [{t:'ndebele',h:'black'},{t:'oromo',h:'black'}], ctx: 'Endurance is black — deep charcoal that absorbs and withstands.' },
  'Trustworthiness': { picks: [{t:'hausa',h:'white'},{t:'oromo',h:'white'}], ctx: 'Trustworthiness is undyed white — the colour of the honest, the uncorrupted.' },
};

const COLOUR_HOVER = {
  // Conflict [2]
  'Wrath': '#8B1A2A', 'Danger': '#C03020', 'Misfortune': '#2D2D2D', 'Social Transgression': '#1A1A1A',
  // Emotion [3]
  'Hope': '#F0A500', 'Peace': '#E8E4D8', 'Stability': '#1E3A6E', 'Harmony': '#3A7A8C',
  'Prosperity': '#E8C040', 'Abundance': '#2D5C1E',
  // Nature [4]
  'Land': '#2D5A1B', 'Nature': '#3A6B30', 'Harvest': '#E8C040', 'Sunlight': '#D4A020',
  'Paradise': '#1A7A50', 'Mountains': '#2A6B45', 'Mediterranean Sea': '#3A7A8C',
  // Life [5]
  'Life': '#8B1A22', 'Vitality': '#8C2020', 'Energy': '#C4861A', 'Wealth': '#C8841A',
  'Growth': '#1A7A50', 'Fertility': '#2D5C1E', 'Warmth': '#D4A020', 'Celebration': '#E8C040',
  // Spiritual [7]
  'Soul': '#F5F0E8', 'Purity': '#FAFAF5', 'Mystery': '#1A1A1A', 'Spirituality': '#3A7A8C',
  'Divine Light': '#F0A500', 'Spiritual Agency': '#B03020', 'Spiritual Cleansing': '#F2EFE8',
  'Ancestral Presence': '#0D0D0D', 'Spiritual Connection': '#E8E4D8',
  // Power [8]
  'Blood': '#8B1A22', 'Power': '#B03020', 'Prestige': '#4A5278', 'Sacrifice': '#C03020',
  'Historical Resistance': '#8B1A2A',
  // Virtue [9]
  'Unity': '#1E2D5C', 'Identity': '#4A5278', 'Bravery': '#8B1A2A', 'Survival': '#8C2020',
  'Strength': '#0D0D0D', 'Protection': '#2D2D2D', 'Endurance': '#1E1E1E', 'Trustworthiness': '#FAFAF5',
};

// ── HELPERS ───────────────────────────────────────────────────────────────

function hexToRgb(h) {
  return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
}

function mixHex(h1, h2, t) {
  const [r1,g1,b1] = hexToRgb(h1), [r2,g2,b2] = hexToRgb(h2);
  return '#' + [
    Math.round(r1*(1-t)+r2*t),
    Math.round(g1*(1-t)+g2*t),
    Math.round(b1*(1-t)+b2*t)
  ].map(v => v.toString(16).padStart(2,'0')).join('');
}

function colourCode(percent, tribeCode, num, originCode) {
  return `#${String(percent).padStart(2,'0')}${tribeCode}${num}${originCode.toLowerCase()}`;
}

// ── TOOLTIP ───────────────────────────────────────────────────────────────

function openTooltip(hex, code, name, tribe, meaning, origin) {
  document.getElementById('tooltip-swatch').style.background = hex;
  document.getElementById('tooltip-tribe').textContent = tribe.toUpperCase();
  document.getElementById('tooltip-name').textContent = name;
  document.getElementById('tooltip-hex').textContent = code;
  document.getElementById('tooltip-meaning').textContent = meaning;
  document.getElementById('tooltip-origin').textContent = origin;
  document.getElementById('tooltip').classList.add('show');
}

function closeTooltip(e) {
  if (!e || e.target === document.getElementById('tooltip')) {
    document.getElementById('tooltip').classList.remove('show');
  }
}

// ── BUILD COLOUR GRID — click to expand ──────────────────────────────────

function buildGrid() {
  const grid = document.getElementById('colour-grid');

  HUES.forEach(hue => {
    const row = document.createElement('div');
    row.className = 'hue-row';

    const label = document.createElement('div');
    label.className = 'hue-label';
    label.textContent = HUE_LABELS[hue];
    row.appendChild(label);

    const swatchWrap = document.createElement('div');
    swatchWrap.className = 'hue-swatches';

    TRIBE_ORDER.forEach(tribeKey => {
      const tribe = TRIBES[tribeKey];
      const c = tribe.colours[hue];
      if (!c) return;

      const code = colourCode(0, tribe.code, c.num, c.originCode);

      const el = document.createElement('div');
      el.className = 'swatch';
      el.innerHTML = `
        <div class="swatch-colour" style="background:${c.hex}"></div>
        <div class="swatch-info">
          <div class="swatch-tribe">${tribe.name}</div>
          <div class="swatch-name">${c.name}</div>
          <div class="swatch-hex">${code}</div>
          <div class="swatch-hover">
            <div class="swatch-hover-label">Meaning</div>
            <div class="swatch-hover-text">${c.meaning}</div>
            <div class="swatch-hover-label">Material Origin</div>
            <div class="swatch-hover-text">${c.origin}</div>
          </div>
        </div>
      `;

      // click to toggle open/close (smooth via CSS max-height)
      el.addEventListener('click', () => {
        const wasOpen = el.classList.contains('open');
        // close all others in the same row
        swatchWrap.querySelectorAll('.swatch.open').forEach(s => s.classList.remove('open'));
        if (!wasOpen) el.classList.add('open');
      });

      swatchWrap.appendChild(el);
    });

    row.appendChild(swatchWrap);
    grid.appendChild(row);
  });
}

// ── BUILD PAIRINGS — label — rule on one line ─────────────────────────────

function buildPairings() {
  const cont = document.getElementById('pairings-content');

  TRIBE_ORDER.forEach(tribeKey => {
    const tribe = TRIBES[tribeKey];
    const block = document.createElement('div');
    block.className = 'tribe-block';

    // Left column — tribe name label (matches hue-label style)
    const tribeName = document.createElement('div');
    tribeName.className = 'tribe-name';
    tribeName.textContent = tribe.name;
    block.appendChild(tribeName);

    // Right column — all pairings stacked
    const pairingsCol = document.createElement('div');
    pairingsCol.className = 'tribe-pairings';

    tribe.rules.forEach(rule => {
      const p = document.createElement('div');
      p.className = 'pairing';

      const strip = rule.hues.map(h => `<div class="pairing-colour" style="background:${tribe.colours[h].hex}"></div>`).join('');
      const names = rule.hues.map(h => `<div class="pairing-colour-name">${tribe.colours[h].name}</div>`).join('');

      p.innerHTML = `
        <div class="pairing-label">
          ${rule.label} <span class="pairing-label-rule">— ${rule.rule}</span>
        </div>
        <div class="pairing-strip">${strip}</div>
        <div class="pairing-names">${names}</div>
      `;
      pairingsCol.appendChild(p);
    });

    block.appendChild(pairingsCol);
    cont.appendChild(block);
  });
}

// ── BUILD VALUES — 0% original to 100% black (11 steps: 00–10) ──────────

function buildValues() {
  const ndb = TRIBES.ndebele;

  function buildSection(containerId, mixTarget, excludeHue, pctLabel) {
    const cont = document.getElementById(containerId);
    const wrap = document.createElement('div');
    wrap.className = 'values-wrap';

    HUES.filter(h => h !== excludeHue).forEach(hue => {
      const c = ndb.colours[hue];
      const row = document.createElement('div');
      row.className = 'values-row';

      const lbl = document.createElement('div');
      lbl.className = 'values-label';
      lbl.textContent = HUE_LABELS[hue];
      row.appendChild(lbl);

      const steps = document.createElement('div');
      steps.className = 'values-steps';

      for (let i = 0; i <= 10; i++) {
        const t     = i / 10;
        const mixed = mixHex(c.hex, mixTarget, t);
        const code  = colourCode(i, 'NDB', c.num, c.originCode);
        const step  = `0${i}`.slice(-2);

        const col = document.createElement('div');
        col.className = 'value-col';
        col.innerHTML = `
          <div class="value-swatch" style="background:${mixed}" title="${c.name} — ${step}"></div>
          <div class="value-labels">
            <span class="value-label-num">${step}</span>
            <span class="value-label-code">${code}</span>
          </div>
        `;

        col.querySelector('.value-swatch').addEventListener('click', (e) => {
          e.stopPropagation();
          openTooltip(mixed, code, `${c.name} ${step}`, 'Ndebele', `${c.meaning} — value ${step} (${i*10}% ${pctLabel}).`, c.origin);
        });

        steps.appendChild(col);
      }

      row.appendChild(steps);
      wrap.appendChild(row);
    });

    cont.appendChild(wrap);
  }

  buildSection('values-content',       ndb.colours.black.hex, 'black', 'black');
  buildSection('values-content-white', ndb.colours.white.hex, 'white', 'white');
}

// ── BUILD GENERATOR ───────────────────────────────────────────────────────

function buildGenerator() {
  const meaningBtns = document.getElementById('meaning-buttons');
  const sizeBtns    = document.getElementById('size-buttons');
  const selected    = new Set();
  let size = 4;

  // All 47 individual meanings — flat list from STORY_MEANINGS
  const ALL_MEANINGS = Object.keys(STORY_MEANINGS);

  ALL_MEANINGS.forEach(meaning => {
    const btn = document.createElement('button');
    btn.className = 'meaning-btn';
    btn.textContent = meaning;
    const hexes = [...new Set(STORY_MEANINGS[meaning].picks.map(p => TRIBES[p.t].colours[p.h].hex))];
    const stops = hexes.map((h, i) => { const w = 100 / hexes.length; return `${h} ${i*w}%, ${h} ${(i+1)*w}%`; }).join(', ');
    btn.style.setProperty('--btn-gradient', hexes.length === 1 ? hexes[0] : `linear-gradient(to right, ${stops})`);
    btn.addEventListener('click', function () {
      if (this.classList.toggle('selected')) selected.add(meaning);
      else selected.delete(meaning);
    });
    meaningBtns.appendChild(btn);
  });

  // Size buttons (1–10)
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.className = 'size-btn' + (i === 4 ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      size = i;
    });
    sizeBtns.appendChild(btn);
  }

  // Clear
  document.getElementById('clear-btn').addEventListener('click', () => {
    document.querySelectorAll('.meaning-btn').forEach(b => b.classList.remove('selected'));
    selected.clear();
    document.getElementById('generated-palette').classList.remove('show');
  });

  // Generate
  document.getElementById('generate-btn').addEventListener('click', () => {
    if (!selected.size) return;
    const palette = [];
    const seen    = new Set();

    // Build per-meaning pick lists so we can round-robin
    const meaningList = Array.from(selected).filter(m => STORY_MEANINGS[m]);
    const pickLists = meaningList.map(meaning =>
      STORY_MEANINGS[meaning].picks.map(pick => ({
        colour: TRIBES[pick.t].colours[pick.h],
        tribe:  TRIBES[pick.t].name
      }))
    );

    // Round-robin: take one pick per meaning per pass so every meaning is represented
    let progressed = true;
    while (progressed && palette.length < size) {
      progressed = false;
      for (const picks of pickLists) {
        if (palette.length >= size) break;
        for (const entry of picks) {
          if (!seen.has(entry.colour.hex)) {
            seen.add(entry.colour.hex);
            palette.push(entry);
            progressed = true;
            break;
          }
        }
      }
    }

    renderPalette(palette, meaningList[0]);
  });
}

function renderPalette(pal, meaning) {
  const gen = document.getElementById('generated-palette');

  const strip = document.createElement('div');
  strip.className = 'gen-strip';
  pal.forEach(p => {
    const div = document.createElement('div');
    div.className = 'gen-colour';
    div.style.background = p.colour.hex;
    strip.appendChild(div);
  });

  const detail = document.createElement('div');
  detail.className = 'gen-detail';
  detail.style.gridTemplateColumns = `repeat(${pal.length}, 1fr)`;
  pal.forEach(p => {
    const item = document.createElement('div');
    item.className = 'gen-item';
    item.innerHTML = `
      <div class="gen-item-swatch" style="background:${p.colour.hex}"></div>
      <div class="gen-item-name">${p.colour.name}</div>
      <div class="gen-item-tribe">${p.tribe}</div>
    `;
    detail.appendChild(item);
  });

  const ctx = document.createElement('div');
  ctx.className = 'gen-context';
  ctx.innerHTML = `<p>${STORY_MEANINGS[meaning] ? STORY_MEANINGS[meaning].ctx : ''}</p>`;

  gen.innerHTML = '';
  gen.appendChild(strip);
  gen.appendChild(detail);
  gen.appendChild(ctx);
  gen.classList.add('show');
}

// ── CONTEXT TABS (Pairings / Values) ─────────────────────────────────────

document.getElementById('context-tabs').addEventListener('click', function (e) {
  const btn = e.target.closest('.context-tab');
  if (!btn) return;
  document.querySelectorAll('.context-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.context-tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.ctx).classList.add('active');
});

function switchCtxTab(tabId) {
  document.querySelectorAll('.context-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.ctx === tabId);
  });
  document.querySelectorAll('.context-tab-content').forEach(c => {
    c.classList.toggle('active', c.id === tabId);
  });
}

// ── GENERATOR TABS ────────────────────────────────────────────────────────

document.querySelectorAll('.gen-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.gen-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.gen-tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(this.dataset.tab + '-tab').classList.add('active');
  });
});

function switchGenTab(tabName) {
  document.querySelectorAll('.gen-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  document.querySelectorAll('.gen-tab-content').forEach(c => {
    c.classList.toggle('active', c.id === tabName + '-tab');
  });
}

// ── COLOUR WHEEL ──────────────────────────────────────────────────────────

// Wheel geometry — shared between draw and hover hit-test
const WHEEL_HUE_ORDER   = ['red', 'yellow', 'green', 'blue', 'white', 'black'];
const WHEEL_TRIBE_ORDER = ['oromo', 'hausa', 'amazigh', 'ndebele', 'batwa'];
const WHEEL_NUM_H = WHEEL_HUE_ORDER.length;   // 6
const WHEEL_NUM_T = WHEEL_TRIBE_ORDER.length;  // 5
const WHEEL_SEG_ANG = (Math.PI * 2) / (WHEEL_NUM_H * WHEEL_NUM_T); // full circle, no gaps
const WHEEL_S = 420;
const WHEEL_OUTER_R = WHEEL_S / 2 - 8;
const WHEEL_INNER_R = 40;
const WHEEL_RINGS   = 7;
const WHEEL_RING_W  = (WHEEL_OUTER_R - WHEEL_INNER_R) / WHEEL_RINGS;

function drawWheel() {
  const canvas = document.getElementById('wheel-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.height = WHEEL_S;
  const cx = WHEEL_S / 2, cy = WHEEL_S / 2;

  for (let h = 0; h < WHEEL_NUM_H; h++) {
    const hueKey = WHEEL_HUE_ORDER[h];

    for (let t = 0; t < WHEEL_NUM_T; t++) {
      const segIdx = h * WHEEL_NUM_T + t;
      const tribe  = TRIBES[WHEEL_TRIBE_ORDER[t]];
      const colour = tribe.colours[hueKey];
      if (!colour) continue;

      const a1 = -Math.PI / 2 + segIdx * WHEEL_SEG_ANG;
      const a2 = a1 + WHEEL_SEG_ANG;

      for (let r = 0; r < WHEEL_RINGS; r++) {
        // outermost = original colour, inner rings darken
        const mixT  = ((WHEEL_RINGS - 1 - r) / WHEEL_RINGS) * 0.75;
        const mixed = mixHex(colour.hex, '#0a0a0a', mixT);

        const r1 = WHEEL_INNER_R + r * WHEEL_RING_W;
        const r2 = r1 + WHEEL_RING_W;

        ctx.beginPath();
        ctx.arc(cx, cy, r2, a1, a2);
        ctx.arc(cx, cy, r1, a2, a1, true);
        ctx.closePath();
        ctx.fillStyle = mixed;
        ctx.fill();
      }
    }
  }

  // Centre disc
  ctx.beginPath();
  ctx.arc(cx, cy, WHEEL_INNER_R - 1, 0, Math.PI * 2);
  ctx.fillStyle = '#F9F9F9';
  ctx.fill();
}

// ── WHEEL HOVER TOOLTIP ───────────────────────────────────────────────────

function initWheelHover() {
  const canvas  = document.getElementById('wheel-canvas');
  if (!canvas) return;

  // Create tooltip element once
  let tip = document.getElementById('wheel-tooltip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'wheel-tooltip';
    tip.className = 'wheel-tooltip';
    document.body.appendChild(tip);
  }

  canvas.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const scaleX = WHEEL_S / rect.width;
    const scaleY = WHEEL_S / rect.height;
    const dx = (e.clientX - rect.left) * scaleX - WHEEL_S / 2;
    const dy = (e.clientY - rect.top)  * scaleY - WHEEL_S / 2;
    const r  = Math.sqrt(dx * dx + dy * dy);

    if (r < WHEEL_INNER_R || r > WHEEL_OUTER_R) {
      tip.classList.remove('show');
      return;
    }

    let angle = Math.atan2(dy, dx) + Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;

    const segIdx = Math.floor(angle / WHEEL_SEG_ANG);
    const hIdx   = Math.floor(segIdx / WHEEL_NUM_T);
    const tIdx   = segIdx % WHEEL_NUM_T;

    if (hIdx >= WHEEL_NUM_H) { tip.classList.remove('show'); return; }

    const hueKey = WHEEL_HUE_ORDER[hIdx];
    const tribe  = TRIBES[WHEEL_TRIBE_ORDER[tIdx]];
    const colour = tribe.colours[hueKey];
    if (!colour) { tip.classList.remove('show'); return; }

    tip.textContent = `${colour.name} — ${tribe.name} · ${colour.meaning}`;
    tip.style.left = (e.clientX + 14) + 'px';
    tip.style.top  = (e.clientY - 10) + 'px';
    tip.classList.add('show');
  });

  canvas.addEventListener('mouseleave', () => tip.classList.remove('show'));
}

// ── COLOUR PICKER ─────────────────────────────────────────────────────────

let selectedRegion   = null;
let originalImageData = null;  // stores pristine pixel data for reset

document.getElementById('image-upload').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function (evt) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.getElementById('artwork-canvas');
      const ctx    = canvas.getContext('2d');
      const maxW   = 480;
      const scale  = maxW / img.naturalWidth;
      canvas.width  = maxW;
      canvas.height = img.naturalHeight * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      // snapshot the original so reset can restore it
      originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('picker-reset-btn').addEventListener('click', function () {
  if (!originalImageData) return;
  const canvas = document.getElementById('artwork-canvas');
  canvas.getContext('2d').putImageData(originalImageData, 0, 0);
  selectedRegion = null;
});

document.getElementById('artwork-canvas').addEventListener('click', function (e) {
  const rect = this.getBoundingClientRect();
  const x    = Math.floor((e.clientX - rect.left) * (this.width  / rect.width));
  const y    = Math.floor((e.clientY - rect.top)  * (this.height / rect.height));
  const pix  = this.getContext('2d').getImageData(x, y, 1, 1).data;
  selectedRegion = { r: pix[0], g: pix[1], b: pix[2] };
});

document.getElementById('wheel-canvas').addEventListener('click', function (e) {
  if (!selectedRegion) return;
  const rect = this.getBoundingClientRect();
  const x    = Math.floor((e.clientX - rect.left) * (this.width  / rect.width));
  const y    = Math.floor((e.clientY - rect.top)  * (this.height / rect.height));
  const pix  = this.getContext('2d').getImageData(x, y, 1, 1).data;
  if (pix[3] < 10) return;
  applyColour(selectedRegion, { r: pix[0], g: pix[1], b: pix[2] });
});

function applyColour(target, newCol) {
  const canvas  = document.getElementById('artwork-canvas');
  const ctx     = canvas.getContext('2d');
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data    = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const dist = Math.abs(data[i]-target.r) + Math.abs(data[i+1]-target.g) + Math.abs(data[i+2]-target.b);
    if (dist < 60) {
      data[i]   = newCol.r;
      data[i+1] = newCol.g;
      data[i+2] = newCol.b;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

// ── INIT ──────────────────────────────────────────────────────────────────

buildGrid();
buildPairings();
buildValues();
buildGenerator();
drawWheel();
initWheelHover();
