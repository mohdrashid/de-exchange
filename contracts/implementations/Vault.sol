// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IVault.sol";
import "./Coin.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Vault is IVault {

    StableCoinToken token;
    mapping(address=>Vault) vaults;

    constructor(address coinContract){
        console.log("Contract address %s", coinContract);
        token = StableCoinToken(coinContract);
    }

    uint256 public ETHPrice = 4000;

    /**
    @notice Allows a user to deposit ETH collateral in exchange for some amount of stablecoin
    @param amountToDeposit  The amount of ether the user sent in the transaction
     */
    function deposit(uint256 amountToDeposit) external override {
        require(amountToDeposit!=0);
        Vault storage vault = vaults[msg.sender];
        uint256 debtAmount = amountToDeposit;
        require(token.mint(msg.sender, debtAmount));
        vault.collateralAmount += amountToDeposit;
        vault.debtAmount += debtAmount;
        emit Deposit(amountToDeposit, debtAmount);
    }
    
    /**
    @notice Allows a user to withdraw up to 100% of the collateral they have on deposit
    @dev This cannot allow a user to withdraw more than they put in
    @param repaymentAmount  the amount of stablecoin that a user is repaying to redeem their collateral for.
     */
    function withdraw(uint256 repaymentAmount) external override {
        require(repaymentAmount!=0);
        Vault storage vault = vaults[msg.sender];
        require(repaymentAmount<=vault.debtAmount);
        uint256 paidAmount = repaymentAmount;
        require(token.burn(msg.sender, paidAmount));
        vault.collateralAmount -=paidAmount;
        vault.debtAmount -= repaymentAmount;
    }
    
    /**
    @notice Returns the details of a vault
    @param userAddress  the address of the vault owner
    @return vault  the vault details
     */
    function getVault(address userAddress) external view override returns(Vault memory vault) {
        return vaults[userAddress];
    }
    
    /**
    @notice Returns an estimate of how much collateral could be withdrawn for a given amount of stablecoin
    @param repaymentAmount  the amount of stable coin that would be repaid
    @return collateralAmount the estimated amount of a vault's collateral that would be returned 
     */
    function estimateCollateralAmount(uint256 repaymentAmount) external view override returns(uint256 collateralAmount) {

    }
    
    /**
    @notice Returns an estimate on how much stable coin could be minted at the current rate
    @param depositAmount the amount of ETH that would be deposited
    @return tokenAmount  the estimated amount of stablecoin that would be minted
     */
    function estimateTokenAmount(uint256 depositAmount) external view override returns(uint256 tokenAmount) {

    }
}
