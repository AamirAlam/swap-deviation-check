const hre = require("hardhat");

async function main() {
  const factoryAddress = "0x80c759B79878a22022C366871AE05a2D1D10Ec1B";
  const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const proxyReader = "0xCF63299e788343A7431AE7428593EEc5560BE93F";
  const params = [factoryAddress, wethAddress, proxyReader];

  const routerAddress = "0x637CcE1E3ca5C89686325a8c15932a754989e85f";

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
