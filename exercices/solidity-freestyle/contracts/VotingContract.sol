// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract VotingContract {

    mapping (string => uint256) public votesReceived;

    string[] public candidateList;

    constructor (string[] memory candidates) {
        candidateList = candidates;
    }

    function totalVotesFor(string memory candidate) view public returns (uint256) {
        require(validCandidate(candidate));

        return votesReceived[candidate];
    }

    function voteForCandidate(string memory candidate) public {
        require(validCandidate(candidate));

        votesReceived[candidate] += 1;
    }

    function validCandidate(string memory candidate) view public returns (bool) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (
                keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(candidate))
            ) {
                return true;
            }
        }

        return false;
    }

}