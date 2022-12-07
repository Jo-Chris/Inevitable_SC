
import {ethers} from "hardhat";
async function main() {
    const TestContract = await ethers.getContractFactory("TestContract");

    const testNft = await TestContract.deploy();
    const TestNFT = await testNft.deployed();

    console.log("Implementation deployed to:", TestNFT.address)
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
