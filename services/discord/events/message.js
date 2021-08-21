const parseMessage = (message) => {
  const splitMessage = message.split(" ");
  const valid = splitMessage[0] === "!flh",
    command = splitMessage[1],
    args = splitMessage.slice(2);
  return { valid, command, args };
};

const handleMessage = (message) => {
  console.log("New message: ", message);
};

module.exports = {
  execute: handleMessage,
};
