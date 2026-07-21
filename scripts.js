// ── TRIBE & COLOUR DATA ───────────────────────────────────────────────────

const TRIBES = {
  oromo: {
    name: 'Oromo', code: 'ORM',
    colours: {
      black:  { name: 'Guraccha',  hex: '#1A1A1A', meaning: 'Imfihlakalo, ukuvikelwa, ukuba khona kokhokho',          origin: 'Amalahle, umlotha, iphepha le-tumtuu',             num: 1, originCode: 'M' },
      white:  { name: 'Adii',      hex: '#F5F0E8', meaning: 'Ubuhlanzekile, ukuthula, ukuhlanza ngokomoya',           origin: 'Udaka lwe-kaolin',                                  num: 2, originCode: 'C' },
      red:    { name: 'Diimaa',    hex: '#8B1A2A', meaning: 'Isibindi, umnikelo, ukumelana ngomlando',                origin: 'I-cochineal',                                       num: 3, originCode: 'I' },
      green:  { name: 'Magariisa', hex: '#2D5C1E', meaning: 'Ukuzala, umhlaba, inhlalakahle',                         origin: 'Izikhumba ze-eniyana',                              num: 4, originCode: 'V' },
      blue:   { name: 'Doqii',     hex: '#1E2D5C', meaning: 'Ubunye',                                                 origin: 'I-indigofera',                                      num: 5, originCode: 'V' },
      yellow: { name: 'Kelloo',    hex: '#F0A500', meaning: 'Ithemba, isivuno, ukukhanya kwaphezulu',                 origin: 'Imbewu ye-annatto, ama-marigold, ama-tagetes',      num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['black','red','white'],    label: 'Imicimbi',    rule: 'Isetshenziswa kuphela imihlangano yeGadaa, ukukhuleka, ne-Irreecha.' },
      { hues: ['white','green'],           label: 'Ukubonga',    rule: 'Ipaleti ye-Irreecha yabahlangabezi abavamile — ukubonga nokuthula.' },
      { hues: ['yellow','green','red'],   label: 'Isizwe',      rule: 'Ukuhlanganiswa kwanamuhla kwesizwe — umhlaba, ithemba, nomnikelo.' }
    ]
  },
  hausa: {
    name: 'Hausa', code: 'HSA',
    colours: {
      black:  { name: 'Baƙi',   hex: '#2D2D2D', meaning: 'Izimfanelo ezingafuneki, inhlanhla embi, ukweqa umthetho womphakathi', origin: 'Amalahle, umusi, udaka olunotshe lwensimbi',           num: 1, originCode: 'M' },
      white:  { name: 'Fari',   hex: '#FAFAF5', meaning: 'Ubuhlanzekile, ukuba nokomoya, ukwethembeka',                           origin: 'Uboya obunga lethiwa nemiloni nobumhlophe bodaka',      num: 2, originCode: 'C' },
      red:    { name: 'Ja',     hex: '#B03020', meaning: 'Amandla okomoya negunya',                                               origin: 'Umhlabathi wom-ochre obomvu nepulawuda ye-camwood',    num: 3, originCode: 'M' },
      blue:   { name: 'Shuni',  hex: '#4A5278', meaning: 'Udumo, ubunjalo, umgubho',                                             origin: 'I-indigofera ekhukhuliwe emizimbeni yokucaba eKano',   num: 4, originCode: 'V' },
      yellow: { name: 'Rawaya', hex: '#E8C040', meaning: 'Isivuno, umgubho',                                                      origin: 'Isihlahla se-Dorayi',                                 num: 5, originCode: 'V' },
      green:  { name: 'Kore',   hex: '#1A7A50', meaning: 'Ukukhula, ipharadisi',                                                  origin: 'Imibala yezitshalo ehlotshiwe yoluhlaza nomthubi',    num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['blue','yellow','white'], label: 'Umcimbi',  rule: 'Izigcawu ezibalulekile kuphela — i-indigo, igolide, nomthubi okhanyayo kukhombisa udumo.' },
      { hues: ['white','black'],          label: 'Okomoya',  rule: 'Inganaki futhi inqunyiwe yemihlangano yenkolo.' }
    ]
  },
  amazigh: {
    name: 'Amazigh', code: 'AMZ',
    colours: {
      black:  { name: 'Aberkan',       hex: '#1E1E1E', meaning: 'Ukuxhumana ngokomoya, ubuqine, ukusinda',          origin: 'Umusi namalahle',                          num: 1, originCode: 'M' },
      white:  { name: 'Azil / Azilal', hex: '#E8E4D8', meaning: 'Ubuhlanzekile, ukuthula, ukuvikelwa ngokomoya',    origin: 'Uboya obunga lethiwa nesilayidi sodaka',   num: 2, originCode: 'C' },
      red:    { name: 'Azeggway',      hex: '#C03020', meaning: 'Ukumelana, ingozi, igazi',                         origin: 'Om-ochre obomvu, i-henna, impande ye-madder', num: 3, originCode: 'M' },
      blue:   { name: 'Azerwal',       hex: '#3A7A8C', meaning: 'Ukuthula, ukuba nokomoya, ulwandle lweMediterranea', origin: 'Amaqabunga e-indigo',                    num: 4, originCode: 'V' },
      green:  { name: 'Azegzaw',       hex: '#2A6B45', meaning: 'Imvelo nezintaba',                                 origin: 'Amaqabunga omkhiwane, i-malachite',        num: 5, originCode: 'V' },
      yellow: { name: 'Awray',         hex: '#C4861A', meaning: 'Ingcebo, amandla, namandla empilo',                origin: 'Om-ochre omthubi, i-amber, nabrass',       num: 6, originCode: 'M' }
    },
    rules: [
      { hues: ['black','red','blue'],    label: 'Izinto Zokuvikelwa', rule: 'Isetshenziswa kuphela kuzo izinto ezilinda kumimoya nomhlola.' },
      { hues: ['green','red','white'],   label: 'Ukuzala',            rule: 'Ngokuqinile izokwembatha zemindeni — umshado, ukuzalwa kwabantwana, nemicimbi yemindeni.' },
      { hues: ['blue','green','yellow'], label: 'Yomdabu Wendalo',    rule: 'Igcina ukulingana kwenhlangano yomdabu: oluhlaza lwasezulwini, uhlaza womhlaba, omthubi welanga.' }
    ]
  },
  ndebele: {
    name: 'Ndebele', code: 'NDB',
    colours: {
      black:  { name: 'Mnyama',                 hex: '#0D0D0D', meaning: 'Ubuqine, ukuvikelwa, umlando',            origin: 'Amalahle, umusi womlotha',                 num: 1, originCode: 'M' },
      white:  { name: 'Mhlophe',                hex: '#F0EDE0', meaning: 'Ukuthula, ubuhlanzekile, ukuba nokomoya', origin: 'Udaka lwe-kaolin, itshaki',                num: 2, originCode: 'C' },
      red:    { name: 'Bomvu',                  hex: '#8B1A22', meaning: 'Ukuphila, amandla, umgubho',              origin: 'Om-ochre obomvu, udaka olunotshe lwensimbi', num: 3, originCode: 'M' },
      yellow: { name: 'Lithanga',               hex: '#C8841A', meaning: 'Ukukhanya kwelanga, inala',               origin: 'Om-ochre omthubi, udaka olunotshe lwe-iron oxide', num: 4, originCode: 'M' },
      blue:   { name: 'Luhlaza Okwesibakabaka', hex: '#1E3A6E', meaning: 'Ukuzinza, ithemba, ukuvumelana',          origin: 'Imibala yezitshalo, imibala eyingeniswe',  num: 5, originCode: 'V' },
      green:  { name: 'Hlaza',                  hex: '#2D5A1B', meaning: 'Ukukhula, ukuzala, imvelo',               origin: 'Iziqoqo zezitshalo, imibala yomhlabathi exutshanisiwe', num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['red','yellow','blue','green'],  label: 'Umgubho',  rule: 'Ukuhlanganiswa okuqinile kobonwa komphakathi nomgubho.' },
      { hues: ['black','white','red','blue'],   label: 'Ubunjalo', rule: 'Ipaleti yobuchopho — ikhuluma ngobukhosi bomphakathi nesigaba sempilo.' }
    ]
  },
  batwa: {
    name: 'Batwa', code: 'BWA',
    colours: {
      white:  { name: 'Umweru',   hex: '#F2EFE8', meaning: 'Umhlaba wemimoya, ubuhlanzekile, ukucacisa, izinguquko zempilo', origin: 'Udaka lwe-kaolin',     num: 1, originCode: 'C' },
      black:  { name: 'Irabura',  hex: '#1C1C1C', meaning: 'Ukuma phansi, indawo yokuphepha, ukuvuthwa',                      origin: 'Amalahle',             num: 2, originCode: 'M' },
      red:    { name: 'Umutuku',  hex: '#8C2020', meaning: 'Amandla empilo, igazi lomzimba lempilo, amandla asebenzayo',      origin: 'I-African Redwood',    num: 3, originCode: 'V' },
      green:  { name: 'Icyatsi',  hex: '#3A6B30', meaning: 'Ukuzala, inala, ukuphulukisa',                                   origin: 'I-celadonite',         num: 4, originCode: 'M' },
      blue:   { name: 'Ubururu',  hex: '#4A7AAA', meaning: 'Izulu, umkhathi, amanzi ahlanzekile',                            origin: 'Imibala yezulu namanzi', num: 5, originCode: 'M' },
      yellow: { name: 'Umuhondo', hex: '#D4A020', meaning: 'Amandla elanga, ukufudumala, ukukhanya kokomoya',                origin: 'I-turmeric',           num: 6, originCode: 'V' }
    },
    rules: [
      { hues: ['white','red'],    label: 'Ukudlula / Ukuqala',         rule: 'Ukudlula okungcwele nemingcele yekhosmos.' },
      { hues: ['white','black'],  label: 'Ukuvikelwa / Ukuma Phansi',  rule: 'Umhlophe unika ukucacisa kokhokho, mnyama unikeza indawo yokuphepha.' },
      { hues: ['red','black'],    label: 'Ukusinda / Ukuzingela',      rule: 'Ukusinda, ukuzingela, nomjikelezo womzimba.' },
      { hues: ['green','red'],    label: 'Imicimbi Yokuphulukisa',     rule: 'Umuthi nokuphulukisa — umhlaba namandla empilo.' },
      { hues: ['green','yellow'], label: 'Inala Yesigaba',             rule: 'Ukuphepha kokudla nenala yesigaba.' },
      { hues: ['blue','white'],   label: 'Kokhokho / Umoya Wamanzi',   rule: 'Ikhombisa ukuhlanza, ukuvuselela, nokuthula kwaphezulu.' }
    ]
  }
};

const HUES        = ['black', 'white', 'red', 'blue', 'green', 'yellow'];
const HUE_LABELS  = { black: 'Tiziri-Duhu', white: 'Fari-Timεt', red: 'Mogya-Ja', blue: 'Buluu-Amanzi', green: 'Kore-Uhlaza', yellow: 'Sika-Warabe' };
const TRIBE_ORDER = ['oromo', 'hausa', 'amazigh', 'ndebele', 'batwa'];

// ── STORY MEANINGS (translated to isiZulu) ────────────────────────────────

const STORY_MEANINGS = {
  // ── Ukungqubuzana [2] ─────────────────────────────────────────────────────
  'Ukufutheka':       { picks: [{t:'oromo',h:'red'},{t:'hausa',h:'black'}], ctx: 'Ukufutheka kuphathwa ngobuqele bombala obomvu nomnyama — imibala yomlilo nemiphumela yawo.' },
  'Ingozi':           { picks: [{t:'amazigh',h:'red'},{t:'ndebele',h:'black'}], ctx: 'Ingozi ikhombiswa ngu-Azeggway nommnyama kaMnyama.' },
  'Inhlanhla Embi':   { picks: [{t:'hausa',h:'black'},{t:'oromo',h:'black'}], ctx: 'Inhlanhla embi ihlala emnyameni — umbala wokweqa umthetho kuzo zonke izindlela.' },
  'Ukweqa Umthetho':  { picks: [{t:'hausa',h:'black'},{t:'amazigh',h:'black'}], ctx: 'Ukweqa umthetho womphakathi kukhombiswa ngamalahle ajulile — umbala wesexwayiso.' },

  // ── Imizwa [3] ────────────────────────────────────────────────────────────
  'Ithemba':        { picks: [{t:'oromo',h:'yellow'},{t:'oromo',h:'green'},{t:'batwa',h:'yellow'}], ctx: 'Ithemba liphakama ngemthubi noluhlaza — isivuno seza, izitshalo zikhula kakade.' },
  'Ukuthula':       { picks: [{t:'amazigh',h:'white'},{t:'amazigh',h:'blue'},{t:'ndebele',h:'white'}], ctx: 'Ukuthula kuhlala emhlophe nasoluhlaza lomkhathi — ongalethiwa nowelwe izulu.' },
  'Ukuzinza':       { picks: [{t:'ndebele',h:'blue'},{t:'amazigh',h:'blue'}], ctx: 'Ukuzinza kutholakala eluhlazeni olujulile — umbala wesifuba esibanjwa.' },
  'Ukuvumelana':    { picks: [{t:'amazigh',h:'blue'},{t:'oromo',h:'green'}], ctx: 'Ukuvumelana yizulu lihlangana nomhlaba — oluhlaza nomthubi belinganisekile.' },
  'Inhlalakahle':   { picks: [{t:'oromo',h:'yellow'},{t:'hausa',h:'yellow'},{t:'amazigh',h:'yellow'}], ctx: 'Inhlalakahle igolide — umbala wenala kuzo zonke izinhlanga.' },
  'Inala':          { picks: [{t:'oromo',h:'green'},{t:'hausa',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Inala amasimu aluhlaza nesivuno segolide.' },

  // ── Imvelo [4] ────────────────────────────────────────────────────────────
  'Umhlaba':               { picks: [{t:'oromo',h:'green'},{t:'ndebele',h:'green'}], ctx: 'Umhlaba uluhlaza naphasi kwayo yonke indlela — umhlabathi odlisayo.' },
  'Imvelo':                { picks: [{t:'amazigh',h:'green'},{t:'batwa',h:'green'}], ctx: 'Imvelo yi-Azegzaw ne-Icyatsi — iqabunga lomkhiwane nensimu yehlathi.' },
  'Isivuno':               { picks: [{t:'oromo',h:'yellow'},{t:'hausa',h:'yellow'},{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'}], ctx: 'Isivuno somthubi kuzo zonke izindlela ezine.' },
  'Ukukhanya Kwelanga':    { picks: [{t:'ndebele',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Ukukhanya kwelanga yi-Lithanga ne-Umuhondo — om-ochre ne-turmeric ibamba ilanga.' },
  'Ipharadisi':            { picks: [{t:'hausa',h:'green'}], ctx: 'Ipharadisi yi-Kore — uluhlaza lwamaHausa, umbala wensimu ephelele.' },
  'Izintaba':              { picks: [{t:'amazigh',h:'green'}], ctx: 'Izintaba zi-Azegzaw — uluhlaza lwamaAmazigh, umbala wase-Atlas.' },
  'Ulwandle LweMediterranea': { picks: [{t:'amazigh',h:'blue'}], ctx: 'Ulwandle lweMediterranea yi-Azerwal — oluhlaza abaluki bamaAmazigh ababitha amanzi.' },

  // ── Ukuphila [5] ─────────────────────────────────────────────────────────
  'Ukuphila':       { picks: [{t:'ndebele',h:'red'},{t:'batwa',h:'red'},{t:'oromo',h:'red'}], ctx: 'Ukuphila ubomvu wamandla, igazi, nomgubho kuzo zonke izindlela.' },
  'Amandla Empilo': { picks: [{t:'batwa',h:'red'},{t:'ndebele',h:'red'}], ctx: 'Amandla empilo yi-Umutuku ne-Bomvu — amandla omzimba asebenzayo okuba phila.' },
  'Amandla':        { picks: [{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Amandla amthubi — umbala amandla elanga.' },
  'Ingcebo':        { picks: [{t:'amazigh',h:'yellow'},{t:'ndebele',h:'yellow'}], ctx: 'Ingcebo yi-amber ne-ochre — omthubi awonwele emhlabathini.' },
  'Ukukhula':       { picks: [{t:'hausa',h:'green'},{t:'oromo',h:'green'},{t:'amazigh',h:'green'},{t:'batwa',h:'green'}], ctx: 'Ukukhula kuluhlaza kuzo zonke izinhlanga ezinhlanu — umbala wabaphilayo.' },
  'Ukuzala':        { picks: [{t:'oromo',h:'green'},{t:'amazigh',h:'green'},{t:'batwa',h:'green'},{t:'ndebele',h:'green'}], ctx: 'Ukuzala kwakhiwa nguluhlaza — umhlaba, isivuno, umugqa oqhubekayo.' },
  'Ukufudumala':    { picks: [{t:'batwa',h:'yellow'},{t:'oromo',h:'yellow'}], ctx: 'Ukufudumala yi-Umuhondo ne-Kelloo — i-turmeric ne-marigold emelana namakhaza.' },
  'Umgubho':        { picks: [{t:'hausa',h:'blue'},{t:'hausa',h:'yellow'},{t:'ndebele',h:'red'}], ctx: 'Umgubho uqinile — i-indigo yamaHausa, igolide, nobomvu womcimbi wamaNdebele.' },

  // ── Okomoya [7] ──────────────────────────────────────────────────────────
  'Umphefumulo':           { picks: [{t:'oromo',h:'white'},{t:'hausa',h:'white'}], ctx: 'Umphefumulo uphathwa emhlophe — ongalethiwa, ongagcwele.' },
  'Ubuhlanzekile':         { picks: [{t:'oromo',h:'white'},{t:'hausa',h:'white'},{t:'amazigh',h:'white'},{t:'ndebele',h:'white'},{t:'batwa',h:'white'}], ctx: 'Ubuhlanzekile bumhlophe kuzo zonke izindlela — awukaze unganaki, uhlale unenjongo.' },
  'Imfihlakalo':           { picks: [{t:'oromo',h:'black'},{t:'amazigh',h:'black'},{t:'ndebele',h:'black'},{t:'batwa',h:'black'}], ctx: 'Imfihlakalo ihlala emnyameni — umbala okungabonwa nokhokho.' },
  'Ukuba Nokomoya':        { picks: [{t:'amazigh',h:'blue'},{t:'hausa',h:'white'}], ctx: 'Ukuba nokomoya kuluhlaza lwezulu nomhlophe ongalethiwa — okungapheli nokuhlaziwe.' },
  'Ukukhanya Kwaphezulu':  { picks: [{t:'oromo',h:'yellow'},{t:'batwa',h:'yellow'}], ctx: 'Ukukhanya kwaphezulu yi-Kelloo ne-Umuhondo — i-marigold nelanga le-turmeric.' },
  'Amandla Okomoya':       { picks: [{t:'hausa',h:'red'}], ctx: 'Amandla okomoya ngu-Ja — ubomvu bamaHausa, umbala wegunya phezu kwalokho okungabonakali.' },
  'Ukuhlanza Ngokomoya':   { picks: [{t:'oromo',h:'white'},{t:'batwa',h:'white'}], ctx: 'Ukuhlanza ngokomoya yi-Adii ne-Umweru — udaka lwe-kaolin olusetyenziswa emcimbini.' },
  'Ukuba Khona Kokhokho':  { picks: [{t:'oromo',h:'black'},{t:'batwa',h:'black'}], ctx: 'Ukuba khona kokhokho kumnyama — umbala ogcina labo abadlulile.' },
  'Ukuxhumana Ngokomoya':  { picks: [{t:'batwa',h:'white'},{t:'amazigh',h:'white'}], ctx: 'Ukuxhumana ngokomoya kungalethiwa — umhlophe ovula esinye isizwe.' },

  // ── Amandla [8] ──────────────────────────────────────────────────────────
  'Igazi':                  { picks: [{t:'ndebele',h:'red'},{t:'batwa',h:'red'},{t:'amazigh',h:'red'}], ctx: 'Igazi li-Bomvu, i-Umutuku, i-Azeggway — ubomvu olithwala intengo yokuphila.' },
  'Igunya':                 { picks: [{t:'hausa',h:'red'},{t:'ndebele',h:'black'}], ctx: 'Igunya ngu-Ja no-Mnyama — igunya lobomvu nobunyoninco bomnyama.' },
  'Udumo':                  { picks: [{t:'hausa',h:'blue'},{t:'hausa',h:'yellow'}], ctx: 'Udumo yi-indigo yamaHausa negolide — umgodi wokucaba eKano nesihlahla se-dorayi.' },
  'Umnikelo':               { picks: [{t:'oromo',h:'red'},{t:'amazigh',h:'red'},{t:'ndebele',h:'red'},{t:'batwa',h:'red'}], ctx: 'Umnikelo uphathwa ngobomvu kuzo zonke izindlela — intengo yalokho okungcwele.' },
  'Ukumelana Ngomlando':    { picks: [{t:'oromo',h:'red'},{t:'amazigh',h:'red'}], ctx: 'Ukumelana ngomlando yi-Diimaa ne-Azeggway — ubomvu balabo ababelwa.' },

  // ── Ubukhosi [9] ─────────────────────────────────────────────────────────
  'Ubunye':              { picks: [{t:'oromo',h:'blue'},{t:'hausa',h:'blue'},{t:'amazigh',h:'blue'},{t:'ndebele',h:'blue'}], ctx: 'Ubunye umbala owaqamba ukuba ndawonye — oluhlaza kuzo zonke izindlela ezine.' },
  'Ubunjalo':            { picks: [{t:'hausa',h:'blue'},{t:'ndebele',h:'white'}], ctx: 'Ubunjalo yi-indigo yamaHausa nomhlophe wamaNdebele — ukuba khona nokucacisa.' },
  'Isibindi':            { picks: [{t:'oromo',h:'red'},{t:'oromo',h:'black'},{t:'oromo',h:'white'}], ctx: 'Isibindi esikweni lama-Oromo yi-Diimaa — igqokwa kanye nomnyama nomhlophe.' },
  'Ukusinda':            { picks: [{t:'batwa',h:'red'},{t:'batwa',h:'black'}], ctx: 'Ukusinda yi-Umutuku ne-Irabura — ipaleti yokuzingela yamaBatwa.' },
  'Ubuqine':             { picks: [{t:'ndebele',h:'black'},{t:'amazigh',h:'black'},{t:'oromo',h:'black'}], ctx: 'Ubuqine bumnyama — umbala kokhokho, ukubekezela, nokuvikelwa.' },
  'Ukuvikelwa':          { picks: [{t:'oromo',h:'black'},{t:'hausa',h:'blue'},{t:'amazigh',h:'black'}], ctx: 'Ukuvikelwa kudinga umnyama noluhlaza — okungabonakali namandla.' },
  'Ukubekezela':         { picks: [{t:'ndebele',h:'black'},{t:'oromo',h:'black'}], ctx: 'Ukubekezela kumnyama — amalahle ajulile aphefumulayo ame.' },
  'Ukwethembeka':        { picks: [{t:'hausa',h:'white'},{t:'oromo',h:'white'}], ctx: 'Ukwethembeka kumhlophe ongalethiwa — umbala wabangakunganaki, abangonakaliswanga.' },
};

const COLOUR_HOVER = {
  // Ukungqubuzana [2]
  'Ukufutheka': '#8B1A2A', 'Ingozi': '#C03020', 'Inhlanhla Embi': '#2D2D2D', 'Ukweqa Umthetho': '#1A1A1A',
  // Imizwa [3]
  'Ithemba': '#F0A500', 'Ukuthula': '#E8E4D8', 'Ukuzinza': '#1E3A6E', 'Ukuvumelana': '#3A7A8C',
  'Inhlalakahle': '#E8C040', 'Inala': '#2D5C1E',
  // Imvelo [4]
  'Umhlaba': '#2D5A1B', 'Imvelo': '#3A6B30', 'Isivuno': '#E8C040', 'Ukukhanya Kwelanga': '#D4A020',
  'Ipharadisi': '#1A7A50', 'Izintaba': '#2A6B45', 'Ulwandle LweMediterranea': '#3A7A8C',
  // Ukuphila [5]
  'Ukuphila': '#8B1A22', 'Amandla Empilo': '#8C2020', 'Amandla': '#C4861A', 'Ingcebo': '#C8841A',
  'Ukukhula': '#1A7A50', 'Ukuzala': '#2D5C1E', 'Ukufudumala': '#D4A020', 'Umgubho': '#E8C040',
  // Okomoya [7]
  'Umphefumulo': '#F5F0E8', 'Ubuhlanzekile': '#FAFAF5', 'Imfihlakalo': '#1A1A1A', 'Ukuba Nokomoya': '#3A7A8C',
  'Ukukhanya Kwaphezulu': '#F0A500', 'Amandla Okomoya': '#B03020', 'Ukuhlanza Ngokomoya': '#F2EFE8',
  'Ukuba Khona Kokhokho': '#0D0D0D', 'Ukuxhumana Ngokomoya': '#E8E4D8',
  // Amandla [8]
  'Igazi': '#8B1A22', 'Igunya': '#B03020', 'Udumo': '#4A5278', 'Umnikelo': '#C03020',
  'Ukumelana Ngomlando': '#8B1A2A',
  // Ubukhosi [9]
  'Ubunye': '#1E2D5C', 'Ubunjalo': '#4A5278', 'Isibindi': '#8B1A2A', 'Ukusinda': '#8C2020',
  'Ubuqine': '#0D0D0D', 'Ukuvikelwa': '#2D2D2D', 'Ukubekezela': '#1E1E1E', 'Ukwethembeka': '#FAFAF5',
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
            <div class="swatch-hover-label">Incazelo</div>
            <div class="swatch-hover-text">${c.meaning}</div>
            <div class="swatch-hover-label">Umthombo Wezinto</div>
            <div class="swatch-hover-text">${c.origin}</div>
          </div>
        </div>
      `;

      el.addEventListener('click', () => {
        const wasOpen = el.classList.contains('open');
        swatchWrap.querySelectorAll('.swatch.open').forEach(s => s.classList.remove('open'));
        if (!wasOpen) el.classList.add('open');
      });

      swatchWrap.appendChild(el);
    });

    row.appendChild(swatchWrap);
    grid.appendChild(row);
  });
}

// ── BUILD PAIRINGS ────────────────────────────────────────────────────────

function buildPairings() {
  const cont = document.getElementById('pairings-content');

  TRIBE_ORDER.forEach(tribeKey => {
    const tribe = TRIBES[tribeKey];
    const block = document.createElement('div');
    block.className = 'tribe-block';

    const tribeName = document.createElement('div');
    tribeName.className = 'tribe-name';
    tribeName.textContent = tribe.name;
    block.appendChild(tribeName);

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

// ── BUILD VALUES ──────────────────────────────────────────────────────────

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
          openTooltip(mixed, code, `${c.name} ${step}`, 'Ndebele', `${c.meaning} — inani ${step} (${i*10}% ${pctLabel}).`, c.origin);
        });

        steps.appendChild(col);
      }

      row.appendChild(steps);
      wrap.appendChild(row);
    });

    cont.appendChild(wrap);
  }

  buildSection('values-content',       ndb.colours.black.hex, 'black', 'mnyama');
  buildSection('values-content-white', ndb.colours.white.hex, 'white', 'mhlophe');
}

// ── BUILD GENERATOR ───────────────────────────────────────────────────────

function buildGenerator() {
  const meaningBtns = document.getElementById('meaning-buttons');
  const sizeBtns    = document.getElementById('size-buttons');
  const selected    = new Set();
  let size = 4;

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

  document.getElementById('clear-btn').addEventListener('click', () => {
    document.querySelectorAll('.meaning-btn').forEach(b => b.classList.remove('selected'));
    selected.clear();
    document.getElementById('generated-palette').classList.remove('show');
  });

  document.getElementById('generate-btn').addEventListener('click', () => {
    if (!selected.size) return;
    const palette = [];
    const seen    = new Set();

    const meaningList = Array.from(selected).filter(m => STORY_MEANINGS[m]);
    const pickLists = meaningList.map(meaning =>
      STORY_MEANINGS[meaning].picks.map(pick => ({
        colour: TRIBES[pick.t].colours[pick.h],
        tribe:  TRIBES[pick.t].name
      }))
    );

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

// ── CONTEXT TABS ──────────────────────────────────────────────────────────

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

const WHEEL_HUE_ORDER   = ['red', 'yellow', 'green', 'blue', 'white', 'black'];
const WHEEL_TRIBE_ORDER = ['oromo', 'hausa', 'amazigh', 'ndebele', 'batwa'];
const WHEEL_NUM_H = WHEEL_HUE_ORDER.length;
const WHEEL_NUM_T = WHEEL_TRIBE_ORDER.length;
const WHEEL_SEG_ANG = (Math.PI * 2) / (WHEEL_NUM_H * WHEEL_NUM_T);
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

  ctx.beginPath();
  ctx.arc(cx, cy, WHEEL_INNER_R - 1, 0, Math.PI * 2);
  ctx.fillStyle = '#F9F9F9';
  ctx.fill();
}

// ── WHEEL HOVER TOOLTIP ───────────────────────────────────────────────────

function initWheelHover() {
  const canvas  = document.getElementById('wheel-canvas');
  if (!canvas) return;

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
let originalImageData = null;

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
