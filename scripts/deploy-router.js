/* eslint-disable camelcase */
const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("UniswapV2Router02");

  const factoryAddress = "0x80c759B79878a22022C366871AE05a2D1D10Ec1B";
  const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const proxyReader = "0xCF63299e788343A7431AE7428593EEc5560BE93F";
  const params = [factoryAddress, wethAddress, proxyReader];
  const deployedContract = await contractFactory.deploy(...params);

  console.log(`deployed UniswapV2Router   at: ${deployedContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
