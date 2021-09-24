const path = require("path");
const fs = require("fs");
const solc = require('solc')

const contractPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const contractName = 'Lottery.sol'

var input = {
    language: 'Solidity',
    sources: {
      [contractName]: {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = output.contracts[contractName].Lottery;