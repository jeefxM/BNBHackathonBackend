// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyNFTPool {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint256 amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(address(this).balance >= amount, "Insufficient balance");
        owner.transfer(amount);
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
