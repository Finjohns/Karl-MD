const { zokou } = require("../framework/zokou");
const speed = require("performance-now");

// Function to simulate delay
function delay(ms) {
  console.log(`⏱️ Delay for ${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Format the uptime into a human-readable string
function runtime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = Math.floor(seconds % 60);

  return `${hours}h ${minutes}m ${secondsLeft}s`;
}

// Zokou command for checking uptime
zokou({
  nomCom: 'uptime',
  aliases: ['runtime', 'running'],
  desc: 'To check runtime',
  Categorie: 'system',
  reaction: '⚔️',
  fromMe: 'true',
}, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;

  // Get bot's runtime
  const botUptime = process.uptime(); // Get the bot uptime in seconds

  // Send uptime information to the user
  await zk.sendMessage(dest, {
    text: "🗡️ Karl Md ⚔️",
    contextInfo: {
      externalAdReply: {
        title: "🗡️ KARL-MD ⚔️ UPTIME",
        body: `Bot Uptime: ${runtime(botUptime)}`, // Format the uptime before sending
        thumbnailUrl: "https://files.catbox.moe/kd7957.jpg", // Replace with your bot profile photo URL
        sourceUrl: "https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N", // Your channel URL
        mediaType: 1,
        showAdAttribution: true, // Verified badge
      },
    },
  });

  console.log("Runtime results sent successfully with new loading animation and formatted results!");

  // Ensure loading animation completes after sending the uptime message
  await delay(ms);  // Await the delay to simulate the loading animation
});

// React function to allow interaction after sending message
function react(dest, zk, msg, reaction) {
  zk.sendMessage(dest, { react: { text: reaction, key: msg.key } });
}
