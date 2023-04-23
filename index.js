const timestamp = new Date().getTime();
const crypto = require('crypto')
const config = {
  privateKey: "1df38ba604f84d68f7d485588ba7181c",
  publicKey: "20e2bd040bd2a256d72b024d3a28c2065fa9efc6",
};
const hash = crypto
  .createHash("md5")
  .update(timestamp + config.privateKey + config.publicKey)
  .digest("hex");
console.log("hash", hash);
console.log('timestamp',timestamp)