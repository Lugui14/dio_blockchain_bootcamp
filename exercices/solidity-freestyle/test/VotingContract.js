const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Voting contract", function () {
  async function deploy() {
    const VotingContract = await ethers.getContractFactory("VotingContract");
    const votingContract = await VotingContract.deploy(["Trump", "Kamala"]);

    return { votingContract };
  }

  it("Should return 0 votes", async function () {
    const { votingContract } = await loadFixture(deploy);

    expect(await votingContract.totalVotesFor("Kamala")).to.equal(0);
    expect(await votingContract.totalVotesFor("Trump")).to.equal(0);
  });

  it("Should vote in Trump", async function () {
    const { votingContract } = await loadFixture(deploy);

    await votingContract.voteForCandidate("Trump");
    expect(await votingContract.totalVotesFor("Trump")).to.equal(1);
  });

  it("Should vote in Kamala", async function () {
    const { votingContract } = await loadFixture(deploy);

    await votingContract.voteForCandidate("Kamala");
    expect(await votingContract.totalVotesFor("Kamala")).to.equal(1);
  });
});
