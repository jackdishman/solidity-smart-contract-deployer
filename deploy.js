const HDWalletProvider = require("@truffle/hdwallet-provider");

// Web3 constructor function.
const Web3 = require("web3");

// Get bytecode and ABI after compiling
// solidity code.
const { interface, bytecode } = require("./compile");

const mnemonic = "12 seed phrase"
const infuraURL = "Enter infura URL"

const provider = new HDWalletProvider(mnemonic, infuraURL);

// Create an instance of Web3 and pass the
// provider as an argument.
const web3 = new Web3(provider);

web3.eth.estimateGas({ data: bytecode }).then(res => {
	console.log(res)
});


const deploy = async () => {
	// Get access to all accounts linked to mnemonic
	// Make sure you have metamask installed.
	const accounts = await web3.eth.getAccounts();

	console.log("Attempting to deploy from account", accounts[0]);
	try {
		// Pass initial gas and account to use in the send function
		const result = await new web3.eth.Contract(interface)
			.deploy({ data: bytecode })
			.send({ from: accounts[0] })
			.on(`receipt`, (res) => {
				console.log(res)
			})

		console.log("Contract deployed to", result.options.address);

	} catch (err) {
		console.log(err)
	}
	finally {
		console.log(`done`)
	}
};

// call the method
deploy();