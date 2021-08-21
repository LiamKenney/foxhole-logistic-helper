"use strict";
const config = require("./config.json");
let client = null;

const main = async () => {
  const clientSetup = require("./services/discord/DiscordClient");
  client = await clientSetup(config.TOKEN);
  console.log(`Client is ${client.isReady() ? "" : "not"} ready.`);
  console.log(client.guilds.cache);
};
main();
