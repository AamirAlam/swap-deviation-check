const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const owner = await ethers.getSigner();
  const params = [owner.address];
  const factoryAddress = "0x39ae8C3BcB45DC0A3D533AeA44873cCf3aef6515";

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
