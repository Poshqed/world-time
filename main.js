//Array for timezones
const timeZones = [
    "America/Aruba",
    "Asia/Kabul",
    "Africa/Luanda",
    "America/Anguilla",
    "Europe/Mariehamn",
    "Europe/Tirane",
    "Europe/Andorra",
    "Asia/Dubai",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia",
    "Asia/Yerevan",
    "Pacific/Pago_Pago",
    "Antarctica/McMurdo",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "Indian/Kerguelen",
    "America/Antigua",
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Currie",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla",
    "Europe/Vienna",
    "Asia/Baku",
    "Africa/Bujumbura",
    "Europe/Brussels",
    "Africa/Porto-Novo",
    "Africa/Ouagadougou",
    "Asia/Dhaka",
    "Europe/Sofia",
    "Asia/Bahrain",
    "America/Nassau",
    "Europe/Sarajevo",
    "America/St_Barthelemy",
    "Europe/Minsk",
    "America/Belize",
    "Atlantic/Bermuda",
    "America/La_Paz",
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco",
    "America/Barbados",
    "Asia/Brunei",
    "Asia/Thimphu",
    "Europe/Oslo",
    "Africa/Gaborone",
    "Africa/Bangui",
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    "America/Blanc-Sablon",
    "America/Toronto",
    "America/Nipigon",
    "America/Thunder_Bay",
    "America/Iqaluit",
    "America/Pangnirtung",
    "America/Atikokan",
    "America/Winnipeg",
    "America/Rainy_River",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Yellowknife",
    "America/Inuvik",
    "America/Creston",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Vancouver",
    "America/Whitehorse",
    "America/Dawson",
    "Indian/Cocos",
    "Europe/Zurich",
    "America/Santiago",
    "Pacific/Easter",
    "Asia/Shanghai",
    "Asia/Urumqi",
    "Africa/Abidjan",
    "Africa/Douala",
    "Africa/Kinshasa",
    "Africa/Lubumbashi",
    "Africa/Brazzaville",
    "Pacific/Rarotonga",
    "America/Bogota",
    "Indian/Comoro",
    "Atlantic/Cape_Verde",
    "America/Costa_Rica",
    "America/Havana",
    "America/Curacao",
    "Indian/Christmas",
    "America/Cayman",
    "Asia/Nicosia",
    "Europe/Prague",
    "Europe/Berlin",
    "Europe/Busingen",
    "Africa/Djibouti",
    "America/Dominica",
    "Europe/Copenhagen",
    "America/Santo_Domingo",
    "Africa/Algiers",
    "America/Guayaquil",
    "Pacific/Galapagos",
    "Africa/Cairo",
    "Africa/Asmara",
    "Africa/El_Aaiun",
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary",
    "Europe/Tallinn",
    "Africa/Addis_Ababa",
    "Europe/Helsinki",
    "Pacific/Fiji",
    "Atlantic/Stanley",
    "Europe/Paris",
    "Atlantic/Faroe",
    "Pacific/Chuuk",
    "Pacific/Pohnpei",
    "Pacific/Kosrae",
    "Africa/Libreville",
    "Europe/London",
    "Asia/Tbilisi",
    "Europe/Guernsey",
    "Africa/Accra",
    "Europe/Gibraltar",
    "Africa/Conakry",
    "America/Guadeloupe",
    "Africa/Banjul",
    "Africa/Bissau",
    "Africa/Malabo",
    "Europe/Athens",
    "America/Grenada",
    "America/Godthab",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule",
    "America/Guatemala",
    "America/Cayenne",
    "Pacific/Guam",
    "America/Guyana",
    "Asia/Hong_Kong",
    "America/Tegucigalpa",
    "Europe/Zagreb",
    "America/Port-au-Prince",
    "Europe/Budapest",
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura",
    "Europe/Isle_of_Man",
    "Asia/Kolkata",
    "Indian/Chagos",
    "Europe/Dublin",
    "Asia/Tehran",
    "Asia/Baghdad",
    "Atlantic/Reykjavik",
    "Asia/Jerusalem",
    "Europe/Rome",
    "America/Jamaica",
    "Europe/Jersey",
    "Asia/Amman",
    "Asia/Tokyo",
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Oral",
    "Africa/Nairobi",
    "Asia/Bishkek",
    "Asia/Phnom_Penh",
    "Pacific/Tarawa",
    "Pacific/Enderbury",
    "Pacific/Kiritimati",
    "America/St_Kitts",
    "Asia/Seoul",
    "Europe/Belgrade",
    "Asia/Kuwait",
    "Asia/Vientiane",
    "Asia/Beirut",
    "Africa/Monrovia",
    "Africa/Tripoli",
    "America/St_Lucia",
    "Europe/Vaduz",
    "Asia/Colombo",
    "Africa/Maseru",
    "Europe/Vilnius",
    "Europe/Luxembourg",
    "Europe/Riga",
    "Asia/Macau",
    "America/Marigot",
    "Africa/Casablanca",
    "Europe/Monaco",
    "Europe/Chisinau",
    "Indian/Antananarivo",
    "Indian/Maldives",
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Chihuahua",
    "America/Ojinaga",
    "America/Hermosillo",
    "America/Tijuana",
    "America/Bahia_Banderas",
    "Pacific/Majuro",
    "Pacific/Kwajalein",
    "Europe/Skopje",
    "Africa/Bamako",
    "Europe/Malta",
    "Asia/Rangoon",
    "Europe/Podgorica",
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan",
    "Pacific/Saipan",
    "Africa/Maputo",
    "Africa/Nouakchott",
    "America/Montserrat",
    "America/Martinique",
    "Indian/Mauritius",
    "Africa/Blantyre",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Indian/Mayotte",
    "Africa/Windhoek",
    "Pacific/Noumea",
    "Africa/Niamey",
    "Pacific/Norfolk",
    "Africa/Lagos",
    "America/Managua",
    "Pacific/Niue",
    "Europe/Amsterdam",
    "Europe/Oslo",
    "Asia/Kathmandu",
    "Pacific/Nauru",
    "Pacific/Auckland",
    "Pacific/Chatham",
    "Asia/Muscat",
    "Asia/Karachi",
    "America/Panama",
    "Pacific/Pitcairn",
    "America/Lima",
    "Asia/Manila",
    "Pacific/Palau",
    "Pacific/Port_Moresby",
    "Pacific/Bougainville",
    "Europe/Warsaw",
    "America/Puerto_Rico",
    "Asia/Pyongyang",
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores",
    "America/Asuncion",
    "Asia/Gaza",
    "Asia/Hebron",
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier",
    "Asia/Qatar",
    "Indian/Reunion",
    "Europe/Bucharest",
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Volgograd",
    "Europe/Kirov",
    "Europe/Astrakhan",
    "Europe/Samara",
    "Europe/Ulyanovsk",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr",
    "Africa/Kigali",
    "Asia/Riyadh",
    "Africa/Khartoum",
    "Africa/Dakar",
    "Asia/Singapore",
    "Atlantic/South_Georgia",
    "Arctic/Longyearbyen",
    "Pacific/Guadalcanal",
    "Africa/Freetown",
    "America/El_Salvador",
    "Europe/San_Marino",
    "Africa/Mogadishu",
    "America/Miquelon",
    "Europe/Belgrade",
    "Africa/Juba",
    "Africa/Sao_Tome",
    "America/Paramaribo",
    "Europe/Bratislava",
    "Europe/Ljubljana",
    "Europe/Stockholm",
    "Africa/Mbabane",
    "America/Lower_Princes",
    "Indian/Mahe",
    "Asia/Damascus",
    "America/Grand_Turk",
    "Africa/Ndjamena",
    "Africa/Lome",
    "Asia/Bangkok",
    "Asia/Dushanbe",
    "Pacific/Fakaofo",
    "Asia/Ashgabat",
    "Asia/Dili",
    "Pacific/Tongatapu",
    "America/Port_of_Spain",
    "Africa/Tunis",
    "Europe/Istanbul",
    "Pacific/Funafuti",
    "Asia/Taipei",
    "Africa/Dar_es_Salaam",
    "Africa/Kampala",
    "Europe/Kiev",
    "Europe/Uzhgorod",
    "Europe/Zaporozhye",
    "Pacific/Johnston",
    "Pacific/Midway",
    "Pacific/Wake",
    "America/Montevideo",
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu",
    "Asia/Samarkand",
    "Asia/Tashkent",
    "Europe/Vatican",
    "America/St_Vincent",
    "America/Caracas",
    "America/Tortola",
    "America/St_Thomas",
    "Asia/Ho_Chi_Minh",
    "Pacific/Efate",
    "Pacific/Wallis",
    "Pacific/Apia",
    "Asia/Aden",
    "Africa/Johannesburg",
    "Africa/Lusaka",
    "Africa/Harare"
]


//globals
displayTime = document.getElementById('display-time');
displayBtn = document.getElementById('display-btn');
timeInput = document.getElementById('time-input');

//Event Listener
displayBtn.addEventListener('click', currentTime);

//function to say the time
function currentTime() {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: timeInput.value
    };
    const time = new Intl.DateTimeFormat([], options).format(new Date());
    displayTime.innerHTML = `The time in ${timeInput.value} is ${time}`
}

for (i = 0; i < timeZones.length; i++) {
    var opt = timeZones[i];
    var newEl = document.createElement('option');
    newEl.textContent = opt;
    newEl.value = opt;

    timeInput.appendChild(newEl);
}

