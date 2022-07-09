// Javascript file to implement
// the above approach
const path = require("path");
const fs = require("fs");
const solc = require("solc");

// remember to change line 8 to your
// own file path. Make sure you have your
// own file name or contract name in line
// 13, 28 and 30 as well.

const examplePath = path.resolve(__dirname, "contracts", "example.sol");
const source = fs.readFileSync(examplePath, "utf-8");

var input = {
	language: 'Solidity',
	sources: {
		'example.sol': {
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
var interface = output.contracts["example.sol"].Example.abi;
// console.log(`interface`, interface)

var bytecode = output.contracts["example.sol"].Example.evm.bytecode.object;
// console.log(`bytecode: `, bytecode)

module.exports = { interface, bytecode };
