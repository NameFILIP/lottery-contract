const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const contractFile = require("./compile.js");

const mnemonicPhrase =
  "xxx";

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  providerOrUrl:
    "yyy",
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(contractFile.abi)
    .deploy({ data: `0x${contractFile.evm.bytecode.object}` })
    .send({
      from: accounts[0],
      gas: 4700000,
    });

  console.log("Interface", contractFile.abi);
  console.log("Contract deployed to", result.options.address);
};

deploy();

// Deployed to 0x6A01d3578a1A804f9510daE5Be1a8A8e3CEF09f3
