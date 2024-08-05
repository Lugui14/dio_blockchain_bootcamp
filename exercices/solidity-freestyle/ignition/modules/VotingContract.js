const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingContractModule", (m) => {
  const candidates = m.getParameter("candidates", ["Trump", "Kamala"]);

  const votingContract = m.contract("VotingContract", [candidates], {});

  return { votingContract };
});
