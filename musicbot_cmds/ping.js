const { zokou } = require("../keizzah/zokou");
const speed = require("performance-now");

// Function for delay simulation
function delay(ms) {
  console.log(`⏱️ delay for ${ms}ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

// New loading animation with different symbols and larger progress bar
async function loading(dest, zk) {
  const lod = [
    "⬛⬛⬜⬜⬜⬜⬛⬛꧁20%꧂",
    "⬛⬛⬛⬛⬜⬜⬜⬜꧁40%꧂",
    "⬜⬜⬛⬛⬛⬛⬜⬜꧁60%꧂",
    "⬜⬜⬜⬜⬛⬛⬛⬛꧁80%꧂",
    "⬛⬛⬜⬜⬜⬜⬛⬛꧁100%꧂",
    "*L҉O҉A҉D҉I҉N҉G҉ D҉O҉N҉E҉ ᵗʱᵃᵑᵏᵧₒᵤ ⚔️🗡️*"
  ];

  let { key } = await zk.sendMessage(dest, { text: 'Loading Please Wait' });

  for (let i = 0; i < lod.length; i++) {
    await zk.sendMessage(dest, { text: lod[i], edit: key });
    await delay(500); // Adjust the speed of the animation here
  }
}

// Command: Ping
zokou(
  {
    nomCom: 'ping',
    aliases: ['speed', 'latency'],
    desc: 'To check bot response time',
    Categorie: 'system',
    reaction: '⚡',
    fromMe: 'true',
  },
  async (dest, zk) => {
    // Call the new loading animation without delaying the rest of the bot
    const loadingPromise = loading(dest, zk);

    // Generate 3 ping results with large random numbers for a more noticeable effect
    const pingResults = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10000 + 1000));

    // Create larger font for ping results (using special characters for a bigger look)
    const formattedResults = pingResults.map(ping => `KARL-MD SPEED  ${ping} 𝐌/𝐒  `);

    // Send the ping results with the updated text and format
    await zk.sendMessage(dest, {
      text: "KARL MD",
      contextInfo: {
        externalAdReply: {
          title: "KARL MD",
          body: `${formattedResults.join(" | ")}`,
          thumbnailUrl: "https://files.catbox.moe/kd7957.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

    console.log("Ping results sent successfully with new loading animation and formatted results!");

    // Ensure loading animation completes after the ping results
    await loadingPromise;
  }
);

// React function if needed for further interaction
function react(dest, zk, msg, reaction) {
  zk.sendMessage(dest, { react: { text: reaction, key: msg.key } });
}
