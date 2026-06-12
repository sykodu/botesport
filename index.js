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
const JEEZ_IMAGE = "https://cdn.discordapp.com/attachments/1459911803709558928/1514879309909590026/jeez.png?ex=6a2cf8cc&is=6a2ba74c&hm=4ebc013735b92441ce14096980a1fe9987b0bc8b1cd7d250f4bae7602d509855&";

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
🇮🇹 (No name)
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
🇮🇹 CUGI
🇮🇹 LORE
🇮🇹 TEOX
🇮🇹 TUNDRA
🇮🇹 PALAZZ
🇮🇹 DOMENICO
🇮🇹 HAPU
🇮🇹 SIKX64
🇮🇹 FEDE
🇮🇹 IBRA
🇮🇹 CHRIS
🇮🇹 FRED
🇮🇹 MAURO
🇮🇹 SBOXY
🇮🇹 BANANALEPRO
🇮🇹 MAGIA
🇮🇹 KRONOSFV
🇮🇹 S7TTIA
🇮🇹 RAWL
🇮🇹 ANDROS
🇮🇹 DAXI15
🇮🇹 EMA
🇮🇹 FREE24K
🇮🇹 LILLO
🇮🇹 NAYT
🇮🇹 RICKY
🇮🇹 SMARK
🇮🇹 TEK
🇮🇹 GXBRY
🇮🇹 YESSER
🇮🇹 VOYRA
`)
      .setImage(MAIN_IMAGE)
      .setFooter({ text: "Academy • Updated automatically" });

    await message.channel.send({ embeds: [embed] });
  }

  if (message.content === "!streamers") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🎥 STREAMERS")
      .setDescription(`
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
🔥 **MAIN**

🏆 SOLO CC TOP 500 — **2€**
🏆 SOLO CC TOP 100 — **4€**
🏆 SOLO CC TOP 50 — **7€**
🏆 SOLO CC TOP 10 — **10€**

🥇 DIV 1 TOP 100 ALT — **8€**
🥇 DIV 1 TOP 50 ALT — **13€**
🥇 DIV 1 TOP 33 ALT — **17€**
🥇 DIV 1 TOP 10 ALT — **22€**

🥈 DIV 2 TOP 100 ALT — **6€**
🥈 DIV 2 TOP 50 ALT — **10€**
🥈 DIV 2 TOP 33 ALT — **13€**
🥈 DIV 2 TOP 10 ALT — **18€**

🎯 EVALUATION CUP TOP 1000 — **5€**
🎯 EVALUATION CUP TOP 500 — **8€**
🎯 EVALUATION CUP TOP 330 — **12€**
🎯 EVALUATION CUP TOP 100 — **18€**

━━━━━━━━━━━━━━━━━━

⭐ **TALENT**

🏆 SOLO CC TOP 500 — **1€**
🏆 SOLO CC TOP 100 — **3€**
🏆 SOLO CC TOP 50 — **6€**
🏆 SOLO CC TOP 10 — **9€**

🥇 DIV 3 TOP 100 ALT — **3€**
🥇 DIV 3 TOP 50 ALT — **5€**
🥇 DIV 3 TOP 33 ALT — **7€**
🥇 DIV 3 TOP 10 ALT — **13€**

🥈 DIV 4 TOP 100 ALT — **3€**
🥈 DIV 4 TOP 50 ALT — **5€**
🥈 DIV 4 TOP 33 ALT — **7€**
🥈 DIV 4 TOP 10 ALT — **10€**

🔄 RELOAD TOP 50 — **5€**
🔄 RELOAD TOP 25 — **8€**
🔄 RELOAD TOP 10 — **12€**

━━━━━━━━━━━━━━━━━━

⚠️ ONLY OPEN ENTRIES ARE PAID
⚠️ PLAYERS MUST HAVE THE ORG TAG
⚠️ PAYMENTS ARE SUBJECT TO ACTIVITY REQUIREMENTS
🇪🇺 EU PLACEMENTS ONLY
💸 MINIMUM WITHDRAWAL: 30€
📆 PLAYERS CAN START EARNING ONLY AFTER 7 DAYS OF ACTIVITY IN THE TEAM
`)
      .setImage(JEEZ_IMAGE)
      .setFooter({ text: "Payments • Updated automatically" });

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
• Fare **1v1** aprendo ticket

⭐ **TALENT**
• Minimo **1K PR**

🔥 **MAIN**
• Minimo **3K PR**

━━━━━━━━━━━━━━━━━━

➡️ **Come Fare il Provino?**

🎮 **1V1**
Fai un provino 1v1. Se lo superi, entrerai nell'**Academy**.

🗺️ **Video TikTok**
Crea un video in cui fai freebuild oppure combatti contro qualcuno.
Spiega almeno **3 motivi validi** per cui dovresti entrare nell'organizzazione.

━━━━━━━━━━━━━━━━━━

🌟 **Vuoi Supportare la Community?**

⭐ **VIP+ a vita** — **5 €**

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
      .setImage(JEEZ_IMAGE)
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