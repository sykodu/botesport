require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const MAIN_IMAGE = "https://cdn.discordapp.com/attachments/1495530975994712064/1512513218738913301/ChatGPT_Image_5_giu_2026_19_42_34.png?ex=6a245d34&is=6a230bb4&hm=baaf001b5a3608381669560b88fc05e5b4f9be2fa0d2f48caf980fb337c49d07&";
const GIF_IMAGE = "https://cdn.discordapp.com/attachments/1495530975994712064/1512511531982655518/gif_loop_veloce.gif?ex=6a245ba2&is=6a230a22&hm=247da6d320d2321403e473426b341406579f14014755ae7c280e04cc00468e9a&";

client.once("clientReady", async () => {
  console.log(`✅ ${client.user.tag} online`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!players") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🎮 MAIN PLAYERS")
      .setDescription(`
🇮🇹 ASTRSOF
🇮🇹 GLIERRA
🇮🇹 CUGI
🇮🇹 KAi
`)
      .setImage(MAIN_IMAGE)
      .setFooter({ text: "Aggiornato automaticamente" });

    await message.channel.send({ embeds: [embed] });
  }

  if (message.content === "!talent") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("⭐ TALENT PLAYERS")
      .setDescription(`
🇮🇹 GABRY
🇮🇹 LORE
🇮🇹 NEMMEN
🇮🇹 KINDERINO
🇮🇹 TUNDRA
`)
      .setImage(MAIN_IMAGE)
      .setFooter({ text: "Talent • Updated automatically" });

    await message.channel.send({ embeds: [embed] });
  }

    if (message.content === "!acc") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🏫 ACADEMY PLAYERS")
      .setDescription(`
🇮🇹 SBOXY
🇮🇹 SLUMP
🇮🇹 EMA
🇮🇹 24K
🇮🇹 ANDREAMAGIA
🇮🇹 IBRA
🇮🇹 FROM
🇮🇹 CHRIS
🇮🇹 DAXI
🇮🇹 RICKY
🇮🇹 AURA
🇮🇹 SCARACCA
🇮🇹 LILLO
🇮🇹 CHRISTIAN
🇮🇹 MAURO
🇮🇹 RAWL
🇮🇹 GXBRY
🇮🇹 MXXNDY
`)
      .setImage(MAIN_IMAGE)
      .setFooter({
        text: "Academy • Updated automatically"
      });

    await message.channel.send({
      embeds: [embed]
    });
  }
if (message.content === "!streamers") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🎥 STREAMERS")
      .setDescription(`
🇮🇹 Sikx64
🇮🇹 D3struction
`)
      .setImage(MAIN_IMAGE)
      .setFooter({ text: "Streamers • Updated automatically" });

    await message.channel.send({ embeds: [embed] });
  }

  if (message.content === "!payments") {
  const embed = new EmbedBuilder()
    .setColor("#5865F2")
    .setTitle("💰 PAYMENTS TALENT & MAIN")
    .setDescription(`
━━━━━━━━━━━━━━━━━━

⭐ **TALENT**

🏆 SOLO CC TOP 500 — **2€**
🏆 SOLO CC TOP 100 — **5€**
🏆 SOLO CC TOP 50 — **8€**
🏆 SOLO CC TOP 10 — **12€**

🥇 DIV 1 TOP 100 ALT — **6€**
🥇 DIV 1 TOP 50 ALT — **10€**
🥇 DIV 1 TOP 33 ALT — **13€**
🥇 DIV 1 TOP 10 ALT — **18€**

🥈 DIV 2 TOP 100 ALT — **4€**
🥈 DIV 2 TOP 50 ALT — **7€**
🥈 DIV 2 TOP 33 ALT — **10€**
🥈 DIV 2 TOP 10 ALT — **14€**

🎯 EVALUATION CUP TOP 100 — **4€**
🎯 EVALUATION CUP TOP 50 — **7€**
🎯 EVALUATION CUP TOP 33 — **10€**
🎯 EVALUATION CUP TOP 10 — **15€**

━━━━━━━━━━━━━━━━━━

🔥 **MAIN**

🏆 SOLO CC TOP 500 — **3€**
🏆 SOLO CC TOP 100 — **7€**
🏆 SOLO CC TOP 50 — **10€**
🏆 SOLO CC TOP 10 — **15€**

🥇 DIV 3 TOP 100 ALT — **8€**
🥇 DIV 3 TOP 50 ALT — **13€**
🥇 DIV 3 TOP 33 ALT — **17€**
🥇 DIV 3 TOP 10 ALT — **22€**

🥈 DIV 4 TOP 100 ALT — **6€**
🥈 DIV 4 TOP 50 ALT — **10€**
🥈 DIV 4 TOP 33 ALT — **13€**
🥈 DIV 4 TOP 10 ALT — **18€**

🔄 RELOAD TOP 50 — **5€**
🔄 RELOAD TOP 25 — **8€**
🔄 RELOAD TOP 10 — **12€**

🎯 EVALUATION CUP TOP 100 — **5€**
🎯 EVALUATION CUP TOP 50 — **8€**
🎯 EVALUATION CUP TOP 33 — **12€**
🎯 EVALUATION CUP TOP 10 — **18€**

━━━━━━━━━━━━━━━━━━

⚠️ ONLY OPEN ENTRIES ARE PAID
⚠️ PLAYERS MUST HAVE THE ORG TAG
⚠️ PAYMENTS ARE SUBJECT TO ACTIVITY REQUIREMENTS
🇪🇺 EU PLACEMENTS ONLY
`)
    .setImage(GIF_IMAGE)
    .setFooter({
      text: "Payments • Updated automatically"
    });

  await message.channel.send({ embeds: [embed] });
}

if (message.content === "!requirements") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("📋 REQUIREMENTS")
      .setDescription(`
👋 **Benvenuto nel Canale Requisiti!**

Se vuoi entrare nella nostra organizzazione, controlla il **PR minimo (EU PC)**
🏫 **ACADEMY**
• Minimo **200 PR**

⭐ **TALENT**
• Minimo **1K PR**

🔥 **MAIN**
• Minimo **2K PR**

Oppure puoi fare un **1v1** per dimostrare il tuo livello.

━━━━━━━━━━━━━━━━━━

📌 **Nota Operativa (Valutazione PR – SOFT)**

• I PR ottenuti in **Medio Oriente** valgono al **50%**
Esempio: 36.000 → 18.000

• I PR ottenuti in **NA (Nord America)** vengono divisi per **1,5**
Esempio: 45.000 → 30.000

━━━━━━━━━━━━━━━━━━

➡️ **Come Fare il Provino?**

🎮 **1V1**
Fai un provino 1v1. Se lo superi, entrerai nell'**Academy**.

🗺️ **Video TikTok**
Crea un video in cui fai freebuild oppure combatti contro qualcuno.
Spiega almeno **3 motivi validi** per cui dovresti entrare nell'organizzazione.

━━━━━━━━━━━━━━━━━━

🌟 **Vuoi Supportare la Community?**

⭐ **VIP+ a vita** — **7 €**

━━━━━━━━━━━━━━━━━━

🎥 **CONTENT CREATOR**
• 10K–20K visualizzazioni mensili
• Pubblicazioni costanti
• Buona qualità video
• Attivo su YouTube, TikTok o Instagram

📡 **STREAMER**
• 20–30 spettatori medi
• Programmazione regolare delle live
• Community attiva
• Buona qualità audio/video
• Comportamento professionale

━━━━━━━━━━━━━━━━━━

📩 Apri un 🎫 **ticket** se soddisfi uno dei requisiti richiesti.

`)
      .setImage(GIF_IMAGE)
      .setFooter({ text: "Requirements • Updated automatically" });

    await message.channel.send({ embeds: [embed] });
  }

  if (message.content === "!verifica") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🤖 Verifica rapida")
      .setDescription(
        "Per accedere al server devi completare una verifica veloce.\n\n" +
        "Clicca il pulsante qui sotto per ricevere il ruolo **Verificato**.\n\n" +
        "⏱️ Richiede meno di **5 secondi**."
      );

    const button = new ButtonBuilder()
      .setCustomId("verify_button")
      .setLabel("✅ Verifica istantanea")
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().addComponents(button);

    await message.channel.send({
      embeds: [embed],
      components: [row]
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;
  if (interaction.customId !== "verify_button") return;

  const role = interaction.guild.roles.cache.get(process.env.VERIFIED_ROLE_ID);

  if (!role) {
    return interaction.reply({
      content: "❌ Ruolo Verificato non trovato.",
      ephemeral: true
    });
  }

  await interaction.member.roles.add(role);

  await interaction.reply({
    content: "✅ Verifica completata! Ora hai accesso al server.",
    ephemeral: true
  });
});

client.login(process.env.DISCORD_TOKEN);