const hre = require("hardhat");

async function main() {
  // deployed addresses
  const usdcFaucet = "0xBD4B78B3968922e8A53F1d845eB3a128Adc2aA12";
  const daiFaucet = "0x30bDf1538e525f7f2c5b38F437E94DcE6b1E7bc5";

  const deployParam = ["USD Coin", "USDC", 6];

  await hre.run("verify:verify", {
    address: usdcFaucet,
    constructorArguments: [...deployParam],
  });

  console.log("usdcFaucet verired at:", usdcFaucet);

  await hre.run("verify:verify", {
    address: daiFaucet,
    constructorArguments: ["DAI Coin", "DAI", 18],
  });

  console.log("dai verired at:", usdcFaucet);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
