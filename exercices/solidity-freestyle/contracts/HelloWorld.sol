// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract HelloWorld {

  string private text = "Hello World";

  function getText() public view returns(string memory) {
    console.log("teste");
    return (text);
  }
}