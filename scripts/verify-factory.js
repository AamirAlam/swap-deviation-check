const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const owner = await ethers.getSigner();
  const params = [owner.address];
  const factoryAddress = "0x80c759B79878a22022C366871AE05a2D1D10Ec1B";

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
