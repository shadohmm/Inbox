const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'praise usage skill spare bomb result license early rotate prepare oval ritual',
  'https://rinkeby.infura.io/v3/2505572d89894a2a905fbf971f975639'
);
const web3 = new Web3(provider);

const deploy = async()=>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deplou from account',accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000', from:accounts[0]});
  console.log('Contract deployed to ', result.options.address);
}
deploy();
