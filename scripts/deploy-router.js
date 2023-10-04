/* eslint-disable camelcase */
const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("UniswapV2Router02");

  const factoryAddress = "0x39ae8C3BcB45DC0A3D533AeA44873cCf3aef6515";
  const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const params = [factoryAddress, wethAddress];
  const deployedContract = await contractFactory.deploy(...params);

  console.log(`deployed UniswapV2Router   at: ${deployedContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
