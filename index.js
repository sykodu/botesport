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
🇮🇹 Obito
🇮🇹 Glierra
🇮🇹 Cugi
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
🇮🇹 SIKX
🇮🇹 GABRY
🇮🇹 CUGI
🇮🇹 BALLARINO
🇮🇹 LORE
🇮🇹 NEMMEN
🇮🇹 KINDERINO
🇮🇹 TUNDRA
🇮🇹 NXZY
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

  if (message.content === "!requirements") {
    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("📋 REQUIREMENTS")
      .setDescription(`
👋 **Welcome to the Requirements Channel!**

If you want to join our organization, please check the minimum **PR (EU PC)** or **Elite Tokens ranking** required for each category.

🏫 **ACADEMY**
• Minimum **200 PR**

⭐ **TALENT**
• Minimum **1K PR**

🔥 **MAIN**
• Minimum **2K PR**

Or 1v1 to prove you are good

━━━━━━━━━━━━━━━━━━

📌 **Operational Note (PR Assessment – FataL)**

• PR earned in **Middle East** counts at **50%**
  Example: 36,000 → 18,000

• PR earned in **NA** is divided by **1.5**
  Example: 45,000 → 30,000

━━━━━━━━━━━━━━━━━━

➡️ **How to Try Out?**

🎮 **1V1**
Do Tryout 1V1. If you pass, you join Academy.

🗺️ **Video TikTok**
Create a video where you freebuild or fight someone.
Explain at least **3 valid reasons** why you should join the organization.

━━━━━━━━━━━━━━━━━━

🌟 **Want to Support the Community?**

⭐ VIP+ Lifetime — €7

━━━━━━━━━━━━━━━━━━

🎥 **CONTENT CREATOR**
• 100K–200K monthly views
• Consistent uploads
• Good video quality
• Active on YouTube, TikTok or Instagram

📡 **STREAMER**
• 20–30 average viewers
• Regular streaming schedule
• Active community
• Good audio/video quality
• Professional behaviour

━━━━━━━━━━━━━━━━━━

📩 Open a 🎫｜ticket if you meet any requirement.
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