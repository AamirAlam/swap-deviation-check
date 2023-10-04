const hre = require("hardhat");

async function main() {
  const factoryAddress = "0x39ae8C3BcB45DC0A3D533AeA44873cCf3aef6515";
  const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const params = [factoryAddress, wethAddress];

  const routerAddress = "0x562760C46a4A1d3fBB67199ae43848B90a81F35c";

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
