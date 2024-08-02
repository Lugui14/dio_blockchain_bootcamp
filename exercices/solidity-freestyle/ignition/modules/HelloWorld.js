const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("HelloWorldModule", (m) => {
  const helloWorld = m.contract("HelloWorld", [], {});

  return { helloWorld };
});
