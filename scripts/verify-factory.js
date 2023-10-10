const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const owner = await ethers.getSigner();
  const params = [owner.address];
  const factoryAddress = "0xE26a086959C2cf9221E564D2e01Ac5EB1C6CfC4c";

  await hre.run("verify:verify", {
    address: factoryAddress,
    constructorArguments: [...params],
  });

  console.log("UniswapV2Factory verired at:", factoryAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
