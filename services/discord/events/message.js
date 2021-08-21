const parseMessage = (message) => {
  const splitMessage = message.split(" ");
  const valid = splitMessage[0] === "!flh",
    command = splitMessage[1],
    args = splitMessage.slice(2);
  return { valid, command, args };
};

const handleMessageCreate = (message) => {
  console.log("Message created!", message);
  const { valid, command, args } = parseMessage(message);
  if (valid) {
    console.log(command, args);
  }
};

module.exports = {
  execute: handleMessageCreate,
};
