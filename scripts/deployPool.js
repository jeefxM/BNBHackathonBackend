const { ethers } = require("hardhat");

async function main() {
  const myNFTPool = await ethers.getContractFactory("MyNFTPool");
  const myNFTPoolContract = await myNFTPool.deploy();

  await myNFTPoolContract.deployed();

  console.log("Contract deployed to:", myNFTPoolContract.address);

  const contractBalance = await myNFTPoolContract.getContractBalance();
  console.log("Contract balance is: ", contractBalance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
