const { Client, Intents } = require("discord.js");
const { readdirSync } = require("fs");

const addEvents = (client) => {
  console.log(__dirname);
  const eventFiles = readdirSync("./services/discord/events").filter((file) =>
    file.endsWith(".js")
  );

  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(file, (...args) => event.execute(...args));
    } else {
      client.on(file, (...args) => event.execute(...args));
    }
  }
  return client;
};

const clientSetup = (token) => {
  return new Promise((resolve, reject) => {
    let client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
    client = addEvents(client);
    client.login(token).catch((err) => reject("Error with login: ", err));
  });
};

module.exports = clientSetup;
