// ============================
// Product Data
// ============================
const products = {
  // Commands
  aangenomen: { emoji: "👋", files: ["aangenomen.txt"], prijs: 0.75, type: "command" },
  clear: { emoji: "🧹", files: ["clear.txt"], prijs: 0.49, type: "command" },
  deploycommands: { emoji: "⚡", files: ["deploy-commands.txt"], prijs: 1.40, type: "command" },
  index: { emoji: "📄", files: ["index.txt"], prijs: 1, type: "command" },
  handlecommands: { emoji: "🛠️", files: ["handleCommands.txt"], prijs: 1.25, type: "command" },
  handleevents: { emoji: "🎯", files: ["handleEvents.txt"], prijs: 1, type: "command" },
  ready: { emoji: "✅", files: ["ready.txt"], prijs: 0.25, type: "command" },
  interactioncreate: { emoji: "💬", files: ["interactionCreate.txt"], prijs: 0.50, type: "command" },
  ledenlijst: { emoji: "📋", files: ["ledenlijst.txt"], prijs: 1, type: "command" },
  ticketpanel: { emoji: "🎫", files: ["ticketpanel.txt"], prijs: 2, type: "command" },
  addrole: { emoji: "➕", files: ["addrole.txt"], prijs: 0.5, type: "command" },
  avatar: { emoji: "🖼️", files: ["avatar.txt"], prijs: 0.5, type: "command" },
  ban: { emoji: "⛔", files: ["ban.txt"], prijs: 0.25, type: "command" },
  removerol: { emoji: "➖", files: ["removerol.txt"], prijs: 0.50, type: "command" },
  unban: { emoji: "🔓", files: ["unban.txt"], prijs: 0.25, type: "command" },
  warn: { emoji: "⚠️", files: ["warn.txt"], prijs: 1.20, type: "command" },
  warns: { emoji: "📌", files: ["warns.txt"], prijs: 0.50, type: "command" },
  unwarn: { emoji: "🗑️", files: ["unwarn.txt"], prijs: 0.50, type: "command" },
  plogs: { emoji: "📖", files: ["plogs.txt"], prijs: 1, type: "command" },
  pwelkom: { emoji: "👋", files: ["pwelkom.txt"], prijs: 1, type: "command" },
  clearuser: { emoji: "🧹", files: ["clearuser.txt"], prijs: 0.50, type: "command" },
  ping: { emoji: "🏓", files: ["ping.txt"], prijs: 0, type: "command" },
  poll: { emoji: "📊", files: ["poll.txt"], prijs: 0.50, type: "command" },
  say: { emoji: "🗣️", files: ["say.txt"], prijs: 0.60, type: "command" },
  userinfo: { emoji: "👤", files: ["userinfo.txt"], prijs: 0.75, type: "command" },
  serverinfo: { emoji: "🏰", files: ["serverinfo.txt"], prijs: 1, type: "command" },
  kick: { emoji: "🚪", files: ["kick.txt"], prijs: 0.50, type: "command" },
  help: { emoji: "❓", files: ["help.txt"], prijs: 0.50, type: "command" },
  bugmelden: { emoji: "🐞", files: ["bugmelden.txt"], prijs: 0.50, type: "command" },
  ontsla: { emoji: "💼", files: ["ontsla.txt"], prijs: 0.75, type: "command" },

  // Packs
  SourcesPack: { emoji: "📦", files: ["index.txt","deploy-commands.txt","handleCommands.txt","handleEvents.txt","ready.txt","interactionCreate.txt"], prijs: 4.50, type: "pack" },
  Blacklist: { emoji: "🔒", files: ["blacklist.txt","blacklistlist.txt","blacklistcheck.txt","mijnblacklist.txt"], prijs: 2.50, type: "pack" },
  ModeratiePack: { emoji: "🛡️", files: ["addrole.txt","removerol.txt","ban.txt","unban.txt","clear.txt","clearuser.txt","help.txt","kick.txt","say.txt","userinfo.txt","serverinfo.txt","warn.txt","warns.txt","unwarn.txt"], prijs: 5.00, type: "pack" },
  UtilityPack: { emoji: "⚙️", files: ["ledenlijst.txt","aangenomen.txt","ontsla.txt","avatar.txt","bugmelden.txt","ping.txt","poll.txt","warn.txt","warns.txt","unwarn.txt"], prijs: 3.50, type: "pack" },
  WLP: { emoji: "🎉", files: ["plogs.txt","pwelkom.txt"], prijs: 12, type: "pack" },
  WarnsPack: { emoji: "📌", files: ["warn.txt","warns.txt","unwarn.txt"], prijs: 12, type: "pack" }
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
      Beschrijving voor ${key} komt hier.<br>
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

