
// ============================
// Product Data
// ============================
const products = {
  // Commands
  aangenomen: {
    emoji: "✅",
    files: ["aangenomen.txt"],
    prijs: 0.75,
    type: "command",
    description: "Neemt de persoon aan en geeft de bijbehorende rollen"
  },
  clear: {
    emoji: "🧹",
    files: ["clear.txt"],
    prijs: 0.49,
    type: "command",
    description: "Verwijdert een opgegeven aantal berichten uit een kanaal."
  },
  blacklist: {
  emoji: "🔒",
  files: ["blacklist.txt"],
  prijs: 0.63,
  type: "command",
  description: "Voegt een gebruiker toe aan de blacklist."
},
blacklistlist: {
  emoji: "📋",
  files: ["blacklistlist.txt"],
  prijs: 0.63,
  type: "command",
  description: "Toont alle gebruikers die op de blacklist staan."
},
blacklistcheck: {
  emoji: "🔍",
  files: ["blacklistcheck.txt"],
  prijs: 0.63,
  type: "command",
  description: "Controleert of een gebruiker op de blacklist staat."
},
mijnblacklist: {
  emoji: "📌",
  files: ["mijnblacklist.txt"],
  prijs: 0.63,
  type: "command",
  description: "Laat zien welke gebruikers jij hebt geblacklist."
},
  deploycommands: {
    emoji: "⚡",
    files: ["deploy-commands.txt"],
    prijs: 1.40,
    type: "command",
    description: "Deployt al je slash commands naar Discord zodat ze up-to-date zijn."
  },
  index: {
    emoji: "📄",
    files: ["index.txt"],
    prijs: 1,
    type: "command",
    description: "Hoofdbestand van je bot, importeert alle modules en events."
  },
  handlecommands: {
    emoji: "🛠️",
    files: ["handleCommands.txt"],
    prijs: 1.25,
    type: "command",
    description: "Laadt automatisch alle commands in en registreert ze."
  },
  handleevents: {
    emoji: "🎯",
    files: ["handleEvents.txt"],
    prijs: 1,
    type: "command",
    description: "Beheert automatisch alle event handlers van je bot."
  },
  ready: {
    emoji: "✅",
    files: ["ready.txt"],
    prijs: 0.25,
    type: "command",
    description: "Geeft een bericht in console wanneer de bot succesvol is ingelogd."
  },
  interactioncreate: {
    emoji: "💬",
    files: ["interactionCreate.txt"],
    prijs: 0.50,
    type: "command",
    description: "Luistert naar slash commands en buttons en voert ze uit."
  },
  ledenlijst: {
    emoji: "📋",
    files: ["ledenlijst.txt"],
    prijs: 1,
    type: "command",
    description: "Toont een overzicht van alle leden in een server."
  },
  ticketpanel: {
    emoji: "🎫",
    files: ["ticketpanel.txt"],
    prijs: 2,
    type: "command",
    description: "Maakt een ticket-systeem zodat leden support kunnen aanvragen."
  },
  addrole: {
    emoji: "➕",
    files: ["addrole.txt"],
    prijs: 0.5,
    type: "command",
    description: "Voegt een opgegeven rol toe aan een lid."
  },
  avatar: {
    emoji: "🖼️",
    files: ["avatar.txt"],
    prijs: 0.5,
    type: "command",
    description: "Laat de avatar van een gebruiker zien."
  },
  ban: {
    emoji: "⛔",
    files: ["ban.txt"],
    prijs: 0.25,
    type: "command",
    description: "Bant een lid van de server."
  },
  removerol: {
    emoji: "➖",
    files: ["removerol.txt"],
    prijs: 0.50,
    type: "command",
    description: "Verwijdert een opgegeven rol van een lid."
  },
  unban: {
    emoji: "🔓",
    files: ["unban.txt"],
    prijs: 0.25,
    type: "command",
    description: "Hef een ban van een gebruiker op."
  },
  warn: {
    emoji: "⚠️",
    files: ["warn.txt"],
    prijs: 1.20,
    type: "command",
    description: "Geeft een waarschuwing aan een lid."
  },
  warns: {
    emoji: "📌",
    files: ["warns.txt"],
    prijs: 0.50,
    type: "command",
    description: "Toont alle waarschuwingen van een lid."
  },
  unwarn: {
    emoji: "🗑️",
    files: ["unwarn.txt"],
    prijs: 0.50,
    type: "command",
    description: "Verwijdert een waarschuwing van een lid."
  },
  plogs: {
    emoji: "📖",
    files: ["plogs.txt"],
    prijs: 1,
    type: "command",
    description: "Registreert acties van leden zoals join/leave berichten."
  },
  pwelkom: {
    emoji: "👋",
    files: ["pwelkom.txt"],
    prijs: 1,
    type: "command",
    description: "Stuurt een welkomsbericht naar nieuwe leden."
  },
  clearuser: {
    emoji: "🧹",
    files: ["clearuser.txt"],
    prijs: 0.50,
    type: "command",
    description: "Verwijdert alle berichten van een specifieke gebruiker."
  },
  ping: {
    emoji: "🏓",
    files: ["ping.txt"],
    prijs: 0,
    type: "command",
    description: "Controleert de latency van de bot."
  },
  poll: {
    emoji: "📊",
    files: ["poll.txt"],
    prijs: 0.50,
    type: "command",
    description: "Maakt een poll aan waar leden op kunnen stemmen."
  },
  say: {
    emoji: "🗣️",
    files: ["say.txt"],
    prijs: 0.60,
    type: "command",
    description: "Laat de bot een bericht versturen namens jou."
  },
  userinfo: {
    emoji: "👤",
    files: ["userinfo.txt"],
    prijs: 0.75,
    type: "command",
    description: "Toont informatie van een gebruiker."
  },
  serverinfo: {
    emoji: "🏰",
    files: ["serverinfo.txt"],
    prijs: 1,
    type: "command",
    description: "Toont informatie over de server."
  },
  kick: {
    emoji: "🚪",
    files: ["kick.txt"],
    prijs: 0.50,
    type: "command",
    description: "Kickt een lid van de server."
  },
  help: {
    emoji: "❓",
    files: ["help.txt"],
    prijs: 0.50,
    type: "command",
    description: "Toont alle beschikbare commands en uitleg."
  },
  bugmelden: {
    emoji: "🐞",
    files: ["bugmelden.txt"],
    prijs: 0.50,
    type: "command",
    description: "Laat gebruikers een bug rapporteren naar het dev-team."
  },
  ontsla: {
    emoji: "💼",
    files: ["ontsla.txt"],
    prijs: 0.75,
    type: "command",
    description: "Verwijdert een gebruiker uit de database of lijst."
  },

  // Packs
  SourcesPack: {
    emoji: "📦",
    files: ["index.txt","deploy-commands.txt","handleCommands.txt","handleEvents.txt","ready.txt","interactionCreate.txt"],
    prijs: 4.50,
    type: "pack",
    description: "Complete basispakket voor je bot, bevat alle essentiële bestanden."
  },
  Blacklist: {
    emoji: "🔒",
    files: ["blacklist.txt","blacklistlist.txt","blacklistcheck.txt","mijnblacklist.txt"],
    prijs: 2.50,
    type: "pack",
    description: "Blacklist systeem voor je server om leden te blokkeren."
  },
  ModeratiePack: {
    emoji: "🛡️",
    files: ["addrole.txt","removerol.txt","ban.txt","unban.txt","clear.txt","clearuser.txt","help.txt","kick.txt","say.txt","userinfo.txt","serverinfo.txt","warn.txt","warns.txt","unwarn.txt"],
    prijs: 5.00,
    type: "pack",
    description: "Alles wat je nodig hebt voor moderatie in één pakket."
  },
  UtilityPack: {
    emoji: "⚙️",
    files: ["ledenlijst.txt","aangenomen.txt","ontsla.txt","avatar.txt","bugmelden.txt","ping.txt","poll.txt","warn.txt","warns.txt","unwarn.txt"],
    prijs: 3.50,
    type: "pack",
    description: "Handige utilities voor je bot: pings, polls, avatars en ledenbeheer."
  },
  WLP: {
    emoji: "🎉",
    files: ["plogs.txt","pwelkom.txt"],
    prijs: 12,
    type: "pack",
    description: "Welkomstpakket voor je server, met logs en welkom berichten."
  },
  WarnsPack: {
    emoji: "📌",
    files: ["warn.txt","warns.txt","unwarn.txt"],
    prijs: 12,
    type: "pack",
    description: "Alles rondom waarschuwingen in één handig pakket."
  }
};


// ============================
// Functies
// ============================
function showProduct(id){
  document.querySelectorAll('.product-card').forEach(card => card.classList.remove('active'));
  const selected = document.getElementById(id);
  if(selected) selected.classList.add('active');
}

function goHome(){
  document.querySelectorAll('.product-card').forEach(card => card.classList.remove('active'));
  document.getElementById('intro').classList.add('active');
  document.getElementById('overons').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.key === "F12") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === "I") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === "C") e.preventDefault();
  if (e.ctrlKey && e.shiftKey && e.key === "J") e.preventDefault();
});

// ============================
// Dynamisch Product Cards maken
// ============================
const container = document.getElementById('dynamic-products');
Object.keys(products).forEach(key => {
  const product = products[key];
  const card = document.createElement('div');
  card.className = "product-card";
  card.id = key;

  let filesHTML = product.files.map(f => `<li>${f}</li>`).join("");

card.innerHTML = `
  <h2>${product.emoji} ${key}</h2>
  <div class="price">€${product.prijs.toFixed(2)}</div>
  <ul>${filesHTML}</ul>
  <div class="description">
    <strong>Wat het doet:</strong><br>
    ${product.description}<br>
    <strong>Gebruik:</strong> Hernoem naar <code>${key}.js</code>.
  </div>
`;
  container.appendChild(card);
});

// ============================
// Dynamisch Sidebar vullen (Commands & Packs gescheiden)
// ============================
// Dynamisch Sidebar vullen met Commands & Packs
const sidebar = document.querySelector('.sidebar');

// Commands Section
const commandsHeader = document.createElement('h3');
commandsHeader.textContent = "Commands";
sidebar.appendChild(commandsHeader);

Object.keys(products).forEach(key => {
  if(products[key].type === "command"){
    const a = document.createElement('a');
    a.href = "javascript:void(0)";
    a.onclick = () => showProduct(key);

    // Emoji + Naam
    const emojiSpan = document.createElement('span');
    emojiSpan.className = "emoji";
    emojiSpan.textContent = products[key].emoji;

    const textSpan = document.createElement('span');
    textSpan.textContent = key;

    a.appendChild(emojiSpan);
    a.appendChild(textSpan);

    sidebar.appendChild(a);
  }
});

// Packs Section
const packsHeader = document.createElement('h3');
packsHeader.textContent = "Packs";
sidebar.appendChild(packsHeader);

Object.keys(products).forEach(key => {
  if(products[key].type === "pack"){
    const a = document.createElement('a');
    a.href = "javascript:void(0)";
    a.onclick = () => showProduct(key);

    const emojiSpan = document.createElement('span');
    emojiSpan.className = "emoji";
    emojiSpan.textContent = products[key].emoji;

    const textSpan = document.createElement('span');
    textSpan.textContent = key;

    a.appendChild(emojiSpan);
    a.appendChild(textSpan);

    sidebar.appendChild(a);
  }
});

// Canvas setup
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Particles (vallende bolletjes)
const particles = [];
const particleCount = 120;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.2,
    drift: Math.random() * 0.2 - 0.1,
    color: Math.random() > 0.5 ? '#ff003c' : '#005eff'
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let p of particles) {
    p.y += p.speed;
    p.x += p.drift;

    if (p.y > height) { p.y = -p.radius; p.x = Math.random() * width; }
    if (p.x > width) p.x = 0;
    if (p.x < 0) p.x = width;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 8;
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();






