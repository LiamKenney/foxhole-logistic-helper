const handleInteractionCreate = (interaction) => {
  console.log("New interaction: ", interaction);
};

module.exports = {
  execute: handleInteractionCreate,
};
