const handleReady = (client, cb) => {
  console.log(
    `Logged in as ${client.user.username},${
      client.isReady() ? "" : " not"
    } ready`
  );
  console.log("Servicing:");

  const guilds = client.guilds.cache;
  let index = 0;
  guilds.each((guild) => {
    console.log(`-- ${index}: ${guild.name} (ID: ${guild.id})`);
    console.log(`Channel number: ${[...guild.channels.cache].length}`);
    index++;
  });
  console.log(`Total servers: ${[...guilds].length}`);
  cb(client);
};

module.exports = {
  once: true,
  execute: handleReady,
};
