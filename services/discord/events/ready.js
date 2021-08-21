const handleReady = (client, cb) => {
  console.log(`Logged in as ${client.user.username}`);
  console.log("Servicing:");

  const guilds = client.guilds.cache;
  let index = 0;
  guilds.each((guild) => {
    console.log(`${index}: ${guild.name} (${guild.id})`, guild.available);
    index++;
  });
  console.log(`Total: ${[...guilds].length}`);
  cb(client);
};

module.exports = {
  once: true,
  execute: handleReady,
};
