const { expect } = require("chai");

describe("Hello World contract", function () {
  it("Smart contract function should work correctly", async function () {
    const helloWorld = await ethers.deployContract("HelloWorld");

    expect(await helloWorld.getText()).to.equal("Hello World");
  });
});
