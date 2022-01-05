let loc = {
  c009: 'antarctica',
  c011: 'arctic',
  c081: 'gmt',
  c231: 'universal',
  c233: 'utc',
  c245: 'zulu'
}

let firstDay = {
  monday: {
    c002: 'aland islands',
    c003: 'albania',
    c006: 'andorra',
    c007: 'angola',
    c008: 'anguilla',
    c013: 'armenia',
    c014: 'aruba',
    c016: 'austria',
    c017: 'azerbaijan',
    c020: 'barbados',
    c021: 'belarus',
    c022: 'belgium',
    c024: 'benin',
    c025: 'bermuda',
    c028: 'bonaire',
    c029: 'bosnia and herzegovina',
    c032: 'british indian ocean territory',
    c033: 'brunei',
    c034: 'bulgaria',
    c035: 'burkina faso',
    c036: 'burundi',
    c038: 'cameroon',
    c040: 'cape verde',
    c041: 'cayman islands',
    c042: 'central african republic',
    c043: 'chad',
    c046: 'christmas island',
    c047: 'cocos (keeling) islands',
    c049: 'comoros',
    c050: 'cook islands',
    c052: 'croatia',
    c053: 'cuba',
    c054: 'curacao',
    c055: 'cyprus',
    c056: 'czech republic',
    c057: 'democratic republic of the congo',
    c058: 'denmark',
    c064: 'equatorial guinea',
    c065: 'eritrea',
    c066: 'estonia',
    c068: 'falkland islands',
    c069: 'faroe islands',
    c070: 'fiji',
    c071: 'finland',
    c072: 'france',
    c073: 'french guiana',
    c074: 'french polynesia',
    c075: 'french southern and antarctic lands',
    c076: 'gabon',
    c077: 'georgia',
    c078: 'germany',
    c079: 'ghana',
    c080: 'gibraltar',
    c082: 'greece',
    c083: 'greenland',
    c084: 'grenada',
    c085: 'guadeloupe',
    c088: 'guinea',
    c089: 'guinea-bissau',
    c090: 'guyana',
    c091: 'haiti',
    c094: 'hungary',
    c095: 'iceland',
    c097: 'indonesia',
    c100: 'ireland',
    c102: 'italy',
    c103: 'ivory coast',
    c107: 'kazakhstan',
    c109: 'kiribati',
    c111: 'kyrgyzstan',
    c113: 'latvia',
    c114: 'lebanon',
    c115: 'lesotho',
    c116: 'liberia',
    c118: 'liechtenstein',
    c119: 'lithuania',
    c120: 'luxembourg',
    c123: 'madagascar',
    c124: 'malawi',
    c127: 'mali',
    c130: 'martinique',
    c131: 'mauritania',
    c132: 'mauritius',
    c133: 'mayotte',
    c135: 'micronesia',
    c137: 'moldova',
    c138: 'monaco',
    c139: 'mongolia',
    c140: 'montenegro',
    c141: 'montserrat',
    c142: 'morocco',
    c145: 'namibia',
    c146: 'nauru',
    c148: 'netherlands',
    c149: 'new caledonia',
    c150: 'new zealand',
    c152: 'niger',
    c153: 'nigeria',
    c154: 'niue',
    c155: 'norfolk island',
    c157: 'northern ireland',
    c158: 'northern macedonia',
    c160: 'norway',
    c162: 'pakistan',
    c166: 'papua new guinea',
    c170: 'pitcairn islands',
    c171: 'poland',
    c175: 'republic of the congo',
    c176: 'reunion',
    c177: 'romania',
    c178: 'russia',
    c179: 'rwanda',
    c180: 'saint helena, ascension and tristan da cunha',
    c181: 'saint kitts and nevis',
    c182: 'saint lucia',
    c183: 'saint pierre and miquelon',
    c184: 'saint vincent and the grenadines',
    c186: 'san marino',
    c187: 'sao tome and principe',
    c189: 'senegal',
    c190: 'serbia',
    c191: 'seychelles',
    c192: 'sierra leone',
    c194: 'sint maarten',
    c195: 'slovakia',
    c196: 'slovenia',
    c197: 'solomon islands',
    c200: 'south georgia and the south sandwich islands',
    c203: 'spain',
    c204: 'sri lanka',
    c206: 'suriname',
    c207: 'swaziland',
    c208: 'sweden',
    c209: 'switzerland',
    c212: 'tajikistan',
    c213: 'tanzania',
    c216: 'the gambia',
    c217: 'togo',
    c218: 'tokelau',
    c219: 'tonga',
    c221: 'tunisia',
    c222: 'turkey',
    c223: 'turkmenistan',
    c224: 'turks and caicos islands',
    c225: 'tuvalu',
    c226: 'uganda',
    c227: 'ukraine',
    c229: 'united kingdom',
    c234: 'uzbekistan',
    c235: 'vanuatu',
    c236: 'vatican city',
    c238: 'vietnam',
    c241: 'wallis and futuna',
    c243: 'zambia'
  },
  saturday: {
    c019: 'bangladesh',
    c059: 'djibouti',
    c098: 'iran',
    c164: 'palestine',
    c198: 'somalia'
  },
  sunday: {
    c001: 'afghanistan',
    c004: 'algeria',
    c005: 'american samoa',
    c010: 'antigua and barbuda',
    c012: 'argentina',
    c015: 'australia',
    c018: 'bahrain',
    c023: 'belize',
    c026: 'bhutan',
    c030: 'botswana',
    c031: 'brazil',
    c037: 'cambodia',
    c039: 'canada',
    c044: 'chile',
    c045: 'china',
    c048: 'colombia',
    c051: 'costa rica',
    c060: 'dominica',
    c061: 'ecuador',
    c062: 'egypt',
    c063: 'el salvador',
    c067: 'ethiopia',
    c086: 'guam',
    c092: 'honduras',
    c093: 'hong kong',
    c096: 'india',
    c099: 'iraq',
    c101: 'israel',
    c104: 'jamaica',
    c105: 'japan',
    c106: 'jordan',
    c108: 'kenya',
    c110: 'kuwait',
    c112: 'laos',
    c121: 'macao',
    c122: 'macau',
    c125: 'malaysia',
    c126: 'maldives',
    c128: 'malta',
    c129: 'marshall islands',
    c134: 'mexico',
    c136: 'midway atoll',
    c143: 'mozambique',
    c144: 'myanmar',
    c147: 'nepal',
    c151: 'nicaragua',
    c156: 'north korea',
    c159: 'northern mariana islands',
    c161: 'oman',
    c163: 'palau',
    c165: 'panama',
    c167: 'paraguay',
    c168: 'peru',
    c169: 'philippines',
    c172: 'portugal',
    c173: 'puerto rico',
    c174: 'qatar',
    c185: 'samoa',
    c188: 'saudi arabia',
    c193: 'singapore',
    c199: 'south africa',
    c201: 'south korea',
    c202: 'south sudan',
    c205: 'sudan',
    c210: 'syria',
    c211: 'taiwan',
    c214: 'thailand',
    c215: 'the bahamas',
    c220: 'trinidad and tobago',
    c228: 'united arab emirates',
    c230: 'united states of america',
    c232: 'uruguay',
    c237: 'venezuela',
    c239: 'virgin islands',
    c240: 'wake island',
    c242: 'yemen',
    c244: 'zimbabwe'
  }
}

export default {
  countries: () => {
    let arr = []
    Object.keys(firstDay).forEach(day => {
      Object.keys(firstDay[day]).forEach(country => {
        arr.push(firstDay[day][country])
      })
    })
    return arr.sort()
  },
  firstDay: () => firstDay,
  locations: () => loc
};