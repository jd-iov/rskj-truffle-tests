const Migrations = artifacts.require("Migrations");
const Create2 = artifacts.require("Create2");
const Recursive = artifacts.require("Recursive");
const ChainID = artifacts.require("ChainID");

const Sample = artifacts.require("Sample");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Create2);
  deployer.deploy(Recursive);
  deployer.deploy(Sample);
  deployer.deploy(ChainID);
};
