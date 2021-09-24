const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const contractFile = require("./compile.js");

const provider = new HDWalletProvider(
  "xxx",
  "yyy"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web.eth.Contract(contractFile.abi)
    .deploy({ data: contractFile.evm.bytecode.object })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);
};

deploy();
