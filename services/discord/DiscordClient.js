const { Client, Intents } = require("discord.js");
const { readdirSync } = require("fs");

const addEvents = (client, cb) => {
  const eventFiles = readdirSync("./services/discord/events").filter((file) =>
    file.endsWith(".js")
  );

  for (const file of eventFiles) {
    const eventName = file.split(".").slice(0, -1).join(".");
    const event = require(`./events/${eventName}`);
    console.log(`Adding eventListener for ${eventName}`, Boolean(event.once));
    if (event.once) {
      client.once(eventName, (...args) => event.execute(...args, cb));
    } else {
      client.on(eventName, (...args) => event.execute(...args));
    }
  }
  return client;
};

const clientSetup = (token) => {
  return new Promise((resolve, reject) => {
    let client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });
    client = addEvents(client, resolve);
    client.login(token).catch((err) => reject("Error with login: ", err));
  });
};

module.exports = clientSetup;
