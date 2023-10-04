const { ethers } = require("hardhat");

async function main() {
  const USDC = await ethers.getContractFactory("MintableERC20");

  // Deploying faucet contract
  const usdc = await USDC.deploy("USD Coin", "USDC", 6);
  await usdc.deployed();
  console.log("USDC deployed:", usdc.address);

  const DAI = await ethers.getContractFactory("MintableERC20");
  // Deploying sleep contract
  const weth = await DAI.deploy("DAI Coin", "DAI", 18);
  await weth.deployed();
  console.log("DAI Faucet:", weth.address);
  // const sleepContract = sleep.address;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
