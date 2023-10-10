const hre = require("hardhat");

async function main() {
  const factoryAddress = "0xE26a086959C2cf9221E564D2e01Ac5EB1C6CfC4c";
  const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const proxyReader = "0xCF63299e788343A7431AE7428593EEc5560BE93F";
  const params = [factoryAddress, wethAddress, proxyReader];

  const routerAddress = "0xF4F761672d8B7a4BdC141261DB3B48b16a5CAf6C";

  await hre.run("verify:verify", {
    address: routerAddress,
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
