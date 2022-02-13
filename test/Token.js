const { expect } = require("chai");

describe("Coin contract - Deployment", function () {
    let coin;
    const name = "AUD Stablecoin";
    const symbol = "AUDC";
    const amountToMint = 10000;
    const amountToBurn = 10000;

    it("Should Deploy the contract", async function () {
        const contract = await ethers.getContractFactory("StableCoinToken");
        coin = await contract.deploy(name, symbol);
    });

    it("Should have same name as when created", async function () {
        expect(await coin.name()).to.equal(name);
    });

    it("Should have same symbol as when created", async function () {
        expect(await coin.symbol()).to.equal(symbol);
    });

    it("Should mint token of user", async function () {
        const [user] = await ethers.getSigners();
        await coin.mint(user.address,amountToMint)
        expect(await coin.balanceOf(user.address)).to.equal(amountToMint);
    });

    it("Should burn token", async function () {
        const [user] = await ethers.getSigners();
        await coin.burn(user.address,amountToBurn)
        expect(await coin.balanceOf(user.address)).to.equal(amountToMint-amountToBurn);
    });

    let vault;
    it("Should Deploy the Vault contract", async function () {
        const contract = await ethers.getContractFactory("Vault");
        vault = await contract.deploy(coin.address);
    });

    it("Should Make Deposit", async function () {
        const [user] = await ethers.getSigners();
        await vault.deposit(4000);
        expect(await coin.balanceOf(user.address)).to.equal(4000);
    });

    it("Should Make Repay", async function () {
        const [user] = await ethers.getSigners();
        await vault.withdraw(4000);
        expect(await coin.balanceOf(user.address)).to.equal(0);
    });

});