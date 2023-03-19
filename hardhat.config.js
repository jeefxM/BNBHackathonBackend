require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    BSCTestnet: {
      url: "https://billowing-white-night.bsc-testnet.discover.quiknode.pro/b7def523f49fc61a08e0c47d191e2b8066dc9649/",
      accounts: [
        "4eb41b565053fbda4207818dc5c8d2e5f41b3718cafa7610c3911532caa22886",
      ],
    },
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/stjSfd90MM9oSNHFdC2aZGR9uSaa2XjZ",
      accounts: [
        "4eb41b565053fbda4207818dc5c8d2e5f41b3718cafa7610c3911532caa22886",
      ],
    },
  },
};
